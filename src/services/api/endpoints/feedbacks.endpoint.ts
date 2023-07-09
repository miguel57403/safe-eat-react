import { FeedbackDto } from "../dto/FeedbackDto";
import { Feedback } from "../models/Feedback";
import { ApiResponse, HttpClient, Uuid } from "../types";

export class FeedbacksEndpoint {
  constructor(private httpClient: HttpClient) {}

  findAll(): ApiResponse<Feedback[]> {
    return this.httpClient.get("/feedbacks");
  }

  findById(id: Uuid): ApiResponse<Feedback> {
    return this.httpClient.get(`/feedbacks/${id}`);
  }

  findAllByOrder(orderId: Uuid): ApiResponse<Feedback> {
    return this.httpClient.get(`/feedbacks/order/${orderId}`);
  }

  create(orderId: Uuid, body: FeedbackDto): ApiResponse<Feedback> {
    return this.httpClient.post(`/feedbacks/order/${orderId}`, body);
  }

  update(body: FeedbackDto): ApiResponse<Feedback> {
    return this.httpClient.put(`/feedbacks`, body);
  }

  delete(id: Uuid): ApiResponse<void> {
    return this.httpClient.delete(`/feedbacks/${id}`);
  }
}
