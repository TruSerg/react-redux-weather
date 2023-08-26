import Container from '../../../../components/Container';
import Loader from '../../../../components/Loader';
import WeatherData from '../../../../components/WeatherData';
import WeatherSlider from '../../../../components/WeatherSlider';
import DetailsWeatherData from '../../../../components/DetailsWeatherData';
import ShowComponentButton from '../../../../components/Buttons/ShowComponentButton';

import style from './styles.module.scss';

const LocationWeatherPageLayout = ({
	showMode,
	isLoading,
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
				{isLoading ? (
					<Loader />
				) : (
					<>
						<WeatherData temp={temp} weather={weather} cityName={cityName} />

						<div className={style.weatherBtn}>
							<ShowComponentButton
								text={showMode ? 'Прогноз на 4 дня' : 'Более детальный прогноз'}
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
			</Container>
		</div>
	);
};

export default LocationWeatherPageLayout;
