import axios from "axios";

import { API_KEY } from "../constants";

const baseURL = "https://api.openweathermap.org/data/2.5/";

const config = {
  baseURL,
};

const api = axios.create(config);

api.interceptors.request.use((config) => {
  config.url = config.url + "&lang=ru" + "&units=metric" + `&appid=${API_KEY}`;

  return config;
});

export default api;
