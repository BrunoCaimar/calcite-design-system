/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.10.0-next.7
 */
import{r as t,c as e,h as i,H as s,a}from"./p-bac89e07.js";import{s as l,a as n}from"./p-b155bab4.js";import{u as o,s as r,c,d as h}from"./p-73638da8.js";import{n as d,c as b,d as p}from"./p-6e222163.js";import{g as u}from"./p-ba408deb.js";import"./p-d8a3e693.js";import"./p-e501a2ab.js";import"./p-fe45786d.js";import"./p-59cdfef8.js";import"./p-31c09125.js";const m=class{constructor(i){t(this,i),this.calciteTableSelect=e(this,"calciteTableSelect",6),this.calciteTablePageChange=e(this,"calciteTablePageChange",6),this.calciteInternalTableRowFocusChange=e(this,"calciteInternalTableRowFocusChange",6),this.getSlottedRows=t=>t?.assignedElements({flatten:!0})?.filter((t=>t?.matches("calcite-table-row"))),this.updateRows=()=>{const t=this.getSlottedRows(this.tableHeadSlotEl)||[],e=this.getSlottedRows(this.tableBodySlotEl)||[],i=this.getSlottedRows(this.tableFootSlotEl)||[],s=[...t,...e,...i];t?.forEach((e=>{const i=t?.indexOf(e);e.rowType="head",e.positionSection=i,e.positionSectionLocalized=this.localizeNumber((i+1).toString())})),e?.forEach((t=>{const i=e?.indexOf(t);t.rowType="body",t.positionSection=i,t.positionSectionLocalized=this.localizeNumber((i+1).toString())})),i?.forEach((t=>{const e=i?.indexOf(t);t.rowType="foot",t.positionSection=e,t.positionSectionLocalized=this.localizeNumber((e+1).toString())})),s?.forEach((t=>{t.selectionMode=this.selectionMode,t.bodyRowCount=e?.length,t.positionAll=s?.indexOf(t),t.numbered=this.numbered,t.scale=this.scale,t.readCellContentsToAT=this.readCellContentsToAT}));const a=t[0]?.cellCount||t[0]?.querySelectorAll("calcite-table-header")?.length;this.colCount=a,this.headRows=t,this.bodyRows=e,this.footRows=i,this.allRows=s,this.updateSelectedItems(),this.paginateRows()},this.handlePaginationChange=()=>{const t=this.paginationEl?.startItem;this.pageStartRow=t||1,this.calciteTablePageChange.emit(),this.updateRows()},this.paginateRows=()=>{this.bodyRows?.forEach((t=>{const e=t.positionSection+1;t.hidden=this.pageSize>0&&!(e>=this.pageStartRow&&e<this.pageStartRow+this.pageSize)&&!this.footRows.includes(t)}))},this.updateSelectedItems=t=>{const e=this.bodyRows?.filter((t=>t.selected));this.selectedItems=e,this.selectedCount=e?.length,this.allRows?.forEach((t=>{t.selectedRowCount=this.selectedCount,t.selectedRowCountLocalized=this.localizeNumber(this.selectedCount)})),t&&this.calciteTableSelect.emit()},this.handleDeselectAllRows=()=>{this.bodyRows?.forEach((t=>{t.selected=!1})),this.updateSelectedItems(!0)},this.setSelectedItems=t=>{this.bodyRows?.forEach((e=>{e.selected="head"===t?.rowType?this.selectedCount!==this.bodyRows?.length:t===e?!e.selected:"multiple"===this.selectionMode&&e.selected})),this.updateSelectedItems(!0)},this.localizeNumber=t=>(d.numberFormatOptions={locale:this.effectiveLocale,numberingSystem:this.numberingSystem,useGrouping:this.groupSeparator},d.localize(t.toString())),this.bordered=!1,this.caption=void 0,this.groupSeparator=!1,this.layout="auto",this.numbered=!1,this.numberingSystem=void 0,this.pageSize=0,this.scale="m",this.selectionMode="none",this.zebra=!1,this.selectedItems=[],this.messages=void 0,this.messageOverrides=void 0,this.colCount=0,this.pageStartRow=1,this.selectedCount=0,this.readCellContentsToAT=void 0,this.defaultMessages=void 0,this.effectiveLocale=""}handleNumberedChange(){this.updateRows()}onMessagesChange(){}effectiveLocaleChange(){o(this,this.effectiveLocale)}async componentWillLoad(){l(this),await r(this),this.readCellContentsToAT=/safari/i.test(u()),this.updateRows()}componentDidLoad(){n(this)}connectedCallback(){b(this),c(this)}disconnectedCallback(){p(this),h(this)}calciteChipSelectListener(t){t.composedPath().includes(this.el)&&this.setSelectedItems(t.target)}calciteInternalTableRowFocusEvent(t){const e=t.detail.cellPosition,i=t.detail.rowPosition,s=t.detail.destination,a=t.detail.lastCell,l=this.bodyRows?.filter((t=>!t.hidden)),n=this.allRows?.filter((t=>!t.hidden)),o=this.headRows[this.headRows.length-1]?.positionAll,r=l[0]?.positionAll,c=l[l.length-1]?.positionAll,h=this.footRows[0]?.positionAll,d=n[n.length-1]?.positionAll,b="next"===s&&i===o,p="previous"===s&&i===h,u="previous"===s&&i===r,m="next"===s&&i===c;let f;switch(s){case"first":f=0;break;case"last":f=d;break;case"next":f=b?r:m?h:i+1;break;case"previous":f=p?c:u?o:i-1}const g=this.allRows?.find((t=>t.positionAll===f))?.cellCount;void 0!==f&&this.calciteInternalTableRowFocusChange.emit({cellPosition:e>g?g:e,rowPosition:f,destination:s,lastCell:a})}renderSelectionArea(){const t=this.selectedItems?.filter((t=>t.hidden))?.length,e=this.localizeNumber(t?.toString()),s=`${this.localizeNumber(this.selectedCount?.toString())} ${this.messages.selected}`,a=`${e} ${this.messages.hiddenSelected}`;return i("div",{class:"selection-area"},i("calcite-chip",{kind:this.selectedCount>0?"brand":"neutral",scale:this.scale,value:s},s),t>0&&i("calcite-chip",{icon:"hide-empty",scale:this.scale,title:a,value:a},e),this.selectedCount>0&&i("calcite-button",{"icon-start":"x",kind:"neutral",onClick:this.handleDeselectAllRows,round:!0,scale:this.scale,title:`${this.messages.clear} ${s} ${this.messages.row}`},this.messages.clear),i("div",{class:"selection-actions"},i("slot",{name:"selection-actions"})))}renderPaginationArea(){return i("div",{class:"pagination-area"},i("calcite-pagination",{groupSeparator:this.groupSeparator,numberingSystem:this.numberingSystem,onCalcitePaginationChange:this.handlePaginationChange,pageSize:this.pageSize,scale:this.scale,startItem:1,totalItems:this.bodyRows?.length,ref:t=>this.paginationEl=t}))}renderTHead(){return i("thead",null,i("slot",{name:"table-header",onSlotchange:this.updateRows,ref:t=>this.tableHeadSlotEl=t}))}renderTBody(){return i("tbody",null,i("slot",{onSlotchange:this.updateRows,ref:t=>this.tableBodySlotEl=t}))}renderTFoot(){return i("tfoot",null,i("slot",{name:"table-footer",onSlotchange:this.updateRows,ref:t=>this.tableFootSlotEl=t}))}render(){return i(s,null,i("div",{class:"container"},"none"!==this.selectionMode&&this.renderSelectionArea(),i("div",{class:{bordered:this.bordered,zebra:this.zebra,"table-container":!0}},i("table",{"aria-colcount":this.colCount,"aria-multiselectable":"multiple"===this.selectionMode,"aria-readonly":!0,"aria-rowcount":this.allRows?.length,class:{"table--fixed":"fixed"===this.layout},role:"grid"},i("caption",{class:"assistive-text"},this.caption),this.renderTHead(),this.renderTBody(),this.renderTFoot())),this.pageSize>0&&this.renderPaginationArea()))}static get assetsDirs(){return["assets"]}get el(){return a(this)}static get watchers(){return{groupSeparator:["handleNumberedChange"],numbered:["handleNumberedChange"],numberingSystem:["handleNumberedChange"],pageSize:["handleNumberedChange"],scale:["handleNumberedChange"],selectionMode:["handleNumberedChange"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}};m.style=":host([scale=s]){--calcite-internal-table-cell-padding:0.25rem;--calcite-internal-table-cell-font-size:var(--calcite-font-size--2);--calcite-internal-table-cell-font-size-secondary:var(--calcite-font-size--3)}:host([scale=m]){--calcite-internal-table-cell-padding:0.5rem;--calcite-internal-table-cell-font-size:var(--calcite-font-size--1);--calcite-internal-table-cell-font-size-secondary:var(--calcite-font-size--2)}:host([scale=l]){--calcite-internal-table-cell-padding:1rem;--calcite-internal-table-cell-font-size:var(--calcite-font-size-0);--calcite-internal-table-cell-font-size-secondary:var(--calcite-font-size--1)}:host{display:table}.container{max-inline-size:100vw;inline-size:100%}.table-container{overflow-x:auto;white-space:nowrap}.table-container:not(.bordered){border-block-end:1px solid var(--calcite-ui-border-3)}.assistive-text{position:absolute;inline-size:1px;block-size:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}table{inline-size:100%;border-collapse:collapse;overflow-x:scroll;border-block-start:1px solid var(--calcite-ui-border-3);border-inline-start:1px solid var(--calcite-ui-border-3);border-block-end:1px solid var(--calcite-ui-border-3)}tbody{border-block-end:1px solid var(--calcite-ui-border-3)}.table--fixed{table-layout:fixed}.bordered ::slotted(calcite-table-row){--calcite-table-row-border-color:var(--calcite-ui-border-3)}.zebra ::slotted(calcite-table-row:nth-child(2n+1)){--calcite-table-row-background:var(--calcite-ui-foreground-2)}.selection-actions{display:flex;flex-direction:row;margin-inline-start:auto}.selection-area{display:flex;flex-direction:row;align-items:center;padding-block:var(--calcite-internal-table-cell-padding)}.selection-area calcite-chip:last-of-type{margin-inline-end:0.5rem}.selection-area calcite-chip:last-of-type:not(:first-of-type){margin-inline-start:0.5rem}.selection-area calcite-button{margin-inline-end:1rem}.pagination-area{display:flex;inline-size:100%;flex-direction:row;justify-content:center;padding-block:var(--calcite-internal-table-cell-padding)}:host([hidden]){display:none}[hidden]{display:none}";export{m as calcite_table}