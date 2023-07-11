import { ActionReducerMapBuilder, createSlice } from "@reduxjs/toolkit";
import { IOrdersReducer } from "app/redux/interfaces/IReduces";
import {
  fetchThunkOrdersDelete,
  fetchThunkOrdersRegister,
  fetchThunkOrdersUpdate,
} from "services/thunks/orders/_thunkCrud";
import { fetchThunkOrdersById, fetchThunkOrdersByRestaurants, fetchThunkOrdersGetAll } from "services/thunks/orders/_thunkGet";
import { fetchThunkRestaurantsByUser } from "services/thunks/restaurants/_thunkGet";

const initialState: IOrdersReducer = {
  orders: undefined,
  rowCount: 0,
  loading: false,
  status: undefined,
  error: undefined,
  message: undefined,
  operations: undefined,
};

export const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<any>) => {
    builder.addCase(
      fetchThunkOrdersRegister.fulfilled,
      (state: IOrdersReducer, { payload }) => {
        state.orders?.push(payload);
        state.loading = false;
        state.message = "Request finished";
        state.error = undefined;
      }
    );
    builder.addCase(
      fetchThunkOrdersRegister.pending,
      (state: IOrdersReducer) => {
        state.loading = true;
      }
    );
    builder.addCase(
      fetchThunkOrdersRegister.rejected,
      (state: IOrdersReducer, { payload }) => {
        state.loading = false;

        state.message = "Error in request";
      }
    );

    // Fetch update
    builder.addCase(
      fetchThunkOrdersUpdate.fulfilled,
      (state: IOrdersReducer, { payload }) => {
        if (payload) {
          state.orders = state.orders?.filter((item) => item.id !== payload.id);
        }
        state.loading = false;
        state.message = "Request finished";
        state.error = undefined;
      }
    );
    builder.addCase(fetchThunkOrdersUpdate.pending, (state: IOrdersReducer) => {
      state.loading = true;
    });
    builder.addCase(
      fetchThunkOrdersUpdate.rejected,
      (state: IOrdersReducer, { payload }) => {
        state.loading = false;

        state.message = "Error in request";
      }
    );

    // Fetch delete
    builder.addCase(
      fetchThunkOrdersDelete.fulfilled,
      (state: IOrdersReducer, { payload }) => {
        state.orders = undefined;

        state.loading = false;
        state.message = "Request finished";
        state.error = undefined;
      }
    );
    builder.addCase(fetchThunkOrdersDelete.pending, (state: IOrdersReducer) => {
      state.loading = true;
    });
    builder.addCase(
      fetchThunkOrdersDelete.rejected,
      (state: IOrdersReducer, { payload }) => {
        state.loading = false;

        state.message = "Error in request";
      }
    );

    builder.addCase(
      fetchThunkOrdersById.fulfilled,
      (state: IOrdersReducer, { payload }) => {
        state.orders = [payload];

        state.loading = false;
        state.message = "Request finished";
        state.error = undefined;
      }
    );
    builder.addCase(
      fetchThunkOrdersById.pending,
      (state: IOrdersReducer) => {
        state.loading = true;
      }
    );
    builder.addCase(
      fetchThunkOrdersById.rejected,
      (state: IOrdersReducer, { payload }) => {
        state.loading = false;

        state.message = "Error in request";
      }
    );

    builder.addCase(
      fetchThunkOrdersGetAll.fulfilled,
      (state: IOrdersReducer, { payload }) => {
        state.orders = payload;

        state.loading = false;
        state.message = "Request finished";
        state.error = undefined;
      }
    );
    builder.addCase(fetchThunkOrdersGetAll.pending, (state: IOrdersReducer) => {
      state.loading = true;
    });
    builder.addCase(
      fetchThunkOrdersGetAll.rejected,
      (state: IOrdersReducer, { payload }) => {
        state.loading = false;

        state.message = "Error in request";
      }
    );

    builder.addCase(
      fetchThunkOrdersByRestaurants.fulfilled,
      (state: IOrdersReducer, { payload }) => {
        state.orders = [...payload];

        state.loading = false;
        state.message = "Request finished";
        state.error = undefined;
      }
    );
    builder.addCase(fetchThunkOrdersByRestaurants.pending, (state: IOrdersReducer) => {
      state.loading = true;
    });
    builder.addCase(
      fetchThunkOrdersByRestaurants.rejected,
      (state: IOrdersReducer, { payload }) => {
        state.loading = false;

        state.message = "Error in request";
      }
    );
  },
});

export const {} = ordersSlice.actions;

export default ordersSlice.reducer;
