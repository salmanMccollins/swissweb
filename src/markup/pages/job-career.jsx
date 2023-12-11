import React, {Component, useState} from 'react';
import { Link } from 'react-router-dom';

// Layout
import Header from "../layout/header";
import Footer from "../layout/footer";

// Elements
import WidgetContact from "../elements/widget/widget-contact";

// Images
import bnrImg from "../../images/banner/bnr2.jpg";
import JobApplicationForm from '../elements/job-app';

function JobCareer() {

	
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

export default JobCareer;