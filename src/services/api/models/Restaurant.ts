import { Delivery } from "./Delivery";

export interface Restaurant {
  id: string;
  name?: string;
  logo?: string;
  cover?: string;
  deliveries?: Delivery[];
}
