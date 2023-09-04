import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {Accordion} from 'react-bootstrap';

// Layout
import Header from "../../layout/header";
import Footer from "../../layout/footer";

// Elements
import WidgetBrochure from "../../elements/widget/widget-brochure";
import WidgetHelp from "../../elements/widget/widget-help";
import ScheduleServiceSection from '../../elements/schedule-service';
import TestimonialSection from '../../elements/testimonial';
import ChooseUsSection from '../../elements/choose-us';

// Images
import bnrImg from "../../../images/banner/bnr4.jpg";
import serviceSectionPic3 from "../../../images/service-section/pic3.jpg";

class RollsRoys extends Component{
	
	render(){
		return (
			<>
				<Header />
				
				<div className="page-content bg-white">
					
					<div className="page-banner ovbl-dark" style={{backgroundImage: "url("+bnrImg+")"}}>
						<div className="container">
							<div className="page-banner-entry text-center">
								<h1><span>Royal Swiss Auto – A Trusted Rolls Roys Service Center in Dubai</span></h1>
								<nav aria-label="breadcrumb" className="breadcrumb-row">
									<ul className="breadcrumb">
										<li className="breadcrumb-item"><Link to="/"><i className="las la-home"></i>Home</Link></li>
										<li className="breadcrumb-item active" aria-current="page">Rolls Roys</li>
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
										
										
										
										<WidgetBrochure />
										
										<WidgetHelp />
										
									</aside>
								</div>
								<div className="col-lg-8 col-md-7">
									<div className="row">
										<div className="col-xl-6">
											<div className="ttr-media mb-30">
												<img src={serviceSectionPic3} alt=""/>
											</div>
										</div>
										<div className="col-xl-6">
											<h4 className="title mb-10">SERVICES BENEFITS</h4>
											<p className="mb-20">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
											<ul className="list-check-squer mb-30">
												<li>Then along come two they</li>
												<li>Lorem Ipsum is simply dummy</li>
												<li>These eiusmod tempor incididunt</li>
											</ul>
										</div>
									</div>
									<div className="row mb-10">
										<div className="col-xl-3 col-sm-6 col-6">
											<div className="counter-style-1">
												<div className="text-secondry">
													<h2 className="text-primary"><span className="counter">25</span><span>K</span></h2>
												</div>
												<h5 className="counter-text">SATISFIED CLIENTS</h5>
											</div>
										</div>
										<div className="col-xl-3 col-sm-6 col-6">
											<div className="counter-style-1">
												<div className="text-secondry">
													<h2 className="text-primary"><span className="counter">35</span><span>+</span></h2>
												</div>
												<h5 className="counter-text">WINNING AWARDS</h5>
											</div>
										</div>
										<div className="col-xl-3 col-sm-6 col-6">
											<div className="counter-style-1">
												<div className="text-secondry">
													<h2 className="text-primary"><span className="counter">180</span><span>+</span></h2>
												</div>
												<h5 className="counter-text">COMPLETED WORKS</h5>
											</div>
										</div>
										<div className="col-xl-3 col-sm-6 col-6">
											<div className="counter-style-1">
												<div className="text-secondry">
													<h2 className="text-primary"><span className="counter">28</span><span>K</span></h2>
												</div>
												<h5 className="counter-text">ENGINE BENEFITS</h5>
											</div>
										</div>
									</div>
									<div className="mb-10">
										<div className="head-text mb-30">
											<h4 className="title mb-10">OUR SERVICE</h4>
                                            <p className="mb-15">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
										<p className="mb-15">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
											<p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
										</div>
										<div className="row">
											<div className="col-xl-6">
												<div className="progress-area mb-30">
													<div className="progress-box style1 appear">
														<div className="progress-info">
															<h6 className="title">Quality Services</h6>
															<h6 className="progress-value">65%</h6>
														</div>
														<div className="progress">
															<div className="progress-bar bg-primary" style={{width: "65%"}}></div>
														</div>
													</div>
													<div className="progress-box style1 appear">
														<div className="progress-info">
															<h6 className="title">Experienced Technicials</h6>
															<h6 className="progress-value">85%</h6>
														</div>
														<div className="progress">
															<div className="progress-bar bg-primary" style={{width: "85%"}}></div>
														</div>
													</div>
													<div className="progress-box style1 appear">
														<div className="progress-info">
															<h6 className="title">Long Term Warranty</h6>
															<h6 className="progress-value">70%</h6>
														</div>
														<div className="progress">
															<div className="progress-bar bg-primary" style={{width: "70%"}}></div>
														</div>
													</div>
												</div>
											</div>
											<div className="col-xl-6">
												<ul className="list-check-squer">
													<li>Then along come two they</li>
													<li>Lorem Ipsum is simply dummy</li>
													<li>That’s just a little bit more than</li>
													<li>Standard dummy text ever since</li>
												</ul>
											</div>
										</div>
									</div>
									<div className="head-text mb-30">
										<h4 className="title mb-10">COMPLETED WORKS</h4>
										<p className="mb-15">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
										<p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                                        <p className="mb-15">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
										<p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                                        <p className="mb-15">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
										<p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                                        <p className="mb-15">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
										<p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
									</div>
									<div className="row mb-30">
										<div className="col-lg-6">
											<ul className="list-check-squer mb-0">
												<li>Then along come two they</li>
												<li>Lorem Ipsum is simply dummy</li>
												<li>That’s just a little bit than</li>
											</ul>
										</div>
										<div className="col-lg-6">
											<ul className="list-check-squer mb-0">
												<li>Standard dummy text ever since</li>
												<li>Simply dummy text of the printing</li>
												<li>Make a type specimen book</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				
				</div>
                <section className="section-area BrandFaq">
					   <div className="container">
							<div className="row">
								<div className="col-lg-6">
									<Accordion defaultActiveKey="0" className="accordion ttr-accordion style1">
										<Accordion.Item eventKey="0">
											<Accordion.Header>
												<i className="fa fa-question-circle"></i>
												Should I consider using synthetic motor oil?
											</Accordion.Header>
											<Accordion.Body>
												<p className="mb-0">Synthetic engine oils are produced through a synthesis process that takes very small molecules and assembles them into larger designer molecules with premium lubricating properties.</p>
											</Accordion.Body>
										</Accordion.Item>
										<Accordion.Item eventKey="1">
											<Accordion.Header>
												<i className="fa fa-question-circle"></i>
												What parts should be replaced at what intervals?
											</Accordion.Header>
											<Accordion.Body>
												<p className="mb-0">Synthetic engine oils are produced through a synthesis process that takes very small molecules and assembles them into larger designer molecules with premium lubricating properties.</p>
											</Accordion.Body>
										</Accordion.Item>
										<Accordion.Item eventKey="2">
											<Accordion.Header>
												<i className="fa fa-question-circle"></i>
												How do I keep track of routine maintenance?
											</Accordion.Header>
											<Accordion.Body>
												<p className="mb-0">Synthetic engine oils are produced through a synthesis process that takes very small molecules and assembles them into larger designer molecules with premium lubricating properties.</p>
											</Accordion.Body>
										</Accordion.Item>
										<Accordion.Item eventKey="3">
											<Accordion.Header>
												<i className="fa fa-question-circle"></i>
												Should I consider using synthetic motor oil?
											</Accordion.Header>
											<Accordion.Body>
												<p className="mb-0">Synthetic engine oils are produced through a synthesis process that takes very small molecules and assembles them into larger designer molecules with premium lubricating properties.</p>
											</Accordion.Body>
										</Accordion.Item>
										<Accordion.Item eventKey="4">
											<Accordion.Header>
												<i className="fa fa-question-circle"></i>
												What parts should be replaced at what intervals?
											</Accordion.Header>
											<Accordion.Body>
												<p className="mb-0">Synthetic engine oils are produced through a synthesis process that takes very small molecules and assembles them into larger designer molecules with premium lubricating properties.</p>
											</Accordion.Body>
										</Accordion.Item>
									</Accordion>
								</div>
								<div className="col-lg-6">
									<Accordion defaultActiveKey="2" className="accordion ttr-accordion style1">
										<Accordion.Item eventKey="0">
											<Accordion.Header>
												<i className="fa fa-question-circle"></i>
												What parts should be replaced at what intervals?
											</Accordion.Header>
											<Accordion.Body>
												<p className="mb-0">Synthetic engine oils are produced through a synthesis process that takes very small molecules and assembles them into larger designer molecules with premium lubricating properties.</p>
											</Accordion.Body>
										</Accordion.Item>
										<Accordion.Item eventKey="1">
											<Accordion.Header>
												<i className="fa fa-question-circle"></i>
												How do I keep track of routine maintenance?
											</Accordion.Header>
											<Accordion.Body>
												<p className="mb-0">Synthetic engine oils are produced through a synthesis process that takes very small molecules and assembles them into larger designer molecules with premium lubricating properties.</p>
											</Accordion.Body>
										</Accordion.Item>
										<Accordion.Item eventKey="2">
											<Accordion.Header>
												<i className="fa fa-question-circle"></i>
												Should I consider using synthetic motor oil?
											</Accordion.Header>
											<Accordion.Body>
												<p className="mb-0">Synthetic engine oils are produced through a synthesis process that takes very small molecules and assembles them into larger designer molecules with premium lubricating properties.</p>
											</Accordion.Body>
										</Accordion.Item>
										<Accordion.Item eventKey="3">
											<Accordion.Header>
												<i className="fa fa-question-circle"></i>
												Should I consider using synthetic motor oil?
											</Accordion.Header>
											<Accordion.Body>
												<p className="mb-0">Synthetic engine oils are produced through a synthesis process that takes very small molecules and assembles them into larger designer molecules with premium lubricating properties.</p>
											</Accordion.Body>
										</Accordion.Item>
										<Accordion.Item eventKey="4">
											<Accordion.Header>
												<i className="fa fa-question-circle"></i>
												What parts should be replaced at what intervals?
											</Accordion.Header>
											<Accordion.Body>
												<p className="mb-0">Synthetic engine oils are produced through a synthesis process that takes very small molecules and assembles them into larger designer molecules with premium lubricating properties.</p>
											</Accordion.Body>
										</Accordion.Item>
									</Accordion>
								</div>
							</div>
						</div>
					</section>
                
                <ScheduleServiceSection/>
				<TestimonialSection/>
                <ChooseUsSection/>
				<Footer />
				
			</>
		);
	}
}

export default RollsRoys ;