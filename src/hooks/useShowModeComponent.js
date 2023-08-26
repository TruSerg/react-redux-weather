import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { showModeComponentChange } from '../store/weatherDailySlice';

const useShowModeComponent = () => {
	const dispatch = useDispatch();
	const [showMode, setShowMode] = useState(false);

	const handleShowModeComponent = () => {
		setShowMode(prev => !prev);

		dispatch(showModeComponentChange(showMode));
	};

	return { showMode, handleShowModeComponent };
};

export default useShowModeComponent;
