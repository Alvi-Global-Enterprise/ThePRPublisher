const floatingLogos = [
	{ src: "/logos/AP-news.png", alt: "AP News", className: "pos-1", layer: "behind" },
	{ src: "/logos/Yahoofinance.png", alt: "Yahoo Finance", className: "pos-3", layer: "front" },
	{ src: "/logos/msn2.png", alt: "MSN", className: "pos-4", layer: "behind" },
	{ src: "/logos/newsmax.png", alt: "Newsmax", className: "pos-5", layer: "behind" },
	{ src: "/logos/Digital-Journal.png", alt: "Digital Journal", className: "pos-6", layer: "front" },
	{ src: "/logos/street-insider.png", alt: "Street Insider", className: "pos-7", layer: "behind" },
	{ src: "/logos/barchart.png", alt: "Barchart", className: "pos-8", layer: "front" },
	{ src: "/logos/msn2.png", alt: "MSN", className: "pos-9", layer: "behind" },
];

function LogoItems({ logos }) {
	return logos.map((logo) => (
		<div key={`${logo.className}-${logo.src}`} className={`aximo-hero-float-logo ${logo.className}`}>
			<div className="aximo-hero-float-logo-inner">
				<img src={logo.src} alt={logo.alt} />
			</div>
		</div>
	));
}

function HeroFloatingLogosBehind() {
	return (
		<div className="aximo-hero-floating-logos is-behind" aria-hidden="true">
			<LogoItems logos={floatingLogos.filter((logo) => logo.layer === "behind")} />
		</div>
	);
}

function HeroFloatingLogosFront() {
	return (
		<div className="aximo-hero-floating-logos is-front" aria-hidden="true">
			<LogoItems logos={floatingLogos.filter((logo) => logo.layer === "front")} />
		</div>
	);
}

export { HeroFloatingLogosBehind, HeroFloatingLogosFront };
