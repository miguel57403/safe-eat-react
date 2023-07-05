import {
  Voluntary,
  VoluntaryIndex,
  VoluntaryStore,
  VoluntaryUpdate,
} from "../interfaces/voluntaries/IVoluntaries";
import { ApiResponse, HttpClient, Pagination, Uuid } from "../types";

export class VoluntariesEndpoint {
  constructor(private httpClient: HttpClient) {}

  show(id: Uuid): ApiResponse<Voluntary> {
    return this.httpClient.get(`/api/voluntaries/${id}`);
  }

  index(query: VoluntaryIndex): ApiResponse<Pagination<Voluntary>> {
    return this.httpClient.get("/api/voluntaries", { params: query });
  }

  store(body: VoluntaryStore): ApiResponse<Voluntary> {
    return this.httpClient.post("/api/voluntaries", body);
  }

  update(id: Uuid, body: VoluntaryUpdate): ApiResponse<Voluntary> {
    return this.httpClient.put(`/api/voluntaries/${id}`, body);
  }

  delete(id: Uuid): ApiResponse<void> {
    return this.httpClient.delete(`/api/voluntaries/${id}`);
  }
}
