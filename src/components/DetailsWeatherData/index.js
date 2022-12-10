import { memo } from "react";

import style from "./styles.module.scss";

const DetailsWeatherData = ({
  tempMin,
  tempMax,
  feelsLike,
  windSpeed,
  pressure,
  humidity,
}) => {
  return (
    <div className={style.weatherDetails}>
      <div>
        <p className={style.weatherItem}>Мин</p>
        <span className={style.weatherDescr}>
          {Math.floor(tempMin)}
          {"\u00b0"}C
        </span>
      </div>
      <div>
        <p className={style.weatherItem}>Макс</p>
        <span className={style.weatherDescr}>
          {Math.floor(tempMax)}
          {"\u00b0"}C
        </span>
      </div>
      <div>
        <p className={style.weatherItem}>Ощущаеться</p>
        <span className={style.weatherDescr}>
          {Math.floor(feelsLike)}
          {"\u00b0"}C
        </span>
      </div>
      <div>
        <p className={style.weatherItem}>Скорость ветра</p>
        <span className={style.weatherDescr}>{Math.round(windSpeed)} км/ч</span>
      </div>
      <div>
        <p className={style.weatherItem}>Давление</p>
        <span className={style.weatherDescr}>{pressure}mbar</span>
      </div>
      <div>
        <p className={style.weatherItem}>Влажность</p>
        <span className={style.weatherDescr}>{humidity}%</span>
      </div>
    </div>
  );
};

export default memo(DetailsWeatherData);
