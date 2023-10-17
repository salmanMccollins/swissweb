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
import bnrImg from "../../../images/banner/bnr1.jpg";
import serviceSectionPic3 from "../../../images/service-section/pic3.jpg";

class Mclaren extends Component {
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
                  ROYAL SWISS AUTO - MCLAREN SERVICE CENTER IN SAUDI ARABIA GUARANTEES EXTRAORDINARY CARE
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
                      Mclaren
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
                      <h4 className="title mb-10">OUR MCLAREN SERVICE BENEFITS</h4>
                      <p className="mb-20">
                      We know about your vehicle wants and needs, hence the perfect care that your McLaren deserves is guaranteed.
                      </p>
                      <ul className="list-check-squer mb-30">
                        <li>
                        Dealership alternative Mclaren service in Saudi Arabia
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
                      OUR MCLAREN SPECIALISTS, KEEP YOUR CAR PERFORMING AT ITS BEST
                      </h4>
                      <h5 className="mb-15">
                        <b>
                          “Mclaren: Where every detail is a masterpiece.”
                        </b>
                      </h5>
                      <p className="mb-15">
                      McLaren is known for its high-precision engineering, unparalleled performance, and automotive excellence. Being a premium destination for McLaren car care in Saudi Arabia, our goal is to provide McLaren owners with a level of service and expertise that matches the exceptional standards of its legacy.
                      </p>
                      <p className="mb-15">
                      Our well established workshop in Saudi Arabia will provide better McLaren services & repairs to our customers in a vast area that includes Riyadh, Dammam, and Jeddah.
                      </p>
                      <p className="mb-15">
                      With experienced technicians, usage of genuine McLaren parts, state-of-the-art facilities, and personalized McLaren service plans according to the manufacturer guidelines, we are dedicated to ensuring that your McLaren experience remains nothing short of extraordinary.
                      </p>
                      <p className="mb-15">
                      Our service center is not just a place where your McLaren is serviced; it is a place where your car receives various extraordinary care.
                      </p>
                      <h5 className="mb-15">
                        <b>We provide personalized services for all Mclaren models</b>
                      </h5>
                      <p className="mb-15">
                      Our team of technicians takes time to understand your expectations and goes an extra mile when it comes to servicing or repairing various models like McLaren P1, McLaren 720S, McLaren 650S,McLaren 600L, McLaren GT or any other.

From routine oil changes to extensive inspections of various important powertrain components, our maintenance services are carried out with the utmost precision.

                      </p>
                    </div>
                    <div className="row">
                      <h5 className="mb-15">
                        <b>What makes us ideal for the McLaren service in Saudi Arabia?</b>
                      </h5>
                      <div className="col-xl-12">
                        <ul className="list-check-squer">
                          <li>
                          The ultra-modern, state-of-the-art Mclaren workshop in Saudi Arabia
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
                    HIGH-QUALITY MCLAREN SERVICING WITH TRANSPARENT PRICING
                    </h4>
                    <p className="mb-15">
                    The quality of our workmanship is something we take immense pride at our McLaren garage in Saudi Arabia. Our service center has rigorous quality control procedures in place to ensure that every task is aligned, whether it may be a routine maintenance or a complex repair task, it meets the highest standards to achieve greater customer satisfaction.
                    </p>
                    <p className="mb-15">
                    We believe in transparency when it comes to pricing. Our pricing structure is competitive and fair while the value of the service you receive is never compromised.
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
              <h6 class="title-ext text-primary">EXPERIENCE THE</h6>
              <h2 class="title mb-0">MCLAREN SERVICE AT ITS BEST</h2>
              <p>
              Contact us today at 966 53 969 9984, to schedule an appointment or to learn more about our services. Our wide range of Mclaren service and repairs that our technicians are trained with includes,
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
                    <h5 className="counter-text">McLaren Engine Repair</h5>
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
                    <h5 className="counter-text">McLaren Suspension Repair</h5>
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
                    <h5 className="counter-text">McLaren Transmission Repair</h5>
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
                    McLaren Touchless Wheel Alignment
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
                    <h5 className="counter-text">McLaren Engine Refurbishment</h5>
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
                    <h5 className="counter-text">McLaren Software Programming</h5>
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
                    <h5 className="counter-text">McLaren AC Repair</h5>
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
                    McLaren Service & Warranty Packages
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
                    <h5 className="counter-text">McLaren Car Detailing</h5>
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
                    <h5 className="counter-text">McLaren Gearbox Repair</h5>
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
                    McLaren Engine Cooling System Repair
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
                    <h5 className="counter-text">McLaren Brake Repair</h5>
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
                    McLaren Camera/Radar Calibration
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
                    McLaren Pre-Purchase Inspection
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
                    <h5 className="counter-text">McLaren Service Packages</h5>
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
                    McLaren Extended Warranty Packages
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
                      Why does the AC blow warm air in my McLaren?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="mb-0">
                      If your McLaren is blowing the warm air then it must be due to low refrigerant, dirty condenser, clogged cabin filter, blown fuse evaporator issues or any other issues, so get it inspected by the McLaren specialists near you.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      <i className="fa fa-question-circle"></i>
                      How often should I change the brake fluid in my McLaren?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="mb-0">
                      It is essential to get the brake fluids in your McLaren every two years once, It may slightly vary depending on the model of the vehicle that you hold, so always refer to the owner's manual.
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
                      Why is it essential to use only the genuine spare parts for your McLaren?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="mb-0">
                      Genuine spare parts have a high standard of quality and perform well. Though the original spare parts are expensive but it lasts longer.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      <i className="fa fa-question-circle"></i>
                      Why is the coolant flush important for your McLaren?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="mb-0">
                      Regular coolant flushes are important maintenance needed for your McLaren, ensuring that the engine remains properly cooled and operating at its best.
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

export default Mclaren;
