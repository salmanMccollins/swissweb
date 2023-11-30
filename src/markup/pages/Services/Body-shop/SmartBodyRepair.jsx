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
import bnrImg from "../../../../images/services/SmartBodyRepair.webp";
import serviceSectionPic3 from "../../../../images/service-section/pic3.jpg";

class SmartBodyRepair extends Component {
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
                  <span>SMART BODY REPAIR SERVICES</span>
                </h1>
                <nav aria-label="breadcrumb" className="breadcrumb-row">
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/">
                        <i className="las la-home"></i>Home
                      </Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Smart Body Repair
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
					  EXPERIENCE THE MOST EFFICIENT SMART BODY REPAIR SERVICES IN THE SAUDI ARABIA WITH US
                      </h4>
                      <p className="mb-15">
					  Everyone has the constant desire of keeping our car looking at its best until the last miles. Yet the wear and tear due to the daily usage may cause damages to your car exterior and affect its look and performance.
                      </p>
                      <p className="mb-15">
					  In such cases you no need to spend hours on workshop to get the issues sorted out. Adhering to the smart body repair techniques using advanced tools will keep your car shining and ensure the flawless look in no time.
                      </p>
					  <p className="mb-15">At Royal Swiss Auto Services, our professional team in Saudi Arabia will provide the various smart repair services like paintless dent removal and many more with greater precision than you expect.</p>
                    </div>
                  </div>
                  <div className="head-text mb-30">
                    <h4 className="title mb-15">
					Why choose Royal Swiss Auto Services for the smart body repair services in Saudi Arabia?
                    </h4>
                    <p className="mb-15">
					At our well-equipped workshop in Saudi Arabia, we are trained to provide various services like panel beating, car wrapping, car respraying, rust protection, dent repair, scratches and scuffs removal and many more in no time using the smart repair techniques from our experts
                    </p>
                    <p className="mb-15">
                      
Whenever you visit us for the smart body repair services in Saudi Arabia, you can be confident that your car will receive the better protection that it deserves. Because to achieve greater customer satisfaction, throughout the smart repair process we use only the advanced tools, specialized paints and the modern materials that will give your car the flawless look that you expect.

                    </p>
                    <h4 className="title mb-10">
					SMART BODY REPAIRS - 3 REASONS THAT MAKES IT AS A IDEAL CHOICE FOR CARS
                    </h4>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <ul className="list-check-squer mb-0">
                        <li>
						Greater convenience & quality results
                        </li>
                        <li>Time & cost efficiency</li>
                        <li>Versatility to handle numerous car body issues</li>
                        <li>Environmental friendly than the traditional methods</li>
                        
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
			  CHOOSING ROYAL SWISS AUTO SERVICES FOR SMART REPAIR SERVICES IN KSA
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
					Expert technicians
                    </h5>
                    <p>
					Our technicians are trained to provide the high quality body & paint repair services for all make and model of vehicles and they have intense knowledge about providing smart body repair services in Saudi Arabia using advanced tools and materials.
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
					Competitive pricing
                    </h5>
                    <p>
					The car smart body repair work, dent removal, and paint jobs can be done at competitive prices in Saudi Arabia with Royal Swiss Auto Services.
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
					Faster turnaround time
                    </h5>
                    <p>
					Because of our technicians' expertise and advanced equipment, all car body and paint work that you commute to us can be completed faster than you expected.
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
					  What is SMART body repair?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="mb-0">
					  SMART (Small to Medium Area Repair Technology) body repair is a technique that focuses on repairing specific damaged areas of a vehicle without disturbing the entire panel or surrounding areas.

                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      <i className="fa fa-question-circle"></i>
                      What can be repaired with smart body repair technology?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="mb-0">
                       
SMART repair is suitable for repairing minor cosmetic damages such as scratches, dents, scuffs, and small paint imperfections.

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
					  Is SMART repair more cost-effective?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="mb-0">
					  Yes, SMART repair is often more cost-effective because it targets specific damaged areas rather than entire body reducing the time and cost.
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

export default SmartBodyRepair;
