import { useEffect, useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { fetchWeatherData } from "../../../store/weatherDataSlice";
import { fetchWeatherDaily } from "../../../store/weatherDailySlice";

import {
  useGetFiveDaysWeatherForecast,
  useShowModeComponent,
} from "../../../hooks";

import MainWeatherPageLayout from "../components/MainWeatherPageLayout";

import cities from "../../../belCitiesList.json";

const MainWeatherPageContainer = () => {
  const dispatch = useDispatch();

  const [selectCityNameValue, setSelectCityNameValue] = useState("");

  const {
    cityName,
    lon,
    lat,
    temp,
    tempMin,
    tempMax,
    feelsLike,
    windSpeed,
    windDirection,
    pressure,
    humidity,
    weather,
    isLoading,
  } = useSelector((state) => state.weatherData);

  const { weatherDailyList } = useSelector((state) => state.weatherDaily);

  const { fiveDaysWeatherList } =
    useGetFiveDaysWeatherForecast(weatherDailyList);

  const { showMode, handleShowModeComponent } = useShowModeComponent();

  const handleSelectCityNameChange = useCallback((e) => {
    setSelectCityNameValue(e.target.value);
  }, []);

  useEffect(() => {
    dispatch(fetchWeatherData("Минск"));
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchWeatherData(selectCityNameValue));
  }, [dispatch, selectCityNameValue]);

  useEffect(() => {
    dispatch(fetchWeatherDaily([lat, lon]));
  }, [dispatch, lat, lon]);

  return (
    <MainWeatherPageLayout
      isLoading={isLoading}
      showMode={showMode}
      weatherDailyList={weatherDailyList}
      fiveDaysWeatherList={fiveDaysWeatherList}
      selectCityNameValue={selectCityNameValue}
      cityName={cityName}
      temp={temp}
      tempMin={tempMin}
      tempMax={tempMax}
      feelsLike={feelsLike}
      windSpeed={windSpeed}
      windDirection={windDirection}
      pressure={pressure}
      humidity={humidity}
      weather={weather}
      handleSelectCityNameChange={handleSelectCityNameChange}
      handleShowModeComponent={handleShowModeComponent}
      cities={cities}
    />
  );
};

export default MainWeatherPageContainer;
