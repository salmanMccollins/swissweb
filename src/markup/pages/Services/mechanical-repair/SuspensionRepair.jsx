import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {Accordion} from 'react-bootstrap';

// Layout
import Header from "../../../layout/header";
import Footer from "../../../layout/footer";

// Elements
import WidgetBrochure from "../../../elements/widget/widget-brochure";
import WidgetHelp from "../../../elements/widget/widget-help";
import ScheduleServiceSection from '../../../elements/schedule-service';
import TestimonialSection from '../../../elements/testimonial';
import ChooseUsSection from '../../../elements/choose-us';
import ServicesSection from '../../../elements/services-1';

// Images
import bnrImg from "../../../../images/services/ClassicCarRestoration.webp";
import serviceSectionPic3 from "../../../../images/service-section/pic3.jpg";

class SuspensionRepair extends Component{
	
	render(){
		return (
			<>
        <Header />

        <div className="page-content bg-white">
          <div
            className="page-banner ovbl-dark"
            style={{ backgroundImage: "url(" + bnrImg + ")" }}
          >
            <div className="container">
              <div className="page-banner-entry text-center">
                <h1>
                  <span>CAR SUSPENSION REPAIR SERVICES</span>
                </h1>
                <nav aria-label="breadcrumb" className="breadcrumb-row">
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item text-uppercase">
                      <Link to="/">
                        <i className="las la-home"></i>Home
                      </Link>
                    </li>
                    <li className="breadcrumb-item text-uppercase">
                      <Link to="/services">
                        Services
                      </Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      {" "}
                      CAR SUSPENSION REPAIR SERVICES
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>

          <div className="section-area section-sp1 bg-white">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-5">
                  <aside className="sticky-top pb-1">
                    <WidgetBrochure />

                    <WidgetHelp />
                  </aside>
                </div>
                <div className="col-lg-8 col-md-7">
                  <div className="mb-10">
                    <div className="head-text mb-30">
                      <h4 className="title mb-10">
					  GET YOUR CAR SUSPENSION REPAIRS DONE BY THE EXPERTS IN SAUDI ARABIA

                      </h4>
                      <p className="mb-15">
					  Healthy suspension in your car is essential to keep your ride smooth and safe. All the components in your car suspension systems work together to absorb the bumps and shocks on the roads and result in a smooth and comfortable journey with enhanced safety.
                      </p>
                      <p className="mb-15">
                       
Though the suspension systems in modern cars last longer without any kind of repairs, proper care from suspension repair specialists is essential to reduce the extent of wear and tear damages caused by driving through potholes and other adverse road conditions.

                      </p>
                    </div>
                    <div className="row">
                   
                      <div className="col-xl-12">
                        <h5 class="title mb-15 text-uppercase">
						Car suspension repair signs: what do they look like?
                        </h5>
                        <ul className="list-check-squer">
                          <li>Your vehicle may begin to pull towards one side either right or left while driving even on straight roads.</li>
                          <li>
						  Whenever you hit the bump or pit on the roads you may notice excessive bouncing.
                          </li>
                          <li>
						  The vibration of the steering wheel or the entire car while travelling at high speed.
                          </li>
                          <li>
						  Uneven tire wear is one good sign that indicates suspension problems with your car
                          </li>
						  <li>
						  You may begin to feel every small imperfection on the road during the journey
						  </li>
						  <li>Noticeable physical damages on the shock absorbers</li>
                        </ul>
                        <p className="mb-15">
						Problems with the suspension can affect the handling of your car and result in loss of control. So it is always good to visit the car suspension repair specialists in Saudi Arabia at the earliest as soon as you notice any of the above-mentioned signs to avoid expensive repairs.
                        </p>
						<h5 class="title mb-15 text-uppercase">
						BENEFITS OF GETTING THE CAR SUSPENSION SERVICE
                        </h5>
                        <ul className="list-check-squer">
                          <li>Less steering vibration</li>
                          <li>
						  Smooth and comfortable ride
                          </li>
                          <li>
						  Extended tyre life
                          </li>
                          <li>
						  Enhanced vehicle handling and safety
                          </li>
						  <li>
						  Perfect steering response
						  </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="head-text mb-30">
                    <h4 className="title mb-15">
					WE ARE THE SUSPENSION REPAIR SPECIALISTS IN SAUDI ARABIA
                    </h4>
                    <p className="mb-15">
					At Royal Swiss Auto Services, our technicians have years of experience to diagnose and understand the various issues with your car’s suspension and provide you with the complete details about the repairs and replacements needed to be made efficiently.
                    </p>
                    <p className="mb-15">
					If you visit our workshop in KSA for suspension repair, we guarantee to use only high-quality genuine spare parts in case of replacements and our service, repair or replacement protocols always match with the manufacturer guidelines.
                    </p>
                    <p className="mb-10">
					We offer all suspension repairs and services under one roof using modern diagnostic tools and equipment and make sure you leave the workshop with a smoother ride and are satisfied with our workmanship.
                    </p>
					
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
					<h4 className="title mb-15 text-uppercase">
					We specialize in,
                    </h4>
                      <ul className="list-check-squer mb-0">
                        <li>
						Thorough suspension inspection
                        </li>
                        <li>Replacement of bushes, struts, shock absorbers and other suspension components</li>
                        <li>Wheel alignment </li>
                        <li>Steering system inspection and repair</li>
                        <li>
						Tyre health inspection and replacement
                        </li>
						<li>All other major or minor issues related to car suspension</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="section-area section-sp2 ServiceBox1">
          <div className="container">
            <div class="heading-bx text-center">
              <h6 class="title-ext text-primary">Why choose us</h6>
              <h2 class="title mb-0">
			  For your car suspension repair in Saudi Arabia?
              </h2>
            </div>
            <div className="SerGridWrap">
              <div className="row mb-10 justify-content-center">
                <div className="col-xl-12 col-sm-12 col-12 SerGrid1">
                  <div className="counter-style-1">
                    <div className="text-secondry">
                      <h2 className="text-primary">
                        <span className="counter">
                          <i class="flaticon-car-4"></i>
                        </span>
                      </h2>
                    </div>
                    <h5 className="counter-text">Quality workmanship </h5>
					<p>Whatever may be the problem with your car suspension and whether it may be a sedan, SUV or any other passenger car, our technicians would provide high-quality service and keep you safer on the roads.</p>
                  </div>
                </div>
				<div className="col-xl-12 col-sm-12 col-12 SerGrid1">
                  <div className="counter-style-1">
                    <div className="text-secondry">
                      <h2 className="text-primary">
                        <span className="counter">
                          <i class="flaticon-car-4"></i>
                        </span>
                      </h2>
                    </div>
                    <h5 className="counter-text">Competitive pricing & faster turnaround time</h5>
					<p>We use modern diagnostic tools to diagnose all kinds of suspension repairs and provide solutions. So work can be completed faster with us than you expect without exorbitant pricing, so you no need to suffer longer without the cars.</p>
                  </div>
                </div>
				<div className="col-xl-12 col-sm-12 col-12 SerGrid1">
                  <div className="counter-style-1">
                    <div className="text-secondry">
                      <h2 className="text-primary">
                        <span className="counter">
                          <i class="flaticon-car-4"></i>
                        </span>
                      </h2>
                    </div>
                    <h5 className="counter-text">Hassle-free suspension repair</h5>
					<p>The booking process with us is easier or you can even visit us directly at our workshop, where our professional customer support team and the service advisor will guide you to get the issues on your car suspension sorted out.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-area BrandFaq">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <Accordion
                  defaultActiveKey="0"
                  className="accordion ttr-accordion style1"
                >
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <i className="fa fa-question-circle"></i>
					  How much does suspension repair cost in Saudi Arabia?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="mb-0">
					  The cost of the suspension repair may vary depending on the issue, condition and model of your vehicle. But with a trusted car suspension repair provider like us, it can be completed in a pocket-friendly way without compromising the quality.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      <i className="fa fa-question-circle"></i>
                      Can I drive with the repairs in the car suspension?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="mb-0">
					  Driving a car with major suspension repair is generally not advised, as it can increase the chances of an accident by reducing the control over your car.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
              <div className="col-lg-6">
                <Accordion
                  defaultActiveKey="0"
                  className="accordion ttr-accordion style1"
                >
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <i className="fa fa-question-circle"></i>
                      What happens if I don't get the suspension repair sorted out at the earliest?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="mb-0">
					  When you postpone getting the suspension repairs done, the repair would become massive and you’ll have to pay more than you would expect.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      <i className="fa fa-question-circle"></i>
					  How often should I get my car suspension inspected?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="mb-0">
					  It is good to get your suspension inspected once a year or every 15000 kms, this may vary depending on the model you hold. So always check your owner's manual and get the suspension inspection done without fail.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>
          </div>
        </section>

        <ScheduleServiceSection />
        <TestimonialSection />
        <ChooseUsSection />
        <ServicesSection />
        <Footer />
      </>
		);
	}
}

export default SuspensionRepair;