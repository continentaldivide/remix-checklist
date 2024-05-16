import Item from "./Item";
import { VendorType } from "../_interfaces/Bronze.interface";
import { useAppStateContext } from "../_context/AppStateContext";

export default function Vendor({ vendor }: { vendor: VendorType }) {
  const { appState, appStateDispatch } = useAppStateContext();
  const vendorIsClosed = appState.closedVendorMap[vendor.id];
  const vendorIsIgnored = appState.ignoredVendorMap[vendor.id];
  const items = vendor.items.map((item, i) => {
    return <Item item={item} key={`item ${i}`} />;
  });
  return (
    <div className="w-full px-12 rounded-md mb-2 cursor-pointer">
      {/* sticky element below is in a stacking context with item's <img> tag since it has a brightness property -- needs to have a z-index to keep the img from appearing on top */}
      <div
        className="sticky top-11 z-10"
        onClick={() => {
          if (vendorIsIgnored) {
            return;
          }
          appStateDispatch({ type: "toggle show vendor", id: vendor.id });
        }}
      >
        <div
          className={`flex gap-1 justify-between items-center p-2 text-center ${
            vendorIsClosed ? "rounded-md" : "rounded-t-md"
          }  bg-emerald-950 ${vendorIsIgnored ? "brightness-50" : null}`}
        >
          <div className="w-8">
            <button
              className="text-sm"
              onClick={(e) => {
                e.stopPropagation();
                !vendorIsClosed && !vendorIsIgnored
                  ? appStateDispatch({
                      type: "toggle show vendor",
                      id: vendor.id,
                    })
                  : null;
                appStateDispatch({
                  type: "toggle ignore vendor",
                  id: vendor.id,
                });
              }}
            >
              {appState.ignoredVendorMap[vendor.id] ? "show" : "ignore"}
            </button>
          </div>
          <div>
            <h1 className="text-xl lg:text-3xl">{vendor.name}</h1>
            {vendorIsClosed ? null : (
              <h2 className="text-lg lg:text-2xl">{vendor.description}</h2>
            )}
          </div>
          <img
            src={vendorIsClosed ? "expand.svg" : "collapse.svg"}
            className="min-w-8 min-h-8 rounded-md"
          />
        </div>
        {/* This div hides the top corners of item components from peeking out behind the rounded top edges of vendor banners */}
        <div className="absolute top-0 left-0 -z-10 w-full bg-emerald-900 min-h-2"></div>
      </div>
      {vendorIsIgnored ? null : vendorIsClosed ? null : items}
    </div>
  );
}
