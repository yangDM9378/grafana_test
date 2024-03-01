"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[6724],{44812:(e,n,r)=>{r.d(n,{F:()=>o});var t=r(52423),l=(r(68404),r(16755)),a=r(39440),s=r(45916);const i=["renderExpandedContent"];const o=e=>{let{renderExpandedContent:n}=e,r=function(e,n){if(null==e)return{};var r,t,l={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(l[r]=e[r]);return l}(e,i);const o=(0,l.wW)(u);return(0,s.jsx)(a.t,Object.assign({renderExpandedContent:n?(e,r,l)=>(0,s.jsxs)(s.Fragment,{children:[!(r===l.length-1)&&(0,s.jsx)("div",{className:(0,t.cx)(o.contentGuideline,o.guideline)}),n(e,r,l)]}):void 0,renderPrefixHeader:()=>(0,s.jsx)("div",{className:o.relative,children:(0,s.jsx)("div",{className:(0,t.cx)(o.headerGuideline,o.guideline)})}),renderPrefixCell:(e,n,r)=>(0,s.jsxs)("div",{className:o.relative,children:[(0,s.jsx)("div",{className:(0,t.cx)(o.topGuideline,o.guideline)}),!(n===r.length-1)&&(0,s.jsx)("div",{className:(0,t.cx)(o.bottomGuideline,o.guideline)})]})},r))},u=e=>({relative:t.css`
    position: relative;
    height: 100%;
  `,guideline:t.css`
    left: -19px;
    border-left: 1px solid ${e.colors.border.medium};
    position: absolute;

    ${e.breakpoints.down("md")} {
      display: none;
    }
  `,topGuideline:t.css`
    width: 18px;
    border-bottom: 1px solid ${e.colors.border.medium};
    top: 0;
    bottom: 50%;
  `,bottomGuideline:t.css`
    top: 50%;
    bottom: 0;
  `,contentGuideline:t.css`
    top: 0;
    bottom: 0;
    left: -49px !important;
  `,headerGuideline:t.css`
    top: -25px;
    bottom: 0;
  `})},41058:(e,n,r)=>{r.d(n,{V:()=>s});r(68404);var t,l=r(99500),a=r(45916);const s=e=>{let{namespace:n,group:r}=e;return r?(0,a.jsxs)(a.Fragment,{children:[n," ",t||(t=(0,a.jsx)(l.J,{name:"angle-right"}))," ",r]}):(0,a.jsx)(a.Fragment,{children:n})}},90139:(e,n,r)=>{r.d(n,{i:()=>de});var t=r(52423),l=r(85719),a=r(29122);var s,i,o,u,d=r(14016),c=r(68404),p=r(13960),m=r(88246),h=r(6432),x=r(16755),g=r(21888),v=r(42949),b=r(97846),f=r(74846),j=r(80458),w=r(39440),C=r(44812),y=r(47628),$=r(41058),R=r(98492),N=r(70356),z=r(274),E=r(65737),S=r(8006),k=r(11818),G=r(54761),M=r(2024),D=r(47900),V=r(62847),L=r(64850),T=r(12134),F=r(64834),U=r(43271),Y=r(23691),W=r(55357),Z=r(45916);function q(e){let{children:n}=e;const r=(0,x.l4)().breakpoints.values.xxl,[t,l]=(0,c.useState)((a=r,window.matchMedia(`(max-width: ${a}px)`).matches));var a;const s=(0,x.wW)(O);return(0,V.e)({breakpoint:r,onChange:e=>{l(e.matches)}}),t?null:(0,Z.jsx)("div",{className:s.buttonText,children:n})}const H=e=>{let{rule:n,rulesSource:r}=e;const t=(0,L.I0)(),l=(0,N.TH)(),a=(0,D.iG)(),d=(0,x.wW)(O),{namespace:p,group:m,rulerRule:h}=n,[v,b]=(0,c.useState)(),f=(0,U.EG)(r),w=(0,j.Pc)(n.rulerRule)&&Boolean(n.rulerRule.grafana_alert.provenance),C=[],y=(0,j.Jq)(m),{isEditable:$,isRemovable:R}=(0,T.M)(f,h),V=l.pathname+l.search,H=l.pathname.endsWith("/view");const I=()=>{if(v&&v.rulerRule){const e=W.Zk((0,U.EG)(v.namespace.rulesSource),v.namespace.name,v.group.name,v.rulerRule);t((0,F.hS)(e,{navigateTo:H?"/alerting/list":void 0})),b(void 0)}},P=()=>{if((0,U.jq)(r)){const{appUrl:e,appSubUrl:t}=E.v;return`${""!==t?`${e}${t}/`:E.v.appUrl}alerting/${`${encodeURIComponent(r.name)}/${encodeURIComponent(n.name)}`}/find`}return window.location.href.split("?")[0]};if(H||C.push((0,Z.jsx)(g.u,{placement:"top",content:"View",children:(0,Z.jsx)(S.Qj,{className:d.button,size:"xs",variant:"secondary",icon:"eye",href:(0,Y.V2)(r,n,V),children:s||(s=(0,Z.jsx)(q,{children:"View"}))},"view")})),$&&h&&!y&&!w){const e=(0,U.EG)(r),n=W.Zk(e,p.name,m.name,h),t=z.Cj.renderUrl(`${E.v.appSubUrl}/alerting/${encodeURIComponent(W.$V(n))}/edit`,{returnTo:V});H&&C.push((0,Z.jsx)(k.m,{icon:"copy",onClipboardError:e=>{a.error("Error while copying URL",e)},className:d.button,size:"sm",getText:P,children:"Copy link to rule"},"copy")),C.push((0,Z.jsx)(g.u,{placement:"top",content:"Edit",children:(0,Z.jsx)(S.Qj,{className:d.button,size:"xs",variant:"secondary",icon:"pen",href:t,children:i||(i=(0,Z.jsx)(q,{children:"Edit"}))},"edit")}))}return R&&h&&!y&&!w&&C.push((0,Z.jsx)(g.u,{placement:"top",content:"Delete",children:(0,Z.jsx)(S.zx,{className:d.button,size:"xs",type:"button",variant:"secondary",icon:"trash-alt",onClick:()=>b(n),children:o||(o=(0,Z.jsx)(q,{children:"Delete"}))},"delete")})),C.length?(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)("div",{className:d.wrapper,children:(0,Z.jsx)(G.Lh,{width:"auto",children:C.length?C.map(((e,n)=>(0,Z.jsx)("div",{children:e},n))):u||(u=(0,Z.jsx)("div",{}))})}),!!v&&(0,Z.jsx)(M.s,{isOpen:!0,title:"Delete rule",body:"Deleting this rule will permanently remove it from your alert rule list. Are you sure you want to delete this rule?",confirmText:"Yes, delete",icon:"exclamation-triangle",onConfirm:I,onDismiss:()=>b(void 0)})]}):null};const O=e=>({wrapper:t.css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
  `,button:t.css`
    height: 24px;
    font-size: ${e.typography.size.sm};
    svg {
      margin-right: 0;
    }
  `,buttonText:t.css`
    margin-left: 8px;
  `});var I=r(99500),P=r(9751);function A(e){let{rule:n}=e;const r=(0,x.wW)(J),{exceedsLimit:t}=(0,c.useMemo)((()=>(0,P.f)(n.group.interval)),[n.group.interval]);return t?(0,Z.jsx)(g.u,{theme:"error",content:(0,Z.jsxs)("div",{children:["A minimum evaluation interval of"," ",(0,Z.jsx)("span",{className:r.globalLimitValue,children:E.v.unifiedAlerting.minInterval})," has been configured in Grafana and will be used instead of the ",n.group.interval," interval configured for the Rule Group."]}),children:(0,Z.jsx)(I.J,{name:"stopwatch-slash",className:r.icon})}):null}function J(e){return{globalLimitValue:t.css`
      font-weight: ${e.typography.fontWeightBold};
    `,icon:t.css`
      fill: ${e.colors.warning.text};
    `}}var Q=r(18462),B=r(57938),_=r(90062),K=r(95018),X=r(57306),ee=r(81887),ne=r(93991),re=r(47286),te=r(39778);const le=e=>{let{rule:n}=e;const r=(0,x.wW)(se),{namespace:{rulesSource:t}}=n,l=Object.entries(n.annotations).filter((e=>{let[n,r]=e;return!!r.trim()}));return(0,Z.jsxs)("div",{children:[(0,Z.jsx)(X.f,{rule:n,rulesSource:t,isViewMode:!1}),(0,Z.jsxs)("div",{className:r.wrapper,children:[(0,Z.jsxs)("div",{className:r.leftSide,children:[(0,Z.jsx)(ae,{rule:n}),!!n.labels&&!!Object.keys(n.labels).length&&(0,Z.jsx)(K.C,{label:"Labels",horizontal:!0,children:(0,Z.jsx)(_.s,{labels:n.labels})}),(0,Z.jsx)(re.C,{rulesSource:t,rule:n,annotations:l}),(0,Z.jsx)(ee.J,{annotations:l})]}),(0,Z.jsx)("div",{className:r.rightSide,children:(0,Z.jsx)(ne.C,{rulesSource:t,rule:n})})]}),(0,Z.jsx)(te.M,{rule:n,itemsDisplayLimit:15})]})},ae=e=>{var n,r;let t,{rule:l}=e,a=l.group.interval,s=null===(n=l.promRule)||void 0===n?void 0:n.lastEvaluation,i=null===(r=l.promRule)||void 0===r?void 0:r.evaluationTime;var o;(0,j.yF)(l.rulerRule)||(t=null===(o=l.rulerRule)||void 0===o?void 0:o.for);return(0,Z.jsxs)(Z.Fragment,{children:[a&&(0,Z.jsxs)(K.C,{label:"Evaluate",horizontal:!0,children:["Every ",a]}),t&&(0,Z.jsx)(K.C,{label:"For",horizontal:!0,children:t}),s&&!(0,B.gV)(s)&&(0,Z.jsx)(K.C,{label:"Last evaluation",horizontal:!0,children:(0,Z.jsx)(g.u,{placement:"top",content:`${(0,h.dq)(s,{format:"YYYY-MM-DD HH:mm:ss"})}`,theme:"info",children:(0,Z.jsx)("span",{children:`${(0,m.CQ)(s).locale("en").fromNow(!0)} ago`})})}),s&&!(0,B.gV)(s)&&void 0!==i&&(0,Z.jsx)(K.C,{label:"Evaluation time",horizontal:!0,children:(0,Z.jsx)(g.u,{placement:"top",content:`${i}s`,theme:"info",children:(0,Z.jsx)("span",{children:(0,Q.q)({timeInMs:1e3*i,humanize:!0})})})})]})},se=e=>({wrapper:t.css`
    display: flex;
    flex-direction: row;

    ${e.breakpoints.down("md")} {
      flex-direction: column;
    }
  `,leftSide:t.css`
    flex: 1;
  `,rightSide:t.css`
    ${e.breakpoints.up("md")} {
      padding-left: 90px;
      width: 300px;
    }
  `});var ie,oe=r(84438),ue=r(31244);const de=e=>{let{rules:n,className:r,showGuidelines:l=!1,emptyMessage:a="No rules found.",showGroupColumn:s=!1,showSummaryColumn:i=!1,showNextEvaluationColumn:o=!1}=e;const u=(0,x.wW)(ce),d=(0,t.cx)(u.wrapper,r,{[u.wrapperMargin]:l}),p=(0,c.useMemo)((()=>n.map(((e,n)=>({id:`${e.namespace.name}-${e.group.name}-${e.name}-${n}`,data:e})))),[n]),m=pe(i,s,o);if(!n.length)return(0,Z.jsx)("div",{className:(0,t.cx)(d,u.emptyMessage),children:a});const h=l?C.F:w.t;return(0,Z.jsx)("div",{className:d,"data-testid":"rules-table",children:(0,Z.jsx)(h,{cols:m,isExpandable:!0,items:p,renderExpandedContent:e=>{let{data:n}=e;return(0,Z.jsx)(le,{rule:n})},pagination:{itemsPerPage:v.gN},paginationStyles:u.pagination})})},ce=e=>({wrapperMargin:t.css`
    ${e.breakpoints.up("md")} {
      margin-left: 36px;
    }
  `,emptyMessage:t.css`
    padding: ${e.spacing(1)};
  `,wrapper:t.css`
    width: auto;
    border-radius: ${e.shape.borderRadius()};
  `,pagination:t.css`
    display: flex;
    margin: 0;
    padding-top: ${e.spacing(1)};
    padding-bottom: ${e.spacing(.25)};
    justify-content: center;
    border-left: 1px solid ${e.colors.border.strong};
    border-right: 1px solid ${e.colors.border.strong};
    border-bottom: 1px solid ${e.colors.border.strong};
  `});function pe(e,n,r){const{hasRuler:t,rulerRulesLoaded:s}=(0,b.h)(),i=(0,c.useCallback)((e=>{var n,r;const t=(null===(n=e.promRule)||void 0===n?void 0:n.lastEvaluation)&&(0,p.qb)(e.promRule.lastEvaluation),s=e.group.interval&&(0,p.jO)(e.group.interval);if(!t||!s)return;const i=(0,p.RA)(e.group.interval),o=Date.parse((null===(r=e.promRule)||void 0===r?void 0:r.lastEvaluation)||""),u=(0,p.Ks)(o,i),c=function(e,n){(0,a.Z)(2,arguments);var r=(0,l.Z)(e),t=(0,l.Z)(n);return r.getTime()<t.getTime()}(u,new Date);return c?{humanized:`within ${(0,d.Z)(i)}`,fullDate:`within ${(0,d.Z)(i)}`}:{humanized:`in ${(0,m.CQ)(u).locale("en").fromNow(!0)}`,fullDate:(0,h.dq)(u,{format:"YYYY-MM-DD HH:mm:ss"})}}),[]);return(0,c.useMemo)((()=>{const l=[{id:"state",label:"State",renderCell:e=>{let{data:n}=e;const{namespace:r}=n,{rulesSource:l}=r,{promRule:a,rulerRule:i}=n,o=!(!(t(l)&&s(l)&&a)||i),u=!(!(t(l)&&s(l)&&i)||a);return(0,Z.jsx)(ue.p,{rule:n,isDeleting:o,isCreating:u})},size:"165px"},{id:"name",label:"Name",renderCell:e=>{let{data:n}=e;return n.name},size:r?4:5},{id:"provisioned",label:"",renderCell:e=>{let{data:n}=e;const r=n.rulerRule;if(!(0,j.Pc)(r))return null;return r.grafana_alert.provenance?ie||(ie=(0,Z.jsx)(y.C0,{})):null},size:"100px"},{id:"warnings",label:"",renderCell:e=>{let{data:n}=e;return(0,Z.jsx)(A,{rule:n})},size:"45px"},{id:"health",label:"Health",renderCell:e=>{let{data:{promRule:n,group:r}}=e;return n?(0,Z.jsx)(oe.V,{rule:n}):null},size:"75px"}];return e&&l.push({id:"summary",label:"Summary",renderCell:e=>{var n;let{data:r}=e;return(0,Z.jsx)(R.Z,{input:null!==(n=r.annotations[f.q6.summary])&&void 0!==n?n:""})},size:r?4:5}),r&&l.push({id:"nextEvaluation",label:"Next evaluation",renderCell:e=>{let{data:n}=e;const r=i(n);return r&&(0,Z.jsx)(g.u,{placement:"top",content:`${null==r?void 0:r.fullDate}`,theme:"info",children:(0,Z.jsx)("span",{children:null==r?void 0:r.humanized})})},size:2}),n&&l.push({id:"group",label:"Group",renderCell:e=>{let{data:n}=e;const{namespace:r,group:t}=n;return"default"===t.name?(0,Z.jsx)($.V,{namespace:r.name}):(0,Z.jsx)($.V,{namespace:r.name,group:t.name})},size:5}),l.push({id:"actions",label:"Actions",renderCell:e=>{let{data:n}=e;return(0,Z.jsx)(H,{rule:n,rulesSource:n.namespace.rulesSource})},size:"290px"}),l}),[e,n,r,t,s,i])}},97846:(e,n,r)=>{r.d(n,{h:()=>s});var t=r(68404),l=r(43271),a=r(76938);function s(){const e=(0,a._)((e=>e.rulerRules));return{hasRuler:(0,t.useCallback)((n=>{var r;const t="string"==typeof n?n:n.name;return t===l.GC||!(null===(r=e[t])||void 0===r||!r.result)}),[e]),rulerRulesLoaded:(0,t.useCallback)((n=>{var r;const t=(0,l.EG)(n),a=null===(r=e[t])||void 0===r?void 0:r.result;return Boolean(a)}),[e])}}}}]);
//# sourceMappingURL=6724.a8a5ed091d3c0ff448d7.js.map