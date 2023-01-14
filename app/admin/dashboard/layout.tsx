'use client';
import LayoutAdmin from 'components/LayoutAdmin';
import 'styles/globals.css';
export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html>
			<head />
			<body>
				<LayoutAdmin>{children}</LayoutAdmin>
			</body>
		</html>
	);
}
