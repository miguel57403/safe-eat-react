import { createAsyncThunk } from "@reduxjs/toolkit";
import { Uuid, api } from "../../api";

export const fetchThunkNotificationGetAll = createAsyncThunk(
  "notification/getAll",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await api.notifications.findAll();

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

export const fetchThunkNotificationById = createAsyncThunk(
  "notification/byId",
  async (id: Uuid, { rejectWithValue }) => {
    try {
      const { data } = await api.notifications.findById(id);

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

export const fetchThunkNotificationByRestaurant = createAsyncThunk(
  "notification/byRestaurant",
  async (id: Uuid, { rejectWithValue }) => {
    try {
      const { data } = await api.notifications.findByRestaurant(id);

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
export const fetchThunkNotificationByUser = createAsyncThunk(
  "notification/byUser",
  async (id: Uuid, { rejectWithValue }) => {
    try {
      const { data } = await api.notifications.findByUser(id);

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
