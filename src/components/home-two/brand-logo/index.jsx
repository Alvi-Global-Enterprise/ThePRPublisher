import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const carouselLogos = [
	"/logocarousel/1.png",
	"/logocarousel/2.png",
	"/logocarousel/3.png",
	"/logocarousel/5.png",
	"/logocarousel/6.png",
	"/logocarousel/7.png",
	"/logocarousel/8.png",
	"/logocarousel/AP_ICON_114x114.png",
	"/logocarousel/Business-Insider-300x100.png",
	"/logocarousel/Investment-Guide-300x85.png",
	"/logocarousel/spon-lg9.png",
	"/logocarousel/story-lg2@2x-300x44.png",
	"/logocarousel/yahoo-logo.png",
];

const sliderData = [...carouselLogos, ...carouselLogos].map((img) => ({
	id: crypto.randomUUID(),
	img,
}));

const swiperSettings = {
	centeredSlides: true,
	speed: 6000,
	autoplay: {
		delay: 1,
	},
	loop: true,
	allowTouchMove: false,
	modules: [Autoplay],
	slidesPerView: 2,
	breakpoints: {
		768: {
			slidesPerView: 3,
		},
		992: {
			slidesPerView: 4,
		},
		1200: {
			slidesPerView: 5,
		},
		1400: {
			slidesPerView: 6,
		},
	},
};

function BrandLogo() {
	return (
		<div className="aximo-brandlogo-section extra-side-margin brandlogo-transparent">
			<div className="aximo-brandlogo-title">
				<h2>Guaranteed Publishing</h2>
				<p>Need guaranteed online exposure? Publish your press release across high-authority news platforms and syndication networks to boost visibility and credibility.</p>
			</div>
			<div className="swiper aximo-auto-slider">
				<Swiper {...swiperSettings}>
					{sliderData.map((item) => (
						<SwiperSlide key={item.id}>
							<div className="aximo-brandlogo-item">
								<img src={item.img} alt="brand logo" />
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
}

export default BrandLogo;
