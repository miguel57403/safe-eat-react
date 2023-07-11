import { createAsyncThunk } from "@reduxjs/toolkit";
import { Address } from "services/api/models/Address";
import { Uuid, api } from "../../api";

export const fetchThunkAddressRegister = createAsyncThunk(
  "address/register",
  async (addressInsert: Address, { rejectWithValue }) => {
    try {
      const { data } = await api.addresses.create(addressInsert);
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

export const fetchThunkAddressUpdate = createAsyncThunk(
  "address/update",
  async (addressUpdated: Address, { rejectWithValue }) => {
    try {
      const { data } = await api.addresses.update(addressUpdated);

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

export const fetchThunkAddressDelete = createAsyncThunk(
  "address/delete",
  async (idByAddress: Uuid, { rejectWithValue }) => {
    try {
      const { data } = await api.addresses.delete(idByAddress);

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
