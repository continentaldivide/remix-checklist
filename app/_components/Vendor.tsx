import { VendorType } from "../_interfaces/Bronze.interface";
import { useAppStateContext } from "../_context/AppStateContext";
import useFilterItems from "../_hooks/useFilterItems";
import useEventClasses from "../_hooks/useEventClasses";

export default function Vendor({
  vendor,
  event,
}: {
  vendor: VendorType;
  event: "mists" | "legion";
}) {
  const { appState, appStateDispatch } = useAppStateContext();
  const vendorIsClosed = appState.closedVendorMap[vendor.id];
  const vendorIsIgnored = appState.ignoredVendorMap[vendor.id];

  const itemComponents = useFilterItems(vendor.items, event);
  const { bg900, bg950 } = useEventClasses(event);

  if (itemComponents.length === 0) {
    return;
  }

  return (
    <div className="w-full px-12 rounded-md mb-2 cursor-pointer">
      {/* sticky element below is in a stacking context with item's <img> tag since it has a brightness property -- needs to have a z-index to keep the img from appearing on top */}
      <div
        className="sticky top-[110px] xl:top-[122px] z-10"
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
          }  ${bg950} ${vendorIsIgnored ? "brightness-50" : null}`}
        >
          <div className="size-8 flex justify-center items-center">
            <button
              className="text-sm"
              onClick={(e) => {
                e.stopPropagation();
                // when we ignore the vendor, we want to take the extra step of collapsing its contents if they're currently showing.  We don't need to do the opposite when "un-ignoring" -- the user can manually click the vendor to open it.
                if (!vendorIsClosed && !vendorIsIgnored) {
                  appStateDispatch({
                    type: "toggle show vendor",
                    id: vendor.id,
                  });
                }
                appStateDispatch({
                  type: "toggle ignore vendor",
                  id: vendor.id,
                });
              }}
            >
              <img
                src={vendorIsIgnored ? "eye-crossed-out.svg" : "eye.svg"}
                alt={vendorIsIgnored ? "Crossed-out eye icon." : "Eye icon."}
              />
            </button>
          </div>
          <div>
            <h1 className="text-xl lg:text-3xl">
              {vendor.name} {vendorIsIgnored ? "(ignored)" : null}
            </h1>
            {vendorIsClosed ? null : (
              <h2 className="text-lg lg:text-2xl">{vendor.description}</h2>
            )}
          </div>
          <img
            src={vendorIsClosed ? "expand.svg" : "collapse.svg"}
            alt={vendorIsClosed ? "Expand icon." : "Collapse icon."}
            className="min-w-8 min-h-8 rounded-md"
          />
        </div>
        {/* This div hides the top corners of item components from peeking out behind the rounded top edges of vendor banners */}
        <div
          className={`absolute top-0 left-0 -z-10 w-full ${bg900} min-h-2`}
        ></div>
      </div>
      {vendorIsIgnored || vendorIsClosed ? null : itemComponents}
    </div>
  );
}
