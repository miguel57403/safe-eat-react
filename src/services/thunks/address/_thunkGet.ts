import { createAsyncThunk } from "@reduxjs/toolkit";
import { Uuid, api } from "../../api";

export const fetchThunkAddressesGetAll = createAsyncThunk(
  "addresses/getAll",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await api.addresses.findAll();

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

export const fetchThunkAddressesById = createAsyncThunk(
  "addresses/byId",
  async (id: Uuid, { rejectWithValue }) => {
    try {
      const { data } = await api.addresses.findById(id);

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

export const fetchThunkAddressesByUser = createAsyncThunk(
  "addresses/byUser",
  async (id: Uuid, { rejectWithValue }) => {
    try {
      const { data } = await api.addresses.findAllByUser(id);

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

export const fetchThunkAddressesByMe = createAsyncThunk(
  "addresses/byMe",
  async (id: Uuid, { rejectWithValue }) => {
    try {
      const { data } = await api.addresses.findAllByMe();

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
