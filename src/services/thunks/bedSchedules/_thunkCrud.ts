import { createAsyncThunk } from "@reduxjs/toolkit";
import { Uuid, api } from "../../api";
import { BedScheduleStore, BedSchedulesUpdateParams } from "../../api/interfaces/IBadSchedules";


export const fetchThunkBedSchedulesRegister = createAsyncThunk(
  "bedSchedules/register",
  async (bedSchedulesInsert: BedScheduleStore, { rejectWithValue }) => {
    try {
      const { data } = await api.bedSchedules.store(bedSchedulesInsert);

      return data;
    } catch (err: any) {
      if (err.response && err.response.data.message) {
        return rejectWithValue(err.response.data.message);
      } else {
        return rejectWithValue(err.message);
      }
    }
  }
);

export const fetchThunkBedSchedulesUpdate = createAsyncThunk(
  "bedSchedules/update",
  async ({ id, bedSchedules }: BedSchedulesUpdateParams, { rejectWithValue }) => {
    try {
      const { data } = await api.bedSchedules.update(id, bedSchedules);

      return data;
    } catch (err: any) {
      if (err.response && err.response.data.message) {
        return rejectWithValue(err.response.data.message);
      } else {
        return rejectWithValue(err.message);
      }
    }
  }
);

export const fetchThunkBedSchedulesDelete = createAsyncThunk(
  "bedSchedules/delete",
  async (idByBedSchedules: Uuid, { rejectWithValue }) => {
    try {
      const { data } = await api.bedSchedules.delete(idByBedSchedules);

      return data;
    } catch (err: any) {
      if (err.response && err.response.data.message) {
        return rejectWithValue(err.response.data.message);
      } else {
        return rejectWithValue(err.message);
      }
    }
  }
);
