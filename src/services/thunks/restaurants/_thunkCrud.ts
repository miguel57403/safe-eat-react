import { createAsyncThunk } from "@reduxjs/toolkit";
import { Uuid, api } from "../../api";
import { Restaurant } from "services/api/models/Restaurant";
import { IRestaurantsRequest } from "services/thunks/restaurants/IRestaurantsRequest";

export const fetchThunkRestaurantsRegister = createAsyncThunk(
  "restaurants/register",
  async (restaurantsInsert: Restaurant, { rejectWithValue }) => {
    try {
      const { data } = await api.restaurants.create(restaurantsInsert);
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

export const fetchThunkRestaurantsUpdate = createAsyncThunk(
  "restaurants/update",
  async ({id, restaurants}: IRestaurantsRequest, { rejectWithValue }) => {
    try {
      const { data } = await api.restaurants.update(id, restaurants);

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

export const fetchThunkRestaurantsDelete = createAsyncThunk(
  "restaurants/delete",
  async (idByrestaurants: Uuid, { rejectWithValue }) => {
    try {
      const { data } = await api.restaurants.delete(idByrestaurants);

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
