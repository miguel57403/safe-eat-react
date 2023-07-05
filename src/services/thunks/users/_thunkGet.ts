import { createAsyncThunk } from "@reduxjs/toolkit";
import { Uuid, api } from "../../api";
import { UserIndex, UserStore } from "../../api/interfaces/IUser";

export const fetchThunkUserGetAll = createAsyncThunk(
  "users/getAll",
  async (query: UserIndex, { rejectWithValue }) => {
    try {
      const { data } = await api.users.index(query);

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

export const fetchThunkUsersById = createAsyncThunk(
  "users/byId",
  async (id: Uuid, { rejectWithValue }) => {
    try {
      const { data } = await api.users.show(id);

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
