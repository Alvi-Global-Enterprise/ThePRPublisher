import DesktopNav from "../../common/navigation/desktop-nav/DesktopNav";
import Dropdown from "../../common/navigation/desktop-nav/Dropdown";
import DropdownItem from "../../common/navigation/desktop-nav/DropdownItem";
import NavItem from "../../common/navigation/desktop-nav/NavItem";
import { menuItemsData } from "../../common/navigation/mobile-nav/menuItemsData";
import MobileNavbar from "../../common/navigation/mobile-nav/MobileNavbar";
import HeaderButton from "./HeaderButton";
import HeaderLogo from "./HeaderLogo";

function Header() {
	return (
		<header
			className="site-header site-header--menu-center aximo-header-section aximo-header2 bg-light2"
			id="sticky-menu"
		>
			<div className="container">
				<nav className="navbar site-navbar">
					<HeaderLogo />
					<div className="menu-block-wrapper">
						<DesktopNav>
							<NavItem url="/">Home</NavItem>
							<NavItem url="about-us">About</NavItem>
							<NavItem dropdown title="Services">
								<Dropdown className="services-dropdown">
									<DropdownItem url="press-release-distribution">Press Release Distribution</DropdownItem>
									<DropdownItem url="press-release-writing">Press Release Writing</DropdownItem>
									<DropdownItem url="distribution-for-pr-agencies">Distribution for PR Agencies</DropdownItem>
									<DropdownItem url="guaranteed-publishing">Guaranteed Publishing</DropdownItem>
									<DropdownItem url="us-regional-newswire">US Regional Newswire</DropdownItem>
									<DropdownItem url="seo-boost-services">SEO Boost Services</DropdownItem>
								</Dropdown>
							</NavItem>
							<NavItem url="pricing">Pricing</NavItem>
							<NavItem url="portfolio-one">Portfolio</NavItem>
							<NavItem url="blog">Blog</NavItem>
							<NavItem url="contact-us">Contact</NavItem>
						</DesktopNav>
					</div>
					<HeaderButton />
					<MobileNavbar menuItemsData={menuItemsData} title="ThePRPublisher" />
				</nav>
			</div>
		</header>
	);
}

export default Header;
