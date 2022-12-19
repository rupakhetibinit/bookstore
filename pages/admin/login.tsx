import { useRouter } from 'next/router';
import React from 'react';

type Props = {};

const login = (props: Props) => {
	const router = useRouter();
	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		const formValues = e.target as any as Record<
			'email' | 'password',
			{
				value: string;
			}
		>;
		const email = formValues.email.value;
		const password = formValues.password.value;
		const response = await fetch('/api/admin/login', {
			method: 'POST',
			body: JSON.stringify({ email, password }),
		});
		console.log(response);
		if (response.redirected) return router.push(response.url);
	};
	return (
		<div className='w-screen flex items-center justify-center h-screen bg-white'>
			<div className='h-96 w-72'>
				<form
					method='post'
					className='p-4 bg-white space-y-8'
					onSubmit={handleSubmit}
					action='/api/admin/login'>
					<div className='relative'>
						<input
							id='email'
							name='email'
							type='email'
							className='peer w-full h-10 border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600 placeholder-transparent'
							placeholder='Email Address'
						/>
						<label
							className='absolute -top-3.5 left-0 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm hover:cursor-text'
							htmlFor='email'>
							Email Address
						</label>
					</div>
					<div className='relative'>
						<input
							id='password'
							name='password'
							type='password'
							className='peer w-full h-10 border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600 placeholder-transparent'
							placeholder='Password'
						/>
						<label
							className='absolute -top-3.5 left-0 to-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm hover:cursor-text'
							htmlFor='password'>
							Password
						</label>
					</div>
					<button
						type='submit'
						className='bg-rose-500 rounded-md text-white px-8 py-2 mx-auto w-full'>
						Sign In
					</button>
				</form>
			</div>
		</div>
	);
};

export default login;
