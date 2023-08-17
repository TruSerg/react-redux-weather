import { useSelector } from "react-redux";

import Header from "../Header";
import Footer from "../Footer";

import bg from "../../static/img/bg.jpg";
import bgSunny from "../../static/img/bg-sunny.jpg";
import bgClouds from "../../static/img/bg-clouds.jpg";
import bgRain from "../../static/img/bg-rain.jpg";
import bgThunderstorm from "../../static/img/bg-thunderstorm.jpg";
import bgFog from "../../static/img/bg-fog.jpg";
import bgSnow from "../../static/img/bg-snowy.jpg";

import style from "./styles.module.scss";

const MainLayout = ({ children }) => {
  const { currentWeather } = useSelector((state) => state.weatherData);

  return (
    <div
      className={style.mainWrapper}
      style={
        (currentWeather === "Clear" && {
          backgroundImage: `url(${bgSunny})`,
        }) ||
        (currentWeather === "Rain" && {
          backgroundImage: `url(${bgRain})`,
        }) ||
        (currentWeather === "Thunderstorm" && {
          backgroundImage: `url(${bgThunderstorm})`,
        }) ||
        (currentWeather === "Clouds" && {
          backgroundImage: `url(${bgClouds})`,
        }) ||
        (currentWeather === "Fog" && {
          backgroundImage: `url(${bgFog})`,
        }) ||
        (currentWeather === "Mist" && {
          backgroundImage: `url(${bgFog})`,
        }) ||
        (currentWeather === "Smoke" && {
          backgroundImage: `url(${bgFog})`,
        }) ||
        (currentWeather === "Snow" && {
          backgroundImage: `url(${bgSnow})`,
        }) || { backgroundImage: `url(${bg})` }
      }
    >
      <Header />

      {children}

      <Footer />
    </div>
  );
};

export default MainLayout;
