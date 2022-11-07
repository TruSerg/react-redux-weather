import { CircularProgress } from "@mui/material";

import style from "./styles.module.scss";

const Loader = () => {
  return (
    <div className={style.loader}>
      <CircularProgress color="info" size={45} />;
    </div>
  );
};

export default Loader;
