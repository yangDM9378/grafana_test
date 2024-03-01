"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[7377],{77377:(e,t,i)=>{i.d(t,{D:()=>se});var s,n,a,r=i(52423),o=i(68404),l=i(28173),d=i(12717),c=i(54316),u=i(25004),h=i(8910),p=i(94570),m=i(5333),g=i(8006),v=i(54761),x=i(22222),f=i(78941),S=i(50191),j=i(66015),y=i(42870),C=i(93570),b=i(38953),O=i(45916);function w(e){let{pluginId:t}=e;const{value:i,loading:r,error:o}=(0,j.Z)((async()=>(0,C.i)().get(`/api/plugins/${t}/markdown/query_help`)),[]),l=(0,y.a)(i);return r?s||(s=(0,O.jsx)(b.u,{text:"Loading help..."})):o?n||(n=(0,O.jsx)("h3",{children:"An error occurred when loading help."})):""===i?a||(a=(0,O.jsx)("h3",{children:"No query help could be found."})):(0,O.jsx)("div",{className:"markdown-html",dangerouslySetInnerHTML:{__html:l}})}var R=i(46782),Q=i(42200),T=i(52253),q=i(91018),I=i(42204),N=i(84403),D=i(18474);var A,k,P,B,M,F,H,E,$,V=i(57157),W=i(60796),z=i(85699),_=i(4645),U=i(46889),L=i(70800),Z=i(17690);function G(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}class J extends o.PureComponent{constructor(e){var t,i,s,n;super(e),G(this,"onRelativeTimeChange",(e=>{this.setState({timeRangeFrom:e.target.value})})),G(this,"onTimeShiftChange",(e=>{this.setState({timeRangeShift:e.target.value})})),G(this,"onOverrideTime",(e=>{var t;const{options:i,onChange:s}=this.props,n=X(e.target.value),a=K(n);var r;a&&(null===(t=i.timeRange)||void 0===t?void 0:t.from)!==n&&s(Object.assign({},i,{timeRange:Object.assign({},null!==(r=i.timeRange)&&void 0!==r?r:{},{from:n})}));this.setState({relativeTimeIsValid:a})})),G(this,"onTimeShift",(e=>{var t;const{options:i,onChange:s}=this.props,n=X(e.target.value),a=K(n);var r;a&&(null===(t=i.timeRange)||void 0===t?void 0:t.shift)!==n&&s(Object.assign({},i,{timeRange:Object.assign({},null!==(r=i.timeRange)&&void 0!==r?r:{},{shift:n})}));this.setState({timeShiftIsValid:a})})),G(this,"onToggleTimeOverride",(()=>{const{onChange:e,options:t}=this.props;this.setState({timeRangeHide:!this.state.timeRangeHide},(()=>{var i;e(Object.assign({},t,{timeRange:Object.assign({},null!==(i=t.timeRange)&&void 0!==i?i:{},{hide:this.state.timeRangeHide})}))}))})),G(this,"onCacheTimeoutBlur",(e=>{const{options:t,onChange:i}=this.props;i(Object.assign({},t,{cacheTimeout:X(e.target.value)}))})),G(this,"onMaxDataPointsBlur",(e=>{const{options:t,onChange:i}=this.props;let s=parseInt(e.target.value,10);(isNaN(s)||0===s)&&(s=null),s!==t.maxDataPoints&&i(Object.assign({},t,{maxDataPoints:s}))})),G(this,"onMinIntervalBlur",(e=>{const{options:t,onChange:i}=this.props,s=X(e.target.value);s!==t.minInterval&&i(Object.assign({},t,{minInterval:s}))})),G(this,"onOpenOptions",(()=>{this.setState({isOpen:!0})})),G(this,"onCloseOptions",(()=>{this.setState({isOpen:!1})}));const{options:a}=e;this.state={timeRangeFrom:(null===(t=a.timeRange)||void 0===t?void 0:t.from)||"",timeRangeShift:(null===(i=a.timeRange)||void 0===i?void 0:i.shift)||"",timeRangeHide:null!==(s=null===(n=a.timeRange)||void 0===n?void 0:n.hide)&&void 0!==s&&s,isOpen:!1,relativeTimeIsValid:!0,timeShiftIsValid:!0}}renderCacheTimeoutOption(){var e,t;const{dataSource:i,options:s}=this.props;return null!==(e=i.meta.queryOptions)&&void 0!==e&&e.cacheTimeout?(0,O.jsx)("div",{className:"gf-form-inline",children:(0,O.jsxs)("div",{className:"gf-form",children:[(0,O.jsx)(m.c,{width:9,tooltip:"If your time series store has a query cache this option can override the default cache timeout. Specify a\n    numeric value in seconds.",children:"Cache timeout"}),(0,O.jsx)(_.I,{type:"text",className:"width-6",placeholder:"60",spellCheck:!1,onBlur:this.onCacheTimeoutBlur,defaultValue:null!==(t=s.cacheTimeout)&&void 0!==t?t:""})]})}):null}renderMaxDataPointsOption(){var e,t;const{data:i,options:s}=this.props,n=null===(e=i.request)||void 0===e?void 0:e.maxDataPoints,a=null!==(t=s.maxDataPoints)&&void 0!==t?t:"",r=""===a;return(0,O.jsx)("div",{className:"gf-form-inline",children:(0,O.jsxs)("div",{className:"gf-form",children:[A||(A=(0,O.jsx)(m.c,{width:9,tooltip:(0,O.jsx)(O.Fragment,{children:"The maximum data points per series. Used directly by some data sources and used in calculation of auto interval. With streaming data this value is used for the rolling buffer."}),children:"Max data points"})),(0,O.jsx)(_.I,{type:"number",className:"width-6",placeholder:`${n}`,spellCheck:!1,onBlur:this.onMaxDataPointsBlur,defaultValue:a}),r&&(0,O.jsxs)(O.Fragment,{children:[k||(k=(0,O.jsx)("div",{className:"gf-form-label query-segment-operator",children:"="})),P||(P=(0,O.jsx)("div",{className:"gf-form-label",children:"Width of panel"}))]})]})})}renderIntervalOption(){var e,t,i;const{data:s,dataSource:n,options:a}=this.props,r=null===(e=s.request)||void 0===e?void 0:e.interval,o=null!==(t=n.interval)&&void 0!==t?t:"No limit";return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)("div",{className:"gf-form-inline",children:(0,O.jsxs)("div",{className:"gf-form",children:[B||(B=(0,O.jsx)(m.c,{width:9,tooltip:(0,O.jsxs)(O.Fragment,{children:["A lower limit for the interval. Recommended to be set to write frequency, for example ",(0,O.jsx)("code",{children:"1m"})," ","if your data is written every minute. Default value can be set in data source settings for most data sources."]}),children:"Min interval"})),(0,O.jsx)(_.I,{type:"text",className:"width-6",placeholder:`${o}`,spellCheck:!1,onBlur:this.onMinIntervalBlur,defaultValue:null!==(i=a.minInterval)&&void 0!==i?i:""})]})}),(0,O.jsx)("div",{className:"gf-form-inline",children:(0,O.jsxs)("div",{className:"gf-form",children:[M||(M=(0,O.jsx)(m.c,{width:9,tooltip:(0,O.jsxs)(O.Fragment,{children:["The evaluated interval that is sent to data source and is used in ",(0,O.jsx)("code",{children:"$__interval"})," and"," ",(0,O.jsx)("code",{children:"$__interval_ms"})]}),children:"Interval"})),(0,O.jsx)(m.c,{width:6,children:r}),F||(F=(0,O.jsx)("div",{className:"gf-form-label query-segment-operator",children:"="})),H||(H=(0,O.jsx)("div",{className:"gf-form-label",children:"Time range / max data points"}))]})})]})}renderCollapsedText(e){var t;const{data:i,options:s}=this.props,{isOpen:n}=this.state;if(n)return;let a=null!==(t=s.maxDataPoints)&&void 0!==t?t:"";""===a&&i.request&&(a=`auto = ${i.request.maxDataPoints}`);let r=s.minInterval;return i.request&&(r=`${i.request.interval}`),(0,O.jsxs)(O.Fragment,{children:[(0,O.jsxs)("div",{className:e.collapsedText,children:["MD = ",a]}),(0,O.jsxs)("div",{className:e.collapsedText,children:["Interval = ",r]})]})}render(){const{timeRangeHide:e,relativeTimeIsValid:t,timeShiftIsValid:i}=this.state,{timeRangeFrom:s,timeRangeShift:n,isOpen:a}=this.state,r=Y();return(0,O.jsxs)(Z.t,{id:"Query options",index:0,title:"Query options",headerElement:this.renderCollapsedText(r),isOpen:a,onOpen:this.onOpenOptions,onClose:this.onCloseOptions,children:[this.renderMaxDataPointsOption(),this.renderIntervalOption(),this.renderCacheTimeoutOption(),(0,O.jsxs)("div",{className:"gf-form",children:[E||(E=(0,O.jsx)(m.c,{width:9,children:"Relative time"})),(0,O.jsx)(_.I,{type:"text",className:"width-6",placeholder:"1h",onChange:this.onRelativeTimeChange,onBlur:this.onOverrideTime,invalid:!t,value:s})]}),(0,O.jsxs)("div",{className:"gf-form",children:[$||($=(0,O.jsx)("span",{className:"gf-form-label width-9",children:"Time shift"})),(0,O.jsx)(_.I,{type:"text",className:"width-6",placeholder:"1h",onChange:this.onTimeShiftChange,onBlur:this.onTimeShift,invalid:!i,value:n})]}),(n||s)&&(0,O.jsx)("div",{className:"gf-form-inline",children:(0,O.jsx)(U._,{label:"Hide time info",labelWidth:18,children:(0,O.jsx)(L.r,{value:e,onChange:this.onToggleTimeOverride})})})]})}}const K=e=>!e||z.isValidTimeSpan(e),X=e=>""===e?null:e,Y=(0,S.B)((()=>{const{theme:e}=R.vc;return{collapsedText:r.css`
      margin-left: ${e.spacing.md};
      font-size: ${e.typography.size.sm};
      color: ${e.colors.textWeak};
    `}}));var ee,te;function ie(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}class se extends o.PureComponent{constructor(){super(...arguments),ie(this,"backendSrv",Q.ae),ie(this,"dataSourceSrv",(0,h.F)()),ie(this,"querySubscription",null),ie(this,"state",{isLoadingHelp:!1,helpContent:null,isPickerOpen:!1,isAddingMixed:!1,isHelpOpen:!1,queries:[],data:{state:l.Gu.NotStarted,series:[],timeRange:(0,d.JK)()}}),ie(this,"onChangeDataSource",(async e=>{const{dsSettings:t}=this.state,i=t?await(0,h.F)().get(t.uid):void 0,s=await(0,h.F)().get(e.uid),n=await async function(e,t,i,s){var n;let a=i;const r={type:e.type,uid:t},o=Object.assign({},null==e||null===(n=e.getDefaultQuery)||void 0===n?void 0:n.call(e,c.zj.PanelEditor),{datasource:r,refId:"A"});if((null==s?void 0:s.meta.id)!==e.meta.id){if(e.meta.mixed)return i;if((0,N.p)(s)&&(0,N.CZ)(e)){const t=await s.exportToAbstractQueries(i);a=await e.importFromAbstractQueries(t)}else{if(!s||!e.importQueries)return[o];a=await e.importQueries(i,s)}}return 0===a.length?[o]:a.map((t=>((0,D.Pr)(t.datasource)||e.meta.mixed||(t.datasource=r),t)))}(s,e.uid,this.state.queries,i),a=await this.dataSourceSrv.get(e.name);this.onChange({queries:n,dataSource:{name:e.name,uid:e.uid,type:e.meta.id,default:e.isDefault}}),this.setState({queries:n,dataSource:a,dsSettings:e})})),ie(this,"onAddQueryClick",(()=>{const{queries:e}=this.state;this.onQueriesChange((0,T.DI)(e,this.newQuery())),this.onScrollBottom()})),ie(this,"onAddExpressionClick",(()=>{this.onQueriesChange((0,T.DI)(this.state.queries,q.mV.newQuery())),this.onScrollBottom()})),ie(this,"onScrollBottom",(()=>{setTimeout((()=>{this.state.scrollElement&&this.state.scrollElement.scrollTo({top:1e4})}),20)})),ie(this,"onUpdateAndRun",(e=>{this.props.onOptionsChange(e),this.props.onRunQueries()})),ie(this,"onOpenHelp",(()=>{this.setState({isHelpOpen:!0})})),ie(this,"onCloseHelp",(()=>{this.setState({isHelpOpen:!1})})),ie(this,"renderMixedPicker",(()=>(0,O.jsx)(p.q,{mixed:!1,onChange:this.onAddMixedQuery,current:null,autoFocus:!0,variables:!0,onBlur:this.onMixedPickerBlur,openMenuOnFocus:!0}))),ie(this,"onAddMixedQuery",(e=>{this.onAddQuery({datasource:e.name}),this.setState({isAddingMixed:!1})})),ie(this,"onMixedPickerBlur",(()=>{this.setState({isAddingMixed:!1})})),ie(this,"onAddQuery",(e=>{const{dsSettings:t,queries:i}=this.state;this.onQueriesChange((0,T.DI)(i,e,{type:null==t?void 0:t.type,uid:null==t?void 0:t.uid})),this.onScrollBottom()})),ie(this,"onQueriesChange",(e=>{this.onChange({queries:e}),this.setState({queries:e})})),ie(this,"setScrollRef",(e=>{this.setState({scrollElement:e})}))}async componentDidMount(){const{queryRunner:e,options:t}=this.props;this.querySubscription=e.getData({withTransforms:!1,withFieldConfig:!1}).subscribe({next:e=>this.onPanelDataUpdate(e)});try{const e=await this.dataSourceSrv.get(t.dataSource),i=this.dataSourceSrv.getInstanceSettings(t.dataSource),s=await this.dataSourceSrv.get(),n=e.getRef(),a=t.queries.map((t=>{var i;return Object.assign({},(0,T.vH)(t)&&(null==e||null===(i=e.getDefaultQuery)||void 0===i?void 0:i.call(e,c.zj.PanelEditor)),{datasource:n},t)}));this.setState({queries:a,dataSource:e,dsSettings:i,defaultDataSource:s})}catch(e){console.log("failed to load data source",e)}}componentWillUnmount(){this.querySubscription&&(this.querySubscription.unsubscribe(),this.querySubscription=null)}onPanelDataUpdate(e){this.setState({data:e})}newQuery(){var e,t;const{dsSettings:i,defaultDataSource:s}=this.state,n=null!=i&&i.meta.mixed?s:i;return Object.assign({},null===(e=this.state.dataSource)||void 0===e||null===(t=e.getDefaultQuery)||void 0===t?void 0:t.call(e,c.zj.PanelEditor),{datasource:{uid:null==n?void 0:n.uid,type:null==n?void 0:n.type}})}onChange(e){this.props.onOptionsChange(Object.assign({},this.props.options,e))}renderTopSection(e){const{onOpenQueryInspector:t,options:i}=this.props,{dataSource:s,data:n}=this.state;return(0,O.jsx)("div",{children:(0,O.jsxs)("div",{className:e.dataSourceRow,children:[ee||(ee=(0,O.jsx)(m.c,{htmlFor:"data-source-picker",width:"auto",children:"Data source"})),(0,O.jsx)("div",{className:e.dataSourceRowItem,children:(0,O.jsx)(p.q,{onChange:this.onChangeDataSource,current:i.dataSource,metrics:!0,mixed:!0,dashboard:!0,variables:!0})}),s&&(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)("div",{className:e.dataSourceRowItem,children:(0,O.jsx)(g.zx,{variant:"secondary",icon:"question-circle",title:"Open data source help",onClick:this.onOpenHelp})}),(0,O.jsx)("div",{className:e.dataSourceRowItemOptions,children:(0,O.jsx)(J,{options:i,dataSource:s,data:n,onChange:this.onUpdateAndRun})}),t&&(0,O.jsx)("div",{className:e.dataSourceRowItem,children:(0,O.jsx)(g.zx,{variant:"secondary",onClick:t,"aria-label":u.wl.components.QueryTab.queryInspectorButton,children:"Query inspector"})})]})]})})}renderQueries(e){const{onRunQueries:t}=this.props,{data:i,queries:s}=this.state;return(0,I.yl)(e.name)?(0,O.jsx)(I.hD,{queries:s,panelData:i,onChange:this.onQueriesChange,onRunQueries:t}):(0,O.jsx)("div",{"aria-label":u.wl.components.QueryTab.content,children:(0,O.jsx)(W.l,{queries:s,dsSettings:e,onQueriesChange:this.onQueriesChange,onAddQuery:this.onAddQuery,onRunQueries:t,data:i})})}isExpressionsSupported(e){return!0===(e.meta.alerting||e.meta.mixed)}renderExtraActions(){return V.S.getAllExtraRenderAction().map(((e,t)=>e({onAddQuery:this.onAddQuery,onChangeDataSource:this.onChangeDataSource,key:t}))).filter(Boolean)}renderAddQueryRow(e,t){const{isAddingMixed:i}=this.state,s=!(i||(0,I.yl)(e.name));return(0,O.jsxs)(v.Lh,{spacing:"md",align:"flex-start",children:[s&&(0,O.jsx)(g.zx,{icon:"plus",onClick:this.onAddQueryClick,variant:"secondary","aria-label":u.wl.components.QueryTab.addQuery,children:"Query"}),R.ZP.expressionsEnabled&&this.isExpressionsSupported(e)&&(0,O.jsx)(g.zx,{icon:"plus",onClick:this.onAddExpressionClick,variant:"secondary",className:t.expressionButton,children:te||(te=(0,O.jsx)("span",{children:"Expression "}))}),this.renderExtraActions()]})}render(){const{isHelpOpen:e,dsSettings:t}=this.state,i=ne();return(0,O.jsx)(x.$,{autoHeightMin:"100%",scrollRefCallback:this.setScrollRef,children:(0,O.jsxs)("div",{className:i.innerWrapper,children:[this.renderTopSection(i),t&&(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)("div",{className:i.queriesWrapper,children:this.renderQueries(t)}),this.renderAddQueryRow(t,i),e&&(0,O.jsx)(f.u,{title:"Data source help",isOpen:!0,onDismiss:this.onCloseHelp,children:(0,O.jsx)(w,{pluginId:t.meta.id})})]})]})})}}const ne=(0,S.B)((()=>{const{theme:e}=R.ZP;return{innerWrapper:r.css`
      display: flex;
      flex-direction: column;
      padding: ${e.spacing.md};
    `,dataSourceRow:r.css`
      display: flex;
      margin-bottom: ${e.spacing.md};
    `,dataSourceRowItem:r.css`
      margin-right: ${e.spacing.inlineFormMargin};
    `,dataSourceRowItemOptions:r.css`
      flex-grow: 1;
      margin-right: ${e.spacing.inlineFormMargin};
    `,queriesWrapper:r.css`
      padding-bottom: 16px;
    `,expressionWrapper:r.css``,expressionButton:r.css`
      margin-right: ${e.spacing.sm};
    `}}))}}]);
//# sourceMappingURL=7377.b9072dcc15891ec3ddad.js.map