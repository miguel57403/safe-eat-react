import { createAsyncThunk } from "@reduxjs/toolkit";
import { Uuid, api } from "../../api";
import { GroundIndex } from "../../api/interfaces/IGrounds";

export const fetchThunkGroundsGetAll = createAsyncThunk(
  "ground/getAll",
  async (query: GroundIndex, { rejectWithValue }) => {
    try {
      const { data } = await api.grounds.index(query);

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

export const fetchThunkGroundsById = createAsyncThunk(
  "ground/byId",
  async (id: Uuid, { rejectWithValue }) => {
    try {
      const { data } = await api.grounds.show(id);

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
