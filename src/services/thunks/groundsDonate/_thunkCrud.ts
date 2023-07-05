import { createAsyncThunk } from "@reduxjs/toolkit";
import { Uuid, api } from "../../api";
import {
  GroundDonateStore,
  GroundDonateUpdateParams,
} from "../../api/interfaces/IGroundsDonate";

export const fetchThunkGroundDonateRegister = createAsyncThunk(
  "groundDonate/register",
  async (GroundDonateInsert: GroundDonateStore, { rejectWithValue }) => {
    try {
      const { data } = await api.groundsDonates.store(GroundDonateInsert);

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

export const fetchThunkGroundDonateUpdate = createAsyncThunk(
  "groundDonate/update",
  async (
    { groundDonate, grounds_donate_id }: GroundDonateUpdateParams,
    { rejectWithValue }
  ) => {
    try {
      const { data } = await api.groundsDonates.update(
        grounds_donate_id,
        groundDonate
      );

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

export const fetchThunkGroundDonateDelete = createAsyncThunk(
  "groundDonate/delete",
  async (idByGroundDonate: Uuid, { rejectWithValue }) => {
    try {
      const { data } = await api.groundsDonates.delete(idByGroundDonate);

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
