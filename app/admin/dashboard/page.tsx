import React from 'react';

export default function Page() {
	return (
		<>
			<p className='text-gray-700 text-3xl mb-16 font-bold'>Dashboard</p>
			<div className='grid lg:grid-cols-3 gap-5 mb-16'>
				<div className='rounded bg-gray-300 h-40 shadow-sm'></div>
				<div className='rounded bg-gray-300 h-40 shadow-sm'></div>
				<div className='rounded bg-gray-300 h-40 shadow-sm'></div>
			</div>
			<div className='grid grid-cols-1 bg-gray-300 h-56 shadow-sm'></div>
		</>
	);
}
