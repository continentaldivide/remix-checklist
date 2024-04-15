import bronze from "../public/bronze.json";
import Vendor from "./_components/Vendor";

const vendors = bronze.vendors.map((vendor, i) => {
  return <Vendor name={vendor.name} items={vendor.items} key={`vendor ${i}`} />;
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="">hello world</div>
      {vendors}
    </main>
  );
}
