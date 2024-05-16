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

export type AppActionsType =
  | setCheckedMap
  | setVendorMap
  | setIgnoredVendorMap
  | setYPosition
  | toggleShowVendor
  | toggleIgnoreVendor
  | toggleChecked;
