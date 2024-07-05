import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

export const getUserLocationWeather = createAsyncThunk(
	'userLocation/getUserLocation',
	async (_, { rejectWithValue }) => {
		try {
			const res = await axios('https://ipapi.co/city/');

			const data = await res.data;

			return data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);

const getUserLocationWeatherSlice = createSlice({
	name: 'weatherDaily',
	initialState: {
		cityName: '',
		isLocationError: false,
		isLocationLoading: false,
	},

	reducers: {},
	extraReducers: {
		[getUserLocationWeather.pending]: state => {
			state.isLocationLoading = true;
			state.isLocationError = false;
		},
		[getUserLocationWeather.fulfilled]: (state, { payload }) => {
			state.isLocationLoading = false;
			state.isLocationError = false;
			state.cityName = payload;
		},
		[getUserLocationWeather.rejected]: state => {
			state.isLocationLoading = false;
			state.isLocationError = true;
		},
	},
});

export default getUserLocationWeatherSlice.reducer;
