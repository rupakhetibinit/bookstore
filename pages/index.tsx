import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const Home: NextPage = () => {
	return (
		<div className='flex min-h-screen flex-col items-center justify-center py-2'>
			<Head>
				<title>Create Next App</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Link href='/admin/login'>Login</Link>
		</div>
	);
};

export default Home;
