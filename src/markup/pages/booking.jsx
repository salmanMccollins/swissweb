import React, {Component} from 'react';
import { Link } from 'react-router-dom';

// Layout
import Header from "../layout/header";
import Footer from "../layout/footer";

// Images
import bnrImg from "../../images/banner/bnr4.jpg";
import { useHistory } from 'react-router-dom';

function Booking(){
	const history = useHistory();
	const handleSubmit = async (event) => {
    event.preventDefault();
const formData = new FormData(event.target);

    // Send the data to the Google Apps Script
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbxPEatfdRJAGBRqYYn7VI08nb6lZnMzF8qSTvToiJFTKqyZEuVeB1ML69FoWqj6-SnmZA/exec",
      {
        method: "POST",
        body: formData,
      }
    );

    // Handle the response if needed
    if (response.ok) {
      // Successful submission
      console.log("Form submitted successfully");
	//   alert("Form submitted")
	  history.push('/thankyou');
	  
      event.target.reset();
      // Reset the form or perform other actions
    } else {
      // Handle errors
      console.error("Form submission failed");
    }
		}
		return (
			<>
				
				<Header />
				
				<div className="page-content bg-white">
					
					<div className="page-banner ovbl-dark" style={{backgroundImage: "url("+bnrImg+")"}}>
						<div className="container">
							<div className="page-banner-entry text-center">
								<h1><span>Booking</span></h1>
								<nav aria-label="breadcrumb" className="breadcrumb-row">
									<ul className="breadcrumb">
										<li className="breadcrumb-item"><Link to="/"><i className="las la-home"></i>Home</Link></li>
										<li className="breadcrumb-item active" aria-current="page">Booking</li>
									</ul>
								</nav>
							</div>
						</div>
					</div>
					
					<section className="section-area section-sp1 bg-light">
						<div className="container">
							<div className="row">
								<div className="col-lg-8 col-md-7 mb-30 mb-md-50">
									<form className="booking-form" onSubmit={handleSubmit} >
										<div className="row">
											<div className="col-lg-4">
												<div className="form-group">
													<h6 className="form-title">VEHICLE YEAR</h6>
													<div className="input-group">
														<input type="text" name='year' className="form-control" placeholder='2008' required/>
													</div>
												</div>
											</div>
											<div className="col-lg-4">
												<div className="form-group">
													<h6 className="form-title">VEHICLE MAKE</h6>
													<div className="input-group">
														<select className="form-control" name='make' required>
															<option value="" selected="selected">Choose...</option>
															<option value="Bentley">Bentley</option>
															<option value="jaguar">Jaguar</option>
															<option value="range-rover">Range Rover</option>
															<option value="mini-cooper">Mini Cooper</option>
															<option value="rolls-roys">Rolls Roys</option>
															<option value="audi">Audi</option>
															<option value="bmw">BMW</option>
															<option value="mercedes">Mercedes</option>
															<option value="porache">Porache</option>
															<option value="volks-wagen">Volks Wagen</option>
															<option value="ferrari">Ferrari</option>
															<option value="lamborghini">Lamborghini</option>
															<option value="maserati">Maserati</option>
															<option value="cadillac">Cadillac</option>
															<option value="chevrolet">Chevrolet</option>
															<option value="dodge">Dodge</option>
															<option value="ford">Ford</option>
															<option value="gmc">GMC</option>
															<option value="jeep">Jeep</option>
															<option value="infinitty">Infinitty</option>
															<option value="lexus">Lexus</option>
															<option value="pagani">Pagani</option>
															<option value="bugatti">Bugatti</option>
															<option value="mclaren">Mclaren</option>
															<option value="maybach">Maybach</option>
														</select>
													</div>
												</div>
											</div>
											<div className="col-lg-4">
												<div className="form-group">
													<h6 className="form-title">VEHICLE MILEAGE</h6>
													<div className="input-group">
														<input type="number" name='mileage' className="form-control" required/>
													</div>
												</div>
											</div>
											<div className="col-lg-12">
												<div className="form-group">
													<h6 className="form-title">SELECT SERVICES NEEDED</h6>
													<div className="input-group">
														<select className="form-control" name='service' required>
															<option value="" selected="selected">Choose...</option>
															<option value="Axle/Drive Shaft Repair">Axle/Drive Shaft Repair</option>
															<option value="Brake Repair">Brake Repair</option>
															<option value="Engine Cooling System Repair">Engine Cooling System Repair</option>
															<option value="Gearbox Repair">Gearbox Repair</option>
															<option value="Pre-Purchase Inspection">Pre-Purchase Inspection</option>
															<option value="Suspension Repair">Suspension Repair</option>
															<option value="Transmission Repair">Transmission Repair</option>
															<option value="Touchless Wheel Alignment">Touchless Wheel Alignment</option>
															<option value="AC Repair">AC Repair</option>
															<option value="Camera / Radar Calibration">Camera / Radar Calibration</option>
															<option value="Car Software Repair & Programming">Car Software Repair & Programming</option>
															<option value="Comfort System Repair">Comfort System Repair</option>
															<option value="Engine Control Unit Repair">Engine Control Unit Repair</option>
															<option value="Navigation Update">Navigation Update</option>
															<option value="Retrofit">Retrofit</option>
															<option value="Smart Body Repair">Smart Body Repair</option>
															<option value="Car Detailing">Car Detailing</option>
															<option value="Car Tinting">Car Tinting</option>
															<option value="Car DIP Color">Car DIP Color</option>
															<option value="Ceramic Coating">Ceramic Coating</option>
															<option value="Brake Caliper painting">Brake Caliper painting</option>
															<option value="Paint Protcetion Film">Paint Protcetion Film</option>
															<option value="WindShield Repair">WindShield Repair</option>
															<option value="Classic Car Restoration">Classic Car Restoration</option>
															<option value="Car Recovery">Car Recovery</option>
															<option value="Fleet Management">Fleet Management</option>
															<option value="Electric Car Repair">Electric Car Repair</option>
														</select>
													</div>
												</div>
											</div>
											
											<div className="col-lg-12">
												<div className="form-group">
													<h6 className="form-title">PERSONAL INFO</h6>
												</div>
											</div>
											<div className="col-lg-6">
												<div className="form-group">
													<div className="input-group">
														<input name="name" type="text" className="form-control" placeholder="Name" required/>
													</div>
												</div>
											</div>
											<div className="col-lg-6">
												<div className="form-group">
													<div className="input-group">
														<input name="email" type="email" placeholder="Email" className="form-control" required/>
													</div>
												</div>
											</div>
											<div className="col-lg-6">
												<div className="form-group">
													<div className="input-group">
														<input name="phone" type="text" placeholder="Phone Number" className="form-control" required/>
													</div>
												</div>
											</div>
											<div className="col-lg-6">
												<div className="form-group">
													<div className="input-group">
														<input name="subject" type="text" required className="form-control"  placeholder="Location"/>
													</div>
												</div>
											</div>
											<div className="col-lg-12">
												<div className="form-group">
													<div className="input-group">
														<textarea name="message" rows="4" className="form-control" required  placeholder="Type Message" ></textarea>
													</div>
												</div>
											</div>
											<div className="col-lg-12">
												<button name="submit" type="submit" value="Submit" className="btn btn-primary btn-lg"> Send Message</button>
											</div>
										</div>
									</form>
								</div>
								<div className="col-lg-4 col-md-5 mb-30">
									<aside className="sticky-top">
										<div className="widget">
											<h5 className="widget-title">You May Know</h5>
											<ul className="service-menu style-1">
												<li><Link to="/aboutus">About Us <i className="las la-question-circle"></i></Link></li>
												<li><Link to="/services">Our Services <i className="las la-cog"></i></Link></li>
												<li><Link to="/careers">Job & Career<i className="las la-user-plus"></i></Link></li>
												<li className="active"><Link to="/booking">Booking<i className="lab la-wpforms"></i></Link></li>
											</ul>
										</div>
									</aside>
								</div>
							</div>
						</div>
					</section>
					
				</div>
				
				<Footer />
				
			</>
		);
}

export default Booking;