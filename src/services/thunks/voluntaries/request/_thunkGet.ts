import { createAsyncThunk } from "@reduxjs/toolkit";
import { VoluntaryRequestIndex } from "services/api/interfaces/voluntaries/IVoluntariesRequest";
import { Uuid, api } from "../../../api";

export const fetchThunkVoluntariesRequestGetAll = createAsyncThunk(
  "voluntaries-request/getAll",
  async (query: VoluntaryRequestIndex, { rejectWithValue }) => {
    try {
      const { data } = await api.voluntatiesRequest.index(query);

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

export const fetchThunkVoluntariesRequestById = createAsyncThunk(
  "voluntaries-request/byId",
  async (id: Uuid, { rejectWithValue }) => {
    try {
      const { data } = await api.voluntatiesRequest.show(id);

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
