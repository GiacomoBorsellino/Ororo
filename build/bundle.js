(()=>{var r={98:function(r,n){var e="undefined"!=typeof self?self:this,t=function(){function r(){this.fetch=!1,this.DOMException=e.DOMException}return r.prototype=e,new r}();!function(r){!function(n){var e="URLSearchParams"in r,t="Symbol"in r&&"iterator"in Symbol,i="FileReader"in r&&"Blob"in r&&function(){try{return new Blob,!0}catch(r){return!1}}(),a="FormData"in r,o="ArrayBuffer"in r;if(o)var s=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],l=ArrayBuffer.isView||function(r){return r&&s.indexOf(Object.prototype.toString.call(r))>-1};function d(r){if("string"!=typeof r&&(r=String(r)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(r))throw new TypeError("Invalid character in header field name");return r.toLowerCase()}function m(r){return"string"!=typeof r&&(r=String(r)),r}function c(r){var n={next:function(){var n=r.shift();return{done:void 0===n,value:n}}};return t&&(n[Symbol.iterator]=function(){return n}),n}function p(r){this.map={},r instanceof p?r.forEach((function(r,n){this.append(n,r)}),this):Array.isArray(r)?r.forEach((function(r){this.append(r[0],r[1])}),this):r&&Object.getOwnPropertyNames(r).forEach((function(n){this.append(n,r[n])}),this)}function u(r){if(r.bodyUsed)return Promise.reject(new TypeError("Already read"));r.bodyUsed=!0}function h(r){return new Promise((function(n,e){r.onload=function(){n(r.result)},r.onerror=function(){e(r.error)}}))}function g(r){var n=new FileReader,e=h(n);return n.readAsArrayBuffer(r),e}function f(r){if(r.slice)return r.slice(0);var n=new Uint8Array(r.byteLength);return n.set(new Uint8Array(r)),n.buffer}function b(){return this.bodyUsed=!1,this._initBody=function(r){var n;this._bodyInit=r,r?"string"==typeof r?this._bodyText=r:i&&Blob.prototype.isPrototypeOf(r)?this._bodyBlob=r:a&&FormData.prototype.isPrototypeOf(r)?this._bodyFormData=r:e&&URLSearchParams.prototype.isPrototypeOf(r)?this._bodyText=r.toString():o&&i&&(n=r)&&DataView.prototype.isPrototypeOf(n)?(this._bodyArrayBuffer=f(r.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):o&&(ArrayBuffer.prototype.isPrototypeOf(r)||l(r))?this._bodyArrayBuffer=f(r):this._bodyText=r=Object.prototype.toString.call(r):this._bodyText="",this.headers.get("content-type")||("string"==typeof r?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):e&&URLSearchParams.prototype.isPrototypeOf(r)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},i&&(this.blob=function(){var r=u(this);if(r)return r;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?u(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(g)}),this.text=function(){var r,n,e,t=u(this);if(t)return t;if(this._bodyBlob)return r=this._bodyBlob,e=h(n=new FileReader),n.readAsText(r),e;if(this._bodyArrayBuffer)return Promise.resolve(function(r){for(var n=new Uint8Array(r),e=new Array(n.length),t=0;t<n.length;t++)e[t]=String.fromCharCode(n[t]);return e.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},a&&(this.formData=function(){return this.text().then(w)}),this.json=function(){return this.text().then(JSON.parse)},this}p.prototype.append=function(r,n){r=d(r),n=m(n);var e=this.map[r];this.map[r]=e?e+", "+n:n},p.prototype.delete=function(r){delete this.map[d(r)]},p.prototype.get=function(r){return r=d(r),this.has(r)?this.map[r]:null},p.prototype.has=function(r){return this.map.hasOwnProperty(d(r))},p.prototype.set=function(r,n){this.map[d(r)]=m(n)},p.prototype.forEach=function(r,n){for(var e in this.map)this.map.hasOwnProperty(e)&&r.call(n,this.map[e],e,this)},p.prototype.keys=function(){var r=[];return this.forEach((function(n,e){r.push(e)})),c(r)},p.prototype.values=function(){var r=[];return this.forEach((function(n){r.push(n)})),c(r)},p.prototype.entries=function(){var r=[];return this.forEach((function(n,e){r.push([e,n])})),c(r)},t&&(p.prototype[Symbol.iterator]=p.prototype.entries);var y=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function v(r,n){var e,t,i=(n=n||{}).body;if(r instanceof v){if(r.bodyUsed)throw new TypeError("Already read");this.url=r.url,this.credentials=r.credentials,n.headers||(this.headers=new p(r.headers)),this.method=r.method,this.mode=r.mode,this.signal=r.signal,i||null==r._bodyInit||(i=r._bodyInit,r.bodyUsed=!0)}else this.url=String(r);if(this.credentials=n.credentials||this.credentials||"same-origin",!n.headers&&this.headers||(this.headers=new p(n.headers)),this.method=(t=(e=n.method||this.method||"GET").toUpperCase(),y.indexOf(t)>-1?t:e),this.mode=n.mode||this.mode||null,this.signal=n.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&i)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(i)}function w(r){var n=new FormData;return r.trim().split("&").forEach((function(r){if(r){var e=r.split("="),t=e.shift().replace(/\+/g," "),i=e.join("=").replace(/\+/g," ");n.append(decodeURIComponent(t),decodeURIComponent(i))}})),n}function x(r,n){n||(n={}),this.type="default",this.status=void 0===n.status?200:n.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in n?n.statusText:"OK",this.headers=new p(n.headers),this.url=n.url||"",this._initBody(r)}v.prototype.clone=function(){return new v(this,{body:this._bodyInit})},b.call(v.prototype),b.call(x.prototype),x.prototype.clone=function(){return new x(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new p(this.headers),url:this.url})},x.error=function(){var r=new x(null,{status:0,statusText:""});return r.type="error",r};var T=[301,302,303,307,308];x.redirect=function(r,n){if(-1===T.indexOf(n))throw new RangeError("Invalid status code");return new x(null,{status:n,headers:{location:r}})},n.DOMException=r.DOMException;try{new n.DOMException}catch(r){n.DOMException=function(r,n){this.message=r,this.name=n;var e=Error(r);this.stack=e.stack},n.DOMException.prototype=Object.create(Error.prototype),n.DOMException.prototype.constructor=n.DOMException}function M(r,e){return new Promise((function(t,a){var o=new v(r,e);if(o.signal&&o.signal.aborted)return a(new n.DOMException("Aborted","AbortError"));var s=new XMLHttpRequest;function l(){s.abort()}s.onload=function(){var r,n,e={status:s.status,statusText:s.statusText,headers:(r=s.getAllResponseHeaders()||"",n=new p,r.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach((function(r){var e=r.split(":"),t=e.shift().trim();if(t){var i=e.join(":").trim();n.append(t,i)}})),n)};e.url="responseURL"in s?s.responseURL:e.headers.get("X-Request-URL");var i="response"in s?s.response:s.responseText;t(new x(i,e))},s.onerror=function(){a(new TypeError("Network request failed"))},s.ontimeout=function(){a(new TypeError("Network request failed"))},s.onabort=function(){a(new n.DOMException("Aborted","AbortError"))},s.open(o.method,o.url,!0),"include"===o.credentials?s.withCredentials=!0:"omit"===o.credentials&&(s.withCredentials=!1),"responseType"in s&&i&&(s.responseType="blob"),o.headers.forEach((function(r,n){s.setRequestHeader(n,r)})),o.signal&&(o.signal.addEventListener("abort",l),s.onreadystatechange=function(){4===s.readyState&&o.signal.removeEventListener("abort",l)}),s.send(void 0===o._bodyInit?null:o._bodyInit)}))}M.polyfill=!0,r.fetch||(r.fetch=M,r.Headers=p,r.Request=v,r.Response=x),n.Headers=p,n.Request=v,n.Response=x,n.fetch=M,Object.defineProperty(n,"__esModule",{value:!0})}({})}(t),t.fetch.ponyfill=!0,delete t.fetch.polyfill;var i=t;(n=i.fetch).default=i.fetch,n.fetch=i.fetch,n.Headers=i.Headers,n.Request=i.Request,n.Response=i.Response,r.exports=n},426:(r,n,e)=>{"use strict";e.d(n,{Z:()=>p});var t=e(645),i=e.n(t),a=e(667),o=e.n(a),s=e(567),l=e(198),d=i()((function(r){return r[1]})),m=o()(s),c=o()(l.Z);d.push([r.id,"* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\n/*FONT*/\r\n@font-face {\r\n    font-family: Montserrat;\r\n    src: url("+m+");\r\n    font-weight: normal;\r\n    font-style: normal;\r\n}\r\n\r\n\r\n/* BACKGROUND */\r\nbody {\r\n    background: url("+c+") no-repeat center center fixed; \r\n    -webkit-background-size: cover;\r\n    -moz-background-size: cover;\r\n    -o-background-size: cover;\r\n    background-size: cover;\r\n    overflow: hidden;\r\n\r\n    font-family: Montserrat;\r\n    color: white;\r\n}\r\n\r\n/* FIRST BLOCK */\r\n.details {\r\n    display: flex;\r\n    flex-direction: column;\r\n\r\n    position: fixed;\r\n    top: 50%;\r\n    left: 50%;\r\n    margin-top: -150px;\r\n    margin-left: -135px;\r\n    width: 270px;\r\n    height: 300px;\r\n    justify-content: space-around;\r\n    text-align: center;\r\n    line-height: 230%;\r\n    \r\n    background-color: rgba(48,22,33,255);\r\n    border: none;\r\n    border-radius: 10px;\r\n    color: white;\r\n    padding: 10px;\r\n    filter: drop-shadow(0.1rem 0.1rem 0.1rem#2b2a2a);\r\n    z-index: 1;\r\n}\r\n\r\n.details ul {\r\n    list-style-type:none\r\n}\r\n\r\n.details ul img {\r\n    margin-top: 10%;\r\n    width: 25px;\r\n}\r\n\r\n.details ul img:hover {\r\n    width: 27px;\r\n}\r\n\r\n.firstBlock {\r\n    display: flex;\r\n    flex-direction: column;\r\n    text-align: center;\r\n    padding-top: 1rem;\r\n}\r\n\r\n.logo {\r\n    width: 13rem;\r\n    align-self: center;\r\n    margin-top: 40px;\r\n    margin-bottom: 15px;\r\n}\r\n\r\ndiv p {\r\n    margin: 0.1rem;\r\n    font-size: 1.1rem;\r\n    font-weight: 800;\r\n    color: rgba(48,22,33,255);\r\n    padding: 1rem;\r\n}\r\n\r\n.state {\r\n    background-color: white;\r\n    border: none;\r\n    border-radius: 10px;\r\n    margin: 3px 100px 3px;\r\n    text-align: center;\r\n}\r\n\r\n/* DESCRIPTION */\r\ndiv p:last-child {\r\n    background-color: white;\r\n    border: none;\r\n    border-radius: 10px;\r\n    font-size: 0.7rem;\r\n    margin: 0.5rem 0.5rem 0.5rem;\r\n    padding: 0.5rem;\r\n}\r\n\r\n.container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n}\r\n\r\n/* SEARCH */\r\n.search {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    margin: 0px 10px;\r\n}\r\n\r\n.search input {\r\n    height: 3rem;   \r\n    border: none;\r\n    border-radius: 50px;\r\n    margin: 10px;\r\n    text-align: center;\r\n    font-family: Montserrat;\r\n}\r\n\r\n.search input:hover {\r\n    filter: drop-shadow(0.1rem 0.1rem 0.1rem#2e2e2e);\r\n}\r\n\r\n.search input:focus {\r\n    outline: none;\r\n}\r\n\r\n.search input::placeholder {\r\n    text-align: center;\r\n}\r\n\r\n.search img {\r\n    width: 3rem;   \r\n    margin: 10px;\r\n}\r\n\r\n.search img:hover {\r\n    filter: drop-shadow(0.1rem 0.1rem 0.1rem#2e2e2e);\r\n}\r\n\r\n.gpsButton {\r\n    display: flex;\r\n    position: fixed;\r\n    left: 20px;\r\n    top: 20px;\r\n}\r\n\r\n.gpsButton img {\r\n    width: 3rem;   \r\n}\r\n\r\n.gpsButton:hover {\r\n    filter: drop-shadow(0.1rem 0.1rem 0.1rem#2e2e2e);\r\n}\r\n\r\n/* DATAS */\r\n.datas {\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-wrap: wrap;\r\n    border-top: 1px solid white;\r\n    margin: 1rem 1.3rem;\r\n}\r\n\r\n.secondBlock {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    padding-top: 1rem;\r\n    list-style-type: none;\r\n    color: rgba(48,22,33,255);\r\n}\r\n\r\n.secondBlock li {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    text-align: center;\r\n    width: 5.5rem;\r\n    height: 5.5rem;\r\n\r\n    border: none;\r\n    border-radius: 10px;\r\n    background-color: white;\r\n    padding: 10px;\r\n    margin: 0.5rem;\r\n    font-size: 0.7rem;\r\n    font-weight: 800;\r\n}\r\n\r\n.secondBlock li:hover {\r\n    filter: drop-shadow(0.1rem 0.1rem 0.1rem#a89d9d);\r\n}\r\n\r\n.secondBlock li img {\r\n    margin: auto;\r\n    width: 2.5rem;\r\n}\r\n\r\n/* MEDIA QUERY MOBILE 2 */\r\n@media only screen and (max-width: 320px) {\r\n.secondBlock li {\r\n    width: 5rem;\r\n    height: 5rem;\r\n\r\n    padding: 10px;\r\n    margin: 0.2rem;\r\n    font-size: 0.6rem;\r\n    font-weight: 800;\r\n}\r\n\r\n.secondBlock li img {\r\n    width: 2.2rem;\r\n}\r\n\r\ndiv p:last-child {\r\n    font-size: 0.7rem;\r\n    margin: 0.5rem 0.5rem 0.5rem;\r\n    padding: 0.3rem;\r\n}\r\n}\r\n\r\n/* MEDIA QUERY MOBILE 3 */\r\n@media only screen and (max-width: 361px) {\r\n.logo {\r\n    width: 10rem;\r\n}\r\n\r\ndiv p {\r\n    margin: 0.1rem;\r\n    font-size: 1.3rem;\r\n    font-weight: 800;\r\n    color: rgba(48,22,33,255);\r\n    padding: 0.2rem;\r\n}\r\n\r\n.search input {\r\n    height: 2rem;   \r\n}\r\n\r\n.search img {\r\n    width: 2rem;   \r\n}\r\n\r\n.gpsButton img {\r\n    width: 2rem;   \r\n}\r\n}\r\n\r\n/* MEDIA QUERY TABLET */\r\n@media only screen and (min-width: 768px) {\r\n.details {\r\n    margin-top: -160px;\r\n    margin-left: -200px;\r\n    width: 400px;\r\n    height: 320px;\r\n    line-height: 250%;\r\n    padding: 10px;\r\n}\r\n\r\n.details ul img {\r\n    margin-top: 3%;\r\n}\r\n\r\n.logo {\r\n    width: 15rem;\r\n    margin-top: 55px;\r\n    margin-bottom: 25px;\r\n}\r\n\r\n.search {\r\n    margin: 10px 5px;\r\n}\r\n\r\n.search input {\r\n    width: 25rem; \r\n}\r\n\r\ndiv p {\r\n    margin: 0.4rem;\r\n    font-size: 1.7rem;\r\n    padding: 0.4rem;\r\n}\r\n\r\n.state {\r\n    margin: 3px 300px 3px;\r\n}\r\n\r\ndiv p:last-child {\r\n    font-size: 1.5rem;\r\n    margin: 2rem 3rem 1rem;\r\n    padding: 1rem;\r\n}\r\n\r\n.datas {\r\n    margin: 1rem 3rem;\r\n}\r\n\r\n.secondBlock li {\r\n    width: 7rem;\r\n    height: 7rem;\r\n    padding: 10px 0px 15px;\r\n    margin: 1rem;\r\n    font-size: 0.9rem;\r\n}\r\n\r\n.secondBlock li img {\r\n    width: 2.9rem;\r\n}\r\n}\r\n\r\n/* MEDIA QUERY iPAD PRO */\r\n@media only screen and (min-width: 1024px) {\r\n.logo {\r\n    width: 19rem;\r\n    margin-top: 55px;\r\n    margin-bottom: 25px;\r\n}\r\n\r\n.search {\r\n    margin: 10px 5px;\r\n}\r\n\r\n.search input {\r\n    width: 35rem; \r\n}\r\n\r\ndiv p {\r\n    margin: 0.4rem;\r\n    font-size: 2rem;\r\n    padding: 1rem;\r\n}\r\n\r\n.state {\r\n    margin: 3px 400px 3px;\r\n}\r\n\r\ndiv p:last-child {\r\n    font-size: 1.9rem;\r\n    margin: 2rem 3rem 1rem;\r\n    padding: 1rem;\r\n}\r\n\r\n.datas {\r\n    margin: 1rem 4rem;\r\n}\r\n\r\n.secondBlock li {\r\n    width: 12rem;\r\n    height: 12rem;\r\n    padding: 6px 0px 15px;\r\n    margin: 1rem;\r\n    font-size: 1.5rem;\r\n}\r\n\r\n.secondBlock li img {\r\n    width: 6rem;\r\n}\r\n}\r\n\r\n/* MEDIA QUERY DESKTOP */\r\n@media only screen and (min-width: 1364px) {\r\n.logo {\r\n    width: 17rem;\r\n    margin-top: 55px;\r\n    margin-bottom: 25px;\r\n}\r\n\r\n.search {\r\n    margin: 10px 5px;\r\n}\r\n\r\n.search input {\r\n    width: 35rem; \r\n}\r\n\r\ndiv p {\r\n    margin: 0.2rem;\r\n    font-size: 1.5rem;\r\n    padding: 0.5rem;\r\n}\r\n\r\n.state {\r\n    margin: 3px 540px 3px;\r\n}\r\n\r\ndiv p:last-child {\r\n    font-size: 1rem;\r\n    margin: 2rem 13rem 1rem;\r\n    padding: 0.7rem;\r\n}\r\n\r\n.datas {\r\n    margin: 0.5rem 7rem;\r\n}\r\n\r\n.secondBlock li {\r\n    width: 7rem;\r\n    height: 7rem;\r\n    padding: 3px 0px 15px;\r\n    margin: 0.5rem 1.2rem;\r\n    font-size: 0.7rem;\r\n}\r\n\r\n.secondBlock li img {\r\n    width: 3.5rem;\r\n}\r\n}\r\n\r\n/* MEDIA QUERY FULL HD */\r\n@media only screen and (min-width: 1920px) {\r\n.logo {\r\n    width: 25rem;\r\n    margin-top: 65px;\r\n    margin-bottom: 25px;\r\n}\r\n\r\n.search {\r\n    margin: 10px 10px;\r\n}\r\n\r\n.search input {\r\n    width: 45rem; \r\n}\r\n\r\ndiv p {\r\n    margin: 0.5rem;\r\n    font-size: 2rem;\r\n    padding: 1rem;\r\n}\r\n\r\n.state {\r\n    margin: 3px 800px 3px;\r\n}\r\n\r\ndiv p:last-child {\r\n    font-size: 1.6rem;\r\n    margin: 2rem 30rem 1rem;\r\n    padding: 1.5rem;\r\n}\r\n\r\n.datas {\r\n    margin: 1rem 10rem;\r\n}\r\n\r\n.secondBlock li {\r\n    width: 10rem;\r\n    height: 10rem;\r\n    padding: 4px 0px 15px;\r\n    margin: 0.5rem 2rem;\r\n    font-size: 1.2rem;\r\n}\r\n\r\n.secondBlock li img {\r\n    width: 5rem;\r\n}\r\n\r\n.search input {\r\n    height: 4rem;   \r\n    border: none;\r\n    border-radius: 50px;\r\n    margin: 10px;\r\n    text-align: center;\r\n    font-family: Montserrat;\r\n}\r\n\r\n.search img {\r\n    width: 4rem;   \r\n    margin: 10px;\r\n}\r\n\r\n.gpsButton img {\r\n    width: 4rem;   \r\n}\r\n}\r\n\r\n/* MEDIA QUERY 4K */\r\n@media only screen and (min-width: 3000px) {\r\n.logo {\r\n    width: 45rem;\r\n    margin-top: 90px;\r\n    margin-bottom: 50px;\r\n}\r\n\r\n.search {\r\n    margin: 10px 0px;\r\n}\r\n\r\n.search input {\r\n    width: 75rem; \r\n}\r\n\r\ndiv p {\r\n    margin: 0.5rem;\r\n    font-size: 5rem;\r\n    padding: 1rem;\r\n}\r\n\r\n.state {\r\n    margin: 3px 1700px 3px;\r\n}\r\n\r\ndiv p:last-child {\r\n    font-size: 3.5rem;\r\n    margin: 9rem 55rem 9rem;\r\n    padding: 1.5rem;\r\n}\r\n\r\n.datas {\r\n    margin: 5rem 20rem;\r\n}\r\n\r\n.secondBlock li {\r\n    width: 25rem;\r\n    height: 25rem;\r\n    padding: 5px 10px 30px;\r\n    margin: 10rem 4rem;\r\n    font-size: 2.5rem;\r\n}\r\n\r\n.secondBlock li img {\r\n    width: 13rem;\r\n}\r\n\r\n.search input {\r\n    height: 6rem;   \r\n    border: none;\r\n    border-radius: 50px;\r\n    margin: 10px;\r\n    text-align: center;\r\n    font-family: Montserrat;\r\n}\r\n\r\n.search img {\r\n    width: 6rem;   \r\n    margin: 10px;\r\n}\r\n\r\n.gpsButton img {\r\n    width: 6rem;   \r\n}\r\n}\r\n",""]);const p=d},645:r=>{"use strict";r.exports=function(r){var n=[];return n.toString=function(){return this.map((function(n){var e=r(n);return n[2]?"@media ".concat(n[2]," {").concat(e,"}"):e})).join("")},n.i=function(r,e,t){"string"==typeof r&&(r=[[null,r,""]]);var i={};if(t)for(var a=0;a<this.length;a++){var o=this[a][0];null!=o&&(i[o]=!0)}for(var s=0;s<r.length;s++){var l=[].concat(r[s]);t&&i[l[0]]||(e&&(l[2]?l[2]="".concat(e," and ").concat(l[2]):l[2]=e),n.push(l))}},n}},667:r=>{"use strict";r.exports=function(r,n){return n||(n={}),"string"!=typeof(r=r&&r.__esModule?r.default:r)?r:(/^['"].*['"]$/.test(r)&&(r=r.slice(1,-1)),n.hash&&(r+=n.hash),/["'() \t\n]/.test(r)||n.needQuotes?'"'.concat(r.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):r)}},198:(r,n,e)=>{"use strict";e.d(n,{Z:()=>t});const t=e.p+"images/background.png"},379:(r,n,e)=>{"use strict";var t,i=function(){var r={};return function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(r){e=null}r[n]=e}return r[n]}}(),a=[];function o(r){for(var n=-1,e=0;e<a.length;e++)if(a[e].identifier===r){n=e;break}return n}function s(r,n){for(var e={},t=[],i=0;i<r.length;i++){var s=r[i],l=n.base?s[0]+n.base:s[0],d=e[l]||0,m="".concat(l," ").concat(d);e[l]=d+1;var c=o(m),p={css:s[1],media:s[2],sourceMap:s[3]};-1!==c?(a[c].references++,a[c].updater(p)):a.push({identifier:m,updater:g(p,n),references:1}),t.push(m)}return t}function l(r){var n=document.createElement("style"),t=r.attributes||{};if(void 0===t.nonce){var a=e.nc;a&&(t.nonce=a)}if(Object.keys(t).forEach((function(r){n.setAttribute(r,t[r])})),"function"==typeof r.insert)r.insert(n);else{var o=i(r.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}return n}var d,m=(d=[],function(r,n){return d[r]=n,d.filter(Boolean).join("\n")});function c(r,n,e,t){var i=e?"":t.media?"@media ".concat(t.media," {").concat(t.css,"}"):t.css;if(r.styleSheet)r.styleSheet.cssText=m(n,i);else{var a=document.createTextNode(i),o=r.childNodes;o[n]&&r.removeChild(o[n]),o.length?r.insertBefore(a,o[n]):r.appendChild(a)}}function p(r,n,e){var t=e.css,i=e.media,a=e.sourceMap;if(i?r.setAttribute("media",i):r.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),r.styleSheet)r.styleSheet.cssText=t;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(t))}}var u=null,h=0;function g(r,n){var e,t,i;if(n.singleton){var a=h++;e=u||(u=l(n)),t=c.bind(null,e,a,!1),i=c.bind(null,e,a,!0)}else e=l(n),t=p.bind(null,e,n),i=function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(e)};return t(r),function(n){if(n){if(n.css===r.css&&n.media===r.media&&n.sourceMap===r.sourceMap)return;t(r=n)}else i()}}r.exports=function(r,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t));var e=s(r=r||[],n);return function(r){if(r=r||[],"[object Array]"===Object.prototype.toString.call(r)){for(var t=0;t<e.length;t++){var i=o(e[t]);a[i].references--}for(var l=s(r,n),d=0;d<e.length;d++){var m=o(e[d]);0===a[m].references&&(a[m].updater(),a.splice(m,1))}e=l}}}},567:(r,n,e)=>{"use strict";r.exports=e.p+"e2d60bc49517598c0ce8.ttf"}},n={};function e(t){var i=n[t];if(void 0!==i)return i.exports;var a=n[t]={id:t,exports:{}};return r[t].call(a.exports,a,a.exports,e),a.exports}e.n=r=>{var n=r&&r.__esModule?()=>r.default:()=>r;return e.d(n,{a:n}),n},e.d=(r,n)=>{for(var t in n)e.o(n,t)&&!e.o(r,t)&&Object.defineProperty(r,t,{enumerable:!0,get:n[t]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(r){if("object"==typeof window)return window}}(),e.o=(r,n)=>Object.prototype.hasOwnProperty.call(r,n),(()=>{var r;e.g.importScripts&&(r=e.g.location+"");var n=e.g.document;if(!r&&n&&(n.currentScript&&(r=n.currentScript.src),!r)){var t=n.getElementsByTagName("script");t.length&&(r=t[t.length-1].src)}if(!r)throw new Error("Automatic publicPath is not supported in this browser");r=r.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=r})(),(()=>{"use strict";var r=e(379),n=e.n(r),t=e(426);n()(t.Z,{insert:"head",singleton:!1}),t.Z.locals,e(198),e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p;var i=e(98),a=e.n(i);let o=document.body.getElementsByClassName("sky")[0],s=document.body.getElementsByClassName("press")[0],l=document.body.getElementsByClassName("temp")[0],d=document.body.getElementsByClassName("hum")[0],m=document.body.getElementsByClassName("wind")[0],c=document.body.getElementsByClassName("vis")[0],p=document.body.getElementsByClassName("no2")[0],u=document.body.getElementsByClassName("h")[0],h=document.body.getElementsByClassName("o3")[0],g=document.body.getElementsByClassName("pm10")[0],f=document.body.getElementsByClassName("pm25")[0],b=document.body.getElementsByClassName("primer")[0],y=document.body.getElementsByClassName("state")[0],v=document.body.getElementsByClassName("description")[0];async function w(){let r=document.getElementById("cityName").value;const n=await a()(`/.netlify/functions/lambda?cityName=${r}`),e=await n.json();try{e.data.iaqi.no2?p.innerHTML=`NO<sub>2</sub>: ${e.data.iaqi.no2.v} AQI`:p.innerHTML="NO<sub>2</sub>: Not available",e.data.iaqi.h?u.innerHTML=`H: ${e.data.iaqi.h.v}`:u.innerHTML="H: Not available",e.data.iaqi.o3?h.innerHTML=`O<sub>3</sub>: ${e.data.iaqi.o3.v} AQI`:h.innerHTML="O<sub>3</sub>: Not available",e.data.iaqi.pm10?g.innerHTML=`PM<sub>10</sub>: ${e.data.iaqi.pm10.v} AQI`:g.innerHTML="PM<sub>10</sub>: Not available",e.data.iaqi.pm25?f.innerHTML=`PM<sub>2.5</sub>: ${e.data.iaqi.pm25.v} AQI`:f.innerHTML="PM<sub>2.5</sub>: Not available",e.data.aqi<50?(y.innerHTML="Good",y.style.backgroundColor="#32a846",v.innerHTML="Air quality is considered satisfactory, and air pollution poses little or no risk.</br>&nbsp;"):e.data.aqi>51&&e.data.aqi<100?(y.innerHTML="Moderate",y.style.backgroundColor="#cccc1f",v.innerHTML="Air quality is acceptable; however, for some pollutants there may be a moderate health concern for a very small number of people who are unusually sensitive to air pollution."):e.data.aqi>101&&e.data.aqi<150?(y.innerHTML="Unhealthy for S.g.",y.style.backgroundColor="#cc781f",v.innerHTML="Members of sensitive groups may experience health effects. The general public is not likely to be affected.</br>&nbsp;"):e.data.aqi>151&&e.data.aqi<200?(y.innerHTML="Unhealthy",y.style.backgroundColor="#cc1f64",v.innerHTML="Everyone may begin to experience health effects; members of sensitive groups may experience more serious health effects.</br>&nbsp;"):e.data.aqi>201&&e.data.aqi<300?(y.innerHTML="Very Unhealthy",y.style.backgroundColor="#8d1fcc",v.innerHTML="Health warnings of emergency conditions. The entire population is more likely to be affected.</br>&nbsp;"):e.data.aqi>301?(y.innerHTML="Hazardous",y.style.backgroundColor="#cc1f1f",v.innerHTML="Health alert: everyone may experience more serious health effects</br>&nbsp;"):void 0===e.data.aqi&&(document.body.getElementsByClassName("city")[0].innerHTML="&nbsp;",y.innerHTML="Not Found",y.style.backgroundColor="white",v.innerHTML="State air quality of the city not found, if you want know the air quality of the location nearest to you, please, click the gps button.")}catch(r){document.body.getElementsByClassName("city")[0].innerHTML="&nbsp;",p.innerHTML="NO<sub>2</sub>: Not available",u.innerHTML="H: Not available",h.innerHTML="O<sub>3</sub>:: Not available",g.innerHTML="PM<sub>10</sub>:: Not available",f.innerHTML="PM<sub>2.5</sub>:: Not available",y.innerHTML="Not Found",y.style.backgroundColor="white",v.innerHTML="State air quality of the city not found, if you want know the air quality \n    of the location nearest to you, please, click the gps button."}const t=await a()(`/.netlify/functions/alfa?cityName=${r}`),i=await t.json();try{if(document.body.getElementsByClassName("city")[0].innerHTML=i.name,i.weather[0].main?o.innerHTML=`<img src="images/rain.png" alt="rain"/>Sky:</br>${i.weather[0].main}`:i.weather.main?o.innerHTML=`<img src="images/rain.png" alt="rain"/>Sky:</br>${i.weather.main}`:i.weather&&(o.innerHTML='<img src="images/rain.png" alt="rain"/>Sky:</br> Not available'),i.main.pressure?s.innerHTML=`<img src="images/press.png" alt="pressure"/>Pressure:</br>${i.main.pressure} hPa`:s.innerHTML='<img src="images/press.png" alt="pressure"/>Pressure:</br> Not available',i.main.temp){let r=i.main.temp-273.15;l.innerHTML=`<img src="images/temp.png" alt="temperature"/>Temperature</br>${Math.round(r)} °C`}else l.innerHTML='<img src="images/temp.png" alt="temperature"/>Temperature</br> Not available';i.main.humidity?d.innerHTML=`<img src="images/hum.png" alt="humidity"/>Humidity</br>${i.main.humidity} %`:d.innerHTML='<img src="images/hum.png" alt="humidity"/>Humidity</br> Not available',i.wind.speed?m.innerHTML=`<img src="images/wind.png" alt="wind"/>Wind</br>${i.wind.speed} m/s`:m.innerHTML='<img src="images/wind.png" alt="wind"/>Wind</br> Not available',i.visibility?c.innerHTML=`<img src="images/visibility.png" alt="visibility"/>Visibility</br>${i.visibility} m`:c.innerHTML='<img src="images/visibility.png" alt="visibility"/>Visibility</br> Not available'}catch(r){o.innerHTML='<img src="images/rain.png" alt="rain"/>Sky:</br> Not available',s.innerHTML='<img src="images/press.png" alt="pressure"/>Pressure:</br> Not available',l.innerHTML='<img src="images/temp.png" alt="temperature"/>Temperature</br> Not available',d.innerHTML='<img src="images/hum.png" alt="humidity"/>Humidity</br> Not available',m.innerHTML='<img src="images/wind.png" alt="wind"/>Wind</br> Not available',c.innerHTML='<img src="images/visibility.png" alt="visibility"/>Visibility</br> Not available'}}b.onclick=w,document.addEventListener("keydown",(function(r){"Enter"!=r.code&&13!=r.key&&r.key!=Enter&&r.code!=Enter&&13!=r.keyCode||(r.preventDefault(),w())})),document.body.getElementsByClassName("gpsButton")[0].onclick=function(){navigator.geolocation&&navigator.geolocation.getCurrentPosition((function(r){let n=r.coords.latitude,e=r.coords.longitude;console.log(n,e),async function(){const r=await a()(`/.netlify/functions/theta?lon=${e}&lat=${n}`),t=await r.json();try{t.data.iaqi.no2?p.innerHTML=`NO<sub>2</sub>: ${t.data.iaqi.no2.v} AQI`:p.innerHTML="NO<sub>2</sub>: Not available",t.data.iaqi.h?u.innerHTML=`H: ${t.data.iaqi.h.v}`:u.innerHTML="H: Not available",t.data.iaqi.o3?h.innerHTML=`O<sub>3</sub>: ${t.data.iaqi.o3.v} AQI`:h.innerHTML="O<sub>3</sub>: Not available",t.data.iaqi.pm10?g.innerHTML=`PM<sub>10</sub>: ${t.data.iaqi.pm10.v} AQI`:g.innerHTML="PM<sub>10</sub>: Not available",t.data.iaqi.pm25?f.innerHTML=`PM<sub>2.5</sub>: ${t.data.iaqi.pm25.v} AQI`:f.innerHTML="PM<sub>2.5</sub>: Not available",t.data.aqi<50?(y.innerHTML="Good",y.style.backgroundColor="#32a846",v.innerHTML="Air quality is considered satisfactory, and air pollution poses little or no risk.</br>&nbsp;"):t.data.aqi>51&&t.data.aqi<100?(y.innerHTML="Moderate",y.style.backgroundColor="#cccc1f",v.innerHTML="Air quality is acceptable; however, for some pollutants there may be a moderate health concern for a very small number of people who are unusually sensitive to air pollution."):t.data.aqi>101&&t.data.aqi<150?(y.innerHTML="Unhealthy for S.g.",y.style.backgroundColor="#cc781f",v.innerHTML="Members of sensitive groups may experience health effects. The general public is not likely to be affected.</br>&nbsp;"):t.data.aqi>151&&t.data.aqi<200?(y.innerHTML="Unhealthy",y.style.backgroundColor="#cc1f64",v.innerHTML="Everyone may begin to experience health effects; members of sensitive groups may experience more serious health effects.</br>&nbsp;"):t.data.aqi>201&&t.data.aqi<300?(y.innerHTML="Very Unhealthy",y.style.backgroundColor="#8d1fcc",v.innerHTML="Health warnings of emergency conditions. The entire population is more likely to be affected.</br>&nbsp;"):t.data.aqi>301?(y.innerHTML="Hazardous",y.style.backgroundColor="#cc1f1f",v.innerHTML="Health alert: everyone may experience more serious health effects</br>&nbsp;"):void 0===t.data.aqi&&(document.body.getElementsByClassName("city")[0].innerHTML="&nbsp;",y.innerHTML="Not Found",y.style.backgroundColor="white",v.innerHTML="City not found, if you want know the air quality \n                        of the location nearest to you, please, click the gps button")}catch(r){p.innerHTML="NO<sub>2</sub>: Not available",u.innerHTML="H: Not available",h.innerHTML="O<sub>3</sub>: Not available",g.innerHTML="PM<sub>10</sub>: Not available",f.innerHTML="PM<sub>25</sub>: Not available",document.body.getElementsByClassName("city")[0].innerHTML="&nbsp;",y.innerHTML="Not Found",y.style.backgroundColor="white",v.innerHTML="State air quality of the city not found, if you want know the air quality \n                    of the location nearest to you, please, click the gps button."}const i=await a()(`/.netlify/functions/omega?lon=${e}&lat=${n}`),b=await i.json();try{if(document.body.getElementsByClassName("city")[0].innerHTML=b.name,b.weather[0].main?o.innerHTML=`<img src="images/rain.png" alt="rain"/>Sky:</br>${b.weather[0].main}`:b.weather.main?o.innerHTML=`<img src="images/rain.png" alt="rain"/>Sky:</br>${b.weather.main}`:b.weather&&(o.innerHTML='<img src="images/rain.png" alt="rain"/>Sky:</br> Not available'),b.main.pressure?s.innerHTML=`<img src="images/press.png" alt="pressure"/>Pressure:</br>${b.main.pressure} hPa`:s.innerHTML='<img src="images/press.png" alt="pressure"/>Pressure:</br> Not available',b.main.temp){let r=b.main.temp-273.15;l.innerHTML=`<img src="images/temp.png" alt="temperature"/>Temperature</br>${Math.round(r)} °C`}else l.innerHTML='<img src="images/temp.png" alt="temperature"/>Temperature</br> Not available';b.main.humidity?d.innerHTML=`<img src="images/hum.png" alt="humidity"/>Humidity</br>${b.main.humidity} %`:d.innerHTML='<img src="images/hum.png" alt="humidity"/>Humidity</br> Not available',b.wind.speed?m.innerHTML=`<img src="images/wind.png" alt="wind"/>Wind</br>${b.wind.speed} m/s`:m.innerHTML='<img src="images/wind.png" alt="wind"/>Wind</br> Not available',b.visibility?c.innerHTML=`<img src="images/visibility.png" alt="visibility"/>Visibility</br>${b.visibility} m`:c.innerHTML='<img src="images/visibility.png" alt="visibility"/>Visibility</br> Not available'}catch(r){o.innerHTML='<img src="images/rain.png" alt="rain"/>Sky:</br> Not available',s.innerHTML='<img src="images/press.png" alt="pressure"/>Pressure:</br> Not available',l.innerHTML='<img src="images/temp.png" alt="temperature"/>Temperature</br> Not available',d.innerHTML='<img src="images/hum.png" alt="humidity"/>Humidity</br> Not available',m.innerHTML='<img src="images/wind.png" alt="wind"/>Wind</br> Not available',c.innerHTML='<img src="images/visibility.png" alt="visibility"/>Visibility</br> Not available'}}()}))};let x=document.body.getElementsByClassName("info")[0],T=document.body.getElementsByClassName("exit")[0];x.onclick=function(){document.body.getElementsByClassName("details")[0].style.display="block"},T.onclick=function(){document.body.getElementsByClassName("details")[0].style.display="none"}})()})();