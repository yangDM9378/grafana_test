"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[8039],{7641:(e,s,t)=>{t.r(s),t.d(s,{UsersListPage:()=>B,default:()=>X});var n=t(68404),r=t(36635),a=t(42870),i=t(54761),l=t(1558),o=t(37417),c=t(68374),h=t(11818),d=t(8006),u=t(61440),x=t(45916);const g={revokeInvite:u.GY},m=(0,r.connect)(null,g);class v extends n.PureComponent{render(){const{invitee:e,revokeInvite:s}=this.props;return(0,x.jsxs)("tr",{children:[(0,x.jsx)("td",{children:e.email}),(0,x.jsx)("td",{children:e.name}),(0,x.jsxs)("td",{className:"text-right",children:[(0,x.jsx)(h.m,{icon:"copy",variant:"secondary",size:"sm",getText:()=>e.url,children:"Copy Invite"})," "]}),(0,x.jsx)("td",{children:(0,x.jsx)(d.zx,{variant:"destructive",size:"sm",icon:"times",onClick:()=>s(e.code),"aria-label":"Revoke Invite"})})]})}}const j=m(v);var p,f,I;class b extends n.PureComponent{render(){const{invitees:e}=this.props;return(0,x.jsxs)("table",{className:"filter-table form-inline",children:[(0,x.jsx)("thead",{children:(0,x.jsxs)("tr",{children:[p||(p=(0,x.jsx)("th",{children:"Email"})),f||(f=(0,x.jsx)("th",{children:"Name"})),I||(I=(0,x.jsx)("th",{})),(0,x.jsx)("th",{style:{width:"34px"}})]})}),(0,x.jsx)("tbody",{"data-testid":"InviteesTable-body",children:e.map(((e,s)=>(0,x.jsx)(j,{invitee:e},`${e.id}-${s}`)))})]})}}var U=t(4387),w=t(91529);const{selectAll:y,selectById:N,selectTotal:C}=w.wl,P=(0,U.P1)([y,(e,s)=>s],((e,s)=>{const t=new RegExp(s,"i");return e.filter((e=>t.test(e.name)||t.test(e.email)))}));var M=t(39106),S=t(37625),R=t(64850),k=t(97208);const L=e=>{const s=new RegExp(e.searchQuery,"i");return e.users.filter((e=>s.test(e.login)||s.test(e.email)||s.test(e.name)))},Q=e=>e.searchQuery,T=e=>e.searchPage;var A;class O extends n.PureComponent{render(){const{canInvite:e,externalUserMngLinkName:s,externalUserMngLinkUrl:t,searchQuery:n,pendingInvitesCount:r,setUsersSearchQuery:a,onShowInvites:i,showInvites:l}=this.props,o=[{label:"Users",value:"users"},{label:`Pending Invites (${r})`,value:"invites"}],h=c.Vt.hasAccess(R.bW.OrgUsersAdd,e);return(0,x.jsxs)("div",{className:"page-action-bar","data-testid":"users-action-bar",children:[(0,x.jsx)("div",{className:"gf-form gf-form--grow",children:(0,x.jsx)(M.H,{value:n,onChange:a,placeholder:"Search user by login, email or name"})}),r>0&&(0,x.jsx)("div",{style:{marginLeft:"1rem"},children:(0,x.jsx)(S.S,{value:l?"invites":"users",options:o,onChange:i})}),h&&(A||(A=(0,x.jsx)(d.Qj,{href:"org/users/invite",children:"Invite"}))),t&&(0,x.jsx)(d.Qj,{href:t,target:"_blank",rel:"noopener",children:s})]})}}const W={setUsersSearchQuery:k.oX},D=(0,r.connect)((function(e){return{searchQuery:Q(e.users),pendingInvitesCount:C(e.invites),externalUserMngLinkName:e.users.externalUserMngLinkName,externalUserMngLinkUrl:e.users.externalUserMngLinkUrl,canInvite:e.users.canInvite}}),W)(O);var E=t(83822),V=t(93570),$=t(83997);function z(){return async e=>{const s=await(0,V.i)().get("/api/org/users",(0,$.y)());e((0,k.eT)(s))}}function F(e,s,t){return s in e?Object.defineProperty(e,s,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[s]=t,e}const _={loadUsers:z,fetchInvitees:u.nW,setUsersSearchQuery:k.oX,setUsersSearchPage:k.TQ,updateUser:function(e){return async s=>{await(0,V.i)().patch(`/api/org/users/${e.userId}`,{role:e.role}),s(z())}},removeUser:function(e){return async s=>{await(0,V.i)().delete(`/api/org/users/${e}`),s(z())}}},H=(0,r.connect)((function(e){const s=Q(e.users);return{users:L(e.users),searchQuery:Q(e.users),searchPage:T(e.users),invitees:P(e.invites,s),externalUserMngInfo:e.users.externalUserMngInfo,hasFetched:e.users.hasFetched}}),_);class B extends n.PureComponent{constructor(e){super(e),F(this,"onRoleChange",((e,s)=>{const t=Object.assign({},s,{role:e});this.props.updateUser(t)})),F(this,"onShowInvites",(()=>{this.setState((e=>({showInvites:!e.showInvites})))})),F(this,"getPaginatedUsers",(e=>{const s=30*(this.props.searchPage-1);return e.slice(s,s+30)})),this.props.externalUserMngInfo&&(this.externalUserMngInfoHtml=(0,a.a)(this.props.externalUserMngInfo)),this.state={showInvites:!1}}componentDidMount(){this.fetchUsers(),this.fetchInvitees()}async fetchUsers(){return await this.props.loadUsers()}async fetchInvitees(){return await this.props.fetchInvitees()}renderTable(){const{invitees:e,users:s,setUsersSearchPage:t}=this.props,n=this.getPaginatedUsers(s),r=Math.ceil(s.length/30);return this.state.showInvites?(0,x.jsx)(b,{invitees:e}):(0,x.jsxs)(i.wc,{spacing:"md",children:[(0,x.jsx)(E.Z,{users:n,orgId:c.Vt.user.orgId,onRoleChange:(e,s)=>this.onRoleChange(e,s),onRemoveUser:e=>this.props.removeUser(e.userId)}),(0,x.jsx)(i.Lh,{justify:"flex-end",children:(0,x.jsx)(l.t,{onNavigate:t,currentPage:this.props.searchPage,numberOfPages:r,hideWhenSinglePage:!0})})]})}render(){const{hasFetched:e}=this.props,s=this.externalUserMngInfoHtml;return(0,x.jsx)(o.T,{navId:"users",children:(0,x.jsx)(o.T.Contents,{isLoading:!e,children:(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(D,{onShowInvites:this.onShowInvites,showInvites:this.state.showInvites}),s&&(0,x.jsx)("div",{className:"grafana-info-box",dangerouslySetInnerHTML:{__html:s}}),e&&this.renderTable()]})})})}}const X=H(B)},83822:(e,s,t)=>{t.d(s,{Z:()=>I});var n,r,a,i,l,o,c,h,d=t(68404),u=t(8006),x=t(2024),g=t(41455),m=t(97928),v=t(68374),j=t(64850),p=t(74408),f=t(45916);const I=e=>{const{users:s,orgId:t,onRoleChange:I,onRemoveUser:b}=e,[U,w]=(0,d.useState)(null),[y,N]=(0,d.useState)([]);return(0,d.useEffect)((()=>{v.Vt.licensedAccessControlEnabled()&&async function(){try{if(v.Vt.hasPermission(j.bW.ActionRolesList)){let e=await(0,m.ul)(t);N(e)}}catch(e){console.error("Error loading options")}}()}),[t]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("table",{className:"filter-table form-inline",children:[(0,f.jsx)("thead",{children:(0,f.jsxs)("tr",{children:[n||(n=(0,f.jsx)("th",{})),r||(r=(0,f.jsx)("th",{children:"Login"})),a||(a=(0,f.jsx)("th",{children:"Email"})),i||(i=(0,f.jsx)("th",{children:"Name"})),l||(l=(0,f.jsx)("th",{children:"Seen"})),o||(o=(0,f.jsx)("th",{children:"Role"})),(0,f.jsx)("th",{style:{width:"34px"}}),c||(c=(0,f.jsx)("th",{}))]})}),(0,f.jsx)("tbody",{children:s.map(((e,s)=>(0,f.jsxs)("tr",{children:[(0,f.jsx)("td",{className:"width-2 text-center",children:(0,f.jsx)("img",{className:"filter-table__avatar",src:e.avatarUrl,alt:"User avatar"})}),(0,f.jsx)("td",{className:"max-width-6",children:(0,f.jsx)("span",{className:"ellipsis",title:e.login,children:e.login})}),(0,f.jsx)("td",{className:"max-width-5",children:(0,f.jsx)("span",{className:"ellipsis",title:e.email,children:e.email})}),(0,f.jsx)("td",{className:"max-width-5",children:(0,f.jsx)("span",{className:"ellipsis",title:e.name,children:e.name})}),(0,f.jsx)("td",{className:"width-1",children:e.lastSeenAtAge}),(0,f.jsx)("td",{className:"width-8",children:v.Vt.licensedAccessControlEnabled()?(0,f.jsx)(g.R,{userId:e.userId,orgId:t,roleOptions:y,basicRole:e.role,onBasicRoleChange:s=>I(s,e),basicRoleDisabled:!v.Vt.hasPermissionInMetadata(j.bW.OrgUsersWrite,e)}):(0,f.jsx)(p.A,{"aria-label":"Role",value:e.role,disabled:!v.Vt.hasPermissionInMetadata(j.bW.OrgUsersWrite,e),onChange:s=>I(s,e)})}),(0,f.jsx)("td",{className:"width-1 text-center",children:e.isDisabled&&(h||(h=(0,f.jsx)("span",{className:"label label-tag label-tag--gray",children:"Disabled"})))}),v.Vt.hasPermissionInMetadata(j.bW.OrgUsersRemove,e)&&(0,f.jsx)("td",{className:"text-right",children:(0,f.jsx)(u.zx,{size:"sm",variant:"destructive",onClick:()=>{w(e)},icon:"times","aria-label":"Delete user"})})]},`${e.userId}-${s}`)))})]}),Boolean(U)&&(0,f.jsx)(x.s,{body:`Are you sure you want to delete user ${null==U?void 0:U.login}?`,confirmText:"Delete",title:"Delete",onDismiss:()=>{w(null)},isOpen:!0,onConfirm:()=>{U&&(b(U),w(null))}})]})}}}]);
//# sourceMappingURL=UsersListPage.7b075a18e072d368f511.js.map