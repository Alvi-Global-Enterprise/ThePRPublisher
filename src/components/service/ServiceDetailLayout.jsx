import { Link } from "react-router-dom";
import BreadCrumb from "../common/Breadcrumb";
import { servicesList } from "../../data/siteContent";

function ServiceDetailLayout({ content }) {
	const {
		title,
		eyebrow,
		headline,
		intro,
		priceFrom,
		highlights,
		sections,
		cta,
	} = content;

	return (
		<>
			<BreadCrumb title={title} />
			<section className="section aximo-section-padding tpp-service-detail">
				<div className="container">
					<div className="row">
						<div className="col-lg-8">
							<p className="tpp-service-eyebrow">{eyebrow}</p>
							<h2 className="mb-3">{headline}</h2>
							<p className="tpp-service-intro">{intro}</p>
							{priceFrom && <p className="tpp-service-price">{priceFrom}</p>}

							{sections?.map((section) => (
								<div key={section.heading} className="tpp-service-block">
									<h3>{section.heading}</h3>
									<p>{section.body}</p>
								</div>
							))}

							<div className="tpp-service-cta-wrap">
								<Link className="aximo-default-btn brand-btn" to="/contact-us">
									<span className="aximo-label-up">{cta || "Get Started"}</span>
									<span className="aximo-label-up">{cta || "Get Started"}</span>
								</Link>
								<Link className="aximo-default-btn aximo-default-btn-outline" to="/pricing">
									<span className="aximo-label-up">View Pricing</span>
									<span className="aximo-label-up">View Pricing</span>
								</Link>
							</div>
						</div>

						<div className="col-lg-4">
							<div className="tpp-service-sidebar">
								<h4>What&apos;s included</h4>
								<ul>
									{highlights.map((item) => (
										<li key={item}>{item}</li>
									))}
								</ul>
								<hr />
								<h4>More services</h4>
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

export default ServiceDetailLayout;
