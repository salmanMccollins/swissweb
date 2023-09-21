import React, { Component } from "react";
import { Link } from "react-router-dom";

// Images

import covervid from "../../../images/swissmain.mp4";
import posterImage from "../../../images/banner/bnr2.jpg";

const HeroBanner = (props) => {
  return (
    <>
      <div>
        <div className="VideoBanner">
          <video loop autoplay="" muted poster={posterImage}>
            <source src={covervid} type="video/mp4" />
            Your browser does not support the video tag. I suggest you upgrade
            your browser.
          </video>
          <div className="BannerContent">
            <div className="container">
              <div className="ContentBoxt">
                <div className="T1">
                  <span> YOUR BEST ALTERNATE TO DEALERSHIP QUALITY SERVICES</span>
                </div>
                <div className="T2">
                  There are many variations of passages of Lorem Ipsum available,
                  but the majority have suffered alteration in some form, by
                  injected humour, or randomised words which don't look even
                  slightly believable
                </div>
                <div>
                  <Link class="btn btn-primary" to="/booking">
                    Book Appointment
                  </Link>
                  <Link class="btn btn-secondary ms-3" to="/services">
                    View Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="DiagonalRowWrap">
          <div className="container-fluid p-0 m-0">
            <div className="row m-0 p-0">
              <div className="col-md-3 pd-0 row1">
                <div className="DiBox1">
                  <div className="DiBox1T1">100% Genuine Parts</div>
                  <div className="DiBox1T2">
                    We use only genuine parts for replacement
                  </div>
                  <Link class="DiBox1T3" to="/services">
                    Book Now
                  </Link>
                </div>
              </div>
              <div className="col-md-3 pd-0 row2">
                <div className="DiBox1">
                  <div className="DiBox1T1">Dealership Quality Repair</div>
                  <div className="DiBox1T2">
                  Latest equipment and our expert technicians are trained on each brand
                  </div>
                  <Link class="DiBox1T3" to="/services">
                    Enquire Now
                  </Link>
                </div>
              </div>
              <div className="col-md-3 pd-0 row3">
                <div className="DiBox1">
                  <div className="DiBox1T1">Service Contract & Warranty Plans</div>
                  <div className="DiBox1T2">
                  All your car services and warranty needs taken care of
                  </div>
                  <Link class="DiBox1T3" to="/services">
                    Book Now
                  </Link>
                </div>
              </div>
              <div className="col-md-3 pd-0 row4">
                <div className="DiBox1">
                  <div className="DiBox1T1">Pick Up Across SAUDI</div>
                  <div className="DiBox1T2">
                  We come to you no matter where you are in the UAE
                  </div>
                  <Link class="DiBox1T3" to="/services">
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
