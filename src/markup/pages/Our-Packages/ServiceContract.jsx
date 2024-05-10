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
import bnrImg from "../../../images/newimages/package-banner.webp";
import Pic1 from "../../../images/service-section/pic1.jpg";
import axios from "axios";
import { Helmet } from "react-helmet";

function ServiceContract() {
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
                  <span>SERVICE CONTRACTS IN SAUDI ARABIA</span>
                </h1>
                <nav aria-label="breadcrumb" className="breadcrumb-row">
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/">
                        <i className="las la-home"></i>Home
                      </Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
					SERVICE CONTRACTS IN SAUDI ARABIA
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
					  GET BENEFITED WITH OUR PREMIUM VEHICLE SERVICE CONTRACTS IN SAUDI ARABIA
                      </h4>
                      <p className="mb-15">
					  All of us want to provide our car with dealership-level care but at a nominal pricing, in such cases having a service contract from a reliable car service center around you would be highly helpful and make vehicle maintenance easier.
                      </p>
                      <p className="mb-15">
					  At Royal Swiss Auto Services, we completely understand that the automotive maintenance needs of each customer vary greatly, which is why we come up with personalized vehicle service contract packages in Saudi Arabia.
                      </p>

                      <h4 className="title mb-15 text-uppercase">
					  What makes our service contracts in Saudi Arabia most beneficial?
                      </h4>
					  <p className="mb-15">Our service contract packages usually differ based on the plans you choose and pricing and may cover all preventive periodic maintenance needed for your vehicle.</p>
					  <p className="mb-15">With us, based on the make, model and mileage covered by your vehicle, you can analyze and choose the best vehicle service contracts that satisfy all your needs. </p>
                      
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
              <h6 class="title-ext text-primary text-uppercase">Why choose Royal Swiss Auto</h6>
              <h2 class="title mb-0 text-uppercase">
			  Services for purchasing service contracts in Saudi Arabia?
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
                    <h5 className="counter-text">Experienced technicians</h5>
                    <p>
					Our technicians are highly trained to handle the various makes and models of vehicles, so they would provide the perfect periodic maintenance needed for your vehicle as per the manufacturer's guidelines.
                    </p>
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
                    <h5 className="counter-text">Timely services</h5>
                    <p>
					With modern diagnostic tools and equipment, we provide the faster periodic maintenance needed for your vehicle in no time throughout the service contract period, so your car will be in roadworthy condition for the years to come.
                    </p>
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
                    <h5 className="counter-text">Peace of mind</h5>
                    <p>
                    Our service packages cover numerous tasks that will keep you away from facing repairs and replacements in this constantly rising repair cost. So with our service contracts, you can be worry-free and plan your budget accordingly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
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
                      What is included in the vehicle service contract?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="mb-0">
					  The things included in the vehicle service contract may differ based on the plans you choose. Most vehicle service contracts include major service, minor service and other periodic maintenance needed for the vehicle based on the plans you choose.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      <i className="fa fa-question-circle"></i>
					  What is the validity of the vehicle service contract?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="mb-0">
					  The validity of the service packages may differ based on the plans you choose, so it is always good to talk with your service advisor to choose the plans that would be most beneficial for you.
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
					  Why is a vehicle service contract necessary?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="mb-0">
					  Having the service contracts for your car gives you peace of mind by eliminating the need to worry about rising labor costs and guarantees the perfect maintenance needed for your car in a timely manner.
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

export default ServiceContract;
