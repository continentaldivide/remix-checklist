import { UpdateType } from "../_interfaces/Update.interface";

const updates: UpdateType[] = [
  {
    version: "2.0.5",
    releaseDate: "November 22, 2025",
    changes: ["Re-added Gems of the Lightforged Draenei to Unicus' inventory."],
  },
  {
    version: "2.0.4",
    releaseDate: "October 24, 2025",
    changes: [
      "Added Torn Invitation (rewards Gilnean Prowler) to Hemet's inventory.",
    ],
  },
  {
    version: "2.0.3",
    releaseDate: "October 14, 2025",
    changes: ["Added Skull of Corruption to Horos' inventory."],
  },
  {
    version: "2.0.2",
    releaseDate: "October 7, 2025",
    changes: [
      "Updated vendors to match live event:",
      "Added Emerald Drake Hunter's Kit to Agos the Silent.",
      "Removed Scavenged Chains of Karazhan from Larah Treebender.",
      "Removed Gems of the Lightforged Draenei from Unicus.",
      "Removed Tylarr Gronnden from Horos.",
      "Reduced costs of some mounts sold by Hemet Nesingwary XVII.",
    ],
  },
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
