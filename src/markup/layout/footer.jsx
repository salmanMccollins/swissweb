import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Images
import logo2 from '../../images/swissmainlogowhite.png';
import icon1 from '../../images/icon/contact/icon1.png';
import icon2 from '../../images/icon/contact/icon2.png';
import icon3 from '../../images/icon/contact/icon3.png';
import recentBlogPic1 from '../../images/blog/recent-blog/pic1.jpg';
import recentBlogPic2 from '../../images/blog/recent-blog/pic2.jpg';

class aboutSection extends Component{
	render(){
		return(
			<>
				
				<footer className="footer">
				<div class="halo-sticky-toolbar-mobile mob-only">
						<div class="bottom-bar">
							<ul class="bottom-bar--list">
								<li>
									<Link to="/">
										<div class="icon">
										<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAADxElEQVRoge2ZT2hcRRzHP79nVs2i62bBQEF4bzYPPASpkqRISWGrIOLNf7QY8aCtFCRXvRS86EHRi70ZUEEtrZKTiCWHEjSxoVSqQkAi2dm3wQTRmo1IYuLOjoe8xTXdbTYvb5Ml7Oe2M7/9/X7fNzO/mXkPDgjSSudKKRf4yFpbEZEXtdZBq2K1TIjruscdx7kA9IZNN6y1zxcKhUutiHdbC3yKUuqsiHwA3A18CfwMHBaR53p6emypVPom7qCxCvF9P5VKpc6LyCuAiMjbWutTpVLpfDqdXhORR4BH0+n0UCqV+mplZeXvuGLHNrWUUoetteMi0gf8Ya0d2TqNPM97XEQ+BTLW2nkReVpr/UNN/7SIHN3iekprfWy7+E4cIrLZ7AgwHYq4bowZqrcWCoXCJcdxHgSuhrYzSqmXqv11RAAMN5PDrkYkl8t1FYvFN6y1r4VNH6+vr59ZXFxcvdX/fN+/wxhzDjgdNr2fTCZHV1dX1wG01gKglLK1v29FZCG+799njPkceBhYB0a11mM78aGUOg28B9wJzIS+IgmJNLVc1z1ujPkuDByIyPBORYQJjonIMSAIfQHYKDntVIh4nveq4zgTbO4PE4lEYjCfz1+LEhwgn89fSyQSg8BE2LQRxU9Xs4a+76fK5fKHIvIUm0/tTa3164CJEriWubm534EnPM8bBZai+Ghqjfi+32+MGQfuB0rAC1rrL6IE3AmxrhHP804YY2bYFPGj4zhDeyEipFLNYTvDhjv7wMBAoru7+13gHeB2Nkvrk8Vi8dfY0tyGTCZzCBgUkWcymUw6m81eXlpaqtSzrTtkvu/fWy6XL4RHirK19myhUHirlUk3Qin1MnCOzYc5VS6XTywsLCxutbtJSDabHbbWfgYcEpFfjDHPBkFwpfUpN6avr2+gUqmMAy7wm+M4J+fn5y/X2vxvaoXqLwL3AF9bax8LguCnPcu4AcvLy0u9vb2fVCqVh4AHrLUj6XR6o1QqfVu1EYD+/v671tbWxqy1J6sdrusmJicny/uQd0NyuVxXEAT/1DRdTCaTp2ZnZ/+qHgWuAkPAn0AKmit5+0G1JPNfrle01ker5XcD+B44sh/JReQIcF1E6t9plFK2RnXb0Si/WO4j7UBHSLtxYIQ0fYzfjqgFIq4y3xmRRjT7hOMu8QdmRDpC2o2OkHajI2SneJ43rZSK/btIlT0TIiIVIr4ObYbYN8RGNPONYzd01ki70RHSbnSEtBsHRshNl6B2fqdVy9YLXL0RmdqjXHZDy446HTps4V9tTVVsPCm1ZAAAAABJRU5ErkJggg=="/>
										</div>
										<div class="text">Home</div>
									</Link>
								</li>
								<li>
									<Link to="/booking">
										<div class="icon">
										<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAADIUlEQVR4nO2dPWsVQRSG12CldqIh15ud8w5R8KKFYH+txCLgD/AHKAoRBEvBfyC2FgpWSSFio9Y2trESLaysDAE/IvgRPxi9RVxuJO5197x7533g1OfMeTKzs5O9TFEIIYQQBCwsLPQBXALwCMBzABsAfuQchZOIAwBumtlX7waALFqXAWDRzN55Dxyk0baMiwA2vQcN4mhTxiKAb9UCzOyZmS2VZTmYnZ3dW2QGPITMz8/3qsuUmX0ys/NFUcwUGQMPIQBujZExbCU5Oa0LSVvb6m5qNDNE4SBk9J7xxzMj92XKW8jDipClxpN2iNaFmNmLrQnTbqrxpB3CQ8iHrQkHg8G+xpN2CI8ly+9NtANICBmdEhJjPGxm98zsvfeRBnYYo1pX+v3+oab7U4u6CZMMAOveDUZ9MWs7kdIZIWlmeDcVk8dyU/3xENKZZQrbz5K3TfWnNnUTtl7of+Jf65aQhpEQMiSEDAkhQ0LIkBAyJISMqRUyDd9u2ZS9GK54NxSTx/QcnaSDuXRA1+HZsZY+f2qqP7WZJGEaUPor69LyZb9rXd6JjEn7U4vWE3YMCSFDQsiQEDIkhAwJIUNCyJAQMiSEDAkhQ0LIkBAyJIQMCSFDQsiQEDIkhAwJIUNCyJAQMiSEDAkhQ0LIkBAyJIQMCSFDQsiQEDIkhAwJIUNCyJAQMiSEDAkhQ0LIkBAyJIQMCSFDQsiQEDKohAA4YmZXATwG8ArAR+8f/sM5XISEEE4AeDDuCqTco2hbCIDrZvbFe+AgDQ8hCvAKSUvWfQDnyrKMc3NzexovKHf+ImM1xnjcu77sGCfDzJ7keGchq5D1GONB77qyZczsuOZdU9ZUhcQYj3nXlDVVIdpJOVO9JafX6+33rilr0s2eW4WEEE5515Q1AO5UHuq3vWvKmhDCmcpzZDPGeNK7rmwZDoe7q9evAnhdliW8a8sWMzs95n3kjZmd9a4tWwDc2OZM62kI4UII4aiOU9plBsBdHb/D9/8hFXaZ2WUz+ywxoBDyi3TsPrrJ87vEwF9I5b7bK+kjBzN7CWAjd0GFEEIIUbTDT4D3bD1QvuoYAAAAAElFTkSuQmCC"/>
										</div>
										<div class="text">Booking</div>
									</Link>
								</li>
								<li>
									<Link to="/booking">
										<div class="icon">
										<img src="data:image/png;base64,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"/>
										</div>
										<div class="text">Services</div>
									</Link>
								</li>
								<li>
									<Link to="/booking">
										<div class="icon">
										<img src="data:image/png;base64,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"/>
										</div>
										<div class="text">Call Us</div>
									</Link>
								</li>
								<li>
									<Link to="/booking">
										<div class="icon">
										<img src="data:image/png;base64,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"/>
										</div>
										<div class="text">Whatsapp</div>
									</Link>
								</li>
							</ul>
						</div>
					</div>
					<div className="footer-info bg-primary">
						<div className="container">
							<div className="row align-items-center">
								<div className="col-lg-3 col-md-6 col-sm-6 mb-30">
									<div className="footer-logo">
										<img src={logo2} alt=""/> 
									</div>
								</div>
								<div className="col-lg-3 col-md-6 col-sm-6 mb-30">
									<div className="feature-container left footer-info-bx">
										<div className="icon-lg">
											<span className="icon-cell"><img src={icon3} alt=""/></span> 
										</div>
										<div className="icon-content">
											<p>2005 Stokes Isle Apt. 896, Venaville 10010, USA</p>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-6 col-sm-6 mb-30">
									<div className="feature-container left footer-info-bx">
										<div className="icon-lg">
											<span className="icon-cell"><img src={icon1} alt=""/></span> 
										</div>
										<div className="icon-content">
											<p>+001 123 456 790 <br/>(02) 3424 44 00</p>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-6 col-sm-6 mb-30">
									<div className="feature-container left footer-info-bx">
										<div className="icon-lg">
											<span className="icon-cell"><img src={icon2} alt=""/></span> 
										</div>
										<div className="icon-content">
											<p>info@yourdomain.com <br/>example@support.com</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="footer-top bt0">
						<div className="container">
							<div className="row">
								<div className="col-xl-3 col-md-6">
									<div className="widget footer_widget">
										<h5 className="footer-title">Company</h5>
										<p className="mb-20">Need a special repair service? we are happy to fulfil every request in order to exceed your expectations</p>
										<div className="ft-content">
											<i className="fa fa-phone"></i>
											<span>Talk To Our Support</span>
											<h4>+971 80 079477 </h4>
										</div>
									</div>
								</div>
								<div className="col-xl-3 col-md-6">
									<div className="widget widget-link-2">
										<h5 className="footer-title">Our Solutions</h5>
										<ul>
											<li><Link to="/">Home</Link></li>
											<li><Link to="/ourbrands">Brands</Link></li>
											<li><Link to="/services">Services</Link></li>
											<li><Link to="/packages">Packages</Link></li>
											<li><Link to="/aboutus">Who we are</Link></li>
											<li><Link to="/careers">Careers</Link></li>
											<li><Link to="/booking">Booking</Link></li>
											<li><Link to="/blogs">Media Center</Link></li>
											<li><Link to="/gallery">Snap Shots</Link></li>
											<li><Link to="/services">Our Services</Link></li>
											<li><Link to="/faq">FAQ</Link></li>
											<li><Link to="/contact">Contact Us</Link></li>
										</ul>							
									</div>
								</div>
								<div className="col-xl-3 col-md-6">
									<div className="widget recent-posts-entry">
										<h5 className="footer-title">Latest news</h5>
										<div className="widget-post-bx">
											<div className="widget-post clearfix">
												<div className="ttr-post-media"> 
													<img src={recentBlogPic1} alt=""/> 
												</div>
												<div className="ttr-post-info">
													<h6 className="post-title"><Link to="/blog-details">Precious Tips To Help You Get Better.</Link></h6>
													<ul className="post-meta">
														<li className="date"><Link to="/blog-details"><i className="fa fa-calendar"></i> 15 Aug 2021</Link></li>
													</ul>
												</div>
											</div>
											<div className="widget-post clearfix">
												<div className="ttr-post-media"> 
													<img src={recentBlogPic2} alt=""/> 
												</div>
												<div className="ttr-post-info">
													<h6 className="post-title"><Link to="/blog-details">Ten Doubts You Should Clarify About.</Link></h6>
													<ul className="post-meta">
														<li className="date"><Link to="/blog-details"><i className="fa fa-calendar"></i> 15 Aug 2021</Link></li>
													</ul>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-xl-3 col-md-6">
									<div className="widget widget_info">
										<h5 className="footer-title">Subscribe Now</h5>
										<p className="mb-20">Weekly Breaking News Analysis And Cutting Edge Advices On Job Searching.</p>
										<form className="subscribe-form subscription-form mb-30">
											<div className="ajax-message"></div>
											<div className="input-group">
												<input name="email" required="required" className="form-control" placeholder="Email Address" type="email"/>
												<div className="input-group-append">
													<button name="submit" value="Submit" type="submit" className="btn btn-block btn-primary radius-sm">Send</button>	
												</div>
											</div>
										</form>
										<ul className="list-inline ft-social-bx">
											<li><a target="_blank" rel="noreferrer" href="https://www.facebook.com/" className="btn button-sm"><i className="fa fa-facebook"></i></a></li>
											<li><a target="_blank" rel="noreferrer" href="https://twitter.com/" className="btn button-sm"><i className="fa fa-twitter"></i></a></li>
											<li><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/" className="btn button-sm"><i className="fa fa-linkedin"></i></a></li>
											<li><a target="_blank" rel="noreferrer" href="https://www.instagram.com/" className="btn button-sm"><i className="fa fa-instagram"></i></a></li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="footer-bottom">
						<div className="container">
							<div className="row">
								<div className="col-lg-6 col-md-6 col-sm-12 text-center text-md-start">
									<p className="mb-0">© Copyright Swiss Auto 2023. All right reserved.</p>
								</div>
								<div className="col-lg-6 col-md-6 col-sm-12 text-center text-md-end">
									<ul className="widget-link">
										<li><Link to="/">Home</Link></li>
										<li><Link to="/aboutus">About</Link></li>
										<li><Link to="/faq">FAQs</Link></li>
										<li><Link to="/services">Services</Link></li>
										<li><Link to="/contact">Contact</Link></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</footer>
			
			</>
		);
	}
}

export default aboutSection;