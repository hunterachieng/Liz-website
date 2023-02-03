import Navbar from '../Navbar';
import Footer from '../Footer';
const Layout = ({ children }) => {
	return (
		<>
			<Navbar />
			{children}
			<br/><br/><br/>
			<Footer />
		</>
	);
};

export default Layout;
