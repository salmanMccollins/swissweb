import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import Sticky from 'react-stickynode';

// Images
import logo from "../../images/swissmainlogo.png";
import logoWhite from "../../images/swissmainlogo.png";

class aboutSection extends Component{
	
	
	componentDidMount(){
		
		// Mobile Menu Open
		var menuIcon = document.querySelector(".menuicon")
		var menuLinks = document.querySelector(".menu-links")
		var menuClose = document.getElementById("menuClose")
		var menuDeskOpen = document.getElementById("HamberMenuClick")
		var menuDeskClose = document.getElementById("HamberMenuClose")
		
		menuDeskOpen.addEventListener('click',function(){
			document.body.classList.add("ActivePanel");
		})
		
		menuDeskClose.addEventListener('click',function(){
			document.body.classList.remove("ActivePanel");
		})
		
		menuIcon.addEventListener('click',function(){
			menuLinks.classList.add("show")
		})

		menuClose.addEventListener('click',function(){
			menuLinks.classList.remove("show")
		})
		
		// Mobile Submenu Open Close Function
		var navMenu = [].slice.call(document.querySelectorAll('.menu-links > ul > li'));
		for (var y = 0; y < navMenu.length; y++) {
			navMenu[y].addEventListener('click', function () { menuClick(this) });
		}
	
		function menuClick(current) {
			const active = current.classList.contains("open")
			navMenu.forEach(el => el.classList.remove('open'));
			
			if(active){
				current.classList.remove('open') 
				console.log("active")
			} else{
				current.classList.add('open');
				console.log("close")
			}
		}

		function sideNav(){
			alert("hi");
		}
	}
	
	render(){
		return(
			<>
				
				<header className="header header-transparent rs-nav">
					<div className='announcement-bar'>
						<div className='container'>
							<div className='AnnouncementIcons'>
								<a href='#' className='AnnonceLink1 call'>
									+971 52 599 5503
								</a>
								<a href='#' className='AnnonceLink1 whatsapp'>
									WhatsApp Us
								</a>
								<a href='#' className='AnnonceLink1 location'>
									Get Direction
								</a>
								<a href='javascript:void(0);' className='AnnonceLink1 email'>
									info@swissauto.ae
								</a>
							</div>
						</div>
					</div>
					<div class="menudrop">&nbsp;</div>
					<div class="SideNav">
						<div class="SideNavContent">
							<span class="CloseClick">
								<span class="CloseBtn1" id='HamberMenuClose'>&nbsp;</span>
							</span>
							<div class="NavBox">
								<a href="/">Home</a>
								<a href="/about-us/">About us</a>
								<a href="/value-added-services/">Value added services</a>
								<a href="/jurisdictions/">Jurisdictions</a>
								<a href="/media-center/">Media Center</a>
								<a href="/cost-calculator/">Cost Calculator</a>
								<a href="/current-promotions/">Current Promotions</a>
								<a href="/contact-us/">Contact Us</a>
							</div>
							
						</div>
					</div>
					<Sticky enabled={true} className="sticky-header navbar-expand-lg">
						
						<div className="menu-bar clearfix ">
							<div className="container clearfix">
								<div className="menu-logo">
									<Link to="/" className="main-logo"><img src={logoWhite} alt=""/></Link>
									<Link to="/" className="sticky-logo"><img src={logo} alt=""/></Link>
								</div>
								<button className="navbar-toggler collapsed menuicon justify-content-end" type="button" data-toggle="collapse" data-target="#menuDropdown" aria-controls="menuDropdown" aria-expanded="false" aria-label="Toggle navigation">
									<span></span>
									<span></span>
									<span></span>
								</button>
								<div className="secondary-menu">
									<Link to="/login" className="btn btn-language">عربي<span className="flag1">&nbsp;</span></Link>
									<Link to="/booking" className="btn btn-primary ms-3">Book Appointment</Link>
									<div className='HamberMenuClick' id='HamberMenuClick' onClick="sideNav();">&nbsp;</div>
								</div>
								<div className="menu-links navbar-collapse collapse justify-content-center" id="menuDropdown">
									<div className="menu-logo">
										<Link to="/"><img src={logoWhite} alt=""/></Link>
									</div>
									<ul className="nav navbar-nav">	
										
										<li className="has-mega-menu "><Link to="#">Brands<i className="fa fa-chevron-down"></i></Link>
											<ul className="mega-menu">
												<li>
													<ul>
														<li><Link to="/about-1"><span>Axle/Drive Shaft Repair</span></Link></li>
														<li><Link to="/about-2"><span>Brake Repair</span></Link></li>
														<li><Link to="/service-1"><span>Engine Cooling System Repair</span></Link></li>
														<li><Link to="/service-2"><span>Gearbox Repair</span></Link></li>
														<li><Link to="/service-2"><span>Pre-Purchase Inspection</span></Link></li>
														<li><Link to="/service-2"><span>Suspension Repair</span></Link></li>
														<li><Link to="/service-2"><span>Transmission Repair</span></Link></li>
														<li><Link to="/service-2"><span>Touchless Wheel Alignment</span></Link></li>
													</ul>
												</li>
												<li>
													<ul>
														<li><Link to="/about-1"><span>Axle/Drive Shaft Repair</span></Link></li>
														<li><Link to="/about-2"><span>Brake Repair</span></Link></li>
														<li><Link to="/service-1"><span>Engine Cooling System Repair</span></Link></li>
														<li><Link to="/service-2"><span>Gearbox Repair</span></Link></li>
														<li><Link to="/service-2"><span>Pre-Purchase Inspection</span></Link></li>
														<li><Link to="/service-2"><span>Suspension Repair</span></Link></li>
														<li><Link to="/service-2"><span>Transmission Repair</span></Link></li>
														<li><Link to="/service-2"><span>Touchless Wheel Alignment</span></Link></li>
													</ul>
												</li>
												<li>
													<ul>
														<li><Link to="/about-1"><span>Axle/Drive Shaft Repair</span></Link></li>
														<li><Link to="/about-2"><span>Brake Repair</span></Link></li>
														<li><Link to="/service-1"><span>Engine Cooling System Repair</span></Link></li>
														<li><Link to="/service-2"><span>Gearbox Repair</span></Link></li>
														<li><Link to="/service-2"><span>Pre-Purchase Inspection</span></Link></li>
														<li><Link to="/service-2"><span>Suspension Repair</span></Link></li>
														<li><Link to="/service-2"><span>Transmission Repair</span></Link></li>
														<li><Link to="/service-2"><span>Touchless Wheel Alignment</span></Link></li>
													</ul>
												</li>
												<li>
													<ul>
														<li><Link to="/about-1"><span>Axle/Drive Shaft Repair</span></Link></li>
														<li><Link to="/about-2"><span>Brake Repair</span></Link></li>
														<li><Link to="/service-1"><span>Engine Cooling System Repair</span></Link></li>
														<li><Link to="/service-2"><span>Gearbox Repair</span></Link></li>
														<li><Link to="/service-2"><span>Pre-Purchase Inspection</span></Link></li>
														<li><Link to="/service-2"><span>Suspension Repair</span></Link></li>
														<li><Link to="/service-2"><span>Transmission Repair</span></Link></li>
														<li><Link to="/service-2"><span>Touchless Wheel Alignment</span></Link></li>
													</ul>
												</li>
											</ul>
										</li>
										<li className="has-mega-menu "><Link to="#">Services<i className="fa fa-chevron-down"></i></Link>
											<ul className="mega-menu">
												<li>
													<Link to="#">Mechanical Repair</Link>
													<ul>
														<li><Link to="/about-1"><span>Axle/Drive Shaft Repair</span></Link></li>
														<li><Link to="/about-2"><span>Brake Repair</span></Link></li>
														<li><Link to="/service-1"><span>Engine Cooling System Repair</span></Link></li>
														<li><Link to="/service-2"><span>Gearbox Repair</span></Link></li>
														<li><Link to="/service-2"><span>Pre-Purchase Inspection</span></Link></li>
														<li><Link to="/service-2"><span>Suspension Repair</span></Link></li>
														<li><Link to="/service-2"><span>Transmission Repair</span></Link></li>
														<li><Link to="/service-2"><span>Touchless Wheel Alignment</span></Link></li>
													</ul>
												</li>
												<li>
													<Link to="#">Electrical Repair</Link>
													<ul>
														<li><Link to="/team"><span>AC Repair</span></Link></li>
														<li><Link to="/team-details"><span>Camera / Radar Calibration</span></Link></li>
														<li><Link to="/job-career"><span>Car Software Repair & Programming</span></Link></li>
														<li><Link to="/faq-1"><span>Comfort System Repair</span></Link></li>
														<li><Link to="/faq-1"><span>Engine Control Unit Repair</span></Link></li>
														<li><Link to="/faq-1"><span>Navigation Update</span></Link></li>
														<li><Link to="/faq-1"><span>Retrofit</span></Link></li>
													</ul>
												</li>
												<li>
													<Link to="#">BodyShop</Link>
													<ul>
														<li><Link to="/booking"><span>Smart Body Repair</span></Link></li>
														<li><Link to="/gallery-1"><span>Car Detailing</span></Link></li>
														<li><Link to="/gallery-2"><span>Car Tinting</span></Link></li>
														<li><Link to="/pricing-plan"><span>Car DIP Color</span></Link></li>
														<li><Link to="/pricing-plan"><span>Ceramic Coating</span></Link></li>
														<li><Link to="/pricing-plan"><span>Brake Caliper painting</span></Link></li>
														<li><Link to="/pricing-plan"><span>Paint Protcetion Film</span></Link></li>
														<li><Link to="/pricing-plan"><span>WindShield Repair</span></Link></li>
														<li><Link to="/pricing-plan"><span>Classic Car Restoration</span></Link></li>
													</ul>
												</li>
												<li>
													<Link to="#">Other Services</Link>
													<ul>
														<li><Link to="/booking"><span>Car Recovery</span></Link></li>
														<li><Link to="/gallery-1"><span>Fleet Management</span></Link></li>
													</ul>
												</li>
											</ul>
										</li>
										{/* <li className="has-mega-menu "><Link to="#">Pages<i className="fa fa-chevron-down"></i></Link>
											<ul className="mega-menu">
												<li>
													<Link to="#">Pages</Link>
													<ul>
														<li><Link to="/about-1"><span>About Us 1</span></Link></li>
														<li><Link to="/about-2"><span>About Us 2</span></Link></li>
														<li><Link to="/service-1"><span>Service 1</span></Link></li>
														<li><Link to="/service-2"><span>Service 2</span></Link></li>
													</ul>
												</li>
												<li>
													<Link to="#">Pages</Link>
													<ul>
														<li><Link to="/team"><span>Our Team</span></Link></li>
														<li><Link to="/team-details"><span>Team Details</span></Link></li>
														<li><Link to="/job-career"><span>Job & Career</span></Link></li>
														<li><Link to="/faq-1"><span>FAQ's</span></Link></li>
													</ul>
												</li>
												<li>
													<Link to="#">Pages</Link>
													<ul>
														<li><Link to="/booking"><span>Booking</span></Link></li>
														<li><Link to="/gallery-1"><span>Gallery 1</span></Link></li>
														<li><Link to="/gallery-2"><span>Gallery 2</span></Link></li>
														<li><Link to="/pricing-plan"><span>Pricing Plan</span></Link></li>
													</ul>
												</li>
												<li>
													<Link to="#">Pages</Link>
													<ul>
														<li><Link to="/error-404"><span>Error 404</span></Link></li>
														<li><Link to="/login"><span>Login / Register</span></Link></li>
														<li><Link to="/contact-1"><span>Contact Us 1</span></Link></li>
														<li><Link to="/contact-2"><span>Contact Us 2</span></Link></li>
													</ul>
												</li>
											</ul>
										</li> */}
										<li>
											<Link to="#">Our Packages<i className="fa fa-chevron-down"></i></Link>
											<ul className="sub-menu">
												<li className="add-menu-left">
													<ul>
														<li><Link to="/service-engine-diagnostics"><span>Service Contract</span> </Link></li>
														<li><Link to="/service-lube-oil-and-filters"><span>Major Service</span></Link></li>
														<li><Link to="/service-belts-and-hoses"><span>Minor Service</span></Link></li>
													</ul>
												</li>
											</ul>
										</li>
										<li><Link to="#">Who We Are <i className="fa fa-chevron-down"></i></Link>
											<ul className="sub-menu left">
												<li><Link to="/blog-grid"><span>About Us</span></Link></li>
												<li><Link to="/blog-grid-sidebar"><span>Careers</span></Link></li>
												</ul>
										</li>
										<li><Link to="#">Contact Us </Link>
										</li>
									</ul>
									<ul className="social-media">
										<li><a target="_blank" href="https://www.facebook.com/" rel="noreferrer" className="btn btn-primary"><i className="fa fa-facebook"></i></a></li>
										<li><a target="_blank" href="https://www.google.com/" rel="noreferrer" className="btn btn-primary"><i className="fa fa-google-plus"></i></a></li>
										<li><a target="_blank" href="https://www.linkedin.com/" rel="noreferrer" className="btn btn-primary"><i className="fa fa-linkedin"></i></a></li>
										<li><a target="_blank" href="https://twitter.com/" rel="noreferrer" className="btn btn-primary"><i className="fa fa-twitter"></i></a></li>
									</ul>
									<div className="menu-close" id="menuClose">
										<i className="ti-close"></i>
									</div>
								</div>
							</div>
						</div>
					</Sticky>
				</header>
			
			</>
		);
	}
}

export default aboutSection;