import React from 'react';

type Props = {};

const orders = (props: Props) => {
	return (
		<>
			<p className='text-gray-700 text-3xl mb-16 font-bold'>Orders</p>
			<div className='grid lg:grid-cols-3 gap-5 mb-16'>
				<div className='rounded bg-gray-300 h-40 shadow-sm'></div>
				<div className='rounded bg-gray-300 h-40 shadow-sm'></div>
				<div className='rounded bg-gray-300 h-40 shadow-sm'></div>
			</div>
		</>
	);
};
export default orders;
