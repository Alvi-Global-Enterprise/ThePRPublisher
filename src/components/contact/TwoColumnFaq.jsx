import QuestionImg from "../../assets/images/icon/question.svg";
import { pricingFaqs } from "../../data/siteContent";

function TwoColumnFaq() {
	const leftFaqs = pricingFaqs.slice(0, 3);
	const rightFaqs = pricingFaqs.slice(3);

	return (
		<div className="section aximo-section-padding">
			<div className="container">
				<div className="aximo-section-title center">
					<h2>Frequently asked questions</h2>
				</div>
				<div className="row">
					<div className="col-lg-6">
						<div className="aximo-accordion-normal-wrap responsive-margin">
							{leftFaqs.map((faq) => (
								<div key={faq.q} className="aximo-accordion-normal-item">
									<div className="aximo-accordion-normal-icon">
										<img src={QuestionImg} alt="QuestionImg" />
									</div>
									<div className="aximo-accordion-normal-data">
										<h3>{faq.q}</h3>
										<p>{faq.a}</p>
									</div>
								</div>
							))}
						</div>
					</div>
					<div className="col-lg-6">
						<div className="aximo-accordion-normal-wrap">
							{rightFaqs.map((faq) => (
								<div key={faq.q} className="aximo-accordion-normal-item">
									<div className="aximo-accordion-normal-icon">
										<img src={QuestionImg} alt="QuestionImg" />
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
	);
}

export default TwoColumnFaq;
