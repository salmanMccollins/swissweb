import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Images
import iconPDF from "../../../images/icon/whatsapp.png";
import iconDOC from "../../../images/icon/book.png";
import iconDOC1 from "../../../images/icon/callus.png";

class widgetBrochure extends Component{
	render(){
		return(
			<>
				<div className="widget">
					<div className="brochure-bx">
						<h5 className="title-head">Quick Links</h5>
						<a target='_blank' href="https://wa.me/966539699984?text=Hi%20Swiss%20Auto%20%2C%20%0AI%20would%20like%20to%20know%20more%20about%20your%20products" className="download-link">
							<img src={iconPDF} alt=""/>
							<h5 className="title">Whatsapp Us</h5>
							<span>+966 55 783 5647
</span>
						</a>
						<a target='_blank' href="tel:+966 55 783 5647
" className="download-link">
							<img src={iconDOC1} alt=""/>
							<h5 className="title">Call Us Now</h5>
							<span>+966 55 783 5647
</span>
						</a>
						<Link to="/booking" className="download-link">
							<img src={iconDOC} alt=""/>
							<h5 className="title">Request a call Back</h5>
							<span>We will contact you in 1 hour</span>
						</Link>
					</div>
				</div>
			</>
		);
	}
}

export default widgetBrochure;