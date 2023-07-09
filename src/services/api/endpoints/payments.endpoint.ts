import { PaymentDto } from "../dto/PaymentDto";
import { Payment } from "../models/Payment";
import { ApiResponse, HttpClient, Uuid } from "../types";

export class PaymentsEndpoint {
  constructor(private httpClient: HttpClient) {}

  findAll(): ApiResponse<Payment[]> {
    return this.httpClient.get("/payments");
  }

  findById(id: Uuid): ApiResponse<Payment> {
    return this.httpClient.get(`/payments/${id}`);
  }

  findByUser(userId: Uuid): ApiResponse<Payment> {
    return this.httpClient.get(`/payments/user/${userId}`);
  }

  create(body: PaymentDto): ApiResponse<Payment> {
    return this.httpClient.post("/payments", body);
  }

  update(id: Uuid, body: PaymentDto): ApiResponse<Payment> {
    return this.httpClient.put(`/payments/${id}`, body);
  }

  delete(id: Uuid): ApiResponse<void> {
    return this.httpClient.delete(`/payments/${id}`);
  }
}
