import{r as t,c as e,h as i,H as o,g as s}from"./p-1c20d919.js";import{a as r,h as a,g as l}from"./p-9c90d370.js";import{g as n}from"./p-569a5c63.js";const c=class{constructor(i){t(this,i),this.calciteRadioGroupChange=e(this,"calciteRadioGroupChange",7),this.appearance="solid",this.layout="horizontal",this.width="auto",this.hiddenInput=(()=>{const t=document.createElement("input");return t.type="hidden",this.el.appendChild(t),t})()}handleNameChange(t){this.hiddenInput.name=t}handleSelectedItemChange(t,e){if(t===e)return;const i=this.getItems(),o=Array.from(i).filter(e=>e===t).pop();o?(this.selectItem(o),this.calciteRadioGroupChange.emit()):i[0]&&(i[0].tabIndex=0)}connectedCallback(){["s","m","l"].includes(this.scale)||(this.scale=r(this.el.parentElement,"scale","m")),["solid","outline"].includes(this.appearance)||(this.appearance="solid"),["horizontal","vertical"].includes(this.layout)||(this.layout="horizontal"),["auto","full"].includes(this.width)||(this.width="auto");const t=this.getItems();let e=Array.from(t).filter(t=>t.checked).pop();e?this.selectItem(e):t[0]&&(t[0].tabIndex=0);const{hiddenInput:i,name:o}=this;o&&(i.name=o),e&&(i.value=e.value)}componentDidLoad(){this.hasLoaded=!0}render(){return i(o,{role:"radiogroup"},i("slot",null))}handleLabelFocus(t){a(t.detail.labelEl,this.el)&&this.setFocus()}handleClick(t){"calcite-radio-group-item"===t.target.localName&&this.selectItem(t.target)}handleSelected(t){this.hasLoaded&&(t.stopPropagation(),t.preventDefault(),this.selectItem(t.target))}handleKeyDown(t){const e=n(t.key),{el:i,selectedItem:o}=this;if(-1===["ArrowLeft","ArrowUp","ArrowRight","ArrowDown"," "].indexOf(e))return;let s=e;"rtl"===l(i)&&("ArrowRight"===e&&(s="ArrowLeft"),"ArrowLeft"===e&&(s="ArrowRight"));const r=this.getItems();let a=-1;switch(r.forEach((t,e)=>{t===o&&(a=e)}),s){case"ArrowLeft":case"ArrowUp":t.preventDefault();const e=r.item(a<1?r.length-1:a-1);return void this.selectItem(e);case"ArrowRight":case"ArrowDown":t.preventDefault();const i=-1===a?r.item(1):r.item(a+1)||r.item(0);return void this.selectItem(i);case" ":return t.preventDefault(),void this.selectItem(t.target);default:return}}async setFocus(){var t;null===(t=this.selectedItem||this.getItems()[0])||void 0===t||t.focus()}getItems(){return this.el.querySelectorAll("calcite-radio-group-item")}selectItem(t){if(t===this.selectedItem)return;const e=this.getItems();let i=null;e.forEach(e=>{const o=e.value===t.value;(o&&!e.checked||!o&&e.checked)&&(e.checked=o),e.tabIndex=o?0:-1,o&&(i=e)}),this.selectedItem=i,this.syncWithInputProxy(i),i&&i.focus()}syncWithInputProxy(t){this.hiddenInput.value=t?t.value:""}get el(){return s(this)}static get watchers(){return{name:["handleNameChange"],selectedItem:["handleSelectedItemChange"]}}};c.style=":host([hidden]){display:none}:host{display:-ms-flexbox;display:flex;margin-top:0.25rem}:host([layout=vertical]){-ms-flex-direction:column;flex-direction:column;-ms-flex-align:start;align-items:start;-ms-flex-item-align:start;align-self:flex-start}:host([width=auto]){width:auto}:host([width=full]){width:100%;display:-ms-flexbox;display:flex}:host([width=full]) ::slotted(calcite-radio-group-item){-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-pack:center;justify-content:center}:host([width=full][layout=vertical]) ::slotted(calcite-radio-group-item){-ms-flex-pack:start;justify-content:start}::slotted(calcite-radio-group-item[checked]),::slotted(calcite-radio-group-item:focus){z-index:0}";const h=class{constructor(i){t(this,i),this.calciteRadioGroupItemChange=e(this,"calciteRadioGroupItemChange",7),this.checked=!1,this.iconPosition="start",this.mutationObserver=this.getMutationObserver()}handleCheckedChange(){this.calciteRadioGroupItemChange.emit(),this.syncToExternalInput()}connectedCallback(){let t=this.el.querySelector('input[slot="input"]');t&&(this.value=t.value,this.checked=t.checked,this.mutationObserver.observe(t,{attributes:!0})),this.inputProxy=t,null===this.icon||["start","end"].includes(this.iconPosition)||(this.iconPosition="start")}disconnectedCallback(){this.mutationObserver.disconnect()}componentWillLoad(){const t=this.el.querySelector("label");this.useFallback=!t||""===t.textContent}render(){const{checked:t,useFallback:e,value:s}=this,a=r(this.el,"scale","m"),l=r(this.el,"appearance","m"),n=r(this.el,"layout","m"),c=i("calcite-icon",{class:"radio-group-item-icon",icon:this.icon,scale:"s"});return i(o,{role:"radio","aria-checked":t.toString(),scale:a,appearance:l,layout:n},i("label",null,this.icon&&"start"===this.iconPosition?c:null,i("slot",null,e?s:""),i("slot",{name:"input"}),this.icon&&"end"===this.iconPosition?c:null))}getMutationObserver(){return new MutationObserver(()=>this.syncFromExternalInput())}syncFromExternalInput(){this.inputProxy&&(this.value=this.inputProxy.value,this.checked=this.inputProxy.checked)}syncToExternalInput(){this.inputProxy&&(this.inputProxy.value=this.value,this.checked?this.inputProxy.setAttribute("checked","true"):this.inputProxy.removeAttribute("checked"))}get el(){return s(this)}static get watchers(){return{checked:["handleCheckedChange"]}}};h.style=":host([hidden]){display:none}:host-context([theme=dark]){--calcite-ui-blue-1:#00A0FF;--calcite-ui-blue-2:#0087D7;--calcite-ui-blue-3:#47BBFF;--calcite-ui-green-1:#36DA43;--calcite-ui-green-2:#11AD1D;--calcite-ui-green-3:#44ED51;--calcite-ui-yellow-1:#FFC900;--calcite-ui-yellow-2:#F4B000;--calcite-ui-yellow-3:#FFE24D;--calcite-ui-red-1:#FE583E;--calcite-ui-red-2:#F3381B;--calcite-ui-red-3:#FF7465;--calcite-ui-background:#202020;--calcite-ui-foreground-1:#2b2b2b;--calcite-ui-foreground-2:#353535;--calcite-ui-foreground-3:#404040;--calcite-ui-text-1:#ffffff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-4:#757575;--calcite-ui-border-5:#9f9f9f}:host{display:-ms-flexbox;display:flex;-ms-flex-item-align:stretch;align-self:stretch;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-3);cursor:pointer;line-height:1.25;margin:0 -1px 0 0;border:1px solid var(--calcite-ui-border-1);-webkit-box-shadow:inset 0 0 0 1px transparent;box-shadow:inset 0 0 0 1px transparent;-webkit-box-sizing:border-box;box-sizing:border-box;font-weight:400;-webkit-transition:background 0.1s ease-in-out, border-color 0.1s ease-in-out;transition:background 0.1s ease-in-out, border-color 0.1s ease-in-out;cursor:pointer}:host([layout=vertical]){margin:0 0 -1px 0}:host{outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}:host(:focus){outline:2px solid var(--calcite-ui-blue-1);outline-offset:2px}:host([scale=s]){font-size:0.8125rem;line-height:1.5;padding:0.25rem 0.75rem}:host([scale=m]){font-size:0.9375rem;line-height:1.5;padding:0.4rem 1rem}:host([scale=l]){font-size:1rem;line-height:1.5;padding:0.5rem 1.5rem}:host(:hover){background-color:var(--calcite-ui-foreground-2)}:host(:active){background-color:var(--calcite-ui-foreground-3)}:host([checked]){background-color:var(--calcite-ui-blue-1);border-color:var(--calcite-ui-blue-1);color:var(--calcite-ui-background);cursor:default}:host([appearance=outline][checked]){background-color:var(--calcite-ui-foreground-1);border-color:var(--calcite-ui-blue-1);-webkit-box-shadow:inset 0 0 0 1px var(--calcite-ui-blue-1);box-shadow:inset 0 0 0 1px var(--calcite-ui-blue-1);color:var(--calcite-ui-blue-1)}label{pointer-events:none;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}::slotted(input){display:none}.radio-group-item-icon{display:-ms-inline-flexbox;display:inline-flex;position:relative;margin:0;line-height:inherit;-webkit-transition:150ms ease-in-out;transition:150ms ease-in-out}:host([icon-position=start]) .radio-group-item-icon{margin-right:0.5rem}:host([icon-position=start][dir=rtl]) .radio-group-item-icon{margin-right:0;margin-left:0.5rem}:host([icon-position=end]) .radio-group-item-icon{margin-left:0.5rem}:host([icon-position=end][dir=rtl]) .radio-group-item-icon{margin-left:0;margin-right:0.5rem}";export{c as calcite_radio_group,h as calcite_radio_group_item}