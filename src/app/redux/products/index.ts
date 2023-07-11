import { ActionReducerMapBuilder, createSlice } from "@reduxjs/toolkit";
import { IProductsReducer } from "app/redux/interfaces/IReduces";
import { fetchThunkProductsDelete, fetchThunkProductsRegister, fetchThunkProductsUpdate } from "services/thunks/product/_thunkCrud";
import { fetchThunkProductsByRestaurant } from "services/thunks/product/_thunkGet";

const initialState: IProductsReducer = {
  products: undefined,
  rowCount: 0,
  loading: false,
  status: undefined,
  error: undefined,
  message: undefined,
  operations: undefined,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<any>) => {
    builder.addCase(
      fetchThunkProductsRegister.fulfilled,
      (state: IProductsReducer, { payload }) => {
        state.products?.push(payload);
        state.loading = false;
        state.message = "Request finished";
        state.error = undefined;
      }
    );
    builder.addCase(
      fetchThunkProductsRegister.pending,
      (state: IProductsReducer) => {
        state.loading = true;
      }
    );
    builder.addCase(
      fetchThunkProductsRegister.rejected,
      (state: IProductsReducer, { payload }) => {
        state.loading = false;

        state.message = "Error in request";
      }
    );

    // Fetch update
    builder.addCase(
      fetchThunkProductsUpdate.fulfilled,
      (state: IProductsReducer, { payload }) => {
        state.products = state.products?.filter(
          (product) => product.id !== payload.id
        );

        state.loading = false;
        state.message = "Request finished";
        state.error = undefined;
      }
    );
    builder.addCase(
      fetchThunkProductsUpdate.pending,
      (state: IProductsReducer) => {
        state.loading = true;
      }
    );
    builder.addCase(
      fetchThunkProductsUpdate.rejected,
      (state: IProductsReducer, { payload }) => {
        state.loading = false;

        state.message = "Error in request";
      }
    );

    // Fetch delete
    builder.addCase(
      fetchThunkProductsDelete.fulfilled,
      (state: IProductsReducer, { payload }) => {
        state.products = undefined;

        state.loading = false;
        state.message = "Request finished";
        state.error = undefined;
      }
    );
    builder.addCase(
      fetchThunkProductsDelete.pending,
      (state: IProductsReducer) => {
        state.loading = true;
      }
    );
    builder.addCase(
      fetchThunkProductsDelete.rejected,
      (state: IProductsReducer, { payload }) => {
        state.loading = false;

        state.message = "Error in request";
      }
    );

    builder.addCase(
      fetchThunkProductsByRestaurant.fulfilled,
      (state: IProductsReducer, { payload }) => {
        state.products = payload;

        state.loading = false;
        state.message = "Request finished";
        state.error = undefined;
      }
    );
    builder.addCase(
      fetchThunkProductsByRestaurant.pending,
      (state: IProductsReducer) => {
        state.loading = true;
      }
    );
    builder.addCase(
      fetchThunkProductsByRestaurant.rejected,
      (state: IProductsReducer, { payload }) => {
        state.loading = false;

        state.message = "Error in request";
      }
    );
  },
});

export const {} = productsSlice.actions;

export default productsSlice.reducer;
