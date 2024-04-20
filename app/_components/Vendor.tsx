import Item from "./Item";
import { VendorType } from "../_interfaces/Bronze.interface";
import { useAppStateContext } from "../_context/AppStateContext";

export default function Vendor({ vendor }: { vendor: VendorType }) {
  const { appState, appStateDispatch } = useAppStateContext();
  const vendorIsClosed = appState.closedVendorMap[vendor.id];
  const items = vendor.items.map((item, i) => {
    return <Item item={item} key={`item ${i}`} />;
  });
  return (
    <div>
      <div className="text-center bg-emerald-950 sticky top-11">
        <h1 className="text-xl">{vendor.name}</h1>
        <h2 className="text-lg">{vendor.description}</h2>
        <button
          className="absolute top-2 right-2 min-w-8 min-h-8 bg-emerald-900 rounded-md"
          onClick={() => {
            appStateDispatch({ type: "toggle vendor", id: vendor.id });
          }}
        >
          {vendorIsClosed ? "+" : "-"}
        </button>
      </div>
      {vendorIsClosed ? null : items}
    </div>
  );
}
