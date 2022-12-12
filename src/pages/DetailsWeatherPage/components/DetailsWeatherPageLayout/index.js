import { Button } from "@mui/material";
import { KeyboardBackspace } from "@mui/icons-material";

import WeatherData from "../../../../components/WeatherData";
import DetailsWeatherData from "../../../../components/DetailsWeatherData";
import Container from "../../../../components/Container";

import style from "./styles.module.scss";

const DetailsWeatherPageLayout = ({
  goBack,
  cityName,
  temp,
  weather,
  tempMin,
  tempMax,
  feelsLike,
  windSpeed,
  pressure,
  humidity,
}) => {
  return (
    <div>
      <Container>
        <div className={style.button}>
          <Button
            className={style.btn}
            size="large"
            color="inherit"
            onClick={goBack}
          >
            <KeyboardBackspace />
            Назад
          </Button>
        </div>

        <WeatherData cityName={cityName} temp={temp} weather={weather} />

        <DetailsWeatherData
          tempMin={tempMin}
          tempMax={tempMax}
          feelsLike={feelsLike}
          windSpeed={windSpeed}
          pressure={pressure}
          humidity={humidity}
        />
      </Container>
    </div>
  );
};

export default DetailsWeatherPageLayout;
