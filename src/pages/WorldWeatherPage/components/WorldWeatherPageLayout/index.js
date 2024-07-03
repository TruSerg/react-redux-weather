import Container from '../../../../components/Container';
import Form from '../../../../components/Form';
import Loader from '../../../../components/Loader';
import WeatherData from '../../../../components/WeatherData';
import DetailsWeatherData from '../../../../components/DetailsWeatherData';
import WorldImage from '../../../../components/ImageWorldWeather';
import WeatherSlider from '../../../../components/WeatherSlider';
import ShowComponentButton from '../../../../components/Buttons/ShowComponentButton';
import NoWeatherDataComponent from '../../../../components/NoWeatherDataComponent';

import style from './styles.module.scss';

const WorldWeatherPageLayout = ({
	showMode,
	isLoading,
	isError,
	isDataLoaded,
	weatherDailyList,
	fiveDaysWeatherList,
	inputCityNameValue,
	cityName,
	temp,
	tempMin,
	tempMax,
	feelsLike,
	windSpeed,
	windDirection,
	pressure,
	humidity,
	weather,
	error,
	handleChange,
	handleSubmit,
	handleShowModeComponent,
}) => {
	return (
		<div className={style.worldWeather}>
			<Container>
				<div className={style.worldWeatherWrapper}>
					<div className={style.worldWeatherInputArea}>
						<Form
							value={inputCityNameValue}
							onChange={handleChange}
							onSubmit={handleSubmit}
						/>
					</div>

					{isDataLoaded ? (
						<WorldImage />
					) : (
						<>
							{isLoading ? (
								<Loader />
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
														<WeatherSlider
															weatherDailyList={weatherDailyList}
														/>
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
												<NoWeatherDataComponent text='Данные погоды отсутствуют!' />
											)}
										</>
									)}
								</>
							)}
						</>
					)}
				</div>
			</Container>
		</div>
	);
};

export default WorldWeatherPageLayout;
