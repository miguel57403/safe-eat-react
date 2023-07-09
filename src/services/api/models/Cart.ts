import { Item } from "./Item";

export interface Cart {
  id: string;
  quantity: number;
  subtotal: number;
  items: Item[];
}
