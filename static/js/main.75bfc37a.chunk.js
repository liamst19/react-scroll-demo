(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,function(e,t,n){e.exports=n(14)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(3),c=n.n(r),i=(n(10),n(11),n(1)),l=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=e.current.getBoundingClientRect(),a=document.documentElement.clientHeight;return null!=n&&(n.top<=t||n.bottom<=a)};n(12);function s(e){return o.a.createElement("div",{className:"box "+e.boxClass},e.text)}var m=function(){var e=Object(a.useRef)(null),t=Object(a.useState)({showBoxes:!1}),n=Object(i.a)(t,2),r=n[0],c=n[1];return Object(a.useEffect)(function(){c({showBoxes:l(e,150)});var t=function(){c({showBoxes:l(e,150)})};return window.addEventListener("scroll",t),function(){window.removeEventListener("scroll",t)}},[]),o.a.createElement("div",{className:r.showBoxes?"SlideInBoxes animate-show":"SlideInBoxes animate-hide",ref:e},o.a.createElement(s,{boxClass:"left",text:""}),o.a.createElement(s,{boxClass:"right",text:""}))};n(13);var u=function(e){var t=1,n=0;"left"===e.direction&&0!==e.motionScale?(t=e.motionScale,n=25):"right"===e.direction&&0!==e.motionScale&&(t=-1*e.motionScale,n=-500);var r=Object(a.useRef)(null),c=Object(a.useState)({lastScrollY:0,margin:n,style:{marginLeft:n}}),s=Object(i.a)(c,2),m=s[0],u=s[1];return Object(a.useEffect)(function(){var e=function(){if(l(r,150)){var e=window.scrollY,n=(e-m.lastScrollY)*t,a=m.margin-n;o=a,c=e,r.current.style.marginLeft=o,u({lastScrollY:c,margin:o,style:{marginLeft:o}})}var o,c};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}},[m.margin,m.lastScrollY,t]),o.a.createElement("div",{className:"ScrollMarquee",style:m.style,ref:r},o.a.createElement("div",{className:"marqueeText"},e.text))};var d=function(){Object(a.useEffect)(function(){document.title="Scroll Demo"});for(var e=[],t=0;t<6;t++)e.push(o.a.createElement(m,{key:"Section_"+t}));return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("h1",{className:"header-title"},"Scroll Demo")),o.a.createElement("div",{className:"ScrollMarqueeContainer"},o.a.createElement(u,{motionScale:"0.6",text:"this is a text.",direction:"left"}),o.a.createElement(u,{motionScale:"0.5",text:"this is another text.",direction:"right"})),e)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[4,1,2]]]);
//# sourceMappingURL=main.75bfc37a.chunk.js.map