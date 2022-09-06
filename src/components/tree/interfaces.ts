export interface TreeSelectDetail {
  selected: HTMLCalciteTreeItemElement[];
}

export enum TreeSelectionMode {
  Single = "single",
  Multi = "multi",
  None = "none",
  Children = "children",
  MultiChildren = "multi-children",
  Ancestors = "ancestors"
}
