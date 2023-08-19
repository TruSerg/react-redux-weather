import { Link } from "react-router-dom";
import { LocationOn, Public, FlagCircle } from "@mui/icons-material";

import { ROUTES } from "../../routes/routeNames";

import Container from "../Container";

import logo from "../../static/img/logo.png";

import style from "./styles.module.scss";

const Header = () => {
  return (
    <div className={style.header}>
      <Container>
        <div className={style.headerWrapper}>
          <a
            className={style.headerLogo}
            target="_blank"
            rel="noreferrer"
            href="https://openweathermap.org"
          >
            <img src={logo} alt="logo" />
            <p>OpenWeather</p>
          </a>

          <nav className={style.headerNavigation}>
            <Link to={ROUTES.LOCATION_WEATHER_PAGE}>
              <button className={style.headerBtn}>
                <LocationOn className={style.headerIcon} fontSize="inherit" />
                <p className={style.headerText}>Ваша локация</p>
              </button>
            </Link>
            <Link to={ROUTES.BELARUS_WEATHER_PAGE}>
              <button className={style.headerBtn}>
                <FlagCircle className={style.headerIcon} fontSize="inherit" />
                <p className={style.headerText}>Погода в Беларуси</p>
              </button>
            </Link>
            <Link to={ROUTES.WORLD_WEATHER_PAGE}>
              <button className={style.headerBtn}>
                <Public className={style.headerIcon} fontSize="inherit" />
                <p className={style.headerText}>Погода в мире</p>
              </button>
            </Link>
          </nav>
        </div>
      </Container>
    </div>
  );
};

export default Header;
