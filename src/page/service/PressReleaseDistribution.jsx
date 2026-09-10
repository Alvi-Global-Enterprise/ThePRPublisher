import ServiceDetailLayout from "../../components/service/ServiceDetailLayout";
import { servicePages } from "../../data/siteContent";

function PressReleaseDistribution() {
	return <ServiceDetailLayout content={servicePages["press-release-distribution"]} />;
}

export default PressReleaseDistribution;
