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
import bnrImg from "../../../images/carbrands/Lamborghini.webp";
import serviceSectionPic3 from "../../../images/brandsthumb/LAMBORGHINI body Image.webp";

class Lamborghini extends Component {
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
				  ROYAL SWISS AUTO SERVICES - INDEPENDENT LAMBORGHINI SERVICE CENTER IN SAUDI ARABIA
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
					Lamborghini
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
                      <h4 className="title mb-10">OUR LAMBORGHINI SERVICE BENEFITS</h4>
                      <p className="mb-20">
					  We know your Lamborghini inside out to provide the perfect care for it
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
					  EXPERT CAR MECHANICS FOR LAMBORGHINI SERVICE AND REPAIRS IN SAUDI ARABIA
                      </h4>
                      <h5 className="mb-15">
                        <b>
                          “Lamborghini has a unique package of both style and performance”
                        </b>
                      </h5>
                      <p className="mb-15">
					  Like any other high-end car, Lamborghini is also known for its effective engine performance and attractive appearance on the roads. When it comes to servicing and repairs it is always good to choose the specialists so that the pride and joy of riding your Lamborghini can be maintained until the last mile.
                      </p>
                      <p className="mb-15">
					  Saudi Arabia is a vast area covering various cities like Riyadh, Dammam and Jeddah , our branch in Saudi Arabia will provide better Lamborghini services & repairs to make it easier for our customers.
                      </p>
					  <p className="mb-15">
					  At our Lamborghini service center in Saudi Arabia, we take pride in providing exceptional care for your Lamborghini vehicle. Our team of highly trained technicians and service professionals is dedicated to maintaining the performance, precision, and style that make Lamborghini vehicles truly exceptional. 
                      </p>
					  <p className="mb-15">
					  Whether you need routine maintenance, repairs, or customization, you can trust us to deliver top-tier service that meets the exacting standards of the Lamborghini brand.
                      </p>
                      <h5 className="mb-15">
                        <b>We serve all current and past Lamborghini models</b>
                      </h5>
                      <p className="mb-15">
					  Our technicians are trained and have the necessary expertise and experience to work on various models like Lamborghini Aventador, Lamborghini Huracan or Lamborghini Urus. Our Lamborghini garage in Saudi Arabia offers convenient appointment scheduling and efficient service to get you back on the road as quickly as possible.
                      </p>
                    </div>
                    <div className="row">
                      <h5 className="mb-15">
                        <b>What makes us ideal for Lamborghini service in KSA?</b>
                      </h5>
                      <div className="col-xl-12">
                        <ul className="list-check-squer">
                          <li>
						  The ultra-modern, state-of-the-art Lamborghini workshop in Saudi Arabia
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
					GET YOUR LAMBORGHINI SERVICE IN SAUDI ARABIA WITH GREATER CONVENIENCE
                    </h4>
                    <p className="mb-15">
					We value your trust in us and strive to provide exceptional customer service. We'll keep you informed throughout the service process and answer all your queries regarding the Lamborghini services & repairs.
                    </p>
                    <p className="mb-15">
					The one important thing that helps to maintain our high standard of workmanship is that we use only genuine Lamborghini parts to maintain the authenticity and performance of your vehicle.
Our state-of-the-art facility is equipped to handle any electrical or mechanical work that your Lamborghini may require. We use the latest technology and techniques to ensure a flawless finish that matches the dealership's standard of service or even beyond it

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
              <h6 class="title-ext text-primary">TRUST OUR EXPERTS,</h6>
              <h2 class="title mb-0">TO KEEP YOUR LAMBORGHINI PERFORMING AT ITS BEST</h2>
              <p>
			  Whether you need routine maintenance or have a specific concern about your Lamborghini, our team is here to help. Dial <a href="tel:966 53 969 9984">+966 53 969 9984</a> to have a talk with our service advisor and get expert assistance.

Our key specialities in Lamborghini service and repair other than routine maintenance tasks include,

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
        <h5 className="counter-text">Lamborghini Engine Repair</h5>
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
        <h5 className="counter-text">Lamborghini Suspension Repair</h5>
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
        <h5 className="counter-text">Lamborghini Transmission Repair</h5>
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
Lamborghini Touchless Wheel Alignment
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
        <h5 className="counter-text">Lamborghini Engine Refurbishment</h5>
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
        <h5 className="counter-text">Lamborghini Software Programming</h5>
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
        <h5 className="counter-text">Lamborghini AC Repair</h5>
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
        <h5 className="counter-text">Lamborghini Car Detailing</h5>
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
        <h5 className="counter-text">Lamborghini Gearbox Repair</h5>
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
Lamborghini Engine Cooling System Repair
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
        <h5 className="counter-text">Lamborghini Brake Repair</h5>
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
Lamborghini Camera/Radar Calibration
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
Lamborghini Pre-Purchase Inspection
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
                      What is the frequency of engine oil changes in Lamborghini? 
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="mb-0">
					  The interval to get the oil change done for your Lamborghini may vary depending on the model you hold and the type of oil used. Generally it is advised to get the engine oil changed every 10,000 kms or once a year, whichever comes first.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      <i className="fa fa-question-circle"></i>
					  Why is regular servicing important for your Lamborghini?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="mb-0">
					  Getting the regular service as per the manufacturer guidelines increases the lifespan of your car and helps you to stay away from the expensive repair bills.
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
					  How often should I have the fluid inspection in my Lamborghini?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="mb-0">
					  Fluids play an important role in lubricating the respective components, so it is good to check the fluids in your Lamborghini whenever you visit the workshop for any sort of repairs or replacements.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      <i className="fa fa-question-circle"></i>
                      How much does the Lamborghini service cost in Saudi Arabia?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="mb-0">
					  Your Lamborghini service cost may vary depending on the model of the vehicle and the Lamborghini service center in KSA that you choose. So it is always advised to make an informed decision.
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

export default Lamborghini;
