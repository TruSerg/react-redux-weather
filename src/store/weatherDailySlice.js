import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import api from "../http";

export const fetchWeatherDaily = createAsyncThunk(
  "weatherDaily/fetchWeatherDaily",
  async ([lat, lon], { rejectedWithValue }) => {
    try {
      const res = await api.get(`forecast?lat=${lat}&lon=${lon}`);

      const data = res.data;

      return data;
    } catch (error) {
      return rejectedWithValue(error.message);
    }
  }
);

const weatherDailySlice = createSlice({
  name: "weatherDaily",
  initialState: {
    weatherDaily: {},
    weatherDailyList: [],
    weatherDailyDetailsItem: {},
    isLoading: false,
  },

  reducers: {
    foundItemWeatherDaily(state, { payload }) {
      state.weatherDailyDetailsItem = state.weatherDailyList.find(
        (item) => item.dt === payload
      );
    },
  },
  extraReducers: {
    [fetchWeatherDaily.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchWeatherDaily.fulfilled]: (state, { payload }) => {
      state.weatherDaily = payload;
      state.weatherDailyList = payload.list;
    },
    [fetchWeatherDaily.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { foundItemWeatherDaily } = weatherDailySlice.actions;

export default weatherDailySlice.reducer;
