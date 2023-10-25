/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.10.0-next.7
 */
import{r as e,c as t,h as i,a as s,F as n}from"./p-bac89e07.js";import{c as a}from"./p-31c09125.js";import{d as o}from"./p-d8a3e693.js";import{c as l,d as c,a as r,H as h}from"./p-6c77c2e4.js";import{c as d,d as p,u}from"./p-5de20205.js";import{c as m,d as b,g}from"./p-53177d47.js";import{s as f,a as v,c as C}from"./p-b155bab4.js";import{g as w}from"./p-9b61fd2b.js";import"./p-e501a2ab.js";import"./p-fe45786d.js";import"./p-ba408deb.js";const y=class{constructor(i){e(this,i),this.calciteInternalOptionChange=t(this,"calciteInternalOptionChange",6),this.mutationObserver=a("mutation",(()=>{this.ensureTextContentDependentProps(),this.calciteInternalOptionChange.emit()})),this.disabled=!1,this.label=void 0,this.selected=void 0,this.value=void 0}handlePropChange(e,t,i){"label"!==i&&"value"!==i||this.ensureTextContentDependentProps(),this.calciteInternalOptionChange.emit()}ensureTextContentDependentProps(){const{el:{textContent:e},internallySetLabel:t,internallySetValue:i,label:s,value:n}=this;s&&s!==t||(this.label=e,this.internallySetLabel=e),null!=n&&n!==i||(this.value=e,this.internallySetValue=e)}connectedCallback(){this.ensureTextContentDependentProps(),this.mutationObserver?.observe(this.el,{attributeFilter:["label","value"],characterData:!0,childList:!0,subtree:!0})}disconnectedCallback(){this.mutationObserver?.disconnect()}render(){return i("slot",null,this.label)}get el(){return s(this)}static get watchers(){return{disabled:["handlePropChange"],label:["handlePropChange"],selected:["handlePropChange"],value:["handlePropChange"]}}};y.style=":host{display:block}:host([hidden]){display:none}[hidden]{display:none}";const x=class{constructor(i){e(this,i),this.calciteInternalOptionGroupChange=t(this,"calciteInternalOptionGroupChange",6),this.disabled=!1,this.label=void 0}handlePropChange(){this.calciteInternalOptionGroupChange.emit()}render(){return i(n,null,i("div",null,this.label),i("slot",null))}static get watchers(){return{disabled:["handlePropChange"],label:["handlePropChange"]}}};x.style=":host{display:block}:host([hidden]){display:none}[hidden]{display:none}";function z(e){return"CALCITE-OPTION"===e.tagName}const O=class{constructor(i){e(this,i),this.calciteSelectChange=t(this,"calciteSelectChange",6),this.componentToNativeEl=new Map,this.mutationObserver=a("mutation",(()=>this.populateInternalSelect())),this.handleInternalSelectChange=()=>{this.selectFromNativeOption(this.selectEl.selectedOptions[0]),requestAnimationFrame((()=>this.emitChangeEvent()))},this.populateInternalSelect=()=>{const e=Array.from(this.el.children).filter((e=>"CALCITE-OPTION"===e.tagName||"CALCITE-OPTION-GROUP"===e.tagName));this.clearInternalSelect(),e.forEach((e=>this.selectEl?.append(this.toNativeElement(e))))},this.storeSelectRef=e=>{this.selectEl=e,this.populateInternalSelect(),this.selectFromNativeOption(this.selectEl.selectedOptions[0])},this.emitChangeEvent=()=>{this.calciteSelectChange.emit()},this.disabled=!1,this.form=void 0,this.label=void 0,this.name=void 0,this.required=!1,this.scale="m",this.value=null,this.selectedOption=void 0,this.width="auto"}valueHandler(e){this.el.querySelectorAll("calcite-option").forEach((t=>t.selected=t.value===e))}selectedOptionHandler(e){this.value=e?.value}connectedCallback(){const{el:e}=this;this.mutationObserver?.observe(e,{subtree:!0,childList:!0}),d(this),m(this),l(this)}disconnectedCallback(){this.mutationObserver?.disconnect(),p(this),b(this),c(this)}componentWillLoad(){f(this)}componentDidLoad(){v(this),r(this,this.selectedOption?.value??"")}componentDidRender(){u(this)}async setFocus(){await C(this),o(this.selectEl)}handleOptionOrGroupChange(e){e.stopPropagation();const t=e.target,i=this.componentToNativeEl.get(t);i&&(this.updateNativeElement(t,i),z(t)&&t.selected&&(this.deselectAllExcept(t),this.selectedOption=t))}onLabelClick(){this.setFocus()}updateNativeElement(e,t){if(t.disabled=e.disabled,t.label=e.label,z(e)){const i=t;i.selected=e.selected,i.value=e.value,i.innerText=e.label}}clearInternalSelect(){this.componentToNativeEl.forEach((e=>e.remove())),this.componentToNativeEl.clear()}selectFromNativeOption(e){if(!e)return;let t;this.componentToNativeEl.forEach(((i,s)=>{z(s)&&i===e&&(s.selected=!0,t=s,this.deselectAllExcept(s))})),t&&(this.selectedOption=t)}toNativeElement(e){if(z(e)){const t=document.createElement("option");return this.updateNativeElement(e,t),this.componentToNativeEl.set(e,t),t}if(function(e){return"CALCITE-OPTION-GROUP"===e.tagName}(e)){const t=document.createElement("optgroup");return this.updateNativeElement(e,t),Array.from(e.children).forEach((i=>{const s=this.toNativeElement(i);t.append(s),this.componentToNativeEl.set(e,s)})),this.componentToNativeEl.set(e,t),t}throw new Error("unsupported element child provided")}deselectAllExcept(e){this.el.querySelectorAll("calcite-option").forEach((t=>{t!==e&&(t.selected=!1)}))}renderChevron(){return i("div",{class:"icon-container"},i("calcite-icon",{class:"icon",icon:"chevron-down",scale:w(this.scale)}))}render(){return i(n,null,i("select",{"aria-label":g(this),class:"select",disabled:this.disabled,onChange:this.handleInternalSelectChange,ref:this.storeSelectRef},i("slot",null)),this.renderChevron(),i(h,{component:this}))}get el(){return s(this)}static get watchers(){return{value:["valueHandler"],selectedOption:["selectedOptionHandler"]}}};O.style=":host{--calcite-icon-size:1rem;--calcite-spacing-eighth:0.125rem;--calcite-spacing-quarter:0.25rem;--calcite-spacing-half:0.5rem;--calcite-spacing-three-quarters:0.75rem;--calcite-spacing:1rem;--calcite-spacing-plus-quarter:1.25rem;--calcite-spacing-plus-half:1.5rem;--calcite-spacing-double:2rem;--calcite-menu-min-width:10rem;--calcite-header-min-height:3rem;--calcite-footer-min-height:3rem}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;display:flex;align-items:stretch;inline-size:var(--select-width)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host([scale=s]){block-size:1.5rem;--calcite-select-font-size:var(--calcite-font-size--2);--calcite-select-spacing-inline:0.5rem 2rem}:host([scale=s]) .icon-container{padding-inline:0.5rem}:host([scale=m]){block-size:2rem;--calcite-select-font-size:var(--calcite-font-size--1);--calcite-select-spacing-inline:0.75rem 2.5rem}:host([scale=m]) .icon-container{padding-inline:0.75rem}:host([scale=l]){block-size:44px;--calcite-select-font-size:var(--calcite-font-size-0);--calcite-select-spacing-inline:1rem 3rem}:host([scale=l]) .icon-container{padding-inline:1rem}:host([width=auto]){inline-size:auto}:host([width=half]){inline-size:50%}:host([width=full]){inline-size:100%}.select{margin:0px;box-sizing:border-box;inline-size:100%;cursor:pointer;-webkit-appearance:none;appearance:none;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;border-radius:0px;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);background-color:var(--calcite-ui-foreground-1);font-family:inherit;color:var(--calcite-ui-text-2);outline-color:transparent;font-size:var(--calcite-select-font-size);padding-inline:var(--calcite-select-spacing-inline);border-inline-end-width:0px}.select:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}.select:hover{background-color:var(--calcite-ui-foreground-2)}select:disabled{border-color:var(--calcite-ui-border-input);--tw-bg-opacity:1}.icon-container{pointer-events:none;position:absolute;inset-block:0px;display:flex;align-items:center;border-width:0px;border-style:solid;border-color:var(--calcite-ui-border-input);background-color:transparent;color:var(--calcite-ui-text-2);inset-inline-end:0px;border-inline-width:0px 1px}.select:focus~.icon-container{border-color:transparent}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}:host([hidden]){display:none}[hidden]{display:none}";export{y as calcite_option,x as calcite_option_group,O as calcite_select}