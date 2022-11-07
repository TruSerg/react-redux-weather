import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

import Container from "../../../../components/Container";
import WeatherData from "../../../../components/WeatherData";
import Loader from "../../../../components/Loader";

import style from "./styles.module.scss";

const MainWeatherPageLayout = ({
  cityName,
  temp,
  weather,
  cities,
  handleChange,
  isLoading,
}) => {
  return (
    <div className={style.weather}>
      <Container>
        <div className={style.weatherWrapper}>
          <div className={style.weatherSelectArea}>
            <FormControl fullWidth className={style.formControl}>
              <Select
                className={style.select}
                id="demo-simple-select"
                value={cityName}
                onChange={handleChange}
              >
                {cities.map(({ id, name }) => {
                  return (
                    <MenuItem className={style.item} key={id} value={name}>
                      {name}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </div>
        </div>
        <>
          {isLoading ? (
            <Loader />
          ) : (
            <>
              <h1 className={style.weatherTitle}>{cityName}</h1>

              <WeatherData temp={temp} weather={weather} />
            </>
          )}
        </>
      </Container>
    </div>
  );
};

export default MainWeatherPageLayout;
