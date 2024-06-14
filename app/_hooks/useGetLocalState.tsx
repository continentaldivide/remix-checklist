import { useAppStateContext } from "../_context/AppStateContext";
import { useEffect } from "react";

export default function useGetLocalState() {
  const { appStateDispatch } = useAppStateContext();
  const defaultMap: Record<string, boolean> = {};

  const retrieveLocalMap = (
    mapName: "checkedMap" | "vendorMap" | "ignoredVendorMap"
  ) => {
    const localMap = localStorage.getItem(mapName);
    if (!localMap) {
      localStorage.setItem(mapName, JSON.stringify(defaultMap));
    } else {
      const parsedLocalMap: Record<string, boolean> = JSON.parse(localMap);
      // dispatch action below makes TS mad because (if I've arrived at the correct understanding) it can't/won't check whether each member of the union string type of mapName results in correct typing.  Instead it infers the type of the computed property mapName as string which is insufficiently narrow to avoid errors.  Ref https://github.com/microsoft/TypeScript/issues/51734.
      // @ts-ignore
      appStateDispatch({
        type: `set ${mapName}`,
        [mapName]: parsedLocalMap,
      });
    }
  };
  useEffect(() => {
    retrieveLocalMap("checkedMap");
    retrieveLocalMap("vendorMap");
    retrieveLocalMap("ignoredVendorMap");
    const lastNewsVersion = localStorage.getItem("lastNewsVersion") || "";
    appStateDispatch({ type: "set lastNewsVersion", version: lastNewsVersion });
  }, []);
}
