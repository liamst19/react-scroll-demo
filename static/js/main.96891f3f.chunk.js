(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,function(e,t,n){e.exports=n(13)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(2),c=n.n(r),i=(n(10),n(11),n(3));n(12);function l(e){return o.a.createElement("div",{className:"box "+e.boxClass},e.text)}var s=function(){var e=Object(a.useRef)(null),t=Object(a.useState)({isInView:!1}),n=Object(i.a)(t,2),r=n[0],c=n[1];return Object(a.useEffect)(function(){var t=function(){var t=e.current.getBoundingClientRect();t&&c({isInView:t.top<=150||t.bottom<=document.documentElement.clientHeight})};return window.addEventListener("scroll",t),function(){window.removeEventListener("scroll",t)}}),o.a.createElement("div",{className:r.isInView?"Section1 animate-show":"Section1 animate-hide",ref:e},o.a.createElement(l,{boxClass:"left",text:""}),o.a.createElement(l,{boxClass:"right",text:""}))};var u=function(){for(var e=[],t=0;t<6;t++)e.push(o.a.createElement(s,null));return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("h1",{className:"header-title"},"Scroll Demo")),e)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(u,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[4,1,2]]]);
//# sourceMappingURL=main.96891f3f.chunk.js.map