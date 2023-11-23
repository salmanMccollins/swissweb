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
import bnrImg from "../../../images/carbrands/Dodge.webp";
import serviceSectionPic3 from "../../../images/brandsthumb/dodge charger body Image.webp";


class Dodge extends Component{
	
	render(){
		return (
			<>
			<Header />
	
			<div className="page-content bg-white">
			  <div
				className="page-banner"
				style={{ backgroundImage: "url(" + bnrImg + ")" }}
			  >
				<div className="container">
				  <div className="page-banner-entry text-center">
					<h1>
					  <span>
					  THE RENOWNED DODGE SERVICE CENTER IN SAUDI ARABIA
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
						Dodge
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
						  <h4 className="title mb-10">OUR DODGE SERVICE BENEFITS</h4>
						  <p className="mb-20">
						  We are the premium destination for all your Dodge maintenance & repair needs.
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
						  WE ARE THE DODGE EXPERTS IN SAUDI ARABIA THAT YOU CAN TRUST FOR REGULAR MAINTENANCE & REPAIRS
						  </h4>
						  <h5 className="mb-15">
							<b>
							  “A Dodge isn't just a car; It is a symbol of power, precision and pursuit of adventure”
							</b>
						  </h5>
						  <p className="mb-15">
						  When it comes to the maintenance of prestigious vehicles like Dodge, owners always look for experienced and skilled technicians to handle it. So if you are looking for a reliable Dodge service center in Saudi Arabia, then look no further than Royal Swiss Auto Services.
						  </p>
						  <p className="mb-15">
						  Our premium workshop in Saudi Arabia will provide better Dodge services & repairs to our customers in a vast area that includes Riyadh, Dammam, and Jeddah.
						  </p>
						  <p className='mb-15'>Our Dodge service team is certified and experienced in working on all Dodge models. Whether you drive a Dodge Charger, Dodge Challenger, Dodge Durango, Dodge Ram, or any other Dodge vehicle, we have the expertise to keep it running smoothly.</p>
						  <h5 className="mb-15">
							<b>Dodge workshop in KSA with state-of-the-art facilities than you expect</b>
						  </h5>
						  <p className="mb-15">
						  Apart from having a team of experienced Dodge specialists, our service center is equipped with the latest diagnostic and repair equipment. This allows us to efficiently identify and resolve any issues your Dodge might be experiencing in no time.
						  </p>
						  <p className="mb-15">
						  We use only genuine spare parts for your Dodge and ensure quality workmanship, so you can always be confident on the roads with its powerful performance.
						  </p>
						</div>
						<div className="row">
						  <h5 className="mb-15 text-uppercase">
							<b>What makes Royal Swiss Auto Services ideal for Dodge service in Saudi Arabia?</b>
						  </h5>
						  <div className="col-xl-12">
							<ul className="list-check-squer">
							  <li>
							  The ultra-modern, state-of-the-art Dodge workshop in Saudi Arabia
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
						CUSTOMER-FOCUSED DODGE SERVICE CENTER IN SAUDI ARABIA THAT YOU CAN TRUST ON
						</h4>
						<p className="mb-15">
						We put our customers first when it comes to Dodge maintenance. Our friendly and professional staff are ready to answer your questions throughout the service or repair process, address your concerns and provide you with a seamless service experience that you have never experienced before.
						</p>
						<p className="mb-15">
						Whether you reach us for a simple oil change or complex engine repair, we carry out the repair or maintenance as per the manufacturer guidelines, which helps us to deliver the dealership quality Dodge service without any compromise.
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
				  <h6 class="title-ext text-primary">SCHEDULE YOUR DODGE</h6>
				  <h2 class="title mb-0">SERVICE OR REPAIR IN SAUDI ARABIA WITH US</h2>
				  <p className='mb-10'>
				 
Scheduling your Dodge service appointment with us is quite easy, Dial 966 53 969 9984 or visit us directly at our Dodge service center in Saudi Arabia, our technicians are ready to provide the premium care that your car deserves.

				  </p>
				  <p>We have the necessary experience and expertise to provide the following services for your Dodge,</p>
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
						<h5 className="counter-text">Dodge Engine Repair</h5>
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
						<h5 className="counter-text">Dodge Gearbox Repair</h5>
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
						<h5 className="counter-text">Dodge Suspension Repair</h5>
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
						Dodge Transmission Repair
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
						<h5 className="counter-text">Dodge Touchless Wheel Alignment</h5>
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
						<h5 className="counter-text">Dodge Engine Refurbishment</h5>
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
						<h5 className="counter-text">Dodge Software Programming</h5>
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
						Dodge AC Repair
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
						<h5 className="counter-text">Dodge Engine Cooling System Repair</h5>
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
						<h5 className="counter-text">Dodge Brake Repair</h5>
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
						Dodge Camera/Radar Calibration
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
						<h5 className="counter-text">Dodge Pre-Purchase Inspection</h5>
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
						Dodge Service Packages
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
						Dodge Extended Warranty Packages
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
						<h5 className="counter-text">Dodge Service & Warranty Packages</h5>
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
						Dodge Car Detailing
						</h5>
					  </div>
					</div>
				  </div>
				</div>
			  </div>
			</section>
			<section className="section-area BrandFaq mbg1">
			  <div className="container">
			  <div class="heading-bx text-center">
              <h6 class="title-ext text-primary">Swissauto</h6>
              <h2 class="title mb-0">Frequently Asked Questions</h2>
              <p>Have a question? Before reaching out, please take a moment to check our FAQ for quick answers. We might have just what you're looking for!</p>
            </div>
				<div className="row">
				  <div className="col-lg-6">
					<Accordion
					  className="accordion ttr-accordion style1"
					>
					  <Accordion.Item eventKey="0">
						<Accordion.Header>
						  <i className="fa fa-question-circle"></i>
						  How important is it to get your Dodge serviced regularly?
						</Accordion.Header>
						<Accordion.Body>
						  <p className="mb-0">
						  Getting the regular Dodge service at the reputed workshop ensures that your car stays in pristine condition for days to come without much expensive repair bills.
						  </p>
						</Accordion.Body>
					  </Accordion.Item>
					  <Accordion.Item eventKey="1">
						<Accordion.Header>
						  <i className="fa fa-question-circle"></i>
						  What is the Dodge oil change interval?
						</Accordion.Header>
						<Accordion.Body>
						  <p className="mb-0">
						  It is essential to get the engine oil in your Dodge changed at an interval of every 7000 kms to 10,000 kms to ensure the efficient performance of your car engine.
						  </p>
						</Accordion.Body>
					  </Accordion.Item>
					</Accordion>
				  </div>
				  <div className="col-lg-6">
					<Accordion
					  className="accordion ttr-accordion style1"
					>
					  <Accordion.Item eventKey="0">
						<Accordion.Header>
						  <i className="fa fa-question-circle"></i>
						  Is Dodge highly reliable?
						</Accordion.Header>
						<Accordion.Body>
						  <p className="mb-0">
							
						  Dodge is one of the highly reliable brands that has grabbed the attention of many with its high performance, sporty nature and amazing luxury features.
	
						  </p>
						</Accordion.Body>
					  </Accordion.Item>
					  <Accordion.Item eventKey="1">
						<Accordion.Header>
						  <i className="fa fa-question-circle"></i>
						  Where to get the Dodge service or repair in Saudi Arabia?
						</Accordion.Header>
						<Accordion.Body>
						  <p className="mb-0">
						  It is always good to choose the reputed Dodge service center in your locality for your maintenance needs, if you are looking for one in Saudi Arabia then consider Royal Swiss Auto Services without any second thoughts.
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

export default Dodge ;