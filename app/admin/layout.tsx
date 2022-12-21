'use client';
import Link from 'next/link';
import { ReactNode, Suspense } from 'react';
// import { Screen } from '../../components/AdminLayout';
export default function AdminDefaultLayout({
	children,
}: {
	children: ReactNode;
}) {
	return (
		<section className='w-screen h-screen'>
			<div className='flex gap-4'>
				<div className='w-[250px]'>
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
				</div>
				<div className='py-4'>{children}</div>
			</div>
		</section>
	);
}
