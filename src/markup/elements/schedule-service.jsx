import React, { Component } from 'react';
import { useHistory } from 'react-router-dom';

function ScheduleServiceSection(){
	const history = useHistory();
	const handleSubmit = async (event) => {
    event.preventDefault();

    // Fetch API to submit the form data
    try {
      const response = await fetch('https://swiss-backend.vercel.app/api/form-submit', {
        method: 'POST', // You may want to change the method depending on your server's requirements
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
		  date: new Date(),
          name: event.target.elements.name.value,
          email: event.target.elements.email.value,
          phone: event.target.elements.phone.value,
          service: event.target.elements.service.value,
          message: event.target.elements.message.value,
        }),
      });

      // Handle the response as needed
      console.log('Form submitted successfully', response);
    } catch (error) {
      console.error('Error submitting form', error);
    }


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
	  alert("Form submitted")
      event.target.reset();
	  history.push('/thankyou');
      // Reset the form or perform other actions
    } else {
      // Handle errors
      console.error("Form submission failed");
    }

  };
		return(
			<>
				<section className="section-area bg-primary form-card">
					<div className="container">
						<div className="row align-items-center">
							<div className="col-lg-3 align-self-center">
								<div className="form-head text-white mb-md-30">
									<h3 className="title">Schedule Service</h3>
									<h6 className="mb-0"><span className="fw4 mr-1">OR Call&nbsp;</span>+966 55 783 5647
</h6>
								</div>
							</div>
							<div className="col-lg-9">
								<form onSubmit={handleSubmit} >
									<div className="row sp5">
										<div className="col-md-4 col-sm-6">
											<div className="form-group">
												<input type="text" className="form-control" placeholder="Name*" name="name" required/>
											</div>
										</div>
										<div className="col-md-4 col-sm-6">
											<div className="form-group">
												<input type="text" className="form-control" placeholder="Email*" name='email' required/>
											</div>
										</div>
										<div className="col-md-4 col-sm-6">
											<div className="form-group">
												<input type="text" className="form-control" placeholder="Phone*" name='phone' required/>
											</div>
										</div>
										<div className="col-md-4 col-sm-6">
											<div className="form-group">
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
										<div className="col-md-4 col-sm-6">
											<div className="form-group">
												<input type="text" className="form-control" name='message' placeholder="How Can We Help you*" required />
											</div>
										</div>
										<div className="col-md-4 col-sm-6">
											<div className="form-group">
												<button type="submit" className="btn btn-warning w-100">REQUEST A CALL BACK</button>
											</div>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</section>
			</>
		);
}

export default ScheduleServiceSection;