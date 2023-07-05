import { createAsyncThunk } from "@reduxjs/toolkit";
import { Uuid, api } from "../../../api";
import {
  VoluntaryStore,
  VoluntaryUpdateParams,
} from "../../../api/interfaces/voluntaries/IVoluntaries";

export const fetchThunkVoluntariesRegister = createAsyncThunk(
  "voluntaries/register",
  async (voluntaryInsert: VoluntaryStore, { rejectWithValue }) => {
    try {
      const { data } = await api.voluntaries.store(voluntaryInsert);

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

export const fetchThunkVoluntariesUpdate = createAsyncThunk(
  "voluntaries/update",
  async ({ id, voluntary }: VoluntaryUpdateParams, { rejectWithValue }) => {
    try {
      const { data } = await api.voluntaries.update(id, voluntary);

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

export const fetchThunkVoluntariesDelete = createAsyncThunk(
  "voluntaries/delete",
  async (idByUser: Uuid, { rejectWithValue }) => {
    try {
      const { data } = await api.voluntaries.delete(idByUser);

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
