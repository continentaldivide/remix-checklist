import { Switch } from "@headlessui/react";

type Props = {
  checked: boolean;
  onChange: () => void;
};

export default function SwitchComponent({ checked, onChange }: Props) {
  return (
    <Switch
      checked={checked}
      onChange={onChange}
      className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-700 transition data-[checked]:bg-emerald-600"
    >
      <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" />
    </Switch>
  );
}
