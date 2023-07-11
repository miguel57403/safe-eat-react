import { persistConfig } from "app/_config";
import addressesSlice from "app/redux/address";
import advertisementSlice from "app/redux/advertisement";
import authSlice from "app/redux/auth";
import notificationSlice from "app/redux/notifications";
import ordersSlice from "app/redux/orders";
import productsSlice from "app/redux/products";
import restaurantsSlice from "app/redux/restaurants";
import { persistReducer } from "redux-persist";

const RootReducer = {
  auth: persistReducer(persistConfig, authSlice),
  products: productsSlice,
  addresses: addressesSlice,
  notification: notificationSlice,
  restaurants: persistReducer(persistConfig, restaurantsSlice),
  orders: ordersSlice,
  advertisements: advertisementSlice,
};

export default RootReducer;
