import { memo } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";

import WeatherDailyData from "../WeatherDailyData";

const WeatherSlider = ({ weatherDailyList }) => {
  return (
    <div>
      <Swiper
        className="mySwiper"
        freeMode={true}
        grabCursor={true}
        modules={[FreeMode]}
        spaceBetween={10}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          490: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
          1336: {
            slidesPerView: 5,
          },
        }}
      >
        {weatherDailyList.map(({ dt, dt_txt, main, weather }) => (
          <SwiperSlide key={dt}>
            <WeatherDailyData date={dt_txt} main={main} weather={weather} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default memo(WeatherSlider);
