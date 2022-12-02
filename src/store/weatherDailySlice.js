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
    isLoading: false,
  },

  extraReducers: {
    [fetchWeatherDaily.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchWeatherDaily.fulfilled]: (state, { payload }) => {
      state.weatherDaily = payload;
      state.weatherDailyList = payload.list;
      state.isLoading = false;
    },
    [fetchWeatherDaily.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default weatherDailySlice.reducer;
