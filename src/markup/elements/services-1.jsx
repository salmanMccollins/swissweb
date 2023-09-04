import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Images
import bg2 from "../../images/background/bg2.png";

class ServicesSection extends Component{
	render(){
		return(
			<>
				<section className="section-area bg-primary service-wraper1 section-sp2" style={{backgroundImage: "url("+bg2+")", backgroundRepeat: "no-repeat", backgroundPosition: "right top"}}>
					<div className="container">
						<div className="heading-bx text-white d-lg-flex d-md-block align-items-end justify-content-between">
							<div className="clearfix">
								<h6 className="title-ext">OUR SERVICES</h6>
								<h2 className="title mb-0">WE PROVIDE BEST SERVICES</h2>
							</div>
							<div className="clearfix mt-md-20">
								<Link to="/services" className="btn btn-outline-light">View All Service</Link>
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
			</>
		);
	}
}

export default ServicesSection;