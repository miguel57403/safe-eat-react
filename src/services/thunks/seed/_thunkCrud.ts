import { createAsyncThunk } from "@reduxjs/toolkit";
import { Uuid, api } from "../../api";
import { SeedStore, SeedsUpdateParams } from "../../api/interfaces/ISeeds";

export const fetchThunkSeedsRegister = createAsyncThunk(
  "seeds/register",
  async (seedsInsert: SeedStore, { rejectWithValue }) => {
    try {
      const { data } = await api.seeds.store(seedsInsert);

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

export const fetchThunkSeedsUpdate = createAsyncThunk(
  "seeds/update",
  async ({ id, seeds }: SeedsUpdateParams, { rejectWithValue }) => {
    try {
      const { data } = await api.seeds.update(id, seeds);

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

export const fetchThunkSeedsDelete = createAsyncThunk(
  "seeds/delete",
  async (idBySeeds: Uuid, { rejectWithValue }) => {
    try {
      const { data } = await api.seeds.delete(idBySeeds);
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
