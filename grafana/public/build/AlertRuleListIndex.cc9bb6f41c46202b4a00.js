"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[2461,4286],{53852:(e,a,r)=>{r.r(a),r.d(a,{AlertRuleListUnconnected:()=>L,default:()=>q});var s,n=r(68404),t=r(36635),l=r(80795),i=r(65737),o=r(39106),c=r(70917),d=r(8006),u=r(54761),g=r(2247),p=r(37417),m=r(8105),h=r(78941),x=r(45916);function f(e){let{onDismiss:a}=e;return(0,x.jsx)(h.u,{title:"Adding an Alert",isOpen:!0,onDismiss:a,onClickBackdrop:a,children:s||(s=(0,x.jsxs)(u.wc,{spacing:"sm",children:[(0,x.jsx)("img",{src:"public/img/alert_howto_new.png",alt:""}),(0,x.jsx)("p",{children:"Alerts are added and configured in the Alert tab of any dashboard graph panel, letting you build and visualize an alert using existing queries."}),(0,x.jsx)("p",{children:"Remember to save the dashboard to persist your alert rule changes."})]}))})}var j=r(94130),v=r.n(j),b=r(1129),w=r(99500);const S=e=>{let{rule:a,search:r,onTogglePause:s}=e;const t=`${a.url}?editPanel=${a.panelId}&tab=alert`,l=(0,n.useCallback)((e=>(0,x.jsx)(v(),{highlightClassName:"highlight-search-match",textToHighlight:e,searchWords:[r]},e)),[r]);return(0,x.jsxs)(b.Z,{children:[(0,x.jsx)(b.Z.Heading,{children:l(a.name)}),(0,x.jsx)(b.Z.Figure,{children:(0,x.jsx)(w.J,{size:"xl",name:a.stateIcon,className:`alert-rule-item__icon ${a.stateClass}`})}),(0,x.jsxs)(b.Z.Meta,{children:[(0,x.jsxs)("span",{children:[(0,x.jsxs)("span",{className:`${a.stateClass}`,children:[l(a.stateText)," "]},"text"),"for ",a.stateAge]},"state"),a.info?l(a.info):null]}),(0,x.jsxs)(b.Z.Actions,{children:[(0,x.jsx)(d.zx,{variant:"secondary",icon:"paused"===a.state?"play":"pause",onClick:s,children:"paused"===a.state?"Resume":"Pause"},"play"),(0,x.jsx)(d.Qj,{variant:"secondary",href:t,icon:"cog",children:"Edit alert"},"edit")]})]})};var y,C=r(2843);const N=()=>y||(y=(0,x.jsxs)(C.b,{severity:"warning",title:"Grafana legacy alerting is going away soon",children:[(0,x.jsxs)("p",{children:["You are using Grafana legacy alerting, it has been deprecated and will be removed in the next major version of Grafana.",(0,x.jsx)("br",{}),"We encourage you to upgrade to the new Grafana Alerting experience."]}),(0,x.jsxs)("p",{children:["See"," ",(0,x.jsx)("a",{href:"https://grafana.com/docs/grafana/latest/alerting/unified-alerting/difference-old-new/",children:"What’s New with Grafana Alerting"})," ","to learn more about what‘s new or learn"," ",(0,x.jsx)("a",{href:"https://grafana.com/docs/grafana/latest/alerting/unified-alerting/opt-in/",children:"how to enable the new Grafana Alerting feature"}),"."]})]}));var R=r(45173),$=r(82983);const _=e=>e.searchQuery,k=e=>{const a=new RegExp(e.alertRules.searchQuery,"i");return e.alertRules.items.filter((e=>a.test(e.name)||a.test(e.stateText)||a.test(e.info)))};var A,P,F,T;function I(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}const E={getAlertRulesAsync:R.Au,setSearchQuery:$.ql,togglePauseAlertRule:R.en},O=(0,t.connect)((function(e){return{alertRules:k(e),search:_(e.alertRules),isLoading:e.alertRules.isLoading}}),E);class L extends n.PureComponent{constructor(){super(...arguments),I(this,"stateFilters",[{label:"All",value:"all"},{label:"OK",value:"ok"},{label:"Not OK",value:"not_ok"},{label:"Alerting",value:"alerting"},{label:"No data",value:"no_data"},{label:"Paused",value:"paused"},{label:"Pending",value:"pending"}]),I(this,"onStateFilterChanged",(e=>{l.E1.partial({state:e.value})})),I(this,"onOpenHowTo",(()=>{g.Z.publish(new m.Dn({component:f}))})),I(this,"onSearchQueryChange",(e=>{this.props.setSearchQuery(e)})),I(this,"onTogglePause",(e=>{this.props.togglePauseAlertRule(e.id,{paused:"paused"!==e.state})})),I(this,"alertStateFilterOption",(e=>{let{text:a,value:r}=e;return(0,x.jsx)("option",{value:r,children:a},r)}))}componentDidMount(){this.fetchRules()}componentDidUpdate(e){e.queryParams.state!==this.props.queryParams.state&&this.fetchRules()}async fetchRules(){await this.props.getAlertRulesAsync({state:this.getStateFilter()})}getStateFilter(){var e;return null!==(e=this.props.queryParams.state)&&void 0!==e?e:"all"}render(){const{alertRules:e,search:a,isLoading:r}=this.props;return(0,x.jsx)(p.T,{navId:"alert-list",children:(0,x.jsxs)(p.T.Contents,{isLoading:r,children:[(0,x.jsxs)("div",{className:"page-action-bar",children:[(0,x.jsx)("div",{className:"gf-form gf-form--grow",children:(0,x.jsx)(o.H,{placeholder:"Search alerts",value:a,onChange:this.onSearchQueryChange})}),(0,x.jsxs)("div",{className:"gf-form",children:[A||(A=(0,x.jsx)("label",{className:"gf-form-label",htmlFor:"alert-state-filter",children:"States"})),(0,x.jsx)("div",{className:"width-13",children:(0,x.jsx)(c.Ph,{inputId:"alert-state-filter",options:this.stateFilters,onChange:this.onStateFilterChanged,value:this.getStateFilter()})})]}),P||(P=(0,x.jsx)("div",{className:"page-action-bar__spacer"})),i.v.unifiedAlertingEnabled&&(F||(F=(0,x.jsx)(d.Qj,{variant:"primary",href:"alerting/ng/new",children:"Add NG Alert"}))),(0,x.jsx)(d.zx,{variant:"secondary",onClick:this.onOpenHowTo,children:"How to add an alert"})]}),T||(T=(0,x.jsx)(N,{})),(0,x.jsx)(u.wc,{spacing:"none",children:e.map((e=>(0,x.jsx)(S,{rule:e,search:a,onTogglePause:()=>this.onTogglePause(e)},e.id)))})]})})}}const q=O(L)},45173:(e,a,r)=>{r.d(a,{Au:()=>o,C2:()=>d,c1:()=>g,en:()=>c,fA:()=>p,fg:()=>u,tk:()=>m});var s=r(93570),n=r(80795),t=r(93686),l=r(47900),i=r(82983);function o(e){return async a=>{a((0,i.gz)());const r=await(0,s.i)().get("/api/alerts",e);a((0,i.Oc)(r))}}function c(e,a){return async r=>{await(0,s.i)().post(`/api/alerts/${e}/pause`,a);r(o({state:(n.E1.getSearchObject().state||"all").toString()}))}}function d(e){return async a=>{try{await(0,s.i)().post("/api/alert-notifications",e),a((0,t.$l)((0,l.AT)("Notification created"))),n.E1.push("/alerting/notifications")}catch(e){(0,s.kW)(e)&&a((0,t.$l)((0,l.t_)(e.data.error)))}}}function u(e){return async a=>{try{await(0,s.i)().put(`/api/alert-notifications/${e.id}`,e),a((0,t.$l)((0,l.AT)("Notification updated")))}catch(e){(0,s.kW)(e)&&a((0,t.$l)((0,l.t_)(e.data.error)))}}}function g(e){return async(a,r)=>{const n=r().notificationChannel.notificationChannel;await(0,s.i)().post("/api/alert-notifications/test",Object.assign({id:n.id},e))}}function p(){return async e=>{const a=(await(0,s.i)().get("/api/alert-notifiers")).sort(((e,a)=>e.name>a.name?1:-1));e((0,i.T2)(a))}}function m(e){return async a=>{await a(p());const r=await(0,s.i)().get(`/api/alert-notifications/${e}`);a((0,i.K)(r))}}},71759:(e,a,r)=>{r.r(a),r.d(a,{default:()=>ja});var s,n=r(52423),t=r(68404),l=r(70356),i=r(7197),o=r(13677),c=r(274),d=r(93250),u=r(72767),g=r(16755),p=r(8006),m=r(19512),h=r(64850),x=r(40833),f=r(73615),j=r(334),v=r(75442),b=r(30149),w=r(45916);const S=()=>{const{canCreateGrafanaRules:e,canCreateCloudRules:a}=(0,b.B)();return e||a?(0,w.jsx)(v.Z,{title:"You haven`t created any alert rules yet",buttonIcon:"bell",buttonLink:"alerting/new",buttonTitle:"New alert rule",proTip:"you can also create alert rules from existing panels and queries.",proTipLink:"https://grafana.com/docs/",proTipLinkTitle:"Learn more",proTipTarget:"_blank",onClick:()=>(0,d.PN)(x.z7.alertRuleFromScratch)}):s||(s=(0,w.jsx)(j._,{message:"No rules exist yet.",callToActionElement:(0,w.jsx)("div",{})}))};var y=r(64681),C=r.n(y),N=r(53257),R=r(2843),$=r(21888),_=r(76938),k=r(43271),A=r(23691),P=r(80458);function F(){const[e,a]=(0,t.useState)(!1),[r,s]=(0,N.Z)("grafana.unifiedalerting.hideErrors",!1),n=(0,_._)((e=>e.dataSources)),l=(0,_._)((e=>e.promRules)),i=(0,_._)((e=>e.rulerRules)),o=(0,g.wW)(I),c=(0,t.useMemo)((()=>{var e,a;const[r,s,t]=[n,l,i].map((e=>(0,k.Eu)().reduce(((a,r)=>{var s;const n=null===(s=e[r.name])||void 0===s?void 0:s.error;return e[r.name]&&n&&!(0,P.m$)(e[r.name])?[...a,{dataSource:r,error:n}]:a}),[]))),c=null===(e=l[k.GC])||void 0===e?void 0:e.error,d=null===(a=i[k.GC])||void 0===a?void 0:a.error,u=[];return c&&u.push((0,w.jsxs)(w.Fragment,{children:["Failed to load Grafana rules state: ",c.message||"Unknown error."]})),d&&u.push((0,w.jsxs)(w.Fragment,{children:["Failed to load Grafana rules config: ",d.message||"Unknown error."]})),r.forEach((e=>{let{dataSource:a,error:r}=e;u.push((0,w.jsxs)(w.Fragment,{children:["Failed to load the data source configuration for"," ",(0,w.jsx)("a",{href:(0,A.__)(a),className:o.dsLink,children:a.name}),": ",r.message||"Unknown error."]}))})),s.forEach((e=>{let{dataSource:a,error:r}=e;return u.push((0,w.jsxs)(w.Fragment,{children:["Failed to load rules state from"," ",(0,w.jsx)("a",{href:(0,A.__)(a),className:o.dsLink,children:a.name}),": ",r.message||"Unknown error."]}))})),t.forEach((e=>{let{dataSource:a,error:r}=e;return u.push((0,w.jsxs)(w.Fragment,{children:["Failed to load rules config from"," ",(0,w.jsx)("a",{href:(0,A.__)(a),className:o.dsLink,children:a.name}),": ",r.message||"Unknown error."]}))})),u}),[n,l,i,o.dsLink]);return(0,w.jsxs)(w.Fragment,{children:[!!c.length&&r&&(0,w.jsx)(T,{count:c.length,onClick:()=>s((e=>!e))}),!!c.length&&!r&&(0,w.jsxs)(R.b,{"data-testid":"cloud-rulessource-errors",title:"Errors loading rules",severity:"error",onRemove:()=>s(!0),children:[e&&c.map(((e,a)=>(0,w.jsx)("div",{children:e},a))),!e&&(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)("div",{children:c[0]}),c.length>=2&&(0,w.jsxs)(p.zx,{className:o.moreButton,fill:"text",icon:"angle-right",size:"sm",onClick:()=>a(!0),children:[c.length-1," more ",C()("error",c.length-1)]})]})]})]})}const T=e=>{let{count:a,onClick:r}=e;const s=(0,g.wW)(I);return(0,w.jsx)("div",{className:s.floatRight,children:(0,w.jsx)($.u,{content:"Show all errors",placement:"bottom",children:(0,w.jsx)(p.zx,{fill:"text",variant:"destructive",icon:"exclamation-triangle",onClick:r,children:a>1?(0,w.jsxs)(w.Fragment,{children:[a," errors"]}):(0,w.jsx)(w.Fragment,{children:"1 error"})})})})},I=e=>({moreButton:n.css`
    padding: 0;
  `,floatRight:n.css`
    display: flex;
    justify-content: flex-end;
  `,dsLink:n.css`
    font-weight: ${e.typography.fontWeightBold};
  `});var E,O,L,q,W=r(60277),z=r(38953),G=r(81691),M=r(1558),D=r(42949),B=r(13),Z=r(97536),H=r(5302),U=r(54761),K=r(99500),J=r(64313),Q=r(2024),V=r(65673),Y=r(97846),X=r(64834),ee=r(23542),ae=r(41058),re=r(83221),se=r(76527),ne=r(9085),te=r.n(ne),le=r(82897),ie=r(19677),oe=r(78941),ce=r(63454),de=r(55357),ue=r(18304);const ge=e=>{const{group:a,namespace:r,onClose:s}=e,[n,l]=(0,t.useState)(!1),[i,o]=(0,t.useState)(a.rules),c=(0,g.wW)(he),d=(0,t.useCallback)((e=>{if(!e.destination)return;if(e.destination.index===e.source.index)return;const s=function(e,a,r){const s=Array.from(e),[n]=s.splice(a,1);return s.splice(r,0,n),s}(i,e.source.index,e.destination.index);o(s);const n=(0,k.EG)(r.rulesSource),t=(0,le.compact)(s.map((e=>e.rulerRule)));l(!0),(0,ce.WI)((0,X.tg)({namespaceName:r.name,groupName:a.name,rulesSourceName:n,newRules:t})).unwrap().finally((()=>{l(!1)}))}),[a.name,r.name,r.rulesSource,i]),u=i.map((e=>Object.assign({},e,{uid:String((0,de.Om)(e.rulerRule))})));return(0,w.jsx)(oe.u,{className:c.modal,isOpen:!0,title:(0,w.jsx)(me,{namespace:r,group:a}),onDismiss:s,onClickBackdrop:s,children:(0,w.jsx)(ie.Z5,{onDragEnd:d,children:(0,w.jsx)(ie.bK,{droppableId:"alert-list",mode:"standard",renderClone:(e,a,r)=>(0,w.jsx)(pe,{provided:e,rule:u[r.source.index],isClone:!0}),children:e=>(0,w.jsxs)("div",Object.assign({ref:e.innerRef,className:te()(c.listContainer,n&&c.disabled)},e.droppableProps,{children:[u.map(((e,a)=>(0,w.jsx)(ie._l,{draggableId:e.uid,index:a,isDragDisabled:n,children:a=>(0,w.jsx)(pe,{provided:a,rule:e},e.uid)},e.uid))),e.placeholder]}))})})})},pe=e=>{let{provided:a,rule:r,isClone:s=!1,isDragging:n=!1}=e;const t=(0,g.wW)(he);return(0,w.jsxs)("div",Object.assign({className:te()(t.listItem,s&&"isClone",n&&"isDragging"),ref:a.innerRef},a.draggableProps,a.dragHandleProps,{children:[(0,P.x_)(r.promRule)&&(0,w.jsx)(ue.l,{state:r.promRule.state}),(0,P.OP)(r.promRule)&&(E||(E=(0,w.jsx)(J.C,{text:"Recording",color:"blue"}))),(0,w.jsx)("div",{className:t.listItemName,children:r.name}),O||(O=(0,w.jsx)(K.J,{name:"draggabledots"}))]}))},me=e=>{let{namespace:a,group:r}=e;const s=(0,g.wW)(he);return(0,w.jsxs)("div",{className:s.header,children:[L||(L=(0,w.jsx)(K.J,{name:"folder"})),(0,k.jq)(a.rulesSource)&&(0,w.jsx)($.u,{content:a.rulesSource.name,placement:"top",children:(0,w.jsx)("img",{alt:a.rulesSource.meta.name,className:s.dataSourceIcon,src:a.rulesSource.meta.info.logos.small})}),(0,w.jsx)("span",{children:a.name}),q||(q=(0,w.jsx)(K.J,{name:"angle-right"})),(0,w.jsx)("span",{children:r.name})]})},he=e=>({modal:n.css`
    max-width: 640px;
    max-height: 80%;
    overflow: hidden;
  `,listItem:n.css`
    display: flex;
    flex-direction: row;
    align-items: center;

    gap: ${e.spacing()};

    background: ${e.colors.background.primary};
    color: ${e.colors.text.secondary};

    border-bottom: solid 1px ${e.colors.border.medium};
    padding: ${e.spacing(1)} ${e.spacing(2)};

    &:last-child {
      border-bottom: none;
    }

    &.isClone {
      border: solid 1px ${e.colors.primary.shade};
    }
  `,listContainer:n.css`
    user-select: none;
    border: solid 1px ${e.colors.border.medium};
  `,disabled:n.css`
    opacity: 0.5;
    pointer-events: none;
  `,listItemName:n.css`
    flex: 1;

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `,header:n.css`
    display: flex;
    align-items: center;

    gap: ${e.spacing(1)};
  `,dataSourceIcon:n.css`
    width: ${e.spacing(2)};
    height: ${e.spacing(2)};
  `});var xe=r(22587);const fe=e=>{let{children:a,status:r}=e;const s=(0,g.wW)(je);return(0,w.jsx)("span",{className:s[r],children:a||r})},je=e=>({[xe.x_.Inactive]:n.css`
    color: ${e.colors.success.text};
  `,[xe.x_.Pending]:n.css`
    color: ${e.colors.warning.text};
  `,[xe.x_.Firing]:n.css`
    color: ${e.colors.error.text};
  `,neutral:n.css`
    color: ${e.colors.text.secondary};
  `});var ve,be;const we={total:0,recording:0,[xe.x_.Firing]:0,[xe.x_.Pending]:0,[xe.x_.Inactive]:0,error:0},Se=e=>{let{showInactive:a,showRecording:r,group:s,namespaces:n}=e;const l=(0,t.useMemo)((()=>{const e=Object.assign({},we),a=a=>{var r,s;a.promRule&&(0,P.x_)(a.promRule)&&(e[a.promRule.state]+=1),"err"!==(null===(r=a.promRule)||void 0===r?void 0:r.health)&&"error"!==(null===(s=a.promRule)||void 0===s?void 0:s.health)||(e.error+=1),(a.promRule&&(0,P.OP)(a.promRule)||a.rulerRule&&(0,P.yF)(a.rulerRule))&&(e.recording+=1),e.total+=1};return s&&s.rules.forEach(a),n&&n.forEach((e=>e.groups.forEach((e=>e.rules.forEach(a))))),e}),[s,n]),i=[];return l[xe.x_.Firing]&&i.push((0,w.jsxs)(fe,{status:xe.x_.Firing,children:[l[xe.x_.Firing]," firing"]},"firing")),l.error&&i.push((0,w.jsxs)(fe,{status:xe.x_.Firing,children:[l.error," errors"]},"errors")),l[xe.x_.Pending]&&i.push((0,w.jsxs)(fe,{status:xe.x_.Pending,children:[l[xe.x_.Pending]," pending"]},"pending")),a&&l[xe.x_.Inactive]&&i.push((0,w.jsxs)(fe,{status:"neutral",children:[l[xe.x_.Inactive]," normal"]},"inactive")),r&&l.recording&&i.push((0,w.jsxs)(fe,{status:"neutral",children:[l.recording," recording"]},"recording")),(0,w.jsxs)("div",{children:[(0,w.jsxs)("span",{children:[l.total," ",C()("rule",l.total)]}),!!i.length&&(0,w.jsxs)(w.Fragment,{children:[ve||(ve=(0,w.jsx)("span",{children:": "})),i.reduce(((e,a,r)=>e.length?[e,(0,w.jsx)(t.Fragment,{children:be||(be=(0,w.jsx)("span",{children:", "}))},r),a]:[a]),[])]})]})};var ye,Ce,Ne,Re,$e=r(90139);const _e=t.memo((e=>{var a;let{group:r,namespace:s,expandAll:n,viewMode:l}=e;const{rulesSource:i}=s,o=(0,h.I0)(),c=(0,g.wW)(ke),[u,p]=(0,t.useState)(!1),[m,f]=(0,t.useState)(!1),[j,v]=(0,t.useState)(!1),[S,y]=(0,t.useState)(!n),{canEditRules:N}=(0,b.B)();(0,t.useEffect)((()=>{y(!n)}),[n]);const{hasRuler:R,rulerRulesLoaded:_}=(0,Y.h)(),F=null===(a=r.rules[0])||void 0===a?void 0:a.rulerRule,T=F&&(0,P.Pc)(F)&&F.grafana_alert.namespace_uid||void 0,{folder:I}=(0,V.W)(T),E=R(i)&&_(i)&&!r.rules.find((e=>!!e.rulerRule)),O=(0,P.Jq)(r),L=r.rules.some((e=>(0,P.Pc)(e.rulerRule)&&e.rulerRule.grafana_alert.provenance)),q="list"===l,W="grouped"===l,z=[];if(E)z.push(ye||(ye=(0,w.jsxs)(U.Lh,{children:[(0,w.jsx)(G.$,{}),"deleting"]},"is-deleting")));else if(i===k.GC){if(T){const e=(0,A.HV)(T);null!=I&&I.canSave&&(W&&!L&&(z.push((0,w.jsx)(re.A,{"aria-label":"edit rule group","data-testid":"edit-group",icon:"pen",tooltip:"edit rule group",onClick:()=>p(!0)},"edit")),z.push((0,w.jsx)(re.A,{"aria-label":"re-order rules","data-testid":"reorder-group",icon:"exchange-alt",tooltip:"reorder rules",className:c.rotate90,onClick:()=>v(!0)},"reorder"))),q&&z.push((0,w.jsx)(re.A,{"aria-label":"go to folder",icon:"folder-open",tooltip:"go to folder",to:e,target:"__blank"},"goto"))),null!=I&&I.canAdmin&&q&&z.push((0,w.jsx)(re.A,{"aria-label":"manage permissions",icon:"lock",tooltip:"manage permissions",to:e+"/permissions",target:"__blank"},"manage-perms"))}}else N(i.name)&&R(i)&&(O||(z.push((0,w.jsx)(re.A,{"aria-label":"edit rule group","data-testid":"edit-group",icon:"pen",tooltip:"edit rule group",onClick:()=>p(!0)},"edit")),z.push((0,w.jsx)(re.A,{"aria-label":"re-order rules","data-testid":"reorder-group",icon:"exchange-alt",tooltip:"re-order rules",className:c.rotate90,onClick:()=>v(!0)},"reorder"))),z.push((0,w.jsx)(re.A,{"aria-label":"delete rule group","data-testid":"delete-group",icon:"trash-alt",tooltip:"delete rule group",onClick:()=>f(!0)},"delete-group")));const M=q?(0,w.jsx)(ae.V,{namespace:s.name}):(0,w.jsx)(ae.V,{namespace:s.name,group:r.name});return(0,w.jsxs)("div",{className:c.wrapper,"data-testid":"rule-group",children:[(0,w.jsxs)("div",{className:c.header,"data-testid":"rule-group-header",children:[(0,w.jsx)(ee.U,{size:"sm",className:c.collapseToggle,isCollapsed:S,onToggle:y,"data-testid":"group-collapse-toggle"}),(0,w.jsx)(K.J,{name:S?"folder":"folder-open"}),(0,k.jq)(i)&&(0,w.jsx)($.u,{content:i.name,placement:"top",children:(0,w.jsx)("img",{alt:i.meta.name,className:c.dataSourceIcon,src:i.meta.info.logos.small})}),(0,w.jsxs)("h6",{className:c.heading,children:[O&&(Ce||(Ce=(0,w.jsx)(J.C,{color:"purple",text:"Federated"})))," ",M]}),(0,w.jsx)("div",{className:c.spacer}),(0,w.jsx)("div",{className:c.headerStats,children:(0,w.jsx)(Se,{showInactive:!1,group:r})}),!!z.length&&(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)("div",{className:c.actionsSeparator,children:"|"}),(0,w.jsx)("div",{className:c.actionIcons,children:z})]})]}),!S&&(0,w.jsx)($e.i,{showSummaryColumn:!0,className:c.rulesTable,showGuidelines:!0,showNextEvaluationColumn:Boolean(r.interval),rules:r.rules}),u&&(0,w.jsx)(se.vq,{group:r,namespace:s,onClose:()=>function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0]||(0,d.PN)(x.z7.leavingRuleGroupEdit),p(!1)}()}),j&&(0,w.jsx)(ge,{group:r,namespace:s,onClose:()=>v(!1)}),(0,w.jsx)(Q.s,{isOpen:m,title:"Delete group",body:(0,w.jsxs)("div",{children:["Deleting this group will permanently remove the group",Ne||(Ne=(0,w.jsx)("br",{})),"and ",r.rules.length," alert ",C()("rule",r.rules.length)," belonging to it.",Re||(Re=(0,w.jsx)("br",{})),"Are you sure you want to delete this group?"]}),onConfirm:()=>{o((0,X.oE)(s,r)),f(!1)},onDismiss:()=>f(!1),confirmText:"Delete"})]})}));_e.displayName="RulesGroup";const ke=e=>({wrapper:n.css`
    & + & {
      margin-top: ${e.spacing(2)};
    }
  `,header:n.css`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: ${e.spacing(1)} ${e.spacing(1)} ${e.spacing(1)} 0;
    background-color: ${e.colors.background.secondary};
    flex-wrap: wrap;
  `,headerStats:n.css`
    span {
      vertical-align: middle;
    }

    ${e.breakpoints.down("sm")} {
      order: 2;
      width: 100%;
      padding-left: ${e.spacing(1)};
    }
  `,heading:n.css`
    margin-left: ${e.spacing(1)};
    margin-bottom: 0;
  `,spacer:n.css`
    flex: 1;
  `,collapseToggle:n.css`
    background: none;
    border: none;
    margin-top: -${e.spacing(1)};
    margin-bottom: -${e.spacing(1)};

    svg {
      margin-bottom: 0;
    }
  `,dataSourceIcon:n.css`
    width: ${e.spacing(2)};
    height: ${e.spacing(2)};
    margin-left: ${e.spacing(2)};
  `,dataSourceOrigin:n.css`
    margin-right: 1em;
    color: ${e.colors.text.disabled};
  `,actionsSeparator:n.css`
    margin: 0 ${e.spacing(2)};
  `,actionIcons:n.css`
    & > * + * {
      margin-left: ${e.spacing(.5)};
    }
  `,rulesTable:n.css`
    margin-top: ${e.spacing(3)};
  `,rotate90:n.css`
    transform: rotate(90deg);
  `});function Ae(e){return(0,t.useMemo)((()=>e.flatMap((e=>e.groups.map((a=>({namespace:e,group:a})))))),[e])}var Pe,Fe,Te,Ie;const Ee=e=>{let{namespaces:a,expandAll:r}=e;const s=(0,g.wW)(Oe),n=(0,_._)((e=>e.dataSources)),l=(0,_._)((e=>e.promRules)),i=(0,t.useMemo)(k.Eu,[]),o=Ae(a),c=(0,t.useMemo)((()=>i.filter((e=>(0,H.op)(l[e.name])||(0,H.op)(n[e.name])))),[l,n,i]),d=i.some((e=>{var a,r,s;return null!==(a=null===(r=l[e.name])||void 0===r||null===(s=r.result)||void 0===s?void 0:s.length)&&void 0!==a&&a})),u=i.length>0,p=c.length>0,m=a.length>0,{numberOfPages:h,onPageChange:x,page:f,pageItems:j}=(0,B.h)(o,1,D.gN);return(0,w.jsxs)("section",{className:s.wrapper,children:[(0,w.jsxs)("div",{className:s.sectionHeader,children:[Pe||(Pe=(0,w.jsx)("h5",{children:"Mimir / Cortex / Loki"})),c.length?(0,w.jsx)(z.u,{className:s.loader,text:`Loading rules from ${c.length} ${C()("source",c.length)}`}):Fe||(Fe=(0,w.jsx)("div",{}))]}),j.map((e=>{let{group:a,namespace:s}=e;return(0,w.jsx)(_e,{group:a,namespace:s,expandAll:r,viewMode:"grouped"},`${(0,k.v_)(s.rulesSource)}-${s.name}-${a.name}`)})),!u&&(Te||(Te=(0,w.jsx)("p",{children:"There are no Prometheus or Loki data sources configured."}))),u&&!p&&!m&&(Ie||(Ie=(0,w.jsx)("p",{children:"No rules found."}))),!d&&p&&(0,w.jsx)(G.$,{size:24,className:s.spinner}),(0,w.jsx)(M.t,{className:s.pagination,currentPage:f,numberOfPages:h,onNavigate:x,hideWhenSinglePage:!0})]})},Oe=e=>({loader:n.css`
    margin-bottom: 0;
  `,sectionHeader:n.css`
    display: flex;
    justify-content: space-between;
  `,wrapper:n.css`
    margin-bottom: ${e.spacing(4)};
  `,spinner:n.css`
    text-align: center;
    padding: ${e.spacing(2)};
  `,pagination:(0,Z.Z)(e)});var Le,qe,We,ze=r(36521);const Ge=e=>{let{namespaces:a,expandAll:r}=e;const s=(0,g.wW)(Me),[n]=(0,m.K)(),{prom:t,ruler:l}=(0,_._)((e=>({prom:e.promRules[k.GC]||H.oq,ruler:e.rulerRules[k.GC]||H.oq}))),i=t.loading||l.loading,o=!!t.result||!!l.result,c="list"===n.view,d=c?(0,ze.Kd)(a):a,u=Ae(d),{numberOfPages:p,onPageChange:h,page:x,pageItems:f}=(0,B.h)(u,1,D.gN);return(0,w.jsxs)("section",{className:s.wrapper,children:[(0,w.jsxs)("div",{className:s.sectionHeader,children:[Le||(Le=(0,w.jsx)("h5",{children:"Grafana"})),i?(0,w.jsx)(z.u,{className:s.loader,text:"Loading..."}):qe||(qe=(0,w.jsx)("div",{}))]}),f.map((e=>{let{group:a,namespace:s}=e;return(0,w.jsx)(_e,{group:a,namespace:s,expandAll:r,viewMode:c?"list":"grouped"},`${s.name}-${a.name}`)})),o&&0===(null==d?void 0:d.length)&&(We||(We=(0,w.jsx)("p",{children:"No rules found."}))),!o&&i&&(0,w.jsx)(G.$,{size:24,className:s.spinner}),(0,w.jsx)(M.t,{className:s.pagination,currentPage:x,numberOfPages:p,onNavigate:h,hideWhenSinglePage:!0})]})},Me=e=>({loader:n.css`
    margin-bottom: 0;
  `,sectionHeader:n.css`
    display: flex;
    justify-content: space-between;
  `,wrapper:n.css`
    margin-bottom: ${e.spacing(4)};
  `,spinner:n.css`
    text-align: center;
    padding: ${e.spacing(2)};
  `,pagination:(0,Z.Z)(e)}),De=e=>{let{rules:a,state:r,defaultCollapsed:s=!1}=e;const[n,l]=(0,t.useState)(s),i=(0,g.wW)(Be);return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)("h4",{className:i.header,children:[(0,w.jsx)(ee.U,{className:i.collapseToggle,size:"xxl",isCollapsed:n,onToggle:()=>l(!n)}),(0,P.SS)(r)," (",a.length,")"]}),!n&&(0,w.jsx)($e.i,{className:i.rulesTable,rules:a,showGroupColumn:!0})]})},Be=e=>({collapseToggle:n.css`
    vertical-align: middle;
  `,header:n.css`
    margin-top: ${e.spacing(2)};
  `,rulesTable:n.css`
    margin-top: ${e.spacing(3)};
  `});var Ze,He,Ue,Ke,Je,Qe=r(68522),Ve=r(94570),Ye=r(65678),Xe=r(83744),ea=r(4645),aa=r(37625);const ra=[{icon:"folder",label:"Grouped",value:"grouped"},{icon:"list-ul",label:"List",value:"list"},{icon:"heart-rate",label:"State",value:"state"}],sa=[{label:"Alert ",value:xe.pz.Alerting},{label:"Recording ",value:xe.pz.Recording}],na=e=>({container:n.css`
      display: flex;
      flex-direction: column;
      padding-bottom: ${e.spacing(1)};
      margin-bottom: ${e.spacing(1)};
    `,inputWidth:n.css`
      width: 340px;
      flex-grow: 0;
    `,flexRow:n.css`
      display: flex;
      flex-direction: row;
      align-items: flex-end;
      width: 100%;
      flex-wrap: wrap;
    `,spaceBetween:n.css`
      justify-content: space-between;
    `,rowChild:n.css`
      margin: ${e.spacing(0,1,0,0)};
    `,clearButton:n.css`
      margin-top: ${e.spacing(1)};
    `}),ta=()=>{var e;const[a,r]=(0,m.K)(),[s,l]=(0,t.useState)(Math.floor(100*Math.random())),i=`dataSource-${s}`,o=`queryString-${s}`,{dataSource:c,alertState:u,queryString:h,ruleType:f}=(0,A.lC)(a),j=(0,g.wW)(na),v=Object.entries(xe.x_).map((e=>{let[a,r]=e;return{label:(0,P.SS)(r),value:r}})),b=(0,le.debounce)((e=>{const a=e.target;r({queryString:a.value||null})}),600),S=Ze||(Ze=(0,w.jsx)(K.J,{name:"search"}));return(0,w.jsxs)("div",{className:j.container,children:[(0,w.jsx)(Ye.g,{className:j.inputWidth,label:"Search by data source",children:(0,w.jsx)(Ve.q,{alerting:!0,noDefault:!0,placeholder:"All data sources",current:c,onChange:e=>{r({dataSource:e.name})},onClear:()=>{r({dataSource:null})}},i)}),(0,w.jsxs)("div",{className:(0,n.cx)(j.flexRow,j.spaceBetween),children:[(0,w.jsxs)("div",{className:j.flexRow,children:[(0,w.jsx)(Ye.g,{className:j.rowChild,label:He||(He=(0,w.jsx)(Xe._,{children:(0,w.jsxs)(Qe.Stack,{gap:.5,children:[(0,w.jsx)("span",{children:"Search by label"}),(0,w.jsx)($.u,{content:(0,w.jsxs)("div",{children:["Filter rules and alerts using label querying, ex:",(0,w.jsx)("code",{children:'{severity="critical", instance=~"cluster-us-.+"}'})]}),children:(0,w.jsx)(K.J,{name:"info-circle",size:"sm"})})]})})),children:(0,w.jsx)(ea.I,{className:j.inputWidth,prefix:S,onChange:b,defaultValue:h,placeholder:"Search","data-testid":"search-query-input"},o)}),(0,w.jsxs)("div",{className:j.rowChild,children:[Ue||(Ue=(0,w.jsx)(Xe._,{children:"State"})),(0,w.jsx)(aa.S,{options:v,value:u,onChange:e=>{(0,d.PN)(x.z7.clickingAlertStateFilters),r({alertState:e})}})]}),(0,w.jsxs)("div",{className:j.rowChild,children:[Ke||(Ke=(0,w.jsx)(Xe._,{children:"Rule type"})),(0,w.jsx)(aa.S,{options:sa,value:f,onChange:e=>{r({ruleType:e})}})]}),(0,w.jsxs)("div",{className:j.rowChild,children:[Je||(Je=(0,w.jsx)(Xe._,{children:"View as"})),(0,w.jsx)(aa.S,{options:ra,value:String(null!==(e=a.view)&&void 0!==e?e:ra[0].value),onChange:e=>{r({view:e})}})]})]}),(c||u||h||f)&&(0,w.jsx)("div",{className:j.flexRow,children:(0,w.jsx)(p.zx,{className:j.clearButton,fullWidth:!1,icon:"times",variant:"secondary",onClick:()=>{r({alertState:null,queryString:null,dataSource:null,ruleType:null}),setTimeout((()=>l(s+1)),100)},children:"Clear filters"})})]})]})};var la=r(8910),ia=r(72710);const oa=e=>(a,r)=>{const s=r.groups.reduce(ca(e),[]);return s.length&&a.push(Object.assign({},r,{groups:s})),a},ca=e=>(a,r)=>{const s=r.rules.filter((a=>{var r;if(e.ruleType&&e.ruleType!==(null===(r=a.promRule)||void 0===r?void 0:r.type))return!1;if(e.dataSource&&(0,P.Pc)(a.rulerRule)&&!da(a.rulerRule,e))return!1;if(e.queryString){var s;const r=e.queryString.toLocaleLowerCase(),n=null===(s=a.name)||void 0===s?void 0:s.toLocaleLowerCase().includes(r),t=(0,ia.Zh)(e.queryString),l=(0,ia.eD)(a.labels,t),i=a.promRule&&a.promRule.type===xe.pz.Alerting&&a.promRule.alerts&&a.promRule.alerts.some((e=>(0,ia.eD)(e.labels,t)));if(!(n||l||i))return!1}return!!(!e.alertState||a.promRule&&(0,P.x_)(a.promRule)&&a.promRule.state===e.alertState)}));return s.length&&a.push(Object.assign({},r,{rules:s})),a},da=(e,a)=>!a.dataSource||!!e.grafana_alert.data.find((e=>{if(!e.datasourceUid)return!1;const r=(0,la.F)().getInstanceSettings(e.datasourceUid);return(null==r?void 0:r.name)===a.dataSource}));var ua,ga,pa,ma=r(74846);const ha={groups:e=>{let{namespaces:a,expandAll:r}=e;const[s,n]=(0,t.useMemo)((()=>{const e=a.map((e=>Object.assign({},e,{groups:e.groups.sort(((e,a)=>e.name.localeCompare(a.name)))}))).sort(((e,a)=>e.name.localeCompare(a.name)));return[e.filter((e=>(0,k.HY)(e.rulesSource))),e.filter((e=>(0,k.jq)(e.rulesSource)))]}),[a]);return(0,t.useEffect)((()=>{(0,d.PN)(x.z7.loadedList)}),[]),(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(W.q,{actions:[h.bW.AlertingRuleRead],children:(0,w.jsx)(Ge,{namespaces:s,expandAll:r})}),(0,w.jsx)(W.q,{actions:[h.bW.AlertingRuleExternalRead],children:(0,w.jsx)(Ee,{namespaces:n,expandAll:r})})]})},state:e=>{let{namespaces:a}=e;const r=(0,A.lC)((0,m.K)()[0]),s=(0,t.useMemo)((()=>{const e={[xe.x_.Firing]:[],[xe.x_.Inactive]:[],[xe.x_.Pending]:[]};return a.forEach((a=>a.groups.forEach((a=>a.rules.forEach((a=>{a.promRule&&(0,P.x_)(a.promRule)&&e[a.promRule.state].push(a)})))))),Object.values(e).forEach((e=>e.sort(((e,a)=>e.name.localeCompare(a.name))))),e}),[a]);return(0,w.jsxs)(w.Fragment,{children:[(!r.alertState||r.alertState===xe.x_.Firing)&&(0,w.jsx)(De,{state:xe.x_.Firing,rules:s[xe.x_.Firing]}),(!r.alertState||r.alertState===xe.x_.Pending)&&(0,w.jsx)(De,{state:xe.x_.Pending,rules:s[xe.x_.Pending]}),(!r.alertState||r.alertState===xe.x_.Inactive)&&(0,w.jsx)(De,{defaultCollapsed:r.alertState!==xe.x_.Inactive,state:xe.x_.Inactive,rules:s[xe.x_.Inactive]})]})}},xa=(0,u.Pf)((()=>{const e=(0,h.I0)(),a=(0,g.wW)(fa),r=(0,t.useMemo)(k.mA,[]),s=(0,l.TH)(),[n,u]=(0,t.useState)(!1),[j]=(0,m.K)(),v=(0,A.lC)(j),y=Object.values(v).some((e=>void 0!==e)),{canCreateGrafanaRules:C,canCreateCloudRules:N}=(0,b.B)(),R=ha[j.view]?j.view:"groups",$=ha[R],P=(0,_._)((e=>e.promRules)),T=(0,_._)((e=>e.rulerRules)),I=r.some((e=>{var a,r;return(null===(a=P[e])||void 0===a?void 0:a.loading)||(null===(r=T[e])||void 0===r?void 0:r.loading)})),E=Object.entries(P),O=E.every((e=>{let[a,r]=e;return r.dispatched&&(void 0!==(null==r?void 0:r.result)||void 0!==(null==r?void 0:r.error))})),L=E.every((e=>{var a;let[r,s]=e;return s.dispatched&&0===(null==s||null===(a=s.result)||void 0===a?void 0:a.length)})),[q,W]=(0,i.Z)((async()=>{I||await e((0,X.ei)())}),[I]);(0,t.useEffect)((()=>{e((0,X.ei)())}),[e]),(0,o.Z)(W,ma.p4);const z=O&&L&&E.length>0,G=(e=>{const[a]=(0,m.K)(),r=(0,A.lC)(a);return(0,t.useMemo)((()=>e.filter((e=>{let{rulesSource:a}=e;return!r.dataSource||!(0,k.jq)(a)||a.name===r.dataSource})).reduce(oa(r),[])),[e,r])})((0,ze.Zo)());return(0,w.jsxs)(f.J,{pageId:"alert-list",isLoading:!1,children:[ua||(ua=(0,w.jsx)(F,{})),ga||(ga=(0,w.jsx)(ta,{})),!z&&(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)("div",{className:a.break}),(0,w.jsxs)("div",{className:a.buttonsContainer,children:[(0,w.jsxs)("div",{className:a.statsContainer,children:["groups"===R&&y&&(0,w.jsx)(p.zx,{className:a.expandAllButton,icon:n?"angle-double-up":"angle-double-down",variant:"secondary",onClick:()=>u(!n),children:n?"Collapse all":"Expand all"}),(0,w.jsx)(Se,{showInactive:!0,showRecording:!0,namespaces:G})]}),(C||N)&&(0,w.jsx)(p.Qj,{href:c.Cj.renderUrl("alerting/new",{returnTo:s.pathname+s.search}),icon:"plus",onClick:()=>(0,d.PN)(x.z7.alertRuleFromScratch),children:"New alert rule"})]})]}),z&&(pa||(pa=(0,w.jsx)(S,{}))),!z&&(0,w.jsx)($,{expandAll:n,namespaces:G})]})}),{style:"page"}),fa=e=>({break:n.css`
    width: 100%;
    height: 0;
    margin-bottom: ${e.spacing(2)};
    border-bottom: solid 1px ${e.colors.border.medium};
  `,buttonsContainer:n.css`
    margin-bottom: ${e.spacing(2)};
    display: flex;
    justify-content: space-between;
  `,statsContainer:n.css`
    display: flex;
    flex-direction: row;
    align-items: center;
  `,expandAllButton:n.css`
    margin-right: ${e.spacing(1)};
  `}),ja=xa},73615:(e,a,r)=>{r.d(a,{J:()=>t});r(68404);var s=r(37417),n=r(45916);const t=e=>{let{children:a,pageId:r,pageNav:t,isLoading:l}=e;return(0,n.jsx)(s.T,{pageNav:t,navId:r,children:(0,n.jsx)(s.T.Contents,{isLoading:l,children:a})})}},60277:(e,a,r)=>{r.d(a,{q:()=>t});r(68404);var s=r(59196),n=r(45916);const t=e=>{let{actions:a,children:r,fallback:t=!0}=e;return a.some((e=>s.Vt.hasAccess(e,t)))?(0,n.jsx)(n.Fragment,{children:r}):null}},83221:(e,a,r)=>{r.d(a,{A:()=>i});r(68404);var s=r(21888),n=r(8006),t=r(45916);const l=["tooltip","icon","to","target","onClick","className","tooltipPlacement"];const i=e=>{let{tooltip:a,icon:r,to:i,target:o,onClick:c,className:d,tooltipPlacement:u="top"}=e,g=function(e,a){if(null==e)return{};var r,s,n={},t=Object.keys(e);for(s=0;s<t.length;s++)r=t[s],a.indexOf(r)>=0||(n[r]=e[r]);return n}(e,l);const p="string"==typeof a?a:void 0;return(0,t.jsx)(s.u,{content:a,placement:u,children:i?(0,t.jsx)(n.Qj,Object.assign({variant:"secondary",fill:"text",icon:r,href:i,size:"sm",target:o},g,{"aria-label":p})):(0,t.jsx)(n.zx,Object.assign({className:d,variant:"secondary",fill:"text",size:"sm",icon:r,type:"button",onClick:c},g,{"aria-label":p}))})}},30149:(e,a,r)=>{r.d(a,{B:()=>t});var s=r(68404),n=r(96535);function t(){return(0,s.useMemo)((()=>(0,n.Rv)()),[])}},18462:(e,a,r)=>{r.d(a,{q:()=>t});r(68404);var s=r(88246),n=r(45916);const t=e=>{let{timeInMs:a,className:r,humanize:s}=e;return(0,n.jsx)("span",{className:r,children:l(a,s)})},l=function(e){let a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const r=e/1e3;if(!a)return`${r.toFixed(1)}s`;const n=(0,s.Ks)(r,"seconds"),t=n.hours(),l=n.minutes(),i=n.seconds();return t?`${t}h ${l}m ${i}s`:l?`${l}m ${i}s`:`${i}s`}},13677:(e,a,r)=>{r.d(a,{Z:()=>n});var s=r(68404);const n=function(e,a){var r=(0,s.useRef)((function(){}));(0,s.useEffect)((function(){r.current=e})),(0,s.useEffect)((function(){if(null!==a){var e=setInterval((function(){return r.current()}),a||0);return function(){return clearInterval(e)}}}),[a])}}}]);
//# sourceMappingURL=AlertRuleListIndex.cc9bb6f41c46202b4a00.js.map