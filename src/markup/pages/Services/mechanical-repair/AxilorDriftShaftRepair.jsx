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
import bnrImg from "../../../../images/services/DriveAxleRepair.webp";
import serviceSectionPic3 from "../../../../images/service-section/pic3.jpg";

class AxilorDriftShaftRepair extends Component {
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
                  <span> AXLE/DRIVE SHAFT REPAIR</span>
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
                      AXLE/DRIVE SHAFT REPAIR
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
					  WE ARE AXLE/DRIVE SHAFT REPAIR SPECIALISTS IN SAUDI ARABIA
                      </h4>
                      <p className="mb-15">
					  As we all know the axle/driveshaft is one of the important mechanical components of the car. The drive shaft usually converts the power generated by the engine into usable force (torque) which is essential for the wheels to spin and the car to work.
                      </p>
                      <p className="mb-15">
					  When the driveshaft in the car is not maintained properly, it may result in reduced performance and poor fuel efficiency.
                      </p>
					  <p className="mb-15">
					  So it becomes essential for every car owner to diagnose and fix the drive shaft problems earlier when they occur to avoid expensive repair bills and ensure smooth performance on the roads.
                      </p>
                    </div>
                    <div className="row">
                   
                      <div className="col-xl-12">
					  <h4 className="title mb-10 text-uppercase">
					  OUR SERVICES INCLUDE EVERYTHING FROM MINOR REPAIRS TO COMPLETE DRIVE SHAFT REPLACEMENTS
                      </h4>
                      <p className="mb-15">
					  At Royal Swiss Auto Services, our technicians are specialized in offering testing and diagnosis to drive shafts, CV joints and differentials. We handle every small repair associated with your axle/drive shaft with greater care and ensure the highest quality with the latest diagnostic tools and equipment.
                      </p>
					  <p className="mb-15">
					  At Royal Swiss Auto, our drive shaft repair specialists in Saudi Arabia offer various services including,
                      </p>
                        <ul className="list-check-squer">
                          <li>CV axle inspection & replacement</li>
                          <li>
						  U joint replacement
                          </li>
                          <li>
						  Yoke replacement
                          </li>
                          <li>
						  CV joint replacement
                          </li>
						  <li>Regeneration & repair of all rear suspension components on the cars</li>
						  <li>And all the other major or minor repairs associated with axle/driveshaft</li>
                        </ul>
                        <p className="mb-15">
						Our workshop in Saudi Arabia is carefully curated with the structures, tools and amenities needed for the maintenance and repair of different types of axles in various makes and models of cars. If you suspect that your axle/driveshaft may have repairs or confused about getting it serviced just give us a call and talk to our service advisors. 
                        </p>
						<h4 className="title mb-10 text-uppercase mb-15">
						What signs indicate a problem with the axle or drive shaft of your car?
                      </h4>
					  <ul className="list-check-squer">
                          <li>You may hear the clunking noise while accelerating or while shifting between the drive and reverse.</li>
                          <li>
						  Start experiencing difficulty in turning while driving around the corners or making u-turns.
                          </li>
                          <li>
						  Excessive vibrations of the vehicle especially when driving at high speed.
                          </li>
                        </ul>
						<p className="mb-15">All the above-mentioned signs indicate the axle/drive shaft repair and may need replacement of CV drive shaft or efficient repairing of axle boot based on the situation and the condition of your car.</p>
						<h4 className="title mb-10 text-uppercase mb-15">
						How to extend the lifespan of the axle/driveshaft in your car?
                      </h4>
					  <ul className="list-check-squer">
                          <li>Proper maintenance and care from certified mechanics would extend the lifespan of your car axle/drive shaft.</li>
                          <li>
						  Smooth driving habits such as avoiding forceful braking, acceleration or aggressive gear changes can extend your driveshaft/axle lifespan and keep it in pristine condition.
                          </li>
                          <li>
						  Adverse environmental factors may result in the formation of corrosion or rust over the driveshaft and decrease its performance. So visual inspection of the driveshaft is highly essential
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
              <h6 class="title-ext text-primary">WHAT MAKES US</h6>
              <h2 class="title mb-0">
			  IDEAL FOR AXLE/DRIVE SHAFT REPAIR IN SAUDI ARABIA?
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
                    <h5 className="counter-text">
					Fully equipped workshop 
                    </h5>
                    <p>
					Being a leading provider of axle/driveshaft repair services in Saudi Arabia, we are equipped with the latest diagnostic tools and the equipment needed to cater all sorts of services under one roof.
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
					Faster turnaround time
                    </h5>
                    <p>
					We repair the axle/drive shaft for all make and model cars with greater accuracy and deliver it back to you promptly as stated.
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
					Affordable cost & greater customer satisfaction
                    </h5>
                    <p>
					We take pride in the quality of our workmanship, which is why we ensure the smile on our customers' faces. All the axle/drive shaft repair services at our workshop can be completed economically.
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
                      What is the purpose of the drive shaft in a car?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="mb-0">
					  To put it simply, drive shafts in the car are essential for transmitting the power from the engine to the wheels which results in the movement of your car.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      <i className="fa fa-question-circle"></i>
                      What happens when the car drive shaft fails?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="mb-0">
					  When the drive shafts in your car fail, your vehicle may experience a complete inability to move or difficulty to make turns based on the extent of damage.
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
					  How often should you get the inspection or service done for your axle/driveshaft?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="mb-0">
					  It is good to get your drive shafts inspected every time you visit the workshop. Any suspected repairs must be brought to the knowledge of the service advisor immediately to avoid major problems.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      <i className="fa fa-question-circle"></i>
					  Where can you get your drive shaft repaired in KSA?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="mb-0">
					  We at Royal Swiss Auto Services are the perfect choice to get the axle/drive shaft repair services in Saudi Arabia. Dealership level of drive shaft repair is guaranteed at the most competitive rates
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

export default AxilorDriftShaftRepair;
