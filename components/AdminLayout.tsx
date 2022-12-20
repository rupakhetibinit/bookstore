import React, { useEffect, useRef, useState, type ReactNode } from 'react';
import { useScreenType } from '../hooks/useScreenType';
import useToggle from '../hooks/useToggle';
import { Toggle } from './ToggleButton';

type Props = {
	children?: ReactNode;
	mobile?: ReactNode;
	leftSideBar?: ReactNode;
	content?: ReactNode;
};

const AdminLayout = ({ content, leftSideBar, mobile }: Props) => {
	const screenType = useScreenType();

	const [menuOpen, toggle] = useToggle(false);

	if (screenType === 'small-screen') {
		return (
			<Screen>
				<div className='relative flex justify-between px-4 py-2'>
					<div>Logo</div>
					<Toggle menuOpen={menuOpen} toggle={toggle} />
				</div>
				{menuOpen && (
					<>
						<div className='absolute w-full h-full bg-white/80 backdrop-blur-xl'>
							<div className=''>Hello world</div>
						</div>
					</>
				)}
				<div className='w-full h-full px-4'>{content}</div>
			</Screen>
		);
	}
	return (
		<Screen>
			<div className='flex gap-4'>
				<div className='w-[250px]'>{leftSideBar}</div>
				<div className='w-full'>{content}</div>
			</div>
		</Screen>
	);
};

export default AdminLayout;

const Screen = ({ children }: Props) => {
	return <div className='w-screen h-screen'>{children}</div>;
};
