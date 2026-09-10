import { Link } from "react-router-dom";
import FadeInStagger from "../animation/FadeInStagger";
import CheckImg from "../../assets/images/icon/check.svg";

const pricingPlanData = [
	{
		id: crypto.randomUUID(),
		title: "Targeted Press Release Distribution",
		priceLabel: "From",
		price: "150",
		description: "Get your story in front of the right people with a professionally managed media campaign.",
		features: [
			"Dedicated PR campaign manager",
			"Custom-built media list",
			"Targeted journalist outreach",
			"Multi-channel media distribution",
			"Local, national & international options",
		],
		link: "/press-release-distribution",
		highlighted: true,
	},
	{
		id: crypto.randomUUID(),
		title: "Professional Press Release Writing",
		priceLabel: "From",
		price: "330",
		description:
			"Journalist-crafted, media-ready writing designed to capture attention and maximise coverage.",
		features: [
			"One-on-one consultation",
			"Human-crafted professional copy",
			"Newsworthy structure",
			"Journalist-friendly formatting",
			"Suitable for every industry",
		],
		link: "/press-release-writing",
		highlighted: false,
	},
	{
		id: crypto.randomUUID(),
		title: "Guaranteed Publishing",
		priceLabel: "Packages",
		price: "Custom",
		description:
			"Publish across high-authority platforms and syndication networks for guaranteed online exposure.",
		features: [
			"Trusted media platform placements",
			"Stronger online visibility",
			"Credibility and brand trust",
			"SEO-friendly exposure support",
			"Placement reporting",
		],
		link: "/guaranteed-publishing",
		highlighted: false,
	},
];

function PricingPlan() {
	return (
		<div className="section aximo-section-padding3">
			<div className="container">
				<div className="aximo-pricing-title">
					<h2>Simple pricing plans that save you money</h2>
					<p className="tpp-services-lead">
						Flexible pay-as-you-go PR solutions — invest only in the services your brand needs.
					</p>
				</div>
				<div className="row justify-content-center">
					{pricingPlanData.map((plan, index) => (
						<FadeInStagger className="col-xl-4 col-md-6" key={plan.id} index={index}>
							<div className="aximo-pricing-wrap2">
								<div className="aximo-pricing-header2">
									<h5>{plan.title}</h5>
								</div>
								<div className="aximo-pricing-price2">
									{plan.priceLabel && <span className="aximo-pricing-from">{plan.priceLabel}</span>}
									<h2>{plan.price === "Custom" ? plan.price : `$${plan.price}`}</h2>
								</div>
								<div className="aximo-pricing-description">
									<p>{plan.description}</p>
								</div>
								<div className="aximo-pricing-body2">
									<ul>
										{plan.features.map((feature) => (
											<li key={feature}>
												<img src={CheckImg} alt="check" />
												{feature}
											</li>
										))}
									</ul>
								</div>
								<Link className={`aximo-pricing-btn2 ${plan.highlighted ? "active" : ""}`} to={plan.link}>
									Learn More
								</Link>
							</div>
						</FadeInStagger>
					))}
				</div>
			</div>
		</div>
	);
}

export default PricingPlan;
