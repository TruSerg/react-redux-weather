import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import api from '../http';

export const fetchWeatherData = createAsyncThunk(
	'weatherData/fetchWeatherData',
	async (cityName, { rejectWithValue }) => {
		try {
			const res = await api.get(`weather?q=${cityName}`);

			const data = res.data;

			return data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);

const weatherDataSlice = createSlice({
	name: 'weatherData',
	initialState: {
		weatherData: {},
		currentWeather: '',
		cityName: '',
		lon: '',
		lat: '',
		temp: '',
		tempMin: '',
		tempMax: '',
		feelsLike: '',
		windSpeed: '',
		windDirection: '',
		pressure: '',
		humidity: '',
		weather: [],
		isError: false,
		isLoading: false,
	},

	extraReducers: {
		[fetchWeatherData.pending]: state => {
			state.isLoading = true;
			state.isError = false;
		},
		[fetchWeatherData.fulfilled]: (state, { payload }) => {
			state.weatherData = payload;
			state.cityName = payload.name;
			state.currentWeather = payload.weather[0].main;
			state.lon = payload.coord.lon;
			state.lat = payload.coord.lat;
			state.temp = payload.main.temp;
			state.tempMin = payload.main.temp_min;
			state.tempMax = payload.main.temp_max;
			state.feelsLike = payload.main.feels_like;
			state.windSpeed = payload.wind.speed;
			state.windDirection = payload.wind.deg;
			state.pressure = payload.main.pressure;
			state.humidity = payload.main.humidity;
			state.weather = payload.weather;
			state.isLoading = false;
			state.isError = false;
		},
		[fetchWeatherData.rejected]: state => {
			state.isLoading = false;
			state.isError = true;
		},
	},
});

export default weatherDataSlice.reducer;
