import { createAsyncThunk } from "@reduxjs/toolkit";
import { GroundDonateIndex } from "services/api/interfaces/IGroundsDonate";
import { Uuid, api } from "../../api";

export const fetchThunkGroundDonateGetAll = createAsyncThunk(
  "groundDonate/getAll",
  async (query: GroundDonateIndex, { rejectWithValue }) => {
    try {
      const { data } = await api.groundsDonates.index(query);

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

export const fetchThunkGroundDonateById = createAsyncThunk(
  "groundDonate/byId",
  async (id: Uuid, { rejectWithValue }) => {
    try {
      const { data } = await api.groundsDonates.show(id);

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
