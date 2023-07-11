import { ActionReducerMapBuilder, createSlice } from "@reduxjs/toolkit";
import { IAdvertisementsReducer } from "app/redux/interfaces/IReduces";
import {
  fetchThunkAdvertisementDelete,
  fetchThunkAdvertisementRegister,
  fetchThunkAdvertisementUpdate,
} from "services/thunks/advertisement/_thunkCrud";

const initialState: IAdvertisementsReducer = {
  advertisement: undefined,
  rowCount: 0,
  loading: false,
  status: undefined,
  error: undefined,
  message: undefined,
  operations: undefined,
};

export const advertisementSlice = createSlice({
  name: "advertisement",
  initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<any>) => {
    builder.addCase(
      fetchThunkAdvertisementRegister.fulfilled,
      (state: IAdvertisementsReducer, { payload }) => {
        state.advertisement?.push(payload);
        state.loading = false;
        state.message = "Request finished";
        state.error = undefined;
      }
    );
    builder.addCase(
      fetchThunkAdvertisementRegister.pending,
      (state: IAdvertisementsReducer) => {
        state.loading = true;
      }
    );
    builder.addCase(
      fetchThunkAdvertisementRegister.rejected,
      (state: IAdvertisementsReducer, { payload }) => {
        state.loading = false;

        state.message = "Error in request";
      }
    );

    // Fetch update
    builder.addCase(
      fetchThunkAdvertisementUpdate.fulfilled,
      (state: IAdvertisementsReducer, { payload }) => {
        state.advertisement?.push(payload);

        state.loading = false;
        state.message = "Request finished";
        state.error = undefined;
      }
    );
    builder.addCase(
      fetchThunkAdvertisementUpdate.pending,
      (state: IAdvertisementsReducer) => {
        state.loading = true;
      }
    );
    builder.addCase(
      fetchThunkAdvertisementUpdate.rejected,
      (state: IAdvertisementsReducer, { payload }) => {
        state.loading = false;

        state.message = "Error in request";
      }
    );

    // Fetch delete
    builder.addCase(
      fetchThunkAdvertisementDelete.fulfilled,
      (state: IAdvertisementsReducer, { payload }) => {
        state.advertisement = undefined;

        state.loading = false;
        state.message = "Request finished";
        state.error = undefined;
      }
    );
    builder.addCase(
      fetchThunkAdvertisementDelete.pending,
      (state: IAdvertisementsReducer) => {
        state.loading = true;
      }
    );
    builder.addCase(
      fetchThunkAdvertisementDelete.rejected,
      (state: IAdvertisementsReducer, { payload }) => {
        state.loading = false;

        state.message = "Error in request";
      }
    );
  },
});

export const {} = advertisementSlice.actions;

export default advertisementSlice.reducer;
