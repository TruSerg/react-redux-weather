import { Routes, Route, Navigate } from "react-router-dom";

import MainWeatherPageContainer from "../pages/MainWeatherPage/containers/MainWeatherPageContainer";
import WorldWeatherPageContainer from "../pages/WorldWeatherPage/containers/WorldWeatherPageContainer";
import DetailsWeatherPageContainer from "../pages/DetailsWeatherPage/containers/DetailsWeatherPageContainer";
import LocationCityWeatherPageContainer from "../pages/LocationCityWeatherPage/containers/LocationCityWeatherPageContainer";

import { ROUTES } from "./routeNames";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path={ROUTES.LOCATION_WEATHER_PAGE}
        element={<LocationCityWeatherPageContainer />}
      />
      <Route
        path={ROUTES.BELARUS_WEATHER_PAGE}
        element={<MainWeatherPageContainer />}
      />
      <Route
        path={ROUTES.WORLD_WEATHER_PAGE}
        element={<WorldWeatherPageContainer />}
      />
      <Route
        path={ROUTES.DETAILS_PAGE}
        element={<DetailsWeatherPageContainer />}
      />

      <Route
        path="*"
        element={<Navigate to={ROUTES.LOCATION_WEATHER_PAGE} />}
      />
    </Routes>
  );
};

export default AppRoutes;
