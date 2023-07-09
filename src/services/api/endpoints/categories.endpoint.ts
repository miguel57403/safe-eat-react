import { CategoryDto } from "../dto/CategoryDto";
import { Category } from "../models/Category";
import { ApiResponse, HttpClient, Uuid } from "../types";

export class CategoriesEndpoint {
  constructor(private httpClient: HttpClient) {}

  findAll(): ApiResponse<Category[]> {
    return this.httpClient.get("/categories");
  }

  findById(id: Uuid): ApiResponse<Category> {
    return this.httpClient.get(`/categories/${id}`);
  }

  create(body: CategoryDto): ApiResponse<Category> {
    return this.httpClient.post("/categories", body);
  }

  update(id: Uuid, body: CategoryDto): ApiResponse<Category> {
    return this.httpClient.put(`/categories/${id}`, body);
  }

  uploadImage(id: Uuid, image: any): ApiResponse<Category> {
    // TODO: Create FormData
    return this.httpClient.put(`/categories/${id}`, null);
  }

  delete(id: Uuid): ApiResponse<void> {
    return this.httpClient.delete(`/categories/${id}`);
  }
}
