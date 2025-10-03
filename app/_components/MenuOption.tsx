import SwitchComponent from "./SwitchComponent";
import useEventClasses from "../_hooks/useEventClasses";

type Props = {
  event: "mists" | "legion";
  checked: boolean;
  label: string;
  dispatch: () => void;
};

export default function MenuOption({ event, checked, label, dispatch }: Props) {
  const { bg950 } = useEventClasses(event);
  return (
    <div
      className={`${bg950} flex justify-between gap-2 items-center first:rounded-t-md last:rounded-b-md p-2`}
    >
      <button
        onClick={(e) => {
          e.stopPropagation();
          dispatch();
        }}
        className="my-auto hover:brightness-125"
      >
        {label}
      </button>
      <SwitchComponent checked={checked} onChange={dispatch} />
    </div>
  );
}
