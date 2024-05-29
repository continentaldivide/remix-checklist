import { useAppStateContext } from "../_context/AppStateContext";

export default function Menu() {
  const { appStateDispatch } = useAppStateContext();
  return (
    <div className="bg-pink-800 absolute top-12 left-0 z-50">
      <button
        onClick={() => {
          appStateDispatch({ type: "toggle ignore", category: "nonEvent" });
        }}
        className="my-auto hover:brightness-125"
      >
        toggle non event exclusives
      </button>
    </div>
  );
}
