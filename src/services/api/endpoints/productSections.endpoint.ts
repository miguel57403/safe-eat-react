import { ProductSectionDto } from "../dto/ProductSectionDto";
import { ProductSection } from "../models/ProductSection";
import { ApiResponse, HttpClient, Uuid } from "../types";

export class ProductSectionsEndpoint {
  constructor(private httpClient: HttpClient) {}

  findAll(): ApiResponse<ProductSection[]> {
    return this.httpClient.get("/productSections");
  }

  findById(id: Uuid): ApiResponse<ProductSection> {
    return this.httpClient.get(`/productSections/${id}`);
  }

  findByRestaurant(restaurantId: Uuid): ApiResponse<ProductSection> {
    return this.httpClient.get(`/productSections/restaurant/${restaurantId}`);
  }

  create(body: ProductSectionDto): ApiResponse<ProductSection> {
    return this.httpClient.post("/productSections", body);
  }

  update(body: ProductSectionDto): ApiResponse<ProductSection> {
    return this.httpClient.put(`/productSections`, body);
  }

  delete(id: Uuid): ApiResponse<void> {
    return this.httpClient.delete(`/productSections/${id}`);
  }
}
