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
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa accusantium, ducimus voluptatem corporis qui temporibus! Eveniet, reprehenderit delectus et sunt autem dicta fugiat? Consequatur, fuga maiores vitae dolorum natus atque?
            </p>
          </div>
          <SwissBrands />
        </div>
      </div>
    </>
  );
};

export default OurBrandsLayout;
