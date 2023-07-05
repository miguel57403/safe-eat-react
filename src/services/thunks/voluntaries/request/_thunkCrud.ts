import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  VoluntaryRequestStore,
  VoluntaryRequestUpdateParams,
} from "services/api/interfaces/voluntaries/IVoluntariesRequest";
import { Uuid, api } from "../../../api";

export const fetchThunkVoluntariesRequestRegister = createAsyncThunk(
  "voluntaries-request/register",
  async (voluntaryInsert: VoluntaryRequestStore, { rejectWithValue }) => {
    try {
      const { data } = await api.voluntatiesRequest.store(voluntaryInsert);

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

export const fetchThunkVoluntariesRequestUpdate = createAsyncThunk(
  "voluntaries-request/update",
  async (
    { id, voluntaryRequest }: VoluntaryRequestUpdateParams,
    { rejectWithValue }
  ) => {
    try {
      const { data } = await api.voluntatiesRequest.update(id, voluntaryRequest);

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

export const fetchThunkVoluntariesRequestDelete = createAsyncThunk(
  "voluntaries-request/delete",
  async (idByUser: Uuid, { rejectWithValue }) => {
    try {
      const { data } = await api.voluntatiesRequest.delete(idByUser);

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
