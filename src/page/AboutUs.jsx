import { Link } from "react-router-dom";
import BreadCrumb from "../components/common/Breadcrumb";
import { aboutContent, servicesList } from "../data/siteContent";

function AboutUs() {
	return (
		<>
			<BreadCrumb title="About Us" />
			<section className="section aximo-section-padding">
				<div className="container">
					<div className="row">
						<div className="col-lg-8">
							<p className="tpp-service-eyebrow">About ThePRPublisher</p>
							<h2 className="mb-3">{aboutContent.headline}</h2>
							<p className="tpp-service-intro">{aboutContent.intro}</p>
							<p>{aboutContent.mission}</p>
							<ul className="tpp-check-list">
								{aboutContent.points.map((point) => (
									<li key={point}>{point}</li>
								))}
							</ul>
							<div className="tpp-service-cta-wrap mt-4">
								<Link className="aximo-default-btn brand-btn" to="/contact-us">
									<span className="aximo-label-up">Speak to an Expert</span>
									<span className="aximo-label-up">Speak to an Expert</span>
								</Link>
								<Link className="aximo-default-btn aximo-default-btn-outline" to="/service">
									<span className="aximo-label-up">Explore Services</span>
									<span className="aximo-label-up">Explore Services</span>
								</Link>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="tpp-service-sidebar">
								<h4>Our services</h4>
								<ul className="tpp-service-links">
									{servicesList.map((service) => (
										<li key={service.slug}>
											<Link to={`/${service.slug}`}>{service.title}</Link>
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default AboutUs;
