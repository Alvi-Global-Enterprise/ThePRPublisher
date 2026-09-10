import { Link } from "react-router-dom";

function HeaderLogo() {
	return (
		<div className="brand-logo">
			<Link to="/">
				<img src="/logomainpng.png" alt="ThePRPublisher" className="site-logo" />
			</Link>
		</div>
	);
}

export default HeaderLogo;
