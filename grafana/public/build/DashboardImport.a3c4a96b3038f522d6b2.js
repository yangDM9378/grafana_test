"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[8808],{3631:(e,a,t)=>{t.d(a,{p:()=>z});var r=t(52423),s=t(68404),n=t(65737),o=t(16755),i=t(99500),l=t(32889),d=t(27277),c=t(26821),u=t(28173),h=t(78941),p=t(8006),m=t(11568),b=t(84980),g=t(98865),f=t(23067);const x={loadingState:u.Gu.Loading,dashboardTitles:[]},j=(0,f.PH)("libraryPanels/delete/searchCompleted"),y=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,a=arguments.length>1?arguments[1]:void 0;return j.match(a)?Object.assign({},e,{dashboardTitles:a.payload.dashboards.map((e=>e.title)),loadingState:u.Gu.Done}):e};var v,w,D,$,N=t(45916);const S=e=>{let{libraryPanel:a,onDismiss:t,onConfirm:r}=e;const n=(0,o.wW)(m.J),[{dashboardTitles:i,loadingState:l},d]=(0,s.useReducer)(y,x),c=(0,s.useMemo)((()=>(0,b.tb)(d)),[d]);(0,s.useEffect)((()=>{c(function(e){return async function(a){const t=await(0,g.E8)(e.uid);a(j({dashboards:t}))}}(a))}),[c,a]);const f=Boolean(i.length),D=l===u.Gu.Done;return(0,N.jsxs)(h.u,{className:n.modal,title:"Delete library panel",icon:"trash-alt",onDismiss:t,isOpen:!0,children:[D?null:v||(v=(0,N.jsx)(I,{})),D?(0,N.jsxs)("div",{children:[f?(0,N.jsx)(C,{dashboardTitles:i}):null,f?null:w||(w=(0,N.jsx)(P,{})),(0,N.jsxs)(h.u.ButtonRow,{children:[(0,N.jsx)(p.zx,{variant:"secondary",onClick:t,fill:"outline",children:"Cancel"}),(0,N.jsx)(p.zx,{variant:"destructive",onClick:r,disabled:f,children:"Delete"})]})]}):null]})},I=()=>D||(D=(0,N.jsx)("span",{children:"Loading library panel..."})),P=()=>{const e=(0,o.wW)(m.J);return(0,N.jsx)("div",{className:e.modalText,children:"Do you want to delete this panel?"})},C=e=>{let{dashboardTitles:a}=e;const t=(0,o.wW)(m.J),r=1===a.length?"dashboard.":"dashboards.",s=`${a.length} ${r}`;return 0===a.length?null:(0,N.jsxs)("div",{children:[(0,N.jsxs)("p",{className:t.textInfo,children:["This library panel can not be deleted because it is connected to ",(0,N.jsx)("strong",{children:s})," Remove the library panel from the dashboards listed below and retry."]}),(0,N.jsxs)("table",{className:t.myTable,children:[$||($=(0,N.jsx)("thead",{children:(0,N.jsx)("tr",{children:(0,N.jsx)("th",{children:"Dashboard name"})})})),(0,N.jsx)("tbody",{children:a.map(((e,a)=>(0,N.jsx)("tr",{children:(0,N.jsx)("td",{children:e})},`dash-title-${a}`)))})]})]})};var O,k;const z=e=>{var a;let{libraryPanel:t,onClick:r,onDelete:o,showSecondaryActions:i}=e;const[l,u]=(0,s.useState)(!1),h=null!==(a=n.v.panels[t.model.type])&&void 0!==a?a:(0,d.X)(t.model.type).meta;return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(c.X,{isCurrent:!1,title:t.name,description:t.description,plugin:h,onClick:()=>null==r?void 0:r(t),onDelete:i?()=>u(!0):void 0,children:(0,N.jsx)(U,{libraryPanel:t})}),l&&(0,N.jsx)(S,{libraryPanel:t,onConfirm:()=>{null==o||o(t),u(!1)},onDismiss:()=>u(!1)})]})};function U(e){let{libraryPanel:a}=e;const t=(0,o.wW)(T);return a.meta.folderUid||a.meta.folderName?a.meta.folderUid?(0,N.jsx)("span",{className:t.metaContainer,children:(0,N.jsxs)(l.r,{href:`/dashboards/f/${a.meta.folderUid}`,children:[k||(k=(0,N.jsx)(i.J,{name:"folder-upload",size:"sm"})),(0,N.jsx)("span",{children:a.meta.folderName})]})}):(0,N.jsxs)("span",{className:t.metaContainer,children:[O||(O=(0,N.jsx)(i.J,{name:"folder",size:"sm"})),(0,N.jsx)("span",{children:a.meta.folderName})]}):null}function T(e){return{metaContainer:r.css`
      display: flex;
      align-items: center;
      color: ${e.colors.text.secondary};
      font-size: ${e.typography.bodySmall.fontSize};
      padding-top: ${e.spacing(.5)};

      svg {
        margin-right: ${e.spacing(.5)};
        margin-bottom: 3px;
      }
    `}}},84980:(e,a,t)=>{t.d(a,{UO:()=>f,Xu:()=>g,tb:()=>x});var r=t(95484),s=t(85526),n=t(53786),o=t(16313),i=t(4561),l=t(98356),d=t(94514),c=t(97218),u=t(44962),h=t(7356),p=t(67305),m=t(98865),b=t(43366);function g(e){return function(a){const t=new r.w0,g=(0,s.D)((0,m.Pq)({searchString:e.searchString,perPage:e.perPage,page:e.page,excludeUid:e.currentPanelId,sortDirection:e.sortDirection,typeFilter:e.panelFilter,folderFilterUIDs:e.folderFilterUIDs})).pipe((0,l.z)((e=>{let{perPage:a,elements:t,page:r,totalCount:s}=e;return(0,n.of)((0,b.zK)({libraryPanels:t,page:r,perPage:a,totalCount:s}))})),(0,d.K)((a=>(console.error(a),(0,n.of)((0,b.zK)(Object.assign({},b.p$,{page:e.page,perPage:e.perPage})))))),(0,c.x)((()=>t.unsubscribe())),(0,u.B)());t.add((0,o.T)((0,i.H)(50).pipe((0,h.h)((0,b.xU)()),(0,p.R)(g)),g).subscribe(a))}}function f(e,a){return async function(t){try{await(0,m.UO)(e),g(a)(t)}catch(e){console.error(e)}}}function x(e){return function(a){return a instanceof Function?a(e):e(a)}}},43366:(e,a,t)=>{t.d(a,{_p:()=>d,oO:()=>l,p$:()=>n,xU:()=>o,zK:()=>i});var r=t(23067),s=t(28173);const n={loadingState:s.Gu.Loading,libraryPanels:[],totalCount:0,perPage:40,page:1,numberOfPages:0,currentPanelId:void 0},o=(0,r.PH)("libraryPanels/view/initSearch"),i=(0,r.PH)("libraryPanels/view/searchCompleted"),l=(0,r.PH)("libraryPanels/view/changePage"),d=(e,a)=>{if(o.match(a))return Object.assign({},e,{loadingState:s.Gu.Loading});if(i.match(a)){const{libraryPanels:t,page:r,perPage:n,totalCount:o}=a.payload,i=Math.ceil(o/n);return Object.assign({},e,{libraryPanels:t,perPage:n,totalCount:o,loadingState:s.Gu.Done,numberOfPages:i,page:r>i?r-1:r})}return l.match(a)?Object.assign({},e,{page:a.payload.page}):e}},11568:(e,a,t)=>{t.d(a,{J:()=>s});var r=t(52423);function s(e){return{myTable:r.css`
      max-height: 204px;
      overflow-y: auto;
      margin-top: 11px;
      margin-bottom: 28px;
      border-radius: ${e.shape.borderRadius(1)};
      border: 1px solid ${e.colors.action.hover};
      background: ${e.colors.background.primary};
      color: ${e.colors.text.secondary};
      font-size: ${e.typography.h6.fontSize};
      width: 100%;

      thead {
        color: #538ade;
        font-size: ${e.typography.bodySmall.fontSize};
      }

      th,
      td {
        padding: 6px 13px;
        height: ${e.spacing(4)};
      }

      tbody > tr:nth-child(odd) {
        background: ${e.colors.background.secondary};
      }
    `,noteTextbox:r.css`
      margin-bottom: ${e.spacing(4)};
    `,textInfo:r.css`
      color: ${e.colors.text.secondary};
      font-size: ${e.typography.size.sm};
    `,dashboardSearch:r.css`
      margin-top: ${e.spacing(2)};
    `,modal:r.css`
      width: 500px;
    `,modalText:r.css`
      font-size: ${e.typography.h4.fontSize};
      color: ${e.colors.text.primary};
      margin-bottom: ${e.spacing(4)};
      padding-top: ${e.spacing(2)};
    `}}},24935:(e,a,t)=>{t.r(a),t.d(a,{default:()=>ce});var r=t(52423),s=t(68404),n=t(36635),o=t(94025),i=t(28173),l=t(25004),d=t(31181),c=t(29792),u=t(3218),h=t(65678),p=t(4645),m=t(8006),b=t(93194),g=t(54761),f=t(81691),x=t(16755),j=t(50191),y=t(2247),v=t(37417),w=t(40264),D=t(6432),$=t(80795),N=t(58101),S=t(1671),I=t(74731),P=t(94570),C=t(18474),O=t(35258),k=t(33257),z=t(93570),U=t(77281);const T=e=>{let a;try{a=JSON.parse(e)}catch(e){return"Not valid JSON"}if(a&&a.hasOwnProperty("tags")){if(!Array.isArray(a.tags))return"tags expected array";if(a.tags.some((e=>"string"!=typeof e)))return"tags expected array of strings"}return!0},F=e=>{const a=/(^\d+$)|dashboards\/(\d+)/.exec(e);return!(!a||!a[1]&&!a[2])||"Could not find a valid Grafana.com ID"},G=e=>(0,z.i)().get(`/api/dashboards/uid/${e}`).then((e=>`Dashboard named '${null==e?void 0:e.dashboard.title}' in folder '${null==e?void 0:e.meta.folderTitle}' has the same UID`)).catch((e=>(e.isHandled=!0,!0)));var J=t(3631),R=t(45916);function q(e){let{inputs:a,label:t,description:r,folderName:s}=e;const n=(0,x.wW)(L);return Boolean(null==a?void 0:a.length)?(0,R.jsx)("div",{className:n.spacer,children:(0,R.jsx)(h.g,{label:t,description:r,children:(0,R.jsx)(R.Fragment,{children:a.map(((e,a)=>{const t=`elements[${a}]`,r=e.state===I.KQ.New?Object.assign({},e.model,{meta:Object.assign({},e.model.meta,{folderName:null!=s?s:"General"})}):Object.assign({},e.model);return(0,R.jsx)("div",{className:n.item,children:(0,R.jsx)(J.p,{libraryPanel:r,onClick:()=>{}})},t)}))})})}):null}function L(e){return{spacer:r.css`
      margin-bottom: ${e.spacing(2)};
    `,item:r.css`
      margin-bottom: ${e.spacing(1)};
    `}}const B=["ref"],A=["ref"];var V;function E(e,a){if(null==e)return{};var t,r,s={},n=Object.keys(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||(s[t]=e[t]);return s}const _=e=>{var a,t,r,n;let{register:o,errors:i,control:d,getValues:c,uidReset:u,inputs:b,initialFolderId:f,onUidReset:x,onCancel:j,onSubmit:y,watch:v}=e;const[w,D]=(0,s.useState)(!1),$=v("dataSources"),S=v("folder");(0,s.useEffect)((()=>{w&&(i.title||i.uid)&&y(c(),{})}),[i,c,w,y]);const z=null!==(a=null==b||null===(t=b.libraryPanels)||void 0===t?void 0:t.filter((e=>e.state===I.KQ.New)))&&void 0!==a?a:[],T=null!==(r=null==b||null===(n=b.libraryPanels)||void 0===n?void 0:n.filter((e=>e.state===I.KQ.Exists)))&&void 0!==r?r:[];return(0,R.jsxs)(R.Fragment,{children:[V||(V=(0,R.jsx)(N.D,{children:"Options"})),(0,R.jsx)(h.g,{label:"Name",invalid:!!i.title,error:i.title&&i.title.message,children:(0,R.jsx)(p.I,Object.assign({},o("title",{required:"Name is required",validate:async e=>{return await(a=e,t=c().folder.id,U.t.validateNewDashboardName(t,a).then((()=>!0)).catch((e=>{if("EXISTING"===e.type)return e.message})));var a,t}}),{type:"text","data-testid":l.wl.components.ImportDashboardForm.name}))}),(0,R.jsx)(h.g,{label:"Folder",children:(0,R.jsx)(O.g,{render:e=>{let{}=e,a=E(e.field,B);return(0,R.jsx)(k.Es,Object.assign({},a,{enableCreateNew:!0,initialFolderId:f}))},name:"folder",control:d})}),(0,R.jsx)(h.g,{label:"Unique identifier (UID)",description:"The unique identifier (UID) of a dashboard can be used for uniquely identify a dashboard between multiple Grafana installs. The UID allows having consistent URLs for accessing dashboards so changing the title of a dashboard will not break any bookmarked links to that dashboard.",invalid:!!i.uid,error:i.uid&&i.uid.message,children:(0,R.jsx)(R.Fragment,{children:u?(0,R.jsx)(p.I,Object.assign({},o("uid",{required:!0,validate:async e=>await G(e)}))):(0,R.jsx)(p.I,Object.assign({disabled:!0},o("uid",{validate:async e=>await G(e)}),{addonAfter:!u&&(0,R.jsx)(m.zx,{onClick:x,children:"Change uid"})}))})}),b.dataSources&&b.dataSources.map(((e,a)=>{if(e.pluginId===C.hr.type)return null;const t=`dataSources[${a}]`,r=null!=$?$:[];return(0,R.jsx)(h.g,{label:e.label,invalid:i.dataSources&&!!i.dataSources[a],error:i.dataSources&&i.dataSources[a]&&"A data source is required",children:(0,R.jsx)(O.g,{name:t,render:t=>{var s;let{}=t,n=E(t.field,A);return(0,R.jsx)(P.q,Object.assign({},n,{noDefault:!0,placeholder:e.info,pluginId:e.pluginId,current:null===(s=r[a])||void 0===s?void 0:s.uid}))},control:d,rules:{required:!0}})},t)})),b.constants&&b.constants.map(((e,a)=>{const t=`constants[${a}]`;return(0,R.jsx)(h.g,{label:e.label,error:i.constants&&i.constants[a]&&`${e.label} needs a value`,invalid:i.constants&&!!i.constants[a],children:(0,R.jsx)(p.I,Object.assign({},o(t,{required:!0}),{defaultValue:e.value}))},t)})),(0,R.jsx)(q,{inputs:z,label:"New library panels",description:"List of new library panels that will get imported.",folderName:S.title}),(0,R.jsx)(q,{inputs:T,label:"Existing library panels",description:"List of existing library panels. These panels are not affected by the import.",folderName:S.title}),(0,R.jsxs)(g.Lh,{children:[(0,R.jsx)(m.zx,{type:"submit","data-testid":l.wl.components.ImportDashboardForm.submit,variant:W(i),onClick:()=>{D(!0)},children:K(i)}),(0,R.jsx)(m.zx,{type:"reset",variant:"secondary",onClick:j,children:"Cancel"})]})]})};function W(e){return e&&(e.title||e.uid)?"destructive":"primary"}function K(e){return e&&(e.title||e.uid)?"Import (Overwrite)":"Import"}var H,M;function X(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}const Q={clearLoadedDashboard:S.ys,importDashboard:S.$j},Z=(0,n.connect)((e=>{const a=$.E1.getSearchObject();return{dashboard:e.importDashboard.dashboard,meta:e.importDashboard.meta,source:e.importDashboard.source,inputs:e.importDashboard.inputs,folder:a.folderId?{id:Number(a.folderId)}:{id:0}}}),Q);class Y extends s.PureComponent{constructor(){super(...arguments),X(this,"state",{uidReset:!1}),X(this,"onSubmit",(e=>{(0,d.ff)("dashboard_import_imported"),this.props.importDashboard(e)})),X(this,"onCancel",(()=>{this.props.clearLoadedDashboard()})),X(this,"onUidReset",(()=>{this.setState({uidReset:!0})}))}render(){const{dashboard:e,inputs:a,meta:t,source:r,folder:s}=this.props,{uidReset:n}=this.state;return(0,R.jsxs)(R.Fragment,{children:[r===I.G7.Gcom&&(0,R.jsxs)("div",{style:{marginBottom:"24px"},children:[(0,R.jsx)("div",{children:(0,R.jsxs)(N.D,{children:["Importing dashboard from"," ",(0,R.jsx)("a",{href:`https://grafana.com/dashboards/${e.gnetId}`,className:"external-link",target:"_blank",rel:"noreferrer",children:"Grafana.com"})]})}),(0,R.jsx)("table",{className:"filter-table form-inline",children:(0,R.jsxs)("tbody",{children:[(0,R.jsxs)("tr",{children:[H||(H=(0,R.jsx)("td",{children:"Published by"})),(0,R.jsx)("td",{children:t.orgName})]}),(0,R.jsxs)("tr",{children:[M||(M=(0,R.jsx)("td",{children:"Updated on"})),(0,R.jsx)("td",{children:(0,D.dq)(t.updatedAt)})]})]})})]}),(0,R.jsx)(u.l,{onSubmit:this.onSubmit,defaultValues:Object.assign({},e,{constants:[],dataSources:[],elements:[],folder:s}),validateOnMount:!0,validateFieldsOnMount:["title","uid"],validateOn:"onChange",children:e=>{let{register:t,errors:r,control:o,watch:i,getValues:l}=e;return(0,R.jsx)(_,{register:t,errors:r,control:o,getValues:l,uidReset:n,inputs:a,onCancel:this.onCancel,onUidReset:this.onUidReset,onSubmit:this.onSubmit,watch:i,initialFolderId:s.id})}})]})}}const ee=Z(Y);var ae,te,re;function se(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}ee.displayName="ImportDashboardOverview";const ne="dashboard_import_loaded",oe={fetchGcomDashboard:S.q_,importDashboardJson:S.nQ,cleanUpAction:w.e},ie=(0,n.connect)((e=>({loadingState:e.importDashboard.state})),oe);class le extends s.PureComponent{constructor(e){super(e),se(this,"onFileUpload",(e=>{(0,d.ff)(ne,{import_source:"json_uploaded"});const{importDashboardJson:a}=this.props,t=e.currentTarget.files&&e.currentTarget.files.length>0&&e.currentTarget.files[0];if(t){const e=new FileReader,r=()=>e=>{let t;try{t=JSON.parse(e.target.result)}catch(e){return void(e instanceof Error&&y.Z.emit(o.SI.alertError,["Import failed","JSON -> JS Serialization failed: "+e.message]))}a(t)};e.onload=r(),e.readAsText(t)}})),se(this,"getDashboardFromJson",(e=>{(0,d.ff)(ne,{import_source:"json_pasted"}),this.props.importDashboardJson(JSON.parse(e.dashboardJson))})),se(this,"getGcomDashboard",(e=>{let a;(0,d.ff)(ne,{import_source:"gcom"});const t=/(^\d+$)|dashboards\/(\d+)/.exec(e.gcomDashboard);t&&t[1]?a=t[1]:t&&t[2]&&(a=t[2]),a&&this.props.fetchGcomDashboard(a)})),se(this,"pageNav",{text:"Import dashboard",subTitle:'Import dashboard from file or Grafana.com"',breadcrumbs:[{title:"Dashboards",url:"dashboards"}]});const{gcomDashboardId:a}=this.props.queryParams;a&&this.getGcomDashboard({gcomDashboard:a})}componentWillUnmount(){this.props.cleanUpAction({cleanupAction:e=>e.importDashboard=I.wg})}renderImportForm(){const e=ue(this.props.theme);return(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)("div",{className:e.option,children:(0,R.jsx)(c.p,{accept:"application/json",onFileUpload:this.onFileUpload,children:"Upload JSON file"})}),(0,R.jsx)("div",{className:e.option,children:(0,R.jsx)(u.l,{onSubmit:this.getGcomDashboard,defaultValues:{gcomDashboard:""},children:e=>{let{register:a,errors:t}=e;return(0,R.jsx)(h.g,{label:"Import via grafana.com",invalid:!!t.gcomDashboard,error:t.gcomDashboard&&t.gcomDashboard.message,children:(0,R.jsx)(p.I,Object.assign({id:"url-input",placeholder:"Grafana.com dashboard URL or ID",type:"text"},a("gcomDashboard",{required:"A Grafana dashboard URL or ID is required",validate:F}),{addonAfter:ae||(ae=(0,R.jsx)(m.zx,{type:"submit",children:"Load"}))}))})}})}),(0,R.jsx)("div",{className:e.option,children:(0,R.jsx)(u.l,{onSubmit:this.getDashboardFromJson,defaultValues:{dashboardJson:""},children:e=>{let{register:a,errors:t}=e;return(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(h.g,{label:"Import via panel json",invalid:!!t.dashboardJson,error:t.dashboardJson&&t.dashboardJson.message,children:(0,R.jsx)(b.K,Object.assign({},a("dashboardJson",{required:"Need a dashboard JSON model",validate:T}),{"data-testid":l.wl.components.DashboardImportPage.textarea,id:"dashboard-json-textarea",rows:10}))}),(0,R.jsx)(m.zx,{type:"submit","data-testid":l.wl.components.DashboardImportPage.submit,children:"Load"})]})}})})]})}render(){const{loadingState:e}=this.props;return(0,R.jsx)(v.T,{navId:"dashboards/browse",pageNav:this.pageNav,children:(0,R.jsxs)(v.T.Contents,{children:[e===i.Gu.Loading&&(te||(te=(0,R.jsx)(g.wc,{justify:"center",children:(0,R.jsx)(g.Lh,{justify:"center",children:(0,R.jsx)(f.$,{size:32})})}))),[i.Gu.Error,i.Gu.NotStarted].includes(e)&&this.renderImportForm(),e===i.Gu.Done&&(re||(re=(0,R.jsx)(ee,{})))]})})}}const de=ie((0,x.HE)(le));de.displayName="DashboardImport";const ce=de,ue=(0,j.B)((e=>({option:r.css`
      margin-bottom: ${e.spacing(4)};
    `})))},26821:(e,a,t)=>{t.d(a,{X:()=>h});var r=t(52423),s=(t(68404),t(15546)),n=t(39266),o=t(25004),i=t(16755),l=t(23734),d=t(38437),c=t(35390),u=t(45916);const h=e=>{let{isCurrent:a,title:t,plugin:n,onClick:d,onDelete:c,disabled:h,showBadge:b,description:g,children:f}=e;const x=(0,i.wW)(p),j=h||n.state===s.BV.deprecated,y=(0,r.cx)({[x.item]:!0,[x.itemDisabled]:j,[x.current]:a});return(0,u.jsxs)("div",{className:y,"aria-label":o.wl.components.PluginVisualization.item(n.name),onClick:j?void 0:d,title:a?"Click again to close this section":n.name,children:[(0,u.jsx)("img",{className:(0,r.cx)(x.img,{[x.disabled]:j}),src:n.info.logos.small,alt:""}),(0,u.jsxs)("div",{className:(0,r.cx)(x.itemContent,{[x.disabled]:j}),children:[(0,u.jsx)("div",{className:x.name,children:t}),g?(0,u.jsx)("span",{className:x.description,children:g}):null,f]}),b&&(0,u.jsx)("div",{className:(0,r.cx)(x.badge,{[x.disabled]:j}),children:(0,u.jsx)(m,{plugin:n})}),c&&(0,u.jsx)(l.h,{name:"trash-alt",onClick:e=>{e.stopPropagation(),c()},className:x.deleteButton,"aria-label":"Delete button on panel type card"})]})};h.displayName="PanelTypeCard";const p=e=>({item:r.css`
      position: relative;
      display: flex;
      flex-shrink: 0;
      cursor: pointer;
      background: ${e.colors.background.secondary};
      border-radius: ${e.shape.borderRadius()};
      box-shadow: ${e.shadows.z1};
      border: 1px solid ${e.colors.background.secondary};
      align-items: center;
      padding: 8px;
      width: 100%;
      position: relative;
      overflow: hidden;
      transition: ${e.transitions.create(["background"],{duration:e.transitions.duration.short})};

      &:hover {
        background: ${e.colors.emphasize(e.colors.background.secondary,.03)};
      }
    `,itemContent:r.css`
      overflow: hidden;
      position: relative;
      padding: ${e.spacing(0,1)};
    `,itemDisabled:r.css`
      cursor: default;

      &,
      &:hover {
        background: ${e.colors.action.disabledBackground};
      }
    `,current:r.css`
      label: currentVisualizationItem;
      border: 1px solid ${e.colors.primary.border};
      background: ${e.colors.action.selected};
    `,disabled:r.css`
      opacity: ${e.colors.action.disabledOpacity};
      filter: grayscale(1);
      cursor: default;
      pointer-events: none;
    `,name:r.css`
      text-overflow: ellipsis;
      overflow: hidden;
      font-size: ${e.typography.size.sm};
      font-weight: ${e.typography.fontWeightMedium};
      width: 100%;
    `,description:r.css`
      display: block;
      text-overflow: ellipsis;
      overflow: hidden;
      color: ${e.colors.text.secondary};
      font-size: ${e.typography.bodySmall.fontSize};
      font-weight: ${e.typography.fontWeightLight};
      width: 100%;
      max-height: 4.5em;
    `,img:r.css`
      max-height: 38px;
      width: 38px;
      display: flex;
      align-items: center;
    `,badge:r.css`
      background: ${e.colors.background.primary};
    `,deleteButton:r.css`
      cursor: pointer;
      margin-left: auto;
    `}),m=e=>{let{plugin:a}=e;return(0,n.x)(a.signature)?(0,u.jsx)(d.o,{status:a.signature}):(0,u.jsx)(c.u,{state:a.state})};m.displayName="PanelPluginBadge"},35390:(e,a,t)=>{t.d(a,{u:()=>o});t(68404);var r=t(15546),s=t(64313),n=t(45916);const o=e=>{const a=function(e){switch(e){case r.BV.deprecated:return{text:"Deprecated",color:"red",tooltip:"This feature is deprecated and will be removed in a future release"};case r.BV.alpha:return{text:"Alpha",color:"blue",tooltip:"This feature is experimental and future updates might not be backward compatible"};case r.BV.beta:return{text:"Beta",color:"blue",tooltip:"This feature is close to complete but not fully tested"};default:return null}}(e.state);return a?(0,n.jsx)(s.C,{color:a.color,title:a.tooltip,text:a.text,icon:a.icon}):null}}}]);
//# sourceMappingURL=DashboardImport.a3c4a96b3038f522d6b2.js.map