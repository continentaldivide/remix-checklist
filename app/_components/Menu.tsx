import { useAppStateContext } from "../_context/AppStateContext";

export default function Menu() {
  const { appStateDispatch } = useAppStateContext();
  return (
    <div className="absolute top-12 left-0 z-50">
      <div className="odd:bg-gray-600 even:bg-gray-700 flex justify-between items-center">
        <button
          onClick={(e) => {
            e.stopPropagation();
            appStateDispatch({ type: "toggle ignore", category: "nonEvent" });
          }}
          className="my-auto hover:brightness-125"
        >
          toggle non event exclusives
        </button>
        <input type="checkbox" />
      </div>
      <div className="odd:bg-gray-600 even:bg-gray-700 flex justify-between items-center">
        <button
          onClick={(e) => {
            e.stopPropagation();
            appStateDispatch({ type: "toggle ignore", category: "obtained" });
          }}
          className="my-auto hover:brightness-125"
        >
          Hide checked items
        </button>
        <input type="checkbox" />
      </div>
    </div>
  );
}
