import { useNavigate } from "react-router-dom";
import { KeyboardBackspace } from "@mui/icons-material";

import style from "./styles.module.scss";

const BackButton = () => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return (
    <button className={style.btn} onClick={goBack}>
      <KeyboardBackspace />
      Назад
    </button>
  );
};

export default BackButton;
