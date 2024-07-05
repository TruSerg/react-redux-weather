import styles from './styles.module.scss';

import sadSun from '../../static/img/sad-sun.jpg';

const NoWeatherDataComponent = ({ text }) => {
	return (
		<div className={styles.wrapper}>
			<img className={styles.wrapperImg} src={sadSun} alt='грустное солнце' />
			<p className={styles.wrapperText}>{text}</p>
		</div>
	);
};

export default NoWeatherDataComponent;
