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
import bnrImg from "../../images/banner/aboutus.jpg";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Helmet } from "react-helmet";

function AboutUs() {

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
                <span>About Us</span>
              </h1>
              <nav aria-label="breadcrumb" className="breadcrumb-row">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/">
                      <i className="las la-home"></i>Home
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    About Us
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div className=" AbtBx1">
          <div className="container">
            <div class="heading-bx text-center">
              <h6 class="title-ext text-primary">Swiss Auto</h6>
              <h2 class="title mb-0">
                EXPLORE MORE ABOUT ROYAL SWISS AUTO SERVICES
              </h2>
              <p>
                Royal Swiss Auto Services was established in the UAE to provide
                the dealership range of auto repair services at the most
                affordable prices to the customers.
              </p>
              <p>
                With the 18 years of our combined dealership experience, we have
                grown to greater extent and earned our own customers from
                various parts of UAE which motivated us to create the new
                branches across MENA regions.
              </p>
              <p>
                The high standard of servicing, affordable pricing, the trust
                and transparency that we maintain throughout the service or
                repair process makes us the best choice for luxury car
                maintenance across Saudi Arabia.
              </p>
              <p>
                Audi, Aston Martin, BMW, Bentley, Bugatti, Ferrari, Jaguar, Land
                Rover, Mercedes, Mini Cooper, Maybach, Pagani, Range Rover,
                Rolls Royce, Ford, Cadillac, Infiniti & Volkswagen are just some
                of the brands we service.
              </p>
            </div>
          </div>
        </div>
		<div className=" AbtBx2">
          <div className="container">
            <div class="heading-bx text-center">
              <h6 class="title-ext text-primary">Swiss Auto</h6>
              <h2 class="title mb-0">
			  OUR MISSION 
              </h2>
              <p>
			  Being a well equipped car service center in Saudi Arabia our mission is to provide the dealership range of automotive services to all our customers at the affordable pricing with greater trust and transparency while also focussing on both the personal and professional growth of our employees.
              </p>
            </div>
          </div>
        </div>
		<div className=" AbtBx1">
          <div className="container">
            <div class="heading-bx text-center">
              <h6 class="title-ext text-primary">Swiss Auto</h6>
              <h2 class="title mb-0">
			  OUR VISION
              </h2>
              <p>
			  To become one of the premier car service center in the Kingdom of Saudi Arabia with a huge number of satisfied customers.
              </p>
            </div>
          </div>
        </div>
		<section className="section-area section-sp2 ServiceBox1">
          <div className="container">
            <div class="heading-bx text-center">
              <h6 class="title-ext text-primary">FACILITIES </h6>
              <h2 class="title mb-0">AVAILABLE AT OUR CAR SERVICE CENTER </h2>
              <p>
			  At our Luxury car service center in Saudi Arabia, we are well-equipped to provide you with the wide range of auto repair services so you will stay in complete peace of mind.
              </p>
            </div>
            <div className="SerGridWrap">
              <div className="row mb-10">
                <div className="col-xl-6 col-sm-12 col-12">
                  <div className="counter-style-1">
                    <div className="text-secondry">
                      <h2 className="text-primary">
                        <span className="counter">
                          <i class="flaticon-car-4"></i>
                        </span>
                        {/* <span>K</span> */}
                      </h2>
                    </div>
                    <h5 className="counter-text">Engine room dedicated to engine repair, engine refurbishment, or engine replacement.</h5>
                  </div>
                </div>
				<div className="col-xl-6 col-sm-12 col-12">
                  <div className="counter-style-1">
                    <div className="text-secondry">
                      <h2 className="text-primary">
                        <span className="counter">
                          <i class="flaticon-car-4"></i>
                        </span>
                        {/* <span>K</span> */}
                      </h2>
                    </div>
                    <h5 className="counter-text">We employ highly qualified and certified technicians who specialize in the brands and main parts we service.</h5>
                  </div>
                </div>
				<div className="col-xl-6 col-sm-12 col-12">
                  <div className="counter-style-1">
                    <div className="text-secondry">
                      <h2 className="text-primary">
                        <span className="counter">
                          <i class="flaticon-car-4"></i>
                        </span>
                        {/* <span>K</span> */}
                      </h2>
                    </div>
                    <h5 className="counter-text">Spare parts department and own storage, with available parts on stock and dedicated teams. We track and ship our spare parts at the best rates!</h5>
                  </div>
                </div>
				<div className="col-xl-6 col-sm-12 col-12">
                  <div className="counter-style-1">
                    <div className="text-secondry">
                      <h2 className="text-primary">
                        <span className="counter">
                          <i class="flaticon-car-4"></i>
                        </span>
                        {/* <span>K</span> */}
                      </h2>
                    </div>
                    <h5 className="counter-text">A professional and multi-cultural team, we speak your language!</h5>
                  </div>
                </div>
				<div className="col-xl-6 col-sm-12 col-12">
                  <div className="counter-style-1">
                    <div className="text-secondry">
                      <h2 className="text-primary">
                        <span className="counter">
                          <i class="flaticon-car-4"></i>
                        </span>
                        {/* <span>K</span> */}
                      </h2>
                    </div>
                    <h5 className="counter-text">A very sophisticated CRM system to keep the history of your car saved forever</h5>
                  </div>
                </div>
				<div className="col-xl-6 col-sm-12 col-12">
                  <div className="counter-style-1">
                    <div className="text-secondry">
                      <h2 className="text-primary">
                        <span className="counter">
                          <i class="flaticon-car-4"></i>
                        </span>
                        {/* <span>K</span> */}
                      </h2>
                    </div>
                    <h5 className="counter-text">Up to 15,000 different spare parts available on stock</h5>
                  </div>
                </div>
				<div className="col-xl-6 col-sm-12 col-12">
                  <div className="counter-style-1">
                    <div className="text-secondry">
                      <h2 className="text-primary">
                        <span className="counter">
                          <i class="flaticon-car-4"></i>
                        </span>
                        {/* <span>K</span> */}
                      </h2>
                    </div>
                    <h5 className="counter-text">Easy and fast access.</h5>
                  </div>
                </div>
				<div className="col-xl-6 col-sm-12 col-12">
                  <div className="counter-style-1">
                    <div className="text-secondry">
                      <h2 className="text-primary">
                        <span className="counter">
                          <i class="flaticon-car-4"></i>
                        </span>
                        {/* <span>K</span> */}
                      </h2>
                    </div>
                    <h5 className="counter-text">Intelligent security system equipped with CCTV cameras.</h5>
                  </div>
                </div>
				<div className="col-xl-6 col-sm-12 col-12">
                  <div className="counter-style-1">
                    <div className="text-secondry">
                      <h2 className="text-primary">
                        <span className="counter">
                          <i class="flaticon-car-4"></i>
                        </span>
                        {/* <span>K</span> */}
                      </h2>
                    </div>
                    <h5 className="counter-text">Waiting area for men.</h5>
                  </div>
                </div>
				<div className="col-xl-6 col-sm-12 col-12">
                  <div className="counter-style-1">
                    <div className="text-secondry">
                      <h2 className="text-primary">
                        <span className="counter">
                          <i class="flaticon-car-4"></i>
                        </span>
                        {/* <span>K</span> */}
                      </h2>
                    </div>
                    <h5 className="counter-text">Waiting area for ladies.</h5>
                  </div>
                </div>
				<div className="col-xl-6 col-sm-12 col-12">
                  <div className="counter-style-1">
                    <div className="text-secondry">
                      <h2 className="text-primary">
                        <span className="counter">
                          <i class="flaticon-car-4"></i>
                        </span>
                        {/* <span>K</span> */}
                      </h2>
                    </div>
                    <h5 className="counter-text">Serene & well maintained Prayer room</h5>
                  </div>
                </div>
				<div className="col-xl-6 col-sm-12 col-12">
                  <div className="counter-style-1">
                    <div className="text-secondry">
                      <h2 className="text-primary">
                        <span className="counter">
                          <i class="flaticon-car-4"></i>
                        </span>
                        {/* <span>K</span> */}
                      </h2>
                    </div>
                    <h5 className="counter-text">AC, Free WI-FI and TV’s.</h5>
                  </div>
                </div>
				<div className="col-xl-6 col-sm-12 col-12">
                  <div className="counter-style-1">
                    <div className="text-secondry">
                      <h2 className="text-primary">
                        <span className="counter">
                          <i class="flaticon-car-4"></i>
                        </span>
                        {/* <span>K</span> */}
                      </h2>
                    </div>
                    <h5 className="counter-text">Dedicated service advisors</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <TestimonialSection />
        <ScheduleServiceSection />
      </div>

      <Footer />
    </>
  );
}

export default AboutUs;
