import { AddressDto } from "../dto/AddressDto";
import { Address } from "../models/Address";
import { ApiResponse, HttpClient, Uuid } from "../types";

export class AddressesEndpoint {
  constructor(private httpClient: HttpClient) {}

  findAll(): ApiResponse<Address[]> {
    return this.httpClient.get(`/addresses`);
  }

  findById(id: Uuid): ApiResponse<Address> {
    return this.httpClient.get(`/addresses/${id}`);
  }

  findAllByUser(userId: Uuid): ApiResponse<Address> {
    return this.httpClient.get(`/addresses/user/${userId}`);
  }

  findAllByMe(): ApiResponse<Address> {
    return this.httpClient.get(`/addresses/user/me`);
  }

  create(body: AddressDto): ApiResponse<Address> {
    return this.httpClient.post("/addresses", body);
  }

  update(body: AddressDto): ApiResponse<Address> {
    return this.httpClient.put(`/addresses/`, body);
  }

  select(id: Uuid): ApiResponse<Address> {
    return this.httpClient.put(`/addresses/select/${id}`);
  }

  delete(id: Uuid): ApiResponse<void> {
    return this.httpClient.delete(`/addresses/${id}`);
  }
}
