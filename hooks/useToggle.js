import { useState, useCallback } from 'react';

function useToggle(initialState = false) {
	const [isToggled, setToggle] = useState(initialState);
	const toggle = useCallback(() => setToggle((isToggled) => !isToggled), []);
	return [isToggled, toggle];
}

export default useToggle;
