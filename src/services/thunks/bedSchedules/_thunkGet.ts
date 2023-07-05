import { createAsyncThunk } from "@reduxjs/toolkit";
import { Uuid, api } from "../../api";

export const fetchThunkBedSchedulesById = createAsyncThunk(
  "bedSchedules/byId",
  async (id: Uuid, { rejectWithValue }) => {
    try {
      const { data } = await api.bedSchedules.show(id);
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
