import { createAsyncThunk } from "@reduxjs/toolkit";
import { IOrdersRequest } from "services/thunks/orders/IOrders";
import { Uuid, api } from "../../api";

export const fetchThunkOrdersRegister = createAsyncThunk(
  "orders/register",
  async ({Orders}: IOrdersRequest, { rejectWithValue }) => {
    try {
      const { data } = await api.orders.create(Orders);
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

export const fetchThunkOrdersUpdate = createAsyncThunk(
  "orders/update",
  async ({id, Orders}: IOrdersRequest, { rejectWithValue }) => {
    try {
      if(id){

        const { data } = await api.orders.update(id , Orders);
        
        return data;
      }
    } catch (err: any) {
      if (err.response && err.response.data.message) {
        return rejectWithValue(err.response.data.message);
      } else {
        return rejectWithValue(err.message);
      }
    }
  }
);

export const fetchThunkOrdersDelete = createAsyncThunk(
  "orders/delete",
  async (idByOrders: Uuid, { rejectWithValue }) => {
    try {
      const { data } = await api.orders.delete(idByOrders);

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
