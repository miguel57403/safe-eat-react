import { ApiResponse, HttpClient, Uuid } from "../types";

export class NotificationsEndpoint {
  constructor(private httpClient: HttpClient) {}

  findAll(): ApiResponse<Notification[]> {
    return this.httpClient.get("/notifications");
  }

  findById(id: Uuid): ApiResponse<Notification> {
    return this.httpClient.get(`/notifications/${id}`);
  }

  findByUser(userId: Uuid): ApiResponse<Notification> {
    return this.httpClient.get(`/notifications/user/${userId}`);
  }

  findByRestaurant(restaurantId: Uuid): ApiResponse<Notification> {
    return this.httpClient.get(`/notifications/restaurant/${restaurantId}`);
  }

  view(id: Uuid): ApiResponse<Notification> {
    return this.httpClient.patch(`/notifications/${id}`);
  }

  delete(id: Uuid): ApiResponse<Notification> {
    return this.httpClient.delete(`/notifications/${id}`);
  }
}
