import React, { Component } from 'react';

class ScheduleServiceSection extends Component{
	handleSubmit = async (event) => {
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
      "https://script.google.com/macros/s/AKfycbyaRgMpAMcvnPaCO-NPk8_h67cs_601LYaNZNW6zmcvzavlkyYpliHI3aDWkEfXSHW-_g/exec",
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
      // Reset the form or perform other actions
    } else {
      // Handle errors
      console.error("Form submission failed");
    }

  };
	render(){
		return(
			<>
				<section className="section-area bg-primary form-card">
					<div className="container">
						<div className="row align-items-center">
							<div className="col-lg-3 align-self-center">
								<div className="form-head text-white mb-md-30">
									<h3 className="title">Schedule Service</h3>
									<h6 className="mb-0"><span className="fw4 mr-1">OR Call</span> +22 123 456 7890</h6>
								</div>
							</div>
							<div className="col-lg-9">
								<form onSubmit={this.handleSubmit} >
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
												<select className="form-select form-control" name='service' required>
													<option>Type of Service*</option>
													<option>Oil change</option>
													<option>Break repair</option>
													<option>Car wheels</option>
													<option>General service</option>
													<option>Car batteries</option>
													<option>Car painting</option>
													<option>Wheel change</option>
													<option>Engine repair</option>
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
												<button type="submit" className="btn btn-warning w-100">SUBMIT REQUEST</button>
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
}

export default ScheduleServiceSection;