import { NavigationSharp } from "@mui/icons-material";

const WindNavigation = ({ deg }) => {
  return (
    <p style={{ transform: `rotate(${deg + 180}deg)` }}>
      <NavigationSharp fontSize="small" />
    </p>
  );
};

export default WindNavigation;
