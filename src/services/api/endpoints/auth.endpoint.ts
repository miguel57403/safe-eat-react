import { LoginDto } from "../dto/LoginDto";
import { LoginResponseDto } from "../dto/LoginResponseDto";
import { UserDto } from "../dto/UserDto";
import { User } from "../models/User";
import { ApiResponse, HttpClient } from "../types";

export class AuthEndpoint {
  constructor(private httpClient: HttpClient) {}

  login(body: LoginDto): ApiResponse<LoginResponseDto> {
    return this.httpClient.post("/login", body);
  }

  signup(body: UserDto): ApiResponse<User> {
    return this.httpClient.post("/signup", body);
  }
}
