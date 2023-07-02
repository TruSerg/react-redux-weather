import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

export const getUserLocationWeather = createAsyncThunk(
  "userLocation/getUserLocation",
  async (_, { rejectedWithValue }) => {
    try {
      const res = await axios.get("https://ipapi.co/city");

      const data = res.data;

      return data;
    } catch (error) {
      return rejectedWithValue(error.message);
    }
  }
);

const getUserLocationWeatherSlice = createSlice({
  name: "weatherDaily",
  initialState: {
    cityName: "",
    isLoading: false,
  },

  reducers: {},
  extraReducers: {
    [getUserLocationWeather.pending]: (state) => {
      state.isLoading = true;
    },
    [getUserLocationWeather.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.cityName = payload;
    },
    [getUserLocationWeather.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default getUserLocationWeatherSlice.reducer;
