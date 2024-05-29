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

interface setYPosition {
  type: "set YPosition";
  position: number;
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
  // as currently implemented, these category options MUST match the props of appState.ignoredMap!
  category: "nonEvent" | "armor" | "mounts" | "toys";
}

export type AppActionsType =
  | setCheckedMap
  | setVendorMap
  | setIgnoredVendorMap
  | setLastNewsVersion
  | setYPosition
  | toggleShowVendor
  | toggleIgnoreVendor
  | toggleChecked
  | toggleNews
  | toggleMenu
  | toggleIgnore;
