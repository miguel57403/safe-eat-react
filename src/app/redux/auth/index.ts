import { ActionReducerMapBuilder, createSlice } from "@reduxjs/toolkit";
import { api } from "services/api";
import { fetchThunkLogin, fetchThunkMe } from "services/thunks/auth/_thunkCreate";
import { IAuthReducer } from "../interfaces/IReduces";

const initialState: IAuthReducer = {
  userAuth: undefined,
  token: undefined,
  rowCount: 0,
  loading: false,
  status: undefined,
  message: undefined,
  error: undefined,
  operations: undefined,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.token = undefined;
      api.removeToken();
    },
    resetStatus: (state) => (state.status = undefined),
  },
  extraReducers: (builder: ActionReducerMapBuilder<any>) => {
    builder.addCase(
      fetchThunkLogin.fulfilled,
      (state: IAuthReducer, { payload }) => {
        state.loading = false;
        state.token = payload.token;
        api.setToken(payload.token);
      }
    );
    builder.addCase(fetchThunkLogin.pending, (state: IAuthReducer) => {
      state.loading = true;
    });
    builder.addCase(
      fetchThunkLogin.rejected,
      (state: IAuthReducer, { payload }) => {
        state.loading = false;
        state.error = {
          message: `${payload}`,
        };
      }
    );

    builder.addCase(
      fetchThunkMe.fulfilled,
      (state: IAuthReducer, { payload }) => {
        state.loading = false;
        state.userAuth = payload;
      }
      );
      builder.addCase(fetchThunkMe.pending, (state: IAuthReducer) => {
        state.loading = true;
      });
    builder.addCase(
      fetchThunkMe.rejected,
      (state: IAuthReducer, { payload }) => {
        state.loading = false;
        state.userAuth = undefined;
        state.error = {
          message: `${payload}`,
        };
      }
    );
  },
});

export const { resetStatus } = authSlice.actions;

export default authSlice.reducer;
