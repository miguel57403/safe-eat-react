import { createAsyncThunk } from "@reduxjs/toolkit";
import { Uuid, api } from "../../api";
import { ToolStore, ToolsUpdateParams } from "../../api/interfaces/ITools";


export const fetchThunkToolsRegister = createAsyncThunk(
  "tools/register",
  async (toolsInsert: ToolStore, { rejectWithValue }) => {
    try {
      const { data } = await api.tools.store(toolsInsert);

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

export const fetchThunkToolsUpdate = createAsyncThunk(
  "tools/update",
  async ({ id, tools }: ToolsUpdateParams, { rejectWithValue }) => {
    try {
      const { data } = await api.tools.update(id, tools);

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

export const fetchThunkToolsDelete = createAsyncThunk(
  "tools/delete",
  async (idByTool: Uuid, { rejectWithValue }) => {
    try {
      const { data } = await api.tools.delete(idByTool);

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
