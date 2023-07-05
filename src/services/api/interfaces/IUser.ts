import { PaginationQuery, Uuid } from "../types";

export interface UserResponse {
  row_count: number;
  entities: UserResponse[] | undefined;
  id: Uuid;
  name: string;
  email: string;
  cellphone: string;
}

export interface UserIndex extends PaginationQuery {}

export interface UserStore {
  name: string;
  email: string;
  password: string;
  cellphone: string;
}

export interface UserUpdate {
  name?: string;
  email?: string;
  password?: string;
  cellphone?: string;
}

export interface UserUpdateParams {
  userUpdated: UserUpdate;
  id: Uuid;
}
