import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Elements
import Count from '../elements/counter-sensor';

// Images
import bg1 from "../../images/background/bg1.png";
import aboutPic1 from "../../images/about/about2/500x650.webp";
import aboutPic2 from "../../images/about/about2/500x511.webp";

class AboutUsFourSection extends Component{
	render(){
		return(
			<>
				<section className="section-area about-wraper1 bg-gray section-sp2" style={{backgroundImage: "url("+bg1+")", backgroundRepeat: "no-repeat"}}>
					<div className="container">
						<div className="row">
							<div className="col-lg-6 about-media mb-30">
								<div className="about-img1">
									<img src={aboutPic1} alt=""/>
								</div>
								<div className="about-img2">
									<img src={aboutPic2} alt=""/>
								</div>
								<div className="experience-bx">
									<h4 className="exp-text">
										<span className="counter"><Count counter={20}/></span> +
									</h4>
									<h6 className="exp-year">experience year</h6>
								</div>
							</div>
							<div className="col-lg-6 mb-30">
								<div className="heading-bx">
									<h6 className="title-ext m-b0 text-primary">about us</h6>
									<h2 className="title mb-0">A LUXURY CAR SERVICE CENTER OF CHOICE IN THE KINGDOM OF SAUDI ARABIA</h2>
									<p className="fw6 fs18">With years of combined dealership experience in the auto repair industry, we are passionate about providing top-notch repair and vehicle maintenance services at our well-established car service center in Saudi Arabia with the latest diagnostic tools and experienced technicians. 
As a reputed auto repair facility in Saudi Arabia, our goal is to provide high-quality auto repair services for various gasoline & electric cars to ensure the satisfaction of our customers and to exceed their expectations.
</p>
								</div>
								<ul className="list-check-squer mb-50 mb-sm-30">
									<li>Empowering Your Drive with Quality Care</li>
									<li>Giving customers a seamless experience</li>
									<li>Personalized care that your car deserves</li>
									<li>Assuring peace of mind on the roads</li>
								</ul>
								<Link to="/aboutus" className="btn btn-primary btn-lg">READ MORE</Link>
							</div>
						</div>
					</div>
				</section>
			</>
		);
	}
}

export default AboutUsFourSection;