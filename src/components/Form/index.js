import { memo } from "react";
import { OutlinedInput, Button } from "@mui/material";
import { SearchOutlined } from "@mui/icons-material";

import style from "./styles.module.scss";

const Form = ({ value, onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} id="myForm" className={style.form}>
      <OutlinedInput
        className={style.input}
        type="text"
        name="text"
        color="primary"
        fullWidth
        placeholder="Введите название города..."
        value={value}
        onChange={onChange}
      />
      <Button
        className={style.btn}
        type="submit"
        onClick={onSubmit}
        variant="outlined"
      >
        <SearchOutlined fontSize="large" />
      </Button>
    </form>
  );
};

export default memo(Form);
