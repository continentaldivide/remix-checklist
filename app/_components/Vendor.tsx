import Item from "./Item";
import { VendorType } from "../_interfaces/Bronze.interface";
import React from "react";

export default function Vendor({ vendor }: { vendor: VendorType }) {
  const items = vendor.items.map((item, i) => {
    return <Item item={item} key={`item ${i}`} />;
  });
  return (
    <div>
      <div className="text-center bg-emerald-950 sticky top-11">
        <h1 className="text-xl">{vendor.name}</h1>
        <h2 className="text-lg">{vendor.description}</h2>
      </div>
      <div>{items}</div>
    </div>
  );
}
