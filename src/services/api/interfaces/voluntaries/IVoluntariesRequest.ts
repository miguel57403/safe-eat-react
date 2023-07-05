import { PaginationQuery, Uuid } from "../../types";

export interface VoluntaryRequest {
  id: Uuid;
  name: string;
  email: string;
  cellphone: string;
  birth_date: string;
  address: string;
}

export interface VoluntaryRequestIndex extends PaginationQuery {}

export interface VoluntaryRequestStore {
  name: string;
  email: string;
  cellphone: string;
  birth_date: string;
  address: string;
}

export interface VoluntaryRequestUpdate {
  name?: string;
  email?: string;
  cellphone?: string;
  birth_date?: string;
  address?: string;
}

export interface VoluntaryRequestUpdateParams {
  id: Uuid;
  voluntaryRequest: VoluntaryRequestUpdate;
}
