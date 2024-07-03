import Container from '../../../../components/Container';
import Loader from '../../../../components/Loader';
import WeatherData from '../../../../components/WeatherData';
import WeatherSlider from '../../../../components/WeatherSlider';
import DetailsWeatherData from '../../../../components/DetailsWeatherData';
import ShowComponentButton from '../../../../components/Buttons/ShowComponentButton';
import NoWeatherDataComponent from '../../../../components/NoWeatherDataComponent';

import style from './styles.module.scss';

const LocationWeatherPageLayout = ({
	showMode,
	isLocationLoading,
	isLocationError,
	isError,
	error,
	temp,
	weather,
	cityName,
	errorLocation,
	weatherDailyList,
	fiveDaysWeatherList,
	tempMin,
	tempMax,
	feelsLike,
	windSpeed,
	windDirection,
	pressure,
	humidity,
	handleShowModeComponent,
}) => {
	return (
		<div className={style.weather}>
			<Container>
				{isLocationLoading ? (
					<Loader />
				) : (
					<>
						{isLocationError ? (
							<NoWeatherDataComponent
								text={`Ошибка получения данных ${errorLocation}!`}
							/>
						) : (
							<>
								{isError ? (
									<NoWeatherDataComponent
										text={`Ошибка получения данных погоды ${error}!`}
									/>
								) : (
									<>
										{cityName !== '' ? (
											<>
												<WeatherData
													temp={temp}
													weather={weather}
													cityName={cityName}
												/>

												<div className={style.weatherBtn}>
													<ShowComponentButton
														text={
															showMode
																? 'Прогноз на 4 дня'
																: 'Более детальный прогноз'
														}
														handleClick={handleShowModeComponent}
													/>
												</div>

												{showMode ? (
													<WeatherSlider weatherDailyList={weatherDailyList} />
												) : (
													<WeatherSlider
														weatherDailyList={fiveDaysWeatherList}
													/>
												)}

												<DetailsWeatherData
													tempMin={tempMin}
													tempMax={tempMax}
													feelsLike={feelsLike}
													windSpeed={windSpeed}
													windDirection={windDirection}
													pressure={pressure}
													humidity={humidity}
												/>
											</>
										) : (
											<NoWeatherDataComponent
												text={'Данные о погоде в вашем регионе отсутствуют!'}
											/>
										)}
									</>
								)}
							</>
						)}
					</>
				)}
			</Container>
		</div>
	);
};

export default LocationWeatherPageLayout;
