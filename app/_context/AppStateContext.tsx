import React, { createContext, useContext, useReducer, ReactNode } from "react";
import { AppStateType } from "../_interfaces/AppState.interface";
import { AppActionsType } from "../_interfaces/AppActions.interface";
import packageInfo from "./../../package.json";

const AppStateContext = createContext<
  | { appState: AppStateType; appStateDispatch: React.Dispatch<AppActionsType> }
  | undefined
>(undefined);

const appStateReducer: (
  state: AppStateType,
  action: AppActionsType
) => AppStateType = (state, action) => {
  switch (action.type) {
    case "set checkedMap":
      return {
        ...state,
        checkedMap: { ...action.checkedMap },
      };
    case "set vendorMap":
      return {
        ...state,
        closedVendorMap: { ...action.vendorMap },
      };
    case "set ignoredVendorMap":
      return {
        ...state,
        ignoredVendorMap: { ...action.ignoredVendorMap },
      };
    case "set lastNewsVersion":
      return {
        ...state,
        lastNewsVersion: action.version,
      };
    case "set YPosition":
      return {
        ...state,
        yPosition: action.position,
      };
    case "toggle show vendor":
      let newVendorMap = { ...state.closedVendorMap };
      newVendorMap[action.id] = !state.closedVendorMap[action.id];
      localStorage.setItem("vendorMap", JSON.stringify(newVendorMap));
      return {
        ...state,
        closedVendorMap: newVendorMap,
      };
    case "toggle ignore vendor":
      let newIgnoredVendorMap = { ...state.ignoredVendorMap };
      newIgnoredVendorMap[action.id] = !state.ignoredVendorMap[action.id];
      localStorage.setItem(
        "ignoredVendorMap",
        JSON.stringify(newIgnoredVendorMap)
      );
      return {
        ...state,
        ignoredVendorMap: newIgnoredVendorMap,
      };
    case "toggle checked":
      let newCheckedMap = { ...state.checkedMap };
      newCheckedMap[action.id] = !state.checkedMap[action.id];
      localStorage.setItem("checkedMap", JSON.stringify(newCheckedMap));
      return {
        ...state,
        checkedMap: newCheckedMap,
      };
    case "toggle news":
      if (action.openOrClose === "open") {
        localStorage.setItem("lastNewsVersion", state.currentVersion);
      }
      return {
        ...state,
        newsOpen: !state.newsOpen,
      };
    case "toggle menu":
      return {
        ...state,
        menuOpen: !state.menuOpen,
      };
    case "toggle ignore":
      return {
        ...state,
        ignoredItems: {
          ...state.ignoredItems,
          [action.category]: !state.ignoredItems[action.category],
        },
      };
    default:
      return state;
  }
};

const initialState: AppStateType = {
  checkedMap: {},
  yPosition: 0,
  closedVendorMap: {},
  ignoredVendorMap: {},
  ignoredItems: {
    mounts: false,
    toys: false,
    armor: false,
    nonEvent: false,
  },
  newsOpen: false,
  menuOpen: false,
  currentVersion: packageInfo.version,
  lastNewsVersion: "",
};

export function AppStateContextProvider({ children }: { children: ReactNode }) {
  const [appState, appStateDispatch] = useReducer(
    appStateReducer,
    initialState
  );
  return (
    <AppStateContext.Provider value={{ appState, appStateDispatch }}>
      {children}
    </AppStateContext.Provider>
  );
}

export function useAppStateContext() {
  const stateAndDispatch = useContext(AppStateContext);
  if (!stateAndDispatch) {
    throw new Error("Context must be used within a Provider");
  }
  return stateAndDispatch;
}
