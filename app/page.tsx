"use client";

import { AppStateContextProvider } from "./_context/AppStateContext";
import App from "./_components/App";

export default function Home() {
  return (
    <main className="bg-emerald-900">
      <AppStateContextProvider>
        <App />
      </AppStateContextProvider>
    </main>
  );
}
