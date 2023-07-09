import { OrderDto } from "../dto/OrderDto";
import { Order } from "../models/Order";
import { ApiResponse, HttpClient, Uuid } from "../types";

export class OrdersEndpoint {
  constructor(private httpClient: HttpClient) {}

  findAll(): ApiResponse<Order[]> {
    return this.httpClient.get("/orders");
  }

  draft(): ApiResponse<Order> {
    return this.httpClient.get(`/orders/draft`);
  }

  findById(id: Uuid): ApiResponse<Order> {
    return this.httpClient.get(`/orders/${id}`);
  }

  findByRestaurant(restaurantId: Uuid): ApiResponse<Order> {
    return this.httpClient.get(`/orders/restaurant/${restaurantId}`);
  }

  findByUser(userId: Uuid): ApiResponse<Order> {
    return this.httpClient.get(`/orders/user/${userId}`);
  }

  findByMe(): ApiResponse<Order> {
    return this.httpClient.get(`/orders/user/me`);
  }

  create(body: OrderDto): ApiResponse<Order> {
    return this.httpClient.post("/orders", body);
  }

  update(id: Uuid, body: OrderDto): ApiResponse<Order> {
    return this.httpClient.put(`/orders/${id}`, body);
  }

  delete(id: Uuid): ApiResponse<void> {
    return this.httpClient.delete(`/orders/${id}`);
  }
}
