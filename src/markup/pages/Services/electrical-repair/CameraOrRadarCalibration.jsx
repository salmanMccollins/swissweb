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
import bnrImg from "../../../../images/services/CaliperPainting.webp";
import serviceSectionPic3 from "../../../../images/service-section/pic3.jpg";

class CameraOrRadarCalibration extends Component {
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
                  <span>Camera/Radar calibration</span>
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
                      Camera/Radar calibration
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
                        EXPERIENCE THE HIGH-STANDARD CAMERA/RADAR CALIBRATION
                        SERVICES IN SAUDI ARABIA
                      </h4>
                      <p className="mb-15">
                        Camera/radar calibration is essential for the smooth
                        driving of your car and ensures safety. In the initial
                        days “driver assistance system” was designed to provide
                        smarter control to vehicle owners like anti-lock braking
                        system, electronic stability control, windshield wipers
                        with rain sensor detection and many more. But nowadays
                        the cameras and sensors in the car are advanced with
                        various tools that help the drivers to map out the
                        surroundings, switch lanes, stop in traffic, vehicle
                        parking and many more.{" "}
                      </p>
                      <p className="mb-15">
                        Cameras and radar sensors require precise calibration
                        from the experts to function correctly. If it becomes
                        misaligned due to maintenance work or damage, it may not
                        provide accurate information to the vehicle's systems.
                      </p>
                      <p className="mb-15">
                        If you have any issues with such advanced driver
                        assistance systems in your car and are looking for
                        camera/radar calibration services, Royal Swiss Auto
                        Services is the right choice.
                      </p>
                      <h4 className="title mb-10">
                        BEST CAMERA/RADAR CALIBRATION SERVICES AT AFFORDABLE
                        PRICES IN SAUDI ARABIA
                      </h4>
					  <p className="mb-15">
					  Our professionals at Royal Swiss Auto Services, will provide the most comprehensive camera/radar calibration services at competitive rates. Our technicians are specifically trained to handle the advanced diagnostic tools to provide the high precision camera/radar calibration services in Saudi Arabia to provide the most significant comfort and safety to the drivers while driving.
                      </p>
                    </div>
                    <div className="row">
                      <div className="col-xl-12">
                        <h5 class="title mb-15 text-uppercase">
						Are you having problems with the camera or radar in your car? Here are the reasons
                        </h5>
                        <ul className="list-check-squer">
                          <li>
						  The components present in the radar or camera might be faulty or may wear out which results in reduced performance.
                          </li>
                          <li>Environmental conditions and the accumulation of dirt and debris may affect the performance of cameras and radars.</li>
                          <li>
						  The problems with the software that is used to manage the sensors can result in the malfunctioning of cameras and radars.
                          </li>
                          <li>
						  Faulty or loose wiring connections in some scenarios may block the power supply to the cameras and radiators.
                          </li>
                        </ul>
						<h5 class="title mb-15 text-uppercase">
						Under what situation, do you need camera/radar calibration services?
                        </h5>
                        <ul className="list-check-squer">
                          <li>
						  In case of accidents or collision, the bumper sensor may be misaligned and it needs to be calibrated.
                          </li>
                          <li>In some scenarios, the camera may be repositioned while carrying out some other repairs on your car, so it must be calibrated,</li>
                          <li>
						  Even small changes made to the suspension or wheel alignment can affect the alignment of cameras and radar, so the calibration service is a must.
                          </li>
                          <li>
						  Calibration may be needed for the front cameras in some scenarios after the windshield replacement.
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
              <h6 class="title-ext text-primary">Why choose us </h6>
              <h2 class="title mb-0 text-uppercase">
			  for the camera/radar calibration services in Saudi Arabia?
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
                    <h5 className="counter-text">Qualified Technicians</h5>
                    <p>
					At our well-equipped workshop, the technicians are specifically trained to provide precise camera/radar calibration services in Saudi Arabia using advanced tools.
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
                    <h5 className="counter-text">Competitive Pricing</h5>
                    <p>
					We perform high-standard camera/radar calibration at the most competitive pricing in KSA. Our quotes are very transparent without any hidden charges.
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
                    <h5 className="counter-text">Faster turnaround time</h5>
                    <p>
					Since we carry out the services very quickly, you no longer need to wait to get back to your car and can enjoy smooth driving on the roads.
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
					  How often do I need the camera/radar calibration services?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="mb-0">
					  The frequency at which you need camera and radar calibration services for your car can vary depending on several factors, including your vehicle's make and model, the type of cameras and radar employed in your car and the driving conditions.
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
					  How helpful are the camera and radars in the car?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="mb-0">
					  The cameras and radar systems in modern cars play a crucial role in enhancing safety, convenience, and overall driving experience. 
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

export default CameraOrRadarCalibration;
