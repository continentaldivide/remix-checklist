export default function Item({ item }: { item: any }) {
  return (
    <div className="border border-pink-800">
      <p>
        {item.name}: {item.cost}
      </p>
    </div>
  );
}
