import WorldImage from "../../static/img/world.png";

import style from "./styles.module.scss";

const ImageWorldWeather = () => {
  return (
    <div className={style.image}>
      <img
        className={style.img}
        src={WorldImage}
        alt="изображение планеты земля"
      />
    </div>
  );
};

export default ImageWorldWeather;
