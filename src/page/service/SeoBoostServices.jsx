import ServiceDetailLayout from "../../components/service/ServiceDetailLayout";
import { servicePages } from "../../data/siteContent";

function SeoBoostServices() {
	return <ServiceDetailLayout content={servicePages["seo-boost-services"]} />;
}

export default SeoBoostServices;
