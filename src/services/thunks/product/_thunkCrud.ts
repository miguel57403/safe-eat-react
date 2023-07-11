import { createAsyncThunk } from "@reduxjs/toolkit";
import { Uuid, api } from "../../api";
import { Product } from "services/api/models/Product";
import { IProductRequest } from "services/thunks/product/IProductsThunk";

export const fetchThunkProductsRegister = createAsyncThunk(
  "products/register",
  async ({id, product}: IProductRequest, { rejectWithValue }) => {
    try {
      const { data } = await api.products.create(id, product);
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

export const fetchThunkProductsUpdate = createAsyncThunk(
  "products/update",
  async ({id, product}: IProductRequest, { rejectWithValue }) => {
    try {
      const { data } = await api.products.update(id, product);

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

export const fetchThunkProductsDelete = createAsyncThunk(
  "products/delete",
  async (idByProducts: Uuid, { rejectWithValue }) => {
    try {
      const { data } = await api.products.delete(idByProducts);

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
