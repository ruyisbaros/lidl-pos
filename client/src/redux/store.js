import { configureStore } from "@reduxjs/toolkit";
/* import currentUserSlice from "./currentUserSlice";
import chatSlice from "./chatSlice";
import socketSlicer from "./socketSlicer";
import callStreamSlicer from "./callStreamSlicer";
import mediaDevicesSlice from "./mediaDevicesSlice";
import callingsSlice from "./callingsSlice";
import statusSlicer from "./statusSlicer"; */

export const store = configureStore({
  reducer: {},
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
