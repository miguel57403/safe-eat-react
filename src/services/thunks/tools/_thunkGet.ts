import { createAsyncThunk } from "@reduxjs/toolkit";
import { Uuid, api } from "../../api";
import { ToolIndex } from "../../api/interfaces/ITools";

export const fetchThunkToolsGetAll = createAsyncThunk(
  "tool/getAll",
  async (query: ToolIndex, { rejectWithValue }) => {
    try {
      const { data } = await api.tools.index(query);

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

export const fetchThunkToolsById = createAsyncThunk(
  "tool/byId",
  async (id: Uuid, { rejectWithValue }) => {
    try {
      const { data } = await api.tools.show(id);

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
