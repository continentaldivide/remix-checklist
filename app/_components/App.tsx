import bronze from "../_data/bronze";
import Vendor from "../_components/Vendor";
import { useEffect } from "react";
import useCalculateBronze from "../_hooks/useCalculateBronze";
import { useAppStateContext } from "../_context/AppStateContext";

export default function App() {
  const { appState, appStateDispatch } = useAppStateContext();
  const defaultMap: Record<string, boolean> = {};
  let bronzeTotal: number = 0;

  useEffect(() => {
    const localMap = localStorage.getItem("checkedMap");
    if (!localMap) {
      localStorage.setItem("checkedMap", JSON.stringify(defaultMap));
    } else {
      const parsedLocalMap = JSON.parse(localMap);
      appStateDispatch({ type: "set checkedMap", checkedMap: parsedLocalMap });
    }
  }, []);

  bronzeTotal = useCalculateBronze(bronze, appState.checkedMap);

  const vendors = bronze.vendors.map((vendor, i) => {
    return <Vendor vendor={vendor} key={`vendor ${i}`} />;
  });

  return (
    <div className="flex min-h-screen flex-col items-center p-12">
      <h1 className="text-xl text-center p-2 w-full sticky top-0 bg-emerald-900">
        total bronze required: {bronzeTotal}
      </h1>
      {vendors}
    </div>
  );
}
