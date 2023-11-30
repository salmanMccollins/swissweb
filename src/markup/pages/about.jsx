import React, { Component } from "react";
import { Link } from "react-router-dom";

// Layout
import Header from "../layout/header";
import Footer from "../layout/footer";

// Elements
import AboutUsTwoSection from "../elements/about-us-2";
import ServicesSection from "../elements/services-1";
import ScheduleServiceSection from "../elements/schedule-service";
import TestimonialSection from "../elements/testimonial";
import LatestBlogSection from "../elements/latest-blog-slider";

// Images
import bnrImg from "../../images/banner/bnr1.jpg";

class AboutUs extends Component {
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
                  <span>About Us 1</span>
                </h1>
                <nav aria-label="breadcrumb" className="breadcrumb-row">
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/">
                        <i className="las la-home"></i>Home
                      </Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      About Us 1
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
		  <section className="section-area section-sp2 ov-hidden TestWrap position-relative MaskWrap11 bg-gray">
            <div className="container">
              <div className="heading-bx text-center full">
                <h6 className="title-ext text-primary">ABOUT US</h6>
                <h2 className="title mb-15">
                  EXPLORE MORE ABOUT ROYAL SWISS AUTO SERVICES
                </h2>
                <p className="mb-15">
                  Royal Swiss Auto Services was established in the UAE to
                  provide the dealership range of auto repair services at the
                  most affordable prices to the customers.
                </p>
                <p className="mb-15">
                  With the 18 years of our combined dealership experience, we
                  have grown to greater extent and earned our own customers from
                  various parts of UAE which motivated us to create the new
                  branches across MENA regions.
                </p>
                <p className="mb-15">
                  The high standard of servicing, affordable pricing, the trust
                  and transparency that we maintain throughout the service or
                  repair process makes us the best choice for luxury car
                  maintenance across Saudi Arabia.
                </p>
                <p className="mb-0">
                  Audi, Aston Martin, BMW, Bentley, Bugatti, Ferrari, Jaguar,
                  Land Rover, Mercedes, Mini Cooper, Maybach, Pagani, Range
                  Rover, Rolls Royce, Ford, Cadillac, Infiniti & Volkswagen are
                  just some of the brands we service.
                </p>
              </div>
            </div>
          </section>
		  <section className="section-area BlogWrap1 section-sp2">
            <div className="container">
              <div className="heading-bx text-center full">
                <h6 className="title-ext text-primary">Swiss Auto</h6>
                <h2 className="title mb-15">OUR MISSION</h2>
                <p className="mb-0">
                  Being a well equipped car service center in Saudi Arabia our
                  mission is to provide the dealership range of automotive
                  services to all our customers at the affordable pricing with
                  greater trust and transparency while also focussing on both
                  the personal and professional growth of our employees.
                </p>
              </div>
            </div>
          </section>
          <AboutUsTwoSection />

          
          <section className="section-area BlogWrap1 section-sp2">
            <div className="container">
              <div className="heading-bx text-center full">
                <h6 className="title-ext text-primary">Swiss Auto</h6>
                <h2 className="title mb-15">OUR VISION</h2>
                <p className="mb-15">
                  To become one of the premier car service center in the Kingdom
                  of Saudi Arabia with a huge number of satisfied customers.
                </p>
                <p className="mb-15">
                  At our Luxury car service center in Saudi Arabia, we are
                  well-equipped to provide you with the wide range of auto
                  repair services so you will stay in complete peace of mind.
                </p>
                <ul class="list-check-squer text-left">
                  <li>Engine room dedicated to engine repair, engine refurbishment, or engine replacement.</li>
                  <li>
				  We employ highly qualified and certified technicians who specialize in the brands and main parts we service.
                  </li>
                  <li>Spare parts department and own storage, with available parts on stock and dedicated teams. We track and ship our spare parts at the best rates!</li>
                  <li>
				  A professional and multi-cultural team, we speak your language!
                  </li>
				  <li>A very sophisticated CRM system to keep the history of your car saved forever</li>
				  <li>Up to 15,000 different spare parts available on stock</li>
				  <li>Easy and fast access.</li>
				  <li>Intelligent security system equipped with CCTV cameras</li>
				  <li>Waiting area for men.</li>
				  <li>Waiting area for ladies.</li>
				  <li>Serene & well maintained Prayer room</li>
				  <li>AC, Free WI-FI and TV’s.</li>
				  <li>Dedicated service advisors</li>
                </ul>
              </div>
            </div>
          </section>

          <ServicesSection />
          <TestimonialSection />
          <ScheduleServiceSection />

          <LatestBlogSection />
        </div>

        <Footer />
      </>
    );
  }
}

export default AboutUs;
