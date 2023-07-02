import { configureStore } from "@reduxjs/toolkit";

import weatherDataReducer from "./weatherDataSlice";
import weatherDailyReducer from "./weatherDailySlice";
import getBelCitiesReducer from "./getBelCitiesSlice";
import getUserLocationReducer from "./getUserLocationWeather";

export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  reducer: {
    weatherData: weatherDataReducer,
    weatherDaily: weatherDailyReducer,
    getBelCities: getBelCitiesReducer,
    getUserLocation: getUserLocationReducer,
  },
});
