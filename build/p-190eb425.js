/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.10.0-next.7
 */
import{f as t}from"./p-bac89e07.js";import{c as o}from"./p-31c09125.js";const c=new Set;let n;const s={childList:!0};function f(t){n||(n=o("mutation",a)),n.observe(t.el,s)}function i(t){c.delete(t.el),a(n.takeRecords()),n.disconnect();for(const[t]of c.entries())n.observe(t,s)}function a(o){o.forEach((({target:o})=>{t(o)}))}export{f as c,i as d}