import { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';

import Header from '../Header';
import Footer from '../Footer';

import bg from '../../static/img/bg.jpg';
import bgSunny from '../../static/img/bg-sunny.jpg';
import bgClouds from '../../static/img/bg-clouds.jpg';
import bgRain from '../../static/img/bg-rain.jpg';
import bgThunderstorm from '../../static/img/bg-thunderstorm.jpg';
import bgFog from '../../static/img/bg-fog.jpg';
import bgSnow from '../../static/img/bg-snow.jpg';
import bgDust from '../../static/img/bg-dust.jpg';
import bgAsh from '../../static/img/bg-ash.jpg';
import bgSquall from '../../static/img/bg-squall.jpg';
import bgTornado from '../../static/img/bg-tornado.jpg';

import style from './styles.module.scss';

const MainLayout = ({ children }) => {
	const [weatherBG, setWeatherBG] = useState(bg);

	const { currentWeather } = useSelector(state => state.weatherData);

	const bgOfCurrentWeather = {
		Clear: bgSunny,
		Rain: bgRain,
		Thunderstorm: bgThunderstorm,
		Clouds: bgClouds,
		Fog: bgFog,
		Mist: bgFog,
		Smoke: bgFog,
		Snow: bgSnow,
		Haze: bgFog,
		Drizzle: bgRain,
		Dust: bgDust,
		Sand: bgDust,
		Ash: bgAsh,
		Squall: bgSquall,
		Tornado: bgTornado,
	};

	useMemo(() => {
		for (const weather in bgOfCurrentWeather) {
			if (weather === currentWeather) {
				setWeatherBG(bgOfCurrentWeather[weather]);
			}
		}
	}, [currentWeather]);

	return (
		<div
			className={style.mainWrapper}
			style={{ backgroundImage: `url(${weatherBG})` }}
		>
			<Header />

			{children}

			<Footer />
		</div>
	);
};

export default MainLayout;
