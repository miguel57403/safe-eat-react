import { ActionReducerMapBuilder, createSlice } from "@reduxjs/toolkit";
import { IAddressReducer } from "app/redux/interfaces/IReduces";
import {
  fetchThunkAddressDelete,
  fetchThunkAddressRegister,
  fetchThunkAddressUpdate,
} from "services/thunks/address/_thunkCrud";

const initialState: IAddressReducer = {
  address: undefined,
  rowCount: 0,
  loading: false,
  status: undefined,
  error: undefined,
  message: undefined,
  operations: undefined,
};

export const addressesSlice = createSlice({
  name: "addresses",
  initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<any>) => {
    builder.addCase(
      fetchThunkAddressRegister.fulfilled,
      (state: IAddressReducer, { payload }) => {
        state.address = payload;
        state.loading = false;
        state.message = "Request finished";
        state.error = undefined;
      }
    );
    builder.addCase(
      fetchThunkAddressRegister.pending,
      (state: IAddressReducer) => {
        state.loading = true;
      }
    );
    builder.addCase(
      fetchThunkAddressRegister.rejected,
      (state: IAddressReducer, { payload }) => {
        state.loading = false;

        state.message = "Error in request";
      }
    );

    // Fetch update
    builder.addCase(
      fetchThunkAddressUpdate.fulfilled,
      (state: IAddressReducer, { payload }) => {
        state.address = payload;

        state.loading = false;
        state.message = "Request finished";
        state.error = undefined;
      }
    );
    builder.addCase(
      fetchThunkAddressUpdate.pending,
      (state: IAddressReducer) => {
        state.loading = true;
      }
    );
    builder.addCase(
      fetchThunkAddressUpdate.rejected,
      (state: IAddressReducer, { payload }) => {
        state.loading = false;

        state.message = "Error in request";
      }
    );

    // Fetch delete
    builder.addCase(
      fetchThunkAddressDelete.fulfilled,
      (state: IAddressReducer, { payload }) => {
        state.address = undefined;

        state.loading = false;
        state.message = "Request finished";
        state.error = undefined;
      }
    );
    builder.addCase(
      fetchThunkAddressDelete.pending,
      (state: IAddressReducer) => {
        state.loading = true;
      }
    );
    builder.addCase(
      fetchThunkAddressDelete.rejected,
      (state: IAddressReducer, { payload }) => {
        state.loading = false;

        state.message = "Error in request";
      }
    );
  },
});

export const {} = addressesSlice.actions;

export default addressesSlice.reducer;
