import { memo } from 'react';

import WindNavigation from '../WindNavigation';

import style from './styles.module.scss';

const DetailsWeatherData = ({
	tempMin,
	tempMax,
	feelsLike,
	windSpeed,
	windDirection,
	pressure,
	humidity,
}) => {
	return (
		<div className={style.weatherDetailsArea}>
			<div className={style.weatherDetails}>
				<div>
					<p className={style.weatherItem}>Мин</p>
					<span className={style.weatherDescr}>
						{Math.floor(tempMin)}
						{'\u00b0'}C
					</span>
				</div>
				<div>
					<p className={style.weatherItem}>Макс</p>
					<span className={style.weatherDescr}>
						{Math.ceil(tempMax)}
						{'\u00b0'}C
					</span>
				</div>
				<div>
					<p className={style.weatherItem}>Ощущается</p>
					<span className={style.weatherDescr}>
						{Math.round(feelsLike)}
						{'\u00b0'}C
					</span>
				</div>
				<div>
					<p className={style.weatherItem}>Скорость ветра</p>
					<div className={style.weatherWind}>
						<WindNavigation deg={windDirection} />
						<span className={style.weatherDescr}>
							{Math.round(windSpeed)} м/с
						</span>
					</div>
				</div>
				<div>
					<p className={style.weatherItem}>Давление</p>
					<span className={style.weatherDescr}>{pressure}mbar</span>
				</div>
				<div>
					<p className={style.weatherItem}>Влажность</p>
					<span className={style.weatherDescr}>{humidity}%</span>
				</div>
			</div>
		</div>
	);
};

export default memo(DetailsWeatherData);
