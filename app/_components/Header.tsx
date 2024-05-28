import { useState, useEffect } from "react";
import { useAppStateContext } from "../_context/AppStateContext";

export default function Header() {
  const [newsIconStyle, setNewsIconStyle] = useState("");
  const { appState, appStateDispatch } = useAppStateContext();

  useEffect(() => {
    if (appState.currentVersion !== appState.lastNewsVersion) {
      setNewsIconStyle("animate-pulse");
    } else {
      setNewsIconStyle("");
    }
  }, [appState.lastNewsVersion]);

  return (
    <div className="bg-emerald-950 min-h-12 px-4 flex justify-between items-center">
      <div className="w-20 border border-pink-300">
        <button
          onClick={() => {
            appStateDispatch({ type: "toggle ignore", category: "nonEvent" });
          }}
        >
          only event exclusives
        </button>
      </div>
      <h1 className="text-xl lg:text-2xl font-bold">Remix Checklist</h1>
      <div className="w-20 flex gap-2 justify-end">
        <button
          onClick={() => {
            appStateDispatch({ type: "toggle news", openOrClose: "open" });
            appStateDispatch({
              type: "set lastNewsVersion",
              version: appState.currentVersion,
            });
          }}
          className={`my-auto hover:brightness-125 ${newsIconStyle}`}
        >
          <img height="24" width="24" src="news.svg" alt="News icon" />
        </button>
        <a
          target="_blank"
          href="https://buymeacoffee.com/continentaldivide"
          className="my-auto hover:brightness-125"
        >
          <img
            height="24"
            width="24"
            src="https://cdn.simpleicons.org/buymeacoffee/CCCCCC/"
            alt="Buy me a coffee"
          />
        </a>
        <a
          target="_blank"
          href="https://github.com/continentaldivide/remix-checklist"
          className="my-auto hover:brightness-125"
        >
          <img
            height="24"
            width="24"
            src="https://cdn.simpleicons.org/github/CCCCCC/"
            alt="GitHub"
          />
        </a>
      </div>
    </div>
  );
}
