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
import bnrImg from "../../../../images/services/WindshieldRepair.webp";
import serviceSectionPic3 from "../../../../images/service-section/pic3.jpg";

class WindShieldRepair extends Component {
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
                  <span>WINDSHIELD REPAIR SERVICES</span>
                </h1>
                <nav aria-label="breadcrumb" className="breadcrumb-row">
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/">
                        <i className="las la-home"></i>Home
                      </Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
					WINDSHIELD REPAIR SERVICES
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
                      <h4 className="title mb-15">
					  BEST WINDSHIELD REPAIR SERVICES IN SAUDI ARABIA AT THE MOST COMPETITIVE PRICING
                      </h4>
                      <p className="mb-15">
                        
Any cracks or chips on the windshield will reduce the visibility while driving. So any issues with the windshields must be fixed at the earliest before it turns out to be the major one.
At Royal Swiss Auto Services we do provide the best windshield repair and replacement services in a fast and convenient way as per the original specifications so that you can be at peace of mind.

                      </p>
                      <p className="mb-15">
                       
At our car service center in Saudi Arabia, we use only advanced techniques and high-quality materials to provide you with perfect windshield repair. We can restore the structural integrity of your windshield, preventing further damage.

                      </p>

                      <p className="mb-15">
                       
In cases of damage beyond repair or if you simply need a new windshield, we offer professional windshield replacement services in KSA.

                      </p>
					  <h4 className="title mb-15 text-uppercase">
					  RESTORE THE CLEAR VIEW FROM YOUR CAR AGAIN
                      </h4>
                      <p className="mb-15">Once you visit us to get your car windshield repair done, our technicians will carefully perform the work without affecting the interior or any other surrounding area. Our technicians would carefully follow the vehicle manufacturer's specifications, so you can get the windshield repair or replacement from us with greater precision. </p>
                      <h4 className="title mb-15 text-uppercase">
                      TIPS TO CARE FOR THE WINDSHIELDS IN YOUR CAR
                      </h4>
                      <ul className="list-check-squer mb-15">
                        <li>
						Try to park your car in the shade whenever possible
                        </li>
                        <li>
						Replace the wipers periodically to avoid any damages
                        </li>
                        <li>
                        Repair any cracks or chips immediately to avoid expensive repairs later.
                        </li>
                      </ul>
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
              <h6 class="title-ext text-primary">BENEFITS OF CHOOSING </h6>
              <h2 class="title mb-0">
			  ROYAL SWISS AUTO SERVICES TO GET THE WINDSHIELD REPAIR SERVICES IN SAUDI ARABIA
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
					Expert Technicians
                    </h5>
                    <p>
					Our team in Saudi Arabia consists of highly trained and certified technicians with years of experience in windshield repair and replacement. So trust us to handle your vehicle with care and precision without any second thoughts.
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
Quality Materials
</h5>
                    <p>
					We use only the highest quality materials to ensure the longevity and durability of your windshield. We never compromise on the quality of the products which enables us to attain 100% customer satisfaction.
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
                      Because of our technicians' expertise and advanced
                      equipment, all car body and paint work that you commute to
                      us can be completed faster than you expected.
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
                      Can a small chip or crack in my windshield be repaired?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="mb-0">
                      Yes, In many cases, small chips and cracks can be repaired without the need for a full replacement. We provide excellent windshield repair services in Saudi Arabia to our customers.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      <i className="fa fa-question-circle"></i>
					  How long does it take to repair a windshield?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="mb-0">
                      The time taken to get your windshield repaired may differ based on the extent to which it is damaged. So it is always good to have a talk with your service advisor about the turnaround time.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
              <div className="col-lg-6">
                <Accordion className="accordion ttr-accordion style1">
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>
                      <i className="fa fa-question-circle"></i>
                      Can I drive immediately after a windshield repair?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="mb-0">
					  Yes, you can drive your car immediately after a windshield repair or replacement.
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

export default WindShieldRepair;
