import { Int, PaginationQuery, Uuid } from "../types";

export type TSeedType = "vegetable" | "fruit" | "herb";

export interface Seed {
  id: Uuid;
  name: string;
  description: string;
  amount: Int;
  seed_type: TSeedType;
}

export interface SeedIndex extends PaginationQuery {}

export interface SeedStore {
  name: string;
  amount: Int;
  description: string;
  seed_type: TSeedType;
}

export interface SeedUpdate {
  name?: string;
  amount?: Int;
  description?: string;
  seed_type?: TSeedType;
}

export interface SeedsUpdateParams {
  id: Uuid;
  seeds: SeedUpdate;
}
