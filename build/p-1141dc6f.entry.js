/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.10.0-next.7
 */
import{h as i,r as t,c as e,H as s,a as o}from"./p-bac89e07.js";import{f as n}from"./p-b33f40db.js";import{z as a,i as c,t as l,e as r}from"./p-d8a3e693.js";import{d as h,f as d,c as p,r as b,a as m,F as u}from"./p-2a32a51b.js";import{s as g,c as x,a as f,d as v,H as w}from"./p-6c77c2e4.js";import{g as y}from"./p-e501a2ab.js";import{c as k,u as C,d as z}from"./p-5de20205.js";import{c as I,d as $,g as H}from"./p-53177d47.js";import{c as j,s as E,a as A}from"./p-b155bab4.js";import{c as O,d as P}from"./p-6e222163.js";import{c as M}from"./p-31c09125.js";import{o as L}from"./p-97c91edb.js";import{c as B,s as F,d as T,u as D}from"./p-73638da8.js";import{d as R}from"./p-8975544b.js";import{c as S,d as X}from"./p-190eb425.js";import{g as _}from"./p-9b61fd2b.js";import"./p-fe45786d.js";import"./p-ba408deb.js";import"./p-59cdfef8.js";const U="CALCITE-COMBOBOX-ITEM",G="CALCITE-COMBOBOX-ITEM-GROUP",V=`${U}, ${G}`;function W(i){const t=i.parentElement?.closest(V),e=t?.parentElement?.closest(V);return[t,e].filter((i=>i))}function Y(i){return i.ancestors?.filter((i=>"CALCITE-COMBOBOX-ITEM"===i.nodeName))||[]}function K(i){return a(i.querySelectorAll("calcite-combobox-item")).filter((i=>i.selected)).length>0}function N(i){return document.evaluate("ancestor::calcite-combobox-item | ancestor::calcite-combobox-item-group",i,null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null).snapshotLength}function q(i){return i.includes("single")}const J="x-button";function Q({disabled:t,key:e,label:s,onClick:o,ref:n,scale:a}){return i("button",{"aria-label":s,class:J,disabled:t,key:e,onClick:o,tabIndex:-1,type:"button",ref:n},i("calcite-icon",{icon:"x",scale:"l"===a?"m":"s"}))}const Z="combobox-item-",ii="combobox-chip-",ti="combobox-label-",ei="combobox-listbox-",si="combobox-input-",oi=class{constructor(i){t(this,i),this.calciteComboboxChange=e(this,"calciteComboboxChange",6),this.calciteComboboxFilterChange=e(this,"calciteComboboxFilterChange",6),this.calciteComboboxChipClose=e(this,"calciteComboboxChipClose",6),this.calciteComboboxBeforeClose=e(this,"calciteComboboxBeforeClose",6),this.calciteComboboxClose=e(this,"calciteComboboxClose",6),this.calciteComboboxBeforeOpen=e(this,"calciteComboboxBeforeOpen",6),this.calciteComboboxOpen=e(this,"calciteComboboxOpen",6),this.placement=h,this.internalValueChangeFlag=!1,this.textInput=null,this.mutationObserver=M("mutation",(()=>this.updateItems())),this.resizeObserver=M("resize",(()=>this.setMaxScrollerHeight())),this.guid=y(),this.inputHeight=0,this.ignoreSelectedEventsFlag=!1,this.openTransitionProp="opacity",this.setFilteredPlacements=()=>{const{el:i,flipPlacements:t}=this;this.filteredFlipPlacements=t?d(t,i):null},this.getValue=()=>{const i=this.selectedItems.map((i=>i?.value?.toString()));return i?.length?i.length>1?i:i[0]:""},this.onLabelClick=()=>{this.setFocus()},this.keyDownHandler=i=>{const{key:t}=i;switch(t){case"Tab":this.activeChipIndex=-1,this.activeItemIndex=-1,this.allowCustomValues&&this.text?(this.addCustomChip(this.text,!0),i.preventDefault()):this.open&&(this.open=!1,i.preventDefault());break;case"ArrowLeft":this.previousChip(),i.preventDefault();break;case"ArrowRight":this.nextChip(),i.preventDefault();break;case"ArrowUp":i.preventDefault(),this.open&&this.shiftActiveItemIndex(-1),this.comboboxInViewport()||this.el.scrollIntoView();break;case"ArrowDown":i.preventDefault(),this.open?this.shiftActiveItemIndex(1):(this.open=!0,this.ensureRecentSelectedItemIsActive()),this.comboboxInViewport()||this.el.scrollIntoView();break;case" ":this.textInput.value||(this.open||(this.open=!0,this.shiftActiveItemIndex(1)),i.preventDefault());break;case"Home":if(!this.open)return;i.preventDefault(),this.updateActiveItemIndex(0),this.scrollToActiveItem(),this.comboboxInViewport()||this.el.scrollIntoView();break;case"End":if(!this.open)return;i.preventDefault(),this.updateActiveItemIndex(this.filteredItems.length-1),this.scrollToActiveItem(),this.comboboxInViewport()||this.el.scrollIntoView();break;case"Escape":this.clearDisabled||this.open||this.clearValue(),this.open=!1,i.preventDefault();break;case"Enter":this.activeItemIndex>-1?(this.toggleSelection(this.filteredItems[this.activeItemIndex]),i.preventDefault()):this.activeChipIndex>-1?(this.removeActiveChip(),i.preventDefault()):this.allowCustomValues&&this.text?(this.addCustomChip(this.text,!0),i.preventDefault()):i.defaultPrevented||g(this)&&i.preventDefault();break;case"Delete":case"Backspace":this.activeChipIndex>-1?(i.preventDefault(),this.removeActiveChip()):!this.text&&this.isMulti()&&(i.preventDefault(),this.removeLastChip())}},this.toggleCloseEnd=()=>{this.open=!1,this.el.removeEventListener("calciteComboboxClose",this.toggleCloseEnd)},this.toggleOpenEnd=()=>{this.open=!1,this.el.removeEventListener("calciteComboboxOpen",this.toggleOpenEnd)},this.setMaxScrollerHeight=async()=>{const{listContainerEl:i,open:t,referenceEl:e}=this;if(!i||!t)return;await this.reposition(!0);const s=this.getMaxScrollerHeight();i.style.maxHeight=s>0?`${s}px`:"",i.style.minWidth=`${e.clientWidth}px`,await this.reposition(!0)},this.calciteChipCloseHandler=i=>{this.open=!1;const t=this.items.find((t=>t===i));t&&this.toggleSelection(t,!1),this.calciteComboboxChipClose.emit()},this.clickHandler=i=>{const t=i.composedPath();return t.some((i=>"CALCITE-CHIP"===i.tagName))?(this.open=!1,void i.preventDefault()):t.some((i=>i.classList?.contains(J)))?(this.clearValue(),void i.preventDefault()):(this.open=!this.open,void this.ensureRecentSelectedItemIsActive())},this.setInactiveIfNotContained=i=>{const t=i.composedPath();!this.open||t.includes(this.el)||t.includes(this.referenceEl)||(!this.allowCustomValues&&this.textInput.value&&(this.clearInputValue(),this.filterItems(""),this.updateActiveItemIndex(-1)),this.allowCustomValues&&this.text.trim().length&&this.addCustomChip(this.text),this.open=!1)},this.setFloatingEl=i=>{this.floatingEl=i,p(this,this.referenceEl,this.floatingEl)},this.setContainerEl=i=>{this.resizeObserver.observe(i),this.listContainerEl=i,this.transitionEl=i},this.setReferenceEl=i=>{this.referenceEl=i,p(this,this.referenceEl,this.floatingEl)},this.inputHandler=i=>{const t=i.target.value;this.text=t,this.filterItems(t),t&&(this.activeChipIndex=-1)},this.filterItems=(()=>{const i=(i,t)=>i&&t.some((({label:t,value:e})=>i.tagName===G?t===i.label:e===i.value&&t===i.textLabel));return R((t=>{const e=n(this.data,t);this.getItemsAndGroups().forEach((t=>{const s=!i(t,e);t.hidden=s;const[o,n]=t.ancestors;(i(o,e)||i(n,e))&&(t.hidden=!1),s||t.ancestors.forEach((i=>i.hidden=!1))})),this.filteredItems=this.getFilteredItems(),this.calciteComboboxFilterChange.emit()}),100)})(),this.internalComboboxChangeEvent=()=>{this.calciteComboboxChange.emit()},this.emitComboboxChange=R(this.internalComboboxChangeEvent,0),this.updateItems=()=>{this.items=this.getItems(),this.groupItems=this.getGroupItems(),this.data=this.getData(),this.selectedItems=this.getSelectedItems(),this.filteredItems=this.getFilteredItems(),this.needsIcon=this.getNeedsIcon(),this.items.forEach((i=>{i.selectionMode=this.selectionMode,i.scale=this.scale})),this.allowCustomValues||this.setMaxScrollerHeight(),this.groupItems.forEach(((i,t,e)=>{0===t&&(i.afterEmptyGroup=!1);const s=e[t+1];s&&(s.afterEmptyGroup=0===i.children.length)}))},this.scrollToActiveItem=()=>{const i=this.filteredItems[this.activeItemIndex];if(!i)return;const t=this.calculateSingleItemHeight(i),{offsetHeight:e,scrollTop:s}=this.listContainerEl;e+s<i.offsetTop+t?this.listContainerEl.scrollTop=i.offsetTop-e+t:i.offsetTop<s&&(this.listContainerEl.scrollTop=i.offsetTop)},this.comboboxFocusHandler=()=>{this.disabled||this.textInput?.focus()},this.comboboxBlurHandler=i=>{this.setInactiveIfNotContained(i)},this.clearDisabled=!1,this.open=!1,this.disabled=!1,this.form=void 0,this.label=void 0,this.placeholder=void 0,this.placeholderIcon=void 0,this.placeholderIconFlipRtl=!1,this.maxItems=0,this.name=void 0,this.allowCustomValues=void 0,this.overlayPositioning="absolute",this.required=!1,this.selectionMode="multiple",this.scale="m",this.value=null,this.flipPlacements=void 0,this.messages=void 0,this.messageOverrides=void 0,this.selectedItems=[],this.filteredItems=[],this.items=[],this.groupItems=[],this.needsIcon=void 0,this.activeItemIndex=-1,this.activeChipIndex=-1,this.activeDescendant="",this.text="",this.effectiveLocale=void 0,this.defaultMessages=void 0}openHandler(){L(this),this.disabled?this.open=!1:this.setMaxScrollerHeight()}handleDisabledChange(i){i||(this.open=!1)}maxItemsHandler(){this.setMaxScrollerHeight()}overlayPositioningHandler(){this.reposition(!0)}handlePropsChange(){this.updateItems()}valueHandler(i){if(!this.internalValueChangeFlag){const t=this.getItems();Array.isArray(i)?t.forEach((t=>t.selected=i.includes(t.value))):t.forEach(i?t=>t.selected=i===t.value:i=>i.selected=!1),this.updateItems()}}onMessagesChange(){}flipPlacementsHandler(){this.setFilteredPlacements(),this.reposition(!0)}selectedItemsHandler(){this.internalValueChangeFlag=!0,this.value=this.getValue(),this.internalValueChangeFlag=!1}documentClickHandler(i){!this.disabled&&c(i)&&this.setInactiveIfNotContained(i)}calciteComboboxItemChangeHandler(i){if(this.ignoreSelectedEventsFlag)return;const t=i.target,e=this.filteredItems.indexOf(t);this.updateActiveItemIndex(e),this.toggleSelection(t,t.selected)}async reposition(i=!1){const{floatingEl:t,referenceEl:e,placement:s,overlayPositioning:o,filteredFlipPlacements:n}=this;return b(this,{floatingEl:t,referenceEl:e,overlayPositioning:o,placement:s,flipPlacements:n,type:"menu"},i)}async setFocus(){await j(this),this.textInput?.focus(),this.activeChipIndex=-1,this.activeItemIndex=-1}connectedCallback(){k(this),O(this),B(this),I(this),x(this),this.internalValueChangeFlag=!0,this.value=this.getValue(),this.internalValueChangeFlag=!1,this.mutationObserver?.observe(this.el,{childList:!0,subtree:!0}),this.updateItems(),this.setFilteredPlacements(),this.reposition(!0),this.open&&(this.openHandler(),L(this))}async componentWillLoad(){E(this),this.updateItems(),await F(this)}componentDidLoad(){f(this,this.getValue()),this.reposition(!0),A(this)}componentDidRender(){this.el.offsetHeight!==this.inputHeight&&(this.reposition(!0),this.inputHeight=this.el.offsetHeight),C(this)}disconnectedCallback(){this.mutationObserver?.disconnect(),this.resizeObserver?.disconnect(),z(this),$(this),v(this),m(this,this.referenceEl,this.floatingEl),P(this),T(this)}textHandler(){this.updateActiveItemIndex(-1)}effectiveLocaleChange(){D(this,this.effectiveLocale)}clearValue(){this.ignoreSelectedEventsFlag=!0,this.items.forEach((i=>i.selected=!1)),this.ignoreSelectedEventsFlag=!1,this.selectedItems=[],this.emitComboboxChange(),this.open=!1,this.updateActiveItemIndex(-1),this.resetText(),this.filterItems(""),this.setFocus()}clearInputValue(){this.textInput.value="",this.text=""}comboboxInViewport(){const i=this.el.getBoundingClientRect();return i.top>=0&&i.left>=0&&i.right<=(window.innerWidth||document.documentElement.clientWidth)&&i.bottom<=(window.innerHeight||document.documentElement.clientHeight)}onBeforeOpen(){this.scrollToActiveItem(),this.calciteComboboxBeforeOpen.emit()}onOpen(){this.calciteComboboxOpen.emit()}onBeforeClose(){this.calciteComboboxBeforeClose.emit()}onClose(){this.calciteComboboxClose.emit()}ensureRecentSelectedItemIsActive(){const{selectedItems:i}=this,t=0===i.length?0:this.items.indexOf(i[i.length-1]);this.updateActiveItemIndex(t)}getMaxScrollerHeight(){const i=this.getItemsAndGroups().filter((i=>!i.hidden)),{maxItems:t}=this;let e=0,s=0;return i.length>t&&i.forEach((i=>{if(e<t&&t>0){const t=this.calculateSingleItemHeight(i);t>0&&(s+=t,e++)}})),s}calculateSingleItemHeight(i){if(!i)return;let t=i.offsetHeight;return Array.from(i.querySelectorAll(V)).map((i=>i?.offsetHeight)).forEach((i=>{t-=i})),t}getItemsAndGroups(){return[...this.groupItems,...this.items]}toggleSelection(i,t=!i.selected){!i||"single-persist"===this.selectionMode&&i.selected&&i.value===this.value||(this.isMulti()?(i.selected=t,this.updateAncestors(i),this.selectedItems=this.getSelectedItems(),this.emitComboboxChange(),this.resetText(),this.filterItems("")):(this.ignoreSelectedEventsFlag=!0,this.items.forEach((e=>e.selected=e===i&&t)),this.ignoreSelectedEventsFlag=!1,this.selectedItems=this.getSelectedItems(),this.emitComboboxChange(),this.textInput&&(this.textInput.value=i.textLabel),this.open=!1,this.updateActiveItemIndex(-1),this.resetText(),this.filterItems("")))}updateAncestors(i){if("ancestors"!==this.selectionMode)return;const t=Y(i),e=function(i){return a(i.querySelectorAll("calcite-combobox-item"))}(i);i.selected?t.forEach((i=>{i.selected=!0})):(e.forEach((i=>i.selected=!1)),[...t].forEach((i=>{K(i)||(i.selected=!1)})))}getFilteredItems(){return this.items.filter((i=>!i.hidden))}getSelectedItems(){if(!this.isMulti()){const i=this.items.find((({selected:i})=>i));return i?[i]:[]}return this.items.filter((i=>i.selected&&("ancestors"!==this.selectionMode||!K(i)))).sort(((i,t)=>{const e=this.selectedItems.indexOf(i),s=this.selectedItems.indexOf(t);return e>-1&&s>-1?e-s:s-e}))}getData(){return this.items.map((i=>({filterDisabled:i.filterDisabled,value:i.value,label:i.textLabel})))}getNeedsIcon(){return q(this.selectionMode)&&this.items.some((i=>i.icon))}resetText(){this.textInput&&(this.textInput.value=""),this.text=""}getItems(){return Array.from(this.el.querySelectorAll(U)).filter((i=>!i.disabled))}getGroupItems(){return Array.from(this.el.querySelectorAll(G))}addCustomChip(i,t){const e=this.items.find((t=>t.textLabel===i));if(e)this.toggleSelection(e,!0);else{this.isMulti()||this.toggleSelection(this.selectedItems[this.selectedItems.length-1],!1);const e=document.createElement(U);e.value=i,e.textLabel=i,e.selected=!0,this.el.appendChild(e),this.resetText(),t&&this.setFocus(),this.updateItems(),this.filterItems(""),this.emitComboboxChange()}}removeActiveChip(){this.toggleSelection(this.selectedItems[this.activeChipIndex],!1),this.setFocus()}removeLastChip(){this.toggleSelection(this.selectedItems[this.selectedItems.length-1],!1),this.setFocus()}previousChip(){if(this.text)return;const i=this.activeChipIndex;this.activeChipIndex=-1===i?this.selectedItems.length-1:Math.max(i-1,0),this.updateActiveItemIndex(-1),this.focusChip()}nextChip(){if(this.text||-1===this.activeChipIndex)return;const i=this.activeChipIndex+1;i>this.selectedItems.length-1?(this.activeChipIndex=-1,this.setFocus()):(this.activeChipIndex=i,this.focusChip()),this.updateActiveItemIndex(-1)}focusChip(){const i=this.selectedItems[this.activeChipIndex]?.guid;(i?this.referenceEl.querySelector(`#${ii}${i}`):null)?.setFocus()}shiftActiveItemIndex(i){const{length:t}=this.filteredItems;this.updateActiveItemIndex((this.activeItemIndex+t+i)%t),this.scrollToActiveItem()}updateActiveItemIndex(i){this.activeItemIndex=i;let t=null;this.filteredItems.forEach(((e,s)=>{s===i?(e.active=!0,t=`${Z}${e.guid}`):e.active=!1})),this.activeDescendant=t,this.activeItemIndex>-1&&(this.activeChipIndex=-1)}isMulti(){return!q(this.selectionMode)}renderChips(){const{activeChipIndex:t,scale:e,selectionMode:s,messages:o}=this;return this.selectedItems.map(((n,a)=>{const c={chip:!0,"chip--active":t===a},l=[...[...Y(n)].reverse(),n].map((i=>i.textLabel)),r="ancestors"!==s?n.textLabel:l.join(" / ");return i("calcite-chip",{class:c,closable:!0,icon:n.icon,iconFlipRtl:n.iconFlipRtl,id:n.guid?`${ii}${n.guid}`:null,key:n.textLabel,messageOverrides:{dismissLabel:o.removeTag},onCalciteChipClose:()=>this.calciteChipCloseHandler(n),scale:e,title:r,value:n.value},r)}))}renderInput(){const{guid:t,disabled:e,placeholder:s,selectionMode:o,selectedItems:n,open:a}=this,c=q(o),l=n[0],r=!a&&c&&!!l;return i("span",{class:{"input-wrap":!0,"input-wrap--single":c}},r&&i("span",{class:{label:!0,"label--icon":!!l?.icon},key:"label"},l.textLabel),i("input",{"aria-activedescendant":this.activeDescendant,"aria-autocomplete":"list","aria-controls":`${ei}${t}`,"aria-label":H(this),class:{input:!0,"input--single":!0,"input--transparent":this.activeChipIndex>-1,"input--hidden":r,"input--icon":!!this.placeholderIcon},disabled:e,id:`${si}${t}`,key:"input",onBlur:this.comboboxBlurHandler,onFocus:this.comboboxFocusHandler,onInput:this.inputHandler,placeholder:s,type:"text",ref:i=>this.textInput=i}))}renderListBoxOptions(){return this.filteredItems.map((t=>i("li",{"aria-selected":l(t.selected),id:t.guid?`${Z}${t.guid}`:null,role:"option",tabindex:"-1"},t.textLabel)))}renderFloatingUIContainer(){const{setFloatingEl:t,setContainerEl:e,open:s}=this;return i("div",{"aria-hidden":"true",class:{"floating-ui-container":!0,"floating-ui-container--active":s},ref:t},i("div",{class:{"list-container":!0,[u.animation]:!0,[u.animationActive]:s},ref:e},i("ul",{class:{list:!0,"list--hide":!s}},i("slot",null))))}renderIconStart(){const{selectedItems:t,placeholderIcon:e,selectionMode:s,placeholderIconFlipRtl:o}=this,n=t[0],a=n?.icon,c=q(s);return(!this.open&&n?!!a&&c:!!this.placeholderIcon&&(!n||c))&&i("span",{class:"icon-start"},i("calcite-icon",{class:"selected-icon",flipRtl:this.open&&n?n.iconFlipRtl:o,icon:!this.open&&n?a:e,scale:"s"}))}renderIconEnd(){const{open:t}=this;return i("span",{class:"icon-end"},i("calcite-icon",{icon:t?"chevron-up":"chevron-down",scale:"s"}))}render(){const{guid:t,label:e,open:o}=this,n=q(this.selectionMode),a=!this.clearDisabled&&this.value?.length>0;return i(s,{onClick:this.comboboxFocusHandler},i("div",{"aria-autocomplete":"list","aria-controls":`${ei}${t}`,"aria-expanded":l(o),"aria-haspopup":"listbox","aria-label":H(this),"aria-live":"polite","aria-owns":`${ei}${t}`,class:{wrapper:!0,"wrapper--single":n||!this.selectedItems.length,"wrapper--active":o},onClick:this.clickHandler,onKeyDown:this.keyDownHandler,role:"combobox",ref:this.setReferenceEl},i("div",{class:"grid-input"},this.renderIconStart(),!n&&this.renderChips(),i("label",{class:"screen-readers-only",htmlFor:`${si}${t}`,id:`${ti}${t}`},e),this.renderInput()),a?i(Q,{disabled:this.disabled,key:"close-button",label:this.messages.clear,scale:this.scale}):null,this.renderIconEnd()),i("ul",{"aria-labelledby":`${ti}${t}`,"aria-multiselectable":"true",class:"screen-readers-only",id:`${ei}${t}`,role:"listbox",tabIndex:-1},this.renderListBoxOptions()),this.renderFloatingUIContainer(),i(w,{component:this}))}static get assetsDirs(){return["assets"]}get el(){return o(this)}static get watchers(){return{open:["openHandler"],disabled:["handleDisabledChange"],maxItems:["maxItemsHandler"],overlayPositioning:["overlayPositioningHandler"],selectionMode:["handlePropsChange"],scale:["handlePropsChange"],value:["valueHandler"],messageOverrides:["onMessagesChange"],flipPlacements:["flipPlacementsHandler"],selectedItems:["selectedItemsHandler"],text:["textHandler"],effectiveLocale:["effectiveLocaleChange"]}}};oi.style=":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;display:block}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host([scale=s]) .x-button{inline-size:1rem;block-size:1rem}:host([scale=m]) .x-button{inline-size:1.5rem;block-size:1.5rem}:host([scale=l]) .x-button{inline-size:2rem;block-size:2rem}.x-button{margin:0px;display:flex;cursor:pointer;-webkit-appearance:none;appearance:none;align-content:center;align-items:center;justify-content:center;align-self:center;border-width:2px;background-color:transparent;color:var(--calcite-ui-text-3);outline-color:transparent;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;border-radius:50%;border-color:transparent;background-color:var(--calcite-ui-foreground-2)}.x-button:active,.x-button:hover{color:var(--calcite-ui-text-1);background-color:var(--calcite-ui-foreground-3)}.x-button:active{border-style:solid;border-color:var(--calcite-ui-brand)}.x-button calcite-icon{color:inherit}:host([scale=s]){font-size:var(--calcite-font-size--2);--calcite-combobox-item-spacing-unit-l:0.5rem;--calcite-combobox-item-spacing-unit-s:0.25rem;--calcite-combobox-input-height:1rem;--calcite-internal-combobox-input-margin-block:calc(0.25rem - 1px)}:host([scale=s]) .x-button{margin-inline-end:0.5rem}:host([scale=m]){font-size:var(--calcite-font-size--1);--calcite-combobox-item-spacing-unit-l:0.75rem;--calcite-combobox-item-spacing-unit-s:0.5rem;--calcite-combobox-input-height:1rem;--calcite-internal-combobox-input-margin-block:calc(0.5rem - 1px)}:host([scale=m]) .x-button{margin-inline-end:0.75rem}:host([scale=l]){font-size:var(--calcite-font-size-0);--calcite-combobox-item-spacing-unit-l:1rem;--calcite-combobox-item-spacing-unit-s:0.75rem;--calcite-combobox-input-height:1.5rem;--calcite-internal-combobox-input-margin-block:calc(0.625rem - 1px)}:host([scale=l]) .x-button{margin-inline-end:1rem}.wrapper{display:flex;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-1);outline-color:transparent;padding-block:calc(var(--calcite-combobox-item-spacing-unit-s) / 4);padding-inline:var(--calcite-combobox-item-spacing-unit-l)}:host(:focus-within) .wrapper,.wrapper--active{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}.wrapper--single{padding-block:0;padding-inline:var(--calcite-combobox-item-spacing-unit-l);cursor:pointer;flex-wrap:nowrap}.grid-input{display:flex;flex-grow:1;flex-wrap:wrap;align-items:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding:0px}.input{flex-grow:1;-webkit-appearance:none;appearance:none;border-style:none;background-color:transparent;padding:0px;font-family:inherit;color:var(--calcite-ui-text-1);font-size:inherit;block-size:var(--calcite-combobox-input-height);line-height:var(--calcite-combobox-input-height);min-inline-size:120px;margin-block-end:var(--calcite-combobox-item-spacing-unit-s)}.input:focus{outline:2px solid transparent;outline-offset:2px}.input--transparent{opacity:0}.input--single{padding:0px;margin-block:var(--calcite-internal-combobox-input-margin-block)}.wrapper--active .input-single{cursor:text}.input--hidden{pointer-events:none;inline-size:0px;min-inline-size:0px;opacity:0}.input--icon{padding-block:0;padding-inline:var(--calcite-combobox-item-spacing-unit-l)}.input-wrap{display:flex;flex-grow:1;align-items:center}.input-wrap--single{flex:1 1 0%;overflow:hidden}.label{pointer-events:none;display:flex;max-inline-size:100%;flex:1 1 auto;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding:0px;font-weight:var(--calcite-font-weight-normal);block-size:var(--calcite-combobox-input-height);line-height:var(--calcite-combobox-input-height)}.label--icon{padding-inline:var(--calcite-combobox-item-spacing-unit-l)}.icon-end,.icon-start{display:flex;inline-size:1rem;cursor:pointer;align-items:center}.icon-end{flex:none}.floating-ui-container{--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown);display:block;position:absolute;z-index:var(--calcite-floating-ui-z-index);visibility:hidden}.floating-ui-container .calcite-floating-ui-anim{position:relative;transition:var(--calcite-floating-ui-transition);transition-property:transform, visibility, opacity;opacity:0;box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);z-index:var(--calcite-app-z-index);border-radius:0.25rem}.floating-ui-container[data-placement^=bottom] .calcite-floating-ui-anim{transform:translateY(-5px)}.floating-ui-container[data-placement^=top] .calcite-floating-ui-anim{transform:translateY(5px)}.floating-ui-container[data-placement^=left] .calcite-floating-ui-anim{transform:translateX(5px)}.floating-ui-container[data-placement^=right] .calcite-floating-ui-anim{transform:translateX(-5px)}.floating-ui-container[data-placement] .calcite-floating-ui-anim--active{opacity:1;transform:translate(0)}.floating-ui-container--active{visibility:visible}@media (forced-colors: active){.wrapper,.floating-ui-container--active{border:1px solid canvasText}}.screen-readers-only{position:absolute;inline-size:1px;block-size:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.list-container{max-block-size:45vh;overflow-y:auto;background-color:var(--calcite-ui-foreground-1);inline-size:var(--calcite-dropdown-width)}.list{margin:0px;display:block;padding:0px}.list--hide{block-size:0px;overflow:hidden}.chip{margin-block:calc(var(--calcite-combobox-item-spacing-unit-s) / 4);margin-inline:0 var(--calcite-combobox-item-spacing-unit-s);max-inline-size:100%}.chip--active{background-color:var(--calcite-ui-foreground-3)}.item{display:block}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}:host([hidden]){display:none}[hidden]{display:none}::slotted(calcite-combobox-item-group:not(:first-child)){padding-block-start:var(--calcite-combobox-item-spacing-unit-l)}";const ni="icon",ai="icon--active",ci="icon--indent",li=class{constructor(i){t(this,i),this.calciteComboboxItemChange=e(this,"calciteComboboxItemChange",6),this.itemClickHandler=i=>{i.preventDefault(),this.toggleSelected()},this.disabled=!1,this.selected=!1,this.active=!1,this.ancestors=void 0,this.guid=y(),this.icon=void 0,this.iconFlipRtl=!1,this.textLabel=void 0,this.value=void 0,this.filterDisabled=void 0,this.selectionMode="multiple",this.scale="m"}selectedWatchHandler(){this.calciteComboboxItemChange.emit()}connectedCallback(){this.ancestors=W(this.el),S(this),k(this)}disconnectedCallback(){X(this),z(this)}componentDidRender(){C(this)}toggleSelected(){this.disabled||"single-persist"===this.selectionMode&&this.selected||(this.selected=!this.selected)}renderIcon(t){return this.icon?i("calcite-icon",{class:{"icon--custom":!!this.icon,[ai]:this.icon&&this.selected,[ci]:!0},flipRtl:this.iconFlipRtl,icon:this.icon||t,key:"icon",scale:_(this.scale)}):null}renderSelectIndicator(t,e){return t?i("span",{class:{[ni]:!0,"icon--dot":!0,[ci]:!0}}):i("calcite-icon",{class:{[ni]:!0,[ai]:this.selected,[ci]:!0},flipRtl:this.iconFlipRtl,icon:e,key:"indicator",scale:_(this.scale)})}renderChildren(){return r(this.el)?i("ul",{key:"default-slot-container"},i("slot",null)):null}render(){const t=q(this.selectionMode),e=t&&!this.disabled,o=this.disabled?"circle-disallowed":t?"dot":"check",n={label:!0,"label--selected":this.selected,"label--active":this.active,"label--single":t},a=N(this.el);return i(s,{"aria-hidden":"true"},i("div",{class:`container scale--${this.scale}`,style:{"--calcite-combobox-item-spacing-indent-multiplier":`${a}`}},i("li",{class:n,id:this.guid,onClick:this.itemClickHandler},this.renderSelectIndicator(e,o),this.renderIcon(o),i("span",{class:"title"},this.textLabel)),this.renderChildren()))}get el(){return o(this)}static get watchers(){return{selected:["selectedWatchHandler"]}}};li.style='@charset "UTF-8";:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host([hidden]){display:none}[hidden]{display:none}.scale--s{font-size:var(--calcite-font-size--2);line-height:1rem;--calcite-combobox-item-spacing-unit-l:0.5rem;--calcite-combobox-item-spacing-unit-s:0.25rem;--calcite-combobox-item-spacing-indent:0.5rem;--calcite-combobox-item-selector-icon-size:1rem}.scale--m{font-size:var(--calcite-font-size--1);line-height:1rem;--calcite-combobox-item-spacing-unit-l:0.75rem;--calcite-combobox-item-spacing-unit-s:0.5rem;--calcite-combobox-item-spacing-indent:0.75rem;--calcite-combobox-item-selector-icon-size:1rem}.scale--l{font-size:var(--calcite-font-size-0);line-height:1.25rem;--calcite-combobox-item-spacing-unit-l:1rem;--calcite-combobox-item-spacing-unit-s:0.625rem;--calcite-combobox-item-spacing-indent:1rem;--calcite-combobox-item-selector-icon-size:1.5rem}.container{--calcite-combobox-item-indent-value:calc(\n    var(--calcite-combobox-item-spacing-indent) * var(--calcite-combobox-item-spacing-indent-multiplier)\n  )}:host(:focus){--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host,ul{margin:0px;display:flex;flex-direction:column;padding:0px}:host(:focus),ul:focus{outline:2px solid transparent;outline-offset:2px}.label{position:relative;box-sizing:border-box;display:flex;inline-size:100%;min-inline-size:100%;cursor:pointer;align-items:center;color:var(--calcite-ui-text-3);text-decoration-line:none;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);outline-color:transparent;word-wrap:break-word;word-break:break-word;padding-block:var(--calcite-combobox-item-spacing-unit-s);padding-inline:var(--calcite-combobox-item-spacing-unit-l)}:host([disabled]) .label{cursor:default}.label--selected{font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1)}.label--active{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}.label:hover,.label:active{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1);text-decoration-line:none;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.title{padding-block:0;padding-inline:var(--calcite-combobox-item-spacing-unit-l)}.icon{display:inline-flex;opacity:0;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);color:var(--calcite-ui-border-1)}.icon--indent{padding-inline-start:var(--calcite-combobox-item-indent-value)}.icon--custom{margin-block-start:-1px;padding-inline-start:var(--calcite-combobox-item-spacing-unit-l);color:var(--calcite-ui-text-3)}.icon--active{color:var(--calcite-ui-text-1)}.icon--dot{display:flex;justify-content:center;min-inline-size:var(--calcite-combobox-item-selector-icon-size)}.icon--dot:before{text-align:start;content:"•"}.label--active .icon{opacity:1}.label--selected .icon{opacity:1;color:var(--calcite-ui-brand)}:host(:hover[disabled]) .icon{opacity:1}';const ri=class{constructor(i){t(this,i),this.guid=y(),this.afterEmptyGroup=!1,this.ancestors=void 0,this.label=void 0,this.scale="m"}connectedCallback(){this.ancestors=W(this.el)}render(){const{el:t,scale:e}=this,s=N(t);return i("ul",{"aria-labelledby":this.guid,class:{list:!0,[`scale--${e}`]:!0},role:"group"},i("li",{class:{label:!0},id:this.guid,role:"presentation",style:{"--calcite-combobox-item-spacing-indent-multiplier":`${s}`}},i("span",{class:"title"},this.label)),i("slot",null))}get el(){return o(this)}};ri.style=".scale--s{font-size:var(--calcite-font-size--2);line-height:1rem;--calcite-combobox-item-spacing-unit-l:0.5rem;--calcite-combobox-item-spacing-unit-s:0.25rem;--calcite-combobox-item-spacing-indent:0.5rem}.scale--m{font-size:var(--calcite-font-size--1);line-height:1rem;--calcite-combobox-item-spacing-unit-l:0.75rem;--calcite-combobox-item-spacing-unit-s:0.5rem;--calcite-combobox-item-spacing-indent:0.75rem}.scale--l{font-size:var(--calcite-font-size-0);line-height:1.25rem;--calcite-combobox-item-spacing-unit-l:1rem;--calcite-combobox-item-spacing-unit-s:0.75rem;--calcite-combobox-item-spacing-indent:1rem}:host,.list{margin:0px;display:flex;flex-direction:column;padding:0px}:host(:focus),.list:focus{outline:2px solid transparent;outline-offset:2px}.label{box-sizing:border-box;display:flex;inline-size:100%;min-inline-size:0px;max-inline-size:100%;color:var(--calcite-ui-text-3)}.title{--calcite-combobox-item-indent-value:calc(\n    var(--calcite-combobox-item-spacing-indent) * var(--calcite-combobox-item-spacing-indent-multiplier)\n  );border:0 solid;display:block;flex:1 1 0%;border-block-end-width:1px;font-weight:var(--calcite-font-weight-bold);color:var(--calcite-ui-text-2);word-wrap:break-word;word-break:break-word;border-block-end-color:var(--calcite-ui-border-3);padding-block:var(--calcite-combobox-item-spacing-unit-l);padding-inline:var(--calcite-combobox-item-spacing-unit-s);margin-inline-start:var(--calcite-combobox-item-indent-value)}::slotted(calcite-combobox-item-group:not([after-empty-group])){padding-block-start:var(--calcite-combobox-item-spacing-unit-l)}:host([hidden]){display:none}[hidden]{display:none}";export{oi as calcite_combobox,li as calcite_combobox_item,ri as calcite_combobox_item_group}