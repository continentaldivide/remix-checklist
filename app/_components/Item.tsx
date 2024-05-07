import { ItemType } from "../_interfaces/Bronze.interface";
import { useAppStateContext } from "../_context/AppStateContext";

export default function Item({ item }: { item: ItemType }) {
  const { appState, appStateDispatch } = useAppStateContext();
  const handleItemClick = () => {
    appStateDispatch({ type: "toggle checked", id: item.id });
  };

  return (
    <div
      className="flex justify-end min-h-12 odd:bg-emerald-700 even:bg-emerald-800 select-none cursor-pointer last:rounded-b-md"
      onClick={handleItemClick}
    >
      <div className="w-full mx-2 my-auto">
        <p className="text-lg">{item.name}</p>
      </div>
      <div className="relative shrink-0 size-8 my-auto">
        <img
          src="bronze.jpg"
          alt="Icon for MOP Remix Bronze currency."
          className="brightness-50 rounded-md"
        />
        <p className="absolute text-xs top-2 font-bold">{item.cost}</p>
      </div>
      <input
        type="checkbox"
        name=""
        id=""
        readOnly
        // operation below works fine without the OR condition, but makes react throw an error if checkedMap[item.id] produces a falsy value instead of a bool
        checked={appState.checkedMap[item.id] || false}
        className="size-8 mx-2 my-auto text-emerald-900 rounded-md cursor-pointer"
      />
    </div>
  );
}
