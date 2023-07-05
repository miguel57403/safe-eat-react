import { createAsyncThunk } from "@reduxjs/toolkit";
import { Uuid, api } from "../../api";
import { PeopleIndex, PeopleStore } from "../../api/interfaces/IPeoples";

export const fetchThunkPeopleGetAll = createAsyncThunk(
  "peoples/getAll",
  async (query: PeopleIndex, { rejectWithValue }) => {
    try {
      const { data } = await api.peoples.index(query);

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

export const fetchThunkPeoplesById = createAsyncThunk(
  "peoples/byId",
  async (id: Uuid, { rejectWithValue }) => {
    try {
      const { data } = await api.peoples.show(id);

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
