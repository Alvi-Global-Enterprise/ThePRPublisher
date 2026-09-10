import HeroContent from "./HeroContent";
import { HeroFloatingLogosBehind, HeroFloatingLogosFront } from "./HeroFloatingLogos";
import HeroThumbs from "./HeroThumbs";

function Hero() {
	return (
		<div className="aximo-hero-section2">
			<div className="container position-relative">
				<HeroFloatingLogosBehind />
				<HeroContent />
				<HeroFloatingLogosFront />
			</div>
			<HeroThumbs />
		</div>
	);
}

export default Hero;
