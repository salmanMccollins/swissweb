import React, {Component, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

// Layout
import Header from "../../layout/header";
import Footer from "../../layout/footer";

import ChooseUsSection from "../../elements/choose-us";
import ScheduleServiceSection from "../../elements/schedule-service";
import TestimonialSection from "../../elements/testimonial";
import ServicesSection from "../../elements/services-1";

// Elements
import WidgetBrochure from "../../elements/widget/widget-brochure";
import WidgetHelp from "../../elements/widget/widget-help";

// Images
import bnrImg from "../../../images/cover.jpg";
import Pic3 from "../../../images/service-section/pic3.jpg";
import Pic6 from "../../../images/service-section/pic6.jpg";
import axios from 'axios';
import { Helmet } from 'react-helmet';

function OurPackeges() {

		return (
			<>
				<Header />
				
				<div className="page-content bg-white">
					
					<div className="page-banner ovbl-dark" style={{backgroundImage: "url("+bnrImg+")"}}>
						<div className="container">
							<div className="page-banner-entry text-center">
								<h1><span>Our Packages</span></h1>
								<nav aria-label="breadcrumb" className="breadcrumb-row">
									<ul className="breadcrumb">
										<li className="breadcrumb-item"><Link to="/"><i className="las la-home"></i>Home</Link></li>
										<li className="breadcrumb-item active" aria-current="page">Our Packages</li>
									</ul>
								</nav>
							</div>
						</div>
					</div>
					
					<div className="section-area section-sp1 bg-white">
						<div className="container">
							<div className="row">
								<div className="col-lg-4 col-md-5">
									<aside className="sticky-top pb-1">
										
										<div className="widget">
											<ul className="service-menu">
												<li><Link to="/packages/service-contract"><span>Service Contract</span><i className="fa fa-angle-right"></i> </Link></li>
												<li><Link to="/packages/major-service"><span>Major Service</span><i className="fa fa-angle-right"></i></Link></li>
												<li><Link to="/packages/minor-service"><span>Minor Service</span><i className="fa fa-angle-right"></i></Link></li>
											</ul>
										</div>
										
										<WidgetBrochure />
										
										<WidgetHelp />
										
									</aside>
								</div>
								<div className="col-lg-8 col-md-7">
									<div className="row">
										<div className="col-md-6">
											<div className="ttr-media mb-30">
												<img src={Pic3} className="imghight" alt=""/>
											</div>
										</div>
										<div className="col-md-6">
											<div className="ttr-media mb-30">
												<img src={Pic6} className="imghight" alt=""/>
											</div>
										</div>
									</div>
									<div className="head-text mb-30">
										<h4 className="title mb-10">GET BENEFITED WITH OUR PREMIUM VEHICLE SERVICE CONTRACTS IN SAUDI ARABIA</h4>
										<p className="mb-0">All of us want to provide our car with dealership-level care but at a nominal pricing, in such cases having a service contract from a reliable car service center around you would be highly helpful and make vehicle maintenance easier.</p>
									</div>
									<div className="row mb-10">
										
										<div className="col-xl-6 col-lg-6 mb-30">
											<div className="feature-container feature-bx2 bg-secondary">
												<div className="icon-lg">
													<i className="flaticon-brake"></i> 
												</div>
												<div className="icon-content">
													<h5 className="ttr-tilte">Major Service</h5>
													<p>Looking for a reliable car service center in Saudi Arabia, to get the major services done for your car, then trust Royal Swiss Auto Services without any second thoughts.</p>
													<Link to="/packages/major-service" className="btn-link">READ MORE</Link>
												</div>
											</div>
										</div>
										<div className="col-xl-6 col-lg-6 mb-30">
											<div className="feature-container feature-bx2 bg-primary">
												<div className="icon-lg">
													<i className="flaticon-car-4"></i>
												</div>
												<div className="icon-content">
													<h5 className="ttr-tilte">Minor Service</h5>
													<p>At Royal Swiss Auto Services with our years of experience in the auto repair industry, we provide the most comprehensive minor services needed for your vehicle when you contact us, to preserve your car’s performance and enhance its value.</p>
													<Link to="/packages/minor-service" className="btn-link">READ MORE</Link>
												</div>
											</div>
										</div>
										<div className="col-xl-12 col-lg-12 mb-30">
											<div className="feature-container feature-bx2 bg-warning">
												<div className="icon-lg">
													<i className="flaticon-battery-2"></i>
												</div>
												<div className="icon-content">
													<h5 className="ttr-tilte">Sevice Contract</h5>
													<p>At Royal Swiss Auto Services, we completely understand that the automotive maintenance needs of each customer vary greatly, which is why we come up with personalized vehicle service contract packages in Saudi Arabia.</p>
													<Link to="/packages/service-contract" className="btn-link text-secondary">READ MORE</Link>
												</div>
											</div>
										</div>
									</div>
									
								</div>
							</div>
						</div>
					</div>
					
				
				</div>
                <ScheduleServiceSection/>

                <ChooseUsSection/>
                <ServicesSection/>
				<TestimonialSection/>
				<Footer />
				
			</>
		);
}

export default OurPackeges;