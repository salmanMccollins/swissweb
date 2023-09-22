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
				
				<section className='section-area section-sp2 bg-gray ov-hidden cstBg TestWrap'>
					<div className='container'>
					<div className="heading-bx text-center">
							<h6 className="title-ext text-primary">Our Reviews</h6>
							<h2 className="title mb-0">What our customers say</h2>
							<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or slightly believable.</p>
						</div>
						<ElfsightWidget widgetId={"27667d34-8b84-4b11-8a87-f4198485ba57"} lazy />
					</div>
					{/* <ElfsightWidget widgetId={"4d5c4a86-db7a-46b3-9d85-a65483b969c1"} lazy /> */}
				</section>
				
			</>
		);
	}
}

export default TestimonialSection;