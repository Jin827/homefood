(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{1114:function(e,a,n){"use strict";n.r(a);var s=n(0),r=n.n(s),t=n(36),o=n(1044),i=n(999),c=n(7),l=n(279),m=n(134),g={success:"#43A047",warning:"#FFA000",error:"#ed4337",info:"#2196F3"},u=Object(c.a)(function(e){return{success:{backgroundColor:e.palette.success.main},error:{backgroundColor:e.palette.error.main},info:{backgroundColor:e.palette.info.main},warning:{backgroundColor:e.palette.warning.main},container:{margin:e.spacing(1),borderRadius:"5px"},messageBox:{display:"flex",alignItems:"center"},icon:{opacity:.8,marginRight:"10px",marginTop:".5px"}}})(function(e){var a=e.classes,n=e.message,s=e.variant,t=e.onClose,o=g[s];return r.a.createElement(i.a,{className:a[s]+" "+a.container,"aria-describedby":"client-msg",message:r.a.createElement("span",{id:"client-msg",className:a.messageBox},r.a.createElement("div",{className:a.icon},r.a.createElement(l.a,{name:s,width:"20",height:"20",viewBox:"0 0 20 20",fillOuter:"#ffffff",fillInner:o})),n),action:[r.a.createElement(m.a,{key:"close",name:"close",width:"20",height:"20",viewBox:"0 0 20 20",color:"white",handleClick:t})]})}),f=function(e){var a=e.show,n=e.variant,s=e.message,t=e.removeFlashMessage,i=function(e,a){"clickaway"!==a&&t()};return r.a.createElement(o.a,{anchorOrigin:{vertical:"top",horizontal:"center"},open:a,autoHideDuration:4e3,onClose:i},r.a.createElement(u,{onClose:i,variant:n,message:s}))},h=n(162);a.default=Object(t.c)(function(e){return{show:e.message.show,variant:e.message.variant,message:e.message.message}},function(e){return{removeFlashMessage:function(){return e(Object(h.removeFlashMessage)())}}})(function(e){var a=e.show,n=e.variant,s=e.message,t=e.removeFlashMessage;return r.a.createElement(r.a.Fragment,null,a&&r.a.createElement(f,{show:a,variant:n,message:s,removeFlashMessage:t}))})}}]);