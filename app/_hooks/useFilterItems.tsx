import { ItemType } from "../_interfaces/Bronze.interface";
import Item from "../_components/Item";
import { useAppStateContext } from "../_context/AppStateContext";

export default function useFilterItems(items: ItemType[], event: "mists" | "legion") {
  const { appState } = useAppStateContext();
  const unignoredItems = items.map((item, i) => {
    if (!item.eventOnlyItem && appState.ignoredItems.nonEvent) {
      return;
    }
    if (appState.checkedMap[item.id] && appState.ignoredItems.obtained) {
      return;
    }
    return <Item item={item} event={event} key={`item ${i}`} />;
  });

  const definedItems = unignoredItems.filter((item) => {
    return item !== undefined;
  });

  return definedItems;
}
