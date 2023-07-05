import { createAsyncThunk } from "@reduxjs/toolkit";
import { Uuid, api } from "../../api";
import { UserStore, UserUpdateParams } from "../../api/interfaces/IUser";

export const fetchThunkUserRegister = createAsyncThunk(
  "users/register",
  async (userInsert: UserStore, { rejectWithValue }) => {
    try {
      const { data } = await api.users.store(userInsert);
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

export const fetchThunkUserUpdate = createAsyncThunk(
  "users/update",
  async ({ id, userUpdated }: UserUpdateParams, { rejectWithValue }) => {
    try {
      const { data } = await api.users.update(id, userUpdated);

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

export const fetchThunkUserDelete = createAsyncThunk(
  "users/delete",
  async (idByUser: Uuid, { rejectWithValue }) => {
    try {
      const { data } = await api.users.delete(idByUser);

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
