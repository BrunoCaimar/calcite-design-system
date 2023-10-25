/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.10.0-next.7
 */
import{r as t,h as e,F as i,a as n}from"./p-bac89e07.js";import{c as o,d as s}from"./p-190eb425.js";import{e as a}from"./p-d8a3e693.js";import{c,d as r,u as l}from"./p-5de20205.js";import"./p-31c09125.js";import"./p-e501a2ab.js";import"./p-fe45786d.js";import"./p-ba408deb.js";const d="content-start",h="content-end",p=class{constructor(e){t(this,e),this.active=!1,this.description=void 0,this.disabled=!1,this.embed=!1,this.focused=!1,this.heading=void 0,this.hidden=!1,this.href=void 0,this.icon=void 0,this.iconFlipRtl=!1}connectedCallback(){o(this),c(this)}disconnectedCallback(){s(this),r(this)}componentDidRender(){l(this)}renderTile(){const{icon:t,el:i,heading:n,description:o,iconFlipRtl:s}=this,c=n&&t&&!o;return e("div",{class:{container:!0,"large-visual":c}},t&&e("div",{class:"icon"},e("calcite-icon",{flipRtl:s,icon:t,scale:"l",style:c?{height:"64px",width:"64px"}:void 0})),e("div",{class:"content-container"},a(i,d)?e("div",{class:"content-slot-container"},e("slot",{name:d})):null,e("div",{class:"content"},n&&e("div",{class:"heading"},n),o&&e("div",{class:"description"},o)),a(i,h)?e("div",{class:"content-slot-container"},e("slot",{name:h})):null))}render(){return e(i,null,this.href?e("calcite-link",{disabled:this.disabled,href:this.href},this.renderTile()):this.renderTile())}get el(){return n(this)}};p.style=":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{box-sizing:border-box;display:inline-block;-webkit-user-select:none;user-select:none;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-3);transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}:host .container{pointer-events:none;display:grid;grid-template-columns:repeat(1, minmax(0, 1fr));gap:0.5rem}:host .content{display:flex;flex:1 1 auto;flex-direction:column;justify-content:center;gap:0.5rem;inline-size:10%}:host .content-container{display:flex;inline-size:100%;flex:1 1 auto;align-items:stretch;padding:0px;color:var(--calcite-ui-text-2);outline-color:transparent}:host .content-slot-container{display:flex;align-items:center;background-color:var(--calcite-ui-foreground-1)}:host .content-slot-container:first-child{padding-inline:0 0.75rem}:host .content-slot-container:last-child{padding-inline:0.75rem 0}:host .heading{pointer-events:none;overflow-wrap:break-word;font-size:var(--calcite-font-size--1);line-height:1.375;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-2);transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}:host .large-visual{align-items:center;text-align:center;min-block-size:12rem}:host .large-visual .icon{display:flex;justify-content:center;align-self:flex-end}:host .large-visual .content-container{align-self:center}:host .description{pointer-events:none;overflow-wrap:break-word;font-size:var(--calcite-font-size--2);line-height:1.375;color:var(--calcite-ui-text-3);transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}:host([href]) .heading,:host([href]:hover) .heading{text-decoration-line:underline;color:var(--calcite-ui-text-link)}:host(:not([embed])){padding:0.75rem;box-shadow:0 0 0 1px var(--calcite-ui-border-2)}:host(:not([embed])[href]:hover){cursor:pointer;box-shadow:0 0 0 2px var(--calcite-ui-brand)}:host(:not([embed])[href]:active){box-shadow:0 0 0 3px var(--calcite-ui-brand)}:host([icon][heading]:not([description]):not([embed])){padding:0px}:host([icon][heading]:not([description])) .icon{display:flex;justify-content:center}:host([icon][heading]:not([description])) .large-visual{text-align:center}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host(:hover) .heading,:host([active]) .heading{color:var(--calcite-ui-text-1)}:host(:hover) .description,:host([active]) .description{color:var(--calcite-ui-text-2)}:host([hidden]){display:none}[hidden]{display:none}";export{p as calcite_tile}