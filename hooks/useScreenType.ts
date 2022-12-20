import { useMediaQuery } from 'react-responsive';

export const useScreenType = () => {
	const isSmall = useMediaQuery({ maxWidth: 640 });

	if (isSmall) {
		return 'small-screen';
	}

	return 'big-screen';
};
