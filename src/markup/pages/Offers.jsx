import React, {Component, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

// Layout
import Header from "../layout/header";
import Footer from "../layout/footer";

// Images
import bnrImg from "../../images/banner/bnr5.jpg";
import blogGridPic1 from "../../images/blog/grid/pic1.jpg";
import blogGridPic2 from "../../images/blog/grid/pic2.jpg";
import blogGridPic3 from "../../images/blog/grid/pic3.jpg";
import blogGridPic4 from "../../images/blog/grid/pic4.jpg";
import blogGridPic5 from "../../images/blog/grid/pic5.jpg";
import blogGridPic6 from "../../images/blog/grid/pic6.jpg";
import authorThumbPic1 from "../../images/testimonials/pic1.jpg";
import authorThumbPic2 from "../../images/testimonials/pic2.jpg";
import authorThumbPic3 from "../../images/testimonials/pic3.jpg";
import authorThumbPic4 from "../../images/testimonials/pic4.jpg";
import authorThumbPic5 from "../../images/testimonials/pic5.jpg";
import authorThumbPic6 from "../../images/testimonials/pic6.jpg";

import HeroMainRow from '../elements/widget/HeroMainRow';
import ScheduleServiceSection from '../elements/schedule-service';
import TestimonialSection from '../elements/testimonial';
import OurBrandsLayout from '../elements/widget/OurBrandsLayout';
import ChooseUsSection from '../elements/choose-us';
import InstagramBox from '../elements/widget/InstagramBox';
import axios from 'axios';
import { Helmet } from 'react-helmet';
const content = [
	{ 
		thumb: blogGridPic1,
		authorThumb: authorThumbPic1,
		authorName: "Mark John",
		title: "Electric Vehicles In Doubled",
		blogText: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.",
	},
	{ 
		thumb: blogGridPic2,
		authorThumb: authorThumbPic2,
		authorName: "Merry Desulva",
		title: "Make Your Auto Clean As Before Like New",
		blogText: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.",
	},
	{ 
		thumb: blogGridPic3,
		authorThumb: authorThumbPic3,
		authorName: "Thomas deo",
		title: "Interior Cleaning with a Steam Generator",
		blogText: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.",
	},
	{ 
		thumb: blogGridPic4,
		authorThumb: authorThumbPic4,
		authorName: "Merry Desulva",
		title: "Types of Portal Sinks and their Advantages",
		blogText: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.",
	},
	{ 
		thumb: blogGridPic5,
		authorThumb: authorThumbPic5,
		authorName: "Thomas deo",
		title: "Excellent Customer Service Car Repair",
		blogText: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.",
	},
	{ 
		thumb: blogGridPic6,
		authorThumb: authorThumbPic6,
		authorName: "Mark John",
		title: "Car Wash Types by Service Type",
		blogText: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.",
	},
    { 
		thumb: blogGridPic1,
		authorThumb: authorThumbPic5,
		authorName: "Thomas deo",
		title: "Excellent Customer Service Car Repair",
		blogText: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.",
	},
	{ 
		thumb: blogGridPic2,
		authorThumb: authorThumbPic6,
		authorName: "Mark John",
		title: "Car Wash Types by Service Type",
		blogText: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.",
	},
]

function Offers(){
	
		return (
			<>

				<Header />
				
				<div className="page-content bg-gray">
					
					<div className="page-banner ovbl-dark" style={{backgroundImage: "url("+bnrImg+")"}}>
						<div className="container">
							<div className="page-banner-entry text-center">
								<h1><span>Latest Offers</span></h1>
								<nav aria-label="breadcrumb" className="breadcrumb-row">
									<ul className="breadcrumb">
										<li className="breadcrumb-item"><Link to="/"><i className="las la-home"></i>Home</Link></li>
										<li className="breadcrumb-item active" aria-current="page">Latest Offers</li>
									</ul>
								</nav>
							</div>
						</div>
					</div>
                    
					
					<section className="section-area section-sp2 cstBg">
					   <div className="container">
							<div className="row">
								{content.map((item) =>(
									<div className="col-xl-3 col-md-6">
										<div className="blog-card style-1 bg-white shadow">
											<div className="post-media">
												<a href="blog-details.html"><img src={item.thumb} alt=""/></a>
											</div>
											<div className="post-info">
												<h4 className="post-title"><Link to="/blog-details">{item.title}</Link></h4>
												<div className="post-content">
													<p className="mb-0">{item.blogText}</p>
												</div>
												{/* <ul className="post-meta">
													<li className="author"><img src={item.authorThumb} alt=""/>By <Link to="#">{item.authorName}</Link></li>
													<li className="date"><Link to="#">15 Aug 2021</Link></li>
												</ul> */}
											</div>
										</div>
									</div>
								))}
							</div>
							
						</div>
					</section>
                    <HeroMainRow/>
                    <ScheduleServiceSection/>

                    <TestimonialSection/>
                    <ChooseUsSection/>
                    <OurBrandsLayout/>
                    <InstagramBox/>
                                                
				</div>
				
				<Footer />
				
			</>
		);
}

export default Offers;