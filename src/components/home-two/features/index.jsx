import Illustrator1Img from "../../../assets/images/v2/illustrator1.png";
import Illustrator2Img from "../../../assets/images/v2/illustrator2.png";
import Illustrator3Img from "../../../assets/images/v2/illustrator3.png";
import Shape2Img from "../../../assets/images/v2/shape2.png";
import FadeInStagger from "../../animation/FadeInStagger";
import FeatureCard from "./FeatureCard";

const featuresData = [
	{
		id: crypto.randomUUID(),
		title: "Boost Brand Visibility",
		description:
			"Get your brand featured across trusted media platforms and reach a wider audience with strategic PR campaigns designed to increase awareness and recognition.",
		img: Illustrator1Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Earn Media Coverage & Authority",
		description:
			"Our PR specialists connect your brand with relevant journalists and publications, helping you build credibility and establish your business as an industry leader.",
		img: Illustrator2Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Grow Traffic & Business Results",
		description:
			"Combine Digital PR with SEO-focused strategies to improve search visibility, attract qualified visitors, and create long-term growth opportunities.",
		img: Illustrator3Img,
	},
];

function Features() {
	return (
		<div className="section bg-light2 aximo-section-padding3 position-relative aximo-features-section">
			<div className="container">
				<div className="row">
					<div className="col-lg-10">
						<div className="aximo-section-title clash-grotesk">
							<h2> Building Brands, Boosting Visibility</h2>
						</div>
					</div>
				</div>
				<div className="row aximo-features-cards">
					{featuresData.map((feature, index) => (
						<FadeInStagger key={feature.id} index={index} className="col-xl-4 col-md-6">
							<FeatureCard feature={feature} />
						</FadeInStagger>
					))}
				</div>
			</div>
			<div className="aximo-shape">
				<img src={Shape2Img} alt="Shape2Img" />
			</div>
		</div>
	);
}

export default Features;
