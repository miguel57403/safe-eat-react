import { Delivery } from "./Delivery";

export interface Restaurant {
  length: number;
  map(arg0: (item: any) => import("react/jsx-runtime").JSX.Element): import("react").ReactNode;
  id: string;
  name?: string;
  logo?: string;
  cover?: string;
  deliveries?: Delivery[];
}
