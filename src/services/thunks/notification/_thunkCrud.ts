import { createAsyncThunk } from "@reduxjs/toolkit";
import { INotificationRequest } from "services/thunks/notification/INotificationThunk";
import { Uuid, api } from "../../api";

export const fetchThunknotificationsView = createAsyncThunk(
  "notifications/register",
  async ({ id, notification }: INotificationRequest, { rejectWithValue }) => {
    try {
      const { data } = await api.notifications.view(id);
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

export const fetchThunknotificationsDelete = createAsyncThunk(
  "notifications/delete",
  async (idBynotifications: Uuid, { rejectWithValue }) => {
    try {
      const { data } = await api.notifications.delete(idBynotifications);

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
