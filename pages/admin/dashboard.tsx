import React from 'react';
import { trpc } from '../../utils/trpc';

const dashboard = () => {
	// const hello = trpc.hello.useQuery({ text: 'Cope World' });
	// if (!hello.data) {
	// 	return <p>Loading...</p>;
	// }

	const hello = trpc.user.useQuery();
	if (!hello.data) {
		return <p>loading</p>;
	}
	return (
		<>
			<div>dashboard</div>
			<p>{hello.data.email}</p>
		</>
	);
};

export default dashboard;
