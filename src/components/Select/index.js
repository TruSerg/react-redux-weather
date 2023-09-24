import { memo } from 'react';
import { Select, Option, selectClasses } from '@mui/joy';

import style from './styles.module.scss';
import { KeyboardArrowDown } from '@mui/icons-material';

const BasicSelect = ({ value, onChange, array }) => {
	return (
		<Select
			className={style.select}
			placeholder='Выберите город...'
			indicator={<KeyboardArrowDown />}
			sx={{
				[`& .${selectClasses.indicator}`]: {
					transition: '0.3s',
					[`&.${selectClasses.expanded}`]: {
						transform: 'rotate(-180deg)',
					},
				},
			}}
			value={value}
			onChange={onChange}
		>
			{array.map(({ id, name }) => {
				return (
					<Option key={id} value={name}>
						{name}
					</Option>
				);
			})}
		</Select>
	);
};

export default memo(BasicSelect);
