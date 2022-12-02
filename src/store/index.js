import { configureStore } from "@reduxjs/toolkit";

import weatherDataReducer from "./weatherDataSlice";
import weatherDailyReducer from "./weatherDailySlice";

export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  reducer: {
    weatherData: weatherDataReducer,
    weatherDaily: weatherDailyReducer,
  },
});
