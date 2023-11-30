import React  from 'react';
import { Link } from 'react-router-dom';

// Layout
//import Header from "../layout/header";
import Footer from "../layout/footer";

// Elements
import Header from "../layout/header";
import ChooseUsSection from "../elements/choose-us";
import ScheduleServiceSection from "../elements/schedule-service";
import TeamOneSection from "../elements/team-1";
import TestimonialSection from "../elements/testimonial";
import { useTranslation } from 'react-i18next';
import HeroBanner from '../elements/widget/HeroBanner';
import InstagramBox from '../elements/widget/InstagramBox';

import bg2 from "../../images/background/bg2.png";

function ServicesBox() {

	const { t } = useTranslation();



	const handleRefresh = (url) => {
		window.location.href = url;
	};
	
		
		return (
			<>
			
				<Header />
				
				<HeroBanner />
				
				
				
				<section className="section-area bg-primary service-wraper1 section-sp2" style={{backgroundImage: "url("+bg2+")", backgroundRepeat: "no-repeat", backgroundPosition: "right top"}}>
					<div className="container">
						<div className="heading-bx text-white d-lg-flex d-md-block align-items-end justify-content-between">
							<div className="clearfix">
								<h6 className="title-ext">OUR SERVICES</h6>
								<h2 className="title mb-0">Mechanical Repair</h2>
							</div>
						</div>
						<div className="row spno">
							<div className="col-xl-3 col-lg-4 col-md-6">
								<div className="feature-container bg-gray-alt feature-bx1 mb-sm-30">
									<div className="icon-lg mb-10 text-primary">
										<i className="flaticon-fuel-1"></i>
									</div>
									<div className="icon-content">
										<h5 className="ttr-tilte text-uppercase">Axle/Drive Shaft Repair</h5>
										<p>There are many variations of passages of Lorem Ipsum available.</p>
										<Link to="/services/mechanical-repair/axil-or-drift-shaft-repair" className="btn-link">Read More</Link>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-lg-4 col-md-6">
								<div className="feature-container feature-bx1 mb-sm-30">
									<div className="icon-lg mb-10 text-primary">
										<i className="flaticon-brake"></i>
									</div>
									<div className="icon-content">
										<h5 className="ttr-tilte text-uppercase">BREAK REPAIR</h5>
										<p>There are many variations of passages of Lorem Ipsum available.</p>
										<Link to="/services/mechanical-repair/break-repair" className="btn-link">Read More</Link>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-lg-4 col-md-6">
								<div className="feature-container bg-gray-alt feature-bx1 mb-sm-30">
									<div className="icon-lg mb-10 text-primary">
										<i className="flaticon-car-4"></i>
									</div>
									<div className="icon-content">
										<h5 className="ttr-tilte text-uppercase">Engine Cooling System Repair</h5>
										<p>There are many variations of passages of Lorem Ipsum available.</p>
										<Link to="/services/mechanical-repair/engine-cooling-system-repair" className="btn-link">Read More</Link>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-lg-4 col-md-6">
								<div className="feature-container feature-bx1 mb-sm-30">
									<div className="icon-lg mb-10 text-primary">
										<i className="flaticon-check-2"></i>
									</div>
									<div className="icon-content">
										<h5 className="ttr-tilte text-uppercase">Gearbox Repair</h5>
										<p>There are many variations of passages of Lorem Ipsum available.</p>
										<Link to="/services/mechanical-repair/gear-box-repair" className="btn-link">Read More</Link>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-lg-4 col-md-6">
								<div className="feature-container feature-bx1 mb-sm-30">
									<div className="icon-lg mb-10 text-primary">
										<i className="flaticon-battery-2"></i>
									</div>
									<div className="icon-content">
										<h5 className="ttr-tilte text-uppercase">Pre-Purchase Inspection</h5>
										<p>There are many variations of passages of Lorem Ipsum available.</p>
										<Link to="/services/mechanical-repair/pre-purchase-inspection" className="btn-link">Read More</Link>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-lg-4 col-md-6">
								<div className="feature-container bg-gray-alt feature-bx1 mb-sm-30">
									<div className="icon-lg mb-10 text-primary">
										<i className="flaticon-paint"></i>
									</div>
									<div className="icon-content">
										<h5 className="ttr-tilte text-uppercase">Suspension Repair</h5>
										<p>There are many variations of passages of Lorem Ipsum available.</p>
										<Link to="/services/mechanical-repair/suspension-repair" className="btn-link">Read More</Link>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-lg-4 col-md-6">
								<div className="feature-container active feature-bx1 mb-sm-30">
									<div className="icon-lg mb-10 text-primary">
										<i className="flaticon-repair-1"></i> 
									</div>
									<div className="icon-content">
										<h5 className="ttr-tilte text-uppercase">Transmission Repair</h5>
										<p>There are many variations of passages of Lorem Ipsum available.</p>
										<Link to="/services/mechanical-repair/touchless-wheel-alignment" className="btn-link">Read More</Link>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-lg-4 col-md-6">
								<div className="feature-container bg-gray-alt feature-bx1">
									<div className="icon-lg mb-10 text-primary">
										<i className="flaticon-engine"></i>
									</div>
									<div className="icon-content">
										<h5 className="ttr-tilte text-uppercase">Touchless Wheel Alignment</h5>
										<p>There are many variations of passages of Lorem Ipsum available.</p>
										<Link to="/services/mechanical-repair/transmission-repair" className="btn-link">Read More</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
                <section className="section-area bg-primary service-wraper1 section-sp2" style={{backgroundImage: "url("+bg2+")", backgroundRepeat: "no-repeat", backgroundPosition: "right top"}}>
					<div className="container">
						<div className="heading-bx text-white d-lg-flex d-md-block align-items-end justify-content-between">
							<div className="clearfix">
								<h6 className="title-ext">OUR SERVICES</h6>
								<h2 className="title mb-0">Electrical Repair</h2>
							</div>
						</div>
						<div className="row spno">
							<div className="col-xl-3 col-lg-4 col-md-6">
								<div className="feature-container bg-gray-alt feature-bx1 mb-sm-30">
									<div className="icon-lg mb-10 text-primary">
										<i className="flaticon-fuel-1"></i>
									</div>
									<div className="icon-content">
										<h5 className="ttr-tilte text-uppercase">AC Repair</h5>
										<p>There are many variations of passages of Lorem Ipsum available.</p>
										<Link to="/services/electrical-repair/ac-repair" className="btn-link">Read More</Link>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-lg-4 col-md-6">
								<div className="feature-container feature-bx1 mb-sm-30">
									<div className="icon-lg mb-10 text-primary">
										<i className="flaticon-brake"></i>
									</div>
									<div className="icon-content">
										<h5 className="ttr-tilte text-uppercase">Camera / Radar Calibration</h5>
										<p>There are many variations of passages of Lorem Ipsum available.</p>
										<Link to="/services/electrical-repair/camera-radar-calibration" className="btn-link">Read More</Link>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-lg-4 col-md-6">
								<div className="feature-container bg-gray-alt feature-bx1 mb-sm-30">
									<div className="icon-lg mb-10 text-primary">
										<i className="flaticon-car-4"></i>
									</div>
									<div className="icon-content">
										<h5 className="ttr-tilte text-uppercase">Car Software Repair & Programming</h5>
										<p>There are many variations of passages of Lorem Ipsum available.</p>
										<Link to="/services/electrical-repair/car-repair-and-software-programming" className="btn-link">Read More</Link>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-lg-4 col-md-6">
								<div className="feature-container feature-bx1 mb-sm-30">
									<div className="icon-lg mb-10 text-primary">
										<i className="flaticon-check-2"></i>
									</div>
									<div className="icon-content">
										<h5 className="ttr-tilte text-uppercase">Comfort System Repair</h5>
										<p>There are many variations of passages of Lorem Ipsum available.</p>
										<Link to="/services/electrical-repair/comfort-system-repair" className="btn-link">Read More</Link>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-lg-4 col-md-6">
								<div className="feature-container feature-bx1 mb-sm-30">
									<div className="icon-lg mb-10 text-primary">
										<i className="flaticon-battery-2"></i>
									</div>
									<div className="icon-content">
										<h5 className="ttr-tilte text-uppercase">Engine Control Unit Repair</h5>
										<p>There are many variations of passages of Lorem Ipsum available.</p>
										<Link to="/services/electrical-repair/engine-control-unit-repair" className="btn-link">Read More</Link>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-lg-4 col-md-6">
								<div className="feature-container bg-gray-alt feature-bx1 mb-sm-30">
									<div className="icon-lg mb-10 text-primary">
										<i className="flaticon-paint"></i>
									</div>
									<div className="icon-content">
										<h5 className="ttr-tilte text-uppercase">Navigation Update</h5>
										<p>There are many variations of passages of Lorem Ipsum available.</p>
										<Link to="/services/electrical-repair/navigation-update" className="btn-link">Read More</Link>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-lg-4 col-md-6">
								<div className="feature-container active feature-bx1 mb-sm-30">
									<div className="icon-lg mb-10 text-primary">
										<i className="flaticon-repair-1"></i> 
									</div>
									<div className="icon-content">
										<h5 className="ttr-tilte text-uppercase">Retrofit</h5>
										<p>There are many variations of passages of Lorem Ipsum available.</p>
										<Link to="/services/electrical-repair/retrofit" className="btn-link">Read More</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
                <section className="section-area bg-primary service-wraper1 section-sp2" style={{backgroundImage: "url("+bg2+")", backgroundRepeat: "no-repeat", backgroundPosition: "right top"}}>
					<div className="container">
						<div className="heading-bx text-white d-lg-flex d-md-block align-items-end justify-content-between">
							<div className="clearfix">
								<h6 className="title-ext">OUR SERVICES</h6>
								<h2 className="title mb-0">Body Shop</h2>
							</div>
						</div>
						<div className="row spno">
							<div className="col-xl-3 col-lg-4 col-md-6">
								<div className="feature-container bg-gray-alt feature-bx1 mb-sm-30">
									<div className="icon-lg mb-10 text-primary">
										<i className="flaticon-fuel-1"></i>
									</div>
									<div className="icon-content">
										<h5 className="ttr-tilte text-uppercase">Smart Body Repair</h5>
										<p>There are many variations of passages of Lorem Ipsum available.</p>
										<Link to="/services/body-shop/smart-body-repair" className="btn-link">Read More</Link>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-lg-4 col-md-6">
								<div className="feature-container feature-bx1 mb-sm-30">
									<div className="icon-lg mb-10 text-primary">
										<i className="flaticon-brake"></i>
									</div>
									<div className="icon-content">
										<h5 className="ttr-tilte text-uppercase">Car Detailing</h5>
										<p>There are many variations of passages of Lorem Ipsum available.</p>
										<Link to="/services/body-shop/car-detailing" className="btn-link">Read More</Link>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-lg-4 col-md-6">
								<div className="feature-container bg-gray-alt feature-bx1 mb-sm-30">
									<div className="icon-lg mb-10 text-primary">
										<i className="flaticon-car-4"></i>
									</div>
									<div className="icon-content">
										<h5 className="ttr-tilte text-uppercase">Car Tinting</h5>
										<p>There are many variations of passages of Lorem Ipsum available.</p>
										<Link to="/services/body-shop/car-tinting" className="btn-link">Read More</Link>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-lg-4 col-md-6">
								<div className="feature-container feature-bx1 mb-sm-30">
									<div className="icon-lg mb-10 text-primary">
										<i className="flaticon-check-2"></i>
									</div>
									<div className="icon-content">
										<h5 className="ttr-tilte text-uppercase">Car DIP Color</h5>
										<p>There are many variations of passages of Lorem Ipsum available.</p>
										<Link to="/services/body-shop/car-dip-color" className="btn-link">Read More</Link>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-lg-4 col-md-6">
								<div className="feature-container feature-bx1 mb-sm-30">
									<div className="icon-lg mb-10 text-primary">
										<i className="flaticon-battery-2"></i>
									</div>
									<div className="icon-content">
										<h5 className="ttr-tilte text-uppercase">Ceramic Coating</h5>
										<p>There are many variations of passages of Lorem Ipsum available.</p>
										<Link to="/services/body-shop/ceramic-coating" className="btn-link">Read More</Link>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-lg-4 col-md-6">
								<div className="feature-container bg-gray-alt feature-bx1 mb-sm-30">
									<div className="icon-lg mb-10 text-primary">
										<i className="flaticon-paint"></i>
									</div>
									<div className="icon-content">
										<h5 className="ttr-tilte text-uppercase">Brake Caliper painting</h5>
										<p>There are many variations of passages of Lorem Ipsum available.</p>
										<Link to="/services/body-shop/break-caliper-painting" className="btn-link">Read More</Link>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-lg-4 col-md-6">
								<div className="feature-container active feature-bx1 mb-sm-30">
									<div className="icon-lg mb-10 text-primary">
										<i className="flaticon-repair-1"></i> 
									</div>
									<div className="icon-content">
										<h5 className="ttr-tilte text-uppercase">Paint Protcetion Film</h5>
										<p>There are many variations of passages of Lorem Ipsum available.</p>
										<Link to="/services/body-shop/paint-protection-film" className="btn-link">Read More</Link>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-lg-4 col-md-6">
								<div className="feature-container bg-gray-alt feature-bx1">
									<div className="icon-lg mb-10 text-primary">
										<i className="flaticon-engine"></i>
									</div>
									<div className="icon-content">
										<h5 className="ttr-tilte text-uppercase">WindShield Repair</h5>
										<p>There are many variations of passages of Lorem Ipsum available.</p>
										<Link to="/services/body-shop/wind-shield-repair" className="btn-link">Read More</Link>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-lg-4 col-md-6">
								<div className="feature-container bg-gray-alt feature-bx1">
									<div className="icon-lg mb-10 text-primary">
										<i className="flaticon-engine"></i>
									</div>
									<div className="icon-content">
										<h5 className="ttr-tilte text-uppercase">Classic Car Restoration</h5>
										<p>There are many variations of passages of Lorem Ipsum available.</p>
										<Link to="/services/body-shop/classic-car-restoration" className="btn-link">Read More</Link>
									</div>
								</div>
							</div>
							
						</div>
					</div>
				</section>
                <section className="section-area bg-primary service-wraper1 section-sp2" style={{backgroundImage: "url("+bg2+")", backgroundRepeat: "no-repeat", backgroundPosition: "right top"}}>
					<div className="container">
						<div className="heading-bx text-white d-lg-flex d-md-block align-items-end justify-content-between">
							<div className="clearfix">
								<h6 className="title-ext">OUR SERVICES</h6>
								<h2 className="title mb-0">Other Services</h2>
							</div>
						</div>
						<div className="row spno">
							<div className="col-xl-3 col-lg-4 col-md-6">
								<div className="feature-container bg-gray-alt feature-bx1 mb-sm-30">
									<div className="icon-lg mb-10 text-primary">
										<i className="flaticon-fuel-1"></i>
									</div>
									<div className="icon-content">
										<h5 className="ttr-tilte text-uppercase">Car Recovery</h5>
										<p>There are many variations of passages of Lorem Ipsum available.</p>
										<Link to="/services/other-services/car-recovery" className="btn-link">Read More</Link>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-lg-4 col-md-6">
								<div className="feature-container feature-bx1 mb-sm-30">
									<div className="icon-lg mb-10 text-primary">
										<i className="flaticon-brake"></i>
									</div>
									<div className="icon-content">
										<h5 className="ttr-tilte text-uppercase">Fleet Management</h5>
										<p>There are many variations of passages of Lorem Ipsum available.</p>
										<Link to="/services/other-services/fleet-management" className="btn-link">Read More</Link>
									</div>
								</div>
							</div>
							
							<div className="col-xl-3 col-lg-4 col-md-6">
								<div className="feature-container feature-bx1 mb-sm-30">
									<div className="icon-lg mb-10 text-primary">
										<i className="flaticon-brake"></i>
									</div>
									<div className="icon-content">
										<h5 className="ttr-tilte text-uppercase">Electric Car Repair</h5>
										<p>There are many variations of passages of Lorem Ipsum available.</p>
										<Link to="/services/other-services/electric-car-repair" className="btn-link">Read More</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				
				<ChooseUsSection />
				
				
				
				
				<TestimonialSection />
				<ScheduleServiceSection />
				<InstagramBox/>
				
				<Footer />
				
			</>
		);
}

export default ServicesBox;