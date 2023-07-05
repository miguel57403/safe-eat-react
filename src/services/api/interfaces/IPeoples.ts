import { DateString, PaginationQuery, Uuid } from "../types";

export interface People {
  id: string;
  name: string;
  email: string;
  cellphone: string;
  birth_date: DateString;
  address: string;
}

export interface PeopleIndex extends PaginationQuery {}

export interface PeopleStore {
  name: string;
  email: string;
  cellphone: string;
  birth_date: DateString;
  address: string;
}

export interface PeopleUpdate {
  name?: string;
  email?: string;
  cellphone?: string;
  birth_date?: DateString;
  address?: string;
}

export interface PeoplesUpdateParams {
  id: Uuid;
  peoples: PeopleUpdate
}
