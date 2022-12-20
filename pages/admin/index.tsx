import React from 'react';
import AdminLayout from '../../components/AdminLayout';
import { Context as ResponsiveContext } from 'react-responsive';
import { useComponentHydrated } from 'react-hydration-provider';
type Props = {};

const index = (props: Props) => {
	const hydrated = useComponentHydrated();
	return (
		<ResponsiveContext.Provider value={hydrated ? undefined : { width: 1600 }}>
			<AdminLayout />
		</ResponsiveContext.Provider>
	);
};

export default index;
