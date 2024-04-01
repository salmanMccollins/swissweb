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
				
				<section className='section-area section-sp2 bg-gray ov-hidden cstBg TestWrap MaskWrap'>
					<div className='container'>
					<div className="heading-bx text-center">
							<h6 className="title-ext text-primary">Our Feeds</h6>
							<h2 className="title mb-0">Follow us on Instagram</h2>
							<p>To stay at the top of all automotive updates, car care tips and offers on car services and repairs, stay tuned to our Instagram handle.</p>
						</div>
						<ElfsightWidget widgetId={"207bee3c-8a36-4b6e-8104-282d2f172946"} lazy />
					</div>
					<div className='Mask'>&nbsp;</div>
				</section>
				
			</>
		);
	}
}

export default InstagramBox;