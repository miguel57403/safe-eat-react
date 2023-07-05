import { Uuid } from "../types";

export interface BedSchedule {
  label: string;
  bed_schedules_id?: string;
  active: boolean;
  free: boolean;
  seed_id?: Uuid;
}

export interface BedScheduleUser {
  title: string;
  seed_id: string;
  start_at: string;
  end_at: string;
}

export interface BedScheduleStore {
  ground_id: Uuid;
  bed_label: string;
  schedules: BedSchedule[];
}

export interface BedScheduleUpdate {
  schedules: BedSchedule[];
}

export interface BedSchedules {
  id: Uuid;
  ground_id: Uuid;
  bed_label: string;
  schedules: BedScheduleUser[];
}

export interface BedSchedulesUpdateParams {
  id: Uuid;
  bedSchedules: BedScheduleUpdate;
}
