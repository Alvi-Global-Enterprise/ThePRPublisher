import { Link } from "react-router-dom";
import { FadeInStaggerTwo, FadeInStaggerTwoChildren } from "../../animation/FadeInStaggerTwo";
function HeroContent() {
	return (
		<div className="aximo-hero-content2">
			<h1>
				<span className="hero-line">
					Your Trusted <span className="brand-text">Press Release</span>
				</span>
				<span className="hero-line">
					<span className="brand-text">Distribution Partner</span>
				</span>
			</h1>
			<p>
			Amplify your brand visibility with powerful press release distribution and digital PR solutions designed to connect your news with journalists, media outlets, search engines, and audiences worldwide.
			</p>
			<FadeInStaggerTwo className="aximo-hero-btn-wrap center">
				<FadeInStaggerTwoChildren>
					<Link className="aximo-default-btn brand-btn" to="/contact-us">
						<span className="aximo-label-up">Submit Your Press Release</span>
						<span className="aximo-label-up">Submit Your Press Release</span>
					</Link>
				</FadeInStaggerTwoChildren>
				<FadeInStaggerTwoChildren>
					<Link className="aximo-default-btn aximo-default-btn-outline" to="/pricing">
						<span className="aximo-label-up">See Distribution Plans & Outlets</span>
						<span className="aximo-label-up">See Distribution Plans & Outlets</span>
					</Link>
				</FadeInStaggerTwoChildren>
			</FadeInStaggerTwo>
		</div>
	);
}

export default HeroContent;
