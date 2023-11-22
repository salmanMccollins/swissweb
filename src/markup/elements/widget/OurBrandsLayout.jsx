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
            <h6 class="title-ext text-primary">Our Partners</h6>
            <h2 class="title mb-0">BRANDS WE SERVE</h2>
            <p>
            We have the necessary experience & expertise to handle European, American, Japanese & German cars at our workshop in Saudi Arabia. We make sure our customers experience the difference in auto repair services and are amazed by our precision. We not only service cars, but we also bring up long-lasting trust among customers.
            </p>
          </div>
          <SwissBrands />
        </div>
      </div>
    </>
  );
};

export default OurBrandsLayout;
