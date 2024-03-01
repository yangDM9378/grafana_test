"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[1344],{76677:(e,s,a)=>{a.r(s),a.d(s,{ListPublicDashboardPage:()=>L,default:()=>z});a(68404);var i,t,n,d,l=a(37417),r=a(52423),c=a(6663),h=a(25004),o=a(16755),b=a(81691),x=a(21888),p=a(32889),u=a(99500),j=a(51028),m=a(98817),f=a(8006),g=a(46782),w=a(59196),v=a(41519),k=a(16371),$=a(64850),N=a(97801),T=a(45916);const I=()=>{var e,s,a;const{width:I}=(0,c.Z)(),y=I<=480,L=(0,o.l4)(),z=(0,o.wW)((()=>function(e,s){return{fetchingSpinner:r.css`
      display: flex;
      justify-content: end;
    `,link:r.css`
      color: ${e.colors.primary.text};
      text-decoration: underline;
      margin-right: ${e.spacing()};
    `,nameTh:r.css`
      width: 20%;
    `,titleTd:r.css`
      max-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    `,buttonGroup:r.css`
      justify-content: ${s?"space-between":"end"};
    `,orphanedTitle:r.css`
      display: flex;
      align-items: center;
      gap: ${e.spacing(1)};

      p {
        margin: ${e.spacing(0)};
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    `,orphanedInfoIcon:r.css`
      color: ${e.colors.text.link};
    `}}(L,y))),{data:E,isLoading:J,isFetching:P}=(0,v.WJ)(),C=h.wl.pages.PublicDashboards,D=w.Vt.hasAccess($.bW.DashboardsPublicWrite,(0,k.RN)()),U=y?"sm":"md";return(0,T.jsx)(l.T.Contents,{isLoading:J,children:(0,T.jsx)("div",{className:"page-action-bar",children:(0,T.jsxs)("table",{className:"filter-table",children:[(0,T.jsx)("thead",{children:(0,T.jsxs)("tr",{children:[(0,T.jsx)("th",{className:z.nameTh,children:"Name"}),i||(i=(0,T.jsx)("th",{children:"Status"})),(0,T.jsx)("th",{className:z.fetchingSpinner,children:P&&(t||(t=(0,T.jsx)(b.$,{})))})]})}),(0,T.jsx)("tbody",{children:null==E?void 0:E.map((i=>{const t=!i.dashboardUid;return(0,T.jsxs)("tr",{children:[(0,T.jsx)("td",{className:z.titleTd,children:(0,T.jsx)(x.u,{content:t?"The linked dashboard has already been deleted":i.title,placement:"top",children:t?(0,T.jsxs)("div",{className:z.orphanedTitle,children:[n||(n=(0,T.jsx)("p",{children:"Orphaned public dashboard"})),(0,T.jsx)(u.J,{name:"info-circle",className:z.orphanedInfoIcon})]}):(0,T.jsx)(p.r,{className:z.link,href:`/d/${i.dashboardUid}`,children:i.title})})}),(0,T.jsx)("td",{children:(0,T.jsx)(j.V,{name:i.isEnabled?"enabled":"disabled",colorIndex:t?9:i.isEnabled?20:15})}),(0,T.jsx)("td",{children:(0,T.jsxs)(m.h,{className:z.buttonGroup,children:[(0,T.jsx)(f.Qj,{href:(l=i.accessToken,`${(0,g.iE)().appUrl}public-dashboards/${l}`),fill:"text",size:U,title:i.isEnabled?"View public dashboard":"Public dashboard is disabled",target:"_blank",disabled:!i.isEnabled||t,"data-testid":C.ListItem.linkButton,children:e||(e=(0,T.jsx)(u.J,{size:U,name:"external-link-alt"}))}),(0,T.jsx)(f.Qj,{fill:"text",size:U,href:`/d/${i.dashboardUid}?shareView=share`,title:"Configure public dashboard",disabled:t,"data-testid":C.ListItem.configButton,children:s||(s=(0,T.jsx)(u.J,{size:U,name:"cog"}))}),D&&(0,T.jsx)(N.H,{variant:"primary",fill:"text","data-testid":C.ListItem.trashcanButton,publicDashboard:i,loader:d||(d=(0,T.jsx)(b.$,{})),children:a||(a=(0,T.jsx)(u.J,{size:U,name:"trash-alt"}))})]})})]},i.uid);var l}))})]})})})};var y;const L=e=>{let{}=e;return y||(y=(0,T.jsx)(l.T,{navId:"dashboards/public",children:(0,T.jsx)(I,{})}))},z=L}}]);
//# sourceMappingURL=ListPublicDashboardPage.b5d53ad360552938bfda.js.map