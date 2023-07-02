import { East } from "@mui/icons-material";

import style from "./styles.module.scss";

const ShowComponentButton = ({ text, handleClick }) => {
  return (
    <button className={style.btn} onClick={handleClick}>
      {text} <East />
    </button>
  );
};

export default ShowComponentButton;
