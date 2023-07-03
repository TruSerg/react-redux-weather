const useGetFiveDaysWeatherForecast = (weatherList) => {
  const fiveDaysWeatherList = weatherList.filter(
    (item) =>
      new Date(item.dt_txt).getHours() === 12 &&
      new Date(item.dt_txt).getDate() > new Date().getDate() &&
      new Date(item.dt_txt).getDate() < new Date().getDate() + 7
  );

  return { fiveDaysWeatherList };
};

export default useGetFiveDaysWeatherForecast;
