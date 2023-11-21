import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Accordion } from "react-bootstrap";

// Layout
import Header from "../../layout/header";
import Footer from "../../layout/footer";

// Elements
import WidgetBrochure from "../../elements/widget/widget-brochure";
import WidgetHelp from "../../elements/widget/widget-help";
import ScheduleServiceSection from "../../elements/schedule-service";
import TestimonialSection from "../../elements/testimonial";
import InstagramBox from "../../elements/widget/InstagramBox";
import OurBrandsLayout from "../../elements/widget/OurBrandsLayout";

// Images
import bnrImg from "../../../images/carbrands/Bentley.webp";
import serviceSectionPic3 from "../../../images/brandsthumb/bentley.png";

class Bentley extends Component {
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
                  <span>
				  ROYAL SWISS AUTO - A MOST TRUSTED INDEPENDENT SERVICE CENTER IN SAUDI ARABIA
                  </span>
                </h1>
                <nav aria-label="breadcrumb" className="breadcrumb-row">
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/">
                        <i className="las la-home"></i>Home
                      </Link>
                    </li>
                    <li className="breadcrumb-item">
                      <Link to="/ourbrands">
                        Brands
                      </Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
					Bentley
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>

          <div className="section-area section-sp2 bg-white">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-5">
                  <aside className="sticky-top pb-1">
                    <WidgetBrochure />

                    <WidgetHelp />
                  </aside>
                </div>
                <div className="col-lg-8 col-md-7">
                  <div className="row">
                    <div className="col-xl-6">
                      <div className="ttr-media mb-30">
                        <img src={serviceSectionPic3} alt="" />
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <h4 className="title mb-10">OUR BENTLEY SERVICE BENEFITS</h4>
                      <p className="mb-20">
					  We have a fine reputation for providing excellent care towards your Bentley.
                      </p>
                      <ul className="list-check-squer mb-30">
                        <li>
						Dealership alternative Bentley service in Saudi Arabia
                        </li>
                        <li>Competitive pricing</li>
                        <li>Independently owned & operated</li>
                        <li>Faster turnaround time</li>
                        <li>100% satisfaction</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mb-10 ContentBox2">
                    <div className="head-text mb-30">
                      <h4 className="title mb-15">
					  PREMIUM BENTLEY SERVICE CENTER IN SAUDI ARABIA FOR PRECISE SERVICING & REPAIRS
                      </h4>
                      <h5 className="mb-15">
                        <b>
                          “Bentley is an extraordinary fast car with high-quality craftsmanship”
                        </b>
                      </h5>
                      <p className="mb-15">
					  European cars like Bentley must be well maintained by specialists to make sure it is performing at its best on the roads and to lower its annual repair costs. At Royal Swiss Auto Services, we provide your Bentley with the attention it deserves in a pocket-friendly way. The experience and skills of our Bentley technicians along with the specialist diagnostic tools and equipment help us to quickly and efficiently perform the servicing and repairs on your Bentley while keeping your costs lower than you think.
                      </p>
                      <p className="mb-15">
					  Saudi Arabia is a vast area covering various cities like Riyadh, Dammam and Jeddah , our branch opening in Saudi Arabia will provide the better Bentley auto repair services to make it easier for our customers.
                      </p>
                      <h5 className="mb-15">
                        <b>We are experts in servicing & repairing all Bentley models</b>
                      </h5>
                      <p className="mb-15">
					  Whatever may be the Bentley model you hold like Arnage, Brooklands, Continental, Derby, Mulsanne, Turbo or any other, our technicians would carefully inspect your vehicle and identify any specific imperfections or issues that needs to be addressed.
                      </p>
					  <p className="mb-15">
					  Being a Bentley repair specialist in Saudi Arabia, we always ensure that all your work is carried out with high standards which makes us the superior car care provider in the locality.
                      </p>
                    </div>
                    <div className="row">
                      <h5 className="mb-15">
                        <b>Why trust us for the superior Bentley service in Saudi Arabia?</b>
                      </h5>
                      <div className="col-xl-12">
                        <ul className="list-check-squer">
                          <li>
						  The ultra-modern, state-of-the-art Bentley workshop in Saudi Arabia
                          </li>
                          <li>
                            Engine room dedicated to engine repair, engine
                            refurbishment, or engine replacement
                          </li>
                          <li>
                            Highly qualified and certified technicians
                            specialized in the brands we serve.
                          </li>
                          <li>Spare parts department and own storage.</li>
                          <li>
                            A professional and multicultural customer support
                            team, we speak your language!
                          </li>
                          <li>
                            Up to 15,000 different spare parts available in
                            stock
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="head-text mb-30">
                    <h4 className="title mb-10">
					YOUR BENTLEY IS KEPT AT ITS BEST AT OUR WORKSHOP IN SAUDI ARABIA
                    </h4>
                    <p className="mb-15">
					We carry out all oil changes, electrical and mechanical services at our Bentley garage in Saudi Arabia in accordance with manufacturer guidelines, ensuring your vehicle's value and performance are increased.
                    </p>
                    <p className="mb-15">
					To ensure the customer's peace of mind, we always provide a detailed report of the service and repairs carried out in the car. To maintain the car's perfect luxury, only genuine spare parts are used when a part needs to be replaced.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="section-area section-sp2 ServiceBox1">
          <div className="container">
            <div class="heading-bx text-center">
              <h6 class="title-ext text-primary">Book Your</h6>
              <h2 class="title mb-0">BENTLEY SERVICE IN SAUDI ARABIA WITH ROYAL SWISS AUTO SERVICES</h2>
              <p>
			  We take pride in ourselves for providing various electrical, mechanical, software updates and other diagnostic services needed for your Bentley with the greatest precision. So dial 966 53 969 9984 to schedule your service appointment or explore our services.
			
			  We provide all the below-mentioned services for Bentley in an efficient way through our expertise which is our passion too.
              </p>
            </div>
            <div className="SerGridWrap">
              <div className="row mb-10">
                <div className="col-xl-4 col-sm-12 col-12">
                  <div className="counter-style-1">
                    <div className="text-secondry">
                      <h2 className="text-primary">
                        <span className="counter">
                          <i class="flaticon-car-4"></i>
                        </span>
                        {/* <span>K</span> */}
                      </h2>
                    </div>
                    <h5 className="counter-text">Bentley Engine Repair</h5>
                  </div>
                </div>
                <div className="col-xl-4 col-sm-12 col-12">
                  <div className="counter-style-1">
                    <div className="text-secondry">
                      <h2 className="text-primary">
                        <span className="counter">
                          <i class="flaticon-car-4"></i>
                        </span>
                        {/* <span>+</span> */}
                      </h2>
                    </div>
                    <h5 className="counter-text">Bentley Gearbox Repair</h5>
                  </div>
                </div>
                <div className="col-xl-4 col-sm-12 col-12">
                  <div className="counter-style-1">
                    <div className="text-secondry">
                      <h2 className="text-primary">
                        <span className="counter">
                          <i class="flaticon-car-4"></i>
                        </span>
                      </h2>
                    </div>
                    <h5 className="counter-text">Bentley Suspension Repair</h5>
                  </div>
                </div>
                <div className="col-xl-4 col-sm-12 col-12">
                  <div className="counter-style-1">
                    <div className="text-secondry">
                      <h2 className="text-primary">
                        <span className="counter">
                          <i class="flaticon-car-4"></i>
                        </span>
                      </h2>
                    </div>
                    <h5 className="counter-text">
					Bentley Transmission Repair
                    </h5>
                  </div>
                </div>
                <div className="col-xl-4 col-sm-12 col-12">
                  <div className="counter-style-1">
                    <div className="text-secondry">
                      <h2 className="text-primary">
                        <span className="counter">
                          <i class="flaticon-car-4"></i>
                        </span>
                      </h2>
                    </div>
                    <h5 className="counter-text">Bentley Touchless Wheel Alignment</h5>
                  </div>
                </div>
                <div className="col-xl-4 col-sm-12 col-12">
                  <div className="counter-style-1">
                    <div className="text-secondry">
                      <h2 className="text-primary">
                        <span className="counter">
                          <i class="flaticon-car-4"></i>
                        </span>
                      </h2>
                    </div>
                    <h5 className="counter-text">Bentley Engine Refurbishment</h5>
                  </div>
                </div>
                <div className="col-xl-4 col-sm-12 col-12">
                  <div className="counter-style-1">
                    <div className="text-secondry">
                      <h2 className="text-primary">
                        <span className="counter">
                          <i class="flaticon-car-4"></i>
                        </span>
                      </h2>
                    </div>
                    <h5 className="counter-text">Bentley Software Programming</h5>
                  </div>
                </div>
                <div className="col-xl-4 col-sm-12 col-12">
                  <div className="counter-style-1">
                    <div className="text-secondry">
                      <h2 className="text-primary">
                        <span className="counter">
                          <i class="flaticon-car-4"></i>
                        </span>
                      </h2>
                    </div>
                    <h5 className="counter-text">
					Bentley AC Repair
                    </h5>
                  </div>
                </div>
                <div className="col-xl-4 col-sm-12 col-12">
                  <div className="counter-style-1">
                    <div className="text-secondry">
                      <h2 className="text-primary">
                        <span className="counter">
                          <i class="flaticon-car-4"></i>
                        </span>
                      </h2>
                    </div>
                    <h5 className="counter-text">Bentley Engine Cooling System Repair</h5>
                  </div>
                </div>
                <div className="col-xl-4 col-sm-12 col-12">
                  <div className="counter-style-1">
                    <div className="text-secondry">
                      <h2 className="text-primary">
                        <span className="counter">
                          <i class="flaticon-car-4"></i>
                        </span>
                      </h2>
                    </div>
                    <h5 className="counter-text">Bentley Brake Repair</h5>
                  </div>
                </div>
                <div className="col-xl-4 col-sm-12 col-12">
                  <div className="counter-style-1">
                    <div className="text-secondry">
                      <h2 className="text-primary">
                        <span className="counter">
                          <i class="flaticon-car-4"></i>
                        </span>
                      </h2>
                    </div>
                    <h5 className="counter-text">
					Bentley Camera/Radar Calibration
                    </h5>
                  </div>
                </div>
                <div className="col-xl-4 col-sm-12 col-12">
                  <div className="counter-style-1">
                    <div className="text-secondry">
                      <h2 className="text-primary">
                        <span className="counter">
                          <i class="flaticon-car-4"></i>
                        </span>
                      </h2>
                    </div>
                    <h5 className="counter-text">Bentley Pre-Purchase Inspection</h5>
                  </div>
                </div>
                <div className="col-xl-4 col-sm-12 col-12">
                  <div className="counter-style-1">
                    <div className="text-secondry">
                      <h2 className="text-primary">
                        <span className="counter">
                          <i class="flaticon-car-4"></i>
                        </span>
                      </h2>
                    </div>
                    <h5 className="counter-text">
					Bentley Service Packages
                    </h5>
                  </div>
                </div>
                <div className="col-xl-4 col-sm-12 col-12">
                  <div className="counter-style-1">
                    <div className="text-secondry">
                      <h2 className="text-primary">
                        <span className="counter">
                          <i class="flaticon-car-4"></i>
                        </span>
                      </h2>
                    </div>
                    <h5 className="counter-text">
					Bentley Extended Warranty Packages
                    </h5>
                  </div>
                </div>
                <div className="col-xl-4 col-sm-12 col-12">
                  <div className="counter-style-1">
                    <div className="text-secondry">
                      <h2 className="text-primary">
                        <span className="counter">
                          <i class="flaticon-car-4"></i>
                        </span>
                      </h2>
                    </div>
                    <h5 className="counter-text">Bentley Service & Warranty Packages</h5>
                  </div>
                </div>
                <div className="col-xl-4 col-sm-12 col-12">
                  <div className="counter-style-1">
                    <div className="text-secondry">
                      <h2 className="text-primary">
                        <span className="counter">
                          <i class="flaticon-car-4"></i>
                        </span>
                      </h2>
                    </div>
                    <h5 className="counter-text">
					Bentley Car Detailing
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-area BrandFaq mbg1">
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
                      What is done during the Bentley service appointment?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="mb-0">
					  During your Bentley service appointment, the technicians would completely inspect your vehicle and address the necessary service actions needed based on the kilometers covered by your vehicle and the minor problems that need to be sorted out.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      <i className="fa fa-question-circle"></i>
                      Can I drive my Bentley when the check engine lights illuminate?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="mb-0">
					  It is not always advised to drive your car longer when the check engine lights in the Bentley illuminate. The issue may be anything like a loose gas cap or complex engine problems, so visiting the reliable Bentley service center in Saudi Arabia is advised.
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
                      How often should I have the fluid inspection in my Bentley?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="mb-0">
                        
It is good to check the fluids in your Bentley whenever you visit the workshop for any sort of repairs or replacements.

                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      <i className="fa fa-question-circle"></i>
					  Does a Bentley require a lot of maintenance?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="mb-0">
					  Like any other luxury car, Bentley also needs certain maintenance tasks needed to be done as per the manufacturer guidelines to keep it in good condition. Taking up that maintenance without neglecting enhances your vehicle's performance and safety.
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
        <OurBrandsLayout />
        <InstagramBox />
        <Footer />
      </>
    );
  }
}

export default Bentley;
