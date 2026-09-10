import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const THUMBS = ["/five.png", "/two.png", "/seven.png", "/four.png", "/one.png"];

function shuffleArray(array) {
	const next = [...array];
	for (let i = next.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[next[i], next[j]] = [next[j], next[i]];
	}
	if (next.every((value, index) => value === array[index])) {
		return shuffleArray(array);
	}
	return next;
}

function HeroThumbs() {
	const [thumbs, setThumbs] = useState(THUMBS);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setThumbs((prev) => shuffleArray(prev));
		}, 2800);

		return () => clearInterval(intervalId);
	}, []);

	return (
		<motion.div
			className="aximo-hero-thumb-wrap"
			initial="hidden"
			whileInView="show"
			viewport={{ once: true, amount: 0.3 }}
			variants={{
				hidden: {},
				show: {
					transition: {
						staggerChildren: 0.12,
					},
				},
			}}
		>
			{thumbs.map((src) => (
				<motion.div
					key={src}
					layout
					className="aximo-hero-thumb-item"
					variants={{
						hidden: { opacity: 0, y: 40, scale: 0.92 },
						show: { opacity: 1, y: 0, scale: 1 },
					}}
					transition={{
						layout: {
							type: "spring",
							stiffness: 260,
							damping: 26,
						},
						opacity: { duration: 0.45 },
						scale: { duration: 0.45 },
					}}
					whileHover={{ scale: 1.03, zIndex: 5 }}
				>
					<img src={src} alt="Thumb images" />
				</motion.div>
			))}
		</motion.div>
	);
}

export default HeroThumbs;
