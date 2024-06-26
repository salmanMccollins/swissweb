import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";

// Import Images
import bg1 from "../../images/1920x1080.webp"
import testPic1 from "../../images/testimonials/pic1.jpg"
import testPic2 from "../../images/testimonials/pic2.jpg"
import testPic3 from "../../images/testimonials/pic3.jpg"
import { ElfsightWidget } from 'react-elfsight-widget';
import testPic4 from "../../images/testimonials/pic4.jpg"

// Team Content
const content = [
	{ 
		thumb: testPic1,
		name: "Michel Bohman",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit risus at quam hendrerit, quis egestas ligula imperdiet. Cras ultricies massa nec nulla tincidunt, vel viverra lacus ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque metus odio, pellentesque sed.",		
	},
	{ 
		thumb: testPic2,
		name: "Kalina Mollika",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit risus at quam hendrerit, quis egestas ligula imperdiet. Cras ultricies massa nec nulla tincidunt, vel viverra lacus ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque metus odio, pellentesque sed.",		
	},
	{ 
		thumb: testPic3,
		name: "Michel Bohman",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit risus at quam hendrerit, quis egestas ligula imperdiet. Cras ultricies massa nec nulla tincidunt, vel viverra lacus ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque metus odio, pellentesque sed.",		
	},
	{ 
		thumb: testPic4,
		name: "Kalina Mollika",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit risus at quam hendrerit, quis egestas ligula imperdiet. Cras ultricies massa nec nulla tincidunt, vel viverra lacus ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque metus odio, pellentesque sed.",		
	},
]

class TestimonialSection extends Component{
	render(){
		
		const settings = {
			dots: false,
			infinite: true,
			speed: 1000,
			slidesToShow: 2,
			slidesToScroll: 1,
			responsive: [
				{
					breakpoint: 1191,
					settings: {
						slidesToShow: 2,
					}
				},
				{
					breakpoint: 767,
					settings: {
						slidesToShow: 1,
					}
				}
			]
		};
		
		return(
			<>
				
				<section className='section-area section-sp2 ov-hidden TestWrap position-relative MaskWrap bg-gray MaskWrap120'>
					<div className='container'>
					<div className="heading-bx text-center">
							<h6 className="title-ext text-primary">Our Reviews</h6>
							<h2 className="title mb-0">What our customers say</h2>
							<p>Check out the reviews from our huge number of satisfied customers to know more about our  quality of servicing and transparency</p>
						</div>
						<div>
						<ElfsightWidget widgetId={"dc7ae3c6-7779-477a-a278-1727ec233127"} lazy />
						</div>
					</div>
					<div className='Mask'>&nbsp;</div>
				</section>
				
			</>
		);
	}
}

export default TestimonialSection;