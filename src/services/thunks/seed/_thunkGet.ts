import { createAsyncThunk } from "@reduxjs/toolkit";
import { Uuid, api } from "../../api";
import { SeedIndex } from "../../api/interfaces/ISeeds";

export const fetchThunkSeedsGetAll = createAsyncThunk(
  "seeds/getAll",
  async (query: SeedIndex, { rejectWithValue }) => {
    try {
      const { data } = await api.seeds.index(query);

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

export const fetchThunkSeedsById = createAsyncThunk(
  "seeds/byId",
  async (id: Uuid, { rejectWithValue }) => {
    try {
      const { data } = await api.seeds.show(id);

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
