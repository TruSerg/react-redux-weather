import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { memo } from 'react';

import { foundItemWeatherDaily } from '../../store/weatherDailySlice';

import { ROUTES } from '../../routes/routeNames';

import WindNavigation from '../WindNavigation';
import DateComponent from '../DateComponent';

import style from './styles.module.scss';

const WeatherDailyData = ({ dt, date, main, weather, wind }) => {
	const dispatch = useDispatch();
	const { isShowMode } = useSelector(state => state.weatherDaily);

	return (
		<div className={style.weatherDailyWrapper}>
			<Link
				className={style.btn}
				onClick={() => dispatch(foundItemWeatherDaily(dt))}
				to={ROUTES.DETAILS_PAGE}
			>
				Подробнее
			</Link>

			<div div className={style.weatherDailyContent}>
				<DateComponent date={date} dateFormat={'dddd'} />
				<DateComponent
					date={date}
					dateFormat={isShowMode ? 'D/MM' : 'D/MM HH:mm'}
				/>
			</div>

			<div className={style.weatherDailyDetails}>
				<p className={style.weatherDailyTemp}>
					{Math.round(main.temp)}
					{'\u00b0'}
				</p>
				{weather.map(({ id, description, icon }) => (
					<div className={style.weatherDailyContent} key={id}>
						<img
							className={style.weatherDailyImg}
							src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
							alt='иконка погоды'
						/>
						<p className={style.weatherDailyDescription}>{description}</p>
					</div>
				))}
				<div className={style.weatherDailyWindNavigation}>
					<WindNavigation deg={wind.deg} />

					<p className={style.weatherDailyWind}>{Math.round(wind.speed)} м/с</p>
				</div>
			</div>
		</div>
	);
};

export default memo(WeatherDailyData);
