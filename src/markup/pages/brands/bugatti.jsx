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
import serviceSectionPic3 from "../../../images/brandsthumb/Buggati.png";

class Bugatti extends Component {
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
                  ROYAL SWISS AUTO - BEST BUGATTI SERVICE CENTER IN SAUDI ARABIA
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
                    Bugatti
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
                      <h4 className="title mb-10 text-uppercase">OUR BUGATTI SERVICE BENEFITS</h4>
                      <p className="mb-20">
                      Protect your hard-earned investment with our Bugatti service center in Saudi Arabia.
                      </p>
                      <ul className="list-check-squer mb-30">
                        <li>
                        Dealership alternative Bugatti service in Saudi Arabia
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
                      EXPERIENCE THE MOST COMPREHENSIVE BUGATTI SERVICE & REPAIR IN SAUDI ARABIA WITH US
                      </h4>
                      <h5 className="mb-15">
                        <b>
                          “Bugatti - The car with the heightened unmatched luxury in it”
                        </b>
                      </h5>
                      <p className="mb-15">
                      We all know how proper maintenance is important to extend the lifespan of such a sporty car but choosing the best workshop in your locality is also important to provide your Bugatti with a high standard of service at competitive prices.
                      </p>
                      <p className="mb-15">
                      Saudi Arabia is a vast area covering various cities like Riyadh, Dammam and Jeddah , our branch opening in Saudi Arabia will provide better Bugatti services & repairs to make it easier for our customers.
                      </p>
                      <p className="mb-15">
                      We provide all auto repair services for your Bugatti as per the manufacturer guidelines with the greatest precision, so that your car continues to impress others on the roads with its flawless performance.
                      </p>
                      <p className="mb-15">
                      We understand all the Bugatti models are unique, which is why our technicians are highly trained to handle them with greater care.
                      </p>
                      <h5 className="mb-15">
                        <b>All Bugatti models are perfectly serviced by us</b>
                      </h5>
                      <p className="mb-15">
                      At our Bugatti workshop in KSA, we have highly-qualified technicians and the latest diagnostic tools to work on various Bugatti models like Veyron, Chiron, Divo, Royale or others. If you want to keep your Bugatti well-maintained and enjoy every bit of riding it, then visit our Bugatti workshop in the Kingdom of Saudi Arabia without any second thoughts.
                      </p>
                    </div>
                    <div className="row">
                      <h5 className="mb-15">
                        <b>What makes Royal Swiss Auto Services ideal for Bugatti service in Saudi Arabia?</b>
                      </h5>
                      <div className="col-xl-12">
                        <ul className="list-check-squer">
                          <li>
                          The ultra-modern, state-of-the-art Bugatti workshop in Saudi Arabia
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
                    KEEP YOUR BUGATTI AT ITS BEST IN A POCKET-FRIENDLY WAY
                    </h4>
                    <p className="mb-15">
                    Our team of Bugatti specialists are specifically trained to provide mechanical work, electrical and software services along with paint and body shop services which makes us deliver auto repair services with greater customer satisfaction.
                    </p>
                    
                    <p className="mb-15">
                    The attention to detail and the outstanding service that we provide for your Bugatti, make us reach more customers and make their vehicle maintenance easier.
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
              <h6 class="title-ext text-primary">WE ARE THE BEST</h6>
              <h2 class="title mb-0">GERMAN CAR EXPERTS IN KSA YOU CAN TRUST FOR YOUR BUGATTI SERVICE</h2>
              <p>
              If you would like to schedule your Bugatti service with us Dial <a href="tel:966 53 969 9984">+966 53 969 9984</a> to talk with our service department. We are always ready to help with your Bugatti maintenance needs despite the model you hold.

For all current and past Bugatti models, we provide the following services along with the vehicle maintenance and repairs.

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
        <h5 className="counter-text">Bugatti Engine Repair</h5>
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
        <h5 className="counter-text">Bugatti Suspension Repair</h5>
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
        <h5 className="counter-text">Bugatti Transmission Repair</h5>
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
Bugatti Touchless Wheel Alignment
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
        <h5 className="counter-text">Bugatti Engine Refurbishment</h5>
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
        <h5 className="counter-text">Bugatti Software Programming</h5>
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
        <h5 className="counter-text">Bugatti AC Repair</h5>
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
        <h5 className="counter-text">Bugatti Car Detailing</h5>
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
        <h5 className="counter-text">Bugatti Gearbox Repair</h5>
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
Bugatti Engine Cooling System Repair
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
        <h5 className="counter-text">Bugatti Brake Repair</h5>
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
Bugatti Camera/Radar Calibration
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
Bugatti Pre-Purchase Inspection
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
                      Why does the maintenance tasks for the Bugatti not to be ignored?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="mb-0">
                      Neglecting the routine maintenance may lead to major expensive repairs, decrease in the fuel economy and the performance of the car.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      <i className="fa fa-question-circle"></i>
                      How much does the Bugatti service cost in Saudi Arabia?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="mb-0">
                      The Bugatti service costs greatly vary depending on the model of the vehicle and service center you choose. Always choose the most trusted Bugatti service center in your locality with experienced technicians.
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
                      Can I drive my Bugatti with the suspension issues?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="mb-0">
                        
                      Driving your Bugatti with suspension issues is not always advised since it has a greater impact on your safety. So get the repairs sorted by contacting the Bugatti specialists.

                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      <i className="fa fa-question-circle"></i>
                      Why is it essential to use genuine spare parts for your Bugatti?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="mb-0">
                      Genuine spare parts have a high standard of quality and performance. Though the original spare parts are expensive it lasts longer.
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

export default Bugatti;
