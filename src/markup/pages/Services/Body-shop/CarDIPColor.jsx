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
import bnrImg from "../../../../images/services/CarDIPColor.webp";
import serviceSectionPic3 from "../../../../images/service-section/pic3.jpg";

class CarDIPColor extends Component {
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
                  <span>CAR DIP COLOR SERVICES</span>
                </h1>
                <nav aria-label="breadcrumb" className="breadcrumb-row">
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/">
                        <i className="las la-home"></i>Home
                      </Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
					CAR DIP COLOR SERVICES
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
                      <h4 className="title mb-15">
					  GET THE MOST AFFORDABLE CAR DIP COLOR SERVICES IN SAUDI ARABIA FROM THE EXPERTS
                      </h4>
                      <p className="mb-15">
                        
					  Car dip colour services is one of the modern services provided by various body & paint shops to modify your vehicle's look instead of relying on traditional paint modification techniques like vinyl wrapping or any other.
                      </p>
                      <p className="mb-15">
                       
					  It is important to remember that dip color services not only enhance the appearance of your car and give it a new look but also protect your car’s original paint from scratches and debris.
                      </p>

                      
					  <h4 className="title mb-15 text-uppercase">
                      What makes dip color services an ideal choice for your car?
                      </h4>
                      <ul className="list-check-squer mb-15">
                        <li>
						If you decide you no longer want to adhere to the particular color, then the existing dip color can be easily removed.
                        </li>
                        <li>
						They are cost-efficient when compared to traditional methods like ceramic coating or others.
                        </li>
                        <li>
                        Since they are temporary and easily peelable, it is an ideal choice for people who would love to experiment with different colors on their cars.
                        </li>
						<li>Car dip color are highly customizable with different colors and are easy to apply.</li>
						<li>it is easy to clean and maintain after getting the car dip color services.</li>
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
              <h6 class="title-ext text-primary">BENEFITS OF CHOOSING </h6>
              <h2 class="title mb-0">
			  ROYAL SWISS AUTO SERVICES FOR CAR DIP COLOR SERVICES IN SAUDI ARABIA
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
					Experienced technicians
                    </h5>
                    <p>The technicians at our workshop in Saudi Arabia are well-trained to provide various body & paint services and one of our key areas of speciality is car dip color services.</p>
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
Quality Materials
</h5>
                    <p>
					We use only the highest quality materials to ensure the longevity and durability of your windshield. We never compromise on the quality of the products which enables us to attain 100% customer satisfaction.
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
                    <h5 className="counter-text">Competitive pricing</h5>
                    <p>
					We provide car dip color services in Saudi Arabia at the most competitive pricing with greater trust and transparency.
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
                      How long does the car dip color last?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="mb-0">
                      With the usage of high-quality materials car dip color usually lasts for about 3 to 5 years without the need for replacement.</p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      <i className="fa fa-question-circle"></i>
					  Is it possible to cover up existing damage or rust with car dip?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="mb-0">Yes, while preventing future damage to the original paint of your car, it can also act as a temporary mask for the existing scratches and damages on the car’s paint.</p>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
              <div className="col-lg-6">
                <Accordion className="accordion ttr-accordion style1">
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>
                      <i className="fa fa-question-circle"></i>
					  How should we maintain the car after getting it dipped?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="mb-0">
					  After getting the dip color it is good to clean your car with mild detergent and water regularly.
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

export default CarDIPColor;
