import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { getUserLocationWeather } from "../../../store/getUserLocationWeather";
import { fetchWeatherData } from "../../../store/weatherDataSlice";
import { fetchWeatherDaily } from "../../../store/weatherDailySlice";

import {
  useGetFiveDaysWeatherForecast,
  useShowModeComponent,
} from "../../../hooks";

import LocationCityWeatherPageLayout from "../components/LocationCityWeatherPageLayout";

const LocationCityWeatherPageContainer = () => {
  const dispatch = useDispatch();

  const {
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
  } = useSelector((state) => state.weatherData);

  const { weatherDailyList } = useSelector((state) => state.weatherDaily);

  const { isLoading, cityName } = useSelector((state) => state.getUserLocation);

  const { fiveDaysWeatherList } =
    useGetFiveDaysWeatherForecast(weatherDailyList);

  const { showMode, handleShowModeComponent } = useShowModeComponent();

  useEffect(() => {
    dispatch(getUserLocationWeather());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchWeatherData(cityName));
  }, [dispatch, cityName]);

  useEffect(() => {
    dispatch(fetchWeatherDaily([lat, lon]));
  }, [dispatch, lat, lon]);

  return (
    <LocationCityWeatherPageLayout
      showMode={showMode}
      isLoading={isLoading}
      weatherDailyList={weatherDailyList}
      fiveDaysWeatherList={fiveDaysWeatherList}
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
      handleShowModeComponent={handleShowModeComponent}
    />
  );
};

export default LocationCityWeatherPageContainer;
