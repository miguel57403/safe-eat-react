import { createAsyncThunk } from "@reduxjs/toolkit";
import { Uuid, api } from "../../api";

export const fetchThunkRestaurantsGetAll = createAsyncThunk(
  "restaurants/getAll",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await api.restaurants.findAll();

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

export const fetchThunkRestaurantsByUser = createAsyncThunk(
  "restaurants/byUser",
  async (id: Uuid, { rejectWithValue }) => {
    try {
      const { data } = await api.restaurants.findAllByOwner(id);

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

export const fetchThunkRestaurantsByRestaurant = createAsyncThunk(
  "Restaurants/byRestaurant",
  async (id: Uuid, { rejectWithValue }) => {
    try {
      const { data } = await api.restaurants.findById(id);

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
