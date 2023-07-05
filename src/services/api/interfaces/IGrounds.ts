import { Int, PaginationQuery, Uuid } from "../types";

export interface Bed {
  label: string;
  active: boolean;
  free: boolean;
  seed_id?: Uuid;
  bed_schedules_id?: Uuid;
  status: "complete" | "free" | "occupied";
}

export interface Ground {
  id: Uuid;
  address: string;
  width: Int;
  length: Int;
  description: string;
  owner_id?: Uuid;
  manager_id?: Uuid;
  active: boolean;
  beds: Bed[];
}

export interface GroundIndex extends PaginationQuery {}

export interface GroundStore {
  width: Int;
  length: Int;
  address: string;
  description: string;
  beds_count: Int;
  owner_id: string;
}

export interface GroundUpdate {
  width?: Int;
  length?: Int;
  address?: string;
  description?: string;
  owner_id?: string;
}

export interface GroundUpdateParams {
  id: Uuid;
  ground: GroundUpdate;
}
