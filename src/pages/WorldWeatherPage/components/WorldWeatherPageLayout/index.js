import Container from "../../../../components/Container";
import Form from "../../../../components/Form";
import Loader from "../../../../components/Loader";
import WeatherData from "../../../../components/WeatherData";
import DetailsWeatherData from "../../../../components/DetailsWeatherData";
import WorldImage from "../../../../components/ImageWorldWeather";
import WeatherSlider from "../../../../components/WeatherSlider";
import ShowComponentButton from "../../../../components/Buttons/ShowComponentButton";

import style from "./styles.module.scss";

const WorldWeatherPageLayout = ({
  showMode,
  isLoading,
  isDataLoaded,
  weatherDailyList,
  fiveDaysWeatherList,
  inputCityNameValue,
  cityName,
  temp,
  tempMin,
  tempMax,
  feelsLike,
  windSpeed,
  windDirection,
  pressure,
  humidity,
  weather,
  handleChange,
  handleSubmit,
  handleShowModeComponent,
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

                  <div className={style.weatherBtn}>
                    <ShowComponentButton
                      text={
                        showMode
                          ? "Прогноз на 4 дня"
                          : "Более детальный прогноз"
                      }
                      handleClick={handleShowModeComponent}
                    />
                  </div>

                  {showMode ? (
                    <WeatherSlider weatherDailyList={weatherDailyList} />
                  ) : (
                    <WeatherSlider weatherDailyList={fiveDaysWeatherList} />
                  )}

                  <DetailsWeatherData
                    tempMin={tempMin}
                    tempMax={tempMax}
                    feelsLike={feelsLike}
                    windSpeed={windSpeed}
                    windDirection={windDirection}
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
