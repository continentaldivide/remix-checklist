import { ItemType } from "../_interfaces/Bronze.interface";

export default function Item({
  item,
  checkedMap,
  setCheckedMap,
}: {
  item: ItemType;
  checkedMap: Record<string, boolean>;
  setCheckedMap: React.Dispatch<React.SetStateAction<Record<string, boolean>>>;
}) {
  const handleItemClick = () => {
    let newCheckedMap = { ...checkedMap };
    newCheckedMap[item.id] = !checkedMap[item.id];
    localStorage.setItem("checkedMap", JSON.stringify(newCheckedMap));
    setCheckedMap(newCheckedMap);
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
        // operation below works fine without the OR condition, but makes react throw an error if checkedMap[item.id] produces a falsy value instead of a bool
        checked={checkedMap[item.id] || false}
        onChange={handleItemClick}
      />
    </div>
  );
}
