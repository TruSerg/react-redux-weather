import Container from "../../../../components/Container";
import Form from "../../../../components/Form";
import Loader from "../../../../components/Loader";
import WeatherData from "../../../../components/WeatherData";
import DetailsWeatherData from "../../../../components/DetailsWeatherData";
import WorldImage from "../../../../components/ImageWorldWeather";

import style from "./styles.module.scss";
import WeatherSlider from "../../../../components/WeatherSlider";

const WorldWeatherPageLayout = ({
  weatherDailyList,
  isDataLoaded,
  inputCityNameValue,
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
  handleChange,
  handleSubmit,
}) => {
  return (
    <div className={style.worldWeather}>
      <Container>
        <div className={style.worldWeatherWrapper}>
          <div className={style.worldWeatherInputArea}>
            <Form
              value={inputCityNameValue}
              onChange={handleChange}
              onSubmit={handleSubmit}
            />
          </div>

          {isDataLoaded ? (
            <WorldImage />
          ) : (
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

                  <WeatherSlider weatherDailyList={weatherDailyList} />

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
          )}
        </div>
      </Container>
    </div>
  );
};

export default WorldWeatherPageLayout;
