/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.10.0-next.7
 */
import{h as t}from"./p-bac89e07.js";const e={width:12,height:6,strokeWidth:1},i=({floatingLayout:i,key:o,ref:r})=>{const{width:a,height:h,strokeWidth:s}=e,n=a/2,c="vertical"===i,d=`M0,0 H${a} L${a-n},${h} Q${n},${h} ${n},${h} Z`;return t("svg",{"aria-hidden":"true",class:"calcite-floating-ui-arrow",height:a,key:o,ref:r,viewBox:`0 0 ${a} ${a+(c?0:s)}`,width:a+(c?s:0)},s>0&&t("path",{class:"calcite-floating-ui-arrow__stroke",d,fill:"none","stroke-width":s+1}),t("path",{d,stroke:"none"}))};export{i as F}