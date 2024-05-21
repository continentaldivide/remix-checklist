import { useEffect } from "react";
import { useAppStateContext } from "../_context/AppStateContext";
import NewsItem from "./NewsItem";
import packageInfo from "./../../package.json";
import updates from "../_data/updates";

export default function NewsModal() {
  const { appState, appStateDispatch } = useAppStateContext();
  const closeModal = () => {
    appStateDispatch({ type: "toggle news" });
    localStorage.setItem("lastNewsVersion", packageInfo.version);
  };

  useEffect(() => {
    document.body.style.overflow = appState.newsOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [appState.newsOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  const newsItems = updates.map((news, i) => {
    return <NewsItem news={news} key={`newsItem ${i}`} />;
  });

  return (
    <div>
      <div
        className="fixed inset-0 bg-neutral-900/40 z-40 animate-modal-bg-fade"
        onClick={closeModal}
      ></div>
      <div className="fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-4/5 md:w-3/4 xl:w-1/2 bg-emerald-600 rounded-xl z-50 shadow-lg animate-modal-appear">
        <h1 className="bg-emerald-700 rounded-t-xl text-2xl text-center font-bold p-4">
          What's new?
        </h1>
        <div className="flex flex-col">
          <div className="overflow-auto max-h-[60svh]">{newsItems}</div>
          <button
            onClick={closeModal}
            className="m-4 px-4 py-1 text-lg font-semibold bg-emerald-700 hover:bg-emerald-800 active:bg-emerald-900 rounded-md mx-auto"
          >
            Got it, thanks!
          </button>
        </div>
      </div>
    </div>
  );
}
