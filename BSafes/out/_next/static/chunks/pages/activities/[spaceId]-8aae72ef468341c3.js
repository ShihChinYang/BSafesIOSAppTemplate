(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4473],{94806:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/activities/[spaceId]",function(){return s(68382)}])},68382:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return y}});var t=s(85893),r=s(67294),a=s(9473),c=s(11163),i=s(41664),l=s.n(i),o=s(10682),d=s(34051),h=s(31555),x=s(18695),u=s(16518),j=s(35005),f=s(51769),p=s(38712),v=s.n(p),m=s(24638),g=s(49411),Z=s(49486),N=s(51892);function y(e){let n=(0,a.I0)(),s=(0,c.useRouter)(),[i,l]=(0,r.useState)(!1),u=(0,a.v9)(e=>e.auth.accountVersion),p=(0,a.v9)(e=>e.auth.isLoggedIn),N=(0,a.v9)(e=>e.auth.expandedKey),y=(0,a.v9)(e=>e.auth.searchKey),_=(0,a.v9)(e=>e.auth.searchIV),w=(0,a.v9)(e=>e.container.activity),b=(0,a.v9)(e=>e.container.workspace),C=(0,a.v9)(e=>e.container.workspaceKeyReady),I=(0,a.v9)(e=>e.container.container),E=(0,a.v9)(e=>e.container.activities);return(0,r.useEffect)(()=>{let e=(e,s)=>{let{shallow:t}=s;console.log("App is changing to ".concat(e," ").concat(t?"with":"without"," shallow routing")),n((0,g.JG)())},t=()=>{(0,Z.qu)(!1,"handleRouteChangeComplete"),n((0,g.df)())};return s.events.on("routeChangeStart",e),s.events.on("routeChangeComplete",t),()=>{s.events.off("routeChangeStart",e),s.events.off("routeChangeComplete",t)}},[]),(0,r.useEffect)(()=>{n((0,m.vB)(!1))},[p]),(0,r.useEffect)(()=>{if(p&&!C&&s.query.spaceId){let e=s.query.spaceId;if(e.startsWith("u:"))n((0,m.XZ)({container:"root",workspaceId:e,workspaceKey:N,searchKey:y,searchIV:_})),n((0,m.vB)(!0));else if(s.query.spaceId===b)n((0,m.ef)({container:"root"})),n((0,m.vB)(!0));else{let s;s="v1"===u?e.substring(0,e.length-4):e,n((0,m.VM)({teamId:s,container:"root"}))}n((0,m.x$)()),l(!0)}},[p,C,s.query.spaceId]),(0,r.useEffect)(()=>{if(!i||!b||!C||"root"!==I)return;n((0,g.rs)());let e=[{_id:b},{_id:"ac:"+b}];n((0,g.rJ)(e)),n((0,m.o4)({pageNumber:1}))},[i,I,b,C]),(0,t.jsx)("div",{className:v().spaceBackground,children:(0,t.jsx)(f.Z,{children:(0,t.jsxs)(o.Z,{fluid:!0,children:[(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),(0,t.jsx)(d.Z,{children:(0,t.jsx)(h.Z,{children:(0,t.jsx)("h1",{className:"text-center display-5",children:"Activities"})})}),(0,t.jsx)(d.Z,{className:"justify-content-center",children:(0,t.jsx)(h.Z,{lg:8,children:(0,t.jsx)(x.Z,{children:E.map((e,n)=>(0,t.jsx)(k,{items:e},n))})})}),(0,t.jsx)("br",{}),0===w&&(0,t.jsx)(d.Z,{className:"justify-content-center",children:(0,t.jsx)(j.Z,{variant:"link",onClick:()=>{n((0,m.o4)({}))},children:"More"})}),(0,t.jsx)("br",{}),(0,t.jsx)("br",{})]})},s.pathname)})}function k(e){let{items:n}=e,[s,a]=(0,r.useState)(!1),[c,...i]=n;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(_,{...c,root:!0}),i.length>0&&(0,t.jsxs)(t.Fragment,{children:[!s&&(0,t.jsx)("div",{className:"text-center",onClick:()=>a(!s),children:(0,t.jsx)("i",{className:"fa fa-caret-down"})}),(0,t.jsx)(u.Z,{in:s,children:(0,t.jsx)("div",{children:i.map((e,n)=>(0,r.createElement)(_,{...e,key:n}))})}),s&&(0,t.jsx)("div",{className:"text-center",onClick:()=>a(!s),children:(0,t.jsx)("i",{className:"fa fa-caret-up"})})]})]})}function _(e){let{root:n,...s}=e,r=(0,N.vp)(s),a=(0,t.jsxs)("div",{children:[(0,t.jsx)(d.Z,{children:(0,t.jsx)(h.Z,{xs:12,children:(0,t.jsx)("h4",{className:"my-0",children:s.titleText})})}),(0,t.jsx)(d.Z,{children:(0,t.jsx)(h.Z,{xs:6,children:(0,t.jsx)("span",{className:"",children:s.updatedBy})})}),(0,t.jsxs)(d.Z,{children:[(0,t.jsx)(h.Z,{xs:6,children:(0,t.jsx)("span",{className:"",children:"".concat(s.updatedText,", ").concat(s.updatedTime)})}),(0,t.jsx)(h.Z,{xs:6,children:(0,t.jsx)("span",{className:"pull-right"})})]})]});return(0,t.jsx)(x.Z.Item,{className:n?"":"bg-light bg-gradient",style:{cursor:"pointer"},children:(0,t.jsxs)(d.Z,{children:[r?(0,t.jsx)(l(),{href:r,legacyBehavior:!0,children:(0,t.jsx)(h.Z,{xs:11,children:a})}):(0,t.jsx)(h.Z,{xs:11,children:a}),(0,t.jsx)(h.Z,{xs:1,children:(0,t.jsx)("a",{className:"".concat(v().externalLink),target:"_blank",href:r,rel:"noopener noreferrer",children:(0,t.jsx)("i",{className:"me-2 fa fa-external-link fa-lg text-dark","aria-hidden":"true"})})})]})})}}},function(e){e.O(0,[6760,1664,1769,9774,2888,179],function(){return e(e.s=94806)}),_N_E=e.O()}]);