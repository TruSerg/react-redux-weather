import { memo } from "react";

import moment from "moment";
import ru from "moment/locale/ru";

import style from "./styles.module.scss";

const WeatherDailyData = ({ date, main, weather, wind }) => {
  return (
    <div className={style.weatherDailyWrapper}>
      <p className={style.weatherDailyDate}>
        {moment(date).locale("ru").format("D MMMM  HH:mm")}
      </p>
      <div className={style.weatherDailyDetails}>
        <p className={style.weatherDailyTemp}>
          {Math.floor(main.temp)}
          {"\u00b0"}
        </p>
        {weather.map(({ id, description, icon }) => (
          <div className={style.weatherDailyContent} key={id}>
            <img
              className={style.weatherDailyImg}
              src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
              alt="иконка погоды"
            />
            <p className={style.weatherDailyDescription}>{description}</p>
          </div>
        ))}
        <p>{Math.round(wind.speed)} км/ч</p>
      </div>
    </div>
  );
};

export default memo(WeatherDailyData);
