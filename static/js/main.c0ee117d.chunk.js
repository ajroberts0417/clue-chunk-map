(this["webpackJsonposrs-chunk"]=this["webpackJsonposrs-chunk"]||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),r=n(3),o=n.n(r),s=n(5),a=n(2);function u(e,t){var n=Object(a.a)(t,2),c=n[0],i=n[1];return!!e.find((function(e){var t=Object(a.a)(e,2),n=t[0],r=t[1];return c===n&&i===r}))}function d(e){for(var t=[],n=0,c=Object.entries(e);n<c.length;n++){var i=Object(a.a)(c[n],2),r=i[0];i[1]&&t.push(r)}return t.length?t.join(" "):void 0}var l=n(0),j=function(e){var t=e.chunk,n=e.onClick,i=(e.showCoords,Object(c.useRef)(null)),r=Object(c.useRef)(!1),o=function(e){r.current=e},a=Object(c.useRef)(0),j=function(e){a.current=e};function h(){j(0),o(!1)}function b(e){0===e.button&&o(!0)}function O(e){r.current&&0===e.button&&(n&&a.current<=10&&n(),h())}function f(e){if(r.current){var t=e.movementX,n=e.movementY;j(a.current+Math.sqrt(t*t+n*n))}}return Object(c.useEffect)((function(){var e=i.current;e&&(e.addEventListener("mousedown",b),e.addEventListener("mouseup",O),e.addEventListener("mousemove",f),e.addEventListener("mouseenter",h),e.addEventListener("mouseleave",h))}),[i]),Object(l.jsx)("td",{className:d({impossible:u(s.impossible,[t.x,t.y])}),ref:i,children:Object(l.jsx)("div",{className:"chunk-tile",children:Object(l.jsxs)("div",{className:"chunk-coords",children:["(",t.x,", ",t.y,")"]})})})},h=n(6),b=function(e){var t=e.checked,n=e.children,c=e.onChange;return Object(l.jsxs)("label",{className:"toggle-switch",children:[Object(l.jsx)("input",{checked:t,type:"checkbox",onChange:c}),Object(l.jsx)("i",{}),Object(l.jsx)("span",{children:n})]})},O=n(7),f=function e(t,n){Object(O.a)(this,e),this.x=void 0,this.y=void 0,this.unlocked=!1,this.x=t,this.y=n};function v(){var e=Object(c.useRef)(null),t=Object(c.useState)(function(e,t){for(var n=[],c=0;c<t;c++){n.push([]);for(var i=0;i<e;i++)n[c].push(new f(i,c))}return n}(43,25)),n=Object(a.a)(t,1)[0],i=Object(c.useState)(),r=Object(a.a)(i,2),o=r[0],s=r[1],u=Object(c.useState)({scale:1.2,translation:{x:0,y:0}}),O=Object(a.a)(u,2),v=O[0],m=O[1],p=Object(c.useState)({width:window.innerWidth,height:window.innerHeight}),k=Object(a.a)(p,2),g=k[0],w=k[1],C=Object(c.useState)(!1),y=Object(a.a)(C,2),S=y[0],E=y[1],N=Object(c.useState)(!1),L=Object(a.a)(N,2),M=L[0],F=L[1];Object(c.useEffect)((function(){window.addEventListener("resize",(function(){w({width:window.innerWidth,height:window.innerHeight})}))}),[]),Object(c.useEffect)((function(){e.current&&(o?e.current.open():e.current.close())}),[e,o]);var I=v.scale,P=g.width/8256,R=g.height/4800,B=P>R?P:R;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(h.MapInteractionCSS,{value:v,onChange:m,translationBounds:{xMax:0,yMax:0,xMin:-8256*I+g.width,yMin:-4800*I+g.height},minScale:B,children:Object(l.jsx)("table",{id:"map",cellSpacing:0,cellPadding:0,className:d({"show-coords":M,"zoomed-in":I>1}),children:Object(l.jsx)("tbody",{children:n.map((function(e,t){return Object(l.jsx)("tr",{children:e.map((function(e,n){return Object(l.jsx)(j,{chunk:e,onClick:function(){return s(e)}},"chunk-".concat(n,"-").concat(t))}))},"row-".concat(t))}))})})}),Object(l.jsx)("div",{className:"controls pin-top-left",children:S?Object(l.jsxs)("div",{id:"sidebar",children:[Object(l.jsx)("div",{className:"controls pin-top-right",children:Object(l.jsx)("button",{onClick:function(){return E(!1)},"aria-label":"Hide sidebar",children:"<"})}),Object(l.jsxs)("form",{children:[Object(l.jsx)("h1",{children:"Settings"}),Object(l.jsx)(b,{checked:M,onChange:function(e){return F(e.target.checked)},children:"Show Chunk Coords"})]})]}):Object(l.jsx)("button",{onClick:function(){return E(!0)},"aria-label":"Show sidebar",children:">"})}),Object(l.jsx)("div",{className:"controls pin-bottom-right margin",children:Object(l.jsx)("button",{onClick:function(){return m({scale:B,translation:{x:0,y:0}})},children:"zoom out"})}),Object(l.jsx)(x,{onClose:function(){return s(void 0)},ref:e,children:Object(l.jsxs)("div",{id:"chunk-modal",children:[Object(l.jsxs)("h1",{children:["Chunk (",null===o||void 0===o?void 0:o.x,", ",null===o||void 0===o?void 0:o.y,")"]}),"Placeholder"]})})]})}var m=document.getElementById("modal-root"),x=Object(c.forwardRef)((function(e,t){var n=e.children,i=e.defaultOpened,o=void 0!==i&&i,s=e.fade,u=void 0!==s&&s,j=e.onClose,h=Object(c.useState)(o),b=Object(a.a)(h,2),O=b[0],f=b[1],v=Object(c.useCallback)((function(){f(!1),j&&j()}),[]);Object(c.useImperativeHandle)(t,(function(){return{open:function(){return f(!0)},close:v}}),[v]);var x=Object(c.useCallback)((function(e){27===e.keyCode&&v()}),[v]);return Object(c.useEffect)((function(){return O&&document.addEventListener("keydown",x,!1),function(){document.removeEventListener("keydown",x,!1)}}),[x,O]),Object(r.createPortal)(O?Object(l.jsxs)("div",{className:d({modal:!0,"modal-fade":u}),children:[Object(l.jsx)("div",{className:"modal-overlay",onClick:v}),Object(l.jsx)("span",{role:"button",className:"modal-close","aria-label":"close",onClick:v,children:"x"}),Object(l.jsx)("div",{className:"modal-body",children:n})]}):null,m)})),p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),c(e),i(e),r(e),o(e)}))};n(16);o.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(v,{})}),document.getElementById("root")),p()},5:function(e){e.exports=JSON.parse('{"impossible":[[7,1]]}')}},[[17,1,2]]]);
//# sourceMappingURL=main.c0ee117d.chunk.js.map