// pages/signup.tsx
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const Index = () => {
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
		const response = await fetch('/api/signup', {
			method: 'POST',
			body: JSON.stringify({
				email,
				password,
			}),
		});
		if (response.redirected) return router.push(response.url); // redirect on redirect responses
	};
	return (
		<div className='h-screen w-screen flex flex-col items-center justify-center'>
			<h1 className='text-xl'>Sign up</h1>
			<form
				className='flex flex-col'
				method='post'
				onSubmit={handleSubmit}
				action='/api/signup'>
				<label htmlFor='email'>email</label>
				<input
					className='bg-teal-200 py-1 px-4 rounded-md'
					id='email'
					name='email'
				/>
				<label htmlFor='password'>password</label>
				<input
					className='bg-teal-200 py-1 px-4 rounded-md'
					type='password'
					id='password'
					name='password'
				/>
				<input
					type='submit'
					value='Signup'
					className='cursor-pointer hover:bg-teal-700 focus:bg-teal-800 mt-2 px-4 py-2 rounded-md bg-teal-500 text-white'
				/>
			</form>
			<Link href='/login' className='link'>
				Sign in
			</Link>
		</div>
	);
};

export default Index;
