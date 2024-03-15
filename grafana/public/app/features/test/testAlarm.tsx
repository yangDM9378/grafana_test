import React from 'react';
import axios from 'axios';

const CreateAlertRuleForm = () => {
  const alertRule = {
    title: 'TEST-API_1',
    ruleGroup: 'API',
    folderUID: 'FOLDER',
    noDataState: 'OK',
    execErrState: 'OK',
    for: '5m',
    orgId: 1,
    uid: '',
    condition: 'B',
    annotations: {
      summary: 'test_api_1'
    },
    labels: {
      API: 'test1'
    },
    data: [
      {
        refId: 'A',
        queryType: '',
        relativeTimeRange: {
          from: 600,
          to: 0
        },
        datasourceUid: 'XXXXXXXXX-XXXXXXXXX-XXXXXXXXXX',
        model: {
          expr: 'up',
          hide: false,
          intervalMs: 1000,
          maxDataPoints: 43200,
          refId: 'A'
        }
      },
      {
        refId: 'B',
        queryType: '',
        relativeTimeRange: {
          from: 0,
          to: 0
        },
        datasourceUid: '-100',
        model: {
          conditions: [
            {
              evaluator: {
                params: [6],
                type: 'gt'
              },
              operator: {
                type: 'and'
              },
              query: {
                params: ['A']
              },
              reducer: {
                params: [],
                type: 'last'
              },
              type: 'query'
            }
          ],
          datasource: {
            type: '__expr__',
            uid: '-100'
          },
          hide: false,
          intervalMs: 1000,
          maxDataPoints: 43200,
          refId: 'B',
          type: 'classic_conditions'
        }
      }
    ]
  };

  const createAlertRule = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/v1/provisioning/alert-rules', alertRule);
      console.log('Created alert rule:', response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <button onClick={createAlertRule}>Create Alert Rule</button>
    </div>
  );
};

export default CreateAlertRuleForm;