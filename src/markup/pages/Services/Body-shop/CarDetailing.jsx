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
import bnrImg from "../../../../images/banner/bnr1.jpg";
import serviceSectionPic3 from "../../../../images/service-section/pic3.jpg";

class CarDetailing extends Component {
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
                  <span>CAR DETAILING</span>
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
                      CAR DETAILING
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
                        EXPERIENCE THE PROFESSIONAL CAR DETAILING SERVICES IN
                        SAUDI ARABIA
                      </h4>
                      <p className="mb-15">
                        Maintaining the pristine condition of your vehicle, akin
                        to its showroom debut, necessitates the expertise of
                        professional detailing services.
                      </p>
                      <p className="mb-15">
					  At Royal Swiss Auto Services, we offer the most comprehensive internal and external car detailing services in Saudi Arabia for all make and model vehicles without compromising the quality. Our car detailing services are curated in such a way that your car’s exterior finishing and the interior upholstery are protected including the paint works to ensure the shiny and flawless appearance of your car.
                      </p>
                    </div>
                    <div className="row">
                      <div className="col-xl-12">
                        <h5 class="title mb-15 text-uppercase">
						The car detailing services that we specialize in providing include,
                        </h5>
                        <ul className="list-check-squer">
                          <li>
						  Interior detailing
                          </li>
                          <li>Exterior detailing</li>
                          <li>
						  Polishing
                          </li>
                          <li>
						  Paint protection services
                          </li>
                          <li>
						  Upholstery services
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
        <section className="section-area section-sp2 ServiceBox1">
          <div className="container">
            <div class="heading-bx text-center">
              <h6 class="title-ext text-primary">EXPLORE MORE ABOUT</h6>
              <h2 class="title mb-0 text-uppercase">
			  OUR CAR DETAILING SERVICES IN SAUDI ARABIA
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
                    <h5 className="counter-text">Car Polishing</h5>
                    <p>
					Our car polishing services from expert technicians remove the dirt and residues that are accumulated on the paint surface and hide the minor scratches to provide your car with a new and shiny look.
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
                    <h5 className="counter-text">Paint protection services</h5>
                    <p>
					Investing in paint protection services like ceramic coating, PPF installation, rust proofing, and others can protect your car from dirt, debris, harmful UV rays and keeps your car away from scratches.
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
                    <h5 className="counter-text">Exterior car detailing</h5>
                    <p>
					Our exterior car detailing services include everything like washing, wheel & tyre correction, polishing, sealing or waxing, paint correction and many more based on the packages that you opt for. Our technicians always strive to restore the new look to your car through our car detailing services.
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
                    <h5 className="counter-text">
Interior car detailing
</h5>
                    <p>
					Our interior car detailing services involve cleaning up the upholstery in your car and protecting it from future damage.
					We can get the polishing and detailing required for your car in a faster turnaround time without compromising the quality through our team of experienced technicians. So that your car stands unique on the roads with its flawless appearance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
		<section className="section-area section-sp2 ServiceBox1 pt-0">
          <div className="container">
            <div class="heading-bx text-center">
              <h6 class="title-ext text-primary text-uppercase">Why choose Royal Swiss Auto</h6>
              <h2 class="title mb-0 text-uppercase">
			  for availing car detailing services in Saudi Arabia?
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
                    <h5 className="counter-text">Quality products</h5>
                    <p>
					We provide world-class car detailing services for all luxury cars using quality products by employing the latest techniques to ensure greater satisfaction.
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
                    <h5 className="counter-text">Trained technicians</h5>
                    <p>
					Our team of car detailing specialists in Saudi Arabia are specifically trained to handle the advanced tools to provide detailing services for cars without any excuses for the quality of workmanship.
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
                    <h5 className="counter-text">Competitive pricing</h5>
                    <p>
					Being in the auto repair industry for years, we understand the needs of the customers and offer the finest car detailing services in KSA in a pocket-friendly way.
                    </p>
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
					  How often should I get the detailing services done for my car?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="mb-0">
					  It is essential to get the complete detailing services done for your car at an interval of every 3 to 6 months to keep your vehicle clean, shiny and healthier.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      <i className="fa fa-question-circle"></i>
					  How long does the car detailing service take place?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="mb-0">
					  How long the car detailing service takes place depends on the services that you opt for and the service center that you choose. With Royal Swiss Auto Services, the car detailing services that you opt for will be completed at a stipulated time.
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
					  Where can I get car detailing services in KSA?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="mb-0">
					  There are numerous workshops around Saudi Arabia to get the detailing services done for the car but always choose the one that offers the highest standard of car detailing services at the most competitive prices.
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

export default CarDetailing;
