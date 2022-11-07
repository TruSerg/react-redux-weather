import style from "./styles.module.scss";
import Container from "../Container";
import { Button } from "@mui/material";

import logo from "../../static/img/logo.png";

const Header = () => {
  return (
    <div className={style.header}>
      <Container>
        <div className={style.headerWrapper}>
          <div className={style.headerLogo}>
            <img src={logo} alt="logo" />
            <p>OPEN WEATHER</p>
          </div>
          <div className={style.headerNavigation}>
            <Button className={style.headerBtn}>Погода в Беларуси</Button>
            <Button className={style.headerBtn}>Погода в мире</Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
