import { configureStore } from "@reduxjs/toolkit";

import weatherDataReducer from "./weatherDataSlice";

export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  reducer: {
    weatherData: weatherDataReducer,
  },
});
