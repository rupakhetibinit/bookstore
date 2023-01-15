import React from 'react';

type Props = {};

const users = (props: Props) => {
	return (
		<>
			<p className='text-gray-700 text-3xl mb-16 font-bold'>Users</p>
			<div className='grid lg:grid-cols-3 gap-5 mb-16'>
				<div className='rounded bg-gray-300 h-40 shadow-sm'></div>
				<div className='rounded bg-gray-300 h-40 shadow-sm'></div>
				<div className='rounded bg-gray-300 h-40 shadow-sm'></div>
			</div>
		</>
	);
};

export default users;
