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
import ChooseUsSection from "../../elements/choose-us";

// Images
import bnrImg from "../../../images/carbrands/Infinitty.webp";
import serviceSectionPic3 from "../../../images/brandsthumb/INFINITTY body Image.webp";

class Infinitty extends Component {
  render() {
    return (
      <>
        <Header />

        <div className="page-content bg-white">
          <div
            className="page-banner"
            style={{ backgroundImage: "url(" + bnrImg + ")" }}
          >
            <div className="container">
              <div className="page-banner-entry text-center">
                <h1>
                  <span>
                    ROYAL SWISS AUTO - A SUPERIOR INFINITI SERVICE CENTER IN
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
                    <li className="breadcrumb-item active" aria-current="page">
                      Infinitty
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
                  <div className="row">
                    <div className="col-xl-6">
                      <div className="ttr-media mb-30">
                        <img src={serviceSectionPic3} alt="" />
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <h4 className="title mb-10">
                        OUR INFINITI SERVICE BENEFITS
                      </h4>
                      <p className="mb-20">
                        We know about your vehicle needs, so the perfect care
                        that your Infiniti deserves is guaranteed.
                      </p>
                      <ul className="list-check-squer mb-30">
                        <li>
                          Dealership alternative Infiniti service in Saudi
                          Arabia
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
					  OUR INFINITI SERVICE CENTER IN SAUDI ARABIA ASSURES THE HIGH STANDARD VEHICLE MAINTENANCE
                      </h4>
                      <h5 className="mb-15">
                        <b>
                          “Infiniti makes driving safer & enjoyable: Such a car needs expert care”
                        </b>
                      </h5>
                      <p className="mb-15">
					  Every Infiniti owner would want to make sure that their car gets the perfect care that it deserves without any hindrance.
                      </p>
                      <p className="mb-15">
					  If you are looking for the best Infiniti service center in Saudi Arabia to get your vehicle service, repair and maintenance done then Royal Swiss Auto Services is the right choice.
                      </p>
                      <p className="mb-15">
					  Our premium workshop in Saudi Arabia will provide better Infiniti services & repairs to our customers in a vast area that includes Riyadh, Dammam, and Jeddah.
                      </p>
                      <h5 className="mb-15">
                        <b>We are your Infiniti experts</b>
                      </h5>
                      <p className="mb-15">
					  Whatever may be the Infiniti model you hold like Infiniti Q30,  Infinit Q50, Infiniti M35 sport or any other with us, THE PERFECT CARE is guaranteed. Whether it may be routine Infiniti servicing or diagnostics and repairs we are always ready to provide the comprehensive care in a timely way.
                      </p>
					  <p className="mb-15">
					  With the extensive care from our Infiniti specialists as per the manufacturer guidelines, some of the common problems experienced by the Infiniti vehicles due to wear and tear can be kept away.
					  </p>
                    </div>
                    <div className="row">
                      <h5 className="mb-15">
                        <b>
						What makes us the ideal choice for Infiniti repairs in Saudi Arabia?
                        </b>
                      </h5>
                      <div className="col-xl-12">
                        <ul className="list-check-squer">
                          <li>
                            The ultra-modern, state-of-the-art Infiniti
                            workshop in Saudi Arabia
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
					THE SUPERIOR INFINITI SERVICE IN SAUDI ARABIA, TO KEEP YOUR CAR AT ITS BEST
                    </h4>
                    <p className="mb-15">
					At our Infiniti service center in Saudi Arabia, we use only the latest diagnostic tools and equipment to provide the better service and repairs for you with greater precision and efficiency.
                    </p>
                    <p className="mb-15">
					During the replacement of any electrical or mechanical components on your car, we ensure to use only the genuine and high quality products to retain the longevity and high performance.
                    </p>
                    <p className="mb-15">
					With us you can get the clear explanation of service carried out on your car, costs and the approximate turnaround time whenever you visit us. 
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
              <h6 class="title-ext text-primary">CONTACT US TO</h6>
              <h2 class="title mb-0">SCHEDULE YOUR INFINITI SERVICE WITH US</h2>
              <p>
			  Ready to experience the best in Infiniti car service? Schedule your appointment by just dialing us at <a href="tel:966 53 969 9984">+966 53 969 9984</a> or visiting us directly at our car service center.


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
                    <h5 className="counter-text">Infiniti Engine Repair</h5>
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
                    <h5 className="counter-text">Infiniti Gearbox Repair</h5>
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
                    <h5 className="counter-text">Infiniti Suspension Repair</h5>
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
					Infiniti Transmission Repair
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
                    <h5 className="counter-text">Infiniti Touchless Wheel Alignment</h5>
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
                    <h5 className="counter-text">Infiniti Engine Refurbishment</h5>
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
                    <h5 className="counter-text">Infiniti Software Programming</h5>
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
					Infiniti AC Repair
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
                    <h5 className="counter-text">Infiniti Engine Cooling System Repair</h5>
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
                    <h5 className="counter-text">Infiniti Brake Repair</h5>
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
					Infiniti Camera/Radar Calibration
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
                    <h5 className="counter-text">Infiniti Pre-Purchase Inspection</h5>
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
					Infiniti Service Packages
                    </h5>
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
                      What type of engine oil should I use for the Infiniti?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="mb-0">
					  The best engine oil type that can be used for your Infiniti is synthetic oil. It is always good to check the owner's manual or to talk to your service advisor to find which is best for you.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      <i className="fa fa-question-circle"></i>
                      What to do when the check engine light in my Infiniti turns on?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="mb-0">
                        
Check engine lights indicate that something is wrong with your engine, emission system, or engine control unit. So it is essential to visit the Infiniti service center and get it inspected at the earliest before it turns out to be the major one.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
              <div className="col-lg-6">
                <Accordion className="accordion ttr-accordion style1">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <i className="fa fa-question-circle"></i>
                      How often should I get my Infiniti serviced?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="mb-0">
					  It is good to get your Infiniti serviced every 10,000 km or once in six months by the experts to ensure the high performance of your car.
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
        <Footer />
      </>
    );
  }
}

export default Infinitty;
