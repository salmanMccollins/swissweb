import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Images
import pic6 from "../../images/about/pic6.jpg";

class ChooseUsSection extends Component{
	render(){
		return(
			<>
				<section className="section-area bg-white section-sp1">
					<div className="container">
						<div className="row align-items-center">
							<div className="col-lg-6 mb-30">
								<div className="choose-media">
									<img src={pic6} alt=""/>
								</div>
							</div>
							<div className="col-lg-6 mb-30">
								<div className="heading-bx mb-30">
									<h6 className="title-ext text-primary">WHY PEOPLE CHOOSE US</h6>
									<h2 className="title mb-0">WHY CHOOSE US</h2>
									<p>When you visit our car workshop, we follow a customer-centric approach and pay close attention to transparency in pricing, timely updates, and reliability. Our expert technicians and friendly staff are ready to provide you with the best possible service or repairs that your car deserves.</p>
									<p>Our customers leave our workshop with the smile on their face, that is a testament to the quality of the service that we provide over the years.</p>
								</div>
								<div className="progress-area">
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
								<Link to="/about-us" className="btn btn-primary">READ MORE</Link>
							</div>
						</div>
					</div>
				</section>
			</>
		);
	}
}

export default ChooseUsSection;