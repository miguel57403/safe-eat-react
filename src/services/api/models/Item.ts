import { Product } from "./Product";

export interface Item {
  id: string;
  product?: Product;
  quantity?: number;
  subtotal?: number;
}
