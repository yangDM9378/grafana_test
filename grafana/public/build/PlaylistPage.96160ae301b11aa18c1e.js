"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[9218],{53338:(e,s,t)=>{t.d(s,{Z:()=>r});var l=t(68404),i=t(39106),a=t(8006),n=t(45916);class r extends l.PureComponent{render(){const{searchQuery:e,linkButton:s,setSearchQuery:t,target:l,placeholder:r="Search by name or type"}=this.props,o={href:null==s?void 0:s.href,disabled:null==s?void 0:s.disabled};return l&&(o.target=l),(0,n.jsxs)("div",{className:"page-action-bar",children:[(0,n.jsx)("div",{className:"gf-form gf-form--grow",children:(0,n.jsx)(i.H,{value:e,onChange:t,placeholder:r})}),s&&(0,n.jsx)(a.Qj,Object.assign({},o,{children:s.title}))]})}}},6829:(e,s,t)=>{t.r(s),t.d(s,{PlaylistPage:()=>Q,default:()=>V});var l=t(68404),i=t(66015),a=t(2024),n=t(75442),r=t(37417),o=t(53338),d=t(59196),c=t(52423),u=t(16755),h=t(45916);const p=()=>{const e=(0,u.wW)(y);return(0,h.jsx)("div",{className:e.noResult,children:"No playlist found!"})},y=e=>({noResult:c.css`
      padding: ${e.spacing(2)};
      background: ${e.colors.secondary.main};
      font-style: italic;
      margin-top: ${e.spacing(2)};
    `});var x=t(1129),j=t(40941),g=t(8006),v=t(29471),m=t(274),b=t(78941),f=t(71980),k=t(65678),S=t(37625),C=t(12310),T=t(4645),w=t(11818),D=t(11050);const P=e=>{let{playlistUid:s,onDismiss:t}=e;const[i,a]=(0,l.useState)(!1),[n,r]=(0,l.useState)(!1),o={};i&&(o.kiosk=i),n&&(o.autofitpanels=!0);const d=m.Cj.renderUrl(`${(0,D.OS)()}/play/${s}`,o);return(0,h.jsx)(b.u,{isOpen:!0,title:"Share playlist",onDismiss:t,children:(0,h.jsxs)(f.C,{children:[(0,h.jsx)(k.g,{label:"Mode",children:(0,h.jsx)(S.S,{value:i,options:[{label:"Normal",value:!1},{label:"TV",value:"tv"},{label:"Kiosk",value:!0}],onChange:a})}),(0,h.jsx)(k.g,{children:(0,h.jsx)(C.X,{label:"Autofit",description:"Panel heights will be adjusted to fit screen size",name:"autofix",value:n,onChange:e=>r(e.currentTarget.checked)})}),(0,h.jsx)(k.g,{label:"Link URL",children:(0,h.jsx)(T.I,{id:"link-url-input",value:d,readOnly:!0,addonAfter:(0,h.jsx)(w.m,{icon:"copy",variant:"primary",getText:()=>d,children:"Copy"})})})]})})},N=e=>{let{playlists:s,setStartPlaylist:t,setPlaylistToDelete:l}=e;const i=(0,u.wW)($);return(0,h.jsx)("ul",{className:i.list,children:s.map((e=>(0,h.jsx)("li",{className:i.listItem,children:(0,h.jsxs)(x.Z,{children:[(0,h.jsxs)(x.Z.Heading,{children:[e.name,(0,h.jsx)(j.JY,{children:s=>{let{showModal:t,hideModal:l}=s;return(0,h.jsx)(v.u,{tooltip:"Share playlist",icon:"share-alt",iconSize:"lg",onClick:()=>{t(P,{playlistUid:e.uid,onDismiss:l})}})}},"button-share")]}),(0,h.jsxs)(x.Z.Actions,{children:[(0,h.jsx)(g.zx,{variant:"secondary",icon:"play",onClick:()=>t(e),children:"Start playlist"}),d.Vt.isEditor&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(g.Qj,{variant:"secondary",href:`/playlists/edit/${e.uid}`,icon:"cog",children:"Edit playlist"},"edit"),(0,h.jsx)(g.zx,{disabled:!1,onClick:()=>l(e),icon:"trash-alt",variant:"destructive",children:"Delete playlist"})]})]})]})},e.uid)))})};function $(e){return{list:(0,c.css)({display:"grid"}),listItem:(0,c.css)({listStyle:"none"})}}var L=t(80795);const Z=e=>{let{playlist:s,onDismiss:t}=e;const[i,a]=(0,l.useState)(!1),[n,r]=(0,l.useState)(!1);return(0,h.jsxs)(b.u,{isOpen:!0,icon:"play",title:"Start playlist",onDismiss:t,children:[(0,h.jsxs)(f.C,{children:[(0,h.jsx)(k.g,{label:"Mode",children:(0,h.jsx)(S.S,{value:i,options:[{label:"Normal",value:!1},{label:"TV",value:"tv"},{label:"Kiosk",value:!0}],onChange:a})}),(0,h.jsx)(C.X,{label:"Autofit",description:"Panel heights will be adjusted to fit screen size",name:"autofix",value:n,onChange:e=>r(e.currentTarget.checked)})]}),(0,h.jsx)(b.u.ButtonRow,{children:(0,h.jsxs)(g.zx,{variant:"primary",onClick:()=>{const e={};i&&(e.kiosk=i),n&&(e.autofitpanels=!0),L.E1.push(m.Cj.renderUrl(`/playlists/play/${s.uid}`,e))},children:["Start ",s.name]})})]})};var z,O=t(11603);const Q=()=>{const[e,s]=(0,l.useState)(0),[t,c]=(0,l.useState)(""),u=(0,i.Z)((()=>(0,O.Dv)()),[e]),y=(0,l.useMemo)((()=>{var e;return(0,O.Ds)(null!==(e=u.value)&&void 0!==e?e:[],t)}),[t,u]),[x,j]=(0,l.useState)(),[g,v]=(0,l.useState)(),m=y&&y.length>0,b=(0,h.jsx)(n.Z,{title:"There are no playlists created yet",buttonIcon:"plus",buttonLink:"playlists/new",buttonTitle:"Create Playlist",buttonDisabled:!d.Vt.isEditor,proTip:"You can use playlists to cycle dashboards on TVs without user control",proTipLink:"http://docs.grafana.org/reference/playlist/",proTipLinkTitle:"Learn more",proTipTarget:"_blank"}),f=y.length>0||t.length>0;return(0,h.jsx)(r.T,{navId:"dashboards/playlists",children:(0,h.jsxs)(r.T.Contents,{isLoading:u.loading,children:[f&&(0,h.jsx)(o.Z,{searchQuery:t,linkButton:d.Vt.isEditor?{title:"New playlist",href:"/playlists/new"}:void 0,setSearchQuery:c}),!m&&t?z||(z=(0,h.jsx)(p,{})):(0,h.jsx)(N,{playlists:y,setStartPlaylist:j,setPlaylistToDelete:v}),!f&&b,g&&(0,h.jsx)(a.s,{title:g.name,confirmText:"Delete",body:`Are you sure you want to delete '${g.name}' playlist?`,onConfirm:()=>{g&&(0,O.l8)(g.uid).finally((()=>{s(e+1),v(void 0)}))},isOpen:Boolean(g),onDismiss:()=>v(void 0)}),x&&(0,h.jsx)(Z,{playlist:x,onDismiss:()=>j(void 0)})]})})},V=Q}}]);
//# sourceMappingURL=PlaylistPage.96160ae301b11aa18c1e.js.map