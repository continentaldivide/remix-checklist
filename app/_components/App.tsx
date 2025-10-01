import bronze from "../_data/bronze-2";
import Vendor from "../_components/Vendor";
import { useEffect } from "react";
import useCalculateBronze from "../_hooks/useCalculateBronze";
import useGetLocalState from "../_hooks/useGetLocalState";
import { useAppStateContext } from "../_context/AppStateContext";
import NewsModal from "./NewsModal";

export default function App() {
  const { appState, appStateDispatch } = useAppStateContext();

  useGetLocalState();

  useEffect(() => {
    const handleScroll = () => {
      appStateDispatch({ type: "set YPosition", position: window.scrollY });
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  let bronzeTotal = useCalculateBronze(
    bronze,
    appState.checkedMap,
    appState.ignoredVendorMap,
    appState.ignoredItems
  );

  const vendors = bronze.vendors.map((vendor, i) => {
    return <Vendor vendor={vendor} key={`vendor ${i}`} />;
  });

  return (
    <div className="flex flex-col items-center pb-20 xl:w-2/5 mx-auto">
      {appState.newsOpen ? <NewsModal /> : null}
      {/* z-positioning here needs to be higher than Vendor header so that Vendor header hides when it gets bumped off the screen by the next vendor */}
      <h1 className="text-xl lg:text-3xl text-center p-2 z-20 sticky min-h-11 lg:min-h-14 min-w-full top-0 bg-emerald-900">
        total{" "}
        <img
          height="24"
          width="24"
          src="/bronze.jpg"
          className="inline rounded-md"
          alt="bronze coin"
        ></img>{" "}
        required: {bronzeTotal}
      </h1>
      {vendors}
      {appState.yPosition === 0 ? null : (
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            appStateDispatch({
              type: "set YPosition",
              position: 0,
            });
          }}
          className="fixed bottom-4 min-w-[50%] xl:min-w-48 text-xl lg:text-2xl p-2 bg-emerald-900/90 rounded-md z-20"
        >
          back to top
        </button>
      )}
    </div>
  );
}
