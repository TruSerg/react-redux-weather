import { Routes, Route, Navigate } from "react-router-dom";

import MainWeatherPageContainer from "../pages/MainWeatherPage/containers/MainWeatherPageContainer";
import DetailsWeatherPageContainer from "../pages/DetailsWeatherPage/containers/DetailsWeatherPageContainer";

import { ROUTES } from "./routeNames";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        exact
        path={ROUTES.MAIN_PAGE}
        element={<MainWeatherPageContainer />}
      />
      <Route
        path={ROUTES.DETAILS_PAGE}
        element={<DetailsWeatherPageContainer />}
      />

      <Route path="*" element={<Navigate to={ROUTES.MAIN_PAGE} />} />
    </Routes>
  );
};

export default AppRoutes;
