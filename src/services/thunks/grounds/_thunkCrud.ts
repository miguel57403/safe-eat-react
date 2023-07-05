import { createAsyncThunk } from "@reduxjs/toolkit";
import { Uuid, api } from "../../api";
import { GroundStore, GroundUpdateParams } from "../../api/interfaces/IGrounds";

export const fetchThunkGroundRegister = createAsyncThunk(
  "ground/register",
  async (GroundInsert: GroundStore, { rejectWithValue }) => {
    try {
      const { data } = await api.grounds.store(GroundInsert);

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

export const fetchThunkGroundUpdate = createAsyncThunk(
  "ground/update",
  async ({ id, ground }: GroundUpdateParams, { rejectWithValue }) => {
    try {
      const { data } = await api.grounds.update(id, ground);

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

export const fetchThunkGroundDelete = createAsyncThunk(
  "ground/delete",
  async (idByGround: Uuid, { rejectWithValue }) => {
    try {
      const { data } = await api.grounds.delete(idByGround);

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
