/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.10.0-next.7
 */
var t="object"==typeof global&&global&&global.Object===Object&&global,n="object"==typeof self&&self&&self.Object===Object&&self,r=t||n||Function("return this")(),e=r.Symbol,o=Object.prototype,i=o.hasOwnProperty,u=o.toString,f=e?e.toStringTag:void 0,a=Object.prototype.toString,c=e?e.toStringTag:void 0;function v(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":c&&c in Object(t)?function(t){var n=i.call(t,f),r=t[f];try{t[f]=void 0;var e=!0}catch(t){}var o=u.call(t);return e&&(n?t[f]=r:delete t[f]),o}(t):function(t){return a.call(t)}(t)}function l(t){return null!=t&&"object"==typeof t}function s(t){return"symbol"==typeof t||l(t)&&"[object Symbol]"==v(t)}var b=/\s/,d=/^\s+/;function p(t){var n=typeof t;return null!=t&&("object"==n||"function"==n)}var y=/^[-+]0x[0-9a-f]+$/i,j=/^0b[01]+$/i,m=/^0o[0-7]+$/i,T=parseInt;function g(t){if("number"==typeof t)return t;if(s(t))return NaN;if(p(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=p(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;var r;t=(r=t)?r.slice(0,function(t){for(var n=t.length;n--&&b.test(t.charAt(n)););return n}(r)+1).replace(d,""):r;var e=j.test(t);return e||m.test(t)?T(t.slice(2),e?2:8):y.test(t)?NaN:+t}var h=function(){return r.Date.now()},N=Math.max,O=Math.min;function x(t,n,r){var e,o,i,u,f,a,c=0,v=!1,l=!1,s=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function b(n){var r=e,i=o;return e=o=void 0,c=n,u=t.apply(i,r)}function d(t){return c=t,f=setTimeout(j,n),v?b(t):u}function y(t){var r=t-a;return void 0===a||r>=n||r<0||l&&t-c>=i}function j(){var t=h();if(y(t))return m(t);f=setTimeout(j,function(t){var r=n-(t-a);return l?O(r,i-(t-c)):r}(t))}function m(t){return f=void 0,s&&e?b(t):(e=o=void 0,u)}function T(){var t=h(),r=y(t);if(e=arguments,o=this,a=t,r){if(void 0===f)return d(a);if(l)return clearTimeout(f),f=setTimeout(j,n),b(a)}return void 0===f&&(f=setTimeout(j,n)),u}return n=g(n)||0,p(r)&&(v=!!r.leading,i=(l="maxWait"in r)?N(g(r.maxWait)||0,n):i,s="trailing"in r?!!r.trailing:s),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,e=a=o=f=void 0},T.flush=function(){return void 0===f?u:m(h())},T}export{e as S,s as a,v as b,l as c,x as d,t as f,p as i,r}