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
							<a href="tel:+966 55 783 5647
">+966 55 783 5647
</a>
						</li>
						<li>
							<img src={icon2} alt=""/>
							<h6 className="contact-title">Email Address</h6>
							<a href="mailto:hello@swissauto.ae">hello@swissauto.ae</a>
						</li>
						<li>
							<img src={icon3} alt=""/>
							<h6 className="contact-title">Address</h6>
							<p>3547 Al Emem Soad Abdelaziz Bin Mohamed_street 8306 Al Khlidiya, 
Riyadh Saudi Arabia</p>
						</li>
					</ul>
				</div>
				
			</>
		);
	}
}

export default widgetContact;