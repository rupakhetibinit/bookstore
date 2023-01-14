import React, { Dispatch, SetStateAction } from 'react';

type Props = {
	showNav: boolean;
	setShowNav: Dispatch<SetStateAction<boolean>>;
};

const Topbar = (props: Props) => {
	return <div>TopBar</div>;
};

export default Topbar;
