import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import api from "../http";

export const fetchWeatherData = createAsyncThunk(
  "weatherData/fetchWeatherData",
  async (cityName, { rejectedWithValue }) => {
    try {
      const res = await api.get(`weather?q=${cityName}`);

      const data = res.data;

      return data;
    } catch (error) {
      return rejectedWithValue(error.message);
    }
  }
);

const weatherDataSlice = createSlice({
  name: "weatherData",
  initialState: {
    weatherData: {},
    cityName: "",
    lon: "",
    lat: "",
    temp: "",
    tempMin: "",
    tempMax: "",
    feelsLike: "",
    windSpeed: "",
    pressure: "",
    humidity: "",
    weather: [],
    isLoading: false,
  },

  extraReducers: {
    [fetchWeatherData.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchWeatherData.fulfilled]: (state, { payload }) => {
      state.weatherData = payload;
      state.cityName = payload.name;
      state.lon = payload.coord.lon;
      state.lat = payload.coord.lat;
      state.temp = payload.main.temp;
      state.tempMin = payload.main.temp_min;
      state.tempMax = payload.main.temp_max;
      state.feelsLike = payload.main.feels_like;
      state.windSpeed = payload.wind.speed;
      state.pressure = payload.main.pressure;
      state.humidity = payload.main.humidity;
      state.weather = payload.weather;
      state.isLoading = false;
    },
    [fetchWeatherData.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default weatherDataSlice.reducer;
