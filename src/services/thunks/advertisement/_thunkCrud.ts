import { createAsyncThunk } from "@reduxjs/toolkit";
import { Advertisement } from "services/api/models/Advertisement";
import { Uuid, api } from "../../api";

export const fetchThunkAdvertisementRegister = createAsyncThunk(
  "advertisement/register",
  async (advertisementInsert: Advertisement, { rejectWithValue }) => {
    try {
      const { data } = await api.advertisements.create(advertisementInsert);
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

export const fetchThunkAdvertisementUpdate = createAsyncThunk(
  "advertisement/update",
  async (AdvertisementUpdated: Advertisement, { rejectWithValue }) => {
    try {
      const { data } = await api.advertisements.update(AdvertisementUpdated);

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

export const fetchThunkAdvertisementDelete = createAsyncThunk(
  "advertisement/delete",
  async (idByAdvertisement: Uuid, { rejectWithValue }) => {
    try {
      const { data } = await api.advertisements.delete(idByAdvertisement);

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
