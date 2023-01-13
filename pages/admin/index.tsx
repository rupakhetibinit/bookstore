import { GetServerSideProps } from 'next';
import React from 'react';
import { trpc } from '../../utils/trpc';

const index = (props: {}) => {
	const { data, isLoading } = trpc.user.useQuery();
	if (isLoading)
		return (
			<div className='w-screen h-screen flex justify-center items-center'>
				Loading...
			</div>
		);
	return <div>Your email is {data?.email}</div>;
};

export default index;
