import { createBrowserRouter } from "react-router-dom";
import LayoutTwo from "../components/layout/LayoutTwo.jsx";
import Layout from "../components/layout/index.jsx";
import ErrorPage from "../error-page";
import AboutUs from "../page/AboutUs";
import ContactUs from "../page/ContactUs";
import Pricing from "../page/Pricing";
import BlogPage from "../page/blog/BlogPage.jsx";
import SingleBlogPage from "../page/blog/SingleBlog.jsx";
import HomeTwo from "../page/home/HomeTwo.jsx";
import PortfolioOneColumn from "../page/portfolio/PortfolioOneColoum";
import SinglePortfolio from "../page/portfolio/SinglePortfolio";
import Service from "../page/service";
import PressReleaseDistribution from "../page/service/PressReleaseDistribution.jsx";
import PressReleaseWriting from "../page/service/PressReleaseWriting.jsx";
import DistributionForPrAgencies from "../page/service/DistributionForPrAgencies.jsx";
import GuaranteedPublishing from "../page/service/GuaranteedPublishing.jsx";
import UsRegionalNewswire from "../page/service/UsRegionalNewswire.jsx";
import SeoBoostServices from "../page/service/SeoBoostServices.jsx";
import Faq from "../page/utility/Faq.jsx";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <LayoutTwo />,
				children: [
					{
						path: "/",
						element: <HomeTwo />,
					},
					{
						path: "/about-us",
						element: <AboutUs />,
					},
					{
						path: "/contact-us",
						element: <ContactUs />,
					},
					{
						path: "/faq",
						element: <Faq />,
					},
					{
						path: "/pricing",
						element: <Pricing />,
					},
					{
						path: "/blog",
						element: <BlogPage />,
					},
					{
						path: "/single-blog",
						element: <SingleBlogPage />,
					},
					{
						path: "/service",
						element: <Service />,
					},
					{
						path: "/press-release-distribution",
						element: <PressReleaseDistribution />,
					},
					{
						path: "/press-release-writing",
						element: <PressReleaseWriting />,
					},
					{
						path: "/distribution-for-pr-agencies",
						element: <DistributionForPrAgencies />,
					},
					{
						path: "/guaranteed-publishing",
						element: <GuaranteedPublishing />,
					},
					{
						path: "/us-regional-newswire",
						element: <UsRegionalNewswire />,
					},
					{
						path: "/seo-boost-services",
						element: <SeoBoostServices />,
					},
					{
						path: "/portfolio-one",
						element: <PortfolioOneColumn />,
					},
					{
						path: "/single-portfolio",
						element: <SinglePortfolio />,
					},
					{
						path: "*",
						element: <ErrorPage />,
					},
				],
			},
		],
	},
]);
