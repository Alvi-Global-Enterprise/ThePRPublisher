import BreadCrumb from "../components/common/Breadcrumb";
import PricingFaq from "../components/pricing/PricingFaq";
import PricingPlan from "../components/pricing/PricingPlan";

function Pricing() {
	return (
		<>
			<BreadCrumb title="Pricing" />
			<PricingPlan />
			<PricingFaq />
		</>
	);
}

export default Pricing;
