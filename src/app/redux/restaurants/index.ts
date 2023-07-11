import { ActionReducerMapBuilder, createSlice } from "@reduxjs/toolkit";
import { IRestaurantsReducer } from "app/redux/interfaces/IReduces";
import {
  fetchThunkRestaurantsDelete,
  fetchThunkRestaurantsRegister,
  fetchThunkRestaurantsUpdate,
} from "services/thunks/restaurants/_thunkCrud";
import { fetchThunkRestaurantsByUser } from "services/thunks/restaurants/_thunkGet";

const initialState: IRestaurantsReducer = {
  restaurants: undefined,
  mainRestaurant: undefined,
  rowCount: 0,
  loading: false,
  status: undefined,
  error: undefined,
  message: undefined,
  operations: undefined,
};

export const restaurantsSlice = createSlice({
  name: "restaurants",
  initialState,
  reducers: {
    setRestaurantMain: (state, actions) => {
      console.log(actions.payload);
      state.mainRestaurant = actions.payload;
    },
  },
  extraReducers: (builder: ActionReducerMapBuilder<any>) => {
    builder.addCase(
      fetchThunkRestaurantsRegister.fulfilled,
      (state: IRestaurantsReducer, { payload }) => {
        state.restaurants = payload;
        state.loading = false;
        state.message = "Request finished";
        state.error = undefined;
      }
    );
    builder.addCase(
      fetchThunkRestaurantsRegister.pending,
      (state: IRestaurantsReducer) => {
        state.loading = true;
      }
    );
    builder.addCase(
      fetchThunkRestaurantsRegister.rejected,
      (state: IRestaurantsReducer, { payload }) => {
        state.loading = false;

        state.message = "Error in request";
      }
    );

    // Fetch update
    builder.addCase(
      fetchThunkRestaurantsUpdate.fulfilled,
      (state: IRestaurantsReducer, { payload }) => {
        state.restaurants = payload;

        state.loading = false;
        state.message = "Request finished";
        state.error = undefined;
      }
    );
    builder.addCase(
      fetchThunkRestaurantsUpdate.pending,
      (state: IRestaurantsReducer) => {
        state.loading = true;
      }
    );
    builder.addCase(
      fetchThunkRestaurantsUpdate.rejected,
      (state: IRestaurantsReducer, { payload }) => {
        state.loading = false;

        state.message = "Error in request";
      }
    );

    // Fetch delete
    builder.addCase(
      fetchThunkRestaurantsDelete.fulfilled,
      (state: IRestaurantsReducer, { payload }) => {
        state.restaurants = undefined;

        state.loading = false;
        state.message = "Request finished";
        state.error = undefined;
      }
    );
    builder.addCase(
      fetchThunkRestaurantsDelete.pending,
      (state: IRestaurantsReducer) => {
        state.loading = true;
      }
    );
    builder.addCase(
      fetchThunkRestaurantsDelete.rejected,
      (state: IRestaurantsReducer, { payload }) => {
        state.loading = false;

        state.message = "Error in request";
      }
    );

    builder.addCase(
      fetchThunkRestaurantsByUser.fulfilled,
      (state: IRestaurantsReducer, { payload }) => {
        state.restaurants = payload;

        state.loading = false;
        state.message = "Request finished";
        state.error = undefined;
      }
    );
    builder.addCase(
      fetchThunkRestaurantsByUser.pending,
      (state: IRestaurantsReducer) => {
        state.loading = true;
      }
    );
    builder.addCase(
      fetchThunkRestaurantsByUser.rejected,
      (state: IRestaurantsReducer, { payload }) => {
        state.loading = false;

        state.message = "Error in request";
      }
    );
  },
});

export const { setRestaurantMain } = restaurantsSlice.actions;

export default restaurantsSlice.reducer;
