/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.10.0-next.7
 */
function t(t,s,n){const i=function(t){class s extends window.MutationObserver{constructor(t){super(t),this.observedEntry=[],this.callback=t}observe(t,s){return this.observedEntry.push({target:t,options:s}),super.observe(t,s)}unobserve(t){const s=this.observedEntry.filter((s=>s.target!==t));this.observedEntry=[],this.callback(super.takeRecords(),this),this.disconnect(),s.forEach((t=>this.observe(t.target,t.options)))}}return"intersection"===t?window.IntersectionObserver:"mutation"===t?s:window.ResizeObserver}(t);return new i(s,n)}export{t as c}