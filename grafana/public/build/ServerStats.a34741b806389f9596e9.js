"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[7641],{70014:(s,e,a)=>{a.r(e),a.d(e,{ServerStats:()=>C});var t=a(52423),n=a(68404),r=a(65737),i=a(16755),c=a(8006),l=a(78748),o=a(64850),d=a(59196),h=a(37434),u=a(22543),x=a(98251),m=a(93570),p=a(78941),v=a(31787),g=a(45916);const j=()=>{var s;const e=f((0,i.l4)()),[a,t]=(0,n.useState)(!1),[l,o]=(0,n.useState)({mode:"thumbs",theme:r.v.theme2.isLight?"light":"dark"}),d=()=>t(!1);return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(p.u,{title:"Start crawler",isOpen:a,onDismiss:d,children:[(0,g.jsx)("div",{className:e.wrap,children:(0,g.jsx)(v.p,{height:200,value:null!==(s=JSON.stringify(l,null,2))&&void 0!==s?s:"",showLineNumbers:!1,readOnly:!1,language:"json",showMiniMap:!1,onBlur:s=>{o(JSON.parse(s))}})}),(0,g.jsxs)(p.u.ButtonRow,{children:[(0,g.jsx)(c.zx,{type:"submit",onClick:()=>{(0,m.i)().post("/api/admin/crawler/start",l).then((s=>{console.log("GOT",s),d()}))},children:"Start"}),(0,g.jsx)(c.zx,{variant:"secondary",onClick:d,children:"Cancel"})]})]}),(0,g.jsx)(c.zx,{onClick:()=>t(!0),variant:"primary",children:"Start"})]})},f=s=>({wrap:t.css`
      border: 2px solid #111;
    `});var b,w,y;const S=()=>{const s=N((0,i.l4)()),[e,a]=(0,n.useState)();return(0,n.useEffect)((()=>{const s=(0,x.gj)().getStream({scope:u.z.Grafana,namespace:"broadcast",path:"crawler"}).subscribe({next:s=>{((0,u.RL)(s)||(0,u.se)(s))&&a(s.message)}});return()=>{s.unsubscribe()}}),[]),e?(0,g.jsxs)("div",{className:s.wrap,children:[(0,g.jsx)("pre",{children:JSON.stringify(e,null,2)}),"running"!==e.state&&(y||(y=(0,g.jsx)(j,{}))),"stopped"!==e.state&&(0,g.jsx)(c.zx,{variant:"secondary",onClick:()=>{(0,m.i)().post("/api/admin/crawler/stop")},children:"Stop"})]}):(0,g.jsxs)("div",{className:s.wrap,children:["No status (never run)",b||(b=(0,g.jsx)("br",{})),w||(w=(0,g.jsx)(j,{}))]})},N=s=>({wrap:t.css`
      border: 4px solid red;
    `,running:t.css`
      border: 4px solid green;
    `});var A,k,R,V,$,z;const C=()=>{const[s,e]=(0,n.useState)(null),[a,t]=(0,n.useState)(!1),l=(0,i.wW)(O),u=d.Vt.hasAccess(o.bW.DataSourcesRead,d.Vt.isGrafanaAdmin),x=d.Vt.hasAccess(o.bW.UsersRead,d.Vt.isGrafanaAdmin);return(0,n.useEffect)((()=>{d.Vt.hasAccess(o.bW.ActionServerStatsRead,d.Vt.isGrafanaAdmin)&&(t(!0),(async()=>(0,m.i)().get("api/admin/stats").catch((s=>(console.error(s),null))))().then((s=>{e(s),t(!1)})))}),[]),d.Vt.hasAccess(o.bW.ActionServerStatsRead,d.Vt.isGrafanaAdmin)?(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("h2",{className:l.title,children:"Instance statistics"}),a?(0,g.jsx)("div",{className:l.loader,children:A||(A=(0,g.jsx)(h.a,{text:"Loading instance stats..."}))}):s?(0,g.jsxs)("div",{className:l.row,children:[(0,g.jsx)(G,{content:[{name:"Dashboards (starred)",value:`${s.dashboards} (${s.stars})`},{name:"Tags",value:s.tags},{name:"Playlists",value:s.playlists},{name:"Snapshots",value:s.snapshots}],footer:k||(k=(0,g.jsx)(c.Qj,{href:"/dashboards",variant:"secondary",children:"Manage dashboards"}))}),(0,g.jsxs)("div",{className:l.doubleRow,children:[(0,g.jsx)(G,{content:[{name:"Data sources",value:s.datasources}],footer:u&&(R||(R=(0,g.jsx)(c.Qj,{href:"/datasources",variant:"secondary",children:"Manage data sources"})))}),(0,g.jsx)(G,{content:[{name:"Alerts",value:s.alerts}],footer:V||(V=(0,g.jsx)(c.Qj,{href:"/alerting/list",variant:"secondary",children:"Alerts"}))})]}),(0,g.jsx)(G,{content:[{name:"Organisations",value:s.orgs},{name:"Users total",value:s.users},{name:"Active users in last 30 days",value:s.activeUsers},{name:"Active sessions",value:s.activeSessions}],footer:x&&($||($=(0,g.jsx)(c.Qj,{href:"/admin/users",variant:"secondary",children:"Manage users"})))})]}):(0,g.jsx)("p",{className:l.notFound,children:"No stats found."}),r.v.featureToggles.dashboardPreviews&&r.v.featureToggles.dashboardPreviewsAdmin&&(z||(z=(0,g.jsx)(S,{})))]}):null},O=s=>({title:t.css`
      margin-bottom: ${s.spacing(4)};
    `,row:t.css`
      display: flex;
      justify-content: space-between;
      width: 100%;

      & > div:not(:last-of-type) {
        margin-right: ${s.spacing(2)};
      }

      & > div {
        width: 33.3%;
      }
    `,doubleRow:t.css`
      display: flex;
      flex-direction: column;

      & > div:first-of-type {
        margin-bottom: ${s.spacing(2)};
      }
    `,loader:t.css`
      height: 290px;
    `,notFound:t.css`
      font-size: ${s.typography.h6.fontSize};
      text-align: center;
      height: 290px;
    `}),G=s=>{let{content:e,footer:a}=s;const t=(0,i.wW)(W);return(0,g.jsx)(l._,{className:t.container,disableHover:!0,children:(0,g.jsxs)("div",{className:t.inner,children:[(0,g.jsx)("div",{className:t.content,children:e.map((s=>(0,g.jsxs)("div",{className:t.row,children:[(0,g.jsx)("span",{children:s.name}),(0,g.jsx)("span",{children:s.value})]},s.name)))}),a&&(0,g.jsx)("div",{children:a})]})})},W=s=>({container:t.css`
      padding: ${s.spacing(2)};
    `,inner:t.css`
      display: flex;
      flex-direction: column;
      width: 100%;
    `,content:t.css`
      flex: 1 0 auto;
    `,row:t.css`
      display: flex;
      justify-content: space-between;
      width: 100%;
      margin-bottom: ${s.spacing(2)};
      align-items: center;
    `})},37434:(s,e,a)=>{a.d(e,{a:()=>r});a(68404);var t=a(38953),n=a(45916);const r=s=>{let{text:e="Loading..."}=s;return(0,n.jsx)("div",{className:"page-loader-wrapper",children:(0,n.jsx)(t.u,{text:e})})}}}]);
//# sourceMappingURL=ServerStats.a34741b806389f9596e9.js.map