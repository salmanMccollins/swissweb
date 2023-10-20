import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {Accordion} from 'react-bootstrap';

// Layout
import Header from "../../../layout/header";
import Footer from "../../../layout/footer";

// Elements
import WidgetBrochure from "../../../elements/widget/widget-brochure";
import WidgetHelp from "../../../elements/widget/widget-help";
import ScheduleServiceSection from '../../../elements/schedule-service';
import TestimonialSection from '../../../elements/testimonial';
import ChooseUsSection from '../../../elements/choose-us';
import ServicesSection from '../../../elements/services-1';

// Images
import bnrImg from "../../../../images/banner/bnr1.jpg";
import serviceSectionPic3 from "../../../../images/service-section/pic3.jpg";

class gearBoxRepair extends Component{
	
	render(){
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
                  <span> CAR AC REPAIR & SERVICES</span>
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
                      {" "}
                      Car AC Repair & Services
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
                        TRUST US FOR YOUR CAR AC REPAIR IN SAUDI ARABIA - WE’LL
                        KEEP YOUR CAR COOL THAN YOU EXPECT
                      </h4>
                      <p className="mb-15">
                        A regular car air conditioning system service ensures
                        that it stays in top condition! As we all know a
                        properly functioning car AC system is essential to
                        enhance the comfort of the drivers on the road.
                      </p>
                      <p className="mb-15">
                        A routine car AC service or repairs increases your air
                        conditioning system life span and helps you to avoid
                        expensive repairs. Getting the car AC service done by
                        the specialists also has a few other benefits listed
                        below like,
                      </p>
                    </div>
                    <div className="row">
                      <div className="col-xl-8">
                        <div className="progress-area mb-30">
                          <div className="progress-box style1 appear">
                            <div className="progress-info">
                              <h6 className="title">
                                Enhanced cooling performance
                              </h6>
                              <h6 className="progress-value">100%</h6>
                            </div>
                            <div className="progress">
                              <div
                                className="progress-bar bg-primary"
                                style={{ width: "100%" }}
                              ></div>
                            </div>
                          </div>
                          <div className="progress-box style1 appear">
                            <div className="progress-info">
                              <h6 className="title">
                                Superior comfort without any unwanted odor or
                                noises
                              </h6>
                              <h6 className="progress-value">100%</h6>
                            </div>
                            <div className="progress">
                              <div
                                className="progress-bar bg-primary"
                                style={{ width: "100%" }}
                              ></div>
                            </div>
                          </div>
                          <div className="progress-box style1 appear">
                            <div className="progress-info">
                              <h6 className="title">
                                Better air quality inside the cabin
                              </h6>
                              <h6 className="progress-value">100%</h6>
                            </div>
                            <div className="progress">
                              <div
                                className="progress-bar bg-primary"
                                style={{ width: "100%" }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-12">
                        <h5 class="title mb-15 text-uppercase">
                          Is your car's AC system in need of repair or service?
                          What are the signs?
                        </h5>
                        <ul className="list-check-squer">
                          <li>Your car AC doesn't blow the cold air</li>
                          <li>
                            You may experience frequent compressor issues & the
                            compressor clutch may not be working properly
                          </li>
                          <li>
                            You may notice unusual noises when the AC is working
                          </li>
                          <li>
                            The AC unit might be leaking and you may notice
                            strange odors
                          </li>
                        </ul>
                        <p className="mb-15">
                          At Royal Swiss Auto service, our AC repair specialists
                          diagnose all the above-mentioned issues and provide
                          you with the perfect care.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="head-text mb-30">
                    <h4 className="title mb-15">
                      WE ARE YOUR CAR AC REPAIR, SERVICE & MAINTENANCE PARTNER
                    </h4>
                    <p className="mb-15">
                      At our well-established car service center in Saudi
                      Arabia, our skilled and experienced car AC specialists
                      would perform the complete inspection of your car AC
                      system and provide better solutions to various issues such
                      as coolant leakages, air filter issues, car AC compressor
                      failure and many others.
                    </p>
                    <p className="mb-15">
                      Our technicians have years of experience and the
                      efficiency to quickly pinpoint and resolve the various
                      issues with the Car AC system.
                    </p>
                    <h4 className="title mb-10">
                      REACH OUT TO US FOR ANY OF THE BELOW-MENTIONED SERVICES
                      RELATED TO CAR AIR CONDITIONING SYSTEM
                    </h4>
                    <p className="mb-10">
                      We are ready to provide all the car AC repair services in
                      KSA at competitive rates promptly in a short period. Reach
                      out to us for the following services, we assure the
                      greater satisfaction than you expect,
                    </p>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <ul className="list-check-squer mb-0">
                        <li>
                          Various diagnostics & repairs needed for the car's AC
                          system
                        </li>
                        <li>Car AC compressor and clutch repairs</li>
                        <li>Refrigerant leakage detection </li>
                        <li>Refrigerant inspection & refilling</li>
                        <li>
                          Repair and replacement of the important components
                          like AC condenser and evaporator
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
              <h6 class="title-ext text-primary">BENEFITS OF </h6>
              <h2 class="title mb-0">
			  CHOOSING ROYAL SWISS AUTO SERVICES FOR CAR AC SERVICE IN SAUDI ARABIA
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
                    <h5 className="counter-text">Professional customer support </h5>
					<p>At our car workshop in Saudi Arabia, we do have a professional customer support team who would guide you and answer all your queries when you visit us to get your car AC repair or services done until you get back your car from us. So that you can be confident and get hassle-free car AC service in Saudi Arabia.</p>
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
                    <h5 className="counter-text">Latest diagnostic equipment & tools</h5>
					<p>We invest in highly advanced diagnostic tools and equipment to provide our customers with quality car AC repair in a faster turnaround time.</p>
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
                    <h5 className="counter-text">Competitive pricing & genuine spare parts</h5>
					<p>We guarantee to use only genuine spare parts to ensure the dealership level of car AC repair but at the most competitive pricing.</p>
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
                      Why is my car AC not blowing the cold air?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="mb-0">
					  If your car AC is not blowing the cold air, the problem may be as simple as a dirty cabin filter, bad belt or as complex as compressor failure or freon leakages.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      <i className="fa fa-question-circle"></i>
                      How often should I get my car AC serviced?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="mb-0">
					  It is essential to get your car AC services at least once a year to keep it in pristine condition. Apart from this if you notice any unusual signs with your car AC visit the car service center immediately.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>
                      <i className="fa fa-question-circle"></i>
                      Why is there a weird noise when my car AC is running?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="mb-0">
					  The strange noises when the car AC is running may be due to a damaged fan motor, loose wiring or any other. Getting it inspected by the car AC repair specialists will help in the perfect diagnosis.
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
                      What should I do if the refrigerant in the car AC is leaking?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="mb-0">
					  Leakage of refrigerants in the car may result in the blow of warm air, damage to certain other components and various other health risks. So visit the service center and get the car AC repair services done with greater precision.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      <i className="fa fa-question-circle"></i>
                      Where can I get the best car AC repair in Saudi Arabia?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="mb-0">
					  We are the perfect choice to get your car AC repair services in Saudi Arabia in a pocket-friendly way from experienced technicians with excellent quality.
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

export default gearBoxRepair;