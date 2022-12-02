import { useEffect, useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { fetchWeatherData } from "../../../store/weatherDataSlice";
import { fetchWeatherDaily } from "../../../store/weatherDailySlice";

import MainWeatherPageLayout from "../components/MainWeatherPageLayout";

import cities from "../../../belCities.json";

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
    pressure,
    humidity,
    weather,
    isLoading,
  } = useSelector((state) => state.weatherData);

  const handleSelectCityNameChange = useCallback((e) => {
    setSelectCityNameValue(e.target.value);
  }, []);

  useEffect(() => {
    dispatch(fetchWeatherData("Минск"));
  }, []);

  useEffect(() => {
    dispatch(fetchWeatherData(selectCityNameValue));
  }, [selectCityNameValue]);

  useEffect(() => {
    dispatch(fetchWeatherDaily([lat, lon]));
  }, [lat, lon]);

  return (
    <MainWeatherPageLayout
      selectCityNameValue={selectCityNameValue}
      cityName={cityName}
      temp={temp}
      tempMin={tempMin}
      tempMax={tempMax}
      feelsLike={feelsLike}
      windSpeed={windSpeed}
      pressure={pressure}
      humidity={humidity}
      weather={weather}
      handleSelectCityNameChange={handleSelectCityNameChange}
      cities={cities}
      isLoading={isLoading}
    />
  );
};

export default MainWeatherPageContainer;
