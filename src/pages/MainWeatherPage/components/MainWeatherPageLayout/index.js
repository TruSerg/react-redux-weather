import Container from "../../../../components/Container";
import WeatherData from "../../../../components/WeatherData";
import Loader from "../../../../components/Loader";
import Select from "../../../../components/Select";
import DetailsWeatherData from "../../../../components/DetailsWeatherData";

import style from "./styles.module.scss";
import ImageWorldWeather from "../../../../components/ImageWorldWeather";
import WeatherDailyData from "../../../../components/WeatherDailyData";
import WeatherSlider from "../../../../components/WeatherSlider";

const MainWeatherPageLayout = ({
  weatherDailyList,
  selectCityNameValue,
  cityName,
  temp,
  tempMin,
  tempMax,
  feelsLike,
  windSpeed,
  pressure,
  humidity,
  weather,
  cities,
  handleSelectCityNameChange,
  isLoading,
}) => {
  return (
    <div className={style.weather}>
      <Container>
        <div className={style.weatherWrapper}>
          <div className={style.weatherSelectArea}>
            <div className={style.weatherSelect}>
              <Select
                value={selectCityNameValue}
                label={cityName}
                array={cities}
                onChange={handleSelectCityNameChange}
              />
            </div>
          </div>

          <>
            {isLoading ? (
              <Loader />
            ) : (
              <>
                <WeatherData
                  temp={temp}
                  weather={weather}
                  cityName={cityName}
                />

                <div className={style.weatherDaily}>
                  <WeatherSlider weatherDailyList={weatherDailyList} />
                </div>

                <DetailsWeatherData
                  tempMin={tempMin}
                  tempMax={tempMax}
                  feelsLike={feelsLike}
                  windSpeed={windSpeed}
                  pressure={pressure}
                  humidity={humidity}
                />
              </>
            )}
          </>
        </div>
      </Container>
    </div>
  );
};

export default MainWeatherPageLayout;
