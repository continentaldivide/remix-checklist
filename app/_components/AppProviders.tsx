"use client";

import { AppStateContextProvider } from "../_context/AppStateContext";

export function AppProviders({ children }: { children: React.ReactNode }) {
  return <AppStateContextProvider>{children}</AppStateContextProvider>;
}
