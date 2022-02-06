import Navbar from "./Navbar";
const Layout = ({ className, children, ...rest }) => {
	return (
		<div className={className} {...rest}>
			<Navbar />
			{children}
		</div>
	);
};

export default Layout;
