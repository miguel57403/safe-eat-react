import { ProductDto } from "../dto/ProductDto";
import { Product } from "../models/Product";
import { ApiResponse, HttpClient, Uuid } from "../types";

export class ProductsEndpoint {
  constructor(private httpClient: HttpClient) {}

  findAll(): ApiResponse<Product[]> {
    return this.httpClient.get("/products");
  }

  findById(id: Uuid): ApiResponse<Product> {
    return this.httpClient.get(`/products/${id}`);
  }

  findByRestaurant(restaurantId: Uuid): ApiResponse<Product[]> {
    return this.httpClient.get(`/products/restaurant/${restaurantId}`);
  }

  findByRestaurantAndName(
    restaurantId: Uuid,
    name: string
  ): ApiResponse<Product> {
    return this.httpClient.get(
      `/products/restaurant/${restaurantId}/name/${name}`
    );
  }

  create(restaurantId: Uuid, body: ProductDto): ApiResponse<Product> {
    return this.httpClient.post(`/products/restaurant/${restaurantId}`, body);
  }

  update(id: Uuid, body: ProductDto): ApiResponse<Product> {
    return this.httpClient.put(`/products/${id}`, body);
  }

  uploadImage(id: Uuid, body: ProductDto): ApiResponse<Product> {
    // TODO: Create FormData
    return this.httpClient.put(`/products/${id}`, body);
  }

  delete(id: Uuid): ApiResponse<void> {
    return this.httpClient.delete(`/products/${id}`);
  }
}
