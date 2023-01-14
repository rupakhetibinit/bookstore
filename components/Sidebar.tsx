import Link from 'next/link';
import React, { forwardRef, LegacyRef } from 'react';
import {
	HomeIcon,
	CreditCardIcon,
	UserIcon,
	ShoppingCartIcon,
	UserGroupIcon,
	BookOpenIcon,
	UserCircleIcon,
	UsersIcon,
	UserPlusIcon,
} from '@heroicons/react/24/solid';
import { usePathname, useRouter } from 'next/navigation';
import clsx from 'clsx';
type Props = {
	showNav: boolean;
};
type HeroIcon = (
	props: React.ComponentProps<'svg'> & {
		title?: string;
		titleId?: string;
	}
) => JSX.Element;

const Sidebar = forwardRef(
	({ showNav }: Props, ref: LegacyRef<HTMLDivElement>) => {
		return (
			<div ref={ref} className='fixed w-56 h-full bg-white shadow-sm'>
				<div className='flex justify-center mt-6 mb-40'>
					<picture>
						<img
							className='w-32 h-auto'
							src='/ferox-transparent.png'
							alt='logo'
						/>
					</picture>
				</div>

				<div className='flex flex-col'>
					<CustomLink link='/admin/dashboard' name='Home' Icon={HomeIcon} />
					<CustomLink
						link='/admin/dashboard/orders'
						name='Orders'
						Icon={ShoppingCartIcon}
					/>
					<CustomLink
						link='/admin/dashboard/authors'
						name='Authors'
						Icon={UserGroupIcon}
					/>
					<CustomLink
						link='/admin/dashboard/books'
						name='Books'
						Icon={BookOpenIcon}
					/>
					<CustomLink
						link='/admin/dashboard/users'
						name='Users'
						Icon={UsersIcon}
					/>
				</div>
			</div>
		);
	}
);

Sidebar.displayName = 'Sidebar';

export default Sidebar;

type CustomLinkProps = {
	link: string;
	name: string;
	Icon: HeroIcon;
};
const CustomLink = ({ link, name, Icon }: CustomLinkProps) => {
	const pathname = usePathname();
	return (
		<Link href={link}>
			<div
				className={clsx(
					'pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors',
					pathname === link
						? 'bg-orange-100 text-orange-500'
						: 'text-gray-400 hover:bg-orange-100 hover:text-orange-500'
				)}>
				<div className='mr-2'>
					<Icon className='w-5 h-5' />
				</div>
				<div>
					<p>{name}</p>
				</div>
			</div>
		</Link>
	);
};
