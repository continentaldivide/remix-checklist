"use client";

import Header from "../_components/Header";
import App from "../_components/App";

export default function Home() {
  return (
    <main className="min-h-screen bg-emerald-900">
      <Header />
      <App event="mists" />
    </main>
  );
}
