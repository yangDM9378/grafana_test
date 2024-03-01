"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[4074],{2369:(e,a,s)=>{s.r(a),s.d(a,{DashboardListPage:()=>$,default:()=>W});var r=s(52423),n=s(68404),o=s(66015),t=s(36298),l=s(80795),d=s(37417),i=s(42200),c=s(83146);var h,u,p=s(16755),m=s(4645),v=s(59196),g=s(64850),f=s(34176),b=s(58411),x=s(36769),w=s(16736),j=s(78080),y=s(8006),N=s(99500),C=s(45916);const I=e=>{let{folderId:a,canCreateFolders:s=!1,canCreateDashboards:r=!1}=e;const n=e=>{let s=`dashboard/${e}`;return a&&(s+=`?folderId=${a}`),s};return(0,C.jsx)("div",{children:(0,C.jsx)(j.L,{overlay:()=>(0,C.jsxs)(w.v,{children:[r&&(0,C.jsx)(w.v.Item,{url:n("new"),label:"New Dashboard"}),!a&&s&&(h||(h=(0,C.jsx)(w.v.Item,{url:"dashboards/folder/new",label:"New Folder"}))),r&&(0,C.jsx)(w.v.Item,{url:n("import"),label:"Import"})]}),placement:"bottom-start",children:u||(u=(0,C.jsxs)(y.zx,{variant:"primary",children:["New",(0,C.jsx)(N.J,{name:"angle-down"})]}))})})};const D=n.memo((e=>{var a;let{folder:s}=e;const o=(0,p.wW)(k),t=(0,x.hD)(),l=t.useState(),{onKeyDown:d,keyboardEvents:i}=(0,f.A)(),c=null==s?void 0:s.id,h=null==s?void 0:s.canSave,{isEditor:u}=v.Vt,w=s?h:v.Vt.hasEditPermissionInFolders,j=v.Vt.hasAccess(g.bW.FoldersCreate,u),y=w||!!h,N=null!=s&&s.id?v.Vt.hasAccessInMetadata(g.bW.DashboardsCreate,s,y):v.Vt.hasAccess(g.bW.DashboardsCreate,y),D=void 0===s&&j||N;return(0,n.useEffect)((()=>t.initStateFromUrl(null==s?void 0:s.uid)),[null==s?void 0:s.uid,t]),(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)("div",{className:(0,r.cx)(o.actionBar,"page-action-bar"),children:[(0,C.jsx)("div",{className:(0,r.cx)(o.inputWrapper,"gf-form gf-form--grow m-r-2"),children:(0,C.jsx)(m.I,{value:null!==(a=l.query)&&void 0!==a?a:"",onChange:e=>t.onQueryChange(e.currentTarget.value),onKeyDown:d,autoFocus:!0,spellCheck:!1,placeholder:l.includePanels?"Search for dashboards and panels":"Search for dashboards",className:o.searchInput,suffix:null})}),D&&(0,C.jsx)(I,{folderId:c,canCreateFolders:j,canCreateDashboards:N})]}),(0,C.jsx)(b.Z,{showManage:Boolean(u||w||h),folderDTO:s,hidePseudoFolders:!0,keyboardEvents:i})]})}));D.displayName="ManageDashboardsNew";const F=D,k=e=>({actionBar:r.css`
    ${e.breakpoints.down("sm")} {
      flex-wrap: wrap;
    }
  `,inputWrapper:r.css`
    ${e.breakpoints.down("sm")} {
      margin-right: 0 !important;
    }
  `,searchInput:r.css`
    margin-bottom: 6px;
    min-height: ${e.spacing(4)};
  `,unsupported:r.css`
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    font-size: 18px;
  `,noResults:r.css`
    padding: ${e.v1.spacing.md};
    background: ${e.v1.colors.bg2};
    font-style: italic;
    margin-top: ${e.v1.spacing.md};
  `}),$=(0,n.memo)((e=>{let{match:a,location:s}=e;const{loading:n,value:h}=(0,o.Z)((()=>{const e=a.params.uid,r=s.pathname;return e&&r.startsWith("/dashboards")?(e=>i.ae.getFolderByUid(e,{withAccessControl:!0}).then((e=>{const a=(0,c.B)(e);return a.children[0].active=!0,{folder:e,folderNav:a}})))(e).then((e=>{let{folder:a,folderNav:r}=e;const n=t.u.stripBaseFromUrl(a.url);return n!==s.pathname&&l.E1.replace(n),{folder:a,pageNav:r}})):Promise.resolve({})}),[a.params.uid]);return(0,C.jsx)(d.T,{navId:"dashboards/browse",pageNav:null==h?void 0:h.pageNav,children:(0,C.jsx)(d.T.Contents,{isLoading:n,className:r.css`
          display: flex;
          flex-direction: column;
          height: 100%;
        `,children:(0,C.jsx)(F,{folder:null==h?void 0:h.folder})})})}));$.displayName="DashboardListPage";const W=$}}]);
//# sourceMappingURL=DashboardListPage.ee5d4ab3eea6207cd172.js.map