import {
  BedScheduleStore,
  BedScheduleUpdate,
  BedSchedules,
} from "../interfaces/IBadSchedules";
import { ApiResponse, HttpClient, Uuid } from "../types";

export class BedSchedulesEndpoint {
  constructor(private httpClient: HttpClient) {}

  show(id: Uuid): ApiResponse<BedSchedules> {
    return this.httpClient.get(`/api/bed-schedules/${id}`);
  }

  store(body: BedScheduleStore): ApiResponse<BedSchedules> {
    return this.httpClient.post("/api/bed-schedules", body);
  }

  update(id: Uuid, body: BedScheduleUpdate): ApiResponse<BedSchedules> {
    return this.httpClient.put(`/api/bed-schedules/${id}`, body);
  }

  delete(id: Uuid): ApiResponse<void> {
    return this.httpClient.delete(`/api/bed-schedules/${id}`);
  }
}
