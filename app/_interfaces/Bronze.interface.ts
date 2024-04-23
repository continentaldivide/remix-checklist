export interface BronzeType {
  vendors: VendorType[];
}

export interface VendorType {
  name: string;
  description: string;
  id: number;
  items: ItemType[];
}

export interface ItemType {
  name: string;
  cost: number;
  id: number;
  eventOnlyItem: boolean;
  wowheadId?: number;
  type?: "cloth" | "leather" | "mail" | "plate";
  class?:
    | "mage"
    | "priest"
    | "warlock"
    | "druid"
    | "rogue"
    | "monk"
    | "demon hunter"
    | "hunter"
    | "shaman"
    | "evoker"
    | "warrior"
    | "paladin"
    | "death knight";
}
