import { memo } from "react";
import { Button, Input } from "@mui/material";
import { SearchOutlined } from "@mui/icons-material";

import style from "./styles.module.scss";

const Form = ({ value, onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} id="myForm" className={style.form}>
      <Input
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
        variant="filled"
      >
        <SearchOutlined fontSize="inherit" />
      </Button>
    </form>
  );
};

export default memo(Form);
