import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Accordion } from "react-bootstrap";

// Layout
import Header from "../../../layout/header";
import Footer from "../../../layout/footer";

// Elements
import WidgetBrochure from "../../../elements/widget/widget-brochure";
import WidgetHelp from "../../../elements/widget/widget-help";
import ScheduleServiceSection from "../../../elements/schedule-service";
import TestimonialSection from "../../../elements/testimonial";
import ChooseUsSection from "../../../elements/choose-us";
import ServicesSection from "../../../elements/services-1";

// Images
import bnrImg from "../../../../images/services/PaintProtectionFilm.webp";
import serviceSectionPic3 from "../../../../images/service-section/pic3.jpg";

class FleetMangement extends Component {
  render() {
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
                  <span>FLEET MAINTENANCE SERVICES</span>
                </h1>
                <nav aria-label="breadcrumb" className="breadcrumb-row">
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item text-uppercase">
                      <Link to="/">
                        <i className="las la-home"></i>Home
                      </Link>
                    </li>
                    <li className="breadcrumb-item text-uppercase">
                      <Link to="/services">Services</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      {" "}
                      FLEET MAINTENANCE SERVICES
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
                    <WidgetHelp />
                  </aside>
                </div>
                <div className="col-lg-8 col-md-7">
                  <div className="mb-10">
                    <div className="head-text mb-30">
                      <h4 className="title mb-10">
                        WE ARE THE PREMIER FLEET MAINTENANCE COMPANY IN SAUDI
                        ARABIA
                      </h4>
                      <p className="mb-15">
					  We, Royal Swiss Auto Services with 18 years of combined dealership experience, strive to provide the most comprehensive fleet maintenance services in Saudi Arabia. We are well-equipped to provide all comprehensive services and other after-sale services needed for your car with utmost care at our workshop in Saudi Arabia.
                      </p>
					  <h4 className="title mb-10">
					  WHAT IS COVERED UNDER OUR FLEET MAINTENANCE SERVICES IN SAUDI ARABIA?
                      </h4>
                      <p className="mb-15">
					  Our fleet maintenance services make sure all the vehicles are performing at its best on the roads. Everything like vehicle inspection, earlier detection of any issues in the car and proper attention towards the tyre health are included in our fleet maintenance services.
                      </p>
                    </div>
                    <div className="row">
                      <div className="col-xl-12">
                        <h5 class="title mb-15 text-uppercase">
						A few advantages of choosing fleet maintenance services in Saudi Arabia are listed below,
                        </h5>
                        <ul className="list-check-squer">
                          <li>
						  You can save both time and money by hiring fleet maintenance services.
                          </li>
                          <li>With proper care, your vehicle lifespan can be increased</li>
                          <li>
						  Expensive repairs on your car can be avoided
                          </li>
                          <li>
						  Timely servicing is assured
                          </li>
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
					  What kind of vehicles are included in your fleet maintenance services?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="mb-0">
					  We provide fleet maintenance for all make and model of cars through our experienced team.
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
					  Why should I hire the fleet maintenance services?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="mb-0">
					  Having a fleet maintenance service, all your vehicles are kept in top condition. From Routine servicing to tyre health, everything is taken care of by the fleet maintenance.
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

export default FleetMangement;
