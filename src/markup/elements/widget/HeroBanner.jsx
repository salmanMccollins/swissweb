import React, { Component } from "react";
import { Link } from "react-router-dom";
import HeroMainRow from "./HeroMainRow";

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
                  <span>YOUR TRUSTED PARTNER FOR AUTO REPAIR SERVICES IN SAUDI ARABIA</span>
                </div>
                <div className="T2">
                Welcome to Royal Swiss Auto Services, a well-established repair and maintenance partner for luxury vehicles. With our car service center in Saudi Arabia, we handle everything from simple routine maintenance to complex repairs with greater precision.
                </div>
                <div className="BtnMobile">
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
        <HeroMainRow/>
      </div>
    </>
  );
};

export default HeroBanner;
