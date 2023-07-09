import { createAsyncThunk } from "@reduxjs/toolkit";
import { Uuid, api } from "../../api";
import { UserDto } from "services/api/dto/UserDto";

export const fetchThunkUserRegister = createAsyncThunk(
  "users/register",
  async (userInsert: UserDto, { rejectWithValue }) => {
    try {
      const { data } = await api.auth.signup(userInsert);
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
  async (userUpdated: UserDto, { rejectWithValue }) => {
    try {
      const { data } = await api.users.update(userUpdated);

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
