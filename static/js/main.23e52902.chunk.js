(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,function(e,t,n){e.exports=n(14)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(3),c=n.n(o),l=(n(10),n(11),n(1)),i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=e.current.getBoundingClientRect(),a=document.documentElement.clientHeight;return null!=n&&(n.top<=t||n.bottom<=a)};n(12);function s(e){return r.a.createElement("div",{className:"box "+e.boxClass},r.a.createElement("span",{className:"boxText"},e.text))}var m=function(){var e=Object(a.useRef)(null),t=Object(a.useState)({showBoxes:!1}),n=Object(l.a)(t,2),o=n[0],c=n[1];return Object(a.useEffect)(function(){c({showBoxes:i(e,150)});var t=function(){c({showBoxes:i(e,150)})};return window.addEventListener("scroll",t),function(){window.removeEventListener("scroll",t)}},[]),r.a.createElement("div",{className:o.showBoxes?"SlideInBoxes animate-show":"SlideInBoxes animate-hide",ref:e},r.a.createElement(s,{boxClass:"left",text:"aw"}),r.a.createElement(s,{boxClass:"right",text:"yeah."}))};n(13);var u=function(e){var t=1,n=0;"left"===e.direction&&0!==e.motionScale?(t=e.motionScale,n=25):"right"===e.direction&&0!==e.motionScale&&(t=-1*e.motionScale,n=-500);var o=Object(a.useRef)(null),c=Object(a.useState)({lastScrollY:0,margin:n,style:{marginLeft:n}}),s=Object(l.a)(c,2),m=s[0],u=s[1];return Object(a.useEffect)(function(){var e=function(){if(i(o,150)){var e=window.scrollY,n=(e-m.lastScrollY)*t,a=m.margin-n;r=a,c=e,o.current.style.marginLeft=r,u({lastScrollY:c,margin:r,style:{marginLeft:r}})}var r,c};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}},[m.margin,m.lastScrollY,t]),r.a.createElement("div",{className:"ScrollMarquee",style:m.style,ref:o},r.a.createElement("div",{className:"marqueeText"},e.text))};function d(e){return r.a.createElement("p",{className:e.paragraphType},e.text)}var f=function(e){var t=Object(a.useState)({text:"loading.."}),n=Object(l.a)(t,2),o=n[0],c=n[1];return fetch("/react-scroll-demo"+e.url).then(function(e){return e.json()}).then(function(e){c({text:e.text})}),r.a.createElement("div",{className:"JapaneseText"},r.a.createElement("div",{className:"wrapper"},function(e){var t=[];return e.split("/n").forEach(function(e){t.push(r.a.createElement(d,{text:e}))}),t}(o.text)))};var v=function(){return Object(a.useEffect)(function(){document.title="Scroll Demo"}),r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("h1",{className:"header-title"},"Scroll Demo")),r.a.createElement("div",{className:"ScrollMarqueeContainer"},r.a.createElement(u,{motionScale:"0.6",text:"text is moving leftward.",direction:"left"}),r.a.createElement(u,{motionScale:"0.5",text:"rightward text motion.",direction:"right"})),r.a.createElement(m,null),r.a.createElement(f,{url:"wagahai.json"}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[4,1,2]]]);
//# sourceMappingURL=main.23e52902.chunk.js.map