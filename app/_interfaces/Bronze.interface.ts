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
}
