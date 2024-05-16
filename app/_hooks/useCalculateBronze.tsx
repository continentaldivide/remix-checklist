import { BronzeType } from "../_interfaces/Bronze.interface";

export default function useCalculateBronze(
  bronze: BronzeType,
  checkedMap: Record<string, boolean>,
  ignoredVendorMap: Record<string, boolean>
) {
  let sum = 0;
  bronze.vendors.forEach((vendor, i) => {
    if (ignoredVendorMap[i]) {
      return;
    }
    vendor.items.forEach((item) => {
      if (!checkedMap[item.id]) {
        sum += item.cost;
      }
    });
  });
  return sum;
}
