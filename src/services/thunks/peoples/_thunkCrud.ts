import { createAsyncThunk } from "@reduxjs/toolkit";
import { Uuid, api } from "../../api";
import { PeopleStore, PeoplesUpdateParams } from "../../api/interfaces/IPeoples";

export const fetchThunkPeoplesRegister = createAsyncThunk(
  "peoples/register",
  async (PeoplesInsert: PeopleStore, { rejectWithValue }) => {
    try {
      const { data } = await api.peoples.store(PeoplesInsert);

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

export const fetchThunkPeoplesUpdate = createAsyncThunk(
  "peoples/update",
  async ({ id, peoples }: PeoplesUpdateParams, { rejectWithValue }) => {
    try {
      const { data } = await api.peoples.update(id, peoples);

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

export const fetchThunkPeoplesDelete = createAsyncThunk(
  "peoples/delete",
  async (idByPeoples: Uuid, { rejectWithValue }) => {
    try {
      const { data } = await api.peoples.delete(idByPeoples);

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
