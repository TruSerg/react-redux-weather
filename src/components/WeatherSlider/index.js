import { memo } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";

import WeatherDailyData from "../WeatherDailyData";

import style from "./styles.module.scss";

const WeatherSlider = ({ weatherDailyList }) => {
  return (
    <div className={style.weatherSlider}>
      <Swiper
        className="mySwiper"
        freeMode={true}
        grabCursor={true}
        modules={[FreeMode]}
        breakpoints={{
          1336: {
            slidesPerView: 10,
          },
          1024: {
            slidesPerView: 8,
          },
          768: {
            slidesPerView: 6,
          },
          490: {
            slidesPerView: 4,
          },
          320: {
            slidesPerView: 2,
          },
        }}
      >
        {weatherDailyList.map(({ dt, dt_txt, main, weather, wind }) => (
          <SwiperSlide key={dt}>
            <WeatherDailyData
              date={dt_txt}
              main={main}
              weather={weather}
              wind={wind}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default memo(WeatherSlider);
