import { AdvertisementDto } from "../dto/AdvertisementDto";
import { Advertisement } from "../models/Advertisement";
import { ApiResponse, HttpClient, Uuid } from "../types";

export class AdvertisementsEndpoint {
  constructor(private httpClient: HttpClient) {}

  findAll(): ApiResponse<Advertisement[]> {
    return this.httpClient.get("/advertisements");
  }

  findById(id: Uuid): ApiResponse<Advertisement> {
    return this.httpClient.get(`/advertisements/${id}`);
  }

  findByRestaurant(restaurantId: Uuid): ApiResponse<Advertisement> {
    return this.httpClient.get(`/advertisements/restaurant/${restaurantId}`);
  }

  create(body: AdvertisementDto): ApiResponse<Advertisement> {
    return this.httpClient.post("/advertisements", body);
  }

  update(body: AdvertisementDto): ApiResponse<Advertisement> {
    return this.httpClient.put(`/advertisements`, body);
  }

  uploadImage(image: any): ApiResponse<Advertisement> {
    // TODO: Create FormData
    return this.httpClient.put(`/advertisements`, null);
  }

  delete(id: Uuid): ApiResponse<void> {
    return this.httpClient.delete(`/advertisements/${id}`);
  }
}
