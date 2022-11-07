import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { fetchWeatherData, setCityName } from "../../../store/weatherDataSlice";

import MainWeatherPageLayout from "../components/MainWeatherPageLayout";

import cities from "../../../belCities.json";

const MainWeatherPageContainer = () => {
  const dispatch = useDispatch();

  const { cityName, temp, weather, isLoading } = useSelector(
    (state) => state.weatherData
  );

  const handleSelectChange = (e) => {
    dispatch(setCityName(e.target.value));
  };

  useEffect(() => {
    dispatch(fetchWeatherData("Минск"));
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchWeatherData(cityName));
  }, [dispatch, cityName]);

  return (
    <MainWeatherPageLayout
      cityName={cityName}
      temp={temp}
      weather={weather}
      handleChange={handleSelectChange}
      cities={cities}
      isLoading={isLoading}
    />
  );
};

export default MainWeatherPageContainer;
