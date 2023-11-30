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
import bnrImg from "../../../../images/services/PaintProtectionFilm.webp";
import serviceSectionPic3 from "../../../../images/service-section/pic3.jpg";

class PaintProtcetionFilm extends Component {
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
                  <span>PPF INSTALLATION SERVICES</span>
                </h1>
                <nav aria-label="breadcrumb" className="breadcrumb-row">
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/">
                        <i className="las la-home"></i>Home
                      </Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      PPF
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
                        AFFORDABLE & COMPLETE PAINT PROTECTION FILMS
                        INSTALLATION SERVICES IN SAUDI ARABIA
                      </h4>
                      <p className="mb-15">
                        Paint protection film is a transparent film that can be
                        installed on the exterior of the vehicle to protect the
                        exterior from scratches and other damages. Getting the
                        PPF installed also increases your vehicle's shine and
                        restores its look.
                      </p>
                      <p className="mb-15">
                        But if you are planning to get the PPF installation for
                        your car, it is important to get it done by specialist
                        technicians to ensure the complete finish and
                        durability.
                      </p>
                      <p className="mb-15">
                        At Royal Swiss Auto Services, we do the best paint
                        protection film installation for all make and models of
                        cars with the help of our team of experienced
                        technicians and advanced tools.
                      </p>
                      <p className="mb-15">
                        The importance of getting the PPF installation for your
                        car in Saudi Arabia includes,
                      </p>
                      <ul className="list-check-squer mb-15">
                        <li>
                          Protecting the car's exterior from wear and tear
                          damages.
                        </li>
                        <li>Enhances the appearance of your car.</li>
                        <li>
                          Increases the resale value by keeping the exterior
                          glossy and shiny.
                        </li>
                      </ul>
                      <h4 className="title mb-10 text-uppercase">
                        How long does the PPF installation last on the car when
                        installed?
                      </h4>
                      <p className="mb-15">
                        Paint Protection films are generally highly durable and
                        last about 5 to 10 years. Make sure to use good quality
                        paint protection film by analyzing the driving
                        conditions, habits and other parameters with your
                        service advisors.
                      </p>
                      <p className="mb-5">
                        At Royal Swiss Auto Services, we choose only the premium
                        quality paint protection film that lasts longerwhich
                        saves your pocket from frequent expenses.
                      </p>
                    </div>
                  </div>
                  <div className="head-text mb-30">
                    <h4 className="title mb-15 text-uppercase">
                      What are the characteristics to look for while selecting
                      the PPF for your car?
                    </h4>
                    <p className="mb-15">
                      It is important to check a few important parameters like,
                    </p>
                  </div>
                  <div className="row mb-15">
                    <div className="col-lg-12">
                      <ul className="list-check-squer mb-0">
                        <li>Thickness & the durability of the film</li>
                        <li>Stain resistance and removability</li>
                        <li>Cost</li>
                        <li>UV protection capability</li>
                      </ul>
                    </div>
                  </div>
                  <h4 className="title mb-15">
                    WE ASSURE THE BEST PROTECTION FOR YOUR VEHICLE WITH OUR PPF
                    INSTALLATION SERVICES
                  </h4>
                  <p className="mb-15">
                    Choosing us for getting the PPF installation done for your
                    car is the ideal choice, our experienced professionals will
                    remove the existing paint defects on your car and install
                    the new paint protection film with complete finishing.
                  </p>
                  <p className="mb-15">
                    When you visit us to get the PPF done for your car in Saudi
                    Arabia, we make your investment worthy by providing the top
                    quality paint protection film installation that would
                    mitigate the occurrence of scratches and dents on your car
                    exterior paint surfaces and keep you away from the expensive
                    repairs.
                  </p>
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
                CHOOSING ROYAL SWISS AUTO SERVICES TO GET THE PPF INSTALLATION
                FOR YOUR CAR IN KSA
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
                      Professional customer support{" "}
                    </h5>
                    <p>
                      At our car service center in Saudi Arabia, we do have a
                      professional and multi-cultural team to answer all your
                      queries throughout the PPF installation process for your
                      car.
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
                    <h5 className="counter-text">High-quality products</h5>
                    <p>
                      To ensure the greater satisfaction of our customers when
                      they reach us for PPF installation, we use only
                      high-quality film that is durable and has better
                      self-healing properties. We also use only the latest
                      diagnostic tools and equipment for installation which
                      enables us to achieve greater precision.
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
                    <h5 className="counter-text">Faster turnaround time</h5>
                    <p>
                      Because of our technicians' expertise and advanced
                      equipment, all car body and paint work that you commute to
                      us can be completed faster than you expected.
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
                      Why is PPF installation important for my car?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="mb-0">
                        PPF acts as a barrier between your car's paint and the
                        external elements. It helps to prevent scratches, stone
                        chips, and other physical damage that can occur during
                        regular driving. So it is always good to invest in
                        getting the PPF installation done for your car.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      <i className="fa fa-question-circle"></i>
                      Does PPF installation need frequent replacement?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="mb-0">
                        Paint protection film when chosen carefully and
                        installed by experienced technicians it lasts longer,
                        without the need for frequent replacement. So it is one
                        of the wisest ways to protect your car exterior.
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
                      Where can I get the car PPF installation done in Saudi
                      Arabia?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="mb-0">
                        If you are looking out for the best paint & body
                        workshop to get the PPF installation done for your car
                        in Saudi Arabia, then Royal Swiss Auto Services is the
                        ideal choice. Get your car protected by the high-quality
                        paint protection film at the most competitive pricing.
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

export default PaintProtcetionFilm;
