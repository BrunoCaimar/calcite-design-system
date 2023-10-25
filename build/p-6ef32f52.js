/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.10.0-next.7
 */
import{c as t}from"./p-31c09125.js";const n=["lang","role","aria-expanded"],o=new Map;let c;function a(t,o,c=!1){const{el:a}=t,e=c?t.globalAttributes:{};o.filter((t=>!!n.includes(t)&&!!a.hasAttribute(t))).forEach((t=>{const n=a.getAttribute(t);null!==n&&(e[t]=n)})),t.globalAttributes=e}function e(t){t.forEach((({target:t})=>{const[n,c]=o.get(t);a(n,c.attributeFilter)}))}function s(n,s){const{el:i}=n,r={attributeFilter:s};o.set(i,[n,r]),a(n,s,!0),c||(c=t("mutation",e)),c.observe(i,r)}function i(t){o.delete(t.el),e(c.takeRecords()),c.disconnect();for(const[t,[,n]]of o.entries())c.observe(t,n)}export{i as u,s as w}