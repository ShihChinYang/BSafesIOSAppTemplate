(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6206],{3151:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return s}});var a=n(69119),r=n(13882);function s(e,t){(0,r.Z)(2,arguments);var n=(0,a.default)(e),s=(0,a.default)(t);return n.getTime()===s.getTime()}},69119:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return s}});var a=n(19013),r=n(13882);function s(e){(0,r.Z)(1,arguments);var t=(0,a.default)(e);return t.setHours(0,0,0,0),t}},35193:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/folder/contents/[itemId]",function(){return n(37089)}])},88255:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var a=n(85893),r=n(67294),s=n(35005),c=n(91820),i=n(38712),l=n.n(i),o=n(49486);function u(e){let{forcedType:t=null,addAnItem:n,pageOnly:i=!1}=e,[u,d]=(0,r.useState)(!1);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.Z,{variant:"primary",className:l().btnCircle,onClick:()=>{t?n(t,"addAnItemOnTop"):d(!0)},children:(0,a.jsx)("i",{id:"1",className:"fa fa-plus fa-lg","aria-hidden":"true"})}),(0,a.jsx)(c.Z,{pageOnly:i,show:u,handleClose:()=>d(!1),optionSelected:e=>{(0,o.qu)(!1,e),d(!1),n(e,"addAnItemOnTop")}})]})}},37089:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Z}});var a=n(85893),r=n(67294),s=n(11163),c=n(9473),i=n(34051),l=n(31555),o=n(38712),u=n.n(o),d=n(51769),f=n(32132),h=n(69563),m=n(45289),p=n(88255),j=n(88160),x=n(49541),g=n(24638);n(49411);var v=n(49486),N=n(51892);function Z(){(0,v.qu)(!1,"Rendering Contents");let e=(0,c.I0)(),t=(0,s.useRouter)(),[n,o]=(0,r.useState)(null),[Z,b]=(0,r.useState)(null),[C,I]=(0,r.useState)(null),[w,y]=(0,r.useState)(null),[_,S]=(0,r.useState)(!1),[k,A]=(0,r.useState)(null),E=(0,c.v9)(e=>e.container.container),P=(0,c.v9)(e=>e.container.mode),O=(0,c.v9)(e=>e.container.items),T=(0,c.v9)(e=>e.container.newItem),q=(0,c.v9)(e=>e.container.pageNumber),G=(0,c.v9)(e=>e.container.itemsPerPage),K=(0,c.v9)(e=>e.container.total),V=(0,c.v9)(e=>e.container.workspaceKey),z=(0,c.v9)(e=>e.container.searchKey),F=(0,c.v9)(e=>e.container.searchIV),R=(e,t,n,a)=>{(0,v.qu)(!1,"".concat(e," ").concat(t," ").concat(n," ").concat(a)),B(e,t,n,a)},X=O.map((e,t)=>(0,a.jsx)(m.Z,{itemIndex:t,item:e,onAdd:R},t)),B=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;o(e),b(t),I(n),y(a),S(!0)},D=async()=>{try{let n=await (0,g.Nl)(E,e);n&&t.push("/folder/p/".concat(n))}catch(e){alert("Could not get the first item in the container")}},H=async()=>{try{let n=await (0,g.DG)(E,e);n&&t.push("/folder/p/".concat(n))}catch(e){alert("Could not get the first item in the container")}},L=async t=>{(0,v.qu)(!1,"createANewItem",t),S(!1),e((0,g.Ag)({titleStr:t,currentContainer:E,selectedItemType:n,addAction:Z,targetItem:C,targetPosition:w,workspaceKey:V,searchKey:z,searchIV:F}))},J=t=>{let{pageNumber:n=1,searchMode:a}=t,r=a||P;"listAll"===r?e((0,g.bZ)({pageNumber:n})):"search"===r&&e((0,g.zs)({searchValue:k,pageNumber:n}))};return(0,r.useEffect)(()=>{if(T){let n=(0,N.vp)(T);e((0,g.Ej)()),t.push(n)}},[T]),(0,a.jsx)("div",{className:u().pageBackground,children:(0,a.jsx)(d.Z,{children:(0,a.jsxs)(f.Z,{itemId:t.query.itemId,children:[(0,a.jsx)("br",{}),(0,a.jsx)(h.Z,{onCoverClicked:()=>{let e="/folder/".concat(E);t.push(e)},onGotoFirstItem:D,onGotoLastItem:H,onSubmitSearch:t=>{A(t),e((0,g.zs)({searchValue:t,pageNumber:1}))},onCancelSearch:()=>{e((0,g.bZ)({pageNumber:1}))}}),(0,a.jsx)("br",{}),(0,a.jsx)(i.Z,{children:(0,a.jsx)(l.Z,{lg:{span:10,offset:1},children:(0,a.jsxs)("div",{className:"".concat(u().pagePanel," ").concat(u().folderPanel),children:[(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsx)("p",{className:"fs-1 text-center",children:"Contents"}),(0,a.jsx)(i.Z,{className:"justify-content-center",children:(0,a.jsx)(p.Z,{pageOnly:!0,addAnItem:B})}),(0,a.jsx)(j.Z,{show:_,handleClose:()=>S(!1),handleCreateANewItem:L}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),X,O&&O.length>0&&K>G&&(0,a.jsx)(i.Z,{children:(0,a.jsx)(l.Z,{sm:{span:10,offset:1},md:{span:8,offset:2},children:(0,a.jsx)("div",{className:"mt-4 d-flex justify-content-center",children:(0,a.jsx)(x.Z,{page:q,total:K,limit:G,changePage:e=>{J({pageNumber:e})},ellipsis:1})})})})]})})})]})})})}}},function(e){e.O(0,[6760,6743,1769,9706,4856,9774,2888,179],function(){return e(e.s=35193)}),_N_E=e.O()}]);