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
    <div className="w-full rounded-md mb-2">
      <div className="sticky top-11">
        <div
          className={`flex gap-1 justify-between items-center p-2 text-center ${
            vendorIsClosed ? "rounded-md" : "rounded-t-md"
          }  bg-emerald-950`}
        >
          <div className="min-w-8"></div>
          <div>
            <h1 className="text-xl">{vendor.name}</h1>
            <h2 className="text-lg">{vendor.description}</h2>
          </div>
          <button
            className="min-w-8 min-h-8 bg-emerald-900 rounded-md"
            onClick={() => {
              appStateDispatch({ type: "toggle vendor", id: vendor.id });
            }}
          >
            <img
              src={vendorIsClosed ? "expand.svg" : "collapse.svg"}
              className="mx-auto"
            />
          </button>
        </div>
        {/* This div hides the top corners of item components from peeking out behind the rounded top edges of vendor banners */}
        <div className="absolute top-0 left-0 -z-10 w-full bg-emerald-900 min-h-2"></div>
      </div>
      {vendorIsClosed ? null : items}
    </div>
  );
}
