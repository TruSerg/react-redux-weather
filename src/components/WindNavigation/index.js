import { NavigationSharp } from "@mui/icons-material";

const WindNavigation = ({ deg }) => {
  return (
    <p style={{ transform: `rotate(${deg}deg)` }}>
      <NavigationSharp fontSize="small" />
    </p>
  );
};

export default WindNavigation;
