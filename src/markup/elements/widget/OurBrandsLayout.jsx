import React, { Component } from "react";
import { Link } from "react-router-dom";

// Images

import covervid from "../../../images/swissmain.mp4";
import posterImage from "../../../images/banner/bnr2.jpg";
import SwissBrands from "./Swiss-Brands";

const OurBrandsLayout = (props) => {
  return (
    <>
      <div className="OurBrandsRow section-sp2">
        <div className="container">
          <div class="heading-bx text-center">
            <h6 class="title-ext text-primary">Our Prtners</h6>
            <h2 class="title mb-0">BRANDS WE SERVE</h2>
            <p>
            Displaying the brand logos below doesn’t intend to imply or convey the impression that we are authorized to service partners, representatives, dealers, or agents of any of the brands mentioned below. Our intention is merely to categorize and exhibit the types of cars we serve. 
            </p>
          </div>
          <SwissBrands />
        </div>
      </div>
    </>
  );
};

export default OurBrandsLayout;
