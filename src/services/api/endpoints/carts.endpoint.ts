import { CartIsEmptyResponseDto } from "../dto/CartIsEmptyResponseDto";
import { Cart } from "../models/Cart";
import { ApiResponse, HttpClient, Uuid } from "../types";

export class CartsEndpoint {
  constructor(private httpClient: HttpClient) {}

  findAll(): ApiResponse<Cart[]> {
    return this.httpClient.get("/carts");
  }

  findById(id: Uuid): ApiResponse<Cart> {
    return this.httpClient.get(`/carts/${id}`);
  }

  findByUser(userId: Uuid): ApiResponse<Cart> {
    return this.httpClient.get(`/carts/user/${userId}`);
  }

  findByMe(): ApiResponse<Cart> {
    return this.httpClient.get(`/carts/me`);
  }

  isEmpty(): ApiResponse<CartIsEmptyResponseDto> {
    return this.httpClient.get(`/carts/isEmpty`);
  }

  empty(): ApiResponse<CartIsEmptyResponseDto> {
    return this.httpClient.put(`/carts/empty`);
  }
}
