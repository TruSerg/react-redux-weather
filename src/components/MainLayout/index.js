import Header from "../Header";
import Footer from "../Footer";

// import bg from "../../static/img/bg.jpg";
// import bgSunny from "../../static/img/bg-sunny.jpg";
// import bgRain from "../../static/img/bg-rain.jpg";
// import bgThunderstorm from "../../static/img/bg-thunderstorm.jpg";

import style from "./styles.module.scss";

const MainLayout = ({ children }) => {
  // const { weather } = useSelector((state) => state.weatherData);

  return (
    <>
      {/*{weather.map(({ id, main }) => {*/}
      {/*  return (*/}
      <div
        // key={id}
        className={style.mainWrapper}
        // style={
        //   (main === "Clear" && { backgroundImage: `url(${bgSunny})` }) ||
        //   (main === "Rain" && { backgroundImage: `url(${bgRain})` }) ||
        //   (main === "Thunderstorm" && {
        //     backgroundImage: `url(${bgThunderstorm})`,
        //   }) ||
        //   (main === "Clouds" && {
        //     backgroundImage: `url(${bg})`,
        //   }) || { backgroundImage: `url(${bg})` }
        // }
      >
        <Header />

        {children}

        <Footer />
      </div>
      {/*  );*/}
      {/*})}*/}
    </>
  );
};

export default MainLayout;
