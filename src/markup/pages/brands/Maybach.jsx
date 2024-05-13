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

class Maybach extends Component {
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
                  <span>
                  ROYAL SWISS AUTO - A PRESTIGIOUS MAYBACH SERVICE CENTER IN SAUDI ARABIA
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
                    Maybach
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
                      <h4 className="title mb-10">OUR MAYBACH SERVICE BENEFITS</h4>
                      <p className="mb-20">
                      We provide the epitome of care and expertise that your Maybach deserves
                      </p>
                      <ul className="list-check-squer mb-30">
                        <li>
                        Dealership alternative Maybach service in Saudi Arabia
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
                      WE ARE THE QUALIFIED MAYBACH SPECIALISTS IN SAUDI ARABIA
                      </h4>
                      <h5 className="mb-15">
                        <b>
                          “Maybach: Where luxury meets performance in perfect harmony.”
                        </b>
                      </h5>
                      <p className="mb-15">
                      Maybach is known for its high performance, retaining such extraordinary performance until the last miles, depending on the way we handle it and take up regular maintenance.
                      </p>
                      <p className="mb-15">
                      Our branch in Saudi Arabia will provide better Maybach services & repairs to our customers in a vast area that includes Riyadh, Dammam, and Jeddah.
                      </p>
                      <p className="mb-15">
                      At our Maybach service center in Saudi Arabia, our technicians deliver 100% when it comes to Maybach servicing and repairs which is only through the ample amount of knowledge they have over the various Maybach models and the latest diagnostic tools and equipment at our workshop.
                      </p>
                      <p className="mb-15">
                      With the latest diagnostic tools and equipment, diagnosing the issues with the Maybach becomes quite easier and the work is completed faster than the customers expect making us the reliable choice for the people to get the Maybach service in Saudi Arabia done.
                      </p>
                      <h5 className="mb-15">
                        <b>WE LOOK FORWARD TO SERVICING ALL MAYBACH MODELS</b>
                      </h5>
                      <p className="mb-15">
                      We specialize in servicing and maintaining various Maybach vehicles like the S650, GLS600, S550, G 650 or S 600 while ensuring that your prized possession is in the hands of experts who understand its unique requirements.
                      </p>
                      <p className="mb-15">
                      Our team of Mercedes technicians in the Kingdom of Saudi Arabia have undergone rigorous training, including specialized Maybach vehicles, to ensure they possess the skills and knowledge needed to work on these exceptional vehicles.
                      </p>
                    </div>
                    <div className="row">
                      <h5 className="mb-15">
                        <b>What makes Royal Swiss Auto Services unique for Maybach service in KSA?</b>
                      </h5>
                      <div className="col-xl-12">
                        <ul className="list-check-squer">
                          <li>
                          The ultra-modern, state-of-the-art Maybach workshop in Saudi Arabia
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
                    WE ARE READY TO PROVIDE COMPREHENSIVE SERVICES FOR MAYBACH OWNERS IN SAUDI ARABIA
                    </h4>
                    <p className="mb-15">
                    At our Maybach service center in Saudi Arabia, we believe that every aspect of servicing your Maybach should reflect the luxury and opulence of the vehicle itself. From our professional customer service to the workshop with modern amenities, we are dedicated to providing you with an unparalleled Maybach servicing and repair experience.
                    </p>
                    <p className="mb-15">
                    Elevate your Maybach to the next level with our various Maybach servicing options, allowing you to get the dealership level of services at the most competitive rates.
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
              <h6 class="title-ext text-primary">Contact Us For </h6>
              <h2 class="title mb-0">PREMIUM QUALITY MAYBACH SERVICE AND REPAIRS</h2>
              <p>
              Your Maybach deserves nothing less, and we look forward to serving your car with greater care. Dial <a href="tel:966557835647">+966 55 783 5647
</a> to schedule your appointments.

Our range of Maybach servicing & repairs includes,

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
        <h5 className="counter-text">Maybach Engine Repair</h5>
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
        <h5 className="counter-text">Maybach Suspension Repair</h5>
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
        <h5 className="counter-text">Maybach Transmission Repair</h5>
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
Maybach Touchless Wheel Alignment
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
        <h5 className="counter-text">Maybach Engine Refurbishment</h5>
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
        <h5 className="counter-text">Maybach Software Programming</h5>
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
        <h5 className="counter-text">Maybach AC Repair</h5>
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
        <h5 className="counter-text">Maybach Car Detailing</h5>
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
        <h5 className="counter-text">Maybach Gearbox Repair</h5>
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
Maybach Engine Cooling System Repair
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
        <h5 className="counter-text">Maybach Brake Repair</h5>
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
Maybach Camera/Radar Calibration
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
Maybach Pre-Purchase Inspection
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
                      What to do when there is a coolant leakage in my Maybach?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="mb-0">
                      Leaking coolant must be addressed immediately once diagnosed because it may result in engine damage and overheating.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      <i className="fa fa-question-circle"></i>
                      What should I do when my Maybach engine overheats?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="mb-0">
                        
When you are experiencing the engine overheating it is not advised to drive continuously. It is always good to call car recovery service and visit the Volkswagen workshop nearby in Saudi Arabia.

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
                      How much does the Maybach service cost in Saudi Arabia?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="mb-0">
                      Your Maybach service cost may vary depending on the model of the vehicle and service center that you choose in KSA. So it is good to research properly and make an informed decision.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      <i className="fa fa-question-circle"></i>
                      What is included in the Maybach routine maintenance?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="mb-0">
                      Mercedes routine maintenance includes everything like wheel alignment, tire rotation, air filter replacement, battery inspection, brake repairs and many more.
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

export default Maybach;
