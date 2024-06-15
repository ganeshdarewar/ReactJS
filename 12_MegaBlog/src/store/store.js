import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./autoSlice";

const store = configureStore({
  reducer: authSlice.reducer,
});

export default store;
