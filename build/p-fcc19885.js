/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.10.0-next.7
 */
import{f as t,h as e}from"./p-bac89e07.js";import{g as o}from"./p-d8a3e693.js";import{S as a}from"./p-ff5da2e7.js";import{S as n}from"./p-ca7f4e76.js";const i=150,c=t=>t.reduce(((t,e)=>t+e),0)/t.length,l=t=>{const e=t.filter((t=>t.slot!==a.menuActions)),o=e?.length;return{actionWidth:o?c(e.map((t=>t.clientWidth||0))):0,actionHeight:o?c(e.map((t=>t.clientHeight||0))):0}},r=({layout:t,actionCount:e,actionWidth:o,width:a,actionHeight:n,height:i,groupCount:c})=>Math.max(e-(({width:t,actionWidth:e,layout:o,height:a,actionHeight:n,groupCount:i})=>Math.floor((("horizontal"===o?t:a)-2*i)/("horizontal"===o?e:n)))({width:a,actionWidth:o,layout:t,height:i,actionHeight:n,groupCount:c}),0),s=t=>Array.from(t.querySelectorAll("calcite-action")).filter((t=>!t.closest("calcite-action-menu")||t.slot===n.trigger)),p=({actionGroups:e,expanded:o,overflowCount:n})=>{let i=n;e.reverse().forEach((e=>{let n=0;const c=s(e).reverse();c.forEach((t=>{t.slot===a.menuActions&&(t.removeAttribute("slot"),t.textEnabled=o)})),i>0&&c.some((t=>(c.filter((t=>!t.slot)).length>1&&c.length>2&&!t.closest("calcite-action-menu")&&(t.textEnabled=!0,t.setAttribute("slot",a.menuActions),n++,n>1&&i--),i<1))),t(e)}))};function h({el:t,expanded:e}){s(t).filter((t=>t.slot!==a.menuActions)).forEach((t=>t.textEnabled=e)),t.querySelectorAll("calcite-action-group, calcite-action-menu").forEach((t=>t.expanded=e))}const u=({expanded:t,expandText:a,collapseText:n,toggle:i,el:c,position:l,tooltip:r,ref:s,scale:p})=>{const h="rtl"===o(c),u=t?n:a,d=["chevrons-left","chevrons-right"];h&&d.reverse();const f="end"===function(t,e){return t||e.closest("calcite-shell-panel")?.position||"start"}(l,c),g=e("calcite-action",{icon:t?f?d[1]:d[0]:f?d[0]:d[1],onClick:i,scale:p,text:u,textEnabled:t,title:t||r?null:u,ref:e=>(({tooltip:t,referenceElement:e,expanded:o,ref:a})=>(t&&(t.referenceElement=!o&&e?e:null),a&&a(e),e))({tooltip:r,referenceElement:e,expanded:t,ref:s})});return g};export{u as E,p as a,r as b,l as g,i as o,s as q,h as t}