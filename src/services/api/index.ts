import { axios } from "./_axios";
import { Api } from "./api";

export const api = new Api(axios);

export * from "./endpoints/auth.endpoint";
export * from "./endpoints/addresses.endpoint";
export * from "./endpoints/carts.endpoint";
export * from "./endpoints/advertisements.endpoint";
export * from "./endpoints/categories.endpoint";
export * from "./endpoints/deliveries.endpoint";
export * from "./endpoints/feedbacks.endpoint";
export * from "./endpoints/ingredients.endpoint";
export * from "./endpoints/notifications.endpoint";
export * from "./endpoints/items.endpoint";
export * from "./types";
