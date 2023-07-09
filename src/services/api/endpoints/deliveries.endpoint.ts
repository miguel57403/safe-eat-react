import { DeliveryDto } from "../dto/DeliveryDto";
import { Delivery } from "../models/Delivery";
import { ApiResponse, HttpClient, Uuid } from "../types";

export class DeliveriesEndpoint {
  constructor(private httpClient: HttpClient) {}

  findAll(): ApiResponse<Delivery[]> {
    return this.httpClient.get("/deliveries");
  }

  findById(id: Uuid): ApiResponse<Delivery> {
    return this.httpClient.get(`/deliveries/${id}`);
  }

  findByRestaurant(restaurantId: Uuid): ApiResponse<Delivery> {
    return this.httpClient.get(`/deliveries/restaurant/${restaurantId}`);
  }

  create(restaurantId: Uuid, body: DeliveryDto): ApiResponse<Delivery> {
    return this.httpClient.post(`/deliveries/restaurant/${restaurantId}`, body);
  }

  update(body: DeliveryDto): ApiResponse<Delivery> {
    return this.httpClient.put(`/deliveries`, body);
  }

  select(id: Uuid): ApiResponse<Delivery> {
    return this.httpClient.put(`/deliveries/select/${id}`);
  }

  delete(id: Uuid): ApiResponse<void> {
    return this.httpClient.delete(`/deliveries/${id}`);
  }
}
