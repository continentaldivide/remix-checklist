import { ItemType } from "../_interfaces/Bronze.interface";
import { useState } from "react";

export default function Item({ item }: { item: ItemType }) {
  const [checked, setChecked] = useState(true);

  return (
    <div
      className="border border-pink-800 flex justify-between"
      onClick={() => setChecked(!checked)}
    >
      <p>
        {item.name}: {item.cost}
      </p>
      <input type="checkbox" name="" id="" checked={checked} />
    </div>
  );
}
