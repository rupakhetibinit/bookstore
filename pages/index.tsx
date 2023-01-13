import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { signOut, getUser } from '@lucia-auth/nextjs/client';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Home: NextPage = () => {
	const [user, setUser] = useState<{ email: string; id: string }>({
		email: '',
		id: '',
	});
	const handleSignOut = async () => {
		try {
			await signOut();
			setUser({ email: '', id: '' });
			// router.replace('/');
		} catch (error) {
			console.error(error);
		}
	};
	const noth = async () => {
		const thing = await getUser();
		console.log(thing);
		//@ts-ignore
		setUser(thing);
	};
	useEffect(() => {
		noth();
	}, []);
	return (
		<div className='flex min-h-screen flex-col items-center justify-center py-2'>
			<Head>
				<title>Create Next App</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Link href='/login'>Login</Link>
			{user?.email && (
				<button
					// href='/'
					className='px-6 py-2 bg-indigo-400 hover:bg-indigo-500 focus:bg-indigo-600 rounded-md text-white'
					onClick={handleSignOut}>
					Sign Out
				</button>
			)}
		</div>
	);
};

export default Home;
