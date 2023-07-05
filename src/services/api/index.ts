import { axios } from "./_axios";
import { Api } from "./api";

export const api = new Api(axios);

export * from "./endpoints/auth.endpoint";
export * from "./endpoints/bed-schedules.endpoint";
export * from "./endpoints/grounds.endpoint";
export * from "./endpoints/grounds-donate.endpoint";
export * from "./endpoints/peoples.endpoint";
export * from "./endpoints/seeds.endpoint";
export * from "./endpoints/tools.endpoint";
export * from "./endpoints/users.endpoint";
export * from "./endpoints/voluntaries.endpoint";
export * from "./endpoints/voluntaries-request.endpoint";
export * from "./types";
