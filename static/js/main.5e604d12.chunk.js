(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,function(e,t,n){e.exports=n(14)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(3),c=n.n(o),l=(n(10),n(11),n(1)),s=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=e.current.getBoundingClientRect(),a=document.documentElement.clientHeight;return null!=n&&(n.top<=t||n.bottom<=a)};n(12);function i(e){return r.a.createElement("div",{className:"box "+e.boxClass},e.text)}var u=function(){var e=Object(a.useRef)(null),t=Object(a.useState)({showBoxes:!1}),n=Object(l.a)(t,2),o=n[0],c=n[1];return Object(a.useEffect)(function(){c({showBoxes:s(e,150)});var t=function(){c({showBoxes:s(e,150)})};return window.addEventListener("scroll",t),function(){window.removeEventListener("scroll",t)}},[]),r.a.createElement("div",{className:o.showBoxes?"SlideInBoxes animate-show":"SlideInBoxes animate-hide",ref:e},r.a.createElement(i,{boxClass:"left",text:""}),r.a.createElement(i,{boxClass:"right",text:""}))};n(13);var m=function(){var e=Object(a.useRef)(null),t=Object(a.useState)({lastScrollY:0,margin:750,style:{marginLeft:750}}),n=Object(l.a)(t,2),o=n[0],c=n[1];return Object(a.useEffect)(function(){var t=function(){if(s(e,150)){var t=window.scrollY,n=.6*(t-o.lastScrollY),a=o.margin-n;r=a,l=t,e.current.style.marginLeft=r,c({lastScrollY:l,margin:r,style:{marginLeft:r}})}var r,l};return window.addEventListener("scroll",t),function(){window.removeEventListener("scroll",t)}},[o.margin,o.lastScrollY]),r.a.createElement("div",{className:"ScrollMarquee"},r.a.createElement("div",{className:"marquee",style:o.style,ref:e},r.a.createElement("div",{className:"marqueeText"},"this is a text.")))};var d=function(){Object(a.useEffect)(function(){document.title="Scroll Demo"});for(var e=[],t=0;t<6;t++)e.push(r.a.createElement(u,{key:"Section_"+t}));return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("h1",{className:"header-title"},"Scroll Demo")),r.a.createElement(m,null),e)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[4,1,2]]]);
//# sourceMappingURL=main.5e604d12.chunk.js.map