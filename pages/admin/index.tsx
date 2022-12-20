import React from 'react';
import AdminLayout from '../../components/AdminLayout';
import { Context as ResponsiveContext } from 'react-responsive';
import { useComponentHydrated } from 'react-hydration-provider';
import Link from 'next/link';
type Props = {};

const index = (props: Props) => {
	const hydrated = useComponentHydrated();
	return (
		<ResponsiveContext.Provider value={hydrated ? undefined : { width: 1600 }}>
			<AdminLayout
				leftSideBar={<LeftSideBar />}
				content={<Content content='cope-world' />}></AdminLayout>
		</ResponsiveContext.Provider>
	);
};

export default index;

const LeftSideBar = () => {
	return (
		<div className='flex flex-col w-full h-screen py-4 pl-6'>
			<div className='mb-6'>Logo</div>
			<div className='prose prose-slate text-sm'>
				<h3 className='prose'>Entities</h3>
				<div className='not-prose flex flex-col gap-y-2'>
					<Link href='/admin/authors'>Authors</Link>
					<Link href='/admin/books'>Books</Link>
					<Link href='/admin/users'>Users</Link>
					<Link href='/admin/orders'>Orders</Link>
				</div>
			</div>
		</div>
	);
};

const Content = ({ content }: { content: string }) => {
	return (
		<div className='py-4 px-2'>
			<div>
				<div>Hello world</div>
			</div>
		</div>
	);
};
