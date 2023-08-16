import { configureStore } from "@reduxjs/toolkit";
import redirectReducer from "./redirectSlice";
import wishSliceReducer from "./wishSlice";

export const store = configureStore({
  reducer: {
    redirect: redirectReducer,
    wishlist: wishSliceReducer,
  },
});
