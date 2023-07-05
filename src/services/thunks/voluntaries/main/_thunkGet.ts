import { createAsyncThunk } from "@reduxjs/toolkit";
import { Uuid, api } from "../../../api";
import { VoluntaryIndex } from "../../../api/interfaces/voluntaries/IVoluntaries";

export const fetchThunkVoluntariesGetAll = createAsyncThunk(
  "voluntaries/getAll",
  async (query: VoluntaryIndex, { rejectWithValue }) => {
    try {
      const { data } = await api.voluntaries.index(query);

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

export const fetchThunkVoluntariesById = createAsyncThunk(
  "voluntaries/byId",
  async (id: Uuid, { rejectWithValue }) => {
    try {
      const { data } = await api.voluntaries.show(id);

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
