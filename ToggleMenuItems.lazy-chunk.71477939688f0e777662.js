(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{1101:function(e,a,t){"use strict";t.r(a);var n=t(24),o=t.n(n),r=t(0),c=t.n(r),l=t(72),i=t(1e3),m=t(995),s=t(997),u=t(1045),p=t(1055),d=t(1056);a.default=function(e){var a=e.activeId,t=e.anchorEl,n=e.handleClose,r=e.items,E=4===a?"rightSideMenu":"";return c.a.createElement(u.a,{open:Boolean(t),anchorEl:t,keepMounted:!0,transition:!0,disablePortal:!0},function(e){var a=e.TransitionProps,t=e.placement;return c.a.createElement(m.a,o()({},a,{style:{transformOrigin:"bottom"===t?"center top":"center bottom"},className:"toggle-menu "+E}),c.a.createElement(s.a,{id:"menu-list-grow"},c.a.createElement(i.a,{onClickAway:n},c.a.createElement(d.a,{className:"toggle-menu--list"},r.map(function(e){return c.a.createElement(l.a,{replace:!0,key:e.id,to:e.to,className:"anchor td-none c-text"},c.a.createElement(p.a,{className:"toggle-menu--item",onClick:n},c.a.createElement("div",{className:"pw1"},e.name)))})))))})}}}]);