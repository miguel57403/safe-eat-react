import { RestrictionDto } from "../dto/RestrictionDto";
import { Restriction } from "../models/Restriction";
import { ApiResponse, HttpClient, Uuid } from "../types";

export class RestrictionsEndpoint {
  constructor(private httpClient: HttpClient) {}

  findAll(): ApiResponse<Restriction[]> {
    return this.httpClient.get("/restrictions");
  }

  findById(id: Uuid): ApiResponse<Restriction> {
    return this.httpClient.get(`/restrictions/${id}`);
  }

  findAllByUser(userId: Uuid): ApiResponse<Restriction> {
    return this.httpClient.get(`/restrictions/user/${userId}`);
  }

  create(body: RestrictionDto): ApiResponse<Restriction> {
    return this.httpClient.post("/restrictions", body);
  }

  update(id: Uuid, body: RestrictionDto): ApiResponse<Restriction> {
    return this.httpClient.put(`/restrictions/${id}`, body);
  }

  delete(id: Uuid): ApiResponse<void> {
    return this.httpClient.delete(`/restrictions/${id}`);
  }
}
