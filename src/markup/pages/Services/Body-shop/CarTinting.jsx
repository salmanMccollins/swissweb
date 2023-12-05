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
import bnrImg from "../../../../images/services/WindowTinting.webp";
import serviceSectionPic3 from "../../../../images/service-section/pic3.jpg";

class CarTinting extends Component {
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
                  <span>CAR TINTING SERVICES</span>
                </h1>
                <nav aria-label="breadcrumb" className="breadcrumb-row">
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/">
                        <i className="las la-home"></i>Home
                      </Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
					CAR TINTING SERVICES
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
					  EXPERIENCE THE BEST CAR TINTING SERVICES IN SAUDI ARABIA WITH OUR EXPERTS
                      </h4>
                      <p className="mb-15">
					  Getting the car window tinting done comes with certain benefits like UV protection, heat rejection, glare reduction and enhances the safety and security inside the car.
                      </p>
                      <p className="mb-15">
					  However, it is important to get the window tinting done by experienced technicians using high-quality window tinting films to achieve a sleek and uniform look.
                      </p>

                      <p className="mb-15">
					  If you are looking out for the ideal choice to get the car window tinting done in Saudi Arabia? Then trust Royal Swiss Auto Services without any second thoughts. With a team of our experienced professionals and a commitment to excellence, we are your go-to destination for precision car tinting in Saudi Arabia.
                      </p>
                      <h4 className="title mb-15 text-uppercase">
					  Few ideal benefits of getting car tinting services for your car:
                      </h4>
                      <ul className="list-check-squer mb-15">
                        <li>
						Protect yourself and your passengers from the sun's damaging effects & UV rays.
                        </li>
                        <li>
						Stay cool inside your car by reducing the internal temperature of your car and having a comfortable drive.
                        </li>
                        <li>
						Strengthen your vehicle security with our tinted protection
                        </li>
                        <li>
						Improves visibility and reduces your eye strain
                        </li>
                      </ul>
                      <h4 className="title mb-10 text-uppercase">
					  INSTALLATION OF WINDOW TINTING FOR YOUR CAR IS NO MORE A HASSLE
                      </h4>
                      <p className="mb-15">
					  At Royal Swiss Auto Services, we specialize in providing high-quality car tinting services that not only enhance the aesthetics of your vehicle but also offer added comfort, privacy, and protection.
                      </p>
					  <p className="mb-15">The usage of high-quality products and affordable pricing are the two important reasons that make us reach 100% customer satisfaction with tinting services.</p>
                     
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
			  ROYAL SWISS AUTO SERVICES TO GET CAR TINTING SERVICES IN SAUDI ARABIA
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
					  How long does the window tinting process take?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="mb-0">
					  Generally, it takes a few hours for the window tinting to be done. Our team will provide you with an estimated time when you schedule an appointment. 
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      <i className="fa fa-question-circle"></i>
					  How to take care of the tinted windows?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="mb-0">
					  Keep tinted windows clean by using a mild soap or specialized window cleaner instead of abrasive cleaning materials. This is highly essential to increase the lifespan of your tinted windows.
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
                      Will window tinting affect my visibility?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="mb-0">
					  The high-quality window tint films that we use are designed to minimize interference with visibility, so your the clarity of your visibility will not be affected.
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

export default CarTinting;
