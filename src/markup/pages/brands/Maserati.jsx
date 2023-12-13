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
import bnrImg from "../../../images/carbrands/Maserati.webp";
import serviceSectionPic3 from "../../../images/brandsthumb/MASERATI body Image.webp";

class Maserati extends Component {
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
				  ROYAL SWISS AUTO - A PREMIUM MASERATI SERVICE CENTER IN SAUDI ARABIA
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
                    Maserati
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
                      <h4 className="title mb-10">OUR MASERATI  SERVICE BENEFITS</h4>
                      <p className="mb-20">
					  Your satisfaction is our priority, we are looking forward to servicing your Maserati
                      </p>
                      <ul className="list-check-squer mb-30">
                        <li>
						Dealership alternative Maserati service in Saudi Arabia
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
					  TRUST ONLY THE PROFESSIONALS FOR YOUR MASERATI SERVICE IN SAUDI ARABIA
                      </h4>
                      <h5 className="mb-15">
                        <b>
                          “Maserati is a dream car for many, anyone who owns one knows its pride”
                        </b>
                      </h5>
                      <p className="mb-15">
					  There is no doubt about the efficient performance, luxury and elegance of the luxury vehicle. Upholding the flawless performance of the Maserati depends on the ways you are taking care of it by partnering with the reliable Maserati service center in the locality.
                      </p>
                      <p className="mb-15">
					  Regular maintenance is essential to keep your Maserati running at its peak without much expensive repair bills. Our service center offers comprehensive scheduled maintenance plans to ensure your vehicle continues to perform flawlessly.
                      </p>
					  <p className="mb-15">
					  Saudi Arabia is a vast area covering various cities like Riyadh, Dammam and Jeddah , our branch  in Saudi Arabia will provide better Maserati services & repairs to make it easier for our customers.
                      </p>
					  <p className="mb-15">
					  Whether you require routine maintenance, repairs, or personalized enhancements for your Maserati, you can rely on our Maserati garage in KSA to deliver the utmost care and expertise.
                      </p>
                      <h5 className="mb-15">
                        <b>We guarantee exclusive care for your Maserati</b>
                      </h5>
                      <p className="mb-15">
					  To ensure precise and efficient service for various Maserati models like GranTurismo, Quattroporte, Ghibli, Levante, Merak or the Biturbo, our service center is equipped with the most advanced diagnostic tools and equipment.

Further, the Maserati specialists at our workshop in KSA are trained to provide advanced care for your car by handling the intricate electrical and mechanical components in your Maserati in an efficient way.

                      </p>
                    </div>
                    <div className="row">
                      <h5 className="mb-15">
                        <b>What makes us ideal for the Maserati service & repairs in Saudi Arabia?</b>
                      </h5>
                      <div className="col-xl-12">
                        <ul className="list-check-squer">
                          <li>
						  The ultra-modern, state-of-the-art Maserati workshop in Saudi Arabia
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
					OUR EXEMPLARY KNOWLEDGE OF MASERATI CARS, HELPS US DELIVER THE PERFECT CARE
                    </h4>
                    <p className="mb-15">
					Do you feel like your Maserati performance is diminished or compromised, we are here to help you identify and rectify the issues after performing a 360-degree vehicle inspection. 
                    </p>
                    <p className="mb-15">
					Additionally, we will inform you of any potential problems your Maserati may be experiencing and provide you with instructions on how to care for it between services.
                    </p>
                    <p className="mb-15">
					From simple oil changes to complex engine tune-ups, we perform everything with greater care, which can help you to elevate your driving experience.
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
              <h6 class="title-ext text-primary">WE ARE READY</h6>
              <h2 class="title mb-0">TO SERVE YOUR MASERATI</h2>
              <p>
			  Whether you require routine maintenance, have specific concerns about your Maserati repairs, or wish to explore our Maserati after-sales services, our team is ready to assist you. Dial <a href="tel:966 53 969 9984">+966 53 969 9984</a>.

Our Maserati services & repairs that we specialise in are listed below,
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
        <h5 className="counter-text">Maserati Engine Repair</h5>
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
        <h5 className="counter-text">Maserati Suspension Repair</h5>
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
        <h5 className="counter-text">Maserati Transmission Repair</h5>
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
Maserati Touchless Wheel Alignment
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
        <h5 className="counter-text">Maserati Engine Refurbishment</h5>
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
        <h5 className="counter-text">Maserati Software Programming</h5>
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
        <h5 className="counter-text">Maserati AC Repair</h5>
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
        <h5 className="counter-text">Maserati Car Detailing</h5>
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
        <h5 className="counter-text">Maserati Gearbox Repair</h5>
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
Maserati Engine Cooling System Repair
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
        <h5 className="counter-text">Maserati Brake Repair</h5>
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
Maserati Camera/Radar Calibration
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
Maserati Pre-Purchase Inspection
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
                      Can I get my Maserati serviced anywhere?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="mb-0">
					  The car has to be serviced as per the manufacturer guidelines.You don't need to always stick on to the dealerships, one can also consider the authorized independent Mercedes service center near you to get the service & repairs done.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      <i className="fa fa-question-circle"></i>
					  Why does my Maserati face the starting issues?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="mb-0">
                      Delay in starting your Maserati may be mainly due to the battery or alternator issues. When the issues with this component are irreparable, it may need to be replaced
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
                      What does the check engine warning light in my Maserati indicate?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="mb-0">
					  The check engine warning light signals that your Maserati has the problem with the engine management system. So it is always good to visit the nearest Maserati service center at the earliest.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      <i className="fa fa-question-circle"></i>
					  When should I get the brake pads in my Maserati replaced?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="mb-0">
                      Some of the signs that indicate the need for a brake pad replacement in your Maserati are squealing noise while braking, longer braking time, a car pulls to one side while braking, brake pedal vibration when pressed, the brake indicator light comes on and the 
brake pads appear to be thin.
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

export default Maserati;
