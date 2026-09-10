import FooterBottom from "./FooterBottom";
import { Link } from "react-router-dom";
import { servicesList } from "../../../data/siteContent";

function Footer() {
	return (
		<footer className="aximo-footer-section2">
			<div className="container">
				<div className="aximo-footer-top aximo-section-padding">
					<div className="row">
						<div className="col-xl-4 col-lg-12">
							<div className="aximo-footer-textarea">
								<Link to="/">
									<img src="/logomainpng.png" alt="ThePRPublisher" className="site-logo site-logo--footer" />
								</Link>
								<p>
									ThePRPublisher helps businesses earn trusted media coverage, grow online visibility,
									and build brand authority through Digital PR and press release distribution.
								</p>
							</div>
						</div>
						<div className="col-xl-3 col-md-4">
							<div className="aximo-footer-menu extar-margin">
								<div className="aximo-footer-title">
									<p>Company</p>
								</div>
								<ul>
									<li>
										<Link to="/about-us">About us</Link>
									</li>
									<li>
										<Link to="/service">Our services</Link>
									</li>
									<li>
										<Link to="/pricing">Pricing</Link>
									</li>
									<li>
										<Link to="/portfolio-one">Portfolio</Link>
									</li>
									<li>
										<Link to="/blog">Blog</Link>
									</li>
									<li>
										<Link to="/contact-us">Contact</Link>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-xl-2 col-md-4">
							<div className="aximo-footer-menu">
								<div className="aximo-footer-title">
									<p>Services</p>
								</div>
								<ul>
									{servicesList.slice(0, 5).map((service) => (
										<li key={service.slug}>
											<Link to={`/${service.slug}`}>{service.title}</Link>
										</li>
									))}
								</ul>
							</div>
						</div>
						<div className="col-xl-3 col-md-4">
							<div className="aximo-subscription">
								<div className="aximo-footer-title">
									<p>Get updates</p>
								</div>
								<form action="#">
									<input type="email" placeholder="Email Address" />
									<button id="aximo-subscription-btn" type="submit">
										<span className="aximo-label-up">Subscribe</span>
										<span className="aximo-label-up">Subscribe</span>
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
				<div className="aximo-footer-bottom two">
					<div className="row">
						<FooterBottom />
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
