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
import bnrImg from "../../../images/carbrands/Audi.webp";
import serviceSectionPic3 from "../../../images/brandsthumb/Audi 2.png";

class BrandsAudi extends Component {
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
                    ROYAL SWISS AUTO - A SPECIALIZED AUDI SERVICE CENTER IN
                    SAUDI ARABIA
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
                      Audi
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
                      <h4 className="title mb-10">OUR AUDI SERVICE BENEFITS</h4>
                      <p className="mb-20">
                        We know about your vehicle needs, so the perfect care
                        that your Audi deserves is guaranteed.
                      </p>
                      <ul className="list-check-squer mb-30">
                        <li>
                          Dealership alternative Audi service in Saudi Arabia
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
                        WE ARE A ONE-STOP SHOP FOR YOUR AUDI SERVICE OR REPAIR
                        IN SAUDI ARABIA
                      </h4>
                      <h5 className="mb-15">
                        <b>
                          “German cars stay top at the class & the status, so as
                          the Audi”
                        </b>
                      </h5>
                      <p className="mb-15">
                        Everyone who owns an Audi wants the best for it when it
                        comes to servicing or repairing the Audi. So Audi owners
                        will look for a workshop in Saudi Arabia that has the
                        latest tools, experienced technicians and efficient
                        customer support.
                      </p>
                      <p className="mb-15">
                        If you are looking for an Audi service center in KSA,
                        Royal Swiss Auto Services is the perfect choice. Our
                        team of technicians has various years of experience in
                        handling various Audi models like Audi A4, Audi A6, Audi
                        Q7, Audi Q5, Audi Q8, Audi e Tron GT, Audi RS5, Audi S5,
                        Audi RS Q8 and others.
                      </p>
                      <h5 className="mb-15">
                        <b>We are a team of Audi experts</b>
                      </h5>
                      <p className="mb-15">
                        Our years of experience in the auto repair industry
                        enable us to pinpoint what is wrong with your Audi in
                        minutes by conducting a 360-degree inspection and fixing
                        it in an efficient way. Whether it may be a simple
                        engine oil change or a complex engine replacement needed
                        for your Audi, we perform it with great care, so that
                        you can be confident that your car is in safer hands
                        when it is in the garage.
                      </p>
                    </div>
                    <div className="row">
                      <h5 className="mb-15">
                        <b>What makes Royal Swiss Auto Services Unique?</b>
                      </h5>
                      <div className="col-xl-12">
                        <ul className="list-check-squer">
                          <li>
                            The ultra-modern, state-of-the-art Audi workshop in
                            Saudi Arabia
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
                      EXPERIENCE THE MOST COMPETENT AUDI SERVICE & REPAIRS IN
                      SAUDI ARABIA
                    </h4>
                    <p className="mb-15">
                      The advanced technology employed in the electrical and
                      mechanical systems of Audi requires the need of
                      specialists, which is why people come to us.
                    </p>
                    <p className="mb-15">
                      Being a provider of the dealership level of Audi service
                      in the Kingdom of Saudi Arabia, you can expect the top
                      quality service for your Audi from our friendly and
                      reliable team of skilled technicians. When you bring your
                      car to our Audi workshop in Saudi Arabia, we ensure to
                      regain the power-packed performance of your car by
                      providing the finest service and repairs at half the cost
                      of dealerships.
                    </p>
                    <p className="mb-15">
                      If you are experiencing starting issues with your Audi or
                      noticing some unusual signs while driving it or the
                      dashboard warning light is illuminating, bring it to us to
                      let us handle all your Audi car problems, while you rest
                      at our well-maintained waiting area.
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
              <h2 class="title mb-0">AUDI SERVICE IN SAUDI ARABIA WITH US</h2>
              <p>
                Is your Audi not performing at its best due to the lack of
                service or sudden repairs? Just Give us a call at
                966-53-969-9984. We offer the following Audi service & repair
                with the greatest precision.
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
                    <h5 className="counter-text">Audi Engine Repair</h5>
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
                    <h5 className="counter-text">Audi Suspension Repair</h5>
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
                    <h5 className="counter-text">Audi Transmission Repair</h5>
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
                      Audi Touchless Wheel Alignment
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
                    <h5 className="counter-text">Audi Engine Refurbishment</h5>
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
                    <h5 className="counter-text">Audi Software Programming</h5>
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
                    <h5 className="counter-text">Audi AC Repair</h5>
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
                      Audi Service & Warranty Packages
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
                    <h5 className="counter-text">Audi Car Detailing</h5>
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
                    <h5 className="counter-text">Audi Gearbox Repair</h5>
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
                      Audi Engine Cooling System Repair
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
                    <h5 className="counter-text">Audi Brake Repair</h5>
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
                      Audi Camera/Radar Calibration
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
                      Audi Pre-Purchase Inspection
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
                    <h5 className="counter-text">Audi Service Packages</h5>
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
                      Audi Extended Warranty Packages
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
                      How often should I get the service for my Audi?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="mb-0">
                        It is essential to get your Audi serviced at an interval
                        of 10,000 km or once in a year whichever comes first to
                        retain the pristine condition of your car.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      <i className="fa fa-question-circle"></i>
                      When should I get my Audi’s oil changed?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="mb-0">
                        It is essential to get the engine oil change done for
                        your Audi at an interval of every 10,000 km to avoid
                        excessive strain on your Audi engine.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
              <div className="col-lg-6">
                <Accordion
                  defaultActiveKey="2"
                  className="accordion ttr-accordion style1"
                >
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <i className="fa fa-question-circle"></i>
                      Is Audi expensive to maintain in Saudi Arabia?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="mb-0">
                        Like any other luxury car, Audi is expensive to
                        maintain. But with proper care and adhering to a regular
                        maintenance schedule, unexpected expensive repair bills
                        can be avoided. You can experience the dealership level
                        of Audi service in Saudi Arabia at the most competitive
                        prices.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      <i className="fa fa-question-circle"></i>
                      When it comes to my Audi, why should I rely on
                      specialists?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="mb-0">
                        Because of the advanced technology in the complex
                        electrical and mechanical components of the Audi, it
                        requires specialized care from experienced technicians
                        who are familiar with the components in your car and the
                        issues it encounters.
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

export default BrandsAudi;
