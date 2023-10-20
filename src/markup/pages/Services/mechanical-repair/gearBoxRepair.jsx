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
                  <span> GEARBOX REPAIR SERVICES</span>
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
                      GEARBOX REPAIR SERVICES
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
					  EXPERIENCE THE QUALITY GEARBOX REPAIR SERVICES IN SAUDI ARABIA
                      </h4>
                      <p className="mb-15">
					  One important component of a car is the gearbox, which controls the vehicle's movement. Most latest make and model of cars now comes with an automatic transmission system whereas some have manual transmission.
                      </p>
                      <p className="mb-15">
					  Whether it may be manual or automatic gearbox systems, proper care from the experts is essential to extend its lifespan and to make sure your car runs smoothly on the roads.
If you suspect any kinds of repairs with your car gearbox system contact the gearbox repair specialists immediately to avoid the expensive repair and the complete replacement.

                      </p>
					  <p className="mb-15">
					  At Royal Swiss Auto Services, we are readily available to help you out with all type of gearbox repairs with a team of experienced technicians.
                      </p>	
                    </div>
                    <div className="row">
                      <div className="col-xl-12">
                        <h5 class="title mb-15 text-uppercase">
						Gearbox repairs: what are the signs?
                        </h5>
                        <ul className="list-check-squer">
                          <li>Engine warning lights on the dashboard may begin to illuminate</li>
                          <li>
						  You may notice the transmission fluid leakage
                          </li>
                          <li>
						  Difficulty in accelerating the car
                          </li>
                          <li>
						  Experiencing excessive vibrations while driving
                          </li>
						  <li>Gear slippage or struggling to change the gear</li>
						  <li>You may notice unusual sounds or rubber burning smell in some cases</li>
						  <li>Dragging clutch</li>
                        </ul>
						<h5 class="title mb-15 text-uppercase">
						OUR GEARBOX REPAIR SPECIALISTS IN KSA ARE READY TO HELP YOU WITH ALL TYPES OF SERVICES
                        </h5>
                        <p className="mb-15">
						When it comes to handling the gearbox, the technicians at our well-established workshop in Saudi Arabia are experts in providing various mechanical services, repairs and replacements needed for your gearbox for all make and models.
                        </p>
						<p className='mb-15'>We are one-stop shop for gearbox repair services specializing in:</p>
						<ul className="list-check-squer mb-0">
							<li>
							Complete gearbox services
							</li>
							<li>Diagnostic checks</li>
							<li>Transmission fluid refilling and flushing</li>
							<li>Transmission repair & rebuild</li>
							<li>
							Transmission replacement
							</li>
						</ul>
                      </div>
                    </div>
                  </div>
                  <div className="head-text mb-30">
                    <h4 className="title mb-15">
					WE ARE THE PROFESSIONAL GEARBOX REPAIR SPECIALISTS IN SAUDI ARABIA USING LATEST DIAGNOSTIC TOOLS AND EQUIPMENTS
                    </h4>
                    <p className="mb-15">
					We use modern diagnostic tools and the latest equipment to provide accurate diagnosis and restore the performance of your gearbox while saving you time and money. Our gearbox specialists at our workshop in KSA can handle the gearbox issues associated with various brands like be American, European, German, Japanese or any other exotic or luxury cars.
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
              <h6 class="title-ext text-primary">Why choose </h6>
              <h2 class="title mb-0">
			  Royal Swiss Auto for your gearbox repair in Saudi Arabia?
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
                    <h5 className="counter-text">Trusted experts  </h5>
					<p>Our workshop has specifically trained technicians who can handle everything like inspection, repair or replacement of the gearbox system in an efficient way.</p>
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
                    <h5 className="counter-text">Competitive pricing and the faster response</h5>
					<p>We offer gearbox/ transmission repair services for all models of cars at the most competitive pricing. Apart from this, the professional customer support answers all your queries and guides you throughout the gearbox repair or service appointment.</p>
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
                    <h5 className="counter-text">High-quality workmanship</h5>
					<p>We use advanced diagnostic tools and the latest equipment to provide the perfect diagnosis and the high standard repairs. The usage of genuine spare parts is always guaranteed</p>
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
					  When should the gearbox be replaced?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="mb-0">
					  Usually, the gearbox in your car lasts longer. There is no need to get it replaced until the issues are irreparable or it is completely damaged.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      <i className="fa fa-question-circle"></i>
                      What are the different types of gearboxes available?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="mb-0">
					  The automatic gearbox system and the manual gearbox system are the two different types available mostly in cars nowadays.
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
                      Do driving habits have a greater impact on your gearbox health?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="mb-0">
					  Both driving habits and driving conditions have a greater impact on the lifespan of your gearbox. Harsh driving, bad weather and rough roads decrease the performance of your gearbox over the course of time.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      <i className="fa fa-question-circle"></i>
                      What can our gearbox repair specialists in Saudi Arabia do for you?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="mb-0">
					  Our gearbox repair specialists can help you with all the issues associated with the gearbox/ transmission whether it may be repair, rebuild or replacement.
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