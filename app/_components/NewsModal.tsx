import { useEffect } from "react";
import { useAppStateContext } from "../_context/AppStateContext";
import packageInfo from "./../../package.json";
console.log(packageInfo.version);

export default function NewsModal() {
  const { appStateDispatch } = useAppStateContext();
  const closeModal = () => {
    appStateDispatch({ type: "toggle news" });
    localStorage.setItem("lastNewsVersion", packageInfo.version);
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <div>
      <div
        className="fixed inset-0 bg-neutral-900/40 z-40 animate-modal-bg-fade"
        onClick={closeModal}
      ></div>
      <div className="fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-3/4 md:w-3/4 lg:w-1/3 bg-emerald-600 rounded-xl z-50 shadow-lg animate-modal-appear">
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
            onClick={closeModal}
            className="px-4 py-1 text-lg font-semibold bg-emerald-400 hover:bg-emerald-500 active:bg-emerald-600 rounded-md"
          >
            thank you for news
          </button>
        </div>
      </div>
    </div>
  );
}
