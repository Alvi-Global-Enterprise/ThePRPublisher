import { FadeInStaggerTwo, FadeInStaggerTwoChildren } from "../../animation/FadeInStaggerTwo";
import { pricingFaqs } from "../../../data/siteContent";

function FaqAccordion() {
	const leftFaqs = pricingFaqs.slice(0, 3);
	const rightFaqs = pricingFaqs.slice(3);

	return (
		<FadeInStaggerTwo className="row">
			<FadeInStaggerTwoChildren className="col-lg-6">
				<div className="accordion aximo-accordion-wrap2" id="aximo-accordion-col1">
					{leftFaqs.map((faq, index) => (
						<div className="accordion-item" key={faq.q}>
							<h3 className="accordion-header">
								<button
									className={`accordion-button ${index === 0 ? "" : "collapsed"}`}
									type="button"
									data-bs-toggle="collapse"
									data-bs-target={`#faq-left-${index}`}
								>
									{faq.q}
								</button>
							</h3>
							<div
								id={`faq-left-${index}`}
								className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
								data-bs-parent="#aximo-accordion-col1"
							>
								<div className="accordion-body">{faq.a}</div>
							</div>
						</div>
					))}
				</div>
			</FadeInStaggerTwoChildren>
			<FadeInStaggerTwoChildren className="col-lg-6">
				<div className="accordion aximo-accordion-wrap2" id="aximo-accordion-col2">
					{rightFaqs.map((faq, index) => (
						<div className="accordion-item" key={faq.q}>
							<h3 className="accordion-header">
								<button
									className={`accordion-button ${index === 0 ? "" : "collapsed"}`}
									type="button"
									data-bs-toggle="collapse"
									data-bs-target={`#faq-right-${index}`}
								>
									{faq.q}
								</button>
							</h3>
							<div
								id={`faq-right-${index}`}
								className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
								data-bs-parent="#aximo-accordion-col2"
							>
								<div className="accordion-body">{faq.a}</div>
							</div>
						</div>
					))}
				</div>
			</FadeInStaggerTwoChildren>
		</FadeInStaggerTwo>
	);
}

export default FaqAccordion;
