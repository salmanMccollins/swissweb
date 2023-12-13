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
import bnrImg from "../../../images/carbrands/Cadillac.webp";
import serviceSectionPic3 from "../../../images/brandsthumb/CADILLAC body Image.webp";

class Cadillac extends Component {
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
                    ROYAL SWISS AUTO - A LEADING INDEPENDENT CADILLAC SERVICE
                    CENTER IN SAUDI ARABIA
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
                      Cadillac
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
                        OUR CADILLAC SERVICE BENEFITS
                      </h4>
                      <p className="mb-20">
                        Our team understands the unique needs of your Cadillac,
                        which is why we deliver perfect care everytime.
                      </p>
                      <ul className="list-check-squer mb-30">
                        <li>
                          Dealership alternative Cadillac service in Saudi
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
					  EXPERIENCE THE TOP-NOTCH SERVICE AT OUR CADILLAC SERVICE CENTER IN SAUDI ARABIA
                      </h4>
                      <h5 className="mb-15">
                        <b>
                          “High-end cars like Cadillac need a maintenance partner like us”
                        </b>
                      </h5>
                      <p className="mb-15">
					  Luxury vehicles like Cadillac deserve nothing but the best. If you are looking for the best Cadillac service center in Saudi Arabia, then finding the most reliable and trusted workshop with all the modern amenities is highly essential.
                      </p>
                      <p className="mb-15">
					  Our premium workshop in Saudi Arabia will provide better Cadillac services & repairs to our customers in a vast area that includes Riyadh, Dammam, and Jeddah.
                      </p>
                      <p className="mb-15">
					  At our Cadillac workshop in Saudi Arabia, we provide great services for all your Cadillac vehicles including mechanical services, electrical services, paint & bodywork and all the other services you need from our experienced team.
                      </p>
                      <h5 className="mb-15">
                        <b>Your trusted destination in Saudi Arabia for Cadillac service and repairs</b>
                      </h5>
                      <p className="mb-15">
					  Whatever model you hold it may be a Cadillac XT4, Cadillac XT5, Cadillac XT6 , V Series models like Cadillac ATS-V , Cadillac CTS-V or any others, we promise to keep its performance in good state with our comprehensive care.
                      </p>
                      <p className="mb-15">
					  Our team of highly trained technicians specializes in providing exceptional service and repairs exclusively for Cadillac vehicles, so your vehicle will always be in roadworthy condition.
                      </p>
                    </div>
                    <div className="row">
                      <h5 className="mb-15">
                        <b>
                          What makes us the ideal choice for Cadillac repairs in
                          Saudi Arabia?
                        </b>
                      </h5>
                      <div className="col-xl-12">
                        <ul className="list-check-squer">
                          <li>
                            The ultra-modern, state-of-the-art Cadillac workshop
                            in Saudi Arabia
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
					GET COMPREHENSIVE CADILLAC SERVICE AND REPAIR IN SAUDI ARABIA WITH GREATER CONVENIENCE
                    </h4>
                    <p className="mb-15">
					Our state-of-the-art diagnostic equipment enables us to accurately identify any problems with your Cadillac vehicles, saving you time and money by targeting the root cause of the issue and providing the ideal solution.
                    </p>
                    <p className="mb-15">
					Our technicians are highly trained with the recent advancements in Cadillac vehicles and we are well equipped with the latest diagnostic tools and equipment to provide better care for your vehicle.
                    </p>
                    <p className="mb-15">
					Further, we use only genuine spare parts for Cadillac repair and replacements, so you can be at peace of mind that your car is in safer hands.
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
              <h6 class="title-ext text-primary">BOOK YOUR</h6>
              <h2 class="title mb-0">CADILLAC SERVICE IN SAUDI ARABIA WITH US</h2>
              <p>
			  We value your time and convenience. So just dial <a href="tel:966 53 969 9984">+966 53 969 9984</a> to schedule your Cadillac service, repair or maintenance with us. We provide all types of services needed to keep your Cadillac in good condition including,
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
        <h5 className="counter-text">Cadillac Engine Repair</h5>
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
        <h5 className="counter-text">Cadillac Suspension Repair</h5>
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
        <h5 className="counter-text">Cadillac Transmission Repair</h5>
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
Cadillac Touchless Wheel Alignment
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
        <h5 className="counter-text">Cadillac Engine Refurbishment</h5>
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
        <h5 className="counter-text">Cadillac Software Programming</h5>
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
        <h5 className="counter-text">Cadillac AC Repair</h5>
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
        <h5 className="counter-text">Cadillac Car Detailing</h5>
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
        <h5 className="counter-text">Cadillac Gearbox Repair</h5>
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
Cadillac Engine Cooling System Repair
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
        <h5 className="counter-text">Cadillac Brake Repair</h5>
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
Cadillac Camera/Radar Calibration
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
Cadillac Pre-Purchase Inspection
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
                      How to find the best Cadillac service center in Saudi Arabia?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="mb-0">
					  Check for their reputation by analyzing the reviews and testimonials of previous customers. Choose the Cadillac service center that provides high-standard service in a pocket-friendly way. We at Royal Swiss Auto Services, always exceed your expectations when it comes to Cadillac service in Saudi Arabia.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      <i className="fa fa-question-circle"></i>
					  Why is brake inspection essential for the Cadillac?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="mb-0">
					  Brake components, like brake pads and rotors, naturally wear down over time due to friction and heat. So regular inspection is essential for your safety.
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
                      How often should I get my Cadillac serviced?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="mb-0">
					  It is good to get your Cadillac serviced every 7,500 km or once in a year by the experts to ensure the high performance of your car.
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

export default Cadillac;
