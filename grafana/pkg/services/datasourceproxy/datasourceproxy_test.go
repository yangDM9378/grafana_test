package datasourceproxy

import (
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"net/http/httptest"
	"net/url"
	"testing"

	"github.com/grafana/grafana/pkg/infra/log"
	"github.com/grafana/grafana/pkg/plugins"
	contextmodel "github.com/grafana/grafana/pkg/services/contexthandler/model"
	"github.com/grafana/grafana/pkg/services/datasources"
	"github.com/grafana/grafana/pkg/web"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"
)

func TestDataProxy(t *testing.T) {
	t.Run("extractProxyPath", func(t *testing.T) {
		testCases := []struct {
			originalRawPath string
			exp             string
		}{
			{
				"/api/datasources/proxy/1",
				"",
			},
			{
				"/api/datasources/proxy/1/some/thing",
				"some/thing",
			},
			{
				"/api/datasources/proxy/54/api/services/afsd%2Fafsd/operations",
				"api/services/afsd%2Fafsd/operations",
			},
			{
				"/api/datasources/proxy/uid/26MI0wZ7k",
				"",
			},
			{
				"/api/datasources/proxy/uid/26MI0wZ7k/some/thing",
				"some/thing",
			},
			{
				"/api/datasources/proxy/uid/pUWo-no4k/search",
				"search",
			},
			{
				"/api/datasources/proxy/uid/pUWo_no4k/search",
				"search",
			},
			{
				"/api/datasources/proxy/uid/26MI0wZ7k/api/services/afsd%2Fafsd/operations",
				"api/services/afsd%2Fafsd/operations",
			},
		}
		for _, tc := range testCases {
			t.Run("Given raw path, should extract expected proxy path", func(t *testing.T) {
				assert.Equal(t, tc.exp, extractProxyPath(tc.originalRawPath))
			})
		}
	})
}

// Tests request to datasource proxy service
func TestDatasourceProxy_proxyDatasourceRequest(t *testing.T) {
	tcs := []struct {
		name             string
		dsURL            string
		expectedErrorMsg string
	}{
		{
			name:             "Empty datasource URL will return a 400 HTTP status code",
			dsURL:            "",
			expectedErrorMsg: "validation of data source URL \"\" failed: empty URL string",
		},
		{
			name:             "Invalid datasource URL will return a 400 HTTP status code",
			dsURL:            "://host/path",
			expectedErrorMsg: "validation of data source URL \"://host/path\" failed: parse \"://host/path\": missing protocol scheme",
		},
	}
	for _, tc := range tcs {
		t.Run(tc.name, func(t *testing.T) {
			pluginID := datasources.DS_PROMETHEUS

			pluginStore := &plugins.FakePluginStore{PluginList: []plugins.PluginDTO{
				{JSONData: plugins.JSONData{ID: pluginID}},
			}}

			p := DataSourceProxyService{
				PluginRequestValidator: &fakePluginRequestValidator{},
				pluginStore:            pluginStore,
			}

			responseRecorder := httptest.NewRecorder()
			c := &contextmodel.ReqContext{
				Context: &web.Context{
					Req:  &http.Request{URL: &url.URL{}},
					Resp: web.NewResponseWriter("GET", responseRecorder),
				},
				Logger: log.NewNopLogger(),
			}

			p.proxyDatasourceRequest(c, &datasources.DataSource{
				Type: pluginID,
				URL:  tc.dsURL,
			})

			resp := responseRecorder.Result()
			body := resp.Body

			b, err := io.ReadAll(body)
			require.NoError(t, err)
			require.NoError(t, body.Close())

			jsonBody := make(map[string]string)
			err = json.Unmarshal(b, &jsonBody)
			require.NoError(t, err)

			require.Equal(t, http.StatusBadRequest, resp.StatusCode)
			require.Equal(t, fmt.Sprintf("Invalid data source URL: %q", tc.dsURL), jsonBody["message"])
			require.Equal(t, tc.expectedErrorMsg, jsonBody["error"])
		})
	}
}

type fakePluginRequestValidator struct{}

func (rv *fakePluginRequestValidator) Validate(_ string, _ *http.Request) error {
	return nil
}
