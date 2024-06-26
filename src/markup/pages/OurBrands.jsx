import React, {Component, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

// Layout
//import Header from "../layout/header";
import Footer from "../layout/footer";

// Elements
import Header from "../layout/header";
import { useTranslation } from 'react-i18next';
import ServicesSection from "../elements/services-1";
import TestimonialSection from "../elements/testimonial";

import bnrImg from "../../images/newimages/ourbrands.webp";

import ScheduleServiceSection from "../elements/schedule-service";
import HeroBanner from '../elements/widget/HeroBanner';
import OurBrandsLayout from '../elements/widget/OurBrandsLayout';
import axios from 'axios';
import { Helmet } from 'react-helmet';

function OurBrands() {

	const { t } = useTranslation();



	const handleRefresh = (url) => {
		window.location.href = url;
	};
	
		
		return (
			<>
			
				<Header />
                <div className="page-content bg-white BrandPage">
					
					<div className="page-banner ovbl-dark" style={{backgroundImage: "url("+bnrImg+")"}}>
						<div className="container">
							<div className="page-banner-entry text-center">
								<h1><span>Our Brands</span></h1>
								<nav aria-label="breadcrumb" className="breadcrumb-row">
									<ul className="breadcrumb">
										<li className="breadcrumb-item"><Link to="/"><i className="las la-home"></i>Home</Link></li>
										<li className="breadcrumb-item active" aria-current="page">Our Brands</li>
									</ul>
								</nav>
							</div>
						</div>
					</div>
                    
                    <OurBrandsLayout/>
                     <ScheduleServiceSection/>
                     <TestimonialSection/>
                     <ServicesSection/>
                     
				
				</div>
				<Footer />
				
			</>
		);
}

export default OurBrands;