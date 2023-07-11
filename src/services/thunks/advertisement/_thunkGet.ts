import { createAsyncThunk } from "@reduxjs/toolkit";
import { Uuid, api } from "../../api";

export const fetchThunkAdvertisementGetAll = createAsyncThunk(
  "advertisement/getAll",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await api.advertisements.findAll();

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

export const fetchThunkAdvertisementById = createAsyncThunk(
  "advertisement/byId",
  async (id: Uuid, { rejectWithValue }) => {
    try {
      const { data } = await api.advertisements.findById(id);

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

export const fetchThunkAdvertisementByRestaurant = createAsyncThunk(
  "advertisement/byRestaurant",
  async (id: Uuid, { rejectWithValue }) => {
    try {
      const { data } = await api.advertisements.findByRestaurant(id);

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
