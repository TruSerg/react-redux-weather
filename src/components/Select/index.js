import { memo } from 'react';
import { FormControl, MenuItem, Select, InputLabel } from '@mui/material';

import style from './styles.module.scss';

const BasicSelect = ({ value, label, onChange, array }) => {
	return (
		<FormControl fullWidth variant='filled'>
			<InputLabel className={style.label} id='demo-simple-select-label'>
				Выберите город...
			</InputLabel>
			<Select
				className={style.select}
				labelId='demo-simple-select-label'
				id='demo-simple-select'
				label={label}
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
