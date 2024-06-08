import MenuOption from "./MenuOption";
import { useAppStateContext } from "../_context/AppStateContext";

export default function Menu() {
  const { appState, appStateDispatch } = useAppStateContext();
  return (
    <div className="absolute top-14 left-2 z-50 rounded-md">
      <MenuOption
        checked={appState.ignoredItems.nonEvent}
        label="show only event exclusives"
        dispatch={() =>
          appStateDispatch({
            type: "toggle ignore",
            category: "nonEvent",
          })
        }
      />
      <MenuOption
        checked={appState.ignoredItems.obtained}
        label="hide checked items"
        dispatch={() =>
          appStateDispatch({ type: "toggle ignore", category: "obtained" })
        }
      />
    </div>
  );
}
