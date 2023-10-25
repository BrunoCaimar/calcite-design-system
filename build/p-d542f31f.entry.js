/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.10.0-next.7
 */
import{r as t,h as i,a,f as e,c as s,H as h}from"./p-bac89e07.js";import{g as l}from"./p-e501a2ab.js";import{c as n}from"./p-31c09125.js";import{i as r,v as o}from"./p-d8a3e693.js";import{c,d,a as u,H as m}from"./p-6c77c2e4.js";import{c as b,d as p,u as v}from"./p-5de20205.js";import{i as f}from"./p-59cdfef8.js";import{c as g,d as x,g as k}from"./p-53177d47.js";import{s as _,a as $,c as y}from"./p-b155bab4.js";import{n as w,c as V,d as z}from"./p-6e222163.js";import{d as M,c as L}from"./p-840394d1.js";import"./p-fe45786d.js";import"./p-ba408deb.js";function D(t,i,a){const e=i[0]-t[0];return e?(3*(i[1]-t[1])/e-a)/2:a}function F(t,i,a,e,s){const[h,l]=t,[n,r]=i,o=(n-h)/3;return`C ${s([h+o,l+o*a]).join(",")} ${s([n-o,r-o*e]).join(",")} ${s([n,r]).join(",")}`}const H=class{constructor(i){t(this,i),this.graphId=`calcite-graph-${l()}`,this.resizeObserver=n("resize",(()=>e(this))),this.data=[],this.colorStops=void 0,this.highlightMin=void 0,this.highlightMax=void 0,this.min=void 0,this.max=void 0}connectedCallback(){this.resizeObserver?.observe(this.el)}disconnectedCallback(){this.resizeObserver?.disconnect()}render(){const{data:t,colorStops:a,el:e,highlightMax:s,highlightMin:h,min:l,max:n}=this,r=this.graphId,{clientHeight:o,clientWidth:c}=e;if(!t||0===t.length)return i("svg",{"aria-hidden":"true",class:"svg",height:o,preserveAspectRatio:"none",viewBox:`0 0 ${c} ${o}`,width:c});const{min:d,max:u}=function(t){const[i,a]=t[0];return t.reduce((({min:t,max:i},[a,e])=>({min:[Math.min(t[0],a),Math.min(t[1],e)],max:[Math.max(i[0],a),Math.max(i[1],e)]})),{min:[i,a],max:[i,a]})}(t);let m=d,b=u;(l<d[0]||l>d[0])&&(m=[l,0]),(n>u[0]||n<u[0])&&(b=[n,u[1]]);const p=function({width:t,height:i,min:a,max:e}){const s=e[0]-a[0],h=e[1]-a[1];return e=>[(e[0]-a[0])/s*t,i-e[1]/h*i]}({min:m,max:b,width:c,height:o}),[v]=p([h,b[1]]),[f]=p([s,b[1]]),g=function({data:t,min:i,max:a,t:e}){if(0===t.length)return"";const[s,h]=e(t[0]),[l,n]=e(i),[r]=e(a);let o,c,d;const u=t.reduce(((i,a,s)=>{if(c=t[s-2],d=t[s-1],s>1){const t=function(t,i,a){const e=i[0]-t[0],s=a[0]-i[0],h=(i[1]-t[1])/(e||s<0&&0),l=(a[1]-i[1])/(s||e<0&&0),n=(h*s+l*e)/(e+s);return(Math.sign(h)+Math.sign(l))*Math.min(Math.abs(h),Math.abs(l),.5*Math.abs(n))||0}(c,d,a),s=void 0===o?D(c,d,t):o,h=F(c,d,s,t,e);return o=t,`${i} ${h}`}return i}),`M ${l},${n} L ${l},${h} L ${s},${h}`),m=t[t.length-1];return`${u} ${F(d,m,o,D(d,m,o),e)} L ${r},${n} Z`}({data:t,min:d,max:u,t:p}),x=a?`url(#linear-gradient-${r})`:void 0;return i("svg",{"aria-hidden":"true",class:"svg",height:o,preserveAspectRatio:"none",viewBox:`0 0 ${c} ${o}`,width:c},a?i("defs",null,i("linearGradient",{id:`linear-gradient-${r}`,x1:"0",x2:"1",y1:"0",y2:"0"},a.map((({offset:t,color:a,opacity:e})=>i("stop",{offset:100*t+"%","stop-color":a,"stop-opacity":e}))))):null,void 0!==h?[i("mask",{height:"100%",id:`${r}1`,width:"100%",x:"0%",y:"0%"},i("path",{d:`\n            M 0,0\n            L ${v-1},0\n            L ${v-1},${o}\n            L 0,${o}\n            Z\n          `,fill:"white"})),i("mask",{height:"100%",id:`${r}2`,width:"100%",x:"0%",y:"0%"},i("path",{d:`\n            M ${v+1},0\n            L ${f-1},0\n            L ${f-1},${o}\n            L ${v+1}, ${o}\n            Z\n          `,fill:"white"})),i("mask",{height:"100%",id:`${r}3`,width:"100%",x:"0%",y:"0%"},i("path",{d:`\n                M ${f+1},0\n                L ${c},0\n                L ${c},${o}\n                L ${f+1}, ${o}\n                Z\n              `,fill:"white"})),i("path",{class:"graph-path",d:g,fill:x,mask:`url(#${r}1)`}),i("path",{class:"graph-path--highlight",d:g,fill:x,mask:`url(#${r}2)`}),i("path",{class:"graph-path",d:g,fill:x,mask:`url(#${r}3)`})]:i("path",{class:"graph-path",d:g,fill:x}))}get el(){return a(this)}};H.style=":host{display:block;block-size:100%}.svg{fill:currentColor;stroke:transparent;margin:0px;display:block;block-size:100%;inline-size:100%;padding:0px}.svg .graph-path--highlight{fill:var(--calcite-ui-brand);opacity:0.5}:host([hidden]){display:none}[hidden]{display:none}";const j="handle__label";function P(t){return Array.isArray(t)}const X=class{constructor(i){t(this,i),this.calciteSliderInput=s(this,"calciteSliderInput",6),this.calciteSliderChange=s(this,"calciteSliderChange",6),this.activeProp="value",this.guid=`calcite-slider-${l()}`,this.dragUpdate=t=>{if(!this.disabled&&(t.preventDefault(),this.dragProp)){const i=this.translate(t.clientX||t.pageX);if(P(this.value)&&"minMaxValue"===this.dragProp)if(this.minValueDragRange&&this.maxValueDragRange&&this.minMaxValueRange){const t=i-this.minValueDragRange,a=i+this.maxValueDragRange;a<=this.max&&t>=this.min&&a-t===this.minMaxValueRange&&this.setValue({minValue:this.clamp(t,"minValue"),maxValue:this.clamp(a,"maxValue")})}else this.minValueDragRange=i-this.minValue,this.maxValueDragRange=this.maxValue-i,this.minMaxValueRange=this.maxValue-this.minValue;else this.setValue({[this.dragProp]:this.clamp(i,this.dragProp)})}},this.pointerUpDragEnd=t=>{!this.disabled&&r(t)&&this.dragEnd(t)},this.dragEnd=t=>{this.disabled||(this.removeDragListeners(),this.focusActiveHandle(t.clientX),this.lastDragPropValue!=this[this.dragProp]&&this.emitChange(),this.dragProp=null,this.lastDragPropValue=null,this.minValueDragRange=null,this.maxValueDragRange=null,this.minMaxValueRange=null)},this.storeTrackRef=t=>{this.trackEl=t},this.determineGroupSeparator=t=>{if("number"==typeof t)return w.numberFormatOptions={locale:this.effectiveLocale,numberingSystem:this.numberingSystem,useGrouping:this.groupSeparator},w.localize(t.toString())},this.disabled=!1,this.form=void 0,this.groupSeparator=!1,this.hasHistogram=!1,this.histogram=void 0,this.histogramStops=void 0,this.labelHandles=!1,this.labelTicks=!1,this.max=100,this.maxLabel=void 0,this.maxValue=void 0,this.min=0,this.minLabel=void 0,this.minValue=void 0,this.mirrored=!1,this.name=void 0,this.numberingSystem=void 0,this.pageStep=void 0,this.precise=!1,this.required=!1,this.snap=!1,this.step=1,this.ticks=void 0,this.value=0,this.scale="m",this.effectiveLocale="",this.minMaxValueRange=null,this.minValueDragRange=null,this.maxValueDragRange=null,this.tickValues=[]}histogramWatcher(t){this.hasHistogram=!!t}ticksWatcher(){this.tickValues=this.generateTickValues()}valueHandler(){this.setMinMaxFromValue()}minMaxValueHandler(){this.setValueFromMinMax()}connectedCallback(){b(this),V(this),this.setMinMaxFromValue(),this.setValueFromMinMax(),g(this),c(this)}disconnectedCallback(){p(this),x(this),d(this),z(this),this.removeDragListeners()}componentWillLoad(){_(this),P(this.value)||(this.value=this.snap?this.getClosestStep(this.value):this.clamp(this.value)),this.ticksWatcher(),this.histogramWatcher(this.histogram),u(this,this.value)}componentDidLoad(){$(this)}componentDidRender(){this.labelHandles&&(this.adjustHostObscuredHandleLabel("value"),P(this.value)&&(this.adjustHostObscuredHandleLabel("minValue"),this.precise&&!this.hasHistogram||this.hyphenateCollidingRangeHandleLabels())),this.hideObscuredBoundingTickLabels(),v(this)}render(){const t=this.el.id||this.guid,a=P(this.value)?"maxValue":"value",e=P(this.value)?this.maxValue:this.value,s=this.determineGroupSeparator(e),l=this.determineGroupSeparator(this.minValue),n=this.minValue||this.min,r=this.shouldUseMinValue(),o=100*this.getUnitInterval(r?this.minValue:n),c=100*this.getUnitInterval(e),d=this.shouldMirror(),u=`${d?100-o:o}%`,b=`${d?c:100-c}%`,p=P(this.value),v=`${j} handle__label--minValue`,f=`${j} handle__label--value`,g=i("div",{"aria-disabled":this.disabled,"aria-label":p?this.maxLabel:this.minLabel,"aria-orientation":"horizontal","aria-valuemax":this.max,"aria-valuemin":this.min,"aria-valuenow":e,class:{thumb:!0,"thumb--value":!0,"thumb--active":"minMaxValue"!==this.lastDragProp&&this.dragProp===a},onBlur:()=>this.activeProp=null,onFocus:()=>this.activeProp=a,onPointerDown:t=>this.pointerDownDragStart(t,a),role:"slider",style:{right:b},tabIndex:0,ref:t=>this.maxHandle=t},i("div",{class:"handle"})),x=i("div",{"aria-disabled":this.disabled,"aria-label":p?this.maxLabel:this.minLabel,"aria-orientation":"horizontal","aria-valuemax":this.max,"aria-valuemin":this.min,"aria-valuenow":e,class:{thumb:!0,"thumb--value":!0,"thumb--active":"minMaxValue"!==this.lastDragProp&&this.dragProp===a},onBlur:()=>this.activeProp=null,onFocus:()=>this.activeProp=a,onPointerDown:t=>this.pointerDownDragStart(t,a),role:"slider",style:{right:b},tabIndex:0,ref:t=>this.maxHandle=t},i("span",{"aria-hidden":"true",class:f},s),i("span",{"aria-hidden":"true",class:`${f} static`},s),i("span",{"aria-hidden":"true",class:`${f} transformed`},s),i("div",{class:"handle"})),_=i("div",{"aria-disabled":this.disabled,"aria-label":p?this.maxLabel:this.minLabel,"aria-orientation":"horizontal","aria-valuemax":this.max,"aria-valuemin":this.min,"aria-valuenow":e,class:{thumb:!0,"thumb--value":!0,"thumb--active":"minMaxValue"!==this.lastDragProp&&this.dragProp===a},onBlur:()=>this.activeProp=null,onFocus:()=>this.activeProp=a,onPointerDown:t=>this.pointerDownDragStart(t,a),role:"slider",style:{right:b},tabIndex:0,ref:t=>this.maxHandle=t},i("div",{class:"handle"}),i("span",{"aria-hidden":"true",class:f},s),i("span",{"aria-hidden":"true",class:`${f} static`},s),i("span",{"aria-hidden":"true",class:`${f} transformed`},s)),$=i("div",{"aria-disabled":this.disabled,"aria-label":p?this.maxLabel:this.minLabel,"aria-orientation":"horizontal","aria-valuemax":this.max,"aria-valuemin":this.min,"aria-valuenow":e,class:{thumb:!0,"thumb--value":!0,"thumb--active":"minMaxValue"!==this.lastDragProp&&this.dragProp===a,"thumb--precise":!0},onBlur:()=>this.activeProp=null,onFocus:()=>this.activeProp=a,onPointerDown:t=>this.pointerDownDragStart(t,a),role:"slider",style:{right:b},tabIndex:0,ref:t=>this.maxHandle=t},i("div",{class:"handle"}),i("div",{class:"handle-extension"})),y=i("div",{"aria-disabled":this.disabled,"aria-label":p?this.maxLabel:this.minLabel,"aria-orientation":"horizontal","aria-valuemax":this.max,"aria-valuemin":this.min,"aria-valuenow":e,class:{thumb:!0,"thumb--value":!0,"thumb--active":"minMaxValue"!==this.lastDragProp&&this.dragProp===a,"thumb--precise":!0},onBlur:()=>this.activeProp=null,onFocus:()=>this.activeProp=a,onPointerDown:t=>this.pointerDownDragStart(t,a),role:"slider",style:{right:b},tabIndex:0,ref:t=>this.maxHandle=t},i("div",{class:"handle-extension"}),i("div",{class:"handle"})),w=i("div",{"aria-disabled":this.disabled,"aria-label":p?this.maxLabel:this.minLabel,"aria-orientation":"horizontal","aria-valuemax":this.max,"aria-valuemin":this.min,"aria-valuenow":e,class:{thumb:!0,"thumb--value":!0,"thumb--active":"minMaxValue"!==this.lastDragProp&&this.dragProp===a,"thumb--precise":!0},onBlur:()=>this.activeProp=null,onFocus:()=>this.activeProp=a,onPointerDown:t=>this.pointerDownDragStart(t,a),role:"slider",style:{right:b},tabIndex:0,ref:t=>this.maxHandle=t},i("span",{"aria-hidden":"true",class:f},s),i("span",{"aria-hidden":"true",class:`${f} static`},s),i("span",{"aria-hidden":"true",class:`${f} transformed`},s),i("div",{class:"handle"}),i("div",{class:"handle-extension"})),V=i("div",{"aria-disabled":this.disabled,"aria-label":p?this.maxLabel:this.minLabel,"aria-orientation":"horizontal","aria-valuemax":this.max,"aria-valuemin":this.min,"aria-valuenow":e,class:{thumb:!0,"thumb--value":!0,"thumb--active":"minMaxValue"!==this.lastDragProp&&this.dragProp===a,"thumb--precise":!0},onBlur:()=>this.activeProp=null,onFocus:()=>this.activeProp=a,onPointerDown:t=>this.pointerDownDragStart(t,a),role:"slider",style:{right:b},tabIndex:0,ref:t=>this.maxHandle=t},i("div",{class:"handle-extension"}),i("div",{class:"handle"}),i("span",{"aria-hidden":"true",class:f},s),i("span",{"aria-hidden":"true",class:`${f} static`},s),i("span",{"aria-hidden":"true",class:`${f} transformed`},s)),z=i("div",{"aria-disabled":this.disabled,"aria-label":this.minLabel,"aria-orientation":"horizontal","aria-valuemax":this.max,"aria-valuemin":this.min,"aria-valuenow":this.minValue,class:{thumb:!0,"thumb--minValue":!0,"thumb--active":"minValue"===this.dragProp},onBlur:()=>this.activeProp=null,onFocus:()=>this.activeProp="minValue",onPointerDown:t=>this.pointerDownDragStart(t,"minValue"),role:"slider",style:{left:u},tabIndex:0,ref:t=>this.minHandle=t},i("div",{class:"handle"})),M=i("div",{"aria-disabled":this.disabled,"aria-label":this.minLabel,"aria-orientation":"horizontal","aria-valuemax":this.max,"aria-valuemin":this.min,"aria-valuenow":this.minValue,class:{thumb:!0,"thumb--minValue":!0,"thumb--active":"minValue"===this.dragProp},onBlur:()=>this.activeProp=null,onFocus:()=>this.activeProp="minValue",onPointerDown:t=>this.pointerDownDragStart(t,"minValue"),role:"slider",style:{left:u},tabIndex:0,ref:t=>this.minHandle=t},i("span",{"aria-hidden":"true",class:v},l),i("span",{"aria-hidden":"true",class:`${v} static`},l),i("span",{"aria-hidden":"true",class:`${v} transformed`},l),i("div",{class:"handle"})),L=i("div",{"aria-disabled":this.disabled,"aria-label":this.minLabel,"aria-orientation":"horizontal","aria-valuemax":this.max,"aria-valuemin":this.min,"aria-valuenow":this.minValue,class:{thumb:!0,"thumb--minValue":!0,"thumb--active":"minValue"===this.dragProp},onBlur:()=>this.activeProp=null,onFocus:()=>this.activeProp="minValue",onPointerDown:t=>this.pointerDownDragStart(t,"minValue"),role:"slider",style:{left:u},tabIndex:0,ref:t=>this.minHandle=t},i("div",{class:"handle"}),i("span",{"aria-hidden":"true",class:v},l),i("span",{"aria-hidden":"true",class:`${v} static`},l),i("span",{"aria-hidden":"true",class:`${v} transformed`},l)),D=i("div",{"aria-disabled":this.disabled,"aria-label":this.minLabel,"aria-orientation":"horizontal","aria-valuemax":this.max,"aria-valuemin":this.min,"aria-valuenow":this.minValue,class:{thumb:!0,"thumb--minValue":!0,"thumb--active":"minValue"===this.dragProp,"thumb--precise":!0},onBlur:()=>this.activeProp=null,onFocus:()=>this.activeProp="minValue",onPointerDown:t=>this.pointerDownDragStart(t,"minValue"),role:"slider",style:{left:u},tabIndex:0,ref:t=>this.minHandle=t},i("div",{class:"handle-extension"}),i("div",{class:"handle"})),F=i("div",{"aria-disabled":this.disabled,"aria-label":this.minLabel,"aria-orientation":"horizontal","aria-valuemax":this.max,"aria-valuemin":this.min,"aria-valuenow":this.minValue,class:{thumb:!0,"thumb--minValue":!0,"thumb--active":"minValue"===this.dragProp,"thumb--precise":!0},onBlur:()=>this.activeProp=null,onFocus:()=>this.activeProp="minValue",onPointerDown:t=>this.pointerDownDragStart(t,"minValue"),role:"slider",style:{left:u},tabIndex:0,ref:t=>this.minHandle=t},i("div",{class:"handle-extension"}),i("div",{class:"handle"}),i("span",{"aria-hidden":"true",class:v},l),i("span",{"aria-hidden":"true",class:`${v} static`},l),i("span",{"aria-hidden":"true",class:`${v} transformed`},l));return i(h,{id:t,onTouchStart:this.handleTouchStart},i("div",{"aria-label":k(this),class:{container:!0,"container--range":p,[`scale--${this.scale}`]:!0}},this.renderGraph(),i("div",{class:"track",ref:this.storeTrackRef},i("div",{class:"track__range",onPointerDown:t=>this.pointerDownDragStart(t,"minMaxValue"),style:{left:`${d?100-c:o}%`,right:`${d?o:100-c}%`}}),i("div",{class:"ticks"},this.tickValues.map((t=>{const a=100*this.getUnitInterval(t)+"%";let s=t>=n&&t<=e;return r&&(s=t>=this.minValue&&t<=this.maxValue),i("span",{class:{tick:!0,"tick--active":s},style:{left:d?"":a,right:d?a:""}},this.renderTickLabel(t))})))),i("div",{class:"thumb-container"},!this.precise&&!this.labelHandles&&p&&z,!this.hasHistogram&&!this.precise&&this.labelHandles&&p&&M,this.precise&&!this.labelHandles&&p&&D,this.precise&&this.labelHandles&&p&&F,this.hasHistogram&&!this.precise&&this.labelHandles&&p&&L,!this.precise&&!this.labelHandles&&g,!this.hasHistogram&&!this.precise&&this.labelHandles&&x,!this.hasHistogram&&this.precise&&!this.labelHandles&&$,this.hasHistogram&&this.precise&&!this.labelHandles&&y,!this.hasHistogram&&this.precise&&this.labelHandles&&w,this.hasHistogram&&!this.precise&&this.labelHandles&&_,this.hasHistogram&&this.precise&&this.labelHandles&&V,i(m,{component:this}))))}renderGraph(){return this.histogram?i("calcite-graph",{class:"graph",colorStops:this.histogramStops,data:this.histogram,highlightMax:P(this.value)?this.maxValue:this.value,highlightMin:P(this.value)?this.minValue:this.min,max:this.max,min:this.min}):null}renderTickLabel(t){const a=P(this.value),e=t===this.min,s=t===this.max,h=this.determineGroupSeparator(t),l=i("span",{class:{tick__label:!0,"tick__label--min":e,"tick__label--max":s}},h);return this.labelTicks&&!this.hasHistogram&&!a||this.labelTicks&&!this.hasHistogram&&a&&!this.precise&&!this.labelHandles||this.labelTicks&&!this.hasHistogram&&a&&!this.precise&&this.labelHandles||this.labelTicks&&!this.hasHistogram&&a&&this.precise&&(e||s)||this.labelTicks&&this.hasHistogram&&!this.precise&&!this.labelHandles||this.labelTicks&&this.hasHistogram&&this.precise&&!this.labelHandles&&(e||s)||this.labelTicks&&this.hasHistogram&&!this.precise&&this.labelHandles&&(e||s)||this.labelTicks&&this.hasHistogram&&this.precise&&this.labelHandles&&(e||s)?l:null}keyDownHandler(t){const i=this.shouldMirror(),{activeProp:a,max:e,min:s,pageStep:h,step:l}=this,n=this[a],{key:r}=t;if(f(r))return void t.preventDefault();let o;if("ArrowUp"===r||"ArrowRight"===r?o=n+l*(i&&"ArrowRight"===r?-1:1):"ArrowDown"===r||"ArrowLeft"===r?o=n-l*(i&&"ArrowLeft"===r?-1:1):"PageUp"===r?h&&(o=n+h):"PageDown"===r?h&&(o=n-h):"Home"===r?o=s:"End"===r&&(o=e),isNaN(o))return;t.preventDefault();const c=Number(o.toFixed(M(l)));this.setValue({[a]:this.clamp(c,a)})}pointerDownHandler(t){if(this.disabled||!r(t))return;const i=t.clientX||t.pageX,a=this.translate(i);let e="value";P(this.value)&&(e=a>=this.minValue&&a<=this.maxValue&&"minMaxValue"===this.lastDragProp?"minMaxValue":Math.abs(this.maxValue-a)<Math.abs(this.minValue-a)||a>this.maxValue?"maxValue":"minValue"),this.lastDragPropValue=this[e],this.dragStart(e),this.el.shadowRoot.querySelector(".thumb:active")||this.setValue({[e]:this.clamp(a,e)}),this.focusActiveHandle(i)}handleTouchStart(t){t.preventDefault()}async setFocus(){await y(this),(this.minHandle?this.minHandle:this.maxHandle)?.focus()}setValueFromMinMax(){const{minValue:t,maxValue:i}=this;"number"==typeof t&&"number"==typeof i&&(this.value=[t,i])}setMinMaxFromValue(){const{value:t}=this;P(t)&&(this.minValue=t[0],this.maxValue=t[1])}onLabelClick(){this.setFocus()}shouldMirror(){return this.mirrored&&!this.hasHistogram}shouldUseMinValue(){return!!P(this.value)&&(this.hasHistogram&&0===this.maxValue||!this.hasHistogram&&0===this.minValue)}getTickDensity(){const t=(this.max-this.min)/this.ticks/250;return t<1?1:t}generateTickValues(){const t=this.ticks??0;if(t<=0)return[];const i=[this.min],a=t*this.getTickDensity();let e=this.min;for(;e<this.max;)e+=a,i.push(Math.min(e,this.max));return i.includes(this.max)||i.push(this.max),i}pointerDownDragStart(t,i){r(t)&&this.dragStart(i)}dragStart(t){this.dragProp=t,this.lastDragProp=this.dragProp,this.activeProp=t,document.addEventListener("pointermove",this.dragUpdate),document.addEventListener("pointerup",this.pointerUpDragEnd),document.addEventListener("pointercancel",this.dragEnd)}focusActiveHandle(t){switch(this.dragProp){case"minValue":this.minHandle.focus();break;case"maxValue":case"value":this.maxHandle.focus();break;case"minMaxValue":this.getClosestHandle(t).focus()}}emitInput(){this.calciteSliderInput.emit()}emitChange(){this.calciteSliderChange.emit()}removeDragListeners(){document.removeEventListener("pointermove",this.dragUpdate),document.removeEventListener("pointerup",this.pointerUpDragEnd),document.removeEventListener("pointercancel",this.dragEnd)}setValue(t){let i;Object.keys(t).forEach((a=>{const e=t[a];i||(i=this[a]!==e),this[a]=e})),i&&(this.dragProp||this.emitChange(),this.emitInput())}clamp(t,i){return t=L(t,this.min,this.max),"maxValue"===i&&(t=Math.max(t,this.minValue)),"minValue"===i&&(t=Math.min(t,this.maxValue)),t}translate(t){const i=this.max-this.min,{left:a,width:e}=this.trackEl.getBoundingClientRect(),s=(t-a)/e,h=this.shouldMirror(),l=this.clamp(this.min+i*(h?1-s:s));let n=Number(l.toFixed(M(this.step)));return this.snap&&this.step&&(n=this.getClosestStep(n)),n}getClosestStep(t){if(t=Number(this.clamp(t).toFixed(M(this.step))),this.step){const i=Math.round(t/this.step)*this.step;t=Number(this.clamp(i).toFixed(M(this.step)))}return t}getClosestHandle(t){return this.getDistanceX(this.maxHandle,t)>this.getDistanceX(this.minHandle,t)?this.minHandle:this.maxHandle}getDistanceX(t,i){return Math.abs(t.getBoundingClientRect().left-i)}getFontSizeForElement(t){return Number(window.getComputedStyle(t).getPropertyValue("font-size").match(/\d+/)[0])}getUnitInterval(t){return((t=this.clamp(t))-this.min)/(this.max-this.min)}adjustHostObscuredHandleLabel(t){const i=this.el.shadowRoot.querySelector(`.handle__label--${t}`),a=this.el.shadowRoot.querySelector(`.handle__label--${t}.static`),e=this.el.shadowRoot.querySelector(`.handle__label--${t}.transformed`),s=a.getBoundingClientRect(),h=this.getHostOffset(s.left,s.right);i.style.transform=`translateX(${h}px)`,e.style.transform=`translateX(${h}px)`}hyphenateCollidingRangeHandleLabels(){const{shadowRoot:t}=this.el,i=this.shouldMirror(),a=i?"value":"minValue",e=i?"minValue":"value",s=t.querySelector(`.handle__label--${a}`),h=t.querySelector(`.handle__label--${a}.static`),l=t.querySelector(`.handle__label--${a}.transformed`),n=this.getHostOffset(h.getBoundingClientRect().left,h.getBoundingClientRect().right),r=t.querySelector(`.handle__label--${e}`),o=t.querySelector(`.handle__label--${e}.static`),c=t.querySelector(`.handle__label--${e}.transformed`),d=this.getHostOffset(o.getBoundingClientRect().left,o.getBoundingClientRect().right),u=this.getFontSizeForElement(s),m=this.getRangeLabelOverlap(l,c),b=s,p=u/2;if(m>0){if(b.classList.add("hyphen","hyphen--wrap"),0===d&&0===n){let t=m/2-p;t=-1===Math.sign(t)?Math.abs(t):-t;const i=this.getHostOffset(l.getBoundingClientRect().left+t-p,l.getBoundingClientRect().right+t-p);let a=m/2;const e=this.getHostOffset(c.getBoundingClientRect().left+a,c.getBoundingClientRect().right+a);0!==i&&(t+=i,a+=i),0!==e&&(t+=e,a+=e),s.style.transform=`translateX(${t}px)`,l.style.transform=`translateX(${t-p}px)`,r.style.transform=`translateX(${a}px)`,c.style.transform=`translateX(${a}px)`}else if(n>0||d>0)s.style.transform=`translateX(${n+p}px)`,r.style.transform=`translateX(${m+d}px)`,c.style.transform=`translateX(${m+d}px)`;else if(n<0||d<0){let t=Math.abs(n)+m-p;t=-1===Math.sign(t)?Math.abs(t):-t,s.style.transform=`translateX(${t}px)`,l.style.transform=`translateX(${t-p}px)`}}else b.classList.remove("hyphen","hyphen--wrap"),s.style.transform=`translateX(${n}px)`,l.style.transform=`translateX(${n}px)`,r.style.transform=`translateX(${d}px)`,c.style.transform=`translateX(${d}px)`}hideObscuredBoundingTickLabels(){const t=P(this.value);if(!(this.hasHistogram||t||this.labelHandles||this.precise))return;if(!this.hasHistogram&&!t&&this.labelHandles&&!this.precise)return;if(!this.hasHistogram&&!t&&!this.labelHandles&&this.precise)return;if(!this.hasHistogram&&!t&&this.labelHandles&&this.precise)return;if(!this.hasHistogram&&t&&!this.precise)return;if(this.hasHistogram&&!this.precise&&!this.labelHandles)return;const i=this.el.shadowRoot.querySelector(".thumb--minValue"),a=this.el.shadowRoot.querySelector(".thumb--value"),e=this.el.shadowRoot.querySelector(".tick__label--min"),s=this.el.shadowRoot.querySelector(".tick__label--max");!i&&a&&e&&s&&(e.style.opacity=this.isMinTickLabelObscured(e,a)?"0":"1",s.style.opacity=this.isMaxTickLabelObscured(s,a)?"0":"1"),i&&a&&e&&s&&(e.style.opacity=this.isMinTickLabelObscured(e,i)||this.isMinTickLabelObscured(e,a)?"0":"1",s.style.opacity=this.isMaxTickLabelObscured(s,i)||this.isMaxTickLabelObscured(s,a)&&this.hasHistogram?"0":"1")}getHostOffset(t,i){const a=this.el.getBoundingClientRect();return t+7<a.left?a.left-t-7:i-7>a.right?7-(i-a.right):0}getRangeLabelOverlap(t,i){const a=t.getBoundingClientRect(),e=i.getBoundingClientRect(),s=this.getFontSizeForElement(t);return Math.max(a.right+s-e.left,0)}isMinTickLabelObscured(t,i){const a=t.getBoundingClientRect(),e=i.getBoundingClientRect();return o(a,e)}isMaxTickLabelObscured(t,i){const a=t.getBoundingClientRect(),e=i.getBoundingClientRect();return o(a,e)}static get delegatesFocus(){return!0}get el(){return a(this)}static get watchers(){return{histogram:["histogramWatcher"],ticks:["ticksWatcher"],value:["valueHandler"],minValue:["minMaxValueHandler"],maxValue:["minMaxValueHandler"]}}};X.style='@charset "UTF-8";:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}.scale--s{--calcite-slider-handle-size:0.625rem;--calcite-slider-handle-extension-height:0.4rem;--calcite-slider-container-font-size:var(--calcite-font-size--3)}.scale--s .handle__label,.scale--s .tick__label{line-height:.75rem}.scale--m{--calcite-slider-handle-size:0.875rem;--calcite-slider-handle-extension-height:0.5rem;--calcite-slider-container-font-size:var(--calcite-font-size--2)}.scale--m .handle__label,.scale--m .tick__label{line-height:1rem}.scale--l{--calcite-slider-handle-size:1rem;--calcite-slider-handle-extension-height:0.65rem;--calcite-slider-container-font-size:var(--calcite-font-size--1)}.scale--l .handle__label,.scale--l .tick__label{line-height:1rem}.handle__label,.tick__label{font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-2);font-size:var(--calcite-slider-container-font-size)}:host{display:block}.container{position:relative;display:block;overflow-wrap:normal;word-break:normal;padding-inline:calc(var(--calcite-slider-handle-size) * 0.5);padding-block:calc(var(--calcite-slider-handle-size) * 0.5);margin-block:calc(var(--calcite-slider-handle-size) * 0.5);margin-inline:0;--calcite-slider-full-handle-height:calc(\n    var(--calcite-slider-handle-size) + var(--calcite-slider-handle-extension-height)\n  );touch-action:none}:host([disabled]) .track__range,:host([disabled]) .tick--active{background-color:var(--calcite-ui-text-3)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.scale--s .thumb:not(.thumb--precise){--calcite-slider-thumb-y-offset:-0.375rem}.scale--m .thumb:not(.thumb--precise){--calcite-slider-thumb-y-offset:-0.5rem}.scale--l .thumb:not(.thumb--precise){--calcite-slider-thumb-y-offset:-0.55rem}:host([precise]:not([has-histogram])) .container .thumb--value{--calcite-slider-thumb-y-offset:calc(var(--calcite-slider-full-handle-height) * -1)}.thumb-container{position:relative;max-inline-size:100%}.thumb{--calcite-slider-thumb-x-offset:calc(var(--calcite-slider-handle-size) * 0.5);position:absolute;margin:0px;display:flex;cursor:pointer;flex-direction:column;align-items:center;border-style:none;background-color:transparent;padding:0px;font-family:inherit;outline:2px solid transparent;outline-offset:2px;transform:translate(var(--calcite-slider-thumb-x-offset), var(--calcite-slider-thumb-y-offset))}.thumb .handle__label.static,.thumb .handle__label.transformed{position:absolute;inset-block:0px;opacity:0}.thumb .handle__label.hyphen::after{content:"—";display:inline-block;inline-size:1em}.thumb .handle__label.hyphen--wrap{display:flex}.thumb .handle{box-sizing:border-box;border-radius:9999px;background-color:var(--calcite-ui-foreground-1);outline-color:transparent;block-size:var(--calcite-slider-handle-size);inline-size:var(--calcite-slider-handle-size);box-shadow:0 0 0 2px var(--calcite-ui-text-3) inset;transition:border var(--calcite-internal-animation-timing-medium) ease, background-color var(--calcite-internal-animation-timing-medium) ease, box-shadow var(--calcite-animation-timing) ease}.thumb .handle-extension{inline-size:0.125rem;block-size:var(--calcite-slider-handle-extension-height);background-color:var(--calcite-ui-text-3)}.thumb:hover .handle{box-shadow:0 0 0 3px var(--calcite-ui-brand) inset}.thumb:hover .handle-extension{background-color:var(--calcite-ui-brand)}.thumb:focus .handle{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}.thumb:focus .handle-extension{background-color:var(--calcite-ui-brand)}.thumb.thumb--minValue{transform:translate(calc(var(--calcite-slider-thumb-x-offset) * -1), var(--calcite-slider-thumb-y-offset))}.thumb.thumb--precise{--calcite-slider-thumb-y-offset:-0.125rem}:host([label-handles]) .thumb{--calcite-slider-thumb-x-offset:50%}:host([label-handles]):host(:not([has-histogram])) .scale--s .thumb:not(.thumb--precise){--calcite-slider-thumb-y-offset:-1.4375rem}:host([label-handles]):host(:not([has-histogram])) .scale--m .thumb:not(.thumb--precise){--calcite-slider-thumb-y-offset:-1.875rem}:host([label-handles]):host(:not([has-histogram])) .scale--l .thumb:not(.thumb--precise){--calcite-slider-thumb-y-offset:-2rem}:host([has-histogram][label-handles]) .handle__label,:host([label-handles]:not([has-histogram])) .thumb--minValue.thumb--precise .handle__label{margin-block-start:0.5em}:host(:not([has-histogram]):not([precise])) .handle__label,:host([label-handles]:not([has-histogram])) .thumb--value .handle__label{margin-block-end:0.5em}:host([label-handles][precise]):host(:not([has-histogram])) .scale--s .thumb--value{--calcite-slider-thumb-y-offset:-2.075rem}:host([label-handles][precise]):host(:not([has-histogram])) .scale--m .thumb--value{--calcite-slider-thumb-y-offset:-2.75rem}:host([label-handles][precise]):host(:not([has-histogram])) .scale--l .thumb--value{--calcite-slider-thumb-y-offset:-3.0625rem}.thumb:focus .handle,.thumb--active .handle{background-color:var(--calcite-ui-brand);box-shadow:0 0 8px 0 rgba(0, 0, 0, 0.16)}.thumb:hover.thumb--precise:after,.thumb:focus.thumb--precise:after,.thumb--active.thumb--precise:after{background-color:var(--calcite-ui-brand)}.track{position:relative;block-size:0.125rem;border-radius:0px;background-color:var(--calcite-ui-border-2);transition:all var(--calcite-internal-animation-timing-medium) ease-in}.track__range{position:absolute;inset-block-start:0px;block-size:0.125rem;background-color:var(--calcite-ui-brand)}.container--range .track__range:hover{cursor:ew-resize}.container--range .track__range:after{position:absolute;inline-size:100%;content:"";inset-block-start:calc(var(--calcite-slider-full-handle-height) * 0.5 * -1);block-size:calc(var(--calcite-slider-handle-size) + var(--calcite-slider-handle-extension-height))}@media (forced-colors: active){.thumb{outline-width:0;outline-offset:0}.handle{outline:2px solid transparent;outline-offset:2px}.thumb:focus .handle,.thumb .handle-extension,.thumb:hover .handle-extension,.thumb:focus .handle-extension,.thumb:active .handle-extension{background-color:canvasText}.track{background-color:canvasText}.track__range{background-color:highlight}}.tick{position:absolute;block-size:0.25rem;inline-size:0.125rem;border-width:1px;border-style:solid;background-color:var(--calcite-ui-border-input);border-color:var(--calcite-ui-foreground-1);inset-block-start:-2px;pointer-events:none;margin-inline-start:calc(-1 * 0.125rem)}.tick--active{background-color:var(--calcite-ui-brand)}.tick__label{pointer-events:none;margin-block-start:0.875rem;display:flex;justify-content:center}.tick__label--min{transition:opacity var(--calcite-animation-timing)}.tick__label--max{transition:opacity var(--calcite-internal-animation-timing-fast)}:host([has-histogram][label-handles]) .tick__label--min,:host([has-histogram][label-handles]) .tick__label--max,:host([has-histogram][precise]) .tick__label--min,:host([has-histogram][precise]) .tick__label--max{font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-3)}.graph{color:var(--calcite-ui-foreground-3);block-size:48px}:host([label-ticks][ticks]) .container{padding-block-end:calc(0.875rem + var(--calcite-slider-container-font-size))}:host([has-histogram]):host([precise][label-handles]) .container{padding-block-end:calc(var(--calcite-slider-full-handle-height) + 1em)}:host([has-histogram]):host([label-handles]:not([precise])) .container{padding-block-end:calc(var(--calcite-slider-handle-size) * 0.5 + 1em)}:host([has-histogram]):host([precise]:not([label-handles])) .container{padding-block-end:var(--calcite-slider-full-handle-height)}:host(:not([has-histogram])):host([precise]:not([label-handles])) .container{padding-block-start:var(--calcite-slider-full-handle-height)}:host(:not([has-histogram])):host([precise]:not([label-handles])) .container--range{padding-block-end:var(--calcite-slider-full-handle-height)}:host(:not([has-histogram])):host([label-handles]:not([precise])) .container{padding-block-start:calc(var(--calcite-slider-full-handle-height) + 4px)}:host(:not([has-histogram])):host([label-handles][precise]) .container{padding-block-start:calc(var(--calcite-slider-full-handle-height) + var(--calcite-slider-container-font-size) + 4px)}:host(:not([has-histogram])):host([label-handles][precise]) .container--range{padding-block-end:calc(var(--calcite-slider-full-handle-height) + var(--calcite-slider-container-font-size) + 4px)}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}:host([hidden]){display:none}[hidden]{display:none}';export{H as calcite_graph,X as calcite_slider}