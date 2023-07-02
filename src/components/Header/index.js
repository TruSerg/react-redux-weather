import { Link } from "react-router-dom";
import { Button } from "@mui/material";

import { ROUTES } from "../../routes/routeNames";
import Container from "../Container";

import style from "./styles.module.scss";

import logo from "../../static/img/logo.png";

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
              <Button className={style.headerBtn}>Ваша локация</Button>
            </Link>
            <Link to={ROUTES.BELARUS_WEATHER_PAGE}>
              <Button className={style.headerBtn}>Погода в Беларуси</Button>
            </Link>
            <Link to={ROUTES.WORLD_WEATHER_PAGE}>
              <Button className={style.headerBtn}>Погода в мире</Button>
            </Link>
          </nav>
        </div>
      </Container>
    </div>
  );
};

export default Header;
