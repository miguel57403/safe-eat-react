import { RestaurantDto } from "../dto/RestaurantDto";
import { Restaurant } from "../models/Restaurant";
import { ApiResponse, HttpClient, Uuid } from "../types";

export class RestaurantsEndpoint {
  constructor(private httpClient: HttpClient) {}

  findAll(): ApiResponse<Restaurant[]> {
    return this.httpClient.get("/restaurants");
  }

  findById(id: Uuid): ApiResponse<Restaurant> {
    return this.httpClient.get(`/restaurants/${id}`);
  }

  findAllByCategory(categoryId: Uuid): ApiResponse<Restaurant> {
    return this.httpClient.get(`/restaurants/category/${categoryId}`);
  }

  findAllByOwner(ownerId: Uuid): ApiResponse<Restaurant> {
    return this.httpClient.get(`/restaurants/owner/${ownerId}`);
  }

  findAllByName(name: string): ApiResponse<Restaurant> {
    return this.httpClient.get(`/restaurants/name/${name}`);
  }

  create(body: RestaurantDto): ApiResponse<Restaurant> {
    return this.httpClient.post("/restaurants", body);
  }

  update(id: Uuid, body: RestaurantDto): ApiResponse<Restaurant> {
    return this.httpClient.put(`/restaurants/${id}`, body);
  }

  uploadLogo(id: Uuid, body: RestaurantDto): ApiResponse<Restaurant> {
    // TOOD: Create FormData
    return this.httpClient.put(`/restaurants/${id}`, body);
  }

  uploadCover(id: Uuid, body: RestaurantDto): ApiResponse<Restaurant> {
    // TOOD: Create FormData
    return this.httpClient.put(`/restaurants/${id}`, body);
  }

  delete(id: Uuid): ApiResponse<void> {
    return this.httpClient.delete(`/restaurants/${id}`);
  }
}
