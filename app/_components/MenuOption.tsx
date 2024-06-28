import SwitchComponent from "./SwitchComponent";

type Props = {
  checked: boolean;
  label: string;
  dispatch: () => void;
};

export default function MenuOption({ checked, label, dispatch }: Props) {
  return (
    <div className="bg-emerald-950 flex justify-between gap-2 items-center first:rounded-t-md last:rounded-b-md p-2">
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
