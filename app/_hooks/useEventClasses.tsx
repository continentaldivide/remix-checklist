type EventType = "mists" | "legion";

export default function useEventClasses(event: EventType) {
  const eventClasses: Record<
    EventType,
    {
      bg600: string;
      bg700: string;
      bg900: string;
      bg900fade: string;
      bg950: string;
      oddBg700: string;
      evenBg800: string;
      text900: string;
      border700: string;
      hoverbg800: string;
      activebg900: string;
    }
  > = {
    mists: {
      bg600: "bg-emerald-600",
      bg700: "bg-emerald-700",
      bg900: "bg-emerald-900",
      bg900fade: "bg-emerald-900/90",
      bg950: "bg-emerald-950",
      oddBg700: "odd:bg-emerald-700",
      evenBg800: "even:bg-emerald-800",
      text900: "text-emerald-900",
      border700: "border-emerald-700",
      hoverbg800: "hover:bg-emerald-800",
      activebg900: "active:bg-emerald-900",
    },
    legion: {
      bg600: "bg-[#7CB85F]",
      bg700: "bg-[#5CA83B]",
      bg900: "bg-[#1B2C1B]",
      bg900fade: "bg-[#1B2C1B]/90",
      bg950: "bg-[#0D150D]",
      oddBg700: "odd:bg-[#5CA83B]",
      evenBg800: "even:bg-[#4B8A33]",
      text900: "text-[#1B2C1B]",
      border700: "border-[#5CA83B]",
      hoverbg800: "hover:bg-[#4B8A33]",
      activebg900: "active:bg-[#1B2C1B]",
    },
  };
  return eventClasses[event];
}
