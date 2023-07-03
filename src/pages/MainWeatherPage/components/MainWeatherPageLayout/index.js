import Container from "../../../../components/Container";
import WeatherData from "../../../../components/WeatherData";
import Loader from "../../../../components/Loader";
import Select from "../../../../components/Select";
import DetailsWeatherData from "../../../../components/DetailsWeatherData";
import WeatherSlider from "../../../../components/WeatherSlider";
import ShowComponentButton from "../../../../components/Buttons/ShowComponentButton";

import style from "./styles.module.scss";

const MainWeatherPageLayout = ({
  isLoading,
  showMode,
  weatherDailyList,
  fiveDaysWeatherList,
  selectCityNameValue,
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
  cities,
  handleSelectCityNameChange,
  handleShowModeComponent,
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

                <div className={style.weatherBtn}>
                  <ShowComponentButton
                    text={
                      showMode ? "Прогноз на 5 дней" : "Более детальный прогноз"
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
        </div>
      </Container>
    </div>
  );
};

export default MainWeatherPageLayout;
