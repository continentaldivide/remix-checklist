export interface AppStateType {
  checkedMap: Record<string, boolean>;
  yPosition: number;
  closedVendorMap: Record<string, boolean>;
  ignoredVendorMap: Record<string, boolean>;
  ignoredItems: IgnoredItemsType;
  newsOpen: boolean;
  currentVersion: string;
  lastNewsVersion: string;
}

export interface IgnoredItemsType {
  vendors?: Record<string, boolean>;
  classes?: Record<string, boolean>;
  mounts: boolean;
  armor: boolean;
  toys: boolean;
  nonEvent: boolean;
}
