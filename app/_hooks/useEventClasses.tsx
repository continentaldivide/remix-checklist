type EventType = "mists" | "legion";

export default function useEventClasses(event: EventType) {
  const eventClasses: Record<
    EventType,
    {
      bg700: string;
      bg800: string;
      bg900: string;
      bg900fade: string;
      bg950: string;
      oddBg700: string;
      evenBg800: string;
      text900: string;
    }
  > = {
    mists: {
      bg700: "bg-emerald-700",
      bg800: "bg-emerald-800",
      bg900: "bg-emerald-900",
      bg900fade: "bg-emerald-900/90",
      bg950: "bg-emerald-950",
      oddBg700: "odd:bg-emerald-700",
      evenBg800: "even:bg-emerald-800",
      text900: "text-emerald-900",
    },
    legion: {
      bg700: "bg-blue-700",
      bg800: "bg-blue-800",
      bg900: "bg-blue-900",
      bg900fade: "bg-blue-900/90",
      bg950: "bg-blue-950",
      oddBg700: "odd:bg-blue-700",
      evenBg800: "even:bg-blue-800",
      text900: "text-blue-900",
    },
  };
  return eventClasses[event];
}
