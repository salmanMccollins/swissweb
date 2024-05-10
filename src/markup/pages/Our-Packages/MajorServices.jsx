import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Accordion } from "react-bootstrap";

// Layout
import Header from "../../layout/header";
import Footer from "../../layout/footer";

// Elements
import WidgetBrochure from "../../elements/widget/widget-brochure";
import WidgetHelp from "../../elements/widget/widget-help";

// Images
import bnrImg from "../../../images/services/DriveAxleRepair.webp";
import Pic1 from "../../../images/service-section/pic1.jpg";
import axios from "axios";
import { Helmet } from "react-helmet";

function MajorServices() {


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
                  <span>Major Services</span>
                </h1>
                <nav aria-label="breadcrumb" className="breadcrumb-row">
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/">
                        <i className="las la-home"></i>Home
                      </Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Major Service
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
					  GET THE COMPLETE MAJOR SERVICE DONE FOR YOUR CAR FROM THE EXPERTS IN SAUDI ARABIA
                      </h4>
                      <p className="mb-15">
					  Looking for a reliable car service center in Saudi Arabia, to get the major services done for your car, then trust Royal Swiss Auto Services without any second thoughts. 
                      </p>

                      <h4 className="title mb-15 text-uppercase">
					  Why is getting the major service important for your car?
                      </h4>
					  <p className="mb-15">
					  Getting the major service done for your car is highly important as it helps to keep your car running smoothly and helps to identify any budding issues on the electrical and mechanical components of the car at the earliest to avoid expensive repair bills in the future.
					  </p>
					  <h4 className="title mb-15 text-uppercase">
					 
What is done during your car major service appointment with us?

                      </h4>
					  <p className="mb-15">Whenever you visit us to get the major service in Saudi Arabia done for your car, our technicians will perform a complete inspection of your vehicle along with the maintenance tasks mentioned below, which are highly helpful in extending the lifespan of your car.</p>
                      <h4 className="title mb-15 text-uppercase">
					 
					  CAR MAJOR SERVICE MAINTENANCE CHECKLIST AT ROYAL SWISS AUTO SERVICES

                      </h4>
					  <ul className="list-check-squer mb-15">
                        <li>
						Engine oil & Oil filter change
                        </li>
                        <li>
						Air filter replacement
                        </li>
                        <li>
						AC filter replacement & AC system inspection
                        </li>
                        <li>
						Drive belt & Spark plug replacement
                        </li>
                        <li>
						Complete braking system inspection
                        </li>
						<li>Inspection & Replacement of all types of fluids in your car ( For example, Brake oil needs to be replaced approximately at 60,000 kms, Transmission oil needs to be replaced at 120,000 kms but this may vary depending on the make and model of the vehicle. Others such as Differential oil & transfer box oil will also be monitored)</li>
                      </ul>
					  <p className="mb-15">
					  Apart from this few other inspections that are included in the minor services will also be carried out at your major services schedule with us.
					  </p>
					  <ul className="list-check-squer mb-15">
						<li>Check coolant leak & level</li>
						<li>Check brake fluid & brake pads</li>
						<li>Check brake discs</li>
						<li>Check steering fluid</li>
						<li>Check battery & charging systems</li>
						<li>Check tire pressure / Tire condition</li>
						<li>Check lights/mirrors/power window</li>
						<li>Check engine compartment</li>
						<li>Check under chassis</li>
						<li>Check belts</li>
					  </ul>
					  <h4 className="title mb-15 text-uppercase">
					 
					  What makes Royal Swiss Auto Services ideal to get the major services done for your car in Saudi Arabia?

                      </h4>
					  <ul className="list-check-squer mb-15">
						<li>A complete comprehensive inspection is needed to enhance the performance of your vehicle in a faster turnaround time.</li>
						<li>The skilled and experienced technicians in Saudi Arabia provide the major services for your car.</li>
						<li>The well-equipped car service center in Saudi Arabia with all the latest diagnostic tools and equipment.</li>
						<li>Affordable pricing with guaranteed high-quality servicing.</li>
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
					  Why should you not miss your car major service appointment?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="mb-0">
					  Missing out on car major service can decrease the lifespan of your car and provide you with the expensive repair bills. So it is essential to get your car inspected by the specialists at the regular interval.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      <i className="fa fa-question-circle"></i>
					  Where to get a car major service in Saudi Arabia?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="mb-0">
					  At Royal Swiss Auto Services, we are well equipped with the latest diagnostic tools and have experienced technicians to provide the major service for your car. So you can trust us for all maintenance tasks needed for your vehicle.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
              <div className="col-lg-6">
                <Accordion className="accordion ttr-accordion style1">
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>
                      <i className="fa fa-question-circle"></i>
					  How often should I get the major service done for my car?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="mb-0">
					  The interval to get the major service done for your car may vary depending on the make and model of the vehicle you hold. So it is always good to have a talk with your service advisor or check the owner's manual.
                      </p>
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

export default MajorServices;
