import style from "./styles.module.scss";

const WeatherDataLayout = ({ temp, weather }) => {
  return (
    <div className={style.weatherDescrArea}>
      <p className={style.weatherDeg}>
        {Math.floor(temp)}
        {"\u00b0"}
      </p>

      {weather.map(({ id, description }) => {
        return (
          <div className={style.weatherDescr} key={id}>
            <p>{description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default WeatherDataLayout;
