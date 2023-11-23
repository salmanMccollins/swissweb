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
import bnrImg from "../../../../images/services/TransmissionRepair.webp";
import serviceSectionPic3 from "../../../../images/service-section/pic3.jpg";

class TransmissionRepair extends Component{
	
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
                  <span>TRANSMISSION REPAIR SERVICES</span>
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
                      TRANSMISSION REPAIR SERVICES
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
					  HIGH-PRECISION TRANSMISSION REPAIR SERVICES IN SAUDI ARABIA

                      </h4>
                      <p className="mb-15">A transmission is one of the vital components of the car like an engine, and helps you to shift to the correct gear based on your car speed and helps you to drive smoothly. Initially, in the olden days, cars had only the manual transmission but nowadays modern cars have an automatic transmission which makes driving easy. </p>
                      <p className="mb-15">Car transmission repairs are more expensive and are highly complicated. So even the simple mechanical repairs with the car transmission repair must be addressed immediately because they may lead to the failure of other powertrain components like the engine in the long run due to the excessive strain.</p>
					  <p className="mb-15">
At Royal Swiss Auto Services, we provide dealership-level car transmission repair services in Saudi Arabia with high-tech equipment to keep your car in a healthy state at the most competitive rates.
</p>
                    </div>
                    <div className="row">
                   
                      <div className="col-xl-12">
                        <h5 class="title mb-15 text-uppercase">
						Car transmission repair: How to identify that your car transmission needs repairs?
                        </h5>
                        <ul className="list-check-squer">
                          <li>A noticeable delay in gear shifting even after the driver has shifted the gear selector</li>
                          <li>
						  Gear slipping
                          </li>
                          <li>
						  Unusual strange noises like grinding, buzzing or whining noises while shifting gears
                          </li>
                          <li>
						  Burning smell due to the overheated transmission or burning fluid
                          </li>
						  <li>
						  Leaking transmission fluid is one of the predominant sign
						  </li>
						  <li>Vibration or shaking of the car while shifting gears.</li>
                        </ul>
						<h5 class="title mb-15 text-uppercase">
						WE PROVIDE THE PERFECT TRANSMISSION REPAIR & SERVICES IN SAUDI ARABIA
                        </h5>
						<p className='mb-15'>When you visit us with any signs of transmission repair, our team of transmission repair specialists in Saudi Arabia will clearly inspect your car and check over the transmission for any sort of problems.</p>
						<p className='mb-15'>As a first step, our team would check the transmission fluid level and go on to all the other complex issues.</p>
						<h5 class="title mb-15 text-uppercase">
						TRANSMISSION REPAIR SERVICES IN SAUDI ARABIA FOR ALL MAKE AND MODEL OF CARS
                        </h5>
						<p className='mb-15'>Our experienced transmission repair team in KSA can handle all models of cars whether it may be American, Japanese, European or any other brands. Our area of specialization in car transmission repair & service includes,</p>
                        <ul className="list-check-squer">
                          <li>Diagnostic checks</li>
                          <li>
						  Transmission flush
                          </li>
                          <li>
						  Transmission rebuild
                          </li>
                          <li>
						  Transmission oil filter services
                          </li>
						  <li>
						  All other repairs associated with manual and automatic transmission
						  </li>
                        </ul>
						<h5 class="title mb-15 text-uppercase">
						TIPS TO KEEP YOUR CAR TRANSMISSION IN GOOD CONDITION
                        </h5>
						<ul className="list-check-squer">
                          <li>Get regular servicing done for your car transmission as per the manufacturer's guidelines</li>
                          <li>
						  Use only the appropriate transmission fluid for your car.
                          </li>
                        </ul>
						<p className='mb-15'>Following these two steps along with the proper driving habits can extend the lifespan of your car transmission and keep the repair costs minimum.</p>
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
              <h6 class="title-ext text-primary">Choosing Royal Swiss Auto</h6>
              <h2 class="title mb-0 text-uppercase">
			  For your car transmission repair in Saudi Arabia is the right choice!
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
                    <h5 className="counter-text">Experienced technicians</h5>
					<p>At Royal Swiss Auto Services, we make sure only experienced technicians handle your car transmission so that accurate diagnosis and high-quality repairs are guaranteed.</p>
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
                    <h5 className="counter-text">Transparent pricing</h5>
					<p>The parts and the labor charges are clearly mentioned in the quote after the inspection of your car transmission systems and there are no hidden charges other than it.</p>
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
                    <h5 className="counter-text">Faster turnaround time</h5>
					<p>The usage of high-tech equipment and the highly skilled technicians enables us to complete various transmission repairs at a faster pace so that you can be back on the roads with cars sooner.</p>
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
					  Is car transmission service essential?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="mb-0">
					  Transmission has numerous moving components similar to the car engine, so it is essential to have it serviced and inspected by transmission repair specialists often to keep it in good condition and avoid expensive repair bills.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      <i className="fa fa-question-circle"></i>
					  What are the most common transmission issues in the car?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="mb-0">
					  Transmission fluid leakage, transmission hesitation, grinding gears and gear slipping are some of the most common transmission problems reported by most car owners.
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
					  How much does the car transmission repair cost in Saudi Arabia?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="mb-0">
					  The transmission repair costs may vary depending on the problem you are facing with your car transmission and your vehicle condition and the model. By finding reliable car transmission repair specialists in Saudi Arabia who provide quality service at competitive rates, you can lower your transmission repair costs.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      <i className="fa fa-question-circle"></i>
					  Where can I get the car transmission repair done in KSA?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="mb-0">
					  We at Royal Swiss Auto Services are one of the finest choices to get car transmission repair in Saudi Arabia. We always offer high-quality repairs and offer greater satisfaction to the customers.
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

export default TransmissionRepair;