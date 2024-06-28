"use client";

import { AppStateContextProvider } from "./_context/AppStateContext";
import Header from "./_components/Header";
import App from "./_components/App";

export default function Home() {
  return (
    <main className="min-h-screen bg-emerald-900">
      <AppStateContextProvider>
        <Header />
        <App />
      </AppStateContextProvider>
    </main>
  );
}
