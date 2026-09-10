import { Link } from "react-router-dom";
import LikeImg from "../../../assets/images/v2/like.svg";

function PricingCard({ pricing: { plan, price, priceLabel, img, description, services, note, active } }) {
	return (
		<div className="aximo-pricing-wrap">
			<div className="aximo-pricing-header">
				<img src={img} alt={plan} />
				<h3>{plan}</h3>
			</div>
			<div className="aximo-pricing-price">
				{priceLabel && <span className="aximo-pricing-from">{priceLabel}</span>}
				<h2>${price}</h2>
			</div>
			{description && <p className="aximo-pricing-desc">{description}</p>}
			<div className="aximo-pricing-body">
				<ul>
					{services.map((service) => (
						<li key={service}>
							<img src={LikeImg} alt="like" />
							{service}
						</li>
					))}
				</ul>
			</div>
			{note && <p className="aximo-pricing-note">{note}</p>}
			<Link className={`aximo-default-btn aximo-pricing-btn ${active ? "active" : ""}`} to="/pricing">
				Learn More
			</Link>
		</div>
	);
}

export default PricingCard;
