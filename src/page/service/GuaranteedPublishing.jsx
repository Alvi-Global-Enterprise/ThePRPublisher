import ServiceDetailLayout from "../../components/service/ServiceDetailLayout";
import { servicePages } from "../../data/siteContent";

function GuaranteedPublishing() {
	return <ServiceDetailLayout content={servicePages["guaranteed-publishing"]} />;
}

export default GuaranteedPublishing;
