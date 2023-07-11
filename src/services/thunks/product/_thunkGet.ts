import { createAsyncThunk } from "@reduxjs/toolkit";
import { Uuid, api } from "../../api";

export const fetchThunkProductsGetAll = createAsyncThunk(
  "products/getAll",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await api.products.findAll();

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

export const fetchThunkProductsById = createAsyncThunk(
  "products/byId",
  async (id: Uuid, { rejectWithValue }) => {
    try {
      const { data } = await api.products.findById(id);

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

export const fetchThunkProductsByRestaurant = createAsyncThunk(
  "products/byRestaurant",
  async (id: Uuid, { rejectWithValue }) => {
    try {
      const { data } = await api.products.findByRestaurant(id);

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
