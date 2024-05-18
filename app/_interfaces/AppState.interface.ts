export interface AppStateType {
  checkedMap: Record<string, boolean>;
  yPosition: number;
  closedVendorMap: Record<string, boolean>;
  ignoredVendorMap: Record<string, boolean>;
  newsOpen: boolean;
}
