import { PaginationQuery, Uuid } from "../../types";

export interface Voluntary extends FilterByVoluntary {
  id: Uuid;
  people_name: string;
  people_id: string;
  ground_id: string;
  bed_label: string;
  is_responsible: boolean;
  start_at: string;
  end_at: null;
}

interface FilterByVoluntary {
  people_id?: string;
  ground_id?: string;
  bed_label?: string;
}

export interface VoluntaryIndex extends PaginationQuery, FilterByVoluntary {}

export interface VoluntaryStore extends FilterByVoluntary {
  start_at: string;
  is_responsible: boolean;
}

export interface VoluntaryUpdate {
  people_id?: string;
  ground_id?: string;
  bed_label?: string;
  start_at?: string;
  is_responsable?: boolean;
}

export interface VoluntaryUpdateParams {
  id: Uuid;
  voluntary: VoluntaryUpdate;
}
