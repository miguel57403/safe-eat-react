import { Seed, SeedIndex, SeedStore, SeedUpdate } from "../interfaces/ISeeds";
import { ApiResponse, HttpClient, Pagination, Uuid } from "../types";

export class SeedsEndpoint {
  constructor(private httpClient: HttpClient) {}

  show(id: Uuid): ApiResponse<Seed> {
    return this.httpClient.get(`/api/seeds/${id}`);
  }

  index(query: SeedIndex): ApiResponse<Pagination<Seed>> {
    return this.httpClient.get("/api/seeds", { params: query });
  }

  store(body: SeedStore): ApiResponse<Seed> {
    return this.httpClient.post("/api/seeds", body);
  }

  update(id: Uuid, body: SeedUpdate): ApiResponse<Seed> {
    return this.httpClient.put(`/api/seeds/${id}`, body);
  }

  delete(id: Uuid): ApiResponse<void> {
    return this.httpClient.delete(`/api/seeds/${id}`);
  }
}
