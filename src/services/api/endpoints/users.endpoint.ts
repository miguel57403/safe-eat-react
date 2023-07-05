import {
  UserIndex,
  UserResponse,
  UserStore,
  UserUpdate,
} from "../interfaces/IUser";
import { ApiResponse, HttpClient, Pagination, Uuid } from "../types";

export class UsersEndpoint {
  constructor(private httpClient: HttpClient) {}

  show(id: Uuid): ApiResponse<UserResponse> {
    return this.httpClient.get(`/api/users/${id}`);
  }

  index(query: UserIndex): ApiResponse<Pagination<UserResponse>> {
    return this.httpClient.get("/api/users", { params: query });
  }

  store(body: UserStore): ApiResponse<UserResponse> {
    return this.httpClient.post("/api/users", body);
  }

  update(id: Uuid, body: UserUpdate): ApiResponse<UserResponse> {
    return this.httpClient.put(`/api/users/${id}`, body);
  }

  delete(id: Uuid): ApiResponse<void> {
    return this.httpClient.delete(`/api/users/${id}`);
  }
}
