import styles from './styles.module.scss';

const NoWeatherDataComponent = ({ text }) => {
	return <div className={styles.wrapper}>{text}</div>;
};

export default NoWeatherDataComponent;
