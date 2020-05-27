"use strict";function _toConsumableArray3(r){if(Array.isArray(r)){for(var n=0,e=Array(r.length);n<r.length;n++)e[n]=r[n];return e}return Array.from(r)}function _toConsumableArray2(r){if(Array.isArray(r)){for(var n=0,e=Array(r.length);n<r.length;n++)e[n]=r[n];return e}return Array.from(r)}function _toConsumableArray(r){if(Array.isArray(r)){for(var n=0,e=Array(r.length);n<r.length;n++)e[n]=r[n];return e}return Array.from(r)}var updateFunArr=[];if(cc.director.on(cc.Director.EVENT_AFTER_UPDATE,function(){for(var r=cc.director.getDeltaTime(),n=updateFunArr.length-1;n>=0;n--){var e=updateFunArr[n];if(e.isRun&&!e.nowFun(r)){if(e!==updateFunArr[n])continue;e.nowFun.nextFun?e.nowFun=e.nowFun.nextFun:(e._dylIsDel=!0,updateFunArr[n]=updateFunArr[updateFunArr.length-1],updateFunArr[n].id=n,updateFunArr.length--)}}}),cc.director.on(cc.Director.EVENT_BEFORE_SCENE_LAUNCH,function(){updateFunArr=[]}),window.initDylFun=function(r){window.dyl=window.dyl||{},window.dyl.__debug={},Object.defineProperty(dyl,"debug",{get:function(){return this.__debug.default},set:function(r){var n=r.split(" ");this.__debug[n[0]]=n[n.length-1],this.__debug.default=n[n.length-1],cc.log("scene name = ",cc.director.getScene().name),cc.director.loadScene(cc.director.getScene().name)}}),dyl.getSize=function(r){var n=(r=r.node?r.node:r).getContentSize(),e=n.width,t=n.height;return cc.v2(e,t)},dyl.addMap=function(r,n,e){for(var t=[],i=0;i<n;i++){for(var o=[],c=0;c<r;c++){var u=e?e(cc.v2(c,i)):null;o.push(u)}t.push(o)}t.w=r,t.h=n,t.get=function(r,n){return!!r&&(!(r.x<0||r.y<0||r.x>=this.w||r.y>=this.h)&&(n&&this[r.y][r.x]?this[r.y][r.x][n]:this[r.y][r.x]))},t.set=function(r,n){if(!r)return!1;if(n&&"cc.Vec2"===n.__classname__){var e=this.get(r),i=this.get(n);return!1===e||!1===i?cc.warn("\u6709\u65e0\u6548\u7684\u4f4d\u7f6e"):(this.set(r,i),this.set(n,e),!0)}if(r.x<0||r.y<0||r.x>=this.w||r.y>=this.h)return cc.warn("p\u4e0d\u5728\u5730\u56fe\u4e0a"),!1;var o=t[r.y][r.x];return t[r.y][r.x]=n,o};let f=null;return t.on=function(e,t){if("boolean"==typeof e){let r=e;e=t,t=r}if("function"==typeof e)return void(f=e);let i=f,o=function(e){let o=function(t,o){if(t+=e.x,o+=e.y,!(t<0||t>=r||o<0||o>=n))return i(e,cc.v2(t,o))},c=[1,0,-1,0],u=[0,-1,0,1],f=[0,1,2,3];t&&(f=f.sort(()=>.5-dyl.rand()));for(let r=0;r<4;r++){let n=o(c[f[r]],u[f[r]]);if(void 0!==n)return n}};if(e&&e instanceof cc.Vec2)return o(e);if(Array.isArray(e))for(let r=0;r<e.length;r++){let n=o(e[r]);if(void 0!==n)return n}else{if(void 0!==e)return cc.error("\u6211\u4e5f\u4e0d\u77e5\u9053\u8fd9\u4e2a\u53c2\u6570\u600e\u4e48\u5904\u7406",e);for(let e=0;e<n;e++)for(let n=0;n<r;n++){let r=o(cc.v2(n,e));if(void 0!==r)return r}}},t.find=function(r,n){if(n){if("string"!=typeof r)return cc.warn("\u4e24\u4e2a\u53c2\u6570\uff0c\u53ea\u6709\u5bf9\u6bd4\u5c5e\u6027\u7684\u60c5\u51b5\u4e0b\u3002\u5c31\u662f\u7b2c\u4e00\u4e2a\u503c\u8981\u662f\u5c5e\u6027\u540d",r,n);for(var e=0;e<this.h;e++)for(var t=0;t<this.w;t++){let i=this[e][t];if(i&&"object"==typeof i&&i[r]===n)return cc.v2(t,e)}return null}if("function"!=typeof r){for(e=0;e<this.h;e++)for(t=0;t<this.w;t++)if(this[e][t]===value)return cc.v2(t,e)}else for(var i=r,e=0;e<this.h;e++)for(var t=0;t<this.w;t++){let r=i(this[e][t],cc.v2(t,e));if(void 0!==r)return r}},t.run=function(r){if("function"!=typeof r){var n=this,e=r;r=function(r){if(n[r.y][r.x]===e)return r}}for(var t=[],i=0;i<this.h;i++)for(var o=0;o<this.w;o++){var c=r(cc.v2(o,i));void 0!==c&&t.push(c)}return t},t},dyl.addMapLayer=function(r,n,e){var t=(1-r)*e/2,i=(1-n)*e/2,o=cc.v2(t,i),c=this.addMap(r,n,function(r){return o.add(r.mul(e))});c.ori=o.sub(cc.v2(e/2,e/2)),c.d=e;var u=function(r){var n=c.w*c.d/2,e=c.h*c.d/2;return r.x>=-n&&r.y>=-e&&r.x<n&&r.y<e};return c.find=function(r){return!!u(r)&&((r=cc.v2(r.x,r.y)).subSelf(this.ori),r.mulSelf(1/e),r.x=Math.floor(r.x),r.y=Math.floor(r.y),r)},c.set=function(r){var n=this;this.run(function(e){var t=e.x,i=e.y;r[i][t]&&r[i][t].setPosition(n[i][t])})},c};var n=1e4*Math.random()+23>>0;dyl.setRand=function(r){cc.log("seed",r),n=r},dyl.rand=function(r){if(Array.isArray(r)){for(var e=r,t=e.length-1;t>0;t--){var i=dyl.rand(t+1),o=e[t];e[t]=e[i],e[i]=o}return e}"number"!=typeof this.__randNum&&(this.__randNum=1);var c=n;n=(59341*n+6541)%9987618,cc.log(c,".....",n);var u=n/9987618;return r?Math.floor(u*r):u};var e=function(n){n=String(n);var e=r.enc.Utf8.parse("woaihejiamin"),t=r.enc.Utf8.parse("nihaijidewoma"),i=r.AES.encrypt(n,e,{iv:t,mode:r.mode.CBC,padding:r.pad.Pkcs7});return r.enc.Base64.stringify(i.ciphertext)},t=function(n){var e=r.enc.Utf8.parse("woaihejiamin"),t=r.enc.Utf8.parse("nihaijidewoma"),i=r.AES.decrypt(n,e,{iv:t,mode:r.mode.CBC,padding:r.pad.Pkcs7}).toString(r.enc.Utf8).toString(),o=parseInt(i);return(0==o||o)&&(i=o),i};dyl.save=function(r,n){0===n||n?cc.sys.localStorage.setItem(r,e(n)):cc.sys.localStorage.removeItem(r)},dyl.read=function(r){var n=cc.sys.localStorage.getItem(r);return n?t(n):n},dyl.key=function(r){var n={},e={};r.dir&&(r.w=function(n){return r.dir(n,cc.v2(0,1))},r.s=function(n){return r.dir(n,cc.v2(0,-1))},r.a=function(n){return r.dir(n,cc.v2(-1,0))},r.d=function(n){return r.dir(n,cc.v2(1,0))},r.up=function(n){return r.dir(n,cc.v2(0,1))},r.down=function(n){return r.dir(n,cc.v2(0,-1))},r.left=function(n){return r.dir(n,cc.v2(-1,0))},r.right=function(n){return r.dir(n,cc.v2(1,0))}),cc.eventManager.addListener({event:cc.EventListener.KEYBOARD,onKeyPressed:function(t,i){for(var o in r)if(t===cc.KEY[o])return void(n[o]===e[o]&&(r[o](!0),n[o]=!n[o]))},onKeyReleased:function(t,i){for(var o in r)if(t===cc.KEY[o])return r[o](!1),void(e[o]=n[o])}},cc.director.getScene().getChildren()[0])},dyl.keyOn=function(r){var n={},e={};r.dir&&(r.w=function(){return r.dir(cc.v2(0,1))},r.s=function(){return r.dir(cc.v2(0,-1))},r.a=function(){return r.dir(cc.v2(-1,0))},r.d=function(){return r.dir(cc.v2(1,0))},r.up=function(){return r.dir(cc.v2(0,1))},r.down=function(){return r.dir(cc.v2(0,-1))},r.left=function(){return r.dir(cc.v2(-1,0))},r.right=function(){return r.dir(cc.v2(1,0))}),cc.eventManager.addListener({event:cc.EventListener.KEYBOARD,onKeyPressed:function(t,i){for(var o in r)if(t===cc.KEY[o])return void(n[o]===e[o]&&(r[o](),n[o]=!n[o]))},onKeyReleased:function(t,i){for(var o in r)if(t===cc.KEY[o])return void(e[o]=n[o])}},cc.director.getScene().getChildren()[0])},dyl.keyUp=function(r){var n={},e={};r.dir&&(r.w=function(){return r.dir(cc.v2(0,1))},r.s=function(){return r.dir(cc.v2(0,-1))},r.a=function(){return r.dir(cc.v2(-1,0))},r.d=function(){return r.dir(cc.v2(1,0))},r.up=function(){return r.dir(cc.v2(0,1))},r.down=function(){return r.dir(cc.v2(0,-1))},r.left=function(){return r.dir(cc.v2(-1,0))},r.right=function(){return r.dir(cc.v2(1,0))}),cc.eventManager.addListener({event:cc.EventListener.KEYBOARD,onKeyPressed:function(t,i){for(var o in r)if(t===cc.KEY[o])return void(n[o]===e[o]&&(n[o]=!n[o]))},onKeyReleased:function(t,i){for(var o in r)if(t===cc.KEY[o])return r[o](),void(e[o]=n[o])}},cc.director.getScene().getChildren()[0])},dyl.addDirArr=function(r){var n=r?r.x:0,e=r?r.y:0,t=[cc.v2(n,e+1),cc.v2(n,e-1),cc.v2(n+1,e),cc.v2(n-1,e)];return t.sort(function(){return.5-dyl.rand()}),t},dyl.data=function(r,n,...e){let t=null,i=null;for(let r=0;r<e.length;r++)if(Array.isArray(e[r]))t=e[r];else{if(!e[r]||"object"!=typeof e[r])return cc.error("\u8fd9\u4e2a\u53c2\u6570\u6211\u4e0d\u61c2",e[r]);i=e[r]}var o=null;if("string"==typeof r){var c=r.split(".");if(!(o=dyl._data[c[0]][c[1]]))return cc.error("\u6ca1\u6709\u8fd9\u4e2a\u6570\u636e",r)}else{if(!r||"object"!=typeof r)return cc.error("dyl.data \u8fd9\u4e2a\u4e0d\u662f\u5b57\u7b26\u4e32\uff08xlsx\u91cc\u9762\u7684\u5185\u5bb9\uff09, \u4e5f\u4e0d\u662f\u7528\u6765\u590d\u5236\u7684\u5bf9\u8c61\u7c7b\u578b, \u6240\u4ee5\u6ca1\u6cd5\u5904\u7406",r);o=r}if(n=n||{},t)for(let r=0;r<t.length;r++){let e=t[r];i&&i[e]?n[e]=i[e](o[e]):n[e]=o[e]}else for(var u in o){let r=u;i&&i[r]?n[r]=i[r](o[r]):n[r]=o[r]}return n},dyl.process=function(r,n,e){var t=function(r,n){return r},i=function(r,n){let e=null;return function(){return r?(e=r.apply(this,arguments),r=null):cc.warn("\u5b50\u7a0b\u51fd\u6570"+n+"\u7684end \u53ea\u80fd\u4f7f\u7528\u4e00\u6b21"),e}},o=function(r,n){if(cc.sys.isMobile||DylIsFinal)return cc.log(r,n),null;var e={"\u6d41\u7a0b":"color:#AD1500;font-weight:bold;","\u5b50\u7a0b":"color:#FD9A28;font-weight:bold;","\u8bfb\u6863":"color:#268AFF;font-weight:bold;","\u5b58\u6863":"color:#37DC94;font-weight:bold;"}[r[1]];!0===r[0]&&r.splice(0,1);console.log("%c"+String(r)+" %c"+String(n),"color:#37DC94;font-weight:bold;",e)},c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},u=0,f=[],a=n,l=null,d=[],s=function(r){var n=0;(function t(){var c=f[n++];if(!c)return f.length=0,l(r);e&&o([e,"\u5b50\u7a0b"],c.name);var u=c.childJs,a=c.name,d=c.arrr;"function"==typeof a?a.apply(void 0,[i(t,"\u533f\u540d")].concat(_toConsumableArray2(d))):"string"==typeof a?u[a].apply(u,[i(t,a)].concat(_toConsumableArray(d))):cc.warn("dyl process \u5b50\u8fdb\u7a0b\u7684\u51fd\u6570\u53c2\u6570\u51fa\u9519\u4e86\uff0c\u4e0d\u662f\u51fd\u6570\uff0c\u4e5f\u4e0d\u662f\u5b57\u7b26\u4e32")})()},v=function n(i){if(f.length>0)return s(i);var c=a[u++];if("number"==typeof i){e&&o([e,"\u8bfb\u6863"],i);var v=i;return(y=d[v])?(a=y.arr,u=y.id,l()):cc.warn("\u6ca1\u6709\u8fd9\u4e2a\u5b58\u6863\u70b9",v)}if(e&&o("number"==typeof c&&c>0?[e,"\u5b58\u6863"]:"number"==typeof c&&c<0?[e,"\u8bfb\u6863"]:[e,"\u6d41\u7a0b"],c),c){if("number"==typeof c){if(c<0)return n(-c);var y={arr:a,id:u};return d[c]=y,l()}if("string"==typeof c)return i?cc.error("\u6b63\u5e38\u7684\u8fd0\u884c\uff0c\u5e94\u8be5\u6ca1\u6709\u5206\u652f\u624d\u5bf9\uff0c\u662f\u4e0d\u662f\u54ea\u91cc\u903b\u8f91\u51fa\u95ee\u9898\u4e86"):r[c]?r[c](t(l)):l();if("function"==typeof c)return i?cc.error("\u6b63\u5e38\u7684\u8fd0\u884c\uff0c\u5e94\u8be5\u6ca1\u6709\u5206\u652f\u624d\u5bf9\uff0c\u662f\u4e0d\u662f\u54ea\u91cc\u903b\u8f91\u51fa\u95ee\u9898\u4e86"):c(t(l));if(!i)return cc.error("\u6570\u7ec4\u662f\u5206\u652f\uff0c\u8fd9\u91cc\u5e94\u8be5\u6709\u4e00\u4e2a\u8868\u793a\u5206\u652f\u7684\u53c2\u6570");for(var p=u-1;p<a.length;p++){var h=a[p];if(!Array.isArray(h))return cc.error("dyl.process \u8fd9\u91cc\u662f\u5206\u652f\u5185\u5bb9\uff0c\u540e\u9762\u7684\u53c2\u6570\u5e94\u8be5\u90fd\u662f\u6570\u7ec4\uff0c\u8fd9\u91cc\u53c2\u6570\u4e0d\u5bf9");if(h[0]===i)return a=h,u=0,l()}}},y=function(r,n,e){f.push({childJs:r,name:n,arrr:e})};for(var p in l=function(n,e){if(n)if("function"==typeof n)v();else if("string"==typeof n&&"string"==typeof e){for(var t=arguments.length,i=Array(t>2?t-2:0),o=2;o<t;o++)i[o-2]=arguments[o];n=r.node.getComponent(n),y(n,e,i)}else if("string"==typeof n||"number"==typeof n)v(n);else{for(t=arguments.length,i=Array(t>2?t-2:0),o=2;o<t;o++)i[o-2]=arguments[o];y(n,e,i)}else v()},c)l[p]=c[p];return l(),l},dyl.update=function(r){var n=null;if(r&&"function"==typeof r)(n=r).nowFun=n,n.endFun=n,n.isRun=!0,n.id=updateFunArr.length,updateFunArr.push(n);else if(r&&Array.isArray(r)&&r.length>0){var e=r;(n=e[0]).nowFun=n,n.endFun=e[e.length-1],n.isRun=!0;for(var t=0;t<e.length-1;t++)e[t].nextFun=e[t+1];n.id=updateFunArr.length,updateFunArr.push(n)}return function(r){var e=!0;if("boolean"!=typeof r)if(null!==r)if(n&&n._dylIsDel&&(e=n.isRun,n=null),Array.isArray(r)){var t=r,i=0;n||(i++,(n=t[0]).nowFun=n,n.endFun=n,n.isRun=e,n.id=updateFunArr.length,updateFunArr.push(n));for(var o=n.endFun,c=i;c<t.length;c++)o.nextFun=t[c],o=t[c];n.endFun=t[t.length-1]}else{if(r)return n?(i=n.id,updateFunArr[i]=r,(n=r).id=i,n.isRun=!0,n.endFun=n,void(n.nowFun=n)):((n=r).id=updateFunArr.length,updateFunArr.push(n),n.endFun=n,n.nowFun=n,void(n.isRun=e));if(n){var i=n.id;updateFunArr[i]=updateFunArr[updateFunArr.length-1],updateFunArr[i].id=i,updateFunArr.length--,n=null}}else{if(!n)return;if(n.nowFun.nextFun)n.nowFun=n.nowFun.nextFun;else{n._dylIsDel=!0;var u=n.id;updateFunArr[u]=updateFunArr[updateFunArr.length-1],updateFunArr[u].id=u,updateFunArr.length--}}else n?n.isRun=r:e=r}},dyl.button=function(r,n){for(var e=function(n,e){var t=e.getScale();e.on("touchstart",function(r){e.setScale(.92*t)}),e.on("touchend",function(i){e.setScale(t),r[n]()}),e.on("touchcancel",function(r){e.setScale(t)})},t=(n=n||r.node).getChildren(),i=t.length-1;i>=0;i--)for(var o=t[i].name,c=o.split("_"),u=c.length-1;u>=0;u--)o=c[u],"function"==typeof r[o]&&e(o,t[i])},dyl.load=function(){for(var r=arguments.length,n=Array(r),e=0;e<r;e++)n[e]=arguments[e];var t=function(r){return r=(r=(r=(r=(r=r.split(" ").join("/")).split(".").join("/")).split("_").join("/")).split("-").join("/")).split(",").join("/")};if(2!==n.length||"string"!=typeof n[0]||"function"!=typeof n[1]){var i=null;if(2===n.length&&Array.isArray(n[0])&&"function"==typeof n[1])n[1],i=n[0];else{if(3!==n.length||"string"!=typeof n[0]||!Array.isArray(n[1])||"function"!=typeof n[2])return cc.error("dyl.load \u53c2\u6570\u6709\u9519");n[2];for(var o=(i=n[1]).length-1;o>=0;o--)i[o]=n[0]+"/"+i[o]}var c=[],u=i.length,f=function(r){var e=t(i[r]),o=r;cc.loader.loadRes(e,function(r,e){r&&cc.error(r),c[o]=cc.instantiate(e),cc.log(o,c[o]),--u||n[2](c)})};for(o=i.length-1;o>=0;o--)f(o)}else{var a=t(n[0]);cc.loader.loadRes(a,function(r,e){r&&cc.error(r),n[1](cc.instantiate(e))})}},dyl.buffer=function(r,n){n||(n=0),n*=1e3;var e={data:null},t=0;return e.add=function(i){if(!this.data)return this.data="ing",r(i);this.data=i;var o=++t;setTimeout(function(){o===t&&(e.data=null)},n)},e.del=function(n){if(++t,"ing"===this.data)this.data=null;else if(this.data){var e=this.data;this.data="ing",r(e)}},e},dyl.get=function(r,...n){if("string"==typeof r)return 0===n.length?cc.error("\u540e\u9762\u6ca1\u6709\u53c2\u6570\uff0c\u4e0d\u77e5\u9053\u5bf9\u5b57\u7b26\u4e32\u600e\u4e48\u5904\u7406"):1===n.length?r.split(n[0]):"number"==typeof n[1]?r.slice(...n):r.replace(...n);if(Array.isArray(r)){if(1===n.length)return r.indexOf(n[0]);if("string"==typeof n[0]){for(var e=0;e<r.length;e++)if(r[e]&&"object"==typeof r[e]&&r[e][n[0]]===n[1])return e;return-1}return r.slice(...n)}return r&&"object"==typeof r?r[n[0]]:r},dyl.set=function(r,...n){Array.isArray(r)?r.splice(...n):r&&"object"==typeof r&&(r[n[0]]=n[1])},dyl.notify=function(r,n,e){if("string"!=typeof n)return cc.error("\u8fd9\u4e2a\u5c5e\u6027\u540d\u4e0d\u662f\u5b57\u7b26\u4e32",n);var t=r[n];Object.defineProperty(r,n,{get:function(){return t},set:function(r){t=e(r,t)}})},dyl.counter=function(r){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if("function"!=typeof r)return cc.warn("counter\u7684\u53c2\u6570fun \u4e0d\u662f\u51fd\u6570",r);if("number"!=typeof n)return cc.warn("counter\u7684\u53c2\u6570num \u4e0d\u662f\u6570\u5b57",n);var e=!1;return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:-1;if("number"!=typeof t&&(t=-1),e)return cc.warn("\u5df2\u7ecf\u6267\u884c\u5b8c\u4e86\uff0c\u4e0d\u80fd\u518d\u7b97\u4e86");0===(n+=t)&&(e=!0,r())}},dyl.register=function(r){if("function"!=typeof r)return console.log("\u6ca1\u6709\u6267\u884c\u51fd\u6570",r);var n=null,e=0;return function(t){if(!1===t)return cc.warn("\u4e0d\u80fd\u4fdd\u5b58false\u7684\u64cd\u4f5c");let i=++e;if(t){if(null===n)return n=!1,r(t);{let r=n;n=t,setTimeout(function(){e===i&&(n=r)},1e3)}}else if(null!==n){if(!1!==n){var o=n;return n=!1,r(o)}n=null}}},dyl.shake=function(r,n){r.runAction(cc.repeatForever(cc.sequence(cc.moveTo(.02,cc.v2(5,7)),cc.moveTo(.02,cc.v2(-6,7)),cc.moveTo(.02,cc.v2(-13,3)),cc.moveTo(.02,cc.v2(3,-6)),cc.moveTo(.02,cc.v2(-5,5)),cc.moveTo(.02,cc.v2(2,-8)),cc.moveTo(.02,cc.v2(-8,-10)),cc.moveTo(.02,cc.v2(3,10)),cc.moveTo(.02,cc.v2(0,0))))),setTimeout(function(){r.stopAllActions(),r.setPosition(0,0)},1e3*n)},dyl.arr=function(r,...n){var e={funArr:[],funStrArr:[]},t=0;for(t=0;t<n.length;t++){var i=null;if(i=(f=n[t])&&"object"==typeof f&&!f.getChildren&&void 0!==f.x&&void 0!==f.y?"cc.Vec2":cc.js.getClassName(f),"number"==typeof f)e.opacity=f;else if("boolean"==typeof f)e.active=f;else if(Array.isArray(f))f.length>1?e.scale=cc.v2(f[0],f[1]):e.rotation=f[0];else if("cc.Vec2"===i)e.position=f;else if("cc.Color"===i)e.color=f;else if("function"==typeof f)e.funArr.push(f);else if("string"==typeof f)Array.isArray(n[t+1])?e.funStrArr.push([f,n[++t]]):e.funStrArr.push([f,[]]);else if("object"==typeof f)for(let r in f)e[r]=f[r];else cc.error("dyl.arr \u8fd9\u4e2a\u53c2\u6570\u7c7b\u578b\u6ca1\u6709\u8003\u8651\u8fc7",f)}for(t=0;t<r.length;t++){for(var o=r[t],c=!1,u=0;u<e.funStrArr.length;u++)cc.log(e.funStrArr[u][0],e.funStrArr[u][1]),o[e.funStrArr[u][0]].apply(o,e.funStrArr[u][1]);for(u=0;u<e.funArr.length;u++){var f;i=null;if(i=(f=e.funArr[u](t,r[t]))&&"object"==typeof f&&!f.getChildren&&void 0!==f.x&&void 0!==f.y?"cc.Vec2":cc.js.getClassName(f),"number"==typeof f){if(void 0===e.opacity&&t>0)return cc.error("\u4e4b\u524d\u5e76\u6ca1\u6709\u5b9a\u4e49\u8fc7number\uff0c\u51fd\u6570\u8fd4\u56de\u4e0d\u80fd\u662fnumber, \u9664\u975e\u4f4d\u7f6e\u662f\u4ece0\u5f00\u59cb");e.opacity=f}else if("boolean"==typeof f){if(void 0===e.active&&t>0)return cc.error("\u4e4b\u524d\u5e76\u6ca1\u6709\u5b9a\u4e49\u8fc7bool\uff0c\u51fd\u6570\u8fd4\u56de\u4e0d\u80fd\u662fbool, \u9664\u975e\u4f4d\u7f6e\u662f\u4ece0\u5f00\u59cb");e.active=f}else if(Array.isArray(f)&&"number"==typeof f[0])if(f.length>1){if(void 0===e.scale&&t>0)return cc.error("\u4e4b\u524d\u5e76\u6ca1\u6709\u5b9a\u4e49\u8fc7[num1, num2]\uff0c\u51fd\u6570\u8fd4\u56de\u4e0d\u80fd\u662f[num1, num2], \u9664\u975e\u4f4d\u7f6e\u662f\u4ece0\u5f00\u59cb");e.scale=cc.v2(f[0],f[1])}else{if(void 0===e.rotation&&t>0)return cc.error("\u4e4b\u524d\u5e76\u6ca1\u6709\u5b9a\u4e49\u8fc7[num]\uff0c\u51fd\u6570\u8fd4\u56de\u4e0d\u80fd\u662f[num], \u9664\u975e\u4f4d\u7f6e\u662f\u4ece0\u5f00\u59cb");e.rotation=f[0]}else{if(Array.isArray(f)){r.splice(t,1,...f),c=!0;break}if(null===f){r.splice(t,1),c=!0;break}if("cc.Vec2"===i){if(void 0===e.position&&t>0)return cc.error("\u4e4b\u524d\u5e76\u6ca1\u6709\u5b9a\u4e49\u8fc7cc.Vec2\uff0c\u51fd\u6570\u8fd4\u56de\u4e0d\u80fd\u662fcc.Vec2, \u9664\u975e\u4f4d\u7f6e\u662f\u4ece0\u5f00\u59cb");e.position=f}else if("cc.Color"===i){if(void 0===e.color&&t>0)return cc.error("\u4e4b\u524d\u5e76\u6ca1\u6709\u5b9a\u4e49\u8fc7cc.Color\uff0c\u51fd\u6570\u8fd4\u56de\u4e0d\u80fd\u662fcc.Color, \u9664\u975e\u4f4d\u7f6e\u662f\u4ece0\u5f00\u59cb");e.color=f}else if("object"==typeof f)for(let r in f){if(void 0===e[r]&&t>0)return cc.error("\u4e4b\u524d\u5e76\u6ca1\u6709\u5b9a\u4e49\u8fc7\u8fd9\u4e2aid, \u9664\u975e\u4f4d\u7f6e\u662f\u4ece0\u5f00\u59cb",r);e[r]=f[r]}else{if(void 0===f)continue;cc.error("dyl.arr 000 \u8fd9\u4e2a\u53c2\u6570\u7c7b\u578b\u6ca1\u6709\u8003\u8651\u8fc7",f)}}}if(c)t--;else for(var a in e)if("position"===a){var l=!0===e[a].x?o.x:e[a].x,d=!0===e[a].y?o.y:e[a].y;o.setPosition(l,d)}else o[a]=e[a]}}},window.initHjmDataFun&&window.initHjmFun&&window.isCryptoJS){cc.log("init dylPre"),window.initDylFun(window.isCryptoJS),window.initHjmFun();var ___ttt=hjm;hjm=_hjm,window.initHjmDataFun(),hjm=___ttt}