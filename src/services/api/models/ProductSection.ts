import { Product } from "./Product";

export interface ProductSection {
  id: string;
  name?: string;
  products?: Product[];
}
