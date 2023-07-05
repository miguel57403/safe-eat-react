import { PaginationQuery, Uuid } from "../types";

export interface GroundDonate {
  id: string;
  name: string;
  email: string;
  cellphone: string;
  birth_date: string;
  address: string;
  ground_address: string;
}

export interface GroundDonateIndex extends PaginationQuery {}

export interface GroundDonateStore {
  name: string;
  email: string;
  cellphone: string;
  birth_date: string;
  address: string;
  ground_address: string;
}

export interface GroundDonateUpdate {
  name?: string;
  email?: string;
  cellphone?: string;
  birth_date?: string;
  address?: string;
  ground_address?: string;
}

export interface GroundDonateUpdateParams {
  grounds_donate_id: Uuid;
  groundDonate: GroundDonateUpdate;
}
