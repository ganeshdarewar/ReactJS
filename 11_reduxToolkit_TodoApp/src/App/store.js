import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../feature/todo/todoSlice";

export const store = configureStore({
  reducer: todoSlice.reducer,
});

export default store;
