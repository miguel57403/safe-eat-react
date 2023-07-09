import { IngredientDto } from "../dto/IngredientDto";
import { Ingredient } from "../models/Ingredient";
import { ApiResponse, HttpClient, Uuid } from "../types";

export class IngredientsEndpoint {
  constructor(private httpClient: HttpClient) {}

  findAll(): ApiResponse<Ingredient[]> {
    return this.httpClient.get("/ingredients");
  }

  findById(id: Uuid): ApiResponse<Ingredient> {
    return this.httpClient.get(`/ingredients/${id}`);
  }

  findByRestaurant(restaurantId: Uuid): ApiResponse<Ingredient> {
    return this.httpClient.get(`/ingredients/restaurant/${restaurantId}`);
  }

  findByProduct(productId: Uuid): ApiResponse<Ingredient> {
    return this.httpClient.get(`/ingredients/product/${productId}`);
  }

  create(body: IngredientDto): ApiResponse<Ingredient> {
    return this.httpClient.post("/ingredients", body);
  }

  update(body: IngredientDto): ApiResponse<Ingredient> {
    return this.httpClient.put(`/ingredients`, body);
  }

  delete(id: Uuid): ApiResponse<void> {
    return this.httpClient.delete(`/ingredients/${id}`);
  }
}
