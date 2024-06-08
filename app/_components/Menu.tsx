import SwitchComponent from "./SwitchComponent";
import { useAppStateContext } from "../_context/AppStateContext";

export default function Menu() {
  const { appState, appStateDispatch } = useAppStateContext();
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
          show only event exclusives
        </button>
        <SwitchComponent
          checked={appState.ignoredItems.nonEvent}
          onChange={() => {
            appStateDispatch({ type: "toggle ignore", category: "nonEvent" });
          }}
        />
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
        <SwitchComponent
          checked={appState.ignoredItems.obtained}
          onChange={() => {
            appStateDispatch({ type: "toggle ignore", category: "obtained" });
          }}
        />
      </div>
    </div>
  );
}
