System.register(["./p-debd485c.system.js"],(function(e){"use strict";var t,i,o,a;return{setters:[function(e){t=e.r;i=e.h;o=e.H;a=e.g}],execute:function(){var s=":host([hidden]){display:none}:host{max-width:100vw}:host([layout=horizontal]){display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}:host([hidden]){display:none}";var n=e("calcite_radio_button_group",function(){function e(e){var i=this;t(this,e);this.disabled=false;this.hidden=false;this.layout="horizontal";this.required=false;this.scale="m";this.theme="light";this.passPropsToRadioButtons=function(){var e=i.el.querySelectorAll("calcite-radio-button");var t;if(e.length>0){e.forEach((function(e){e.disabled=i.disabled;e.hidden=i.hidden;e.name=i.name;e.required=i.required;e.scale=i.scale;e.theme=i.theme;if(t){e.checked=false}else if(e.checked){t=e}return e}))}}}e.prototype.onDisabledChange=function(){this.passPropsToRadioButtons()};e.prototype.onHiddenChange=function(){this.passPropsToRadioButtons()};e.prototype.validateLayout=function(e){var t=["horizontal","vertical"];if(!t.includes(e)){this.layout="horizontal";this.passPropsToRadioButtons()}};e.prototype.validateScale=function(e){var t=["s","m","l"];if(!t.includes(e)){this.scale="m";this.passPropsToRadioButtons()}};e.prototype.validateTheme=function(e){var t=["light","dark"];if(!t.includes(e)){this.theme="light";this.passPropsToRadioButtons()}};e.prototype.componentWillLoad=function(){this.validateLayout(this.layout);this.validateScale(this.scale);this.validateTheme(this.theme);this.passPropsToRadioButtons()};e.prototype.render=function(){return i(o,{role:"radiogroup"},i("slot",null))};Object.defineProperty(e.prototype,"el",{get:function(){return a(this)},enumerable:false,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{disabled:["onDisabledChange"],hidden:["onHiddenChange"],layout:["validateLayout"],scale:["validateScale"],theme:["validateTheme"]}},enumerable:false,configurable:true});return e}());n.style=s}}}));