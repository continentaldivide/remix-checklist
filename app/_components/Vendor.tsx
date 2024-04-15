import Item from "./Item";
import { VendorType } from "../_interfaces/Bronze.interface";

export default function Vendor({
  vendor,
  checkedArray,
  setCheckedArray,
}: {
  vendor: VendorType;
  checkedArray: boolean[];
  setCheckedArray: any;
}) {
  const items = vendor.items.map((item, i) => {
    return (
      <Item
        item={item}
        key={`item ${i}`}
        checkedArray={checkedArray}
        setCheckedArray={setCheckedArray}
      />
    );
  });
  return (
    <div className="w-1/4 border border-purple-900">
      <p>{vendor.name}</p>
      <div>{items}</div>
    </div>
  );
}
