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

class TouchlessWheelAlignment extends Component {
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
                  <span>WHEEL ALIGNMENT SERVICES</span>
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
                      WHEEL ALIGNMENT SERVICES
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
                        INSTANT TOUCHLESS WHEEL ALIGNMENT SERVICES IN SAUDI
                        ARABIA FROM THE EXPERTS
                      </h4>
                      <p className="mb-15">
					  Getting your wheels aligned is highly important because they contribute a lot towards your vehicle's performance and safety. When the wheels are not properly aligned it may have several impacts like fastened and uneven tyre wear, decreased fuel efficiency and poor vehicle handling characteristics.
                      </p>
                      <p className="mb-15">
					  When the wheel alignment is done by the experts with the greatest precision it ensures all your vehicle moves straightly. During the wheel alignment appointment, everything like camber, toe, thrust, caste and many others are inspected.
                      </p>
                    </div>
                    <div className="row">
                      <div className="col-xl-12">
                        <h5 class="title mb-15 text-uppercase">
						What are the signs that indicate the need for wheel alignment in my car?
                        </h5>
                        <ul className="list-check-squer">
                          <li>
						  The steering wheel is not properly centered especially & even does not come to the center after turning
                          </li>
                          <li>Tyres wear out unevenly and frequently</li>
                          <li>
						  The vehicle begins to pull to one side
                          </li>
                          <li>
						  Steering wheel misalignment may lead to excessive vibration 
                          </li>
                          
                        </ul>
                        <h5 class="title mb-15 text-uppercase">
						WE ARE WELL-EQUIPPED TO PROVIDE THE HIGHEST PRECISION WHEEL ALIGNMENT SERVICE IN SAUDI ARABIA
                        </h5>
                        <p className="mb-15">
						Touchless wheel alignment is the revolution in the auto repair industry. The latest equipment & technology that we use in our workshop provides the most accurate wheel alignment results for your car in seconds.
                        </p>
                        <p className="mb-15">
						Our cutting-edge equipment and advanced software are completely automated to provide the most convenient wheel alignment in a faster approach.
                        </p>
                        <h5 class="title mb-15 text-uppercase">
						When it comes to wheel alignment for your car, why should you choose Royal Swiss Auto?
                        </h5>
                        <ul className="list-check-squer">
                          <li>Precise and accurate measurement for all the four wheels</li>
                          <li>There is not much waiting time, provides accurate results in minutes</li>
                          <li>Leaving your vehicle at the workshop is not necessary</li>
                        </ul>
						<h5 class="title mb-15 text-uppercase">
						BOOK YOUR TOUCHLESS WHEEL ALIGNMENT SERVICES IN SAUDI ARABIA WITH US
                        </h5>
						<p className="mb-15">
						If you are searching in Google like “touchless wheel alignment near me’’ in Saudi Arabia and waiting for your mobile to show off the results.
                        </p>
						<p className="mb-15">
						Never get confused, we are the ideal place to get your wheels aligned in no time from the experts.
                        </p>
						<p className="mb-15">
						Dial us at 966 53 969 9984 to know more about wheel alignment services and to make bookings.
                        </p>
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
            <div className="row">
              <div className="col-lg-6">
                <Accordion
                  defaultActiveKey="0"
                  className="accordion ttr-accordion style1"
                >
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <i className="fa fa-question-circle"></i>
					  Why is it important to get your wheels aligned?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="mb-0">
					  Getting the wheel alignment done is essential to extend the lifespan of the tyres and gives a pleasant driving experience.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      <i className="fa fa-question-circle"></i>
                     
How often should you get the wheels aligned?

                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="mb-0">
					  To ensure the safety of you and your vehicle, it is advised to get the oil changes done every time you visit the workshop for the oil change based on your vehicle's condition.
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
                      How easy are the touchless wheel alignment services?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="mb-0">
                      Touchless wheel alignment services are quite simple and can be completed within seconds. Once your vehicle is positioned correctly between the sensors the accurate results for all four wheels would be generated.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      <i className="fa fa-question-circle"></i>
                      Where to get the touchless wheel alignment in Saudi Arabia?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="mb-0">
					  At Royal Swiss Auto Services, our expert wheel alignment technicians are readily available to provide the perfect alignment for your vehicles through the latest technology.
                      
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

export default TouchlessWheelAlignment;
