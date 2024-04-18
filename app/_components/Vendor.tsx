import Item from "./Item";
import { VendorType } from "../_interfaces/Bronze.interface";
import React from "react";

export default function Vendor({ vendor }: { vendor: VendorType }) {
  const items = vendor.items.map((item, i) => {
    return <Item item={item} key={`item ${i}`} />;
  });
  return (
    <div className="">
      <h1 className="text-lg text-center bg-[#732c1a]">{vendor.name}</h1>
      <div>{items}</div>
    </div>
  );
}
