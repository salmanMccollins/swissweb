import React, {Component, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import {Accordion} from 'react-bootstrap';

// Layout
import Header from "../../layout/header";
import Footer from "../../layout/footer";

// Elements
import WidgetBrochure from "../../elements/widget/widget-brochure";
import WidgetHelp from "../../elements/widget/widget-help";

// Images
import bnrImg from "../../../images/services/SmartBodyRepair.webp";
import Pic1 from "../../../images/service-section/pic1.jpg";
import axios from 'axios';
import { Helmet } from 'react-helmet';

function MinorServices() {


	
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
                  <span>Minor Services</span>
                </h1>
                <nav aria-label="breadcrumb" className="breadcrumb-row">
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/">
                        <i className="las la-home"></i>Home
                      </Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Minor Service
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
                      <h4 className="title mb-15">
					  FINEST CHOICE TO GET YOUR MINOR CAR SERVICES IN SAUDI ARABIA
                      </h4>
                      <p className="mb-15">At Royal Swiss Auto Services with our years of experience in the auto repair industry, we provide the most comprehensive minor services needed for your vehicle when you contact us, to preserve your car’s performance and enhance its value.</p>

                      <h4 className="title mb-15 text-uppercase">
					  Why are minor car services so important?
                      </h4>
					  <p className="mb-15">Getting the minor services done for your car as stated in the owner’s manual reduces the occurrence of unexpected problems in your vehicles which may demand expensive repair bills and make sure your car is in safe and roadworthy condition.</p>
					  <h4 className="title mb-15 text-uppercase">
					 
					  EXPERIENCE THE DEALERSHIP RANGE OF MINOR CAR SERVICES WITH US

                      </h4>
					  <p className="mb-15">Our car service center in Saudi Arabia is equipped with the latest diagnostic tools and equipment along with a team of experienced technicians to provide your car with high-standard minor services based on the make and model of the vehicle you hold.</p>
					  <p className='mb-15'>Our comprehensive minor car service includes every small maintenance task such as,</p>
                     
					  <ul className="list-check-squer mb-15">
                        <li>
						Oil change
                        </li>
                        <li>
						Oil filter replacement
                        </li>
                        <li>
						Check coolant leak & level
                        </li>
                        <li>
						Check brake fluid & brake pads
                        </li>
                        <li>
						Check brake discs
                        </li>
						<li>Check steering fluid</li>
						<li>Check battery & charging systems</li>
						<li>Check AC performance & AC Gas</li>
						<li>Check tire pressure / Tire condition</li>
						<li>Check wheel torque adjust</li>
						<li>Check lights/mirrors/power window</li>
						<li>Check engine compartment</li>
						<li>Check under chassis</li>
						<li>Check belts</li>
						<li>Check faulty memory DTC</li>
					</ul>
					<h4 className="title mb-15 text-uppercase">
					 
					WHAT MAKES US TO BE THE IDEAL CHOICE TO GET THE MINOR CAR SERVICES IN SAUDI ARABIA?

                      </h4>
					  <ul className="list-check-squer mb-15">
						<li>Expertise of our technicians in handling various make and models of cars and its intricate components</li>
						<li>The complete 360-degree inspection of the vehicle that we provide while you visit us</li>
						<li>Instant quote and affordable pricing</li>
						<li>The faster turnaround time of vehicles.</li>
					  </ul>
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
              <p>
                Have a question? Before reaching out, please take a moment to
                check our FAQ for quick answers. We might have just what you're
                looking for!
              </p>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <Accordion className="accordion ttr-accordion style1">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <i className="fa fa-question-circle"></i>
					  How often should I get the minor services done for the car?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="mb-0">The interval to get the minor car services done depends on the make and model of cars. Most cars will have the minor service appointment at the interval of every 1000 to 15000 kms. So it is always good to get your owner’s manual checked to know the correct interval.</p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      <i className="fa fa-question-circle"></i>
					  Where can I get the minor car services done in Saudi Arabia?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="mb-0">
					  We Royal Swiss Auto Services, at our well equipped car service center in Saudi Arabia provide the best minor car service needed for your vehicle at the competitive pricing.</p>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
              <div className="col-lg-6">
                <Accordion className="accordion ttr-accordion style1">
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>
                      <i className="fa fa-question-circle"></i>
					  Why must one not skip the minor services done for their car?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="mb-0">
					  Generally, skipping out the minor services reduces the performance and the lifespan of your car.</p>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>
          </div>
        </section>
				
				<Footer />
				
			</>
		);
}

export default MinorServices;