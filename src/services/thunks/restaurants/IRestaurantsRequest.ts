import { Uuid } from "services/api";
import { Restaurant } from "services/api/models/Restaurant";

export interface IRestaurantsRequest {
    id: Uuid;
    restaurants: Restaurant
}