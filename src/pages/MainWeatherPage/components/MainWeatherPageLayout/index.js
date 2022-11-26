import Container from "../../../../components/Container";
import WeatherData from "../../../../components/WeatherData";
import Loader from "../../../../components/Loader";
import Select from "../../../../components/Select";
import DetailsWeatherData from "../../../../components/DetailsWeatherData";

import style from "./styles.module.scss";

const MainWeatherPageLayout = ({
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
              <WeatherData temp={temp} weather={weather} cityName={cityName} />

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
      </Container>
    </div>
  );
};

export default MainWeatherPageLayout;
