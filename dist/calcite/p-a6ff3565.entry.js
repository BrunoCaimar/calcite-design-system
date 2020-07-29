import{r as t,h as i,H as s,g as a}from"./p-1c20d919.js";const h=class{constructor(i){t(this,i),this.disabled=!1,this.hidden=!1,this.layout="horizontal",this.required=!1,this.scale="m",this.theme="light",this.passPropsToRadioButtons=()=>{const t=this.el.querySelectorAll("calcite-radio-button");let i;t.length>0&&t.forEach(t=>(t.disabled=this.disabled,t.hidden=this.hidden,t.name=this.name,t.required=this.required,t.scale=this.scale,t.theme=this.theme,i?t.checked=!1:t.checked&&(i=t),t))}}onDisabledChange(){this.passPropsToRadioButtons()}onHiddenChange(){this.passPropsToRadioButtons()}validateLayout(t){["horizontal","vertical"].includes(t)||(this.layout="horizontal",this.passPropsToRadioButtons())}validateScale(t){["s","m","l"].includes(t)||(this.scale="m",this.passPropsToRadioButtons())}validateTheme(t){["light","dark"].includes(t)||(this.theme="light",this.passPropsToRadioButtons())}componentWillLoad(){this.validateLayout(this.layout),this.validateScale(this.scale),this.validateTheme(this.theme),this.passPropsToRadioButtons()}render(){return i(s,{role:"radiogroup"},i("slot",null))}get el(){return a(this)}static get watchers(){return{disabled:["onDisabledChange"],hidden:["onHiddenChange"],layout:["validateLayout"],scale:["validateScale"],theme:["validateTheme"]}}};h.style=":host([hidden]){display:none}:host{max-width:100vw}:host([layout=horizontal]){display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}:host([hidden]){display:none}";export{h as calcite_radio_button_group}