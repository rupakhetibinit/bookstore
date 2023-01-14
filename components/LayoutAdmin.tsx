import { useState, useEffect, Fragment } from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import { Transition } from '@headlessui/react';
import clsx from 'clsx';

type Props = {
	children: React.ReactNode;
};

const LayoutAdmin = (props: Props) => {
	const [showNav, setShowNav] = useState(true);
	const [isMobile, setIsMobile] = useState(false);

	function handleResize() {
		if (innerWidth <= 640) {
			setShowNav(false);
			setIsMobile(true);
		} else {
			setShowNav(true);
			setIsMobile(false);
		}
	}

	useEffect(() => {
		if (typeof window !== undefined || null) {
			addEventListener('resize', handleResize);
		}

		return () => {
			removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<>
			<Topbar showNav={showNav} setShowNav={setShowNav} />
			<Transition
				as={Fragment}
				show={showNav}
				enter='transform transition duration-[400]'
				enterFrom='-translate-x-full'
				enterTo='translate-x-0'
				leave='transform transition duration-[400] ease-in-out'
				leaveFrom='translate-x-0'
				leaveTo='-translate-x-full'>
				<Sidebar showNav={showNav} />
			</Transition>
			<main
				className={clsx(
					'pt-16 transition-all druation-[400]',
					showNav && !isMobile && 'pl-56'
				)}>
				<div className='px-4 md:px-16'>{props.children}</div>
			</main>
		</>
	);
};

export default LayoutAdmin;
