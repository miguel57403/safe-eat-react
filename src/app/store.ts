import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { persistStore } from "redux-persist";
import reducer from "./redux";

export const Store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof Store.getState>;

export type AppDispatch = typeof Store.dispatch;

export const useAppDispatch = useDispatch<AppDispatch>;

export const useAppSelector = <A>(selector: (state: RootState) => A) =>
  useSelector(selector);

export const persistor = persistStore(Store);
