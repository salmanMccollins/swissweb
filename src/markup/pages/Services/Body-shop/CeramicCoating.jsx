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
import bnrImg from "../../../../images/services/CeramicCoating.webp";
import serviceSectionPic3 from "../../../../images/service-section/pic3.jpg";

class CeramicCoating extends Component {
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
                  <span>CERAMIC COATING SERVICES</span>
                </h1>
                <nav aria-label="breadcrumb" className="breadcrumb-row">
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/">
                        <i className="las la-home"></i>Home
                      </Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Ceramic Coating
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
					  GET THE BEST CERAMIC COATING SERVICES IN SAUDI ARABIA FROM THE EXPERTS
                      </h4>
                      <p className="mb-15">
                      
One of the ideal ways to protect your car paint surface from getting into scratches, stone chips, bird droppings or any other external damage is through ceramic coating. When you take up the ceramic coating for your car, the thick layer of nano-ceramic particles acts as a protective layer and protects your car’s exterior paint surface from damage and helps to retain its shine.

                      </p>
                      <p className="mb-15">
                      At Royal Swiss Auto Services, we provide excellent ceramic coating services for your car in Saudi Arabia to offer excellent protection for your car paint surface.
                      </p>
                      
                      <p className="mb-15">
					  Certain benefits of getting the ceramic coating done for your car include,
                      </p>
                      <ul className="list-check-squer mb-15">
                        <li>
						Protect your car from harsh weather, UV rays, bird droppings, and contaminants for years to come.
                        </li>
                        <li>Get a showroom-quality shine and lasting color on your car paint surface.</li>
                        <li>
						With a hydrophobic surface, dirt is easily repelled, making cleaning a breeze.
                        </li>
                      </ul>
                      <h4 className="title mb-10 text-uppercase">
					  How long does the ceramic coating on cars last?
                      </h4>
                      <p className="mb-15">
					  Several factors affect the durability of ceramic coating on a car, including the quality of the coating product, the application process, maintenance, and environmental factors. Ceramic coatings can last anywhere from 1 to 5 years or even longer when done with experienced technicians at reputable companies. 
                      </p>
                      <p className="mb-5">
					  At our car service center in Saudi Arabia, our technicians are trained and experienced to provide multiple layers of ceramic coatings for your car, so that you can be confident that your car exterior is well protected.
                      </p>
                    </div>
                  </div>
                  <div className="head-text mb-30">
                    <h4 className="title mb-15 text-uppercase">
					What are some of the important features of ceramic coating?
                    </h4>
                    <p className="mb-15">
					At our car workshop in Saudi Arabia, we only use high-quality ceramic coating materials that have certain features like,
                    </p>
                  </div>
                  <div className="row mb-15">
                    <div className="col-lg-12">
                      <ul className="list-check-squer mb-0">
                        <li>Rust prevention on the exterior paint surface</li>
                        <li>Scratch resistant</li>
                        <li>Affordable & long-lasting</li>
                      </ul>
                    </div>
                  </div>
                  <h4 className="title mb-15">
                  AS PER THE INDUSTRY STANDARDS, OUR HIGHLY TRAINED TEAM PROVIDES THE BEST CERAMIC COATING IN SAUDI ARABIA
                  </h4>
                  <p className="mb-15">
				  We strive to provide top-tier ceramic coating services in KSA, ensuring that your investment is protected and your vehicle looks its best. Over the years of experience in our auto repair industry, we excel in providing various body & paint shop services. Among which our key speciality is the ceramic coating for our cars.
                  </p>
                  <p className="mb-15">
				  Our technicians carefully apply the ceramic coatings for your car as per the manufacturer's guidelines to meet your exact requirements and assure long-lasting protection to your hard-earned investments.

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
			  CHOOSING ROYAL SWISS AUTO SERVICES TO GET THE CERAMIC COATING FOR YOUR CAR IN SAUDI ARABIA
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
                      Does ceramic coating prevent scratches?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="mb-0">
                      Yes, ceramic coatings provide a certain level of scratch resistance against light scratches and swirl marks. 
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      <i className="fa fa-question-circle"></i>
                      Can I wash my car after ceramic coating?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="mb-0">
					  To remove dirt and contaminants, regular washing is still necessary. Ceramic coatings, however, prevent dirt from adhering strongly to paint, making cleaning easier.
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
					  Where can I get the ceramic coating done for my car in Saudi Arabia?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="mb-0">
					  There are numerous car service centers in Saudi Arabia, offering ceramic coating for cars. At Royal Swiss Auto Services, we do provide the dealership's range of services at the most competitive pricing.
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

export default CeramicCoating;
