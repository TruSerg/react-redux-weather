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
    temp: "",
    weather: [],
    isLoading: false,
  },

  reducers: {
    setCityName(state, { payload }) {
      state.cityName = payload;
    },
  },

  extraReducers: {
    [fetchWeatherData.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchWeatherData.fulfilled]: (state, { payload }) => {
      state.weatherData = payload;
      state.cityName = payload.name;
      state.temp = payload.main.temp;
      state.weather = payload.weather;
      state.isLoading = false;
    },
    [fetchWeatherData.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { setCityName } = weatherDataSlice.actions;

export default weatherDataSlice.reducer;
