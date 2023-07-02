import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

export const getBelCities = createAsyncThunk(
  "belCities/getBelCities",
  async (_, { rejectedWithValue }) => {
    try {
      const res = await axios.get(
        "https://bel-cities-default-rtdb.firebaseio.com/"
      );

      const data = res.data;

      return data;
    } catch (error) {
      return rejectedWithValue(error.message);
    }
  }
);

const getBelCitiesSlice = createSlice({
  name: "weatherDaily",
  initialState: {
    belCitiesList: [],
    isLoading: false,
  },

  reducers: {},
  extraReducers: {
    [getBelCities.pending]: (state) => {
      state.isLoading = true;
    },
    [getBelCities.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.belCitiesList = payload;
    },
    [getBelCities.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default getBelCitiesSlice.reducer;
