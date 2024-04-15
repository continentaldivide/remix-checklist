import { ItemType } from "../_interfaces/Bronze.interface";

export default function Item({
  item,
  checkedArray,
  setCheckedArray,
}: {
  item: ItemType;
  checkedArray: boolean[];
  setCheckedArray: any;
}) {
  const handleItemClick = () => {
    let newCheckedArray = [...checkedArray];
    newCheckedArray[item.id] = !checkedArray[item.id];
    localStorage.setItem(
      "checkedArray",
      JSON.stringify({ checked: newCheckedArray })
    );
    setCheckedArray(newCheckedArray);
  };

  return (
    <div
      className="border border-pink-800 flex justify-between"
      onClick={handleItemClick}
    >
      <p>
        {item.name}: {item.cost}
      </p>
      <input
        type="checkbox"
        name=""
        id=""
        checked={checkedArray[item.id]}
        onChange={handleItemClick}
      />
    </div>
  );
}
