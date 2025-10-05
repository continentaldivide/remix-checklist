import { BronzeType } from "../_interfaces/Bronze.interface";
import { IgnoredItemsType } from "../_interfaces/AppState.interface";

export default function useCalculateBronze(
  bronze: BronzeType,
  checkedMap: Record<string, boolean>,
  ignoredVendorMap: Record<string, boolean>,
  ignoredItems: IgnoredItemsType
) {
  let sum = 0;
  bronze.vendors.forEach((vendor) => {
    if (ignoredVendorMap[vendor.id]) {
      return;
    }
    vendor.items.forEach((item) => {
      if (!item.eventOnlyItem && ignoredItems.nonEvent) {
        return;
      }
      if (!checkedMap[item.id]) {
        sum += item.cost;
      }
    });
  });
  return sum;
}
