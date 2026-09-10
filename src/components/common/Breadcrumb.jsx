import { Link } from "react-router-dom";
import HeroBg from "../../assets/images/about-hero-bg.jpg";

function BreadCrumb({ title, backgroundImage = HeroBg, className = "" }) {
	const style = backgroundImage
		? {
				backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url(${backgroundImage})`,
				backgroundSize: "cover",
				backgroundPosition: "center center",
				backgroundRepeat: "no-repeat",
			}
		: undefined;

	return (
		<div className={`aximo-breadcrumb page-hero-breadcrumb ${className}`.trim()} style={style}>
			<div className="container">
				<h1 className="post__title">{title}</h1>
				<nav className="breadcrumbs">
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li aria-current="page"> {title}</li>
					</ul>
				</nav>
			</div>
		</div>
	);
}

export default BreadCrumb;
