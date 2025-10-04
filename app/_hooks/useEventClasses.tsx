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
      bg600: "bg-[#1A8718]",
      bg700: "bg-[#1A6918]",
      bg900: "bg-[#134F11]",
      bg900fade: "bg-[#134F11]/90",
      bg950: "bg-[#0E3B0C]",
      oddBg700: "odd:bg-[#1A6918]",
      evenBg800: "even:bg-[#20851E]",
      text900: "text-[#134F11]",
      border700: "border-[#1A6918]",
      hoverbg800: "hover:bg-[#20851E]",
      activebg900: "active:bg-[#134F11]",
    },
  };
  return eventClasses[event];
}
