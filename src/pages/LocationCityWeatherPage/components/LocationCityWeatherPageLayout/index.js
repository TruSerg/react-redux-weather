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
	temp,
	weather,
	cityName,
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
								text={'Ошибка получения данных локации!'}
							/>
						) : (
							<h1 className={style.weatherTitle}>{cityName}</h1>
						)}

						{isError ? (
							<NoWeatherDataComponent text={'Данные погоды отсутствуют!'} />
						) : (
							<>
								<WeatherData temp={temp} weather={weather} />

								<div className={style.weatherBtn}>
									<ShowComponentButton
										text={
											showMode ? 'Прогноз на 4 дня' : 'Более детальный прогноз'
										}
										handleClick={handleShowModeComponent}
									/>
								</div>

								{showMode ? (
									<WeatherSlider weatherDailyList={weatherDailyList} />
								) : (
									<WeatherSlider weatherDailyList={fiveDaysWeatherList} />
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
						)}
					</>
				)}
			</Container>
		</div>
	);
};

export default LocationWeatherPageLayout;
