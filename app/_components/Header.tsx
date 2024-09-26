import { useState, useEffect } from "react";
import { useAppStateContext } from "../_context/AppStateContext";
import Menu from "./Menu";

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
    <div className="bg-emerald-950 min-h-12 px-4 flex justify-between items-center relative">
      <div className="w-20 flex">
        <button
          onClick={() => {
            appStateDispatch({ type: "toggle menu" });
          }}
          className="my-auto hover:brightness-125"
        >
          <img height="24" width="24" src="menu.svg" alt="Menu icon" />
        </button>
      </div>
      {/* yPosition condition below is because menu looks jank when starting to scroll.  When the header is fixed to top in a future update, this condition will need to be removed. */}
      {appState.menuOpen && appState.yPosition === 0 ? <Menu /> : null}
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
            src="https://cdn.simpleicons.org/buymeacoffee/cccccc/"
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
            src="https://cdn.simpleicons.org/github/cccccc/"
            alt="GitHub"
          />
        </a>
      </div>
    </div>
  );
}
