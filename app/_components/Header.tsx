export default function Header() {
  return (
    <div className="bg-emerald-950 min-h-12 px-4 flex justify-between items-center">
      <div className="min-w-20"></div>
      <h1 className="text-xl lg:text-2xl font-bold">Remix Checklist</h1>
      <div className="min-w-20 flex gap-2 justify-end">
        <a
          target="_blank"
          href="https://buymeacoffee.com/continentaldivide"
          className="my-auto hover:brightness-125"
        >
          <img
            height="24"
            width="24"
            src="https://cdn.simpleicons.org/buymeacoffee/CCCCCC/"
            alt="Buy me a coffee"
          />
        </a>
        <a
          target="_blank"
          href="https://github.com/continentaldivide/remix-checklist"
          className="my-auto hover:brightness-125"
        >
          <img
            height="24"
            width="24"
            src="https://cdn.simpleicons.org/github/CCCCCC/"
            alt="GitHub"
          />
        </a>
      </div>
    </div>
  );
}
