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
import bnrImg from "../../../../images/services/SafetyCheckInspection.webp";
import serviceSectionPic3 from "../../../../images/service-section/pic3.jpg";

class PrePurchaseInspection extends Component{
	
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
                  <span> PRE-PURCHASE INSPECTION SERVICES</span>
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
                      PRE-PURCHASE INSPECTION SERVICES
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
					  HIGH-PRECISION TRANSMISSION REPAIR SERVICES IN SAUDI ARABIAGET THE PRE-PURCHASE INSPECTIONS FOR THE CARS DONE BY EXPERTS IN SAUDI ARABIA
                      </h4>
                      <p className="mb-15">Are you planning to purchase a used car? The most important thing that you can do before finalizing the car and settlement is to get the pre-purchase inspection by the experienced technicians at the most trusted car service center.</p>
                      <p className="mb-15">At Royal Swiss Auto Services, our experienced team of technicians carries out the pre-purchase inspection with greater precision and brings any problems in the car to the limelight so that you can make an informed decision.</p>
					  <p className="mb-15">Getting the pre-purchase inspection done for the pre-owned cars is not only beneficial for the buyers but it is also helpful for the sellers to increase the resale prices in the secondary market if their car is in good condition.</p>
                    </div>
                    <div className="row">
                   
                      <div className="col-xl-12">
                        <h5 class="title mb-15 text-uppercase">
						When you visit our car service center in Saudi Arabia to get a pre-purchase inspection on your used car, what happens?
                        </h5>
                        <ul className="list-check-squer">
                          <li>Our technicians would carry out the complete evaluation of the electrical and mechanical components condition in the used car</li>
                          <li>
						  Would perform a test drive and provide you with the information about drivability and safety of the car
                          </li>
                          <li>
						  Would provide a clear estimate to rectify any mechanical or electrical issues present in the car at the time of inspection.
                          </li>
                        </ul>
						<h5 class="title mb-15 text-uppercase">
						WHY SHOULD YOU GET THE PRE-PURCHASE INSPECTION DONE FOR YOUR CAR?
                        </h5>
                        <ul className="list-check-squer">
                          <li>Information gathered from the experts by carrying out the pre-purchase inspection on the used car is essential to make the purchase decision</li>
                          <li>
						  The buyer can understand the clear condition of the car so that can negotiate the price
                          </li>
                          <li>
						  The buyer can even drop out of the purchase plan if the vehicle has any major structural issues or previous major accident history and the damages caused by it.
                          </li>
                        </ul>
						<h5 class="title mb-15 text-uppercase">
						WE PROVIDE THE MOST COMPREHENSIVE PRE-PURCHASE INSPECTION IN SAUDI ARABIA FOR CARS
                        </h5>
						<p className='mb-15'>Below is the list of components being inspected by our technicians during the appointment to get the pre-purchase inspection for the used cars done.</p>
                        <ul className="list-check-squer">
                          <li>Inspection & analysis of the complete engine condition</li>
                          <li>
						  Checking out for leaks or damages in the cooling system
                          </li>
                          <li>
						  Fuel and exhaust system monitoring
                          </li>
                          <li>
						  All electrical system checks up including batteries and the electronic components powered by it
                          </li>
						  <li>
						  Transmission, suspension and braking system health inspection
						  </li>
						  <li>Looking out for the body and paint repairs</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="section-area BrandFaq">
          <div className="container">
          <div class="heading-bx text-center">
              <h6 class="title-ext text-primary">Swissauto</h6>
              <h2 class="title mb-0">Frequently Asked Questions</h2>
              <p>Have a question? Before reaching out, please take a moment to check our FAQ for quick answers. We might have just what you're looking for!</p>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <Accordion
                  
                  className="accordion ttr-accordion style1"
                >
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <i className="fa fa-question-circle"></i>
					  Where can I get the pre-purchase inspection done for the cars in Saudi Arabia?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="mb-0">
					  Whether you purchase a used car from the dealer or from individuals in the secondary market, you can get your vehicle inspected by any of the independent car service center in the KSA. At our workshop, we offer the most comprehensive pre-purchase inspection service for cars of all make and models.

                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      <i className="fa fa-question-circle"></i>
					  How long does the pre-purchase inspection for the vehicle take?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="mb-0">
					  With us, the pre-purchase inspection for the used car can be completed on the same day and a detailed report can be provided.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
              <div className="col-lg-6">
                <Accordion
                 
                  className="accordion ttr-accordion style1"
                >
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <i className="fa fa-question-circle"></i>
					  How much does the pre-purchase inspection in Saudi Arabia cost?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="mb-0">
					  It depends on the make and model of the vehicle and the service center that you choose for getting the pre-purchase inspection in Saudi Arabia. With a reliable car service center like us, it can be completed in a pocket-friendly way.
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

export default PrePurchaseInspection;