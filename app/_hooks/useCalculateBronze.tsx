import { BronzeType } from "../_interfaces/Bronze.interface";

export default function useCalculateBronze(
  bronze: BronzeType,
  checkedMap: Record<string, boolean>
) {
  let sum = 0;
  bronze.vendors.forEach((vendor) => {
    vendor.items.forEach((item) => {
      if (!checkedMap[item.id]) {
        sum += item.cost;
      }
    });
  });
  return sum;
}
