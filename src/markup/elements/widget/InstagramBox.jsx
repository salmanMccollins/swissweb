import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ElfsightWidget } from 'react-elfsight-widget';


class InstagramBox extends Component{
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
							<h6 className="title-ext text-primary">Our Feeds</h6>
							<h2 className="title mb-0">Follow us on Instagram</h2>
							<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or slightly believable.</p>
						</div>
						<ElfsightWidget widgetId={"9fb2aae0-0f80-4e25-b739-146573a7766a"} lazy />
					</div>
					
				</section>
				
			</>
		);
	}
}

export default InstagramBox;