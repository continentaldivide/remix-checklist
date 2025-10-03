"use client";

import Header from "../_components/Header";
import App from "../_components/App";
import useEventClasses from "../_hooks/useEventClasses";

export default function Home() {
  const event = "mists";
  const { bg900 } = useEventClasses(event);
  return (
    <main className={`min-h-screen ${bg900}`}>
      <Header event={event} />
      <App event={event} />
    </main>
  );
}
