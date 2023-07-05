import { useDispatch, useSelector } from "react-redux";
import { useState, useCallback, useEffect } from "react";

import { fetchWeatherData } from "../../../store/weatherDataSlice";
import { fetchWeatherDaily } from "../../../store/weatherDailySlice";

import {
  useGetFiveDaysWeatherForecast,
  useShowModeComponent,
} from "../../../hooks";

import WorldWeatherPageLayout from "../components/WorldWeatherPageLayout";

const WorldWeatherPageContainer = () => {
  const dispatch = useDispatch();

  const [inputCityNameValue, setInputCityNameValue] = useState("");
  const [isDataLoaded, setIsDataLoaded] = useState(true);

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

  const handleChange = useCallback((e) => {
    setInputCityNameValue(e.target.value);
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      if (inputCityNameValue) {
        dispatch(fetchWeatherData(inputCityNameValue.toLowerCase().trim()));

        console.log(inputCityNameValue);

        setIsDataLoaded(false);
        setInputCityNameValue("");
      }
    },
    [inputCityNameValue]
  );

  useEffect(() => {
    dispatch(fetchWeatherDaily([lat, lon]));
  }, [lat, lon]);

  return (
    <WorldWeatherPageLayout
      showMode={showMode}
      isLoading={isLoading}
      isDataLoaded={isDataLoaded}
      weatherDailyList={weatherDailyList}
      fiveDaysWeatherList={fiveDaysWeatherList}
      inputCityNameValue={inputCityNameValue}
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
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      handleShowModeComponent={handleShowModeComponent}
    />
  );
};

export default WorldWeatherPageContainer;
