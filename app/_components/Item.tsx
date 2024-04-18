import { ItemType } from "../_interfaces/Bronze.interface";
import { useAppStateContext } from "../_context/AppStateContext";

export default function Item({ item }: { item: ItemType }) {
  const { appState, appStateDispatch } = useAppStateContext();
  const handleItemClick = () => {
    appStateDispatch({ type: "toggle checked", id: item.id });
  };

  return (
    <div
      className="flex justify-between odd:bg-emerald-700 even:bg-emerald-800 select-none cursor-pointer"
      onClick={handleItemClick}
    >
      <div className="">
        <p>
          {item.name}: {item.cost}
        </p>
        <p>
          {/* PH -- going to add additional text/info about each item */}
          {item.name}: {item.cost}
        </p>
      </div>
      <input
        type="checkbox"
        name=""
        id=""
        readOnly
        // operation below works fine without the OR condition, but makes react throw an error if checkedMap[item.id] produces a falsy value instead of a bool
        checked={appState.checkedMap[item.id] || false}
        className="min-w-8 min-h-8 mx-2 my-auto  text-emerald-900 rounded-md cursor-pointer"
      />
    </div>
  );
}
