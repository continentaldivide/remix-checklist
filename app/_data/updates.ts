import { UpdateType } from "../_interfaces/Update.interface";

const updates: UpdateType[] = [
  {
    version: "2.0.1",
    releaseDate: "October 7, 2025",
    changes: [
      "Added a search function.",
      "Removed Raid Finder/Normal/Heroic raid ensembles.",
    ],
  },
  {
    version: "2.0.0",
    releaseDate: "October 4, 2025",
    changes: ["Updated the app for Legion Remix."],
  },
  {
    version: "1.0.1",
    releaseDate: "June 28, 2024",
    changes: [
      "Added a menu with some new options for filtering out items.",
      "Added Theramore Tabard and fixed Mini Mana Bomb cost.",
      "Fixed some typos and issues in the code.  (Thanks Rolf!)",
    ],
  },
];

export default updates;
