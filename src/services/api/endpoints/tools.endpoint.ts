import { Tool, ToolIndex, ToolStore, ToolUpdate } from "../interfaces/ITools";
import { ApiResponse, HttpClient, Pagination, Uuid } from "../types";

export class ToolsEndpoint {
  constructor(private httpClient: HttpClient) {}

  show(id: Uuid): ApiResponse<Tool> {
    return this.httpClient.get(`/api/tools/${id}`);
  }

  index(query: ToolIndex): ApiResponse<Pagination<Tool>> {
    return this.httpClient.get("/api/tools", { params: query });
  }

  store(body: ToolStore): ApiResponse<Tool> {
    return this.httpClient.post("/api/tools", body);
  }

  update(id: Uuid, body: ToolUpdate): ApiResponse<Tool> {
    return this.httpClient.put(`/api/tools/${id}`, body);
  }

  delete(id: Uuid): ApiResponse<void> {
    return this.httpClient.delete(`/api/tools/${id}`);
  }
}
