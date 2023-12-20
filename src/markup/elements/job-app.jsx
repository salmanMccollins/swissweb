


import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const JobApplicationForm = () => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false)
  
const history = useHistory();

  const handleFileChange = async (e) => {
    setLoading(true)
    const formData = new FormData();
    formData.append('file', e.target.files[0]);
    try {
      const response = await fetch('https://fileupload.mcmedia.space/upload', {
        method: 'POST',
        body: formData,
      });

      if (response) {
        const result = await response.json();
        setFile(result.url)
        setLoading(false);
      } else {
        console.error('Failed to upload file.');
        setLoading(false);
      }
    } catch (error) {
      console.error('Error uploading file:', error);
      setLoading(false);
    }
  };
	const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior


	 try {
      const response = await fetch('https://swiss-backend.vercel.app/api/career', {
        method: 'POST', // You may want to change the method depending on your server's requirements
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
        date: new Date(),
            name: event.target.elements.name.value,
            email: event.target.elements.email.value,
            phone: event.target.elements.phone.value,
            resume:file,
          }),
      });

      // Handle the response as needed
      console.log('Form submitted successfully', response);
    } catch (error) {
      console.error('Error submitting form', error);
    }

    // Extract form data here and format it as needed
    const formData = new FormData(event.target);
    formData.append("resume", file);

    // Send the data to the Google Apps Script
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbxaSg9CgmEbeDt0Mvyd36mVLlmpmqj3o7Ic1frXbC3m50vLS0nCbxfArVazq3clsA2ksg/exec",
      {
        method: "POST",
        body: formData,
      }
    );

    // Handle the response if needed
    if (response.ok) {
      // Successful submission
      console.log("Form submitted successfully");
      event.target.reset();
	  
	  history.push('/thankyou');
      // Reset the form or perform other actions
    } else {
      // Handle errors
      console.error("Form submission failed");
    }
  }

  return (
    <div>
      

      <section className="section-area section-sp2">
						<div className="container">		
							<div className="row">
								<div className="col-lg-12 col-md-12">
									<form className="contact-form ajax-form" onSubmit={handleSubmit}>
										<div className="heading-bx mb-20">
											<h6 className="title-ext text-primary">Career Form</h6>
											<h2 className="title mb-0">UPLOAD YOUR RESUME HERE</h2>
										</div>
										<div className="row">
											<div className="col-lg-4 col-md-6">
												<div className="form-group">
													<div className="input-group">
														<input name="name" type="text" required className="form-control valid-character" placeholder="Your Name"/>
													</div>
												</div>
											</div>
											<div className="col-lg-4 col-md-6">
												<div className="form-group">
													<div className="input-group"> 
														<input name="email" type="email" className="form-control" required  placeholder="Your Email Address"/>
													</div>
												</div>
											</div>
											<div className="col-lg-4 col-md-12">
												<div className="form-group">
													<div className="input-group">
														<input name="phone" type="text" required className="form-control int-value" placeholder="Your Phone"/>
													</div>
												</div>
											</div>
											<div className="col-lg-12">
												<div className="form-group">
													<div className="input-group">
														<input type="file" onChange={handleFileChange} accept="application/pdf" required className="form-control int-value" placeholder="Your Phone" />
													</div>
												</div>
											</div>
											<div className="col-lg-12">
												<button name="submit" type="submit" disabled={loading} value="Submit" className="btn btn-primary btn-lg"> Send CV</button>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
					</section>
    </div>
  );
};

export default JobApplicationForm;
