import { Link } from "react-router-dom";
import StarImg from "../../../assets/images/v2/shape-star.png";
import { servicesList } from "../../../data/siteContent";
import ServiceCard from "./ServiceCard";

const servicesData = servicesList.map((service, index) => ({
	id: crypto.randomUUID(),
	title: service.title,
	description: service.short,
	img: `/${["one", "two", "three", "four", "five", "seven"][index]}.png`,
	link: `/${service.slug}`,
}));

function Services() {
	return (
		<div className="section aximo-section-padding position-relative">
			<div className="container">
				<div className="aximo-section-title center clash-grotesk">
					<h2>Services that grow your media visibility</h2>
				</div>
			</div>
			<div className="aximo-increase-shape">
				<img src={StarImg} alt="StarImg" />
			</div>
			<div className="aximo-service-increase-wrap">
				{servicesData.map((service) => (
					<ServiceCard key={service.id} service={service} />
				))}
			</div>
			<div className="container text-center mt-4">
				<Link className="aximo-default-btn brand-btn" to="/service">
					<span className="aximo-label-up">View All Services</span>
					<span className="aximo-label-up">View All Services</span>
				</Link>
			</div>
		</div>
	);
}

export default Services;
