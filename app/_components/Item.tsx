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
      {item.wowheadId ? (
        <div
          className="relative mx-2 shrink-0 size-8 my-auto"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <a
            href={`https://wowhead.com/item=${item.wowheadId}`}
            target="_blank"
          >
            <img
              src="wowhead-small.png"
              alt="Link to Wowhead item page."
              className="rounded-md"
            />
          </a>
        </div>
      ) : null}
      <div className="relative shrink-0 size-8 my-auto">
        <img
          src="bronze.jpg"
          alt="Icon for MOP Remix Bronze currency."
          className="brightness-50 rounded-md"
        />
        <p className="absolute top-2 w-8 text-xs font-bold flex justify-center">
          {item.cost}
        </p>
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
