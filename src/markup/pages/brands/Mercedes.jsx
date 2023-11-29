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
import bnrImg from "../../../images/carbrands/Mercedes.webp";
import serviceSectionPic3 from "../../../images/brandsthumb/Mercedes Benz body Image.webp";


class Mercedes extends Component {
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
				  ROYAL SWISS AUTO  - A PREMIUM MERCEDES SERVICE CENTER IN SAUDI ARABIA
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
					Mercedes
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
                      <h4 className="title mb-10">OUR MERCEDES SERVICE BENEFITS</h4>
                      <p className="mb-20">
					  You can trust bringing your Mercedes to our car service center in Saudi Arabia. We deliver the same care to your car as our own.
                      </p>
                      <ul className="list-check-squer mb-30">
                        <li>
						Dealership alternative Mercedes service in Saudi Arabia
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
					  WE ARE THE LEADING MERCEDES EXPERTS IN SAUDI ARABIA
                      </h4>
                      <h5 className="mb-15">
                        <b>
                          “Mercedes - A classic beauty that exceeds the expectation”
                        </b>
                      </h5>
                      <p className="mb-15">
					  Mercedes Benz is one of the premium luxury brands that deserves the proper maintenance and care from its owner with professional support to retain their high performance and luxury features. If you own such a prestigious automobile then definitely you would be in search of skillful Mercedes specialists across your locality to provide better care for your car.
                      </p>
                      <p className="mb-15">
					  Saudi Arabia is a vast area covering various cities like Riyadh, Dammam and Jeddah , our branch opening in Saudi Arabia will provide the better Mercedes auto repair services to make it easier for our customers.
                      </p>
					  <p className="mb-15">
					  We Royal Swiss Auto Services are the perfect quick-fit solution for your Mercedes service in Saudi Arabia. You will be pleased that we are trained to carry out all the aftersale services, repairs and maintenance needed for your Mercedes by our trained technicians using advanced diagnostic tools and equipment so that the performance and the luxurious features of your Mercedes can be retained until the last miles.
                      </p>
                      <h5 className="mb-15">
                        <b>From Coupes to SUV’s we are the masters in handling all Mercedes models</b>
                      </h5>
                      <p className="mb-15">
					  Our experienced Mercedes specialists in Saudi Arabia know every single detail about the intricate components in German-made cars and can handle various Mercedes models like A-class, C-Class, E-Class, S-Class, GLS, SL, GLE Coupe, GLC Coupe and many others.
                      </p>
					  <p className="mb-15">
					  Our friendly and knowledgeable Mercedes service team will provide various auto repair services including 360-degree vehicle inspection, routine maintenance and performance upgrades. So you can be confident on the roads with your car’s roaring performance.
                      </p>
                    </div>
                    <div className="row">
                      <h5 className="mb-15">
                        <b>What makes Royal Swiss Auto, one of the leading Mercedes workshops in Saudi Arabia?</b>
                      </h5>
                      <div className="col-xl-12">
                        <ul className="list-check-squer">
                          <li>
						  The ultra-modern, state-of-the-art Mercedes Benz workshop in Saudi Arabia
                          </li>
                          <li>
						  Engine room dedicated to engine repair, engine refurbishment, or engine replacement
                          </li>
                          <li>
						  Highly qualified and certified technicians specialized in the brands we serve.
                          </li>
                          <li>Spare parts department and own storage.</li>
                          <li>
						  A professional and multicultural customer support team, we speak your language!
                          </li>
                          <li>
						  Up to 15,000 different spare parts available in stock
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="head-text mb-30">
                    <h4 className="title mb-10">
					GET YOUR MERCEDES SERVICE IN SAUDI ARABIA WITH GREATER CONVENIENCE
                    </h4>
                    <p className="mb-15">
					With years of successful operation in the auto repair industry and the conveniently located well-equipped Mercedes service center in KSA, we will repair your vehicle with utmost care to help you get back on the roads promptly.
                    </p>
                    <p className="mb-15">
					From simple AC regassing to complex engine or transmission diagnosis & repairs, we are experts in providing the perfect solutions, which makes us the industry-leading Mercedes specialists in Saudi Arabia.
                    </p>
                    <p className="mb-15">
					All car servicing and repairs needed for both new and classic Mercedes models are carried out according to the manufacturer's specifications without any hidden charges other than the quoted amount.
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
              <h2 class="title mb-0">MERCEDES SERVICE IN SAUDI ARABIA WITH US TODAY!</h2>
              <p>
			  To make your Mercedes service or repair booking or to enquire about further information, Dial <a href="tel:966 53 969 9984">+966 53 969 9984</a>.  Our key specialities of Mercedes service & repairs include the following,
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
                    <h5 className="counter-text">Mercedes Engine Repair</h5>
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
                    <h5 className="counter-text">Mercedes Gearbox Repair</h5>
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
                    <h5 className="counter-text">Mercedes Suspension Repair</h5>
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
					Mercedes Transmission Repair
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
                    <h5 className="counter-text">Mercedes Touchless Wheel Alignment</h5>
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
                    <h5 className="counter-text">Mercedes Engine Refurbishment</h5>
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
                    <h5 className="counter-text">Mercedes Software Programming</h5>
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
					Mercedes AC Repair
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
                    <h5 className="counter-text">Mercedes Service & Warranty Packages</h5>
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
                    <h5 className="counter-text">Mercedes Car Detailing</h5>
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
					Mercedes Engine Cooling System Repair
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
                    <h5 className="counter-text">Mercedes Brake Repair</h5>
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
					Mercedes Camera/Radar Calibration
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
					Mercedes Pre-Purchase Inspection
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
                    <h5 className="counter-text">Mercedes Service Packages</h5>
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
					Mercedes Extended Warranty Packages
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
					  What are the services you provide at the Mercedes workshop in Saudi Arabia?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="mb-0">
					  We provide all services, repair and maintenance tasks needed for your Mercedes, from the hands of experienced technicians with greater quality at our Mercedes workshop in Saudi Arabia.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      <i className="fa fa-question-circle"></i>
                      Why trust only experienced technicians to handle your Mercedes?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="mb-0">
					  Mercedes has advanced electrical and mechanical components in it, so it is always good to trust only experienced technicians to handle it and provide precise diagnosis and repairs.
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
                      Why is it advised to use synthetic engine oil for your Mercedes?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="mb-0">
					  Though synthetic engine oil is a bit expensive, it lasts longer and has better lubricating properties.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      <i className="fa fa-question-circle"></i>
					  Why is it important to get the tyre rotation done for my Mercedes?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="mb-0">
					  Getting the tyre rotation in the Mercedes makes sure the tyres last longer and they wear out evenly.
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

export default Mercedes;
