import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../api";
import { AuthLogin } from "../../api/interfaces/IAuth";

export const fetchThunkLogin = createAsyncThunk(
  "auth/login",
  async ({ password, username }: AuthLogin, { rejectWithValue }) => {
    try {
      const { data } = await api.auth.login({ password, username });
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

export const fetchThunkMe = createAsyncThunk(
  "auth/me",
  async ({}: any, { rejectWithValue }) => {
    try {
      const { data } = await api.auth.me();
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

export const fetchThunkRefresh = createAsyncThunk(
  "auth/",
  async ({}: any, { rejectWithValue }) => {
    try {
      const { data } = await api.auth.me();
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
