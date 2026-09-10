import PricingIcon1 from "../../../assets/images/v2/pricing-icon1.png";
import PricingIcon2 from "../../../assets/images/v2/pricing-icon2.png";
import Shape3Img from "../../../assets/images/v2/shape3.png";
import FadeInStagger from "../../animation/FadeInStagger";
import PricingCard from "./PricingCard";

const pricingData = [
	{
		id: crypto.randomUUID(),
		plan: "Targeted Press Release Distribution",
		price: "150",
		priceLabel: "From",
		img: PricingIcon1,
		description: "Get your story in front of the right people with a professionally managed media campaign.",
		services: [
			"Dedicated PR campaign manager",
			"Custom-built media list based on relevance",
			"Targeted outreach to journalists and editors",
			"Distribution to newspapers, magazines, online publications, news agencies, TV, radio, podcasts, bloggers, and influencers",
			"Local, national, and international media targeting available",
		],
		active: true,
	},
	{
		id: crypto.randomUUID(),
		plan: "Professional Press Release Writing",
		price: "330",
		priceLabel: "From",
		img: PricingIcon2,
		description:
			"Our experienced journalists write compelling, media-ready press releases designed to capture attention and maximise coverage.",
		services: [
			"One-on-one consultation to understand your announcement",
			"Professionally written, human-crafted content",
			"Newsworthy structure and engaging copy",
			"Optimised formatting for journalists and online publication",
			"Suitable for businesses across every industry",
		],
		note: "We'll work with you to transform your news into a story journalists want to cover.",
		active: false,
	},
];

function Pricing() {
	return (
		<div className="section aximo-section-padding3 position-relative">
			<div className="container">
				<div className="aximo-section-title center clash-grotesk">
					<h2>Simple pricing plans that save you money</h2>
				</div>
				<div className="row justify-content-center">
					{pricingData.map((pricing, index) => (
						<FadeInStagger key={pricing.id} index={index} className="col-lg-6 col-md-6">
							<PricingCard pricing={pricing} />
						</FadeInStagger>
					))}
				</div>
			</div>

			<div className="aximo-pricing-shape">
				<img src={Shape3Img} alt="Shape3Img" />
			</div>
		</div>
	);
}

export default Pricing;
