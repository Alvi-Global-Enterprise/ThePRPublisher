import { Link } from "react-router-dom";
import ArrowRightImg from "../../assets/images/icon/arrow-right.svg";
import QuestionImg from "../../assets/images/icon/question.svg";
import { pricingFaqs } from "../../data/siteContent";

function PricingFaq() {
	return (
		<div className="section">
			<div className="container">
				<div className="aximo-pricing-border">
					<div className="row">
						<div className="col-lg-5">
							<div className="aximo-default-content">
								<h2>Frequently asked questions</h2>
								<p>
									Clear answers about distribution, writing, timelines, reporting, white-label
									support, and SEO-focused Digital PR.
								</p>
							</div>
							<Link className="aximo-errors-btn contact-us" to="/contact-us">
								Contact us{" "}
								<span>
									<img src={ArrowRightImg} alt="arrow right" />
								</span>
							</Link>
						</div>
						<div className="col-lg-7">
							<div className="aximo-accordion-normal-wrap m_top_responsive">
								{pricingFaqs.map((faq) => (
									<div className="aximo-accordion-normal-item" key={faq.q}>
										<div className="aximo-accordion-normal-icon">
											<img src={QuestionImg} alt="question icon" />
										</div>
										<div className="aximo-accordion-normal-data">
											<h3>{faq.q}</h3>
											<p>{faq.a}</p>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default PricingFaq;
