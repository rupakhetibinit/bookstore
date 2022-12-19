// pages/login.tsx
import { AuthRequest } from '@lucia-auth/nextjs';
import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { auth } from '../lib/lucia';

export const getServerSideProps = async (
	context: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<{}>> => {
	const authRequest = new AuthRequest(auth, context.req, context.res);
	const session = await authRequest.validate();
	if (session) {
		// redirect the user if authenticated
		return {
			redirect: {
				destination: '/',
				permanent: false,
			},
		};
	}
	return {
		props: {},
	};
};

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
		const response = await fetch('/api/login', {
			method: 'POST',
			body: JSON.stringify({
				email,
				password,
			}),
		});
		console.log(response);
		if (response.redirected) router.push(response.url);
	};
	return (
		<div className='h-screen w-screen flex flex-col items-center justify-center'>
			<h1 className='text-xl'>Sign in</h1>
			<form
				className='flex flex-col'
				method='post'
				onSubmit={handleSubmit}
				action='/api/login'>
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
					value='Continue'
					className='cursor-pointer hover:bg-teal-700 focus:bg-teal-800 mt-2 px-4 py-2 rounded-md bg-teal-500 text-white'
				/>
			</form>
			<Link href='/signup' className='link'>
				Create a new account
			</Link>
		</div>
	);
};

export default Index;
