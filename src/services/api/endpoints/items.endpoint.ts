import { ItemDto } from "../dto/ItemDto";
import { Item } from "../models/Item";
import { ApiResponse, HttpClient, Uuid } from "../types";

export class ItemsEndpoint {
  constructor(private httpClient: HttpClient) {}

  findAll(): ApiResponse<Item[]> {
    return this.httpClient.get("/items/");
  }

  findById(id: Uuid): ApiResponse<Item> {
    return this.httpClient.get(`/items/${id}`);
  }

  findByCart(cartId: Uuid): ApiResponse<Item> {
    return this.httpClient.get(`/items/cart/${cartId}`);
  }

  create(body: ItemDto): ApiResponse<Item> {
    return this.httpClient.post("/items/", body);
  }

  update(body: ItemDto): ApiResponse<Item> {
    return this.httpClient.put(`/items`, body);
  }

  delete(id: Uuid): ApiResponse<void> {
    return this.httpClient.delete(`/items/${id}`);
  }
}
