import { useSelector } from "react-redux";
import moment from "moment";

import DetailsWeatherPageLayout from "../components/DetailsWeatherPageLayout";

const DetailsWeatherPageContainer = () => {
  const { weatherDailyDetailsItem } = useSelector(
    (state) => state.weatherDaily
  );

  return (
    <DetailsWeatherPageLayout
      cityName={moment(weatherDailyDetailsItem.dt_txt)
        .locale("ru")
        .format("D MMMM HH:mm")}
      temp={weatherDailyDetailsItem.main.temp}
      weather={weatherDailyDetailsItem.weather}
      tempMin={weatherDailyDetailsItem.main.temp_min}
      tempMax={weatherDailyDetailsItem.main.temp_max}
      feelsLike={weatherDailyDetailsItem.main.feels_like}
      windSpeed={weatherDailyDetailsItem.wind.speed}
      windDirection={weatherDailyDetailsItem.wind.deg}
      pressure={weatherDailyDetailsItem.main.pressure}
      humidity={weatherDailyDetailsItem.main.humidity}
    />
  );
};

export default DetailsWeatherPageContainer;
