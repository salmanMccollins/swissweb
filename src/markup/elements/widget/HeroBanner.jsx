import React, { Component } from "react";
import { Link } from "react-router-dom";

// Images

import covervid from "../../../images/swissmain.mp4";
import posterImage from "../../../images/banner/bnr2.jpg";

const HeroBanner = (props) => {
  return (
    <>
      <div className="VideoBanner">
        <video loop autoplay="" muted poster={posterImage}>
          <source src={covervid} type="video/mp4" />
          Your browser does not support the video tag. I suggest you upgrade
          your browser.
        </video>
        <div className="BannerContent">
          <div className="container">
            <div className="T1">
             <span> YOUR BEST ALTERNATE TO DEALERSHIP QUALITY SERVICES</span>
            </div>
            <div className="T2">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable</div>
			<div>
				<Link class="btn btn-primary" href="/en/booking">Book Appointment</Link>
				<Link class="btn btn-secondary ms-3" href="/en/services">View Services</Link>
			</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
