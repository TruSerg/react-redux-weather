import { Routes, Route, Navigate } from "react-router-dom";

import MainWeatherPageContainer from "../pages/MainWeatherPage/containers/MainWeatherPageContainer";
import WorldWeatherPageContainer from "../pages/WorldWeatherPage/containers/WorldWeatherPageContainer";

import { ROUTES } from "./routeNames";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        exact
        path={ROUTES.MAIN_PAGE}
        element={<MainWeatherPageContainer />}
      />
      <Route path={ROUTES.WORLD_PAGE} element={<WorldWeatherPageContainer />} />

      <Route path="*" element={<Navigate to={ROUTES.MAIN_PAGE} />} />
    </Routes>
  );
};

export default AppRoutes;
