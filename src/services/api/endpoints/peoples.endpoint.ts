import {
  People,
  PeopleIndex,
  PeopleStore,
  PeopleUpdate,
} from "../interfaces/IPeoples";
import { ApiResponse, HttpClient, Pagination, Uuid } from "../types";

export class PeoplesEndpoint {
  constructor(private httpClient: HttpClient) {}

  show(id: Uuid): ApiResponse<People> {
    return this.httpClient.get(`/api/peoples/${id}`);
  }

  index(query: PeopleIndex): ApiResponse<Pagination<People>> {
    return this.httpClient.get("/api/peoples", { params: query });
  }

  store(body: PeopleStore): ApiResponse<People> {
    return this.httpClient.post("/api/peoples", body);
  }

  update(id: Uuid, body: PeopleUpdate): ApiResponse<People> {
    return this.httpClient.put(`/api/peoples/${id}`, body);
  }

  delete(id: Uuid): ApiResponse<void> {
    return this.httpClient.delete(`/api/peoples/${id}`);
  }
}
