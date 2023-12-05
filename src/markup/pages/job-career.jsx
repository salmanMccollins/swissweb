import React, {Component} from 'react';
import { Link } from 'react-router-dom';

// Layout
import Header from "../layout/header";
import Footer from "../layout/footer";

// Elements
import WidgetContact from "../elements/widget/widget-contact";

// Images
import bnrImg from "../../images/banner/bnr2.jpg";
import JobApplicationForm from '../elements/job-app';

class JobCareer extends Component{
	
	render(){
		return (
			<>
				
				<Header />
				
				<div className="page-content bg-white">
					
					<div className="page-banner ovbl-dark" style={{backgroundImage: "url("+bnrImg+")"}}>
						<div className="container">
							<div className="page-banner-entry text-center">
								<h1><span>Job Career</span></h1>
								<nav aria-label="breadcrumb" className="breadcrumb-row">
									<ul className="breadcrumb">
										<li className="breadcrumb-item"><Link to="/"><i className="las la-home"></i>Home</Link></li>
										<li className="breadcrumb-item active" aria-current="page">Job Career</li>
									</ul>
								</nav>
							</div>
						</div>
					</div>
					
					<div className="section-area bg-gray section-sp1">
						<div className="container">
							<div className="row">
								<div className="col-lg-8 col-md-7 mb-md-20">
									<div className="heading-bx">
										<h6 className="title-ext text-primary">Job Career</h6>
										<h2 className="title mb-0">CHOOSE THE CAREER THAT FITS YOU PERFECTLY</h2>
										<p className="head-px2">Our purpose follow leading design, engineering and industrial manufacturing company specialising in mining, oil, gas and engineering services.</p>
									</div>
									<JobApplicationForm />
									<div className="row">
										<div className="col-md-12 mb-30">
											<div className="job-career-box">
												<h4>ENGINE REPAIR</h4>
												<p><strong>Position:</strong> Mechanical Engineering</p>
												<p><strong>Experience:</strong> 4 5 years</p>
												<p><strong>Location:</strong> 2005 Stokes Isle Apt. 896, Venaville 10010, USA</p>
												<p><strong>Minimum Qualification Requirement :</strong> MBA</p>
												<p><strong>Job Description:</strong> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
												<p><strong>Key Responsibilities:</strong> If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
												<ul className="list-check">
													<li>Extensive experience with WordPress architecture, custom content types and plugins</li>
													<li>Strong understanding of PHP</li>
													<li>Solid foundation in front-end technologies such as HTML5, CSS3, Javascript and Ajax is plus.</li>
													<li>Experience with version control (Git preferred)</li>
													<li>Knowledge of best practices (standard naming conventions, code styles, security, etc.)</li>
													<li>Experience with Adobe Photoshop</li>
													<li>Intermediate understanding of coding SEO-friendly sites</li>
												</ul>
												<p><strong>Soft Skills:</strong> It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
												<Link to="/booking" className="btn btn-primary mt-10">Apply Now</Link>
											</div>
										</div>
										<div className="col-md-12 mb-30">
											<div className="job-career-box">
												<h4>BREAK REPAIR</h4>
												<p><strong>Position:</strong> Mechanical Engineering</p>
												<p><strong>Experience:</strong> 4 5 years</p>
												<p><strong>Location:</strong> 2005 Stokes Isle Apt. 896, Venaville 10010, USA</p>
												<p><strong>Minimum Qualification Requirement :</strong> MBA</p>
												<p><strong>Job Description:</strong> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
												<p><strong>Key Responsibilities:</strong> If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
												<ul className="list-check">
													<li>Extensive experience with WordPress architecture, custom content types and plugins</li>
													<li>Strong understanding of PHP</li>
													<li>Solid foundation in front-end technologies such as HTML5, CSS3, Javascript and Ajax is plus.</li>
													<li>Experience with version control (Git preferred)</li>
													<li>Knowledge of best practices (standard naming conventions, code styles, security, etc.)</li>
													<li>Experience with Adobe Photoshop</li>
													<li>Intermediate understanding of coding SEO-friendly sites</li>
												</ul>
												<p><strong>Soft Skills:</strong> It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
												<Link t="/booking" className="btn btn-primary mt-10">Apply Now</Link>
											</div>
										</div>
										<div className="col-md-12 mb-30">
											<div className="job-career-box">
												<h4>CAR PAINTING</h4>
												<p><strong>Position:</strong> Mechanical Engineering</p>
												<p><strong>Experience:</strong> 4 5 years</p>
												<p><strong>Location:</strong> 2005 Stokes Isle Apt. 896, Venaville 10010, USA</p>
												<p><strong>Minimum Qualification Requirement :</strong> MBA</p>
												<p><strong>Job Description:</strong> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
												<p><strong>Key Responsibilities:</strong> If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
												<ul className="list-check">
													<li>Extensive experience with WordPress architecture, custom content types and plugins</li>
													<li>Strong understanding of PHP</li>
													<li>Solid foundation in front-end technologies such as HTML5, CSS3, Javascript and Ajax is plus.</li>
													<li>Experience with version control (Git preferred)</li>
													<li>Knowledge of best practices (standard naming conventions, code styles, security, etc.)</li>
													<li>Experience with Adobe Photoshop</li>
													<li>Intermediate understanding of coding SEO-friendly sites</li>
												</ul>
												<p><strong>Soft Skills:</strong> It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
												<Link to="/booking" className="btn btn-primary mt-10">Apply Now</Link>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-5 mb-20">
									<aside className="sticky-top">
										
										
										<WidgetContact />
										
									</aside>
								</div>
							</div>
							
						</div>
					</div>
				
				</div>
				
				<Footer />
				
			</>
		);
	}
}

export default JobCareer;