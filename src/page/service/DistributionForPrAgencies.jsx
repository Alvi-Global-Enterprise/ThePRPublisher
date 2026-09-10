import ServiceDetailLayout from "../../components/service/ServiceDetailLayout";
import { servicePages } from "../../data/siteContent";

function DistributionForPrAgencies() {
	return <ServiceDetailLayout content={servicePages["distribution-for-pr-agencies"]} />;
}

export default DistributionForPrAgencies;
