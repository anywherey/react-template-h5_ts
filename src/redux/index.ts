import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slice/counter";
import userReducer from "./slice/user";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
  },
});
