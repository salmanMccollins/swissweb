import React, { useRef, useEffect }  from 'react';
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
import bnrImg from "../../images/newimages/package-banner.webp";
function ServicesBox() {

	const { t } = useTranslation();



	// const handleRefresh = (url) => {
	// 	window.location.href = url;
	// };
	
	const myRef = useRef();

  function scrollToComponent() {
    if (window.location.hash === '#s1') {
      myRef.current.scrollIntoView();
      myRef.current.focus();
    }
  }

  useEffect( () => scrollToComponent(), [] )
		
		return (
			<>
			
				<Header />
				
				<div className="page-banner ovbl-dark" style={{backgroundImage: "url("+bnrImg+")"}}>
						<div className="container">
							<div className="page-banner-entry text-center">
								<h1><span>Our Services</span></h1>
								<nav aria-label="breadcrumb" className="breadcrumb-row">
									<ul className="breadcrumb">
										<li className="breadcrumb-item"><Link to="/"><i className="las la-home"></i>Home</Link></li>
										<li className="breadcrumb-item active" aria-current="page">Our Services</li>
									</ul>
								</nav>
							</div>
						</div>
					</div>
				
				
				
				<section id="s1" ref={myRef} className="section-area bg-primary service-wraper1 section-sp2" style={{backgroundImage: "url("+bg2+")", backgroundRepeat: "no-repeat", backgroundPosition: "right top"}}>
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
										<span className='serviceicon service1'>&nbsp;</span>
									</div>
									<div className="icon-content">
										<h5 className="ttr-tilte text-uppercase">Axle/Drive Shaft Repair</h5>
										<p>If you need premium axle/driveshaft repair in Saudi Arabia from the experts, trust our team without any second thoughts.</p>
										<Link to="/services/mechanical-repair/axil-or-drift-shaft-repair" className="btn-link">Read More</Link>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-lg-4 col-md-6">
								<div className="feature-container feature-bx1 mb-sm-30">
									<div className="icon-lg mb-10 text-primary">
									<span className='serviceicon service2'>&nbsp;</span>
									</div>
									<div className="icon-content">
										<h5 className="ttr-tilte text-uppercase">BREAK REPAIR</h5>
										<p>In order to keep your car brake system in top shape, it is essential to keep it well-maintained. At Royal Swiss Auto Services, we strive to provide all possible brake repair services in a efficient way.</p>
										<Link to="/services/mechanical-repair/break-repair" className="btn-link">Read More</Link>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-lg-4 col-md-6">
								<div className="feature-container bg-gray-alt feature-bx1 mb-sm-30">
									<div className="icon-lg mb-10 text-primary">
									<span className='serviceicon service3'>&nbsp;</span>
									</div>
									<div className="icon-content">
										<h5 className="ttr-tilte text-uppercase">Engine Cooling System Repair</h5>
										<p>The efficient performance of your car engine relies on a well-performing cooling system. At our workshop in Saudi Arabia, we provide all the maintenance and repairs needed for your car engine cooling system with greater precision.</p>
										<Link to="/services/mechanical-repair/engine-cooling-system-repair" className="btn-link">Read More</Link>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-lg-4 col-md-6">
								<div className="feature-container feature-bx1 mb-sm-30">
									<div className="icon-lg mb-10 text-primary">
									<span className='serviceicon service4'>&nbsp;</span>
									</div>
									<div className="icon-content">
										<h5 className="ttr-tilte text-uppercase">Gearbox Repair</h5>
										<p>Regular maintenance and prompt attention to any signs of gearbox problems can contribute to the longevity of your vehicle's transmission system. Trust us for various gearbox repairs in your car.</p>
										<Link to="/services/mechanical-repair/gear-box-repair" className="btn-link">Read More</Link>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-lg-4 col-md-6">
								<div className="feature-container feature-bx1 mb-sm-30">
									<div className="icon-lg mb-10 text-primary">
									<span className='serviceicon service5'>&nbsp;</span>
									</div>
									<div className="icon-content">
										<h5 className="ttr-tilte text-uppercase">Pre-Purchase Inspection</h5>
										<p>Purchasing a used car in Saudi Arabia? Get it inspected by our experienced team to make a better decision on your purchases.</p>
										<Link to="/services/mechanical-repair/pre-purchase-inspection" className="btn-link">Read More</Link>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-lg-4 col-md-6">
								<div className="feature-container bg-gray-alt feature-bx1 mb-sm-30">
									<div className="icon-lg mb-10 text-primary">
									<span className='serviceicon service6'>&nbsp;</span>
									</div>
									<div className="icon-content">
										<h5 className="ttr-tilte text-uppercase">Suspension Repair</h5>
										<p>The smoother ride of your car depends on the suspension's health. Get it well-maintained by our suspension repair specialists to enjoy the luxury of your car.</p>
										<Link to="/services/mechanical-repair/suspension-repair" className="btn-link">Read More</Link>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-lg-4 col-md-6">
								<div className="feature-container active feature-bx1 mb-sm-30">
									<div className="icon-lg mb-10 text-primary">
									<span className='serviceicon service7'>&nbsp;</span>
									</div>
									<div className="icon-content">
										<h5 className="ttr-tilte text-uppercase">Transmission Repair</h5>
										<p>If you're experiencing issues with your transmission, such as slipping gears or strange noises, get in touch with our service advisors in Saudi Arabia.</p>
										<Link to="/services/mechanical-repair/touchless-wheel-alignment" className="btn-link">Read More</Link>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-lg-4 col-md-6">
								<div className="feature-container bg-gray-alt feature-bx1">
									<div className="icon-lg mb-10 text-primary">
									<span className='serviceicon service8'>&nbsp;</span>
									</div>
									<div className="icon-content">
										<h5 className="ttr-tilte text-uppercase">Touchless Wheel Alignment</h5>
										<p>Getting the wheel alignment in Saudi Arabia is no more a hassle, with our advanced systems at the workshop the wheel alignment for all makes and models can be done in minutes.</p>
										<Link to="/services/mechanical-repair/transmission-repair" className="btn-link">Read More</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section id="s2" className="section-area bg-primary service-wraper1 section-sp2" style={{backgroundImage: "url("+bg2+")", backgroundRepeat: "no-repeat", backgroundPosition: "right top"}}>
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
									<span className='serviceicon service15'>&nbsp;</span>
									</div>
									<div className="icon-content">
										<h5 className="ttr-tilte text-uppercase">Smart Body Repair</h5>
										<p>Smart body repairs are quicker and cost-effective, get it done by our experts to protect the body, paint & panel works of your car.</p>
										<Link to="/services/body-shop/smart-body-repair" className="btn-link">Read More</Link>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-lg-4 col-md-6">
								<div className="feature-container feature-bx1 mb-sm-30">
									<div className="icon-lg mb-10 text-primary">
									<span className='serviceicon service16'>&nbsp;</span>
									</div>
									<div className="icon-content">
										<h5 className="ttr-tilte text-uppercase">Car Detailing</h5>
										<p>Experience the premium car detailing services in Saudi Arabia from us to provide your car with a new and shiny showroom look at competitive pricing.</p>
										<Link to="/services/body-shop/car-detailing" className="btn-link">Read More</Link>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-lg-4 col-md-6">
								<div className="feature-container bg-gray-alt feature-bx1 mb-sm-30">
									<div className="icon-lg mb-10 text-primary">
									<span className='serviceicon service17'>&nbsp;</span>
									</div>
									<div className="icon-content">
										<h5 className="ttr-tilte text-uppercase">Car Tinting</h5>
										<p>Being a reliable workshop providing car tinting services in Saudi Arabia, we provide the best window tint installation with premium materials.</p>
										<Link to="/services/body-shop/car-tinting" className="btn-link">Read More</Link>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-lg-4 col-md-6">
								<div className="feature-container feature-bx1 mb-sm-30">
									<div className="icon-lg mb-10 text-primary">
									<span className='serviceicon service18'>&nbsp;</span>
									</div>
									<div className="icon-content">
										<h5 className="ttr-tilte text-uppercase">Car DIP Color</h5>
										<p>Get the appearance of your car changed with our car dip colour services in Saudi Arabia with greater precision from our experienced technicians.</p>
										<Link to="/services/body-shop/car-dip-color" className="btn-link">Read More</Link>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-lg-4 col-md-6">
								<div className="feature-container feature-bx1 mb-sm-30">
									<div className="icon-lg mb-10 text-primary">
									<span className='serviceicon service19'>&nbsp;</span>
									</div>
									<div className="icon-content">
										<h5 className="ttr-tilte text-uppercase">Ceramic Coating</h5>
										<p>Looking out for the ideal choice to protect the exterior of your car in an affordable and safer way than a ceramic coating is the finest choice.</p>
										<Link to="/services/body-shop/ceramic-coating" className="btn-link">Read More</Link>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-lg-4 col-md-6">
								<div className="feature-container bg-gray-alt feature-bx1 mb-sm-30">
									<div className="icon-lg mb-10 text-primary">
									<span className='serviceicon service20'>&nbsp;</span>
									</div>
									<div className="icon-content">
										<h5 className="ttr-tilte text-uppercase">Brake Caliper painting</h5>
										<p>Want to keep your brake calipers good, unique and rust-free? Then consider getting brake caliper painting services from our team in Saudi Arabia.</p>
										<Link to="/services/body-shop/break-caliper-painting" className="btn-link">Read More</Link>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-lg-4 col-md-6">
								<div className="feature-container active feature-bx1 mb-sm-30">
									<div className="icon-lg mb-10 text-primary">
									<span className='serviceicon service21'>&nbsp;</span>
									</div>
									<div className="icon-content">
										<h5 className="ttr-tilte text-uppercase">Paint Protcetion Film</h5>
										<p>One of the most effective ways to protect your car paint surfaces from scratches and dents is paint protection film. Trust us to get it done with the greatest precision.</p>
										<Link to="/services/body-shop/paint-protection-film" className="btn-link">Read More</Link>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-lg-4 col-md-6">
								<div className="feature-container bg-gray-alt feature-bx1">
									<div className="icon-lg mb-10 text-primary">
									<span className='serviceicon service22'>&nbsp;</span>
									</div>
									<div className="icon-content">
										<h5 className="ttr-tilte text-uppercase">WindShield Repair</h5>
										<p>A damaged windshield might reduce your visibility, so get it repaired or replaced by our experts in an affordable way.</p>
										<Link to="/services/body-shop/wind-shield-repair" className="btn-link">Read More</Link>
									</div>
								</div>
							</div>
							{/* <div className="col-xl-3 col-lg-4 col-md-6">
								<div className="feature-container bg-gray-alt feature-bx1">
									<div className="icon-lg mb-10 text-primary">
									<span className='serviceicon service23'>&nbsp;</span>
									</div>
									<div className="icon-content">
										<h5 className="ttr-tilte text-uppercase">Classic Car Restoration</h5>
										<p>There are many variations of passages of Lorem Ipsum available.</p>
										<Link to="/services/body-shop/classic-car-restoration" className="btn-link">Read More</Link>
									</div>
								</div>
							</div> */}
							
						</div>
					</div>
				</section>
                <section id="s3" className="section-area bg-primary service-wraper1 section-sp2" style={{backgroundImage: "url("+bg2+")", backgroundRepeat: "no-repeat", backgroundPosition: "right top"}}>
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
									<span className='serviceicon service8'>&nbsp;</span>
									</div>
									<div className="icon-content">
										<h5 className="ttr-tilte text-uppercase">AC Repair</h5>
										<p>A good performing air conditioning system is essential for a smoother journey despite the temperature outside. At Royal Swiss Auto Services, we provide premium car AC repair services.</p>
										<Link to="/services/electrical-repair/ac-repair" className="btn-link">Read More</Link>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-lg-4 col-md-6">
								<div className="feature-container feature-bx1 mb-sm-30">
									<div className="icon-lg mb-10 text-primary">
									<span className='serviceicon service9'>&nbsp;</span>
									</div>
									<div className="icon-content">
										<h5 className="ttr-tilte text-uppercase">Camera / Radar Calibration</h5>
										<p>Our efficient camera/radar calibration team will ensure the efficient performance of the advanced systems in your car.</p>
										<Link to="/services/electrical-repair/camera-radar-calibration" className="btn-link">Read More</Link>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-lg-4 col-md-6">
								<div className="feature-container bg-gray-alt feature-bx1 mb-sm-30">
									<div className="icon-lg mb-10 text-primary">
									<span className='serviceicon service10'>&nbsp;</span>
									</div>
									<div className="icon-content">
										<h5 className="ttr-tilte text-uppercase">Car Software Repair & Programming</h5>
										<p>Planning to get the software repairs on your car or looking for software upgrades to your electric car, At Royal Swiss Auto Services we provide efficient care for your car.</p>
										<Link to="/services/electrical-repair/car-repair-and-software-programming" className="btn-link">Read More</Link>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-lg-4 col-md-6">
								<div className="feature-container feature-bx1 mb-sm-30">
									<div className="icon-lg mb-10 text-primary">
									<span className='serviceicon service11'>&nbsp;</span>
									</div>
									<div className="icon-content">
										<h5 className="ttr-tilte text-uppercase">Comfort System Repair</h5>
										<p>We keep all the comfort systems in your car in premium condition, without creating the situation for you to spend more on it.</p>
										<Link to="/services/electrical-repair/comfort-system-repair" className="btn-link">Read More</Link>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-lg-4 col-md-6">
								<div className="feature-container feature-bx1 mb-sm-30">
									<div className="icon-lg mb-10 text-primary">
									<span className='serviceicon service12'>&nbsp;</span>
									</div>
									<div className="icon-content">
										<h5 className="ttr-tilte text-uppercase">Engine Control Unit Repair</h5>
										<p>Trust us to keep your car engine in top condition and stay away from expensive repairs.</p>
										<Link to="/services/electrical-repair/engine-control-unit-repair" className="btn-link">Read More</Link>
									</div>
								</div>
							</div>
							{/* <div className="col-xl-3 col-lg-4 col-md-6">
								<div className="feature-container bg-gray-alt feature-bx1 mb-sm-30">
									<div className="icon-lg mb-10 text-primary">
									<span className='serviceicon service13'>&nbsp;</span>
									</div>
									<div className="icon-content">
										<h5 className="ttr-tilte text-uppercase">Navigation Update</h5>
										<p>The engine control unit has greater responsibility like determining the performance of your vehicle and ensuring a safer ride.

The problems with the engine control unit may arrive due to various reasons but regularly inspecting the engine control unit of the car can save you both time and money. The engine control unit of the car is highly intricate and it is always good to rely on experienced technicians to handle it.</p>
										<Link to="/services/electrical-repair/navigation-update" className="btn-link">Read More</Link>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-lg-4 col-md-6">
								<div className="feature-container active feature-bx1 mb-sm-30">
									<div className="icon-lg mb-10 text-primary">
									<span className='serviceicon service14'>&nbsp;</span>
									</div>
									<div className="icon-content">
										<h5 className="ttr-tilte text-uppercase">Retrofit</h5>
										<p>There are many variations of passages of Lorem Ipsum available.</p>
										<Link to="/services/electrical-repair/retrofit" className="btn-link">Read More</Link>
									</div>
								</div>
							</div> */}
						</div>
					</div>
				</section>
                
                <section id="s4" className="section-area bg-primary service-wraper1 section-sp2" style={{backgroundImage: "url("+bg2+")", backgroundRepeat: "no-repeat", backgroundPosition: "right top"}}>
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
										<span className='serviceicon service24'>&nbsp;</span>
									</div>
									<div className="icon-content">
										<h5 className="ttr-tilte text-uppercase">Car Recovery</h5>
										<p>Experience the premium car recovery services in Saudi Arabia with our professional team during unexpected breakdowns or accidents.</p>
										<Link to="/services/other-services/car-recovery" className="btn-link">Read More</Link>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-lg-4 col-md-6">
								<div className="feature-container feature-bx1 mb-sm-30">
									<div className="icon-lg mb-10 text-primary">
									<span className='serviceicon service25'>&nbsp;</span>
									</div>
									<div className="icon-content">
										<h5 className="ttr-tilte text-uppercase">Fleet Management</h5>
										<p>Looking for premium fleet maintenance services in Saudi Arabia, Trust no other than Royal Swiss Auto Services.</p>
										<Link to="/services/other-services/fleet-management" className="btn-link">Read More</Link>
									</div>
								</div>
							</div>
							
							<div className="col-xl-3 col-lg-4 col-md-6">
								<div className="feature-container feature-bx1 mb-sm-30">
									<div className="icon-lg mb-10 text-primary">
									<span className='serviceicon service26'>&nbsp;</span>
									</div>
									<div className="icon-content">
										<h5 className="ttr-tilte text-uppercase">Electric Car Repair</h5>
										<p>We provide all the maintenance needed for your luxury car to ensure its longevity and powerful performance.</p>
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