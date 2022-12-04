import { memo } from "react";

import moment from "moment";

import style from "./styles.module.scss";

const WeatherDailyData = ({ date, main, weather }) => {
  return (
    <div className={style.weatherDailyWrapper}>
      <p className={style.weatherDailyDate}>
        {moment(date).locale("ru").format("MMM Do h:mm a")}
      </p>
      <p className={style.weatherDailyTemp}>
        {Math.floor(main.temp)}
        {"\u00b0"}
      </p>
      {weather.map(({ id, description, icon }) => (
        <div key={id}>
          <img
            className={style.weatherDailyImg}
            src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
            alt="иконка погоды"
          />
          <p className={style.weatherDailyDescription}>{description}</p>
        </div>
      ))}
    </div>
  );
};

export default memo(WeatherDailyData);
