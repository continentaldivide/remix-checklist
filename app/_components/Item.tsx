import { ItemType } from "../_interfaces/Bronze.interface";

export default function Item({ item }: { item: ItemType }) {
  return (
    <div className="border border-pink-800">
      <p>
        {item.name}: {item.cost}
      </p>
    </div>
  );
}
