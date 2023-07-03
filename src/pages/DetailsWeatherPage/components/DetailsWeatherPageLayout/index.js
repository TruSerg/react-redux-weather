import WeatherData from "../../../../components/WeatherData";
import DetailsWeatherData from "../../../../components/DetailsWeatherData";
import Container from "../../../../components/Container";
import BackButton from "../../../../components/Buttons/BackButton";

import style from "./styles.module.scss";

const DetailsWeatherPageLayout = ({
  cityName,
  temp,
  weather,
  tempMin,
  tempMax,
  feelsLike,
  windSpeed,
  windDirection,
  pressure,
  humidity,
}) => {
  return (
    <div>
      <Container>
        <div className={style.button}>
          <BackButton />
        </div>

        <WeatherData cityName={cityName} temp={temp} weather={weather} />

        <DetailsWeatherData
          tempMin={tempMin}
          tempMax={tempMax}
          feelsLike={feelsLike}
          windSpeed={windSpeed}
          windDirection={windDirection}
          pressure={pressure}
          humidity={humidity}
        />
      </Container>
    </div>
  );
};

export default DetailsWeatherPageLayout;
