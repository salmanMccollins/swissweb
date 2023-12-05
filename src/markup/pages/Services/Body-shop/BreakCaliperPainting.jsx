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
import bnrImg from "../../../../images/services/PaintJob.webp";
import serviceSectionPic3 from "../../../../images/service-section/pic3.jpg";

class BreakCaliperPainting extends Component {
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
                  <span> BRAKE CALIPER PAINTING </span>
                </h1>
                <nav aria-label="breadcrumb" className="breadcrumb-row">
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/">
                        <i className="las la-home"></i>Home
                      </Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      BRAKE CALIPER PAINTING
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
					  REVAMP YOUR CAR WITH OUR CUSTOM BRAKE CALIPER PAINTING SERVICES IN SAUDI ARABIA
                      </h4>
                      <p className="mb-15">
					  If you are the one looking out for the luxury and personalization of your car to stay unique on the roads, then getting professional brake caliper painting services is the ideal choice.
                      </p>
                      <p className="mb-15">
					  But it is important to choose the experts to get the brake calipers painted to achieve greater precision.
                      </p>

                      <p className="mb-15">
					  At Royal Swiss Auto Services, we pride ourselves on our years of experience in brake caliper painting in Saudi Arabia. Our skilled technicians meticulously prepare and paint each caliper, ensuring a flawless finish that will make heads turn on the roads.
                      </p>
					  <h4 className="title mb-15 text-uppercase">
					  
Few benefits of getting the brake caliper painting done for your car

                      </h4>
                      <ul className="list-check-squer mb-15">
                        <li>
						By painting your brake calipers, you'll be able to express your personal style and make your vehicle stand out.
                        </li>
                        <li>
						The paint used in brake caliper painting serves as a protective layer, thereby eliminating the risk of corrosion.
                        </li>
                        <li>
						A visually appealing vehicle tends to have a higher resale value.
                        </li>
						<li>A cost-effective customization technique with easy maintenance.</li>
                      </ul>
                      <h4 className="title mb-10 text-uppercase">
					  How long does the brake caliper painting last?
                      </h4>
                      <p className="mb-15">
					  The durability of brake caliper painting can vary based on several factors, including the quality of materials used, the application process, driving conditions, and maintenance practices. But generally, a well-painted brake caliper lasts for about 3 to 4 years.
                      </p>
					  <h4 className="title mb-10 text-uppercase">
					  ELEVATE THE STYLE OF YOUR CAR WITH OUR BRAKE CALIPER PAINTING SERVICES
                      </h4>
                      <p className="mb-15">At Royal Swiss Auto Services, we believe in using only the genuine paints and replacement spare parts for our customers. We use only high-quality paints that are resistant to heat, dirt, and road debris when painting brake calipers. This ensures that your brake calipers not only look stunning but also maintain their beauty for years to come.</p>
					  <p className="mb-15">During your brake calipers painting appointment, our technicians will carefully clean the rust deposits before the caliper painting to provide the perfect finish.</p>
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
			   ROYAL SWISS AUTO SERVICES TO GET THE BRAKE CALIPER PAINTING DONE IN SAUDI ARABIA
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
					  Why should I consider painting my brake calipers?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="mb-0">
					  Brake caliper painting enhances the aesthetic appeal of your vehicle and acts as a protective layer, which is why most people show interest in getting it done.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      <i className="fa fa-question-circle"></i>
					  What colors are available for brake caliper painting?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="mb-0">
					  Many colors are available, ranging from classic shades to vibrant and custom options. When you visit us at our workshop in Saudi Arabia, you can talk with our service advisor and choose the best color shades that fit your car.
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
					  How should I maintain the brake calipers after getting it painted?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="mb-0">
					  Regularly clean the calipers with a mild automotive detergent and a soft brush or cloth. It is mostly advised to avoid the usage of harsh chemicals to clean your painted brake calipers.
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

export default BreakCaliperPainting;
