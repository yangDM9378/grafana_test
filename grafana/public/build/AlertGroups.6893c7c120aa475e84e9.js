"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[2415],{17284:(e,t,a)=>{a.r(t),a.d(t,{default:()=>ie});var s=a(52423),r=a(68404),n=a(16755),l=a(38953),i=a(2843),o=a(19512),c=a(64850),d=a(8157),u=a(23559),g=a(73615),p=a(67921),m=a(90062),h=a(23542),x=a(13960),b=a(44812),j=a(40711),f=a(8006),v=a(59196),y=a(96535),N=a(43271),S=a(23691),C=a(34087),k=a(60277),w=a(45916);const $=e=>{let{alert:t,alertManagerSourceName:a}=e;const s=(0,n.wW)(A),r=(0,y.QX)(a),l=!(0,N.HY)(a)||v.Vt.hasPermission(c.bW.AlertingRuleRead);return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)("div",{className:s.actionsRow,children:[(0,w.jsxs)(k.q,{actions:[r.update,r.create],fallback:v.Vt.isEditor,children:[t.status.state===d.Z9.Suppressed&&(0,w.jsx)(f.Qj,{href:`${(0,S.eQ)("/alerting/silences",a)}&silenceIds=${t.status.silencedBy.join(",")}`,className:s.button,icon:"bell",size:"sm",children:"Manage silences"}),t.status.state===d.Z9.Active&&(0,w.jsx)(f.Qj,{href:(0,S.VN)(a,t.labels),className:s.button,icon:"bell-slash",size:"sm",children:"Silence"})]}),l&&t.generatorURL&&(0,w.jsx)(f.Qj,{className:s.button,href:t.generatorURL,icon:"chart-line",size:"sm",children:"See source"})]}),Object.entries(t.annotations).map((e=>{let[t,a]=e;return(0,w.jsx)(C.a,{annotationKey:t,value:a},t)})),(0,w.jsxs)("div",{className:s.receivers,children:["Receivers:"," ",t.receivers.map((e=>{let{name:t}=e;return t})).filter((e=>!!e)).join(", ")]})]})},A=e=>({button:s.css`
    & + & {
      margin-left: ${e.spacing(1)};
    }
  `,actionsRow:s.css`
    padding: ${e.spacing(2,0)} !important;
    border-bottom: 1px solid ${e.colors.border.medium};
  `,receivers:s.css`
    padding: ${e.spacing(1,0)};
  `}),G=e=>{let{alerts:t,alertManagerSourceName:a}=e;const s=(0,n.wW)(O),l=(0,r.useMemo)((()=>[{id:"state",label:"State",renderCell:e=>{let{data:t}=e;return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(j.G,{state:t.status.state}),(0,w.jsxs)("span",{className:s.duration,children:["for"," ",(0,x.vT)({start:new Date(t.startsAt),end:new Date(t.endsAt)})]})]})},size:"220px"},{id:"labels",label:"Labels",renderCell:e=>{let{data:{labels:t}}=e;return(0,w.jsx)(m.s,{className:s.labels,labels:t})},size:1}]),[s]),i=(0,r.useMemo)((()=>t.map((e=>({id:e.fingerprint,data:e})))),[t]);return(0,w.jsx)("div",{className:s.tableWrapper,"data-testid":"alert-group-table",children:(0,w.jsx)(b.F,{cols:l,items:i,isExpandable:!0,renderExpandedContent:e=>{let{data:t}=e;return(0,w.jsx)($,{alert:t,alertManagerSourceName:a})}})})},O=e=>({tableWrapper:s.css`
    margin-top: ${e.spacing(3)};
    ${e.breakpoints.up("md")} {
      margin-left: ${e.spacing(4.5)};
    }
  `,duration:s.css`
    margin-left: ${e.spacing(1)};
    font-size: ${e.typography.bodySmall.fontSize};
  `,labels:s.css`
    padding-bottom: 0;
  `});var E,M=a(27481);const q=e=>{let{alertManagerSourceName:t,group:a}=e;const[s,l]=(0,r.useState)(!0),i=(0,n.wW)(F);return(0,w.jsxs)("div",{className:i.wrapper,children:[(0,w.jsxs)("div",{className:i.header,children:[(0,w.jsxs)("div",{className:i.group,"data-testid":"alert-group",children:[(0,w.jsx)(h.U,{size:"sm",isCollapsed:s,onToggle:()=>l(!s),"data-testid":"alert-group-collapse-toggle"}),Object.keys(a.labels).length?(0,w.jsx)(m.s,{className:i.headerLabels,labels:a.labels}):E||(E=(0,w.jsx)("span",{children:"No grouping"}))]}),(0,w.jsx)(M.Z,{group:a})]}),!s&&(0,w.jsx)(G,{alertManagerSourceName:t,alerts:a.alerts})]})},F=e=>({wrapper:s.css`
    & + & {
      margin-top: ${e.spacing(2)};
    }
  `,headerLabels:s.css`
    padding-bottom: 0 !important;
    margin-bottom: -${e.spacing(.5)};
  `,header:s.css`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding: ${e.spacing(1,1,1,0)};
    background-color: ${e.colors.background.secondary};
    width: 100%;
  `,group:s.css`
    display: flex;
    flex-direction: row;
    align-items: center;
  `,summary:s.css``,spanElement:s.css`
    margin-left: ${e.spacing(.5)};
  `,[d.Z9.Active]:s.css`
    color: ${e.colors.error.main};
  `,[d.Z9.Suppressed]:s.css`
    color: ${e.colors.primary.main};
  `,[d.Z9.Unprocessed]:s.css`
    color: ${e.colors.secondary.main};
  `});var W,I=a(69066),Z=a(46150),B=a(39833),z=a(83744),L=a(37625);const T=e=>{let{onStateFilterChange:t,stateFilter:a}=e;const s=(0,n.wW)(_),r=Object.entries(d.Z9).sort(((e,t)=>{let[a]=e,[s]=t;return a<s?-1:1})).map((e=>{let[t,a]=e;return{label:t,value:a}}));return(0,w.jsxs)("div",{className:s.wrapper,children:[W||(W=(0,w.jsx)(z._,{children:"State"})),(0,w.jsx)(L.S,{options:r,value:a,onChange:t})]})},_=e=>({wrapper:s.css`
    margin-left: ${e.spacing(1)};
  `});var Q,R,J=a(82897),P=a(70917),U=a(99500);const K=e=>{let{className:t,groups:a,groupBy:s,onGroupingChange:r}=e;const n=(0,J.uniq)(a.flatMap((e=>e.alerts)).flatMap((e=>{let{labels:t}=e;return Object.keys(t)}))).filter((e=>!(e.startsWith("__")&&e.endsWith("__")))).map((e=>({label:e,value:e})));return(0,w.jsxs)("div",{"data-testid":"group-by-container",className:t,children:[Q||(Q=(0,w.jsx)(z._,{children:"Custom group by"})),(0,w.jsx)(P.NU,{"aria-label":"group by label keys",value:s,placeholder:"Group by",prefix:R||(R=(0,w.jsx)(U.J,{name:"tag-alt"})),onChange:e=>{r(e.map((e=>{let{value:t}=e;return t})))},options:n})]})};var V=a(37972);const D=e=>{let{groups:t}=e;const[a,s]=(0,r.useState)(Math.floor(100*Math.random())),[l,i]=(0,o.K)(),{groupBy:c=[],queryString:d,alertState:u}=(0,S.lC)(l),g=`matcher-${a}`,p=(0,Z.k)("instance"),[m,h]=(0,I.k)(p),x=(0,n.wW)(H),b=!!(c.length>0||d||u);return(0,w.jsxs)("div",{className:x.wrapper,children:[(0,w.jsx)(B.P,{current:m,onChange:h,dataSources:p}),(0,w.jsxs)("div",{className:x.filterSection,children:[(0,w.jsx)(V.F,{className:x.filterInput,defaultQueryString:d,onFilterChange:e=>i({queryString:e||null})},g),(0,w.jsx)(K,{className:x.filterInput,groups:t,groupBy:c,onGroupingChange:e=>i({groupBy:e.length?e.join(","):null})}),(0,w.jsx)(T,{stateFilter:u,onStateFilterChange:e=>i({alertState:e||null})}),b&&(0,w.jsx)(f.zx,{className:x.clearButton,variant:"secondary",icon:"times",onClick:()=>{i({groupBy:null,queryString:null,alertState:null}),setTimeout((()=>s(a+1)),100)},children:"Clear filters"})]})]})},H=e=>({wrapper:s.css`
    border-bottom: 1px solid ${e.colors.border.medium};
    margin-bottom: ${e.spacing(3)};
  `,filterSection:s.css`
    display: flex;
    flex-direction: row;
    margin-bottom: ${e.spacing(3)};
  `,filterInput:s.css`
    width: 340px;
    & + & {
      margin-left: ${e.spacing(1)};
    }
  `,clearButton:s.css`
    margin-left: ${e.spacing(1)};
    margin-top: 19px;
  `});var X=a(72710);var Y,ee,te,ae=a(76938),se=a(64834),re=a(74846),ne=a(5302);const le=e=>({groupingBanner:s.css`
    margin: ${e.spacing(2,0)};
  `}),ie=()=>{var e;const{useGetAlertmanagerChoiceStatusQuery:t}=u.h,a=(0,Z.k)("instance"),[s]=(0,I.k)(a),m=(0,c.I0)(),[h]=(0,o.K)(),{groupBy:x=[]}=(0,S.lC)(h),b=(0,n.wW)(le),{currentData:j}=t(),f=(0,ae._)((e=>e.amAlertGroups)),{loading:v,error:y,result:C=[]}=null!==(e=f[s||""])&&void 0!==e?e:ne.oq,k=((e,t)=>(0,r.useMemo)((()=>0===t.length?e.filter((e=>0===Object.keys(e.labels).length)).length>1?e.reduce(((e,t)=>{if(0===Object.keys(t.labels).length){const a=e.find((e=>{let{labels:t}=e;return Object.keys(t)}));a?a.alerts=(0,J.uniqBy)([...a.alerts,...t.alerts],"labels"):e.push({alerts:t.alerts,labels:{},receiver:{name:"NONE"}})}else e.push(t);return e}),[]):e:e.flatMap((e=>{let{alerts:t}=e;return t})).reduce(((e,a)=>{if(t.every((e=>Object.keys(a.labels).includes(e)))){const s=e.find((e=>t.every((t=>e.labels[t]===a.labels[t]))));if(s)s.alerts.push(a);else{const s=t.reduce(((e,t)=>Object.assign({},e,{[t]:a.labels[t]})),{});e.push({alerts:[a],labels:s,receiver:{name:"NONE"}})}}else{const t=e.find((e=>0===Object.keys(e.labels).length));t?t.alerts.push(a):e.push({alerts:[a],labels:{},receiver:{name:"NONE"}})}return e}),[])),[e,t]))(C,x),$=(e=>{const[t]=(0,o.K)(),a=(0,S.lC)(t),s=(0,X.Zh)(a.queryString||"");return(0,r.useMemo)((()=>e.reduce(((e,t)=>{const r=t.alerts.filter((e=>{let{labels:t,status:r}=e;const n=(0,X.eD)(t,s),l=!a.alertState||r.state===a.alertState;return n&&l}));return r.length>0&&(0===Object.keys(t.labels).length?e.unshift(Object.assign({},t,{alerts:r})):e.push(Object.assign({},t,{alerts:r}))),e}),[])),[e,a,s])})(k),A=s===N.GC&&(null==j?void 0:j.alertmanagersChoice)===d.TE.External;return(0,r.useEffect)((()=>{function e(){s&&m((0,se.mS)(s))}e();const t=setInterval(e,re.iF);return()=>{clearInterval(t)}}),[m,s]),s?(0,w.jsxs)(g.J,{pageId:"groups",children:[(0,w.jsx)(D,{groups:C}),v&&(Y||(Y=(0,w.jsx)(l.u,{text:"Loading notifications"}))),y&&!v&&(0,w.jsx)(i.b,{title:"Error loading notifications",severity:"error",children:y.message||"Unknown error"}),A&&(ee||(ee=(0,w.jsx)(i.b,{title:"Grafana alerts are not delivered to Grafana Alertmanager",children:"Grafana is configured to send alerts to external alertmanagers only. No alerts are expected to be available here for the selected Alertmanager."}))),C&&$.map(((e,t)=>(0,w.jsxs)(r.Fragment,{children:[(1===t&&0===Object.keys($[0].labels).length||0===t&&Object.keys(e.labels).length>0)&&(0,w.jsxs)("p",{className:b.groupingBanner,children:["Grouped by: ",Object.keys(e.labels).join(", ")]}),(0,w.jsx)(q,{alertManagerSourceName:s||"",group:e})]},`${JSON.stringify(e.labels)}-group-${t}`))),C&&!$.length&&(te||(te=(0,w.jsx)("p",{children:"No results."})))]}):(0,w.jsx)(g.J,{pageId:"groups",children:(0,w.jsx)(p.I,{availableAlertManagers:a})})}},23559:(e,t,a)=>{a.d(t,{h:()=>s});const s=a(47175).C.injectEndpoints({endpoints:e=>({getAlertmanagerChoiceStatus:e.query({query:()=>({url:"/api/v1/ngalert"}),providesTags:["AlertmanagerChoice"]}),getExternalAlertmanagerConfig:e.query({query:()=>({url:"/api/v1/ngalert/admin_config"}),providesTags:["AlertmanagerChoice"]}),getExternalAlertmanagers:e.query({query:()=>({url:"/api/v1/ngalert/alertmanagers"}),transformResponse:e=>e.data}),saveExternalAlertmanagersConfig:e.mutation({query:e=>({url:"/api/v1/ngalert/admin_config",method:"POST",data:e}),invalidatesTags:["AlertmanagerChoice"]})})})},73615:(e,t,a)=>{a.d(t,{J:()=>n});a(68404);var s=a(37417),r=a(45916);const n=e=>{let{children:t,pageId:a,pageNav:n,isLoading:l}=e;return(0,r.jsx)(s.T,{pageNav:n,navId:a,children:(0,r.jsx)(s.T.Contents,{isLoading:l,children:t})})}},60277:(e,t,a)=>{a.d(t,{q:()=>n});a(68404);var s=a(59196),r=a(45916);const n=e=>{let{actions:t,children:a,fallback:n=!0}=e;return t.some((e=>s.Vt.hasAccess(e,n)))?(0,r.jsx)(r.Fragment,{children:a}):null}},44812:(e,t,a)=>{a.d(t,{F:()=>o});var s=a(52423),r=(a(68404),a(16755)),n=a(39440),l=a(45916);const i=["renderExpandedContent"];const o=e=>{let{renderExpandedContent:t}=e,a=function(e,t){if(null==e)return{};var a,s,r={},n=Object.keys(e);for(s=0;s<n.length;s++)a=n[s],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,i);const o=(0,r.wW)(c);return(0,l.jsx)(n.t,Object.assign({renderExpandedContent:t?(e,a,r)=>(0,l.jsxs)(l.Fragment,{children:[!(a===r.length-1)&&(0,l.jsx)("div",{className:(0,s.cx)(o.contentGuideline,o.guideline)}),t(e,a,r)]}):void 0,renderPrefixHeader:()=>(0,l.jsx)("div",{className:o.relative,children:(0,l.jsx)("div",{className:(0,s.cx)(o.headerGuideline,o.guideline)})}),renderPrefixCell:(e,t,a)=>(0,l.jsxs)("div",{className:o.relative,children:[(0,l.jsx)("div",{className:(0,s.cx)(o.topGuideline,o.guideline)}),!(t===a.length-1)&&(0,l.jsx)("div",{className:(0,s.cx)(o.bottomGuideline,o.guideline)})]})},a))},c=e=>({relative:s.css`
    position: relative;
    height: 100%;
  `,guideline:s.css`
    left: -19px;
    border-left: 1px solid ${e.colors.border.medium};
    position: absolute;

    ${e.breakpoints.down("md")} {
      display: none;
    }
  `,topGuideline:s.css`
    width: 18px;
    border-bottom: 1px solid ${e.colors.border.medium};
    top: 0;
    bottom: 50%;
  `,bottomGuideline:s.css`
    top: 50%;
    bottom: 0;
  `,contentGuideline:s.css`
    top: 0;
    bottom: 0;
    left: -49px !important;
  `,headerGuideline:s.css`
    top: -25px;
    bottom: 0;
  `})},67921:(e,t,a)=>{a.d(t,{I:()=>p});a(68404);var s,r,n,l,i=a(2843),o=a(69066),c=a(39833),d=a(45916);const u=()=>s||(s=(0,d.jsx)(i.b,{title:"No Alertmanager found",severity:"warning",children:"We could not find any external Alertmanagers and you may not have access to the built-in Grafana Alertmanager."})),g=()=>r||(r=(0,d.jsx)(i.b,{title:"Selected Alertmanager not found. Select a different Alertmanager.",severity:"warning",children:"Selected Alertmanager no longer exists or you may not have permission to access it."})),p=e=>{let{availableAlertManagers:t}=e;const[a,s]=(0,o.k)(t),r=t.length>0;return(0,d.jsx)("div",{children:r?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(c.P,{onChange:s,dataSources:t}),n||(n=(0,d.jsx)(g,{}))]}):l||(l=(0,d.jsx)(u,{}))})}},37972:(e,t,a)=>{a.d(t,{F:()=>j});var s,r,n,l=a(52423),i=a(82897),o=a(68404),c=a(68522),d=a(93250),u=a(16755),g=a(99500),p=a(83744),m=a(21888),h=a(4645),x=a(40833),b=a(45916);const j=e=>{let{className:t,onFilterChange:a,defaultQueryString:l}=e;const j=(0,u.wW)(f),v=(0,o.useMemo)((()=>(0,i.debounce)((e=>{(0,d.PN)(x.z7.filterByLabel);const t=e.target;a(t.value)}),600)),[a]);(0,o.useEffect)((()=>v.cancel()),[v]);const y=s||(s=(0,b.jsx)(g.J,{name:"search"}));return(0,b.jsxs)("div",{className:t,children:[(0,b.jsx)(p._,{children:(0,b.jsxs)(c.Stack,{gap:.5,children:[r||(r=(0,b.jsx)("span",{children:"Search by label"})),(0,b.jsx)(m.u,{content:n||(n=(0,b.jsxs)("div",{children:["Filter alerts using label querying, ex:",(0,b.jsx)("pre",{children:'{severity="critical", instance=~"cluster-us-.+"}'})]})),children:(0,b.jsx)(g.J,{className:j.icon,name:"info-circle",size:"sm"})})]})}),(0,b.jsx)(h.I,{placeholder:"Search",defaultValue:l,onChange:v,"data-testid":"search-query-input",prefix:y,className:j.inputWidth})]})},f=e=>({icon:l.css`
    margin-right: ${e.spacing(.5)};
  `,inputWidth:l.css`
    width: 340px;
    flex-grow: 0;
  `})},40711:(e,t,a)=>{a.d(t,{G:()=>i});a(68404);var s=a(8157),r=a(54743),n=a(45916);const l={[s.Z9.Active]:"bad",[s.Z9.Unprocessed]:"neutral",[s.Z9.Suppressed]:"info"},i=e=>{let{state:t}=e;return(0,n.jsx)(r.i,{state:l[t],children:t})}},69066:(e,t,a)=>{a.d(t,{k:()=>o});var s=a(68404),r=a(19512),n=a(78130),l=a(74846),i=a(43271);function o(e){const[t,a]=(0,r.K)(),o=function(e){return(0,s.useCallback)((t=>e.map((e=>e.name)).includes(t)),[e])}(e),c=(0,s.useCallback)((e=>{o(e)&&(e===i.GC?(n.Z.delete(l.de),a({[l.c4]:null})):(n.Z.set(l.de,e),a({[l.c4]:e})))}),[a,o]),d=t[l.c4];if(d&&"string"==typeof d)return o(d)?[d,c]:[void 0,c];const u=n.Z.get(l.de);return u&&"string"==typeof u&&o(u)?(c(u),[u,c]):o(i.GC)?[i.GC,c]:[void 0,c]}},46150:(e,t,a)=>{a.d(t,{k:()=>n});var s=a(68404),r=a(43271);function n(e){return(0,s.useMemo)((()=>(0,r.LE)(e)),[e])}}}]);
//# sourceMappingURL=AlertGroups.6893c7c120aa475e84e9.js.map