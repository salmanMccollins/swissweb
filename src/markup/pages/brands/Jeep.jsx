import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Accordion } from "react-bootstrap";

// Layout
import Header from "../../layout/header";
import Footer from "../../layout/footer";

// Elements
import WidgetBrochure from "../../elements/widget/widget-brochure";
import WidgetHelp from "../../elements/widget/widget-help";
import ScheduleServiceSection from "../../elements/schedule-service";
import TestimonialSection from "../../elements/testimonial";
import InstagramBox from "../../elements/widget/InstagramBox";
import OurBrandsLayout from "../../elements/widget/OurBrandsLayout";

// Images
import bnrImg from "../../../images/carbrands/Jeep.webp";
import serviceSectionPic3 from "../../../images/service-section/pic3.jpg";


class Jeep extends Component{
	
	render(){
		return (
			<>
			<Header />
	
			<div className="page-content bg-white">
			  <div
				className="page-banner ovbl-dark"
				style={{ backgroundImage: "url(" + bnrImg + ")" }}
			  >
				<div className="container">
				  <div className="page-banner-entry text-center">
					<h1>
					  <span>
					  BEST INDEPENDENT JEEP SERVICE CENTER IN SAUDI ARABIA
					  </span>
					</h1>
					<nav aria-label="breadcrumb" className="breadcrumb-row">
					  <ul className="breadcrumb">
						<li className="breadcrumb-item">
						  <Link to="/">
							<i className="las la-home"></i>Home
						  </Link>
						</li>
						<li className="breadcrumb-item">
						  <Link to="/ourbrands">
							Brands
						  </Link>
						</li>
						<li className="breadcrumb-item active" aria-current="page">
						Jeep
						</li>
					  </ul>
					</nav>
				  </div>
				</div>
			  </div>
	
			  <div className="section-area section-sp2 bg-white">
				<div className="container">
				  <div className="row">
					<div className="col-lg-4 col-md-5">
					  <aside className="sticky-top pb-1">
						<WidgetBrochure />
	
						<WidgetHelp />
					  </aside>
					</div>
					<div className="col-lg-8 col-md-7">
					  <div className="row">
						<div className="col-xl-6">
						  <div className="ttr-media mb-30">
							<img src={serviceSectionPic3} alt="" />
						  </div>
						</div>
						<div className="col-xl-6">
						  <h4 className="title mb-10">OUR JEEP SERVICE BENEFITS</h4>
						  <p className="mb-20">
						  We know about your vehicle needs, so we provide the most reliable Jeep maintenance & services.
						  </p>
						  <ul className="list-check-squer mb-30">
							<li>
							Dealership alternative Jeep service in Saudi Arabia
							</li>
							<li>Competitive pricing</li>
							<li>Independently owned & operated</li>
							<li>Faster turnaround time</li>
							<li>100% satisfaction</li>
						  </ul>
						</div>
					  </div>
	
					  <div className="mb-10 ContentBox2">
						<div className="head-text mb-30">
						  <h4 className="title mb-15">
						  EXPERT JEEP MAINTENANCE & SERVICES IN SAUDI ARABIA
						  </h4>
						  <h5 className="mb-15">
							<b>
							  “Jeep: The ultimate adventure vehicle that everyone wishes to ride”
							</b>
						  </h5>
						  <p className="mb-15">
						  At Royal Swiss Auto Services, we believe every Jeep vehicle deserves premium care without any compromise on quality. This is why we go above and beyond to provide extraordinary Jeep service & repair in Saudi Arabia.
						  </p>
						  <p className="mb-15">
						  Our well-established Jeep workshop in Saudi Arabia will provide high-standard Jeep services & repairs to our customers in a vast area that includes Riyadh, Dammam, and Jeddah.
Our team of experienced Jeep technicians can handle various models like Jeep Wrangler, Jeep Cherokee or any other with the greatest precision. We assure you that your hard-earned investment will perform at its peak without providing you with expensive repair bills.

						  </p>
						  <h5 className="mb-15 text-uppercase">
							<b>We are passionate about handling Jeep vehicles</b>
						  </h5>
						  <p className="mb-15">
						  We understand how intricate the electrical and mechanical components of Jeep vehicles are, so our technicians carefully inspect your vehicle and analyze its condition before starting up with any service or repairs. So you can always be confident that your vehicle is in safe hands.
We use only genuine spare parts in case of replacement so that your Jeep stays at the top in terms of performance, safety and longevity.

						  </p>
						</div>
						<div className="row">
						  <h5 className="mb-15 text-uppercase">
							<b>What makes Royal Swiss Auto Services ideal for Jeep service in Saudi Arabia?</b>
						  </h5>
						  <div className="col-xl-12">
							<ul className="list-check-squer">
							  <li>
							  The ultra-modern, state-of-the-art Jeep workshop in Saudi Arabia
							  </li>
							  <li>
								Engine room dedicated to engine repair, engine
								refurbishment, or engine replacement
							  </li>
							  <li>
								Highly qualified and certified technicians
								specialized in the brands we serve.
							  </li>
							  <li>Spare parts department and own storage.</li>
							  <li>
								A professional and multicultural customer support
								team, we speak your language!
							  </li>
							  <li>
								Up to 15,000 different spare parts available in
								stock
							  </li>
							</ul>
						  </div>
						</div>
					  </div>
					  <div className="head-text mb-30">
						<h4 className="title mb-10">
						GET THE COMPREHENSIVE JEEP SERVICES IN SAUDI ARABIA AT EASE
						</h4>
						<p className="mb-15">
						At our Jeep service center in the Kingdom of Saudi Arabia, we provide everything from routine maintenance to complex engine or other expensive powertrain components repairs under one shelter, so our customers can enjoy hassle-free vehicle maintenance.
						</p>
						<p className="mb-15">
						By addressing all our customer’s Jeep maintenance needs with greater trust and transparency, we have gained a huge customer base over the years.
Our goal is to ensure the dealership's range of Jeep services for all current and past models at competitive pricing without any compromise on the quality of workmanship.

						</p>
					  </div>
					</div>
				  </div>
				</div>
			  </div>
			</div>
			<section className="section-area section-sp2 ServiceBox1">
			  <div className="container">
				<div class="heading-bx text-center">
				  <h6 class="title-ext text-primary">SCHEDULE YOUR JEEP</h6>
				  <h2 class="title mb-0">SERVICE OR REPAIR IN SAUDI ARABIA WITH US</h2>
				  <p className='mb-10'>We look forward to providing you with the care and dedication your Jeep deserves. Schedule your next Jeep service or repair appointment with us today by dialling us at 966 53 969 9984 or visiting us directly at our workshop.

				  </p>
				</div>
				<div className="SerGridWrap">
				  <div className="row mb-10">
					<div className="col-xl-4 col-sm-12 col-12">
					  <div className="counter-style-1">
						<div className="text-secondry">
						  <h2 className="text-primary">
							<span className="counter">
							  <i class="flaticon-car-4"></i>
							</span>
							{/* <span>K</span> */}
						  </h2>
						</div>
						<h5 className="counter-text">Jeep Engine Repair</h5>
					  </div>
					</div>
					<div className="col-xl-4 col-sm-12 col-12">
					  <div className="counter-style-1">
						<div className="text-secondry">
						  <h2 className="text-primary">
							<span className="counter">
							  <i class="flaticon-car-4"></i>
							</span>
							{/* <span>+</span> */}
						  </h2>
						</div>
						<h5 className="counter-text">Jeep Gearbox Repair</h5>
					  </div>
					</div>
					<div className="col-xl-4 col-sm-12 col-12">
					  <div className="counter-style-1">
						<div className="text-secondry">
						  <h2 className="text-primary">
							<span className="counter">
							  <i class="flaticon-car-4"></i>
							</span>
						  </h2>
						</div>
						<h5 className="counter-text">Jeep Suspension Repair</h5>
					  </div>
					</div>
					<div className="col-xl-4 col-sm-12 col-12">
					  <div className="counter-style-1">
						<div className="text-secondry">
						  <h2 className="text-primary">
							<span className="counter">
							  <i class="flaticon-car-4"></i>
							</span>
						  </h2>
						</div>
						<h5 className="counter-text">
						Jeep Transmission Repair
						</h5>
					  </div>
					</div>
					<div className="col-xl-4 col-sm-12 col-12">
					  <div className="counter-style-1">
						<div className="text-secondry">
						  <h2 className="text-primary">
							<span className="counter">
							  <i class="flaticon-car-4"></i>
							</span>
						  </h2>
						</div>
						<h5 className="counter-text">Jeep Touchless Wheel Alignment</h5>
					  </div>
					</div>
					<div className="col-xl-4 col-sm-12 col-12">
					  <div className="counter-style-1">
						<div className="text-secondry">
						  <h2 className="text-primary">
							<span className="counter">
							  <i class="flaticon-car-4"></i>
							</span>
						  </h2>
						</div>
						<h5 className="counter-text">Jeep Engine Refurbishment</h5>
					  </div>
					</div>
					<div className="col-xl-4 col-sm-12 col-12">
					  <div className="counter-style-1">
						<div className="text-secondry">
						  <h2 className="text-primary">
							<span className="counter">
							  <i class="flaticon-car-4"></i>
							</span>
						  </h2>
						</div>
						<h5 className="counter-text">Jeep Software Programming</h5>
					  </div>
					</div>
					<div className="col-xl-4 col-sm-12 col-12">
					  <div className="counter-style-1">
						<div className="text-secondry">
						  <h2 className="text-primary">
							<span className="counter">
							  <i class="flaticon-car-4"></i>
							</span>
						  </h2>
						</div>
						<h5 className="counter-text">
						Jeep AC Repair
						</h5>
					  </div>
					</div>
					<div className="col-xl-4 col-sm-12 col-12">
					  <div className="counter-style-1">
						<div className="text-secondry">
						  <h2 className="text-primary">
							<span className="counter">
							  <i class="flaticon-car-4"></i>
							</span>
						  </h2>
						</div>
						<h5 className="counter-text">Jeep Engine Cooling System Repair</h5>
					  </div>
					</div>
					<div className="col-xl-4 col-sm-12 col-12">
					  <div className="counter-style-1">
						<div className="text-secondry">
						  <h2 className="text-primary">
							<span className="counter">
							  <i class="flaticon-car-4"></i>
							</span>
						  </h2>
						</div>
						<h5 className="counter-text">Jeep Brake Repair</h5>
					  </div>
					</div>
					<div className="col-xl-4 col-sm-12 col-12">
					  <div className="counter-style-1">
						<div className="text-secondry">
						  <h2 className="text-primary">
							<span className="counter">
							  <i class="flaticon-car-4"></i>
							</span>
						  </h2>
						</div>
						<h5 className="counter-text">
						Jeep Camera/Radar Calibration
						</h5>
					  </div>
					</div>
					<div className="col-xl-4 col-sm-12 col-12">
					  <div className="counter-style-1">
						<div className="text-secondry">
						  <h2 className="text-primary">
							<span className="counter">
							  <i class="flaticon-car-4"></i>
							</span>
						  </h2>
						</div>
						<h5 className="counter-text">Jeep Pre-Purchase Inspection</h5>
					  </div>
					</div>
					<div className="col-xl-4 col-sm-12 col-12">
					  <div className="counter-style-1">
						<div className="text-secondry">
						  <h2 className="text-primary">
							<span className="counter">
							  <i class="flaticon-car-4"></i>
							</span>
						  </h2>
						</div>
						<h5 className="counter-text">
						Jeep Service Packages
						</h5>
					  </div>
					</div>
					<div className="col-xl-4 col-sm-12 col-12">
					  <div className="counter-style-1">
						<div className="text-secondry">
						  <h2 className="text-primary">
							<span className="counter">
							  <i class="flaticon-car-4"></i>
							</span>
						  </h2>
						</div>
						<h5 className="counter-text">
						Jeep Extended Warranty Packages
						</h5>
					  </div>
					</div>
					<div className="col-xl-4 col-sm-12 col-12">
					  <div className="counter-style-1">
						<div className="text-secondry">
						  <h2 className="text-primary">
							<span className="counter">
							  <i class="flaticon-car-4"></i>
							</span>
						  </h2>
						</div>
						<h5 className="counter-text">Jeep Service & Warranty Packages</h5>
					  </div>
					</div>
					<div className="col-xl-4 col-sm-12 col-12">
					  <div className="counter-style-1">
						<div className="text-secondry">
						  <h2 className="text-primary">
							<span className="counter">
							  <i class="flaticon-car-4"></i>
							</span>
						  </h2>
						</div>
						<h5 className="counter-text">
						Jeep Car Detailing
						</h5>
					  </div>
					</div>
				  </div>
				</div>
			  </div>
			</section>
			<section className="section-area BrandFaq mbg1">
			  <div className="container">
				<div className="row">
				  <div className="col-lg-6">
					<Accordion
					  defaultActiveKey="0"
					  className="accordion ttr-accordion style1"
					>
					  <Accordion.Item eventKey="0">
						<Accordion.Header>
						  <i className="fa fa-question-circle"></i>
						  Why is it good to rely on experts for your Jeep service & repairs?
						</Accordion.Header>
						<Accordion.Body>
						  <p className="mb-0">
						  Jeep vehicles have advanced electrical & mechanical components in it, so it is always good to rely on specialists to handle it in case of repairs or replacements.
						  </p>
						</Accordion.Body>
					  </Accordion.Item>
					  <Accordion.Item eventKey="1">
						<Accordion.Header>
						  <i className="fa fa-question-circle"></i>
						  How often should I get the Jeep service done?
						</Accordion.Header>
						<Accordion.Body>
						  <p className="mb-0">
						  The service interval may vary depending on the model you hold, so it is always good to check your owner's manual or have a talk with the service advisor.
						  </p>
						</Accordion.Body>
					  </Accordion.Item>
					</Accordion>
				  </div>
				  <div className="col-lg-6">
					<Accordion
					  defaultActiveKey="0"
					  className="accordion ttr-accordion style1"
					>
					  <Accordion.Item eventKey="0">
						<Accordion.Header>
						  <i className="fa fa-question-circle"></i>
						  How to avoid expensive repairs on the Jeep?
						</Accordion.Header>
						<Accordion.Body>
						  <p className="mb-0">
							
						  Regular maintenance and smooth driving habits are the key ways to avoid expensive repairs on your Jeep.
	
						  </p>
						</Accordion.Body>
					  </Accordion.Item>
					  <Accordion.Item eventKey="1">
						<Accordion.Header>
						  <i className="fa fa-question-circle"></i>
						  What type of engine oil must be used for Jeep?
						</Accordion.Header>
						<Accordion.Body>
						  <p className="mb-0">
						  It is always good to use synthetic oil for your Jeep though they are expensive because of its high lubricating properties.
						  </p>
						</Accordion.Body>
					  </Accordion.Item>
					</Accordion>
				  </div>
				</div>
			  </div>
			</section>
	
			<ScheduleServiceSection />
			<TestimonialSection />
			<OurBrandsLayout />
			<InstagramBox />
			<Footer />
		  </>
		);
	}
}

export default Jeep ;