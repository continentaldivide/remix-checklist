import Item from "./Item";

export default function Vendor({
  name,
  items,
}: {
  name: string;
  items: any[];
}) {
  const allItems = items.map((item, i) => {
    return <Item item={item} key={`item ${i}`} />;
  });
  return (
    <div className="border border-purple-900">
      <p>{name}</p>
      <p>items:</p>
      <div>{allItems}</div>
    </div>
  );
}
