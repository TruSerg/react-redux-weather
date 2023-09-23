import { memo } from 'react';

import style from './styles.module.scss';

const WeatherDataLayout = ({ temp, weather, cityName }) => {
	console.log(weather);

	return (
		<div className={style.weatherDescrArea}>
			<h1 className={style.weatherTitle}>{cityName}</h1>
			<p className={style.weatherDeg}>
				{Math.round(temp)}
				{'\u00b0'}
			</p>

			{weather.map(({ id, description, icon }) => {
				return (
					<div className={style.weatherDescr} key={id}>
						<img
							className={style.weatherImg}
							src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
							alt='иконка погоды'
						/>
						<p>{description}</p>
					</div>
				);
			})}
		</div>
	);
};

export default memo(WeatherDataLayout);
