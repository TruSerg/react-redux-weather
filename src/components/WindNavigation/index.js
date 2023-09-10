import { NavigationSharp } from '@mui/icons-material';

import style from './styles.module.scss';

const WindNavigation = ({ deg }) => {
	return (
		<p style={{ transform: `rotate(${deg + 180}deg)` }}>
			<NavigationSharp className={style.windArrow} fontSize='inherit' />
		</p>
	);
};

export default WindNavigation;
