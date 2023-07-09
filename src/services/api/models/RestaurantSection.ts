import { Restaurant } from "./Restaurant";

export interface RestaurantSection {
  id: string;
  name?: string;
  restaurants?: Restaurant[];
}
