import { useEffect } from "react";
import { useAppStateContext } from "../_context/AppStateContext";

export default function NewsModal() {
  const { appState, appStateDispatch } = useAppStateContext();
  const leaveModal = () => {
    if (appState.newsOpen) {
      appStateDispatch({ type: "toggle news" });
    }
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        leaveModal();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <div>
      <div
        className="fixed inset-0 bg-neutral-900/40 z-40"
        onClick={leaveModal}
      ></div>
      <div className="fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-3/4 md:w-3/4 lg:w-1/3 bg-emerald-600 rounded-xl z-50 shadow-lg">
        <h1 className="bg-emerald-700 rounded-t-xl text-xl font-bold p-4">
          hello it's the news
        </h1>
        <div className="flex flex-col gap-4 m-4 text-lg">
          <p>
            This is news about new code since the last visit. It does stuff:
          </p>
          <ul className="list-disc list-inside">
            <li>one stuff</li>
            <li>two stuff</li>
            <li>red stuff</li>
            <li>blue stuff</li>
          </ul>
          <button
            onClick={leaveModal}
            className="px-4 py-1 text-lg font-semibold bg-emerald-400 hover:bg-emerald-500 active:bg-emerald-600 rounded-md"
          >
            thank you for news
          </button>
        </div>
      </div>
    </div>
  );
}
