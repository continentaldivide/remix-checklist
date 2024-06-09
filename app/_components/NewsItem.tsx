export default function NewsItem({
  news,
}: {
  news: { version: string; releaseDate: string; changes: string[] };
}) {
  const changes = news.changes.map((change, i) => {
    return (
      <li
        className="py-1 last:pb-0 text-justify"
        key={`version ${news.version} change ${i}`}
      >
        {change}
      </li>
    );
  });
  return (
    <div className="p-2 last:pb-0 mx-2 border-b last:border-b-0 border-neutral-300/50">
      <h1 className="text-xl mb-2">
        {news.version} released on {news.releaseDate}
      </h1>
      <ul className="list-disc list-inside leading-relaxed">{changes}</ul>
    </div>
  );
}
