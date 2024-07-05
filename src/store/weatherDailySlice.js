import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import api from '../http';

export const fetchWeatherDaily = createAsyncThunk(
	'weatherDaily/fetchWeatherDaily',
	async ([lat, lon], { rejectWithValue }) => {
		try {
			const res = await api.get(`forecast?lat=${lat}&lon=${lon}`);

			const data = res.data;

			return data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);

const weatherDailySlice = createSlice({
	name: 'weatherDaily',
	initialState: {
		weatherDaily: {},
		weatherDailyList: [],
		weatherFiveDaysList: [],
		weatherDailyDetailsItem: {},
		isError: false,
		isLoading: false,
		isShowMode: true,
	},

	reducers: {
		foundItemWeatherDaily(state, { payload }) {
			state.weatherDailyDetailsItem = state.weatherDailyList.find(
				item => item.dt === payload
			);
		},
		getFiveDaysForecast(state) {
			state.weatherFiveDaysList = state.weatherDailyList.filter(
				item => item.dt_txt === 12
			);
		},
		showModeComponentChange(state, { payload }) {
			state.isShowMode = payload;
		},
	},
	extraReducers: {
		[fetchWeatherDaily.pending]: state => {
			state.isLoading = true;
			state.isError = false;
		},
		[fetchWeatherDaily.fulfilled]: (state, { payload }) => {
			state.isLoading = false;
			state.isError = false;
			state.weatherDaily = payload;
			state.weatherDailyList = payload.list;
		},
		[fetchWeatherDaily.rejected]: state => {
			state.isLoading = false;
			state.isError = true;
		},
	},
});

export const {
	foundItemWeatherDaily,
	getFiveDaysForecast,
	showModeComponentChange,
} = weatherDailySlice.actions;

export default weatherDailySlice.reducer;
