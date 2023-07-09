import { UserDto } from "../dto/UserDto";
import { User } from "../models/User";
import { ApiResponse, HttpClient, Uuid } from "../types";

export class UsersEndpoint {
  constructor(private httpClient: HttpClient) {}

  findAll(): ApiResponse<User[]> {
    return this.httpClient.get("/users");
  }

  findById(id: Uuid): ApiResponse<User> {
    return this.httpClient.get(`/users/${id}`);
  }

  me(): ApiResponse<User> {
    return this.httpClient.get(`/users/me`);
  }

  update(body: UserDto): ApiResponse<User> {
    return this.httpClient.put(`/users`, body);
  }

  uploadImage(body: UserDto): ApiResponse<User> {
    // TODO: Creat FormData
    return this.httpClient.put(`/users`, body);
  }

  delete(id: Uuid): ApiResponse<void> {
    return this.httpClient.delete(`/users/${id}`);
  }
}
