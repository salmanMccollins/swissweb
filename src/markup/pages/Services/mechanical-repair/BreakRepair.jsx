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
import bnrImg from "../../../../images/services/BrakeRepair.webp";
import serviceSectionPic3 from "../../../../images/service-section/pic3.jpg";

class BreakRepair extends Component {
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
                  <span> CAR BRAKE REPAIRS & SERVICES</span>
                </h1>
                <nav aria-label="breadcrumb" className="breadcrumb-row">
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item text-uppercase">
                      <Link to="/">
                        <i className="las la-home"></i>Home
                      </Link>
                    </li>
                    <li className="breadcrumb-item text-uppercase">
                      <Link to="/services">
                        Services
                      </Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
						CAR BRAKE REPAIRS & SERVICES
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
					  GET THE PREMIUM BRAKE SERVICE & REPAIR IN SAUDI ARABIA FROM THE SPECIALISTS
                      </h4>
                      <p className="mb-15">
					  It is essential to keep your car brakes in good condition, as it has a greater impact on your safety on the roads. To keep your car brakes well maintained it becomes essential to visit the reputed car service center and get the complete brake service done as stated in your owner’s manual.
Getting timely servicing and repairing of the car brakes at a reputed car garage in Saudi Arabia is no more a burden since we are readily available with 24/7 customer support to provide complete brake care.

                      </p>
                    </div>
                    <div className="row">
                      <div className="col-xl-12">
                        <h5 class="title mb-15 text-uppercase">
						What are the signs that indicate car brake problems?
                        </h5>
                        <ul className="list-check-squer">
                          <li>When you press the brakes, the car doesn't stop as quickly as it used to</li>
                          <li>
						  Experiencing strange sounds ( squealing, squeaking or grinding noise) when braking
                          </li>
                          <li>
						  The steering wheel may vibrate while applying the brakes
                          </li>
                          <li>
						  Soft and spongy brake pedal
                          </li>
						  <li>Brake warning lights on the dashboard may begin to illuminate in certain models</li>
						  <li>Leaky brake fluid</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="head-text mb-30">
                    <h4 className="title mb-15 text-uppercase">
					How beneficial is getting the regular brake service done for your car?
                    </h4>
                    <p className="mb-15">
					Getting the regular brake service done for your car saves you time and keeps you away from costly repairs.
                    </p>
                    <p className="mb-15">
					Get your car brake service in Saudi Arabia done by our specialist team to have complete peace of mind on the roads.
                    </p>
                    <h4 className="title mb-10">
					WE ARE THE TRUSTED BRAKE REPAIR SPECIALISTS IN SAUDI ARABIA THAT YOU CAN RELY ON
                    </h4>
                    <p className="mb-10">
					At our workshop, our experienced mechanics will carefully inspect your car braking system whenever you need repairs and provide you with the perfect solution. We are guaranteed to provide excellent car brake repair & service in KSA to ensure 100% satisfaction through the trained brake repair specialists and the modern diagnostic equipment and tools at our workshop.
                    </p>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
					<h4 className="title mb-15">
					OUR CAR BRAKE REPAIR SPECIALISTS IN SAUDI ARABIA OFFER VARIOUS SERVICES NEEDED FOR YOUR CAR BRAKES UNDER ONE SHELTER.
                    </h4>
                      <ul className="list-check-squer mb-15">
                        <li>
						Inspection, service and repair of the brake system
                        </li>
                        <li>Replacement of components in the brake system ( brake pads, rotor, calipers, master cylinder, parking brake shoes, rear brake shoes and many more)</li>
                        <li>Brake fluid change </li>
                      </ul>
					  <p className="mb-15">We take pride in providing every single maintenance task that you need for your car brakes to all luxury brands including electric cars.</p>
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
              <h6 class="title-ext text-primary">WHY CHOOSE </h6>
              <h2 class="title mb-0">
			  ROYAL SWISS AUTO FOR YOUR CAR BRAKE REPAIR SERVICES IN SAUDI ARABIA?
              </h2>
            </div>
            <div className="SerGridWrap">
              <div className="row mb-10 justify-content-center">
                <div className="col-xl-12 col-sm-12 col-12 SerGrid1">
                  <div className="counter-style-1">
                    <div className="text-secondry">
                      <h2 className="text-primary">
                        <span className="counter">
                          <i class="flaticon-car-4"></i>
                        </span>
                      </h2>
                    </div>
                    <h5 className="counter-text">
					We use genuine spare parts
                    </h5>
                    <p>
					Every component in your car braking system needs replacement at some point of time due to the constant wear and tear, in such a situation we use only genuine spare parts and ensure no compromise on your quality and safety.
                    </p>
                  </div>
                </div>
                <div className="col-xl-12 col-sm-12 col-12 SerGrid1">
                  <div className="counter-style-1">
                    <div className="text-secondry">
                      <h2 className="text-primary">
                        <span className="counter">
                          <i class="flaticon-car-4"></i>
                        </span>
                      </h2>
                    </div>
                    <h5 className="counter-text">
					Well trained & professional brake mechanics
                    </h5>
                    <p>
					At our car workshop in Saudi Arabia, we do have a team of technicians who are specifically trained to handle the various brake issues in different car models to provide fast and efficient brake repair services.
                    </p>
                  </div>
                </div>
                <div className="col-xl-12 col-sm-12 col-12 SerGrid1">
                  <div className="counter-style-1">
                    <div className="text-secondry">
                      <h2 className="text-primary">
                        <span className="counter">
                          <i class="flaticon-car-4"></i>
                        </span>
                      </h2>
                    </div>
                    <h5 className="counter-text">
					No hidden charges
                    </h5>
                    <p>
					Being the biggest provider of car brake repair services in Saudi Arabia, we strictly adhere to credibility and transparency. All the brake services that you opt for are completed without any hidden charges with greater perfection as per the quote.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
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
                      How often should I get my car brake system services?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="mb-0">
					  It is always good to get your car brake completely inspected at least once a year. Schedule your car brake service appointment immediately if you notice that something is wrong with your car braking system unexpectedly.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      <i className="fa fa-question-circle"></i>
					  How to identify car brake fluid leaks?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="mb-0">
					  Brake fluid leaks can be identified with various signs like illuminating brake warning lights, puddling up of brake fluid under the car and sudden decrease in the level of brake fluids in your car.
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
                      How much does an average brake repair cost in Saudi Arabia?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="mb-0">
					  The cost of brake repair services varies depending on the type of service you opt for. But with a reliable car brake repair workshop like ours, the job can be done with high quality in an economical way.

                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      <i className="fa fa-question-circle"></i>
					  Where to get my car brakes repaired or serviced in Saudi Arabia?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="mb-0">
					  We Royal Swiss Auto Services is one of the ideal choices to get your car brake repair services in KSA, as we are well-equipped with advanced diagnostic tools and have experienced technicians to provide our customers with greater satisfaction than they expect.
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

export default BreakRepair;
