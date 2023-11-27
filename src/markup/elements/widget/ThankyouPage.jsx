import React, { Component } from "react";
import { Link } from "react-router-dom";
import HeroMainRow from "./HeroMainRow";

// Images

import covervid from "../../../images/swissmain.mp4";
import posterImage from "../../../images/cover.jpg";

const Thankyou = (props) => {
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
                  <span>Thank you for contacting us</span>
                </div>
               
                <div className="BtnMobile">
                  <Link class="btn btn-primary" to="/">
                    Go to Home
                  </Link>
                  <Link class="btn btn-secondary ms-3" to="/booking">
                  Book Appointment
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

export default Thankyou;
