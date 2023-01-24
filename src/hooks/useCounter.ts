import { useState } from 'react';

export const useCounter = (
	initialState: number = 1,
	maxState: number = 1,
	minState: number = 1
) => {
	const [counter, setCounter] = useState(initialState);

	const increment = () => {
		if (counter >= maxState - 1) {
			setCounter(initialState);
		} else {
			setCounter(counter + 1);
		}
	};

	const decrement = () => {
		if (counter <= minState - 1) {
			setCounter(maxState - 1);
		} else {
			setCounter(counter - 1);
		}
	};

	return {
		counter,
		increment,
		decrement,
	};
};
