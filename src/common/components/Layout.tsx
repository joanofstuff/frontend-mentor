import Footer from '@components/Footer';
import { PropsWithChildren } from 'react';

const Layout = ({ children }: PropsWithChildren) => {
	return (
		<>
			{children}
			<Footer />
		</>
	);
};

export default Layout;
