import { ItemType } from "../_interfaces/Bronze.interface";
import { useAppStateContext } from "../_context/AppStateContext";

export default function Item({ item }: { item: ItemType }) {
  const { appState, appStateDispatch } = useAppStateContext();
  const handleItemClick = () => {
    appStateDispatch({ type: "toggle checked", id: item.id });
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
        readOnly
        // operation below works fine without the OR condition, but makes react throw an error if checkedMap[item.id] produces a falsy value instead of a bool
        checked={appState.checkedMap[item.id] || false}
      />
    </div>
  );
}
