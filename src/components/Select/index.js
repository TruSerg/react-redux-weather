import { Box, InputLabel, FormControl, Select } from "@mui/material";

const BasicSelect = ({ value, name, label, onChange }) => {
  return (
    <Box sx={{ maxWidth: 300 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{value}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          name={name}
          value={value}
          label={label}
          onChange={onChange}
        />
      </FormControl>
    </Box>
  );
};

export default BasicSelect;
