interface setCheckedMap {
  type: "set checkedMap";
  checkedMap: Record<string, boolean>;
}

interface setVendorMap {
  type: "set vendorMap";
  vendorMap: Record<string, boolean>;
}

interface setYPosition {
  type: "set YPosition";
  position: number;
}

interface toggleVendor {
  type: "toggle vendor";
  id: number;
}

interface toggleChecked {
  type: "toggle checked";
  id: number;
}

export type AppActionsType =
  | setCheckedMap
  | setVendorMap
  | setYPosition
  | toggleVendor
  | toggleChecked;
