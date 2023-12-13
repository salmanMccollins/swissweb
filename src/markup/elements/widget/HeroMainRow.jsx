import React, { Component } from "react";
import { Link } from "react-router-dom";

// Images

import covervid from "../../../images/swissmain.mp4";
import posterImage from "../../../images/banner/bnr2.jpg";

const HeroMainRow = (props) => {
  return (
    <>
      <div>
        <div className="DiagonalRowWrap">
          <div className="container-fluid p-0 m-0">
            <div className="row m-0 p-0">
              <div className="col-md-3 pd-0 row1">
                <div className="DiBox1">
                  <div className="DiBox1T1">100% Genuine Parts</div>
                  <div className="DiBox1T2">
                  For replacements, we only use high-quality spare parts specified for your brand.
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
                  Your car receives the premium care it deserves with our expertise and cutting-edge tools.
                  </div>
                  <Link class="DiBox1T3" to="/services">
                    Book Now
                  </Link>
                </div>
              </div>
              <div className="col-md-3 pd-0 row3">
                <div className="DiBox1">
                  <div className="DiBox1T1">Service contract & warranty claims</div>
                  <div className="DiBox1T2">
                  We have ideal options for all your car service & warranty needs.
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
                  We come to you no matter where you are in the KSA.
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

export default HeroMainRow;
