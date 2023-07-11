import { ActionReducerMapBuilder, createSlice } from "@reduxjs/toolkit";
import { INotificationsReducer } from "app/redux/interfaces/IReduces";
import {
  fetchThunkNotificationByRestaurant,
  fetchThunkNotificationGetAll,
} from "services/thunks/notification/_thunkGet";

const initialState: INotificationsReducer = {
  notifications: undefined,
  rowCount: 0,
  loading: false,
  status: undefined,
  error: undefined,
  message: undefined,
  operations: undefined,
};

export const notificationSlice = createSlice({
  name: "Notification",
  initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<any>) => {
    // Fetch delete
    builder.addCase(
      fetchThunkNotificationGetAll.fulfilled,
      (state: INotificationsReducer, { payload }) => {
        state.notifications = payload;

        state.loading = false;
        state.message = "Request finished";
        state.error = undefined;
      }
    );
    builder.addCase(
      fetchThunkNotificationGetAll.pending,
      (state: INotificationsReducer) => {
        state.loading = true;
      }
    );
    builder.addCase(
      fetchThunkNotificationGetAll.rejected,
      (state: INotificationsReducer, { payload }) => {
        state.loading = false;

        state.message = "Error in request";
      }
    );

    builder.addCase(
      fetchThunkNotificationByRestaurant.fulfilled,
      (state: INotificationsReducer, { payload }) => {
        if (payload) {
          state.notifications = payload;

          state.loading = false;
          state.message = "Request finished";
          state.error = undefined;
        }
      }
    );
    builder.addCase(
      fetchThunkNotificationByRestaurant.pending,
      (state: INotificationsReducer) => {
        state.loading = true;
      }
    );
    builder.addCase(
      fetchThunkNotificationByRestaurant.rejected,
      (state: INotificationsReducer, { payload }) => {
        state.loading = false;

        state.message = "Error in request";
      }
    );
  },
});

export const {} = notificationSlice.actions;

export default notificationSlice.reducer;
