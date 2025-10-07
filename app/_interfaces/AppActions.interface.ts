import { IgnoredItemsType } from "./AppState.interface";

interface setCheckedMap {
  type: "set checkedMap";
  checkedMap: Record<string, boolean>;
}

interface setVendorMap {
  type: "set vendorMap";
  vendorMap: Record<string, boolean>;
}

interface setIgnoredVendorMap {
  type: "set ignoredVendorMap";
  ignoredVendorMap: Record<string, boolean>;
}

interface setLastNewsVersion {
  type: "set lastNewsVersion";
  version: string;
}

interface setIgnoredItems {
  type: "set ignoredItems";
  ignoredItems: IgnoredItemsType;
}

interface setYPosition {
  type: "set YPosition";
  position: number;
}

interface setSearchQuery {
  type: "set searchQuery";
  searchQuery: string;
}

interface toggleShowVendor {
  type: "toggle show vendor";
  id: number;
}

interface toggleIgnoreVendor {
  type: "toggle ignore vendor";
  id: number;
}

interface toggleChecked {
  type: "toggle checked";
  id: number;
}

interface toggleNews {
  type: "toggle news";
  openOrClose: "open" | "close";
}

interface toggleMenu {
  type: "toggle menu";
}

interface toggleIgnore {
  type: "toggle ignore";
  // as currently implemented, these category options MUST match the props of appState.ignoredItems!
  category: "nonEvent" | "armor" | "mounts" | "toys" | "obtained";
}

export type AppActionsType =
  | setCheckedMap
  | setVendorMap
  | setIgnoredVendorMap
  | setLastNewsVersion
  | setIgnoredItems
  | setYPosition
  | setSearchQuery
  | toggleShowVendor
  | toggleIgnoreVendor
  | toggleChecked
  | toggleNews
  | toggleMenu
  | toggleIgnore;
