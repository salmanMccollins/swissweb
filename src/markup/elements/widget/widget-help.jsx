import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Images
import aboutPic3 from "../../../images/newimages/howcanwehelp.webp";

class widgetHelp extends Component{
	render(){
		return(
			<>
				<div className="widget">
					<div className="help-bx">
						<div className="media">
							<img src={aboutPic3} alt=""/>
						</div>
						<div className="info">
							<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 476 476">
								<path d="M400.85,181v-18.3c0-43.8-15.5-84.5-43.6-114.7c-28.8-31-68.4-48-111.6-48h-15.1c-43.2,0-82.8,17-111.6,48 c-28.1,30.2-43.6,70.9-43.6,114.7V181c-34.1,2.3-61.2,30.7-61.2,65.4V275c0,36.1,29.4,65.5,65.5,65.5h36.9c6.6,0,12-5.4,12-12
								V192.8c0-6.6-5.4-12-12-12h-17.2v-18.1c0-79.1,56.4-138.7,131.1-138.7h15.1c74.8,0,131.1,59.6,131.1,138.7v18.1h-17.2
								c-6.6,0-12,5.4-12,12v135.6c0,6.6,5.4,12,12,12h16.8c-4.9,62.6-48,77.1-68,80.4c-5.5-16.9-21.4-29.1-40.1-29.1h-30
								c-23.2,0-42.1,18.9-42.1,42.1s18.9,42.2,42.1,42.2h30.1c19.4,0,35.7-13.2,40.6-31c9.8-1.4,25.3-4.9,40.7-13.9
								c21.7-12.7,47.4-38.6,50.8-90.8c34.3-2.1,61.5-30.6,61.5-65.4v-28.6C461.95,211.7,434.95,183.2,400.85,181z M104.75,316.4h-24.9
								c-22.9,0-41.5-18.6-41.5-41.5v-28.6c0-22.9,18.6-41.5,41.5-41.5h24.9V316.4z M268.25,452h-30.1c-10,0-18.1-8.1-18.1-18.1
								s8.1-18.1,18.1-18.1h30.1c10,0,18.1,8.1,18.1,18.1S278.25,452,268.25,452z M437.95,274.9c0,22.9-18.6,41.5-41.5,41.5h-24.9V204.8
								h24.9c22.9,0,41.5,18.6,41.5,41.5V274.9z"/>
							</svg>
							<h5 className="title mt-20">How Can We Help</h5>
							<p>Facing issues with your German, American, Japanese, European or any Electric cars? Just Dial <a href="tel:+966 53 969 9984">+966 53 969 9984</a> to get to know more about our electrical, mechanical and body & paint services. We specialize in providing auto repair services for all makes and models of the cars in Saudi Arabia</p>
							<Link to="/booking" className="btn btn-primary">Contact Us</Link>
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default widgetHelp;