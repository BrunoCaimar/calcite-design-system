System.register(["./p-4546c12d.system.js","./p-bc1dd3a3.system.js","./p-f0691b49.system.js","./p-0c08c11b.system.js"],function(e){"use strict";var t,i,r,l,n,s,c,a,o,h,d,u,f,p,m,v,g,b;return{setters:[function(e){t=e.r;i=e.c;r=e.h;l=e.H;n=e.g},function(e){s=e.S;c=e.E;a=e.L;o=e.R;h=e.U;d=e.D;u=e.H;f=e.b},function(e){p=e.a;m=e.g;v=e.n;g=e.c},function(e){b=e.b}],execute:function(){var y;(function(e){e["Single"]="single";e["Multi"]="multi";e["Children"]="children";e["MultiChildren"]="multi-children"})(y||(y={}));var M=e("calcite_tree",function(){function e(e){t(this,e);this.lines=false;this.root=true;this.theme="light";this.size="m";this.selectionMode=y.Single;this.calciteTreeSelect=i(this,"calciteTreeSelect",7)}e.prototype.componentWillUpdate=function(){};e.prototype.componentWillRender=function(){var e=this.el.parentElement.closest("calcite-tree");this.theme=p(this.el);this.lines=e?e.lines:this.lines;this.size=e?e.size:this.size;this.selectionMode=e?e.selectionMode:this.selectionMode;this.root=e?false:true};e.prototype.render=function(){var e=m(this.el);return r(l,{tabindex:this.root?"1":undefined,dir:e,"aria-role":this.root?"tree":undefined,"aria-multiselectable":this.selectionMode===y.Multi||this.selectionMode===y.MultiChildren},r("slot",null))};e.prototype.onFocus=function(){if(this.root){var e=this.el.querySelector("calcite-tree-item[selected]");var t=this.el.querySelector("calcite-tree-item");(e||t).focus()}};e.prototype.onClick=function(e){var t=e.target;var i=v(t.querySelectorAll("calcite-tree-item"));var r=this.selectionMode!==null&&(!t.hasChildren||t.hasChildren&&(this.selectionMode===y.Children||this.selectionMode===y.MultiChildren));var l=e.detail.modifyCurrentSelection&&(this.selectionMode===y.Multi||this.selectionMode===y.MultiChildren);var n=this.selectionMode===y.MultiChildren||this.selectionMode===y.Children;var s=!l&&((this.selectionMode===y.Single||this.selectionMode===y.Multi)&&i.length<=0||(this.selectionMode===y.Children||this.selectionMode===y.MultiChildren));var c=this.selectionMode===y.Children||this.selectionMode===y.MultiChildren;if(this.root){var a=[];if(r){a.push(t)}if(n){i.forEach(function(e){a.push(e)})}if(s){var o=v(this.el.querySelectorAll("calcite-tree-item[selected]"));o.forEach(function(e){if(!a.includes(e)){e.selected=false}})}if(c&&!e.detail.forceToggle){t.expanded=true}if(l){window.getSelection().removeAllRanges()}if(l&&t.selected||n&&e.detail.forceToggle){a.forEach(function(e){e.selected=false})}else{a.forEach(function(e){e.selected=true})}}if(this.root){e.preventDefault();e.stopPropagation()}this.calciteTreeSelect.emit({selected:v(this.el.querySelectorAll("calcite-tree-item")).filter(function(e){return e.selected})})};Object.defineProperty(e.prototype,"el",{get:function(){return n(this)},enumerable:true,configurable:true});Object.defineProperty(e,"style",{get:function(){return"body{font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif}.overflow-hidden{overflow:hidden}calcite-tab{display:none}calcite-tab[is-active]{display:block}a{color:#007ac2}:host{display:block;outline:none;--calcite-tree-text:#404040;--calcite-tree-text-hover:#151515;--calcite-tree-text-active:#0b0b0b;--calcite-tree-chevron:#bfbfbf;--calcite-tree-chevron-hover:#6a6a6a;--calcite-tree-chevron-active:#007ac2;--calcite-tree-vertical-padding:0.375rem;--calcite-tree-indicator:#bfbfbf;--calcite-tree-indicator-active:#007ac2;--calcite-tree-indicator-first-start:0.1rem;--calcite-tree-indicator-first-end:0;--calcite-tree-indicator-distance-start:0.15rem;--calcite-tree-indicator-distance-end:0;--calcite-tree-icon-edge-distance-start:-0.2rem;--calcite-tree-icon-edge-distance-end:0;--calcite-tree-icon-content-distance-start:0.375rem;--calcite-tree-icon-content-distance-end:0;--calcite-tree-indent-start:1.4rem;--calcite-tree-indent-end:0;--calcite-tree-children-indent-start:0.25rem;--calcite-tree-children-indent-end:0;--calcite-tree-children-padding-start:1rem;--calcite-tree-children-padding-end:0;--calcite-tree-line-position-start:0.05rem;--calcite-tree-line-position-end:0;--calcite-tree-parent-line-position-start:-0.95rem;--calcite-tree-parent-line-position-end:0;--calcite-tree-line-width:1px;--calcite-tree-hover-line-width:3px}:host([theme=dark]){--calcite-tree-text:#d4d4d4;--calcite-tree-text-hover:#eaeaea;--calcite-tree-text-active:#f3f3f3;--calcite-tree-chevron:#555;--calcite-tree-chevron-hover:#959595;--calcite-tree-chevron-active:#3db8ff;--calcite-tree-indicator:#555;--calcite-tree-indicator-active:#3db8ff}:host([lines]){--calcite-tree-line:#eaeaea;--calcite-tree-line-hover:#cacaca;--calcite-tree-line-active:#007ac2}:host([lines][theme=dark]){--calcite-tree-line:#555;--calcite-tree-line-hover:grey;--calcite-tree-line-active:#3db8ff}:host([size=s]){--calcite-tree-hover-line-width:2px;--calcite-tree-vertical-padding:0.1875rem;--calcite-tree-children-indent-start:0rem;--calcite-tree-children-padding-start:0.8rem;--calcite-tree-line-position-start:0.3rem;--calcite-tree-parent-line-position-start:-0.5rem}:host([dir=rtl]){--calcite-tree-indicator-first-start:0;--calcite-tree-indicator-first-end:0.1rem;--calcite-tree-indicator-distance-start:0;--calcite-tree-indicator-distance-end:0.15rem;--calcite-tree-icon-edge-distance-start:0;--calcite-tree-icon-edge-distance-end:-0.2rem;--calcite-tree-icon-content-distance-start:0;--calcite-tree-icon-content-distance-end:0.375rem;--calcite-tree-indent-start:0;--calcite-tree-indent-end:1.4rem;--calcite-tree-children-indent-start:0;--calcite-tree-children-indent-end:0.25rem;--calcite-tree-children-padding-start:0;--calcite-tree-children-padding-end:1rem;--calcite-tree-line-position-start:0;--calcite-tree-line-position-end:0.05rem;--calcite-tree-parent-line-position-start:0;--calcite-tree-parent-line-position-end:-0.95rem}:host([dir=rtl][size=s]){--calcite-tree-children-indent-end:0rem;--calcite-tree-children-padding-end:0.8rem;--calcite-tree-line-position-end:0.3rem;--calcite-tree-parent-line-position-end:-0.5rem}"},enumerable:true,configurable:true});return e}());var C=e("calcite_tree_item",function(){function e(e){t(this,e);this.selected=false;this.depth=-1;this.hasChildren=null;this.expanded=false;this.parentExpanded=false;this.calciteTreeItemSelect=i(this,"calciteTreeItemSelect",7)}e.prototype.expandedHandler=function(e){var t=g(this.childrenSlotWrapper,"calcite-tree")[0];var i=g(t,"calcite-tree-item");i.forEach(function(t){return t.parentExpanded=e})};e.prototype.componentWillRender=function(){this.hasChildren=!!this.el.querySelector("calcite-tree");var e=this.el.closest("calcite-tree");this.selectionMode=e.selectionMode;this.depth=0;var t;while(e){t=e.parentElement.closest("calcite-tree");if(t===e){break}else{e=t;this.depth=this.depth+1}}};e.prototype.render=function(){var e=this;var t=m(this.el);var i=this.hasChildren?r("svg",{class:"calcite-tree-chevron",xmlns:"http://www.w3.org/2000/svg",height:"16",width:"16",viewBox:"0 0 16 16"},r("path",{d:b})):null;return r(l,{tabindex:this.parentExpanded||this.depth===1?"0":"-1",dir:t,"aria-role":"treeitem","aria-hidden":this.parentExpanded||this.depth===1?undefined:"true","aria-selected":this.selected?"true":this.selectionMode===y.Multi||this.selectionMode===y.MultiChildren?"false":undefined,"aria-expanded":this.hasChildren?this.expanded?"true":"false":undefined},r("div",{class:"calcite-tree-node"},i,r("slot",null)),r("div",{class:"calcite-tree-children",role:this.hasChildren?"group":undefined,ref:function(t){return e.childrenSlotWrapper=t}},r("slot",{name:"children"})))};e.prototype.onClick=function(e){var t=e.target;var i=e.originalTarget||e.path[0];var r=i&&!!i.closest("svg");var l=t.parentElement===this.el||this.el===e.target;var n=v(this.el.children).find(function(e){return e.matches("a")});if(!r&&(n||t===this.el)){this.selected=true;n.click();return}if(l&&this.hasChildren){this.expanded=!this.expanded}if(l){this.calciteTreeItemSelect.emit({modifyCurrentSelection:e.shiftKey,forceToggle:r})}};e.prototype.keyDownHandler=function(e){var t;switch(e.keyCode){case s:this.selected=!this.selected;e.preventDefault();e.stopPropagation();break;case c:var i=v(this.el.children).find(function(e){return e.matches("a")});if(i){i.click();this.selected=true}else{this.selected=!this.selected}e.preventDefault();e.stopPropagation();break;case a:if(this.hasChildren&&this.expanded){this.expanded=false;e.preventDefault();e.stopPropagation();break}var r=this.el.parentElement.closest("calcite-tree-item");if(r&&(!this.hasChildren||this.expanded===false)){r.focus();e.preventDefault();e.stopPropagation();break}break;case o:if(this.hasChildren&&this.expanded===false){this.expanded=true;e.preventDefault();e.stopPropagation();break}if(this.hasChildren&&this.expanded){this.el.querySelector("calcite-tree-item").focus();break}break;case h:var l=this.el.previousElementSibling;if(l&&l.matches("calcite-tree-item")){l.focus()}break;case d:var n=this.el.nextElementSibling;if(n&&n.matches("calcite-tree-item")){n.focus()}break;case u:t=this.el.closest("calcite-tree[root]");var p=t.querySelector("calcite-tree-item");p.focus();break;case f:t=this.el.closest("calcite-tree[root]");var m=t.children[t.children.length-1];var g=v(m.children).find(function(e){return e.matches("calcite-tree")});while(g){m=g.children[t.children.length-1];g=v(m.children).find(function(e){return e.matches("calcite-tree")})}m.focus();break}};Object.defineProperty(e.prototype,"el",{get:function(){return n(this)},enumerable:true,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{expanded:["expandedHandler"]}},enumerable:true,configurable:true});Object.defineProperty(e,"style",{get:function(){return"\@charset \"UTF-8\";body{font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif}.overflow-hidden{overflow:hidden}calcite-tab{display:none}calcite-tab[is-active]{display:block}a{color:#007ac2}:host{display:block;color:var(--calcite-tree-text);cursor:pointer;outline:none;max-width:100%}::slotted(*),:host{font-size:.875rem;line-height:1.5}::slotted(*){color:var(--calcite-tree-text)!important}::slotted(*),::slotted(*):hover{text-decoration:none!important}.calcite-tree-children{z-index:1;margin-left:var(--calcite-tree-children-indent-start);margin-right:var(--calcite-tree-children-indent-end);padding-left:var(--calcite-tree-children-padding-start);padding-right:var(--calcite-tree-children-padding-end);position:relative;-webkit-transform:scaleY(0);transform:scaleY(0);opacity:0;overflow:hidden;-webkit-transition:.15s cubic-bezier(.215,.44,.42,.88),opacity .15s cubic-bezier(.215,.44,.42,.88),all .15s ease-in-out;transition:.15s cubic-bezier(.215,.44,.42,.88),opacity .15s cubic-bezier(.215,.44,.42,.88),all .15s ease-in-out;height:0;-webkit-transform-origin:top;transform-origin:top}.calcite-tree-children:after{-webkit-transition:all .15s ease-in-out;transition:all .15s ease-in-out;content:\"\";height:100%;width:var(--calcite-tree-line-width);background:var(--calcite-tree-line);left:var(--calcite-tree-line-position-start);right:var(--calcite-tree-line-position-end);top:0;position:absolute}:host([expanded])>.calcite-tree-children{-webkit-transform:scaleY(1);transform:scaleY(1);opacity:1;height:auto}:host([has-children]) .calcite-tree-children:focus:after,:host([has-children]) .calcite-tree-children:hover:after{background:var(--calcite-tree-line-hover)}.calcite-tree-node{display:-ms-flexbox;display:flex;padding:var(--calcite-tree-vertical-padding) 0;padding-left:var(--calcite-tree-indent-start);padding-right:var(--calcite-tree-indent-end);position:relative}.calcite-tree-node:before{content:\"•\";left:var(--calcite-tree-indicator-distance-start);right:var(--calcite-tree-indicator-distance-end);opacity:0;color:var(--calcite-tree-indicator)}.calcite-tree-node:after,.calcite-tree-node:before{position:absolute;-webkit-transition:all .15s ease-in-out;transition:all .15s ease-in-out}.calcite-tree-node:after{content:\"\";height:100%;width:var(--calcite-tree-line-width);background:var(--calcite-tree-line);left:var(--calcite-tree-parent-line-position-start);right:var(--calcite-tree-parent-line-position-end);top:0}:host([depth=\"1\"])>.calcite-tree-node:after{display:none}:host([has-children])>.calcite-tree-node{padding-left:0;padding-right:0}:host([has-children])>.calcite-tree-node:before{display:none}:host([depth=\"1\"])>.calcite-tree-children:before,:host([depth=\"1\"])>.calcite-tree-node:before{left:var(--calcite-tree-indicator-first-start);right:var(--calcite-tree-indicator-first-end)}.calcite-tree-node:hover:before,:host(:focus) .calcite-tree-node:before,:host([selected]) .calcite-tree-node:hover:before{opacity:1}.calcite-tree-node:hover:after,:host(:focus) .calcite-tree-node:after,:host([selected]) .calcite-tree-node:hover:after{width:var(--calcite-tree-hover-line-width);background:var(--calcite-tree-line-hover);z-index:2}.calcite-tree-node:hover ::slotted(*),:host(:focus) .calcite-tree-node ::slotted(*),:host([selected]) .calcite-tree-node:hover ::slotted(*){color:var(--calcite-tree-text-hover)}.calcite-tree-node:hover .calcite-tree-chevron,:host(:focus) .calcite-tree-node .calcite-tree-chevron,:host([selected]) .calcite-tree-node:hover .calcite-tree-chevron{fill:var(--calcite-tree-chevron-hover)}.calcite-tree-node:hover .calcite-tree-indicator,:host(:focus) .calcite-tree-node .calcite-tree-indicator,:host([selected]) .calcite-tree-node:hover .calcite-tree-indicator{fill:var(--calcite-tree-indicator-hover)}:host([selected])>.calcite-tree-node,:host([selected])>.calcite-tree-node:hover{color:var(--calcite-tree-text-active);font-weight:500}:host([selected])>.calcite-tree-node:before,:host([selected])>.calcite-tree-node:hover:before{opacity:1;color:var(--calcite-tree-indicator-active)}:host([selected])>.calcite-tree-node:after,:host([selected])>.calcite-tree-node:hover:after{background:var(--calcite-tree-line-active);width:var(--calcite-tree-hover-line-width);z-index:2}:host([selected])>.calcite-tree-node ::slotted(*),:host([selected])>.calcite-tree-node:hover ::slotted(*){color:var(--calcite-tree-text-active)}:host([has-children][expanded])>.calcite-tree-node{color:var(--calcite-tree-text-active);font-weight:500}:host([has-children][expanded])>.calcite-tree-node:after{background:var(--calcite-tree-line-active)}:host([has-children][expanded])>.calcite-tree-node:before{opacity:1;color:var(--calcite-tree-indicator-active)}:host([has-children][expanded])>.calcite-tree-node ::slotted(*){color:var(--calcite-tree-text-active)}:host([has-children][expanded][selected])>.calcite-tree-node:after{background:var(--calcite-tree-line-active);width:var(--calcite-tree-hover-line-width);z-index:2}.calcite-tree-chevron{-webkit-transition:all .15s ease-in-out;transition:all .15s ease-in-out;-ms-flex:0 0 auto;flex:0 0 auto;position:relative;-ms-flex-item-align:center;align-self:center;left:var(--calcite-tree-icon-edge-distance-start);right:var(--calcite-tree-icon-edge-distance-end);margin-right:var(--calcite-tree-icon-content-distance-start);margin-left:var(--calcite-tree-icon-content-distance-end);-webkit-transform:rotate(0deg);transform:rotate(0deg);fill:var(--calcite-tree-chevron)}:host([dir=rtl]) .calcite-tree-chevron{-webkit-transform:rotate(180deg);transform:rotate(180deg)}:host(:focus) .calcite-tree-chevron,:host(:hover) .calcite-tree-chevron{fill:var(--calcite-tree-chevron-hover);stroke:var(--calcite-tree-chevron-hover);stroke-width:.75}:host([expanded])>.calcite-tree-node>.calcite-tree-chevron{-webkit-transform:rotate(90deg);transform:rotate(90deg);fill:var(--calcite-tree-chevron-active);stroke-width:.75;stroke:var(--calcite-tree-chevron-active)}"},enumerable:true,configurable:true});return e}())}}});