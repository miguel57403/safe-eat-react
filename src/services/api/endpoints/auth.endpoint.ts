import { AuthLogin, AuthLoginResponse } from "../interfaces/IAuth";
import { UserResponse } from "../interfaces/IUser";
import { ApiResponse, HttpClient } from "../types";

export class AuthEndpoint {
  constructor(private httpClient: HttpClient) {}

  login(body: AuthLogin): ApiResponse<AuthLoginResponse> {
    const form = new FormData();
    form.append("username", body.username);
    form.append("password", body.password);
    return this.httpClient.post("/api/auth/login", form, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  }

  refresh(body: AuthLogin): ApiResponse<AuthLoginResponse> {
    const form = new FormData();
    form.append("username", body.username);
    form.append("password", body.password);
    return this.httpClient.post("/api/auth/login", form, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  }

  me(): ApiResponse<UserResponse> {
    return this.httpClient.get("/api/auth/me");
  }
}
