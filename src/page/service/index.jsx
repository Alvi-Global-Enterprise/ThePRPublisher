import { Link } from "react-router-dom";
import BreadCrumb from "../../components/common/Breadcrumb";
import { servicesList } from "../../data/siteContent";

function ServicePage() {
	return (
		<>
			<BreadCrumb title="Services" />
			<section className="section aximo-section-padding">
				<div className="container">
					<div className="aximo-section-title center clash-grotesk">
						<h2>Digital PR Solutions for Every Goal</h2>
						<p className="tpp-services-lead">
							From press release distribution and writing to guaranteed publishing, regional newswire,
							SEO boost, and agency white-label support — choose the service your brand needs.
						</p>
					</div>
					<div className="row">
						{servicesList.map((service) => (
							<div key={service.slug} className="col-lg-4 col-md-6">
								<div className="aximo-iconbox-wrap tpp-service-card">
									<div className="aximo-iconbox-icon">
										<i className={service.icon}></i>
									</div>
									<div className="aximo-iconbox-data">
										<h3>{service.title}</h3>
										<p>{service.short}</p>
										<Link to={`/${service.slug}`}>Learn more →</Link>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
}

export default ServicePage;
