import React, { Component, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// Images
import logo2 from '../../images/whitelogo.png';
import icon1 from '../../images/icon/contact/icon1.png';
import icon2 from '../../images/icon/contact/icon2.png';
import icon3 from '../../images/icon/contact/icon3.png';
import recentBlogPic1 from '../../images/blog/recent-blog/pic1.jpg';
import recentBlogPic2 from '../../images/blog/recent-blog/pic2.jpg';
import axios from 'axios';

function AboutSection() {

	const [content, setContent] = useState([]);
  	const [currentPage, setCurrentPage] = useState(1);

	useEffect(() => {
		axios.get(`https://swiss-backend.vercel.app/api/blogs/blog?page=${currentPage}`).then((response) => {
		setContent(response.data.data);
		console.log(response.data.data);
		});
	}, [currentPage]);

		return(
			<>
				
				<footer className="footer">
				<div class="halo-sticky-toolbar-mobile mob-only">
						<div class="bottom-bar">
							<ul class="bottom-bar--list">
								<li>
									<Link to="/">
										<div class="icon">
										<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACrUlEQVR4nO2YS2sUQRDHWw0qKoJiMFs1yYIsBFamKktQEcSgJ8GbIDl4FP0I5qK3HPwKCl5E0Iue9KCg4gNFD4oHb+IDH2GdqjGugm9HOjPZLDFxZ+I+JqR/ULAw3dX133pM7xrjaE7YVykq0E0Fvm4/m8VIgLxHkauKHFkTJFGP9pnFQmTMMgE+Lkg/pwQAXbYWi+FfAnTCrjF5RjZuX6/AF5OgfwvQyciY5TZwRR5rEHdlcsDfYPJIiEMswM/iQFnnKqPGchOkV4E3tM3kidDjQ4r8OcnEo8kBf8t8axW29ivQg6neAf4iBTpcf4ZxP822tguIzEiPLZ/6ocBn3xaG1zTdVyqtEqDT9UEAdCoql1d2RYig7ynw/aSUvirykaw+7J5kbzTtSxsCb7uQ0PN3K/BEEsBrQdqxUF8fgCqC/HyuDGi7hExNnwIfE6Qf8SF0tVYY3vS/fq0P60tnxIwlk671QmaPVkUaj8zBFa3yb30p0njs22aaLrVcSAD+oCI9TbLwUZAOmDYRIu8X4LDlza5Ao4r8KWnqJ1WvUjJtpupVSvasmWlIoy0brQJ0bmIzrTUd4kWxuFqRz8we0Zmc1PqGeu2NNXkD28YeM11CkY8K8LekN+8E/RVItTEs0C4Fepek9I1CZafpMkHBHxakl8kX+z5A2ptCPX1P+uFWtVjuMzmhFo/oa41V8tctutpbXifI5xsnhe0RkzMiM9LTGKMgX7Cx1xco0MPp0dqxi9oC0bqQOFZBuld/KEh3Belx/L5YHEIC8AftTVuBbvxzockpmjY+J6RDqMvIUsuIzvMztZk5Ic1o+zfVqXPUCWGXkSyoK62UuGbPiLrSSokrrYyoK62UuNLKiLrSSokrrYzoki0tzbmZZti/7rsdpDYxQb6dNZMOh1kYfwD0xAYlL9BWvQAAAABJRU5ErkJggg=="/>
										</div>
										<div class="text">Home</div>
									</Link>
								</li>
								<li>
									<Link to="/booking">
										<div class="icon">
										<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFI0lEQVR4nO1ZWYicRRBujRjvaEKyM1X/7GBcNJndqZpxdDEGCUIE9UFQyaMP4kG8RRFBPPBFRFCiRCMqisQnH2K8EDUSzYMYo4LisQ+JMasxu/tX/7smGhOTOFL/35Mddo6de0bYDwaGv6q7q7qrq6qrjJnDHObQduSNOSHADAdAt1nkVyzQVkHaI8CBIB0Nf9H/PUpzPGsDHCIda7oN8XjYIq23QL9Z5HxDv3Asrfe9zMUdFV53UJCus0A7igUS5FEB2ihxvlMgs3oqMXjeVH/6nLxZMy9vVp2k//Wb0iIeesMC/zpDqS/F42vbfkp+InuRLjYtPIkgP63fG1lcx+hYnUOAbZFC2/14OtdyBXRHBehJQToSLcT7dFd3J5OntGqNUe+SUwXpbos85jbpiAV+QtduyQL7Y5nFAvSpm/yoBXpmXx+dbtqE8cWpMyzwunCt6HS2qgxNTWphMGGRR9yEvwfx9GWmQwi8zCo9eWduI4Jpr6GJxpYM9QnwrvAkgL/1E1kwHYafyIIAf+dk2Lmvj5bUba964dxufKUex3QJU15qoSB/4+7mF3XdSwv8rLsTu8eTqZjpMib6c3FB+sUps66mQT7y5YL8rwD9o67R9AjE42GVSWXT+1OVOW/MiYVjFKDHTI/BIj/uzP1rlbUioyBdX4jSek9Mj2FvPHdaIR3SDKAi4/F44dFd9SxQKY9qlK8aBPleN25LxZih9meRD/iLLjiz6mxdVCRYmltgkf5SWcuGBE2rXeDbVM/EnVZEYZHfdmNvMTNhgV93iqw1Pa5IAJnbo7H0WglxOuhkV/S6IjbOKwvBupww40qsOw3ogiLjyVTMjR0rIQrwISXmBwbm97oi+YGB+S7/OlQqDNBBJTbzxghT8OnH0cFm+SpBZXTpyt8lRAu0V4ma15gGoelN0U7/1CxfQ6alYT8kxnmlaRAC9GJBQAF+uVm+WS870I4SogC9FKUn6XtME0ldQcBKiV2tfNXgA9/h3O+rJUTrpW92yeJ7poEdEiR/2u75k2b4ZoMgvxPKGqebSojqdvXBL8CH9TFT38SuKOEqK0Esm2yGrxr0kacOQpCPVXwrCfAHzrweMnWgSDh/Ip6+sFm+arBA9zmz+rAikxbPCrslC4fPqnnyKPV/d7Z3fa181SsskXf1IX2NqQZB3uaUeb4qY/EYj4dbyVcJWudy3mr7rAVBLSzrPQmfu/HMFaZHYCFzaXiHkY/p/5oGCfDDzsfbCaDz2y7lbPJ4jIU6sSA9VfNAfQ9bpM1OmV2TfXSu6RL2h5VOV9tC3lZ3Lqhl0eO1Ld2NBA+aDsOGlU76wXm7kT9g2aKGJlLP5RozOtGfPtINLZe20tqQWS1IEy5If990fS2qOrrXYzTpRtNGBEtzCwR5g6sfhPGi4ZMoB30fV0ydW1eFf0BjmLubhwXoEW0UtXQh7Ta5CzfaqjlDpwLZFRb4OQGaKsqIP7MeDZl2QIBvdEe9udxDR5NNi/SWAD2qrTmJZZdrBFenoeYZFqNj2eUW01dFaQa9WWjqzFDgStNOWKSPy5Vg8qnUyUXlmbp/gvyztt40EJt2I4jn+jWiqt0WX7ywf4H0eSERtMi3hi06oPct0o+uvHkgKqiFtj+il1eQX9AT9uNDy0wnIcgbiutIoSdDflCAJp1J7Ay8dNr0MoIw93IvOqD7Xe8kLB25b5smk3y26WXkzZp52iUqa99hmzpztfk/QFzyqFE96hjRR9o3mQTKdlu2OZgex3/qO3dayBY5AgAAAABJRU5ErkJggg=="/>
										</div>
										<div class="text">Get a Quote</div>
									</Link>
								</li>
								<li>
									<Link to="/services">
										<div class="icon">
										<img src="data:image/png;base64,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"/>
										</div>
										<div class="text">Services</div>
									</Link>
								</li>
								<li>
									<a href="tel:+966 53 969 9984">
										<div class="icon">
										<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEqUlEQVR4nO1ZXWgcVRQ+sWq1/qCtbTLnbLKigZY0c86s6y8oKgpKH1TUKIjWn0KlIj755A8ikoda36o+6IMPRajEIqJWxKpFLILSoiJSUQlWY0zm3EkaFbVaR+7OnWRddtNNzLRXyQf7snvn7r1zz/nOd74LsIhF/L8x2ROek2B0n0EZUpRPFXlSUYwhfiLt7V0KPiOFy483FA0Ykl1K8pchSZt+kN/T5ReeDr4hBehQ4psMyf66BU8p8raY+I6kFIYTZTkjJrnSoHznft871RWtBF8Ql6ILDPJHdRv4MkHeFK9YfVqz8UlXpTy9YeSPRzv5FDiWsHFuUAaV+A+3qO8NyUYbXkd69sdV/Z2K8rV9TpFfb+eZQjAehOcpyme1hRD/qcSbR4LqsrnMMVaq9CrxeDaHbIGjDQ14g6L85sJov8HKJfOdKwn4UkU+VCOGEl8LRwNptXqCEj8zkwu89UDp4pP/7bwG+UF3snugaIx28ioleT/LBflVidcv1NyTPeGZ7uX8DEUixnC1En/rYvlA3F05fyFfkCF+JadjKAoTyBVDMuaO/gPLNgs1t0G5ZTrZbdUnvgiKgEvECfdHb8yWD2Mr+05td96xcl+XQdlRl2tvJ0G1B4qAKfE1hvgXF07bbaI3G5fCwBJFeThjMX4h7q7gbPMq8fpMb9U2cDCrO9BRyCaU+EZF+d2dxHN2sa2LGu9u0FE/2Y01nl7SVSkrypv5OEXZaXBtNxQFy+XTmyDZ0uptmRL3K/GwY7HRpBTdVh8ulhwUozutltJA7re6y32vVntBkbA5URdOLSttjOFVLiysLHm3ngBikiuUZF8zxask2y1LFboJy06WOdyxP9/yJChaZ+uIC7ttaV/fiY1jUoDjFOUuuyElOazIn8QYXgdFw9aJOop9qVVO/CN3SJ4qLEnng1rC5sUOZWezN2xhkG+dUbkyCD4hrWmnTHbYYtdKvcZBdL0Vdi6cHgPfoCTPuoT9oRX/K0ZX5zlhSB4H36ABb8gFoO3wmo1JgvCyGRbjJ8E3jGdNUa2fsFzfUijOVOCt4BvS3t6leWdniJ9uNuYgrllhkL9yJzZk6RR8g0EZzDu7ZiLQLtqKuLzRGS6XTwI/Q4ptW3nYVvFmY5TCh9wmxrUkBL4hBejILZtWiWvtmzx3EpLbwUcohTc7qh2Zze2wUtzlxg7wDSkMLDHEX7jc2HikSp8LQltDwCeYzIutOYDtGGGK8ojTU/u8YixDsqsW98ib2hlv2WxGfzWvM8fE2tfMFZ9q5cU2gyLfU7izMRfU7idc7zB3myazQ8EHGJSh+dCpEj/gXsDn4APUyRF7P9HuMxOdcrY1EexzcSA3gA8wjkqtLdl+4ZR33Gm8CL5AieMsaaN17Yw3JPe6JB+bCqpngS9Q5Edzy2aye+25s421PtO0O0LRAPjWzhrit1xP/s1sTmDNNMs2/TL4iJGgusz25I5Oh+Ogf03jGEW5OzfQFtKoXnBMlvqWG5QP88XaNjb/bbynGihK4rXqbTwZQ/KqY6RD9qbIXbJk35G8Bv8VpNY9J97ceJlfu5/wsZFqy6wm3uNckr2FXbIsYhHgHf4GBPIMAyA7YvYAAAAASUVORK5CYII="/>
										</div>
										<div class="text">Call Us</div>
									</a>
								</li>
								<li>
									<a href="https://api.whatsapp.com/send/?phone=966563110154&amp;text=Hi%2C+Swiss+Auto+Services&amp;type=phone_number&amp;app_absent=0">
										<div class="icon">
										<img src="data:image/png;base64,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"/>
										</div>
										<div class="text">Whatsapp</div>
									</a>
								</li>
							</ul>
						</div>
					</div>
					{/* <div className="footer-info bg-primary">
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
					</div> */}
					<div className="footer-top bt0">
						<div className="container">
							<div className="row">
								<div className="col-xl-3 col-md-6">
									<div className="widget footer_widget">
										<h5 className="footer-title">About Us</h5>
										<p className="mb-20">Royal Swiss Auto Services - A premium car service center with unparalleled automotive expertise offering the precise services and auto repairs for the customers</p>
										<div className="ft-content">
											<i className="fa fa-phone"></i>
											<span>Talk To Our Support</span>
											<h4>+966 53 969 9984 </h4>
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
											<li><Link to="/blogs">Blogs</Link></li>
											<li><Link to="/services">Our Services</Link></li>
											<li><Link to="/contact">Contact Us</Link></li>
										</ul>							
									</div>
								</div>
								<div className="col-xl-3 col-md-6">
									<div className="widget recent-posts-entry">
										<h5 className="footer-title">Latest Blogs</h5>
										<div className="widget-post-bx">
										<a href={`/en/blog-details/${content[0]?.blogUrl}`}>
											<div className="widget-post clearfix">
												<div className="ttr-post-media"> 
													<img src={content && content[0]?.photo} width={"120px"} height={"96px"} style={{objectFit:"cover"}} alt=""/> 
												</div>
												<div className="ttr-post-info">
													<h6 className="post-title"><Link to="/blog-details">{content && content[0]?.title}</Link></h6>
													<ul className="post-meta">
														<li className="date"><Link to="/blog-details"><i className="fa fa-calendar"></i>&nbsp;{content && content[0]?.date}</Link></li>
													</ul>
												</div>
											</div>
										</a>
										<a href={`/en/blog-details/${content[1]?.blogUrl}`}>
											<div className="widget-post clearfix">
												
												<div className="ttr-post-media"> 
													<img src={content && content[1]?.photo} width={"120px"} height={"96px"} style={{objectFit:"cover"}}  alt=""/> 
												</div>
												<div className="ttr-post-info">
													<h6 className="post-title"><Link to="/blog-details">{content && content[1]?.title}</Link></h6>
													<ul className="post-meta">
														<li className="date"><Link to="/blog-details"><i className="fa fa-calendar"></i>&nbsp;{content && content[1]?.date}</Link></li>
													</ul>
												</div>
											</div>
										</a>
										</div>
									</div>
								</div>
								<div className="col-xl-3 col-md-6">
									<div className="widget widget_info">
										<h5 className="footer-title">Subscribe Now</h5>
										<p className="mb-20">To get our weekly and monthly updates related to automotive industry subscribe our newsletter at the earliest</p>
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
											<li><a target="_blank" rel="noreferrer" href="https://www.facebook.com/swissautosa/" className="btn button-sm"><i className="fa fa-facebook"></i></a></li>
											<li><a target="_blank" rel="noreferrer" href="https://www.instagram.com/swissautosa/" className="btn button-sm"><i className="fa fa-instagram"></i></a></li>
											<li><a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCIDHmzSK6mFQykqrG_SjVig" className="btn button-sm"><i className="fa fa-youtube"></i></a></li>
											<li><a target="_blank" rel="noreferrer" href="https://api.whatsapp.com/send/?phone=966563110154&text=Hi%2C+Swiss+Auto+Services&type=phone_number&app_absent=0" className="btn button-sm"><i className="fa fa-whatsapp"></i></a></li>
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

export default AboutSection;