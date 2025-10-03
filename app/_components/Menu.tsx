import MenuOption from "./MenuOption";
import { useAppStateContext } from "../_context/AppStateContext";
import useEventClasses from "../_hooks/useEventClasses";

export default function Menu({ event }: { event: "mists" | "legion" }) {
  const { border700 } = useEventClasses(event);
  const { appState, appStateDispatch } = useAppStateContext();
  return (
    <div
      className={`absolute top-14 left-2 z-50 rounded-md border-2 ${border700}`}
    >
      <MenuOption
        event={event}
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
        event={event}
        checked={appState.ignoredItems.obtained}
        label="hide checked items"
        dispatch={() =>
          appStateDispatch({ type: "toggle ignore", category: "obtained" })
        }
      />
    </div>
  );
}
