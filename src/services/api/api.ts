import { AuthEndpoint } from "./endpoints/auth.endpoint";
import { BedSchedulesEndpoint } from "./endpoints/bed-schedules.endpoint";
import { GroundsEndpoint } from "./endpoints/grounds.endpoint";
import { PeoplesEndpoint } from "./endpoints/peoples.endpoint";
import { SeedsEndpoint } from "./endpoints/seeds.endpoint";
import { ToolsEndpoint } from "./endpoints/tools.endpoint";
import { UsersEndpoint } from "./endpoints/users.endpoint";
import { VoluntariesEndpoint } from "./endpoints/voluntaries.endpoint";
import { VoluntariesRequestEndpoint } from "./endpoints/voluntaries-request.endpoint";
import { HttpClient } from "./types";
import { GroundsDonateEndpoint } from "services/api/endpoints/grounds-donate.endpoint";

class ApiJWT {
  constructor(public httpClient: HttpClient) {}

  setToken(token: string) {
    this.httpClient.defaults.headers.common.Authorization = `Bearer ${token}`;
  }

  removeToken() {
    delete this.httpClient.defaults.headers.common.Authorization;
  }
}

export class Api extends ApiJWT {
  auth = new AuthEndpoint(this.httpClient);
  bedSchedules = new BedSchedulesEndpoint(this.httpClient);
  grounds = new GroundsEndpoint(this.httpClient);
  groundsDonates = new GroundsDonateEndpoint(this.httpClient);
  peoples = new PeoplesEndpoint(this.httpClient);
  seeds = new SeedsEndpoint(this.httpClient);
  tools = new ToolsEndpoint(this.httpClient);
  users = new UsersEndpoint(this.httpClient);
  voluntaries = new VoluntariesEndpoint(this.httpClient);
  voluntatiesRequest = new VoluntariesRequestEndpoint(this.httpClient);
}
