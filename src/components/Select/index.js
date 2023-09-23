import { memo } from 'react';
import { FormControl, MenuItem, Select, InputLabel } from '@mui/material';

import style from './styles.module.scss';

const BasicSelect = ({ value, onChange, array }) => {
	return (
		<FormControl variant='filled' fullWidth>
			<InputLabel className={style.label} id='demo-simple-select-label'>
				Выберите город
			</InputLabel>
			<Select
				className={style.select}
				labelId='demo-simple-select-label'
				id='demo-simple-select'
				label='Выберите город'
				value={value}
				onChange={onChange}
			>
				{array.map(({ id, name }) => {
					return (
						<MenuItem key={id} value={name}>
							{name}
						</MenuItem>
					);
				})}
			</Select>
		</FormControl>
	);
};

export default memo(BasicSelect);
