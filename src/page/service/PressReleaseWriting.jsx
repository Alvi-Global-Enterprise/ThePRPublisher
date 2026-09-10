import ServiceDetailLayout from "../../components/service/ServiceDetailLayout";
import { servicePages } from "../../data/siteContent";

function PressReleaseWriting() {
	return <ServiceDetailLayout content={servicePages["press-release-writing"]} />;
}

export default PressReleaseWriting;
