import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Import Images
import icon1 from "../../../images/icon/contact/skin2/icon1.png"
import icon2 from "../../../images/icon/contact/skin2/icon2.png"
import icon3 from "../../../images/icon/contact/skin2/icon3.png"

class widgetContact extends Component{
	render(){
		return(
			<>
				<div className="widget">
					<h5 className="widget-title">Contact Us</h5>
					<ul className="contact-infolist">
						<li>
							<img src={icon1} alt=""/>
							<h6 className="contact-title">Contact Number</h6>
							<a href="tel:+966 53 969 9984">+966 53 969 9984</a>
						</li>
						<li>
							<img src={icon2} alt=""/>
							<h6 className="contact-title">Email Address</h6>
							<a href="mailto:hello@swissauto.ae">hello@swissauto.ae</a>
						</li>
						<li>
							<img src={icon3} alt=""/>
							<h6 className="contact-title">Address</h6>
							<p>2005 Stokes Isle Apt. 896, Venaville 10010, USA</p>
						</li>
					</ul>
				</div>
				
			</>
		);
	}
}

export default widgetContact;