import { MenuItem } from "@mui/material";

const SelectItem = ({ name }) => {
  return <MenuItem value={name}>{name}</MenuItem>;
};

export default SelectItem;
