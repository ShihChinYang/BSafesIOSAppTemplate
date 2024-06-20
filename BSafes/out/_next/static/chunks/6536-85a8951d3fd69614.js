"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6536],{54232:function(e,r,a){a.d(r,{Z:function(){return k}});var t=a(85893),n=a(67294),i=a(9473),s=a(34051),l=a(31555),o=a(35005),c=a(2086),d=a(19755),u=a.n(d),h=a(38712),f=a.n(h),m=a(51892),g=a(49486),p=a(39388),x=a(94882),b=a(43454),j=a(24638),y=a(49411);function k(e){let{editorId:r,mode:d,content:h,onContentChanged:k,onPenClicked:w,showPen:v=!0,editable:S=!0,hideIfEmpty:F=!1,writingModeReady:Z=null,readOnlyModeReady:N=null,onDraftSampled:C=null,onDraftClicked:T=null,onDraftDelete:B=null}=e,L=(0,i.I0)(),q=(0,n.useRef)(null),[I,R]=(0,n.useState)(null),[U,E]=(0,n.useState)(null),P=(0,i.v9)(e=>e.auth.expandedKey),V=(0,i.v9)(e=>e.auth.froalaLicenseKey),A=(0,i.v9)(e=>e.page.id),M=(0,i.v9)(e=>e.page.itemKey),H=(0,i.v9)(e=>e.page.itemIV),K=(0,i.v9)(e=>e.page.draft);(0,g.qu)(!1,"editor key: ".concat(V));let[O,_]=(0,n.useState)(!1),[z,X]=(0,n.useState)(!1),[D,G]=(0,n.useState)(null);(0,g.qu)(!1,"Rendering editor, id,  mode: ","".concat(r," ").concat(d));let W=()=>{let e;if(z&&!O){switch(r){case"title":e={key:V,toolbarButtons:["undo","redo"],toolbarButtonsMD:["undo","redo"],toolbarButtonsSM:["undo","redo"],toolbarButtonsXS:["undo","redo"],placeholderText:"Page Title"};break;case"content":if(!M){let e=(0,j.d9)();L((0,y.Yj)({itemKey:e}))}$(q.current).html(h),e={key:V,toolbarButtons:["fullscreen","bold","italic","underline","strikeThrough","subscript","superscript","fontFamily","fontSize","lineHeight","|","color","emoticons","paragraphStyle","|","paragraphFormat","align","formatOL","formatUL","outdent","indent","quote","insertHR","-","insertLink","insertImage","insertVideo","insertTable","undo","redo","clearFormatting"],toolbarButtonsMD:["fullscreen","bold","italic","underline","strikeThrough","subscript","superscript","fontFamily","fontSize","lineHeight","|","color","emoticons","paragraphStyle","|","paragraphFormat","align","formatOL","formatUL","outdent","indent","quote","insertHR","-","insertLink","insertImage","insertVideo","insertTable","undo","redo","clearFormatting"],toolbarButtonsSM:["fullscreen","bold","italic","underline","strikeThrough","subscript","superscript","fontFamily","fontSize","lineHeight","|","color","emoticons","paragraphStyle","|","paragraphFormat","align","formatOL","formatUL","outdent","indent","quote","insertHR","-","insertLink","insertImage","insertVideo","insertTable","undo","redo","clearFormatting"],toolbarButtonsXS:["bold","italic","color","emoticons","paragraphFormat","align","formatOL","formatUL","insertLink","insertImage","insertVideo","insertTable","undo","redo"],fontFamily:{"Arial,Helvetica,sans-serif":"Arial","'Edu SA Beginner Variable', cursive":"Edu SA Beginner","Georgia,serif":"Georgia","Impact,Charcoal,sans-serif":"Impact","'Montserrat Variable', sans-serif":"Montserrat","'Noto Serif Variable', serif":"Noto Serif","'Oswald Variable', sans-serif":"Oswald","'Roboto Flex Variable', sans-serif":"Roboto Flex","'Times New Roman',Times,serif":"Times New Roman"},fontFamilySelection:!1,tableStyles:{"fr-dashed-borders":"Dashed Borders","fr-alternate-rows":"Alternate Rows","fr-no-borders":"No Borders"}};break;default:e={key:V,toolbarButtons:["bold","italic","underline","strikeThrough","undo","redo"],toolbarButtonsMD:["bold","italic","underline","strikeThrough","undo","redo"],toolbarButtonsSM:["bold","italic","underline","strikeThrough","undo","redo"],toolbarButtonsXS:["bold","italic","underline","strikeThrough","undo","redo"]}}$(q.current).froalaEditor(e),"content"===r&&G($(q.current).froalaEditor("html.get")),q.current.style.overflowX=null,O||((0,g.qu)(!1,"setEditorOn"),_(!0)),Z&&Z()}},J=()=>{let e=$(q.current).froalaEditor("html.get");(0,g.qu)(!1,"editor content: ",e),setTimeout(()=>{k(r,e)},0)},Q=()=>{O&&($(q.current).froalaEditor("destroy"),$(q.current).html(h),q.current.style.overflowX="auto",I&&(clearInterval(I),R(null),E(null)),G(null),_(!1),N&&N())};(0,n.useEffect)(()=>{switch(d){case"ReadOnly":Q();break;case"Writing":W();break;case"Saving":J()}},[d]),(0,n.useEffect)(()=>{A&&M&&($(".container").data("itemId",A),$(".container").data("itemKey",M))},[A,M,H]),(0,n.useEffect)(()=>{window.$=window.jQuery=u(),a.e(1401).then(a.bind(a,41401)).then(async e=>{await e.Froala,await e.FroalaPlugins,await e.Codemirror,await e.Photoswipe,await e.Others,X(!0)})},[]),(0,n.useEffect)(()=>{z&&window&&((0,g.qu)(!1,"bsafesFroala: ".concat(window.bsafesFroala.name)),window.bsafesFroala.bSafesPreflight=Y,window.bsafesFroala.rotateImage=ee,window.bsafesFroala.convertUint8ArrayToBinaryString=g.tp,window.bsafesFroala.compareArraryBufferAndUnit8Array=er,window.bsafesFroala.encryptBinaryString=ea,window.bsafesFroala.encryptLargeBinaryString=et,window.bsafesFroala.encryptChunkBinaryStringToBinaryStringAsync=en,window.bsafesFroala.preS3Upload=ei,window.bsafesFroala.preS3ChunkUpload=es,window.bsafesFroala.uploadData=el,window.bsafesFroala.getBrowserInfo=eo,window.bsafesFroala.arraryBufferToStr=ec,window.bsafesFroala.getEditorConfig=ed)},[z]),(0,n.useEffect)(()=>{null!==D&&"content"===r&&E("Start")},[D]),(0,n.useEffect)(()=>{let e;switch((0,g.qu)(!1,"interval state:",U),U){case"Start":R(setInterval(()=>{(0,g.qu)(!1,"Saving draft ..."),(e=$(q.current).froalaEditor("html.get"))!==D&&((0,g.qu)(!1,"Content changed"),C(e),G(e),E("Stop"))},1e3));break;case"Stop":clearInterval(I),R(null)}},[U]);let Y=e=>{(0,g.qu)(!1,"bSafesPreflight"),(0,g.$3)({api:"/memberAPI/preflight",dispatch:L}).then(r=>{(0,g.qu)(!1,r),"ok"===r.status?((0,g.qu)(!1,"bSafesPreflight ok: "),e(null,P)):((0,g.qu)(!1,"woo... bSafesPreflight failed: ",r.error),e(r.error))}).catch(r=>{(0,g.qu)(!1,"woo... bSafesPreflight failed."),e(r)})},ee=async(e,r,a)=>{try{let t=await (0,b.N)(e,r);(0,g.qu)(!1,"Rotation done"),a(null,t.blob,t.byteString)}catch(e){(0,g.qu)(!1,"rotateImage error:",e),a(e)}},er=(e,r)=>(0,x.nW)(e,r),ea=(e,r)=>(0,x.UJ)(e,r),et=(e,r)=>(0,x.sz)(e,r),en=(e,r)=>(0,x.kh)(e,r),ei=()=>new Promise(async(e,r)=>{(0,g.$3)({api:"/memberAPI/preS3Upload",dispatch:L}).then(a=>{if((0,g.qu)(!1,a),"ok"===a.status){let r=a.s3Key;e({status:"ok",s3Key:r,signedURL:a.signedURL,signedGalleryURL:a.signedGalleryURL,signedThumbnailURL:a.signedThumbnailURL})}else(0,g.qu)(!1,"preS3Upload failed: ",a.error),r({status:"error",error:a.error})}).catch(e=>{(0,g.qu)(!1,"preS3Upload failed: ",e),r({status:"error",error:e})})}),es=(e,r,a)=>new Promise((t,n)=>{let i,s;(0,g.$3)({api:"/memberAPI/preS3ChunkUpload",body:{itemId:e,chunkIndex:r.toString(),timeStamp:a},dispatch:L}).then(e=>{(0,g.qu)(!1,e),"ok"===e.status?(s=(i=e.s3Key).split("_chunk_")[0],t({s3Key:i,s3KeyPrefix:s,signedURL:e.signedURL})):((0,g.qu)(!1,"preS3ChunkUpload failed: ",e.error),n(e.error))}).catch(e=>{(0,g.qu)(!1,"preS3ChunkUpload failed: ",e),n(e)})}),el=(e,r,a,t)=>new Promise(async(n,i)=>{try{let i=await (0,p.B1)(r,a,e,{onUploadProgress:async e=>{t(e)},headers:{"Content-Type":"binary/octet-stream"}},null);n(i)}catch(e){i(e)}}),eo=()=>(0,g.S7)(),ec=e=>(0,g.q_)(e),ed=()=>(0,m.M2)();return(0,t.jsx)(t.Fragment,{children:z?(0,t.jsxs)(t.Fragment,{children:[v&&S?(0,t.jsxs)(s.Z,{children:[(0,t.jsxs)(l.Z,{xs:6,children:["title"===r&&"<h2></h2>"===h&&(0,t.jsx)("h6",{className:"m-0 text-secondary",children:"Title"}),"content"===r&&null===h&&(0,t.jsx)("h6",{className:"m-0 text-secondary",children:"Write"})]}),(0,t.jsxs)(l.Z,{xs:6,children:[(0,t.jsx)(o.Z,{variant:"link",className:"text-dark pull-right p-0",onClick:()=>{w(r)},children:(0,t.jsx)("i",{className:"fa fa-pencil","aria-hidden":"true"})}),"content"===r&&null!==K&&(0,t.jsxs)(c.Z,{className:"pull-right mx-3",size:"sm",children:[(0,t.jsx)(o.Z,{variant:"outline-danger",className:"m-0",onClick:T,children:"Draft"}),(0,t.jsx)(o.Z,{variant:"danger",onClick:B,children:"X"})]})]})]}):"",("Writing"===d||"Saving"===d||"ReadOnly"===d||!(F&&(!h||0===h.length)))&&(0,t.jsx)(s.Z,{className:"".concat("title"===r?f().titleEditorRow:f().editorRow," fr-element fr-view"),children:(0,t.jsx)("div",{className:"inner-html",ref:q,dangerouslySetInnerHTML:{__html:h},style:{overflowX:"auto"}})})]}):""})}a(22079)},37865:function(e,r,a){a.d(r,{Z:function(){return w}});var t=a(85893),n=a(67294),i=a(9473),s=a(11163),l=a(10682),o=a(34051),c=a(31555),d=a(35005),u=a(32171),h=a(39060),f=a(63327),m=a(12053),g=a(18695),p=a(37820),x=a.n(p),b=a(38712),j=a.n(b),y=a(49411),k=a(51892);function w(){let e=(0,i.I0)(),r=(0,s.useRouter)(),a=(0,i.v9)(e=>e.container.workspaceKey),u=(0,i.v9)(e=>e.container.searchKey),h=(0,i.v9)(e=>e.container.searchIV),f=(0,i.v9)(e=>e.page.oldVersion),m=(0,i.v9)(e=>e.page.activity),g=(0,i.v9)(e=>e.page.tags),p=(0,i.v9)(e=>e.page.itemCopy),[b,k]=(0,n.useState)([]),[w,S]=(0,n.useState)(!1),[F,Z]=(0,n.useState)(!1),N=e=>{k(e),w||S(!0)};return(0,n.useEffect)(()=>{k(g)},[g]),(0,n.useEffect)(()=>{0===m&&w&&S(!1)},[m]),(0,t.jsxs)(l.Z,{children:[(0,t.jsx)(o.Z,{children:(0,t.jsx)(c.Z,{children:(0,t.jsxs)("div",{className:"pull-right",children:[(0,t.jsx)("span",{children:p&&"v.".concat(p.version)}),(0,t.jsx)(d.Z,{variant:"link",className:"text-dark",onClick:()=>{Z(!0),e((0,y.Ey)()),e((0,y.Kh)({page:1}))},children:(0,t.jsx)("i",{className:"fa fa-history","aria-hidden":"true"})}),!1]})})}),(0,t.jsxs)(o.Z,{children:[(0,t.jsx)(c.Z,{xs:"1",className:"px-0",children:(0,t.jsx)("label",{className:"pull-right py-2",children:(0,t.jsx)("span",{children:(0,t.jsx)("i",{className:"fa fa-tags fa-lg","aria-hidden":"true"})})})}),(0,t.jsx)(c.Z,{xs:"10",children:f?(0,t.jsx)(x(),{value:b,onChange:N,disabled:!0}):(0,t.jsx)(x(),{value:b,onChange:N})})]}),w&&(0,t.jsx)(o.Z,{children:(0,t.jsxs)(c.Z,{md:"10",children:[(0,t.jsx)(d.Z,{variant:"link",className:"pull-right",onClick:()=>{k(g),S(!1)},children:(0,t.jsx)("i",{className:"fa fa-times fa-lg ".concat(j().orangeText),"aria-hidden":"true"})}),(0,t.jsx)(d.Z,{variant:"link",className:"pull-right",onClick:()=>{e((0,y.Sx)(b,a,u,h))},children:(0,t.jsx)("i",{className:"fa fa-check fa-lg ".concat(j().greenText),"aria-hidden":"true"})})]})}),(0,t.jsx)(v,{onLinkChanged:e=>{r.push(e),Z(!1)},versionsHistoryModalOpened:F,closeVersionsHistoryModal:()=>Z(!1)})]})}function v(e){let{onLinkChanged:r,versionsHistoryModalOpened:a,closeVersionsHistoryModal:n}=e,s=(0,i.I0)(),l=(0,i.v9)(e=>e.page.itemVersions),o=(0,i.v9)(e=>e.page.totalVersions),c=(0,i.v9)(e=>e.page.versionsPageNumber),g=(0,i.v9)(e=>e.page.versionsPerPage),p=e=>{r(e)},x=l.map((e,r)=>(0,t.jsx)(S,{onVersionSelected:p,id:e.id,container:e.container,updatedBy:e.updatedBy,updatedTime:e.updatedTime,updatedText:e.updatedText,updatedTimeStamp:e.updatedTimeStamp,version:e.version,latestVersion:0===r},r));return(0,t.jsxs)(u.Z,{show:a,onHide:n,children:[(0,t.jsx)(h.Z,{closeButton:!0,children:(0,t.jsxs)(f.Z,{children:[(0,t.jsx)("h4",{children:"Versions"}),(0,t.jsx)(d.Z,{variant:"link",href:"#",size:"sm",children:"Go to top"})]})}),(0,t.jsxs)(m.Z,{children:[x,o>c*g&&(0,t.jsx)("div",{className:"text-center",children:(0,t.jsx)(d.Z,{variant:"link",className:"text-center",size:"sm",onClick:e=>{s((0,y.Kh)({page:c+1}))},children:"More"})})]})]})}function S(e){let{onVersionSelected:r,id:a,container:n,updatedBy:i,updatedTime:s,updatedText:l,updatedTimeStamp:d,version:u,latestVersion:h}=e,f=(0,k.vp)({id:a,container:n});h||(f+="?version=".concat(u));let m=()=>{r(f)};return(0,t.jsxs)(g.Z.Item,{children:[(0,t.jsxs)(o.Z,{children:[(0,t.jsx)(c.Z,{xs:3,onClick:m,style:{cursor:"pointer"},children:(0,t.jsxs)("h4",{children:["v.",u]})}),(0,t.jsx)(c.Z,{xs:8,onClick:m,style:{cursor:"pointer"},children:(0,t.jsx)("h5",{className:"pull-right px-2",children:l})}),(0,t.jsx)(c.Z,{xs:1,children:(0,t.jsx)("a",{className:j().externalLink,target:"_blank",href:f,rel:"noopener noreferrer",children:(0,t.jsx)("i",{className:"me-2 fa fa-external-link mt-1  text-dark pull-right","aria-hidden":"true"})})})]}),(0,t.jsxs)(o.Z,{onClick:m,style:{cursor:"pointer"},children:[(0,t.jsx)(c.Z,{xs:6,children:(0,t.jsx)("p",{children:i})}),(0,t.jsx)(c.Z,{xs:6,children:(0,t.jsx)("p",{className:"pull-right",children:s})})]}),(0,t.jsx)(o.Z,{onClick:m,style:{cursor:"pointer"},children:(0,t.jsx)(c.Z,{xs:12,children:(0,t.jsx)("p",{className:"pull-right",children:d})})})]},a)}},76822:function(e,r,a){a.d(r,{Z:function(){return l}});var t=a(85893),n=a(35005),i=a(38712),s=a.n(i);function l(e){let{isEditing:r,onWrite:a,readyForSaving:i=!0,onSave:l,onCancel:o,canEdit:c=!0}=e;return(0,t.jsxs)(t.Fragment,{children:[c&&!r?(0,t.jsx)(n.Z,{onClick:a,className:"".concat(s().btnCircle," ").concat(s().btnFloating," ").concat(s().btnFloatingWrite),children:(0,t.jsx)("i",{className:"fa fa-pencil fa-2x","aria-hidden":"true"})}):(0,t.jsx)(t.Fragment,{}),r&&i?(0,t.jsx)(n.Z,{onClick:l,className:"".concat(s().btnCircle," ").concat(s().btnFloating," ").concat(s().btnFloatingSave),children:(0,t.jsx)("i",{className:"fa fa-check fa-2x","aria-hidden":"true"})}):(0,t.jsx)(t.Fragment,{}),r?(0,t.jsx)(n.Z,{onClick:o,className:"".concat(s().btnCircle," ").concat(s().btnFloating," ").concat(s().btnFloatingCancel),children:(0,t.jsx)("i",{className:"fa fa-times fa-2x","aria-hidden":"true"})}):(0,t.jsx)(t.Fragment,{})]})}},41975:function(e,r,a){a.d(r,{Z:function(){return d}});var t=a(85893);a(67294);var n=a(4298),i=a.n(n),s=a(9473),l=a(78602),o=a(49486),c=0;function d(){let e=(0,s.I0)(),r=(0,s.v9)(e=>e.scripts.scripts);(0,s.v9)(e=>e.scripts.done),(0,o.qu)(!1,"Render count:",c),c++;let a=r.map((r,a)=>(0,t.jsx)(i(),{id:r.id,src:r.src,onLoad:()=>{e((0,l.CL)(a))}},a));return(0,t.jsx)("div",{children:a})}}}]);