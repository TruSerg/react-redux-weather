import style from "./styles.module.scss";

const Footer = () => {
  return (
    <div className={style.footer}>
      <p className={style.footerItem}>
        Данные предоставлены{" "}
        <span className={style.footerText}>OpenWeather</span>
      </p>
    </div>
  );
};

export default Footer;
