import Item from "./Item";
import { VendorType } from "../_interfaces/Bronze.interface";

export default function Vendor({ vendor }: { vendor: VendorType }) {
  const items = vendor.items.map((item, i) => {
    return <Item item={item} key={`item ${i}`} />;
  });
  return (
    <div className="border border-purple-900">
      <p>{vendor.name}</p>
      <p>items:</p>
      <div>{items}</div>
    </div>
  );
}
