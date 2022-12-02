import { useDispatch, useSelector } from "react-redux";
import { useState, useCallback } from "react";

import { fetchWeatherData } from "../../../store/weatherDataSlice";

import WorldWeatherPageLayout from "../components/WorldWeatherPageLayout";

const WorldWeatherPageContainer = () => {
  const dispatch = useDispatch();

  const [inputCityNameValue, setInputCityNameValue] = useState("");
  const [isDataLoaded, setIsDataLoaded] = useState(true);

  const {
    cityName,
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

  const handleChange = useCallback((e) => {
    setInputCityNameValue(e.target.value);
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      if (inputCityNameValue.trim()) {
        dispatch(fetchWeatherData(inputCityNameValue.trim().toLowerCase()));

        setIsDataLoaded(false);
        setInputCityNameValue("");
      }
    },
    [inputCityNameValue]
  );

  return (
    <WorldWeatherPageLayout
      isDataLoaded={isDataLoaded}
      inputCityNameValue={inputCityNameValue}
      cityName={cityName}
      temp={temp}
      tempMin={tempMin}
      tempMax={tempMax}
      feelsLike={feelsLike}
      windSpeed={windSpeed}
      pressure={pressure}
      humidity={humidity}
      weather={weather}
      isLoading={isLoading}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default WorldWeatherPageContainer;
