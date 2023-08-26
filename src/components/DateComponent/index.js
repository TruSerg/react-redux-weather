import moment from 'moment';
import 'moment/locale/ru';

import style from './styles.module.scss';

const DateComponent = ({ date, dateFormat }) => {
	return (
		<p className={style.weatherDailyDate}>
			{moment(date).locale('ru').format(dateFormat)}
		</p>
	);
};

export default DateComponent;
