import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import Sticky from 'react-stickynode';

import SwissBrands from '../elements/widget/Swiss-Brands';

// Images
import logo from "../../images/swissautologo.png";
import logoWhite from "../../images/swissautologo.png";



class aboutSection extends Component{
	
	
	componentDidMount(){
		
		// Mobile Menu Open
		var menuIcon = document.querySelector(".menuicon")
		var menuLinks = document.querySelector(".menu-links")
		var menuClose = document.getElementById("menuClose")
		var menuDeskOpen = document.getElementById("HamberMenuClick")
		var menuDeskClose = document.getElementById("HamberMenuClose")
		var panelClose1 = document.getElementById("PanelCloseBtn")
		var ClickedNav = document.getElementById("ClickedNav")
		
		ClickedNav.addEventListener('click',function(){
			document.body.classList.remove("ActivePanel");
		})
		panelClose1.addEventListener('click',function(){
			document.body.classList.remove("ActivePanel");
		})
		
		menuDeskOpen.addEventListener('click',function(){
			document.body.classList.add("ActivePanel");
		})
		
		menuDeskClose.addEventListener('click',function(){
			document.body.classList.remove("ActivePanel");
		})
		
		menuIcon.addEventListener('click',function(){
			menuLinks.classList.add("show");
			document.body.classList.add("No-index");
		})

		menuClose.addEventListener('click',function(){
			menuLinks.classList.remove("show");;
			document.body.classList.remove("No-index");
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
	}
	
	render(){
		return(
			<>
				
				<header className="header header-transparent rs-nav">
					<div className='announcement-bar desk-only'>
						<div className='container'>
							<div className='row'>
								<div className='col-md-5'>Your trusted partner for auto repair services in saudi arabia</div>
								<div className='col-md-7'>
									<div className='AnnouncementIcons'>
										<a href='tel:966 53 969 9984' className='AnnonceLink1 call'>
											+966 53 969 9984
										</a>
										<a href='https://api.whatsapp.com/send/?phone=966563110154&text=Hi%2C+Swiss+Auto+Services&type=phone_number&app_absent=0' className='AnnonceLink1 whatsapp'>
											WhatsApp Us
										</a>
										<a href='#' className='AnnonceLink1 location'>
											Get Direction
										</a>
										<a href='mailto:hello@swissauto.ae' className='AnnonceLink1 email'>
										hello@swissauto.ae
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="menudrop " id='PanelCloseBtn'>&nbsp;</div>
					<div class="SideNav">
						<div class="SideNavContent">
							<span class="CloseClick">
								<span class="CloseBtn1" id='HamberMenuClose'>&nbsp;</span>
							</span>
							<div class="NavBox" id='ClickedNav'>
								<Link to="/">Home</Link>
								<Link to="/aboutus">About us</Link>
								<Link to="/booking">Book Appointment</Link>
								<Link to="/blogs">Media Center</Link>
								<Link to="/services">Our Services</Link>
								<Link to="/contact">Contact Us</Link>
							</div>
							<div className='SideNavSocial widget '>
							<ul className="list-inline ft-social-bx">
											<li><a target="_blank" rel="noreferrer" href="https://www.facebook.com/swissautosa/" className="btn button-sm"><i className="fa fa-facebook"></i></a></li>
											<li><a target="_blank" rel="noreferrer" href="https://www.instagram.com/swissautosa/" className="btn button-sm"><i className="fa fa-instagram"></i></a></li>
											<li><a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCIDHmzSK6mFQykqrG_SjVig" className="btn button-sm"><i className="fa fa-youtube"></i></a></li>
											<li><a target="_blank" rel="noreferrer" href="https://api.whatsapp.com/send/?phone=966563110154&text=Hi%2C+Swiss+Auto+Services&type=phone_number&app_absent=0" className="btn button-sm"><i className="fa fa-whatsapp"></i></a></li>
										</ul>
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
								<button className="navbar-toggler collapsed menuicon justify-content-end"  type="button" data-toggle="collapse" data-target="#menuDropdown" aria-controls="menuDropdown" aria-expanded="false" aria-label="Toggle navigation">
									<span></span>
									<span></span>
									<span></span>
								</button>
								<div className="secondary-menu">
									<Link to="/login" className="btn btn-language">عربي<span className="flag1">&nbsp;</span></Link>
									<Link to="/booking" className="btn btn-primary ms-3">Book Appointment</Link>
									<div className='HamberMenuClick  desk-only' id='HamberMenuClick'>&nbsp;</div>
								</div>
								<div className="menu-links navbar-collapse collapse justify-content-center" id="menuDropdown">
									<div className="menu-logo">
										<Link to="/"><img src={logoWhite} alt=""/></Link>
									</div>
									<ul className="nav navbar-nav">	
										
										<li className="has-mega-menu "><Link to="/ourbrands">Brands<i className="fa fa-chevron-down"></i></Link>
											<div className="mega-menu">
												<SwissBrands/>
											</div>
										</li>
										<li className="has-mega-menu "><Link to="/services">Services<i className="fa fa-chevron-down"></i></Link>
											<ul className="mega-menu">
												<li>
													<Link to="/services">Mechanical Repair</Link>
													<ul>
														<li><Link to="/services/mechanical-repair/axil-or-drift-shaft-repair"><span>Axle/Drive Shaft Repair</span></Link></li>
														<li><Link to="/services/mechanical-repair/break-repair"><span>Brake Repair</span></Link></li>
														<li><Link to="/services/mechanical-repair/engine-cooling-system-repair"><span>Engine Cooling System Repair</span></Link></li>
														<li><Link to="/services/mechanical-repair/gear-box-repair"><span>Gearbox Repair</span></Link></li>
														<li><Link to="/services/mechanical-repair/pre-purchase-inspection"><span>Pre-Purchase Inspection</span></Link></li>
														<li><Link to="/services/mechanical-repair/suspension-repair"><span>Suspension Repair</span></Link></li>
														<li><Link to="/services/mechanical-repair/transmission-repair"><span>Transmission Repair</span></Link></li>
														<li><Link to="/services/mechanical-repair/touchless-wheel-alignment"><span>Touchless Wheel Alignment</span></Link></li>
													</ul>
												</li>
												<li>
													<Link to="/services">BodyShop</Link>
													<ul>
														<li><Link to="/services/body-shop/smart-body-repair"><span>Smart Body Repair</span></Link></li>
														<li><Link to="/services/body-shop/car-detailing"><span>Car Detailing</span></Link></li>
														<li><Link to="/services/body-shop/car-tinting"><span>Car Tinting</span></Link></li>
														<li><Link to="/services/body-shop/car-dip-color"><span>Car DIP Color</span></Link></li>
														<li><Link to="/services/body-shop/ceramic-coating"><span>Ceramic Coating</span></Link></li>
														<li><Link to="/services/body-shop/break-caliper-painting"><span>Brake Caliper painting</span></Link></li>
														<li><Link to="/services/body-shop/paint-protection-film"><span>Paint Protcetion Film</span></Link></li>
														<li><Link to="/services/body-shop/wind-shield-repair"><span>WindShield Repair</span></Link></li>
														<li><Link to="/services/body-shop/classic-car-restoration"><span>Classic Car Restoration</span></Link></li>
													</ul>
												</li>
												<li>
													<Link to="/services">Electrical Repair</Link>
													<ul>
														<li><Link to="/services/electrical-repair/ac-repair"><span>AC Repair</span></Link></li>
														<li><Link to="/services/electrical-repair/camera-radar-calibration"><span>Camera / Radar Calibration</span></Link></li>
														<li><Link to="/services/electrical-repair/car-repair-and-software-programming"><span>Car Software Repair & Programming</span></Link></li>
														<li><Link to="/services/electrical-repair/comfort-system-repair"><span>Comfort System Repair</span></Link></li>
														<li><Link to="/services/electrical-repair/engine-control-unit-repair"><span>Engine Control Unit Repair</span></Link></li>
														{/* <li><Link to="/services/electrical-repair/navigation-update"><span>Navigation Update</span></Link></li>
														<li><Link to="/services/electrical-repair/retrofit"><span>Retrofit</span></Link></li> */}
													</ul>
												</li>
												
												<li>
													<Link to="/services">Other Services</Link>
													<ul>
														<li><Link to="/services/other-services/car-recovery"><span>Car Recovery</span></Link></li>
														<li><Link to="/services/other-services/fleet-management"><span>Fleet Management</span></Link></li>
														<li><Link to="/services/other-services/electric-car-repair"><span>Electric Car Repair</span></Link></li>
														
													</ul>
												</li>
											</ul>
										</li>
										<li>
											<Link to="/packages">Our Packages<i className="fa fa-chevron-down"></i></Link>
											<ul className="sub-menu">
												<li className="add-menu-left">
													<ul>
														<li><Link to="/packages/service-contract"><span>Service Contract</span> </Link></li>
														<li><Link to="/packages/minor-service"><span>Major Service</span></Link></li>
														<li><Link to="/packages/major-service"><span>Minor Service</span></Link></li>
													</ul>
												</li>
											</ul>
										</li>
										<li><Link to="/aboutus">Who We Are <i className="fa fa-chevron-down"></i></Link>
											<ul className="sub-menu left">
												<li><Link to="/aboutus"><span>About Us</span></Link></li>
												<li><Link to="/careers"><span>Careers</span></Link></li>
												</ul>
										</li>
										<li className='mob-only'>
											
											<Link to="/booking">Book Appointment <i className="fa fa-chevron-down"></i></Link>
											
										</li>
										<li>
											
											<Link to="/blogs">Media Center</Link>
											
										</li>
										<li>
											
											<Link to="/offers">Offers</Link>
											
										</li>
										
										<li className='mob-only'>
											
											<Link to="/contactus">Contact Us<i className="fa fa-chevron-down"></i></Link>
											
										</li>
									</ul>
									<ul className="social-media">
											<li><a target="_blank" rel="noreferrer" href="https://www.facebook.com/swissautosa/" className="btn button-sm"><i className="fa fa-facebook"></i></a></li>
											<li><a target="_blank" rel="noreferrer" href="https://www.instagram.com/swissautosa/" className="btn button-sm"><i className="fa fa-instagram"></i></a></li>
											<li><a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCIDHmzSK6mFQykqrG_SjVig" className="btn button-sm"><i className="fa fa-youtube"></i></a></li>
											<li><a target="_blank" rel="noreferrer" href="https://api.whatsapp.com/send/?phone=966563110154&text=Hi%2C+Swiss+Auto+Services&type=phone_number&app_absent=0" className="btn button-sm"><i className="fa fa-whatsapp"></i></a></li>
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