import { createAsyncThunk } from "@reduxjs/toolkit";
import { Uuid, api } from "../../api";

export const fetchThunkOrdersGetAll = createAsyncThunk(
  "orders/getAll",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await api.orders.findAll();

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

export const fetchThunkOrdersById = createAsyncThunk(
  "orders/byId",
  async (id: Uuid, { rejectWithValue }) => {
    try {
      const { data } = await api.orders.findById(id);

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

export const fetchThunkOrdersByRestaurants = createAsyncThunk(
  "orders/byRestaurant",
  async (id: Uuid, { rejectWithValue }) => {
    try {
      const { data } = await api.orders.findByRestaurant(id);

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
