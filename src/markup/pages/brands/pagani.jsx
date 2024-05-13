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
import bnrImg from "../../../images/carbrands/GMC.webp";
import serviceSectionPic3 from "../../../images/brandsthumb/Pagani.png";


class Pagani extends Component {
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
                  ROYAL SWISS AUTO - REPUTED PAGANI SERVICE CENTER IN SAUDI ARABIA
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
                    Pagani
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
                      <h4 className="title mb-10">OUR PAGANI  SERVICE BENEFITS</h4>
                      <p className="mb-20">
                      We help you embrace the premium ride with your Pagani through our comprehensive service & repairs
                      </p>
                      <ul className="list-check-squer mb-30">
                        <li>
                        Dealership alternative Pagani service in Saudi Arabia
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
                      EXPERIENCE THE PREMIUM PAGANI SERVICE & REPAIR IN SAUDI ARABIA
                      </h4>
                      <h5 className="mb-15">
                        <b>
                          “Precision, passion, and perfection – the Pagani way”
                        </b>
                      </h5>
                      <p className="mb-15">
                      Italian supercars like Pagani have some specific and unique requirements when it comes to vehicle maintenance to keep it in premium condition. Such extreme care that your modern or vintage Pagani needs can be obtained only from the reliable Pagani service center in Saudi Arabia.
                      </p>
                      <p className="mb-15">
                      Saudi Arabia is a vast area covering various cities like Riyadh, Dammam and Jeddah , our branch  in Saudi Arabia will provide better Pagani services & repairs to make it easier for our customers.
                      </p>
                      <p className="mb-15">
                      We Royal Swiss Auto Services, being one of the most trusted Pagani service center in KSA, suggest nothing but the best needed for your vehicle. We have both the state-of-the-art facility and the technicians to handle various models like Porsche Zonda, Porsche Huayra, Porsche Porsche Utopia, Porsche Imola and others.
                      </p>
                      <h5 className="mb-15">
                        <b>We are dedicated Pagani specialists</b>
                      </h5>
                      <p className="mb-15">
                      With a team of highly experienced technicians and the latest diagnostic tools at our Pagani workshop in Saudi Arabia, we provide everything including routine inspections, repairs and other maintenance needed for your luxury car. When it comes to Pagani service or repair in Saudi Arabia, we always exceed your expectations by delivering high-quality work with greater care as you care for your car.
                      </p>
                    </div>
                    <div className="row">
                      <h5 className="mb-15">
                        <b>What makes Royal Swiss Auto Services unique for Pagani services in KSA?</b>
                      </h5>
                      <div className="col-xl-12">
                        <ul className="list-check-squer">
                          <li>
                          The ultra-modern, state-of-the-art Pagani workshop in Saudi Arabia
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
                    WE ENSURE THE FLAWLESS PERFORMANCE OF YOUR PAGANI
                    </h4>
                    <p className="mb-15">
                    We understand how intricate the electrical and mechanical components are in a luxury car like Pagani, so with our years of experience we are able to deliver the perfect care that it deserves. With our seamless experience and the state of the art facility, we strive in all possible ways to easily diagnose and fix the issues in your car properly, so you can get back on the roads sooner with your car.
                    </p>
                    <p className="mb-15">
                    Whenever you visit our workshop in the Kingdom of Saudi Arabia to get your Pagani serviced or repaired, we always guarantee faster turnaround time and greater transparency throughout the process, which makes us the most trusted car workshop among the people for Pagani service in Saudi Arabia.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="section-area section-sp2 ServiceBox1 IconBox1">
          <div className="container">
            <div class="heading-bx text-center">
              <h6 class="title-ext text-primary">Schedule Your</h6>
              <h2 class="title mb-0">PAGANI SERVICE IN SAUDI ARABIA WITH OUR EXPERTS</h2>
              <p>
              We have specifically tailored our Pagani service and repair process in accordance with the manufacturer's guidelines to ensure the longevity and optimal performance of your car. Dial <a href="tel:966557835647">+966 55 783 5647
</a> to get premium care and preserve the elegance of your Pagani on the roads.

From engine diagnostics to paint and body shop service, we cover everything. The maintenance and repair services that we specialize in providing for your Pagani are listed below,

              </p>
            </div>
            <div className="SerGridWrap">
  <div className="row mb-10">
    <div className="col-xl-4 col-sm-12 col-12">
      <div className="counter-style-1">
        <div className="text-secondry">
          <h2 className="text-primary">
            <span className="counter">
            <span class="serviceicon service12">&nbsp;</span>
            </span>
            {/* <span>K</span> */}
          </h2>
        </div>
        <h5 className="counter-text">Pagani Engine Repair</h5>
      </div>
    </div>
    <div className="col-xl-4 col-sm-12 col-12">
      <div className="counter-style-1">
        <div className="text-secondry">
          <h2 className="text-primary">
            <span className="counter">
            <span class="serviceicon service6">&nbsp;</span>
            </span>
            {/* <span>+</span> */}
          </h2>
        </div>
        <h5 className="counter-text">Pagani Suspension Repair</h5>
      </div>
    </div>
    <div className="col-xl-4 col-sm-12 col-12">
      <div className="counter-style-1">
        <div className="text-secondry">
          <h2 className="text-primary">
            <span className="counter">
            <span class="serviceicon service7">&nbsp;</span>
            </span>
          </h2>
        </div>
        <h5 className="counter-text">Pagani Transmission Repair</h5>
      </div>
    </div>
    <div className="col-xl-4 col-sm-12 col-12">
      <div className="counter-style-1">
        <div className="text-secondry">
          <h2 className="text-primary">
            <span className="counter">
            <span class="serviceicon service8">&nbsp;</span>
            </span>
          </h2>
        </div>
        <h5 className="counter-text">
Pagani Touchless Wheel Alignment
        </h5>
      </div>
    </div>
    <div className="col-xl-4 col-sm-12 col-12">
      <div className="counter-style-1">
        <div className="text-secondry">
          <h2 className="text-primary">
            <span className="counter">
            <span class="serviceicon service12">&nbsp;</span>
            </span>
          </h2>
        </div>
        <h5 className="counter-text">Pagani Engine Refurbishment</h5>
      </div>
    </div>
    <div className="col-xl-4 col-sm-12 col-12">
      <div className="counter-style-1">
        <div className="text-secondry">
          <h2 className="text-primary">
            <span className="counter">
            <span class="serviceicon service10">&nbsp;</span>
            </span>
          </h2>
        </div>
        <h5 className="counter-text">Pagani Software Programming</h5>
      </div>
    </div>
    <div className="col-xl-4 col-sm-12 col-12">
      <div className="counter-style-1">
        <div className="text-secondry">
          <h2 className="text-primary">
            <span className="counter">
            <span class="serviceicon service8">&nbsp;</span>
            </span>
          </h2>
        </div>
        <h5 className="counter-text">Pagani AC Repair</h5>
      </div>
    </div>
    
    <div className="col-xl-4 col-sm-12 col-12">
      <div className="counter-style-1">
        <div className="text-secondry">
          <h2 className="text-primary">
            <span className="counter">
            <span class="serviceicon service16">&nbsp;</span>
            </span>
          </h2>
        </div>
        <h5 className="counter-text">Pagani Car Detailing</h5>
      </div>
    </div>
    <div className="col-xl-4 col-sm-12 col-12">
      <div className="counter-style-1">
        <div className="text-secondry">
          <h2 className="text-primary">
            <span className="counter">
            <span class="serviceicon service4">&nbsp;</span>
            </span>
          </h2>
        </div>
        <h5 className="counter-text">Pagani Gearbox Repair</h5>
      </div>
    </div>
    <div className="col-xl-4 col-sm-12 col-12">
      <div className="counter-style-1">
        <div className="text-secondry">
          <h2 className="text-primary">
            <span className="counter">
            <span class="serviceicon service3">&nbsp;</span>
            </span>
          </h2>
        </div>
        <h5 className="counter-text">
Pagani Engine Cooling System Repair
        </h5>
      </div>
    </div>
    <div className="col-xl-4 col-sm-12 col-12">
      <div className="counter-style-1">
        <div className="text-secondry">
          <h2 className="text-primary">
            <span className="counter">
            <span class="serviceicon service2">&nbsp;</span>
            </span>
          </h2>
        </div>
        <h5 className="counter-text">Pagani Brake Repair</h5>
      </div>
    </div>
    <div className="col-xl-4 col-sm-12 col-12">
      <div className="counter-style-1">
        <div className="text-secondry">
          <h2 className="text-primary">
            <span className="counter">
            <span class="serviceicon service9">&nbsp;</span>
            </span>
          </h2>
        </div>
        <h5 className="counter-text">
Pagani Camera/Radar Calibration
        </h5>
      </div>
    </div>
    <div className="col-xl-4 col-sm-12 col-12">
      <div className="counter-style-1">
        <div className="text-secondry">
          <h2 className="text-primary">
            <span className="counter">
            <span class="serviceicon service5">&nbsp;</span>
            </span>
          </h2>
        </div>
        <h5 className="counter-text">
Pagani Pre-Purchase Inspection
        </h5>
      </div>
    </div>
    
  </div>
</div>
          </div>
        </section>
        <section className="section-area BrandFaq mbg1">
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
                      Where to get the Pagani service in Saudi Arabia?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="mb-0">
                      Always consider the reliable Pagani service center that is well equipped with the latest diagnostic tools and equipment along with a team of skilled technicians to handle your car. We Royal Swiss Auto Services are the ideal choice to get the perfect care for your car.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      <i className="fa fa-question-circle"></i>
                      Is Pagani expensive to repair and maintain?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="mb-0">
                      Like any other luxury cars Pagani are expensive to repair, but it depends on the type of issues you are facing and the condition of the vehicle. But taking up the regular maintenance for your Pagani as per the manufacturer guidelines, significantly lowers the auto repair costs.
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
                      Why is it important to get the coolant flush done for your Pagani?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="mb-0">
                      Coolant helps regulate the temperature of your engine by dissipating heat. The coolant loses its functionality as it gets old, so it is essential to get the coolant flush done for your Pagani.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      <i className="fa fa-question-circle"></i>
                      What is the engine oil change interval for the Pagani?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="mb-0">
                      It is essential to get the engine oil in your Pagani changed every 10,000 kms to 15,000 kms to keep your car engine in good condition.
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

export default Pagani;
