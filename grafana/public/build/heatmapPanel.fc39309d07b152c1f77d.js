"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[6987],{84176:(e,l,t)=>{t.d(l,{q:()=>r});var a=t(52423),o=t(68404),i=t(16755),n=t(45916);const r=e=>{let{colorPalette:l,min:t,max:a,display:r,hoverValue:u,useStopsPercentage:c}=e;const[m,v]=(0,o.useState)([]),[h,p]=(0,o.useState)({isShown:!1,value:0}),[f,g]=(0,o.useState)(null),x=(0,i.l4)(),y=d(x,m);(0,o.useEffect)((()=>{v(s({colorArray:l,stops:10,useStopsPercentage:c}))}),[l,c]);return(0,o.useEffect)((()=>{g(null==u?null:function(e){if(e>1)return 100;if(e<0)return 0;return 100*e}((u-t)/(a-t)))}),[u,t,a]),(0,n.jsxs)("div",{className:y.scaleWrapper,onMouseMove:e=>{const l=e.nativeEvent.offsetX,o=e.currentTarget.offsetWidth,i=Math.floor(100*l/o+1),n=Math.floor((a-t)*i/100+t);p({isShown:!0,value:n}),g(i)},onMouseLeave:()=>{p({isShown:!1,value:0})},children:[(0,n.jsx)("div",{className:y.scaleGradient,children:r&&(h.isShown||void 0!==u)&&(0,n.jsx)("div",{className:y.followerContainer,children:(0,n.jsx)("div",{className:y.follower,style:{left:`${f}%`}})})}),r&&(0,n.jsxs)("div",{className:y.followerContainer,children:[(0,n.jsxs)("div",{className:y.legendValues,children:[(0,n.jsx)("span",{children:r(t)}),(0,n.jsx)("span",{children:r(a)})]}),null!=f&&(h.isShown||void 0!==u)&&(0,n.jsx)("span",{className:y.hoverValue,style:{left:`${f}%`},children:r(null!=u?u:h.value)})]})]})},s=e=>{let{colorArray:l,stops:t,useStopsPercentage:a=!0}=e;const o=l.length;if(a&&o<=20){const e=1/o*100;let t=0;const a=[];for(const o of l)t>0?a.push(`${o} ${t}%`):a.push(o),t+=e,a.push(`${o} ${t}%`);return a}const i=l[o-1],n=Math.ceil(o/t),r=new Set;for(let e=0;e<o;e+=n)r.add(l[e]);return r.add(i),[...r]};const d=(e,l)=>({scaleWrapper:a.css`
    width: 100%;
    font-size: 11px;
    opacity: 1;
  `,scaleGradient:a.css`
    background: linear-gradient(90deg, ${l.join()});
    height: 10px;
    pointer-events: none;
  `,legendValues:a.css`
    display: flex;
    justify-content: space-between;
    pointer-events: none;
  `,hoverValue:a.css`
    position: absolute;
    margin-top: -14px;
    padding: 3px 15px;
    background: ${e.colors.background.primary};
    transform: translateX(-50%);
  `,followerContainer:a.css`
    position: relative;
    pointer-events: none;
    white-space: nowrap;
  `,follower:a.css`
    position: absolute;
    height: 14px;
    width: 14px;
    border-radius: 50%;
    transform: translateX(-50%) translateY(-50%);
    border: 2px solid ${e.colors.text.primary};
    margin-top: 5px;
  `})},41412:(e,l,t)=>{t.r(l),t.d(l,{plugin:()=>he});var a=t(68404),o=t(18151),i=t(15399),n=t(27843),r=t(97859),s=t(65737),d=t(27864),u=t(44108),c=t(33441),m=t(84176),v=t(20909),h=t(72828),p=t(57337),f=t(52423),g=t(71855),x=t(74658),y=t(678),b=t(16755),w=t(27783),k=t(30733),S=t(13131),B=t(48717),L=t(1700),M=t(26006),V=t(55343),C=t(32934),D=t(54761),O=t(8006),A=t(94722),j=t(32654),P=t(45916);const R=e=>2===e.hover.seriesIdx?(0,P.jsx)(j.H,{data:e.data.exemplars,rowIndex:e.hover.dataIdx,header:"Exemplar"}):(0,P.jsx)(E,Object.assign({},e)),E=e=>{var l,t,o,i,r;let{data:s,hover:d,showHistogram:u}=e;const c=d.dataIdx,m=null===(l=s.heatmap)||void 0===l?void 0:l.fields[0],v=null===(t=s.heatmap)||void 0===t?void 0:t.fields[1],f=null===(o=s.heatmap)||void 0===o?void 0:o.fields[2],g=e=>{if(null!=m&&m.display)return(0,V.zc)(m.display(e));if((null==m?void 0:m.type)===n.fS.time){const l="YYYY-MM-DD HH:mm:ss",t=(0,A.h4)().getCurrent();return null==t?void 0:t.formatDate(e,l)}return`${e}`},y=null==m?void 0:m.values.toArray(),b=null==v?void 0:v.values.toArray(),w=null==f?void 0:f.values.toArray(),k=(0,h.d8)(s.heatmap),S=null!=v&&v.display?e=>(0,V.zc)(v.display(e)):e=>`${e}`,B=null!==(i=c%s.yBucketCount)&&void 0!==i?i:0;let L,M,R,E,I;if(k.yOrdinalDisplay){const e=s.yLayout===p.D.le?B-1:B,l=s.yLayout===p.D.le?B:B+1;L=e<0?k.yMinDisplay:`${k.yOrdinalDisplay[e]}`,M=`${k.yOrdinalDisplay[l]}`,k.yOrdinalLabel&&!Number.isNaN(+k.yOrdinalLabel[0])||(R=s.yLayout===p.D.le?M:L)}else{const e=null==b?void 0:b[B];if(s.yLayout===p.D.le)if(M=`${e}`,s.yLog){let l=(2===s.yLog?Math.log2:Math.log10)(e)-1/s.yLogSplit;L=`${s.yLog**l}`}else L=""+(e-s.yBucketSize);else if(L=`${e}`,s.yLog){let l=(2===s.yLog?Math.log2:Math.log10)(e)+1/s.yLogSplit;M=`${s.yLog**l}`}else M=`${e+s.yBucketSize}`}s.xLayout===p.D.le?(I=null==y?void 0:y[c],E=I-s.xBucketSize):(E=null==y?void 0:y[c],I=E+s.xBucketSize);const H=null==w?void 0:w[c],N=null===(r=s.heatmap)||void 0===r?void 0:r.fields.filter((e=>{var l,t;return!Boolean(null===(l=e.config.custom)||void 0===l||null===(t=l.hideFrom)||void 0===t?void 0:t.tooltip)})),z=[],G=new Set;for(const e of null!=N?N:[])if(e.getLinks){const l=e.values.get(c),t=e.display?e.display(l):{text:`${l}`,numeric:+l};e.getLinks({calculatedValue:t,valueRowIndex:c}).forEach((e=>{const l=`${e.title}/${e.href}`;G.has(l)||(z.push(e),G.add(l))}))}let $=(0,a.useRef)(null),T=Math.round(150*devicePixelRatio),Y=Math.round(50*devicePixelRatio);(0,a.useEffect)((()=>{if(u){var e;let l=null===(e=$.current)||void 0===e?void 0:e.getContext("2d");if(l&&y&&b&&w){let e=c;for(;y[e--]===y[c];);e++;let t=e+s.yBucketCount,a=0,o=e;for(;o<t;){let e=w[o];a=Math.max(a,e),o++}let i=new Path2D,n=new Path2D;o=e;let r=0;for(;o<t;){let e=w[o];if(e>0){let l=e/a,t=r/(s.yBucketCount+1);(o===c?i:n).rect(Math.round(T*t),Math.round(Y*(1-l)),Math.round(T/s.yBucketCount),Math.round(Y*l))}o++,r++}l.clearRect(0,0,T,Y),l.fillStyle="#ffffff80",l.fill(n),l.fillStyle="#ff000080",l.fill(i)}}}),[c]);const[F]=(0,a.useState)((()=>{var e,l;return(null===(e=s.heatmap)||void 0===e||null===(l=e.meta)||void 0===l?void 0:l.type)===x.P.HeatmapCells&&!(0,h.qJ)(s.heatmap)}));if(F)return(0,P.jsx)("div",{children:(0,P.jsx)(j.H,{data:s.heatmap,rowIndex:c})});return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)("div",{children:[(0,P.jsx)("div",{children:g(E)}),(0,P.jsx)("div",{children:g(I)})]}),u&&(0,P.jsx)("canvas",{width:T,height:Y,ref:$,style:{width:T+"px",height:Y+"px"}}),(0,P.jsxs)("div",{children:[R?(0,P.jsxs)("div",{children:["Name: ",R]}):s.yLayout===p.D.unknown?(0,P.jsx)("div",{children:S(L)}):(0,P.jsxs)("div",{children:["Bucket: ",S(L)," - ",S(M)]}),(0,P.jsxs)("div",{children:[(0,C.C)(f,s.heatmap),": ",s.display(H)]})]}),z.length>0&&(0,P.jsx)(D.wc,{children:z.map(((e,l)=>(0,P.jsx)(O.Qj,{icon:"external-link-alt",target:e.target,href:e.href,onClick:e.onClick,fill:"text",style:{width:"100%"},children:e.title},l)))})]})};var I=t(52902),H=t(43917),N=t(49959),z=t(92721),G=t(37800),$=t(60053),T=t(27565),Y=t(78321);function F(e){const{disp:l,each:t,gap:a=1,hideLE:o=-1/0,hideGE:i=1/0,xAlign:n=1,yAlign:r=1,ySizeDivisor:s=1}=e,d=devicePixelRatio,u=a>=4?Math.round:e=>e,c=Math.round(a*d);return(e,a)=>(N.Z.orient(e,a,((d,m,v,h,p,f,g,x,y,b,w,k,S,B,L)=>{var M;let V=e.data[a];const C=V[0],D=V[1],O=V[2],A=C.length;let j,P,R=l.fill.values(e,a),E=null!==(M=l.fill.index)&&void 0!==M?M:[...new Set(R)],I=E.map((e=>new Path2D)),H=A-D.lastIndexOf(D[0]),N=A/H,z=D[1]-D[0]||p.max-p.min,G=C[H]-C[0];j=3===h.distr?Math.abs(f(C[0]*h.log,h,b,x)-f(C[0],h,b,x)):Math.abs(f(G,h,b,x)-f(0,h,b,x)),P=3===p.distr?Math.abs(g(D[0]*p.log,p,w,y)-g(D[0],p,w,y))/s:Math.abs(g(z,p,w,y)-g(0,p,w,y))/s,j=Math.max(1,u(j-c)),P=Math.max(1,u(P-c));let $=-1===n?-j:0===n?-j/2:0,T=1===r?-P:0===r?-P/2:0,Y=D.slice(0,H).map((e=>u(g(e,p,w,y)+T))),F=Array.from({length:N},((e,l)=>u(f(C[l*H],h,b,x)+$)));for(let l=0;l<A;l++)if(O[l]>o&&O[l]<i){let a=F[~~(l/H)],o=Y[l%H];B(I[R[l]],a,o,j,P),t(e,1,l,a,o,j,P)}return e.ctx.save(),e.ctx.rect(e.bbox.left,e.bbox.top,e.bbox.width,e.bbox.height),e.ctx.clip(),I.forEach(((l,t)=>{e.ctx.fillStyle=E[t],e.ctx.fill(l)})),e.ctx.restore(),null})),null)}function _(e,l){return(t,a)=>(N.Z.orient(t,a,((o,i,n,r,s,d,u,c,m,v,h,p,f,g,x)=>{let y=new Path2D,b=[y],w=[null!=l?l:"rgba(255,0,255,0.7)"];for(let l=0;l<i.length;l++){let o=n[l];o-=.5,o+=.5*(2*Math.round(Math.random())-1)*Math.random();let p=d(i[l],r,v,c),f=u(o,s,h,m),x=8,b=8;g(y,p-x/2,f-b/2,x,b),e.each(t,a,l,p-x/2,f-b/2,x,b)}t.ctx.save(),t.ctx.rect(t.bbox.left,t.bbox.top,t.bbox.width,t.bbox.height),t.ctx.clip(),b.forEach(((e,l)=>{t.ctx.fillStyle=w[l],t.ctx.fill(e)})),t.ctx.restore()})),null)}function W(e){const{disp:l,each:t,gap:a=1,hideLE:o=-1/0,hideGE:i=1/0}=e,n=devicePixelRatio,r=a>=4?Math.round:e=>e,s=Math.round(a*n);return(e,a)=>(N.Z.orient(e,a,((n,d,u,c,m,v,h,p,f,g,x,y,b,w,k)=>{var S;let B=e.data[a];const L=B[0],M=B[1],V=B[2],C=B[3],D=L.length;let O=l.fill.values(e,a),A=null!==(S=l.fill.index)&&void 0!==S?S:[...new Set(O)],j=A.map((e=>new Path2D)),P=new Map,R=new Map;for(let e=0;e<L.length;e++){let l=L[e],t=M[e],a=V[e];P.has(l)||P.set(l,r(v(l,c,g,p))),R.has(t)||R.set(t,r(h(t,m,x,f))),R.has(a)||R.set(a,r(h(a,m,x,f)))}let E=P.get(L.find((e=>e!==L[0])))-P.get(L[0]);for(let l=0;l<D;l++){if(C[l]<=o||C[l]>=i)continue;let a=L[l],n=M[l],r=V[l],d=P.get(a),u=R.get(n),c=E,m=u-R.get(r);c=Math.max(1,c-s),m=Math.max(1,m-s);let v=d,h=u;w(j[O[l]],v,h,c,m),t(e,1,l,v,h,c,m)}e.ctx.save(),e.ctx.rect(e.bbox.left,e.bbox.top,e.bbox.width,e.bbox.height),e.ctx.clip(),j.forEach(((l,t)=>{e.ctx.fillStyle=A[t],e.ctx.fill(l)})),e.ctx.restore()})),null)}const q=function(e,l,t){let a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:-1/0,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1/0;if(null==l){l=1/0;for(let t=0;t<e.length;t++)e[t]>a&&e[t]<o&&(l=Math.min(l,e[t]))}if(null==t){t=-1/0;for(let l=0;l<e.length;l++)e[l]>a&&e[l]<o&&(t=Math.max(t,e[l]))}return[l,t]},U=(e,l,t,a)=>{let o=Math.max(a-t,1),i=l.length,n=Array(e.length);for(let l=0;l<e.length;l++)n[l]=e[l]<t?0:e[l]>a?i-1:Math.min(i-1,Math.floor(i*(e[l]-t)/o));return n};function Z(e,l,t,a){var o,i,n,r;let s=e.series;if(null==s||!s.length)return{};const d=null===(o=e.annotations)||void 0===o?void 0:o.find((e=>"exemplar"===e.name));var u;if(a&&(null==d||d.fields.forEach(((e,l)=>{d.fields[l].getLinks=a(d,e)}))),l.calculate)return K((0,h.xf)(s,null!==(u=l.calculation)&&void 0!==u?u:{}),d,l,t);let c;for(const e of s)switch(null===(i=e.meta)||void 0===i?void 0:i.type){case x.P.HeatmapCells:return(0,h.qJ)(e)?K(e,d,l,t):J(e,d,l,t);case x.P.HeatmapRows:c=e}return c||(c=s.length>1?(0,I._9)({frames:s}):s[0]),K((0,h.Cj)(Object.assign({unit:null===(n=l.yAxis)||void 0===n?void 0:n.unit,decimals:null===(r=l.yAxis)||void 0===r?void 0:r.decimals},l.rowsFrame,{frame:c})),d,l,t)}const J=(e,l,t,a)=>{var o,i,n;if((null===(o=e.meta)||void 0===o?void 0:o.type)!==x.P.HeatmapCells||(0,h.qJ)(e))return{warning:"Expected sparse heatmap format",heatmap:e};X(e.fields[1],t.yAxis,a);const r=X(e.fields[3],t.cellValues,a);let[s,d]=q(e.fields[3].values.toArray(),t.color.min,t.color.max,null===(i=t.filterValues)||void 0===i?void 0:i.le,null===(n=t.filterValues)||void 0===n?void 0:n.ge);return{heatmap:e,minValue:s,maxValue:d,exemplars:l,display:e=>(0,V.zc)(r(e))}},K=(e,l,t,a)=>{var o,i,r,s,d,u,c,m,v,f,g,y,b;if((null===(o=e.meta)||void 0===o?void 0:o.type)!==x.P.HeatmapCells)return{warning:"Expected heatmap scanlines format",heatmap:e};if(e.fields.length<2||e.length<2)return{heatmap:e};const w=(0,h.d8)(e);let k,S,B;for(const l of e.fields)switch(l.name){case"y":S=l.name;case"yMin":case"yMax":S||(S=l.name),null==w.yOrdinalDisplay&&X(l,t.yAxis,a);break;case"x":case"xMin":case"xMax":k=l.name;break;default:l.type!==n.fS.number||B||(B=l)}if(!S)return{warning:"Missing Y field",heatmap:e};if(!S)return{warning:"Missing X field",heatmap:e};if(!B)return{warning:"Missing value field",heatmap:e};const L=X(B,t.cellValues,a),M=e.fields[0].values.toArray(),C=e.fields[1].values.toArray(),D=M.length;let O=D-C.lastIndexOf(C[0]),A=D/O,j=C[1]-C[0],P=M[O]-M[0],[R,E]=q(B.values.toArray(),t.color.min,t.color.max,null===(i=t.filterValues)||void 0===i?void 0:i.le,null===(r=t.filterValues)||void 0===r?void 0:r.ge),I=null===(s=t.calculation)||void 0===s?void 0:s.xBuckets,H=null===(d=t.calculation)||void 0===d?void 0:d.yBuckets;return{heatmap:e,exemplars:null!=l&&l.length?l:void 0,xBucketSize:P,yBucketSize:j,xBucketCount:A,yBucketCount:O,yLog:null!==(u=null==H||null===(c=H.scale)||void 0===c?void 0:c.log)&&void 0!==u?u:0,xLog:null!==(m=null==I||null===(v=I.scale)||void 0===v?void 0:v.log)&&void 0!==m?m:0,xLogSplit:null!=I&&null!==(f=I.scale)&&void 0!==f&&f.log?+(null!==(g=null==I?void 0:I.value)&&void 0!==g?g:"1"):1,yLogSplit:null!=H&&null!==(y=H.scale)&&void 0!==y&&y.log?+(null!==(b=null==H?void 0:H.value)&&void 0!==b?b:"1"):1,minValue:R,maxValue:E,xLayout:"xMax"===k?p.D.le:"xMin"===k?p.D.ge:p.D.unknown,yLayout:"yMax"===S?p.D.le:"yMin"===S?p.D.ge:p.D.unknown,display:e=>(0,V.zc)(L(e))}};function X(e,l,t){var a;if(null!=l&&null!==(a=l.unit)&&void 0!==a&&a.length||null!=(null==l?void 0:l.decimals)){const{unit:t,decimals:a}=l;e.display=void 0,e.config=Object.assign({},e.config),null!=t&&t.length&&(e.config.unit=t),null!=a&&(e.config.decimals=a)}return e.display||(e.display=(0,H.U)({field:e,theme:t})),e.display}var Q=t(24314),ee=t(96586),le=t(35008),te=t.n(le);Object.freeze([1,0]);let ae,oe;!function(e){e.Opacity="opacity",e.Scheme="scheme"}(ae||(ae={})),function(e){e.Linear="linear",e.Exponential="exponential"}(oe||(oe={}));const ie={calculate:!1,color:{mode:ae.Scheme,scheme:"Oranges",fill:"dark-orange",scale:oe.Exponential,reverse:!1,exponent:.5,steps:64},rowsFrame:{layout:p.D.auto},yAxis:{axisPlacement:d.LB.Left},cellValues:{},showValue:d.Jp.Auto,tooltip:{show:!0,yHistogram:!1},legend:{show:!0},exemplars:{color:"rgba(255,0,255,0.7)"},filterValues:{le:1e-9},cellGap:1},ne=[{name:"BrBG",invert:"always"},{name:"PiYG",invert:"always"},{name:"PRGn",invert:"always"},{name:"PuOr",invert:"always"},{name:"RdBu",invert:"always"},{name:"RdGy",invert:"always"},{name:"RdYlBu",invert:"always"},{name:"RdYlGn",invert:"always"},{name:"Spectral",invert:"always"},{name:"Blues",invert:"dark"},{name:"Greens",invert:"dark"},{name:"Greys",invert:"dark"},{name:"Oranges",invert:"dark"},{name:"Purples",invert:"dark"},{name:"Reds",invert:"dark"},{name:"Turbo",invert:"light"},{name:"Cividis",invert:"light"},{name:"Viridis",invert:"light"},{name:"Magma",invert:"light"},{name:"Inferno",invert:"light"},{name:"Plasma",invert:"light"},{name:"Warm",invert:"light"},{name:"Cool",invert:"light"},{name:"Cubehelix",invert:"light",name2:"CubehelixDefault"},{name:"BuGn",invert:"dark"},{name:"BuPu",invert:"dark"},{name:"GnBu",invert:"dark"},{name:"OrRd",invert:"dark"},{name:"PuBuGn",invert:"dark"},{name:"PuBu",invert:"dark"},{name:"PuRd",invert:"dark"},{name:"RdPu",invert:"dark"},{name:"YlGnBu",invert:"dark"},{name:"YlGn",invert:"dark"},{name:"YlOrBr",invert:"dark"},{name:"YlOrRd",invert:"dark"},{name:"Rainbow",invert:"always"},{name:"Sinebow",invert:"always"}],re=ne.find((e=>"Spectral"===e.name));function se(e,l){var t;const a=Object.assign({},ie.color,e),o=[],i=(null!==(t=a.steps)&&void 0!==t?t:128)-1;if(e.mode===ae.Opacity){const t=te()(l.visualization.getColorByName(e.fill)).toPercentageRgb(),n=a.scale===oe.Exponential?Q.scalePow().exponent(a.exponent).domain([0,1]).range([0,1]):Q.scaleLinear().domain([0,1]).range([0,1]);for(let e=0;e<=i;e++)t.a=n(e/i),o.push(te()(t).toString("hex8"))}else{var n,r;const t=null!==(n=ne.find((e=>e.name===a.scheme)))&&void 0!==n?n:re;let s="interpolate"+(null!==(r=t.name2)&&void 0!==r?r:t.name);const d=ee[s];for(let e=0;e<=i;e++){let l=d(e/i),t=0===l.indexOf("rgb")?"#"+[...l.matchAll(/\d+/g)].map((e=>(+e[0]).toString(16).padStart(2,"0"))).join(""):l;o.push(t)}("always"===t.invert||"dark"===t.invert&&l.isDark||"light"===t.invert&&l.isLight)&&o.reverse(),e.reverse&&o.reverse()}return o}const de=e=>({colorScaleWrapper:f.css`
    margin-left: 25px;
    padding: 10px 0;
    max-width: 300px;
  `}),ue=["bucketFrame"];const ce=(e,l,t,a)=>{if("heatmap"===l&&t.angular){const{fieldConfig:l,options:o}=function(e){var l,t,a,o,i,n;const r={defaults:{},overrides:[]},s="tsbuckets"!==e.dataFormat,u=Object.assign({},ie.calculation),c=Object.assign({logBase:1},e.yAxis);s&&(e.xBucketSize?u.xBuckets={mode:p.k.Size,value:`${e.xBucketSize}`}:e.xBucketNumber&&(u.xBuckets={mode:p.k.Count,value:`${e.xBucketNumber}`}),e.yBucketSize?u.yBuckets={mode:p.k.Size,value:`${e.yBucketSize}`}:e.xBucketNumber&&(u.yBuckets={mode:p.k.Count,value:`${e.yBucketNumber}`}),c.logBase>1&&(u.yBuckets={mode:p.k.Count,value:+c.splitFactor>0?`${c.splitFactor}`:void 0,scale:{type:d.wf.Log,log:c.logBase}}));const m=ve(null===(l=e.cards)||void 0===l?void 0:l.cardPadding,2),v={calculate:s,calculation:u,color:Object.assign({},ie.color,{steps:128}),cellGap:m||1,cellRadius:ve(null===(t=e.cards)||void 0===t?void 0:t.cardRound),yAxis:{axisPlacement:!1===c.show?d.LB.Hidden:d.LB.Left,reverse:Boolean(e.reverseYBuckets),axisWidth:ve(c.width),min:c.min,max:c.max,unit:c.format,decimals:c.decimals},cellValues:{decimals:ve(e.tooltipDecimals)},rowsFrame:{layout:me(e.yBucketBound)},legend:{show:Boolean(null===(a=e.legend)||void 0===a?void 0:a.show)},showValue:d.Jp.Never,tooltip:{show:Boolean(null===(o=e.tooltip)||void 0===o?void 0:o.show),yHistogram:Boolean(null===(i=e.tooltip)||void 0===i?void 0:i.showHistogram)},exemplars:Object.assign({},ie.exemplars)};e.hideZeroBuckets&&(v.filterValues=Object.assign({},ie.filterValues));const h=null!==(n=e.color)&&void 0!==n?n:{};switch(null==h?void 0:h.mode){case"spectrum":{v.color.mode=ae.Scheme;const e=h.colorScheme;let l=ne.find((l=>l.name===e));l||(l=ne.find((l=>e.indexOf(l.name)>=0))),v.color.scheme=l?l.name:ie.color.scheme;break}case"opacity":v.color.mode=ae.Opacity,v.color.scale=h.scale}v.color.fill=h.cardColor,v.color.min=h.min,v.color.max=h.max,"number"==typeof h.min&&"number"==typeof h.max&&h.min>h.max&&(v.color.min=h.max,v.color.max=h.min,v.color.reverse=!0);return{fieldConfig:r,options:v}}(Object.assign({},t.angular,{fieldConfig:a}));return e.fieldConfig=l,o}if("heatmap-new"===l){const l=e.options,{bucketFrame:t}=l,a=function(e,l){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],l.indexOf(t)>=0||(o[t]=e[t]);return o}(l,ue);return t?Object.assign({},a,{rowsFrame:t}):e.options}return{}};function me(e){switch(e){case"upper":return p.D.ge;case"lower":return p.D.le;case"middle":return p.D.unknown}return p.D.auto}function ve(e,l){if(null==e||""===e)return l;const t=+e;return isNaN(t)?l:t}const he=new o.c((e=>{let{data:l,id:t,timeRange:o,timeZone:i,width:n,height:r,options:s,fieldConfig:u,eventBus:c,onChangeTimeRange:v,replaceVariables:f}=e;const C=(0,b.l4)(),D=(0,b.wW)(de),{sync:O}=(0,w.R9)();let A=(0,a.useRef)(o);A.current=o;const j=(0,a.useCallback)(((e,l)=>{var t,a;return(0,g.oB)(e,l,null!==(t=null===(a=l.state)||void 0===a?void 0:a.scopedVars)&&void 0!==t?t:{},f)}),[f]),E=(0,a.useMemo)((()=>{try{return Z(l,s,C,j)}catch(e){return{warning:`${e}`}}}),[l,s,C,j]),I=(0,a.useMemo)((()=>{var e,l;let t=[],a=[];const o=(0,h.d8)(E.heatmap);if(null!==(e=E.exemplars)&&void 0!==e&&e.length&&o.yMatchWithLabel){var i;t=null===(i=E.exemplars)||void 0===i?void 0:i.fields[0].values.toArray();if(null!=o.yOrdinalDisplay){var n;a=(null===(n=E.exemplars)||void 0===n?void 0:n.fields.find((e=>e.name===o.yMatchWithLabel)).values.toArray()).map((e=>{var l;return null===(l=o.yOrdinalLabel)||void 0===l?void 0:l.indexOf(e)}))}else{var r;a=null===(r=E.exemplars)||void 0===r?void 0:r.fields[1].values.toArray()}}return[null,null===(l=E.heatmap)||void 0===l?void 0:l.fields.map((e=>e.values.toArray())),[t,a]]}),[E.heatmap,E.exemplars]),H=(0,a.useMemo)((()=>se(s.color,C)),[s.color,C]),[q,J]=(0,a.useState)(void 0),[K,X]=(0,a.useState)(!1),Q=(0,a.useRef)(!1),ee=()=>{Q.current=!Q.current,X(Q.current)},le=(0,a.useCallback)((e=>{J(null!=e?e:void 0)}),[s,l.structureRev]),te=(0,a.useRef)(E);te.current=E;const ae=(0,a.useMemo)((()=>{var e,l,t,a,o,n,r,u,m,f;const g=null===(e=te.current)||void 0===e||null===(l=e.heatmap)||void 0===l||null===(t=l.fields[1].config)||void 0===t||null===(a=t.custom)||void 0===a?void 0:a.scaleDistribution;return function(e){var l,t,a,o,i,n,r,s,u,c,m,v,f,g,y,b;const{dataRef:w,theme:k,eventBus:S,onhover:B,onclick:L,onzoom:M,isToolTipOpen:C,timeZone:D,getTimeRange:O,palette:A,cellGap:j,hideLE:P,hideGE:R,yAxisConfig:E,ySizeDivisor:I,sync:H}=e,q="x",Z="time",J=devicePixelRatio;let K=null===(l=w.current)||void 0===l||null===(t=l.heatmap)||void 0===t||null===(a=t.meta)||void 0===a?void 0:a.type;const X=k.visualization.getColorByName(e.exemplarColor);let Q,ee,le,te=new T.U(D);te.addHook("init",(e=>{e.root.querySelectorAll(".u-cursor-pt").forEach((e=>{Object.assign(e.style,{borderRadius:"0",border:"1px solid white",background:"transparent"})})),L&&e.over.addEventListener("mouseup",(l=>{e.cursor.drag._x||e.cursor.drag._y||L(l)}),!0)})),M&&te.addHook("setSelect",(e=>{M({xMin:e.posToVal(e.select.left,q),xMax:e.posToVal(e.select.left+e.select.width,q)}),e.setSelect({left:0,top:0,width:0,height:0},!1)})),te.addHook("setData",(e=>{let{min:l,max:t}=e.scales.x,a=O().from.valueOf(),o=O().to.valueOf();l===a&&t===o||queueMicrotask((()=>{e.setScale(q,{min:a,max:o})}))})),te.addHook("syncRect",((e,l)=>{le=l}));const ae={point:{[Z]:null},data:null===(o=w.current)||void 0===o?void 0:o.heatmap},oe=new z.es(ae);let ie;B&&te.addHook("setLegend",(e=>{if(null!=e.cursor.idxs)for(let l=0;l<e.cursor.idxs.length;l++){const t=e.cursor.idxs[l];if(null!=t){const{left:a,top:o}=e.cursor;return ae.rowIndex=t,ae.point.time=e.posToVal(a,q),S.publish(oe),void(C.current||(ie&&(clearTimeout(ie),ie=0),B({seriesIdx:l,dataIdx:t,pageX:le.left+a,pageY:le.top+o})))}}C.current||ie||(ie=setTimeout((()=>{B(null),ae.rowIndex=void 0,ae.point.time=null,S.publish(oe)}),100))})),te.addHook("drawClear",(e=>{Q=Q||new Y.lW(0,0,e.bbox.width,e.bbox.height),Q.clear(),e.series.forEach(((e,l)=>{l>0&&(e._paths=null)}))})),te.setMode(2),te.addScale({scaleKey:q,isTime:!0,orientation:d.wN.Horizontal,direction:d.bQ.Right,range:()=>[O().from.valueOf(),O().to.valueOf()]}),te.addAxis({scaleKey:q,placement:d.LB.Bottom,isTime:!0,theme:k,timeZone:D});const ne=null===(i=w.current)||void 0===i||null===(n=i.heatmap)||void 0===n?void 0:n.fields[1];if(!ne)return te;const re=null===(r=ne.config)||void 0===r?void 0:r.custom,se=null!==(s=null==re?void 0:re.scaleDistribution)&&void 0!==s?s:{type:d.wf.Linear},de=Boolean(E.reverse),ue=K===x.P.HeatmapCells&&!(0,h.qJ)(null===(u=w.current)||void 0===u?void 0:u.heatmap),ce=se.type!==d.wf.Linear||ue,me=null!=(0,h.d8)(null===(c=w.current)||void 0===c?void 0:c.heatmap).yOrdinalDisplay,ve="y_"+(Math.random()+1).toString(36).substring(7);te.addScale({scaleKey:ve,isTime:!1,orientation:d.wN.Vertical,direction:de?d.bQ.Down:d.bQ.Up,distribution:ce?d.wf.Log:d.wf.Linear,log:null!==(m=se.log)&&void 0!==m?m:2,range:ue?(e,l,t)=>{var a;let o,i;if([o,i]=ce?N.Z.rangeLog(l,t,null!==(a=se.log)&&void 0!==a?a:2,!0):[l,t],ce&&!me){let l=e.scales[ve].log,t=2===l?Math.log2:Math.log10,{min:a,max:n}=E;if(null!=a&&a>0){let e=t(a);o=l**(0,G.mB)(e,1)}if(null!=n&&n>0){let e=t(n);i=l**(0,G.UO)(e,1)}}return[o,i]}:(e,l,t)=>{let a=l,o=t,{min:i,max:n}=E;if(ce){var r,s;let d=e.scales[ve].log,u=!1,c=!1,m=2===d?Math.log2:Math.log10;if(1!==I){let e=m(l),i=m(t);Number.isInteger(e)||(a=d**(0,G.mB)(e,1),u=!0),Number.isInteger(i)||(o=d**(0,G.UO)(i,1),c=!0)}if((null===(r=w.current)||void 0===r?void 0:r.yLayout)===p.D.le?u||(a/=d):(null===(s=w.current)||void 0===s?void 0:s.yLayout)===p.D.ge?c||(o*=d):(a/=d/2,o*=d/2),!me){if(null!=i&&i>0){let e=m(i);a=d**(0,G.mB)(e,1)}if(null!=n&&n>0){let e=m(n);o=d**(0,G.UO)(e,1)}}}else{var d;let e=null===(d=w.current)||void 0===d?void 0:d.yBucketSize;var u,c;0===e&&(e=1),e&&((null===(u=w.current)||void 0===u?void 0:u.yLayout)===p.D.le?a-=e:(null===(c=w.current)||void 0===c?void 0:c.yLayout)===p.D.ge?o+=e:(a-=e/2,o+=e/2)),me||(a=null!=i?i:a,o=null!=n?n:o)}return[a,o]}});const he=null!==(v=ne.display)&&void 0!==v?v:(0,V.Cf)("short");te.addAxis({scaleKey:ve,show:E.axisPlacement!==d.LB.Hidden,placement:E.axisPlacement||d.LB.Left,size:E.axisWidth||null,label:E.axisLabel,theme:k,formatValue:(e,l)=>(0,V.zc)(he(e,l)),splits:me?e=>{var l,t;const a=(0,h.d8)(null===(l=w.current)||void 0===l?void 0:l.heatmap);if(!a.yOrdinalDisplay)return[0,1];let o=a.yOrdinalDisplay.map(((e,l)=>l));switch(null===(t=w.current)||void 0===t?void 0:t.yLayout){case p.D.le:o.unshift(-1);break;case p.D.ge:o.push(o.length)}if(e.height<60)o=[o[0],o[o.length-1]];else for(;o.length>3&&(e.height-15)/o.length<10;)o=o.filter(((e,l)=>l%2==0));return o}:void 0,values:me?(e,l)=>{var t;const a=(0,h.d8)(null===(t=w.current)||void 0===t?void 0:t.heatmap);return a.yOrdinalDisplay?l.map((e=>{var l,t;return e<0?null!==(l=a.yMinDisplay)&&void 0!==l?l:"":null!==(t=a.yOrdinalDisplay[e])&&void 0!==t?t:""})):l}:void 0});const pe=ue?W:F;te.addSeries({facets:[{scale:q,auto:!0,sorted:1},{scale:ve,auto:!0}],pathBuilder:pe({each:(e,l,t,a,o,i,n)=>{Q.add({x:a-e.bbox.left,y:o-e.bbox.top,w:i,h:n,sidx:l,didx:t})},gap:j,hideLE:P,hideGE:R,xAlign:(null===(f=w.current)||void 0===f?void 0:f.xLayout)===p.D.le?-1:(null===(g=w.current)||void 0===g?void 0:g.xLayout)===p.D.ge?1:0,yAlign:((null===(y=w.current)||void 0===y?void 0:y.yLayout)===p.D.le?-1:(null===(b=w.current)||void 0===b?void 0:b.yLayout)===p.D.ge?1:0)*(de?-1:1),ySizeDivisor:I,disp:{fill:{values:(e,l)=>{var t,a;let o=ue?3:2;return U(e.data[l][o],A,null===(t=w.current)||void 0===t?void 0:t.minValue,null===(a=w.current)||void 0===a?void 0:a.maxValue)},index:A}}}),theme:k,scaleKey:""}),te.addSeries({facets:[{scale:q,auto:!0,sorted:1},{scale:ve,auto:!0}],pathBuilder:_({each:(e,l,t,a,o,i,n)=>{Q.add({x:a-e.bbox.left,y:o-e.bbox.top,w:i,h:n,sidx:l,didx:t})}},X),theme:k,scaleKey:""});const fe={drag:{x:!0,y:!1,setScale:!1},dataIdx:(e,l)=>{if(1===l){ee=null;let l=e.cursor.left*J,t=e.cursor.top*J;Q.get(l,t,1,1,(e=>{(0,Y.Pn)(l,t,e.x,e.y,e.x+e.w,e.y+e.h)&&(ee=e)}))}return ee&&l===ee.sidx?ee.didx:null},points:{fill:"rgba(255,255,255, 0.3)",bbox:(e,l)=>{let t=ee&&l===ee.sidx;return{left:t?ee.x/J:-10,top:t?ee.y/J:-10,width:t?ee.w/J:0,height:t?ee.h/J:0}}}};return H&&H()!==$.m.Off&&(fe.sync={key:"__global_",scales:[q,ve],filters:{pub:(e,l,t,a,o,i,n)=>(t<0?(ae.point.time=null,S.publish(new z.xH)):(ae.point.time=l.posToVal(t,q),S.publish(oe)),!0)}},te.setSync()),te.setCursor(fe),te}({dataRef:te,theme:C,eventBus:c,onhover:le,onclick:s.tooltip.show?ee:null,onzoom:e=>{e.xMax-e.xMin>1&&v({from:e.xMin,to:e.xMax})},isToolTipOpen:Q,timeZone:i,getTimeRange:()=>A.current,sync:O,palette:H,cellGap:s.cellGap,hideLE:null===(o=s.filterValues)||void 0===o?void 0:o.le,hideGE:null===(n=s.filterValues)||void 0===n?void 0:n.ge,exemplarColor:null!==(r=null===(u=s.exemplars)||void 0===u?void 0:u.color)&&void 0!==r?r:"rgba(255,0,255,0.7)",yAxisConfig:s.yAxis,ySizeDivisor:(null==g?void 0:g.type)===d.wf.Log?+((null===(m=s.calculation)||void 0===m||null===(f=m.yBuckets)||void 0===f?void 0:f.value)||1):1})}),[s,i,l.structureRev]);return E.warning||!E.heatmap?(0,P.jsx)(y.Z,{panelId:t,fieldConfig:u,data:l,needsNumberField:!0,message:E.warning}):(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(k.AY,{width:n,height:r,legend:(()=>{var e,l,t,a;if(!E.heatmap||!s.legend.show)return null;let o=(null===(e=te.current)||void 0===e||null===(l=e.heatmap)||void 0===l||null===(t=l.meta)||void 0===t?void 0:t.type)===x.P.HeatmapCells&&!(0,h.qJ)(null===(a=te.current)||void 0===a?void 0:a.heatmap)?3:2;const i=E.heatmap.fields[o];let n;return q&&E.heatmap.fields&&1===q.seriesIdx&&(n=i.values.get(q.dataIdx)),(0,P.jsx)(k.AY.Legend,{placement:"bottom",maxHeight:"20%",children:(0,P.jsx)("div",{className:D.colorScaleWrapper,children:(0,P.jsx)(m.q,{hoverValue:n,colorPalette:H,min:te.current.minValue,max:te.current.maxValue,display:E.display})})})})(),children:(e,l)=>(0,P.jsx)(S.N,{config:ae,data:I,width:e,height:l,timeRange:o})}),(0,P.jsx)(B.h_,{children:q&&s.tooltip.show&&(0,P.jsxs)(L.S,{position:{x:q.pageX,y:q.pageY},offset:{x:10,y:10},allowPointerEvents:Q.current,children:[K&&(0,P.jsx)("div",{style:{width:"100%",display:"flex",justifyContent:"flex-end",paddingBottom:"6px"},children:(0,P.jsx)(M.P,{onClick:()=>{Q.current=!1,X(!1),le(null)},style:{position:"relative",top:"auto",right:"auto",marginRight:0}})}),(0,P.jsx)(R,{timeRange:o,data:E,hover:q,showHistogram:s.tooltip.yHistogram})]})})]})})).useFieldConfig({disableStandardOptions:Object.values(i.qb).filter((e=>e!==i.qb.Links)),useCustomConfig:e=>{e.addCustomEditor({id:"scaleDistribution",path:"scaleDistribution",name:"Y axis scale",category:["Heatmap"],editor:u.Y,override:u.Y,defaultValue:{type:d.wf.Linear},shouldApply:e=>e.type===n.fS.number,process:r.kG,hideFromDefaults:!0}),(0,c.B)(e)}}).setPanelChangeHandler(ce).setMigrationHandler((e=>0===Object.keys(e.options).length?ce(e,"heatmap",{angular:e},e.fieldConfig):e.options)).setPanelOptions(((e,l)=>{var t,a,o,i;const n=null!==(t=l.options)&&void 0!==t?t:ie;let r=!1;try{const e=Z({series:l.data},n,s.v.theme2);r=null!=(0,h.d8)(e.heatmap).yOrdinalDisplay}catch{}let u=["Heatmap"];var c,f,g;(e.addRadio({path:"calculate",name:"Calculate from data",defaultValue:ie.calculate,category:u,settings:{options:[{label:"Yes",value:!0},{label:"No",value:!1}]}}),n.calculate&&(0,v.J)("calculation.",e,n.calculation,u),u=["Y Axis"],e.addRadio({path:"yAxis.axisPlacement",name:"Placement",defaultValue:null!==(a=ie.yAxis.axisPlacement)&&void 0!==a?a:d.LB.Left,category:u,settings:{options:[{label:"Left",value:d.LB.Left},{label:"Right",value:d.LB.Right},{label:"Hidden",value:d.LB.Hidden}]}}).addUnitPicker({category:u,path:"yAxis.unit",name:"Unit",defaultValue:void 0,settings:{isClearable:!0}}).addNumberInput({category:u,path:"yAxis.decimals",name:"Decimals",settings:{placeholder:"Auto"}}),r||e.addNumberInput({path:"yAxis.min",name:"Min value",settings:{placeholder:"Auto"},category:u}).addTextInput({path:"yAxis.max",name:"Max value",settings:{placeholder:"Auto"},category:u}),e.addNumberInput({path:"yAxis.axisWidth",name:"Axis width",defaultValue:ie.yAxis.axisWidth,settings:{placeholder:"Auto",min:5},category:u}).addTextInput({path:"yAxis.axisLabel",name:"Axis label",defaultValue:ie.yAxis.axisLabel,settings:{placeholder:"Auto"},category:u}),n.calculate)||e.addRadio({path:"rowsFrame.layout",name:"Tick alignment",defaultValue:null!==(c=null===(f=ie.rowsFrame)||void 0===f?void 0:f.layout)&&void 0!==c?c:p.D.auto,category:u,settings:{options:[{label:"Auto",value:p.D.auto},{label:"Top (LE)",value:p.D.le},{label:"Middle",value:p.D.unknown},{label:"Bottom (GE)",value:p.D.ge}]}});(e.addBooleanSwitch({path:"yAxis.reverse",name:"Reverse",defaultValue:!0===ie.yAxis.reverse,category:u}),u=["Colors"],e.addRadio({path:"color.mode",name:"Mode",defaultValue:ie.color.mode,category:u,settings:{options:[{label:"Scheme",value:ae.Scheme},{label:"Opacity",value:ae.Opacity}]}}),e.addColorPicker({path:"color.fill",name:"Color",defaultValue:ie.color.fill,category:u,showIf:e=>e.color.mode===ae.Opacity}),e.addRadio({path:"color.scale",name:"Scale",defaultValue:ie.color.scale,category:u,settings:{options:[{label:"Exponential",value:oe.Exponential},{label:"Linear",value:oe.Linear}]},showIf:e=>e.color.mode===ae.Opacity}),e.addSliderInput({path:"color.exponent",name:"Exponent",defaultValue:ie.color.exponent,category:u,settings:{min:.1,max:2,step:.1},showIf:e=>e.color.mode===ae.Opacity&&e.color.scale===oe.Exponential}),e.addSelect({path:"color.scheme",name:"Scheme",description:"",defaultValue:ie.color.scheme,category:u,settings:{options:ne.map((e=>({value:e.name,label:e.name})))},showIf:e=>e.color.mode!==ae.Opacity}),e.addSliderInput({path:"color.steps",name:"Steps",defaultValue:ie.color.steps,category:u,settings:{min:2,max:128,step:1}}).addBooleanSwitch({path:"color.reverse",name:"Reverse",defaultValue:ie.color.reverse,category:u}).addCustomEditor({id:"__scale__",path:"__scale__",name:"",category:u,editor:()=>{const e=se(n.color,s.v.theme2);return(0,P.jsx)("div",{children:(0,P.jsx)(m.q,{colorPalette:e,min:1,max:100})})}}),e.addNumberInput({path:"color.min",name:"Start color scale from value",defaultValue:ie.color.min,settings:{placeholder:"Auto (min)"},category:u}).addNumberInput({path:"color.max",name:"End color scale at value",defaultValue:ie.color.max,settings:{placeholder:"Auto (max)"},category:u}),u=["Cell display"],n.calculate)||e.addTextInput({path:"rowsFrame.value",name:"Value name",defaultValue:null===(g=ie.rowsFrame)||void 0===g?void 0:g.value,settings:{placeholder:"Value"},category:u});e.addUnitPicker({category:u,path:"cellValues.unit",name:"Unit",defaultValue:void 0,settings:{isClearable:!0}}).addNumberInput({category:u,path:"cellValues.decimals",name:"Decimals",settings:{placeholder:"Auto"}}),e.addSliderInput({name:"Cell gap",path:"cellGap",defaultValue:ie.cellGap,category:u,settings:{min:0,max:25}}).addNumberInput({path:"filterValues.le",name:"Hide cells with values <=",defaultValue:null===(o=ie.filterValues)||void 0===o?void 0:o.le,settings:{placeholder:"None"},category:u}).addNumberInput({path:"filterValues.ge",name:"Hide cells with values >=",defaultValue:null===(i=ie.filterValues)||void 0===i?void 0:i.ge,settings:{placeholder:"None"},category:u}),u=["Tooltip"],e.addBooleanSwitch({path:"tooltip.show",name:"Show tooltip",defaultValue:ie.tooltip.show,category:u}),e.addBooleanSwitch({path:"tooltip.yHistogram",name:"Show histogram (Y axis)",defaultValue:ie.tooltip.yHistogram,category:u,showIf:e=>e.tooltip.show}),u=["Legend"],e.addBooleanSwitch({path:"legend.show",name:"Show legend",defaultValue:ie.legend.show,category:u}),u=["Exemplars"],e.addColorPicker({path:"exemplars.color",name:"Color",defaultValue:ie.exemplars.color,category:u})})).setSuggestionsSupplier(new class{getSuggestionsForData(e){var l;const{dataSummary:t}=e;if(null===(l=e.data)||void 0===l||!l.series||!t.hasData||t.timeFieldCount<1||t.numberFieldCount<2||t.numberFieldCount>10)return;const a=Z(e.data,ie,s.v.theme2);a&&!a.warning&&e.getListAppender({name:"",pluginId:"heatmap",options:{},fieldConfig:{defaults:{custom:{}},overrides:[]}})}})}}]);
//# sourceMappingURL=heatmapPanel.fc39309d07b152c1f77d.js.map