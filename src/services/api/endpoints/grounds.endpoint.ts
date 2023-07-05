import {
  Ground,
  GroundIndex,
  GroundStore,
  GroundUpdate,
} from "../interfaces/IGrounds";
import { ApiResponse, HttpClient, Pagination, Uuid } from "../types";

export class GroundsEndpoint {
  constructor(private httpClient: HttpClient) {}

  show(id: Uuid): ApiResponse<Ground> {
    return this.httpClient.get(`/api/grounds/${id}`);
  }

  index(query: GroundIndex): ApiResponse<Pagination<Ground>> {
    return this.httpClient.get("/api/grounds", { params: query });
  }

  store(body: GroundStore): ApiResponse<Ground> {
    return this.httpClient.post("/api/grounds", body);
  }

  update(id: Uuid, body: GroundUpdate): ApiResponse<Ground> {
    return this.httpClient.put(`/api/grounds/${id}`, body);
  }

  delete(id: Uuid): ApiResponse<void> {
    return this.httpClient.delete(`/api/grounds/${id}`);
  }
}
