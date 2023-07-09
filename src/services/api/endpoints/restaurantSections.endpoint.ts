import { RestaurantSectionDto } from "../dto/RestaurantSectionDto";
import { RestaurantSection } from "../models/RestaurantSection";
import { ApiResponse, HttpClient, Uuid } from "../types";

export class RestaurantSectionSectionsEndpoint {
  constructor(private httpClient: HttpClient) {}

  findAll(): ApiResponse<RestaurantSection[]> {
    return this.httpClient.get("/restaurantSections");
  }

  findById(id: Uuid): ApiResponse<RestaurantSection> {
    return this.httpClient.get(`/restaurantSections/${id}`);
  }

  findByUser(userId: Uuid): ApiResponse<RestaurantSection> {
    return this.httpClient.get(`/restaurantSections/user/${userId}`);
  }

  create(body: RestaurantSectionDto): ApiResponse<RestaurantSection> {
    return this.httpClient.post("/restaurantSections", body);
  }

  update(id: Uuid, body: RestaurantSectionDto): ApiResponse<RestaurantSection> {
    return this.httpClient.put(`/restaurantSections/${id}`, body);
  }

  delete(id: Uuid): ApiResponse<void> {
    return this.httpClient.delete(`/restaurantSections/${id}`);
  }
}
