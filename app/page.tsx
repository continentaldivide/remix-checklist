"use client";

import { AppStateContextProvider } from "./_context/AppStateContext";
import App from "./_components/App";
import Header from "./_components/Header";

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
