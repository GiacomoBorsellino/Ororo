(()=>{"use strict";var n={426:(n,r,e)=>{e.d(r,{Z:()=>p});var i=e(645),t=e.n(i),a=e(667),o=e.n(a),s=e(567),l=e(198),m=t()((function(n){return n[1]})),d=o()(s),c=o()(l.Z);m.push([n.id,"* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\n/*FONT*/\r\n@font-face {\r\n    font-family: Montserrat;\r\n    src: url("+d+");\r\n    font-weight: normal;\r\n    font-style: normal;\r\n}\r\n\r\n\r\n/* BACKGROUND */\r\nbody {\r\n    background: url("+c+") no-repeat center center fixed; \r\n    -webkit-background-size: cover;\r\n    -moz-background-size: cover;\r\n    -o-background-size: cover;\r\n    background-size: cover;\r\n    overflow: hidden;\r\n\r\n    font-family: Montserrat;\r\n    color: white;\r\n}\r\n\r\n/* FIRST BLOCK */\r\n.details {\r\n    display: flex;\r\n    flex-direction: column;\r\n\r\n    position: fixed;\r\n    top: 50%;\r\n    left: 50%;\r\n    margin-top: -150px;\r\n    margin-left: -135px;\r\n    width: 270px;\r\n    height: 300px;\r\n    justify-content: space-around;\r\n    text-align: center;\r\n    line-height: 230%;\r\n    \r\n    background-color: rgba(48,22,33,255);\r\n    border: none;\r\n    border-radius: 10px;\r\n    color: white;\r\n    padding: 10px;\r\n    filter: drop-shadow(0.1rem 0.1rem 0.1rem#2b2a2a);\r\n    z-index: 1;\r\n}\r\n\r\n.details ul {\r\n    list-style-type:none\r\n}\r\n\r\n.details ul img {\r\n    margin-top: 10%;\r\n    width: 25px;\r\n}\r\n\r\n.details ul img:hover {\r\n    width: 27px;\r\n}\r\n\r\n.firstBlock {\r\n    display: flex;\r\n    flex-direction: column;\r\n    text-align: center;\r\n    padding-top: 1rem;\r\n}\r\n\r\n.logo {\r\n    width: 13rem;\r\n    align-self: center;\r\n    margin-top: 45px;\r\n    margin-bottom: 15px;\r\n}\r\n\r\ndiv p {\r\n    margin: 0.1rem;\r\n    font-size: 1.1rem;\r\n    font-weight: 800;\r\n    color: rgba(48,22,33,255);\r\n    padding: 1rem;\r\n}\r\n\r\n.state {\r\n    background-color: white;\r\n    border: none;\r\n    border-radius: 10px;\r\n    margin: 3px 100px 3px;\r\n    text-align: center;\r\n}\r\n\r\n/* DESCRIPTION */\r\ndiv p:last-child {\r\n    background-color: white;\r\n    border: none;\r\n    border-radius: 10px;\r\n    font-size: 1rem;\r\n    margin: 1rem 1rem 1rem;\r\n    padding: 0.7rem;\r\n}\r\n\r\n.container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n}\r\n\r\n/* SEARCH */\r\n.search {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    margin: 0px 10px;\r\n}\r\n\r\n.search input {\r\n    height: 3rem;   \r\n    border: none;\r\n    border-radius: 50px;\r\n    margin: 10px;\r\n    text-align: center;\r\n    font-family: Montserrat;\r\n}\r\n\r\n.search input:hover {\r\n    filter: drop-shadow(0.1rem 0.1rem 0.1rem#2e2e2e);\r\n}\r\n\r\n.search input:focus {\r\n    outline: none;\r\n}\r\n\r\n.search input::placeholder {\r\n    text-align: center;\r\n}\r\n\r\n.search img {\r\n    width: 3rem;   \r\n    margin: 10px;\r\n}\r\n\r\n.search img:hover {\r\n    filter: drop-shadow(0.1rem 0.1rem 0.1rem#2e2e2e);\r\n}\r\n\r\n.gpsButton {\r\n    display: flex;\r\n    position: fixed;\r\n    left: 20px;\r\n    top: 20px;\r\n}\r\n\r\n.gpsButton img {\r\n    width: 3rem;   \r\n}\r\n\r\n.gpsButton:hover {\r\n    filter: drop-shadow(0.1rem 0.1rem 0.1rem#2e2e2e);\r\n}\r\n/* DATAS */\r\n.datas {\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-wrap: wrap;\r\n    border-top: 1px solid white;\r\n    margin: 1rem 1.3rem;\r\n}\r\n\r\n.secondBlock {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    padding-top: 1rem;\r\n    list-style-type: none;\r\n    color: rgba(48,22,33,255);\r\n}\r\n\r\n.secondBlock li {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    text-align: center;\r\n    width: 5.5rem;\r\n    height: 5.5rem;\r\n\r\n    border: none;\r\n    border-radius: 10px;\r\n    background-color: white;\r\n    padding: 10px;\r\n    margin: 0.5rem;\r\n    font-size: 0.7rem;\r\n    font-weight: 800;\r\n}\r\n\r\n.secondBlock li:hover {\r\n    filter: drop-shadow(0.1rem 0.1rem 0.1rem#a89d9d);\r\n}\r\n\r\n.secondBlock li img {\r\n    margin: auto;\r\n    width: 2.5rem;\r\n}\r\n\r\n/* MEDIA QUERY MOBILE 2 */\r\n@media only screen and (max-width: 320px) {\r\n.secondBlock li {\r\n    width: 5rem;\r\n    height: 5rem;\r\n\r\n    padding: 10px;\r\n    margin: 0.2rem;\r\n    font-size: 0.6rem;\r\n    font-weight: 800;\r\n}\r\n\r\n.secondBlock li img {\r\n    width: 2.2rem;\r\n}\r\n\r\ndiv p:last-child {\r\n    font-size: 0.7rem;\r\n    margin: 0.7rem 0.7rem 0.7rem;\r\n    padding: 0.5rem;\r\n}\r\n}\r\n\r\n/* MEDIA QUERY MOBILE 3 */\r\n@media only screen and (max-width: 361px) {\r\n.logo {\r\n    width: 10rem;\r\n}\r\n\r\ndiv p {\r\n    margin: 0.1rem;\r\n    font-size: 1.3rem;\r\n    font-weight: 800;\r\n    color: rgba(48,22,33,255);\r\n    padding: 0.2rem;\r\n}\r\n\r\n.search input {\r\n    height: 2rem;   \r\n}\r\n\r\n.search img {\r\n    width: 2rem;   \r\n}\r\n\r\n.gpsButton img {\r\n    width: 2rem;   \r\n}\r\n}\r\n\r\n/* MEDIA QUERY TABLET */\r\n@media only screen and (min-width: 768px) {\r\n.details {\r\n    margin-top: -160px;\r\n    margin-left: -200px;\r\n    width: 400px;\r\n    height: 320px;\r\n    line-height: 250%;\r\n    padding: 10px;\r\n}\r\n\r\n.details ul img {\r\n    margin-top: 3%;\r\n}\r\n\r\n.logo {\r\n    width: 15rem;\r\n    margin-top: 55px;\r\n    margin-bottom: 25px;\r\n}\r\n\r\n.search {\r\n    margin: 10px 5px;\r\n}\r\n\r\n.search input {\r\n    width: 25rem; \r\n}\r\n\r\ndiv p {\r\n    margin: 0.4rem;\r\n    font-size: 1.7rem;\r\n    padding: 0.4rem;\r\n}\r\n\r\n.state {\r\n    margin: 3px 300px 3px;\r\n}\r\n\r\ndiv p:last-child {\r\n    font-size: 1.5rem;\r\n    margin: 2rem 3rem 1rem;\r\n    padding: 1rem;\r\n}\r\n\r\n.datas {\r\n    margin: 1rem 3rem;\r\n}\r\n\r\n.secondBlock li {\r\n    width: 7rem;\r\n    height: 7rem;\r\n    padding: 10px 0px 15px;\r\n    margin: 1rem;\r\n    font-size: 0.9rem;\r\n}\r\n\r\n.secondBlock li img {\r\n    width: 2.9rem;\r\n}\r\n}\r\n\r\n/* MEDIA QUERY iPAD PRO */\r\n@media only screen and (min-width: 1024px) {\r\n.logo {\r\n    width: 19rem;\r\n    margin-top: 55px;\r\n    margin-bottom: 25px;\r\n}\r\n\r\n.search {\r\n    margin: 10px 5px;\r\n}\r\n\r\n.search input {\r\n    width: 35rem; \r\n}\r\n\r\ndiv p {\r\n    margin: 0.4rem;\r\n    font-size: 2rem;\r\n    padding: 1rem;\r\n}\r\n\r\n.state {\r\n    margin: 3px 400px 3px;\r\n}\r\n\r\ndiv p:last-child {\r\n    font-size: 1.9rem;\r\n    margin: 2rem 3rem 1rem;\r\n    padding: 1rem;\r\n}\r\n\r\n.datas {\r\n    margin: 1rem 4rem;\r\n}\r\n\r\n.secondBlock li {\r\n    width: 12rem;\r\n    height: 12rem;\r\n    padding: 6px 0px 15px;\r\n    margin: 1rem;\r\n    font-size: 1.5rem;\r\n}\r\n\r\n.secondBlock li img {\r\n    width: 6rem;\r\n}\r\n}\r\n\r\n/* MEDIA QUERY DESKTOP */\r\n@media only screen and (min-width: 1364px) {\r\n.logo {\r\n    width: 17rem;\r\n    margin-top: 55px;\r\n    margin-bottom: 25px;\r\n}\r\n\r\n.search {\r\n    margin: 10px 5px;\r\n}\r\n\r\n.search input {\r\n    width: 35rem; \r\n}\r\n\r\ndiv p {\r\n    margin: 0.2rem;\r\n    font-size: 1.5rem;\r\n    padding: 0.5rem;\r\n}\r\n\r\n.state {\r\n    margin: 3px 610px 3px;\r\n}\r\n\r\ndiv p:last-child {\r\n    font-size: 1rem;\r\n    margin: 2rem 13rem 1rem;\r\n    padding: 0.7rem;\r\n}\r\n\r\n.datas {\r\n    margin: 0.5rem 7rem;\r\n}\r\n\r\n.secondBlock li {\r\n    width: 7rem;\r\n    height: 7rem;\r\n    padding: 3px 0px 15px;\r\n    margin: 0.5rem 1.2rem;\r\n    font-size: 0.7rem;\r\n}\r\n\r\n.secondBlock li img {\r\n    width: 3.5rem;\r\n}\r\n}\r\n\r\n/* MEDIA QUERY FULL HD */\r\n@media only screen and (min-width: 1920px) {\r\n.logo {\r\n    width: 25rem;\r\n    margin-top: 65px;\r\n    margin-bottom: 25px;\r\n}\r\n\r\n.search {\r\n    margin: 10px 10px;\r\n}\r\n\r\n.search input {\r\n    width: 45rem; \r\n}\r\n\r\ndiv p {\r\n    margin: 0.5rem;\r\n    font-size: 2rem;\r\n    padding: 1rem;\r\n}\r\n\r\n.state {\r\n    margin: 3px 800px 3px;\r\n}\r\n\r\ndiv p:last-child {\r\n    font-size: 1.6rem;\r\n    margin: 2rem 30rem 1rem;\r\n    padding: 1.5rem;\r\n}\r\n\r\n.datas {\r\n    margin: 1rem 10rem;\r\n}\r\n\r\n.secondBlock li {\r\n    width: 10rem;\r\n    height: 10rem;\r\n    padding: 4px 0px 15px;\r\n    margin: 0.5rem 2rem;\r\n    font-size: 1.2rem;\r\n}\r\n\r\n.secondBlock li img {\r\n    width: 5rem;\r\n}\r\n\r\n.search input {\r\n    height: 4rem;   \r\n    border: none;\r\n    border-radius: 50px;\r\n    margin: 10px;\r\n    text-align: center;\r\n    font-family: Montserrat;\r\n}\r\n\r\n.search img {\r\n    width: 4rem;   \r\n    margin: 10px;\r\n}\r\n\r\n.gpsButton img {\r\n    width: 4rem;   \r\n}\r\n}\r\n\r\n/* MEDIA QUERY 4K */\r\n@media only screen and (min-width: 3000px) {\r\n.logo {\r\n    width: 45rem;\r\n    margin-top: 90px;\r\n    margin-bottom: 50px;\r\n}\r\n\r\n.search {\r\n    margin: 10px 0px;\r\n}\r\n\r\n.search input {\r\n    width: 75rem; \r\n}\r\n\r\ndiv p {\r\n    margin: 0.5rem;\r\n    font-size: 5rem;\r\n    padding: 1rem;\r\n}\r\n\r\n.state {\r\n    margin: 3px 1700px 3px;\r\n}\r\n\r\ndiv p:last-child {\r\n    font-size: 3.5rem;\r\n    margin: 9rem 55rem 9rem;\r\n    padding: 1.5rem;\r\n}\r\n\r\n.datas {\r\n    margin: 5rem 20rem;\r\n}\r\n\r\n.secondBlock li {\r\n    width: 25rem;\r\n    height: 25rem;\r\n    padding: 5px 10px 30px;\r\n    margin: 10rem 4rem;\r\n    font-size: 2.5rem;\r\n}\r\n\r\n.secondBlock li img {\r\n    width: 13rem;\r\n}\r\n\r\n.search input {\r\n    height: 6rem;   \r\n    border: none;\r\n    border-radius: 50px;\r\n    margin: 10px;\r\n    text-align: center;\r\n    font-family: Montserrat;\r\n}\r\n\r\n.search img {\r\n    width: 6rem;   \r\n    margin: 10px;\r\n}\r\n\r\n.gpsButton img {\r\n    width: 6rem;   \r\n}\r\n}\r\n",""]);const p=m},645:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e=n(r);return r[2]?"@media ".concat(r[2]," {").concat(e,"}"):e})).join("")},r.i=function(n,e,i){"string"==typeof n&&(n=[[null,n,""]]);var t={};if(i)for(var a=0;a<this.length;a++){var o=this[a][0];null!=o&&(t[o]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);i&&t[l[0]]||(e&&(l[2]?l[2]="".concat(e," and ").concat(l[2]):l[2]=e),r.push(l))}},r}},667:n=>{n.exports=function(n,r){return r||(r={}),"string"!=typeof(n=n&&n.__esModule?n.default:n)?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),r.hash&&(n+=r.hash),/["'() \t\n]/.test(n)||r.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n)}},198:(n,r,e)=>{e.d(r,{Z:()=>i});const i=e.p+"images/background.png"},379:(n,r,e)=>{var i,t=function(){var n={};return function(r){if(void 0===n[r]){var e=document.querySelector(r);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}n[r]=e}return n[r]}}(),a=[];function o(n){for(var r=-1,e=0;e<a.length;e++)if(a[e].identifier===n){r=e;break}return r}function s(n,r){for(var e={},i=[],t=0;t<n.length;t++){var s=n[t],l=r.base?s[0]+r.base:s[0],m=e[l]||0,d="".concat(l," ").concat(m);e[l]=m+1;var c=o(d),p={css:s[1],media:s[2],sourceMap:s[3]};-1!==c?(a[c].references++,a[c].updater(p)):a.push({identifier:d,updater:h(p,r),references:1}),i.push(d)}return i}function l(n){var r=document.createElement("style"),i=n.attributes||{};if(void 0===i.nonce){var a=e.nc;a&&(i.nonce=a)}if(Object.keys(i).forEach((function(n){r.setAttribute(n,i[n])})),"function"==typeof n.insert)n.insert(r);else{var o=t(n.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(r)}return r}var m,d=(m=[],function(n,r){return m[n]=r,m.filter(Boolean).join("\n")});function c(n,r,e,i){var t=e?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(n.styleSheet)n.styleSheet.cssText=d(r,t);else{var a=document.createTextNode(t),o=n.childNodes;o[r]&&n.removeChild(o[r]),o.length?n.insertBefore(a,o[r]):n.appendChild(a)}}function p(n,r,e){var i=e.css,t=e.media,a=e.sourceMap;if(t?n.setAttribute("media",t):n.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleSheet)n.styleSheet.cssText=i;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(i))}}var g=null,u=0;function h(n,r){var e,i,t;if(r.singleton){var a=u++;e=g||(g=l(r)),i=c.bind(null,e,a,!1),t=c.bind(null,e,a,!0)}else e=l(r),i=p.bind(null,e,r),t=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)};return i(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap)return;i(n=r)}else t()}}n.exports=function(n,r){(r=r||{}).singleton||"boolean"==typeof r.singleton||(r.singleton=(void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i));var e=s(n=n||[],r);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var i=0;i<e.length;i++){var t=o(e[i]);a[t].references--}for(var l=s(n,r),m=0;m<e.length;m++){var d=o(e[m]);0===a[d].references&&(a[d].updater(),a.splice(d,1))}e=l}}}},567:(n,r,e)=>{n.exports=e.p+"e2d60bc49517598c0ce8.ttf"}},r={};function e(i){var t=r[i];if(void 0!==t)return t.exports;var a=r[i]={id:i,exports:{}};return n[i](a,a.exports,e),a.exports}e.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return e.d(r,{a:r}),r},e.d=(n,r)=>{for(var i in r)e.o(r,i)&&!e.o(n,i)&&Object.defineProperty(n,i,{enumerable:!0,get:r[i]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),e.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),(()=>{var n;e.g.importScripts&&(n=e.g.location+"");var r=e.g.document;if(!n&&r&&(r.currentScript&&(n=r.currentScript.src),!n)){var i=r.getElementsByTagName("script");i.length&&(n=i[i.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=n})(),(()=>{var n=e(379),r=e.n(n),i=e(426);r()(i.Z,{insert:"head",singleton:!1}),i.Z.locals,e(198),e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p;let t=document.body.getElementsByClassName("sky")[0],a=document.body.getElementsByClassName("press")[0],o=document.body.getElementsByClassName("temp")[0],s=document.body.getElementsByClassName("hum")[0],l=document.body.getElementsByClassName("wind")[0],m=document.body.getElementsByClassName("vis")[0],d=document.body.getElementsByClassName("no2")[0],c=document.body.getElementsByClassName("h")[0],p=document.body.getElementsByClassName("o3")[0],g=document.body.getElementsByClassName("pm10")[0],u=document.body.getElementsByClassName("pm25")[0],h=document.body.getElementsByClassName("primer")[0];const b="c17750a2c9e3989ddc1d7c9e98c52f8a218446fd",f="738fde143385e357b0bbf597d0b03ddc";let y=document.body.getElementsByClassName("state")[0],v=document.body.getElementsByClassName("description")[0];async function x(){let n=document.getElementById("cityName").value;await fetch(`https://api.waqi.info/feed/${n}/?token=${b}`).then((n=>n.json())).then((n=>{console.log(n.data.iaqi.pm10.v),console.log(n.data.iaqi),n.data.iaqi.no2?d.innerHTML=`NO<sub>2</sub>: ${n.data.iaqi.no2.v} AQI`:d.innerHTML="NO<sub>2</sub>: Not available",n.data.iaqi.h?c.innerHTML=`H: ${n.data.iaqi.h.v}`:c.innerHTML="H: Not available",n.data.iaqi.o3?p.innerHTML=`O<sub>3</sub>: ${n.data.iaqi.o3.v} AQI`:p.innerHTML="O<sub>3</sub>: Not available",n.data.iaqi.pm10?g.innerHTML=`PM<sub>10</sub>: ${n.data.iaqi.pm10.v} AQI`:g.innerHTML="PM<sub>10</sub>: Not available",n.data.iaqi.pm25?u.innerHTML=`PM<sub>2.5</sub>: ${n.data.iaqi.pm25.v} AQI`:u.innerHTML="PM<sub>2.5</sub>: Not available",console.log(n.data.aqi),n.data.aqi<50?(y.innerHTML="Good",y.style.backgroundColor="#32a846",v.innerHTML="Air quality is considered satisfactory, and air pollution poses little or no risk."):n.data.aqi>51&&n.data.aqi<100?(y.innerHTML="Moderate",y.style.backgroundColor="#cccc1f",v.innerHTML="Air quality is acceptable; however, for some pollutants there may be a moderate health \n                                            concern for a very small number of people who are unusually sensitive to air pollution."):n.data.aqi>101&&n.data.aqi<150?(y.innerHTML="Unhealthy for S.g.",y.style.backgroundColor="#cc781f",v.innerHTML="Members of sensitive groups may experience health effects. The general public is not likely\n                                            to be affected."):n.data.aqi>151&&n.data.aqi<200?(y.innerHTML="Unhealthy",y.style.backgroundColor="#cc1f64",v.innerHTML="Everyone may begin to experience health effects; members of sensitive groups may experience \n                                            more serious health effects."):n.data.aqi>201&&n.data.aqi<300?(y.innerHTML="Very Unhealthy",y.style.backgroundColor="#8d1fcc",v.innerHTML="Health warnings of emergency conditions. The entire population is more likely to be affected."):n.data.aqi>301?(y.innerHTML="Hazardous",y.style.backgroundColor="#cc1f1f",v.innerHTML="Health alert: everyone may experience more serious health effects"):void 0===n.data.aqi&&(document.body.getElementsByClassName("city")[0].innerHTML="&nbsp;",y.innerHTML="Not Found",y.style.backgroundColor="white",v.innerHTML="State air quality of the city not found, if you want know the air quality \n                of the location nearest to you, please, click the gps button. If the problem persist, control your internet connection")})).catch((function(n){console.log(n.name,n.message),document.body.getElementsByClassName("city")[0].innerHTML="&nbsp;",d.innerHTML="NO<sub>2</sub>: Not available",c.innerHTML="H: Not available",p.innerHTML="O<sub>3</sub>:: Not available",g.innerHTML="PM<sub>10</sub>:: Not available",u.innerHTML="PM<sub>2.5</sub>:: Not available",y.innerHTML="Not Found",y.style.backgroundColor="white",v.innerHTML="State air quality of the city not found, if you want know the air quality \n                of the location nearest to you, please, click the gps button. If the problem persist, control your internet connection"})),await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${n}&appid=${f}`).then((n=>n.json())).then((n=>{if(document.body.getElementsByClassName("city")[0].innerHTML=n.name,n.weather[0].main?t.innerHTML=`<img src="images/rain.png" alt="rain"/>Sky:</br>${n.weather[0].main}`:n.weather.main?t.innerHTML=`<img src="images/rain.png" alt="rain"/>Sky:</br>${n.weather.main}`:n.weather&&(t.innerHTML='<img src="images/rain.png" alt="rain"/>Sky:</br> Not available'),n.main.pressure?a.innerHTML=`<img src="images/press.png" alt="pressure"/>Pressure:</br>${n.main.pressure} hPa`:a.innerHTML='<img src="images/press.png" alt="pressure"/>Pressure:</br> Not available',n.main.temp){let r=n.main.temp-273.15;o.innerHTML=`<img src="images/temp.png" alt="temperature"/>Temperature</br>${Math.round(r)} °C`}else o.innerHTML='<img src="images/temp.png" alt="temperature"/>Temperature</br> Not available';n.main.humidity?s.innerHTML=`<img src="images/hum.png" alt="humidity"/>Humidity</br>${n.main.humidity} %`:s.innerHTML='<img src="images/hum.png" alt="humidity"/>Humidity</br> Not available',n.wind.speed?l.innerHTML=`<img src="images/wind.png" alt="wind"/>Wind</br>${n.wind.speed} m/s`:l.innerHTML='<img src="images/wind.png" alt="wind"/>Wind</br> Not available',n.visibility?m.innerHTML=`<img src="images/visibility.png" alt="visibility"/>Visibility</br>${n.visibility} m`:m.innerHTML='<img src="images/visibility.png" alt="visibility"/>Visibility</br> Not available'})).catch((function(n){TypeError,console.log(n.stack,n.name,n.message),t.innerHTML='<img src="images/rain.png" alt="rain"/>Sky:</br> Not available',a.innerHTML='<img src="images/press.png" alt="pressure"/>Pressure:</br> Not available',o.innerHTML='<img src="images/temp.png" alt="temperature"/>Temperature</br> Not available',s.innerHTML='<img src="images/hum.png" alt="humidity"/>Humidity</br> Not available',l.innerHTML='<img src="images/wind.png" alt="wind"/>Wind</br> Not available',m.innerHTML='<img src="images/visibility.png" alt="visibility"/>Visibility</br> Not available'}))}h.onclick=x,document.addEventListener("keydown",(function(n){"Enter"==n.code&&(n.preventDefault(),h.click(),x())})),document.body.getElementsByClassName("gpsButton")[0].onclick=function(){navigator.geolocation&&navigator.geolocation.getCurrentPosition((function(n){let r=n.coords.latitude,e=n.coords.longitude;console.log(r,e,"in index.js"),async function(){await fetch(`https://api.waqi.info/feed/geo:${e};${r}/?token=${b}`).then((n=>n.json())).then((n=>{n.data.iaqi.no2?d.innerHTML=`NO<sub>2</sub>: ${n.data.iaqi.no2.v} AQI`:d.innerHTML="NO<sub>2</sub>: Not available",n.data.iaqi.h?c.innerHTML=`H: ${n.data.iaqi.h.v}`:c.innerHTML="H: Not available",n.data.iaqi.o3?p.innerHTML=`O<sub>3</sub>: ${n.data.iaqi.o3.v} AQI`:p.innerHTML="O<sub>3</sub>: Not available",n.data.iaqi.pm10?g.innerHTML=`PM<sub>10</sub>: ${n.data.iaqi.pm10.v} AQI`:g.innerHTML="PM<sub>10</sub>: Not available",n.data.iaqi.pm25?u.innerHTML=`PM<sub>2.5</sub>: ${n.data.iaqi.pm25.v} AQI`:u.innerHTML="PM<sub>2.5</sub>: Not available",n.data.aqi<50?(y.innerHTML="Good",y.style.backgroundColor="#32a846",v.innerHTML="Air quality is considered satisfactory, and air pollution poses little or no risk."):n.data.aqi>51&&n.data.aqi<100?(y.innerHTML="Moderate",y.style.backgroundColor="#cccc1f",v.innerHTML="Air quality is acceptable; however, for some pollutants there may be a moderate health \n                                                                    concern for a very small number of people who are unusually sensitive to air pollution."):n.data.aqi>101&&n.data.aqi<150?(y.innerHTML="Unhealthy for S.g.",y.style.backgroundColor="#cc781f",v.innerHTML="Members of sensitive groups may experience health effects. The general public is not likely\n                                                                    to be affected."):n.data.aqi>151&&n.data.aqi<200?(y.innerHTML="Unhealthy",y.style.backgroundColor="#cc1f64",v.innerHTML="Everyone may begin to experience health effects; members of sensitive groups may experience \n                                                                    more serious health effects."):n.data.aqi>201&&n.data.aqi<300?(y.innerHTML="Very Unhealthy",y.style.backgroundColor="#8d1fcc",v.innerHTML="Health warnings of emergency conditions. The entire population is more likely to be affected."):n.data.aqi>301?(y.innerHTML="Hazardous",y.style.backgroundColor="#cc1f1f",v.innerHTML="Health alert: everyone may experience more serious health effects"):void 0===n.data.aqi&&(document.body.getElementsByClassName("city")[0].innerHTML="&nbsp;",y.innerHTML="Not Found",y.style.backgroundColor="white",v.innerHTML="City not found, if you want know the air quality \n                                        of the location nearest to you, please, click the gps button")})).catch((function(n){console.log(n.stack,n.name,n.message),d.innerHTML="NO<sub>2</sub>: Not available",c.innerHTML="H: Not available",p.innerHTML="O<sub>3</sub>: Not available",g.innerHTML="PM<sub>10</sub>: Not available",u.innerHTML="PM<sub>25</sub>: Not available",document.body.getElementsByClassName("city")[0].innerHTML="&nbsp;",y.innerHTML="Not Found",y.style.backgroundColor="white",v.innerHTML="State air quality of the city not found, if you want know the air quality \n                                    of the location nearest to you, please, click the gps button. If the problem persist, control your internet connection"})),await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${r}&lon=${e}&appid=${f}`).then((n=>n.json())).then((n=>{if(document.body.getElementsByClassName("city")[0].innerHTML=n.name,n.weather[0].main?t.innerHTML=`<img src="images/rain.png" alt="rain"/>Sky:</br>${n.weather[0].main}`:n.weather.main?t.innerHTML=`<img src="images/rain.png" alt="rain"/>Sky:</br>${n.weather.main}`:n.weather&&(t.innerHTML='<img src="images/rain.png" alt="rain"/>Sky:</br> Not available'),n.main.pressure?a.innerHTML=`<img src="images/press.png" alt="pressure"/>Pressure:</br>${n.main.pressure} hPa`:a.innerHTML='<img src="images/press.png" alt="pressure"/>Pressure:</br> Not available',n.main.temp){let r=n.main.temp-273.15;o.innerHTML=`<img src="images/temp.png" alt="temperature"/>Temperature</br>${Math.round(r)} °C`}else o.innerHTML='<img src="images/temp.png" alt="temperature"/>Temperature</br> Not available';n.main.humidity?s.innerHTML=`<img src="images/hum.png" alt="humidity"/>Humidity</br>${n.main.humidity} %`:s.innerHTML='<img src="images/hum.png" alt="humidity"/>Humidity</br> Not available',n.wind.speed?l.innerHTML=`<img src="images/wind.png" alt="wind"/>Wind</br>${n.wind.speed} m/s`:l.innerHTML='<img src="images/wind.png" alt="wind"/>Wind</br> Not available',n.visibility?m.innerHTML=`<img src="images/visibility.png" alt="visibility"/>Visibility</br>${n.visibility} m`:m.innerHTML='<img src="images/visibility.png" alt="visibility"/>Visibility</br> Not available'})).catch((function(n){console.log(n.stack),t.innerHTML='<img src="images/rain.png" alt="rain"/>Sky:</br> Not available',a.innerHTML='<img src="images/press.png" alt="pressure"/>Pressure:</br> Not available',o.innerHTML='<img src="images/temp.png" alt="temperature"/>Temperature</br> Not available',s.innerHTML='<img src="images/hum.png" alt="humidity"/>Humidity</br> Not available',l.innerHTML='<img src="images/wind.png" alt="wind"/>Wind</br> Not available',m.innerHTML='<img src="images/visibility.png" alt="visibility"/>Visibility</br> Not available'}))}()}))};let M=document.body.getElementsByClassName("info")[0],w=document.body.getElementsByClassName("exit")[0];M.onclick=function(){document.body.getElementsByClassName("details")[0].style.display="block"},w.onclick=function(){document.body.getElementsByClassName("details")[0].style.display="none"}})()})();