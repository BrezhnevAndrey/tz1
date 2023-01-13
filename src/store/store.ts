import { configureStore } from "@reduxjs/toolkit";
import { dataReducers } from "./dataSlice";

export const store = configureStore({
  reducer: { data: dataReducers },
});
