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
										<span className='serviceicon service1'>&nbsp;</span>
									</div>
									<div className="icon-content">
										<h5 className="ttr-tilte text-uppercase">Axle/Drive Shaft Repair</h5>
										<p>As we all know the axle/driveshaft is one of the important mechanical components of the car. The drive shaft usually converts the power generated by the engine into usable force (torque) which is essential for the wheels to spin and the car to work.</p>
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
										<p>It is essential to keep your car brakes in good condition, as it has a greater impact on your safety on the roads. To keep your car brakes well maintained it becomes essential to visit the reputed car service center and get the complete brake service done as stated in your owner’s manual. Getting timely servicing and repairing of the car brakes at a reputed car garage in Saudi Arabia is no more a burden since we are readily available with 24/7 customer support to provide complete brake care.</p>
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
										<p>A good-performing cooling system is essential to keep up the optimum temperature of your car engine. To avoid engine overheating it is essential to keep the car cooling system in good condition. When a simple problem like coolant leakage is left unnoticed, it can result in engine failure in the long run and can provide you with expensive repair bills. So the issues with the car engine cooling system must be rectified at the earliest.</p>
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
										<p>One important component of a car is the gearbox, which controls the vehicle's movement. Most latest make and model of cars now comes with an automatic transmission system whereas some have manual transmission.

Whether it may be manual or automatic gearbox systems, proper care from the experts is essential to extend its lifespan and to make sure your car runs smoothly on the roads. If you suspect any kinds of repairs with your car gearbox system contact the gearbox repair specialists immediately to avoid the expensive repair and the complete replacement.</p>
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
										<p>Are you planning to purchase a used car? The most important thing that you can do before finalizing the car and settlement is to get the pre-purchase inspection by the experienced technicians at the most trusted car service center.</p>
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
										<p>Healthy suspension in your car is essential to keep your ride smooth and safe. All the components in your car suspension systems work together to absorb the bumps and shocks on the roads and result in a smooth and comfortable journey with enhanced safety.</p>
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
										<p>A transmission is one of the vital components of the car like an engine, and helps you to shift to the correct gear based on your car speed and helps you to drive smoothly. Initially, in the olden days, cars had only the manual transmission but nowadays modern cars have an automatic transmission which makes driving easy. </p>
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
										<p>Getting your wheels aligned is highly important because they contribute a lot towards your vehicle's performance and safety. When the wheels are not properly aligned it may have several impacts like fastened and uneven tyre wear, decreased fuel efficiency and poor vehicle handling characteristics.</p>
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