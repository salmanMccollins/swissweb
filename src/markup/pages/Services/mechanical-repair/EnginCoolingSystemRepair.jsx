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
import bnrImg from "../../../../images/services/EngineCoolingSystem.webp";
import serviceSectionPic3 from "../../../../images/service-section/pic3.jpg";

class EnginCoolingSystemRepair extends Component{
	
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
                  <span>ENGINE COOLING SYSTEM</span>
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
					  ENGINE COOLING SYSTEM
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
					  KEEP YOUR CAR COOLING SYSTEM IN GOOD CONDITION WITH OUR EXPERTS IN SAUDI ARABIA

                      </h4>
                      <p className="mb-15">A good-performing cooling system is essential to keep up the optimum temperature of your car engine. To avoid engine overheating it is essential to keep the car cooling system in good condition. When a simple problem like coolant leakage is left unnoticed, it can result in engine failure in the long run and can provide you with expensive repair bills. So the issues with the car engine cooling system must be rectified at the earliest. </p>
                      <p className="mb-15">Car cooling systems involve various components like thermostats, radiator, fan, water pump, pressure cap, hoses and the heater core.</p>
					  <p className="mb-15">

					  Extreme hot temperatures in the KSA, make your car cooling system work harder, So proper service and maintenance from the technicians specializing in car cooling system repair is essential to ensure the optimal performance of your car engine.

</p>
                    </div>
                    <div className="row">
                   
                      <div className="col-xl-12">
                        <h5 class="title mb-15 text-uppercase">
						WE ARE SPECIALIZED IN PROVIDING VARIOUS COOLING SYSTEM SERVICES IN THE KINGDOM OF SAUDI ARABIA
                        </h5>
						<p className='mb-15'>Whether you are experiencing engine coolant leaks or any other major problems get in touch with us. Our technicians are experienced, qualified and trained to provide the proper engine cooling system inspection, diagnosis and repair to ensure that your car is in good condition.</p>
                        <h5 class="title mb-15 text-uppercase">
						We are specialized in offering the following services for the cooling system,
                        </h5>
						<ul className="list-check-squer">
                          <li>Coolant leakage inspection & fault diagnosis</li>
                          <li>
						  Coolant flush
                          </li>
                          <li>
						  Water pump replacement
                          </li>
                          <li>
						  Radiator replacement
                          </li>
						  <li>
						  Thermostat replacement
						  </li>
						  <li>All other services and repair associated with the engine cooling system </li>
                        </ul>
						<h5 class="title mb-15 text-uppercase">
						What are the signs of car engine cooling system repair?
                        </h5>
						<ul className="list-check-squer">
                          <li>Your car engine may begin to get overheated</li>
                          <li>
						  The coolant level is very low and decreases frequently
                          </li>
                          <li>
						  Experiencing starting issues with your engine
                          </li>
                          <li>
						  Illuminating temperature warning lights or others related to the cooling system on the dashboard of the car
                          </li>
						  <li>
						  Visible coolant leakages
						  </li>
						  <li>Smoke coming out under the hood</li>
						  <li>Excessive white exhaust smoke</li>
                        </ul>
						<p className='mb-15'>If you experience any of these signs, visit our workshop to get an efficient cooling system repair in Saudi Arabia from expert technicians to ensure the safe performance of your car.</p>
						
                      </div>
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
              <h6 class="title-ext text-primary">Why choose Royal Swiss Auto</h6>
              <h2 class="title mb-0 text-uppercase">
			  Services to get the car engine cooling system repair in Saudi Arabia?
              </h2>
            </div>
            <div className="SerGridWrap">
              <div className="row mb-10 justify-content-center">
                <div className="col-xl-6 col-sm-12 col-12 SerGrid1">
                  <div className="counter-style-1">
                    <div className="text-secondry">
                      <h2 className="text-primary">
                        <span className="counter">
                          <i class="flaticon-car-4"></i>
                        </span>
                      </h2>
                    </div>
                    <h5 className="counter-text">Expert technicians</h5>
					<p>Our network of technicians is specifically trained to handle various latest diagnostic tools and equipment to provide you with high-standard cooling system repair in KSA. Whatever may be the problem with your car cooling system, we are here to take care of it.</p>
                  </div>
                </div>
				<div className="col-xl-6 col-sm-12 col-12 SerGrid1">
                  <div className="counter-style-1">
                    <div className="text-secondry">
                      <h2 className="text-primary">
                        <span className="counter">
                          <i class="flaticon-car-4"></i>
                        </span>
                      </h2>
                    </div>
                    <h5 className="counter-text">Greater customer satisfaction</h5>
					<p>We perform full inspections and repairs on your car engine cooling system with the greatest precision to ensure 100% satisfaction.</p>
                  </div>
                </div>
				<div className="col-xl-6 col-sm-12 col-12 SerGrid1">
                  <div className="counter-style-1">
                    <div className="text-secondry">
                      <h2 className="text-primary">
                        <span className="counter">
                          <i class="flaticon-car-4"></i>
                        </span>
                      </h2>
                    </div>
                    <h5 className="counter-text">Faster turnaround time</h5>
					<p>We perform cooling system repairs for all make and model in KSA and ensure your repairs are done on the stipulated time and returned sooner than you expect.</p>
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
					  Why is my car engine overheating?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="mb-0">
					  Car engines may overheat due to coolant issues, water pump failure, thermostat issues, radiator failure or any other. So if the engine overheating occurs it is essential to visit the service center at the earliest to avoid catastrophic damages.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      <i className="fa fa-question-circle"></i>
					  Why is it important to get the coolant flush done?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="mb-0">
					  Getting a coolant flush done at the recommended intervals is essential for maintaining the health and longevity of your vehicle's engine and cooling system.
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
					  What should I do if I suspect the issues with my car engine cooling system?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="mb-0">
					  Contact your service advisor or visit the service center directly if you suspect any issues with the cooling system in your car.
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

export default EnginCoolingSystemRepair;