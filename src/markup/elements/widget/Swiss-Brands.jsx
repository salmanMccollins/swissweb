import React, { Component, useState } from "react";
import { Link } from "react-router-dom";

// Images

import brand1 from "../../../images/brands/Bentley.png";
import brand2 from "../../../images/brands/Jaguar.png";
import brand3 from "../../../images/brands/landrover.png";
import brand4 from "../../../images/brands/MINI.png";
import brand5 from "../../../images/brands/RollsRoyce.png";
import brand6 from "../../../images/brands/Audi.png";
import brand7 from "../../../images/brands/BMW.png";
import brand8 from "../../../images/brands/Mercedes-Benz.png";
import brand9 from "../../../images/brands/Porsche.png";
import brand10 from "../../../images/brands/Volkswagen.png";
import brand11 from "../../../images/brands/Ferrari.png";
import brand12 from "../../../images/brands/Lamborghini.png";
import brand13 from "../../../images/brands/Maserati.png";
import brand14 from "../../../images/brands/Cadillac.png";
import brand15 from "../../../images/brands/Chevrolet.png";
import brand16 from "../../../images/brands/dodge.png";
import brand17 from "../../../images/brands/ford.png";
import brand18 from "../../../images/brands/gmc.png";
import brand19 from "../../../images/brands/Jeep.png";
import brand20 from "../../../images/brands/Infiniti.png";
import brand21 from "../../../images/brands/Lexus.png";
import brand22 from "../../../images/brands/Pagani.png";
import brand23 from "../../../images/brands/Bugatti.png";
import brand24 from "../../../images/brands/mclaren.png";
import brand25 from "../../../images/brands/Maybach.png";
const SwissBrands = (props) => {
  const [brandCnt, setBrandCnt] = useState("all")
  return (
    <>
      <div className="BrandBoxMega">
        <div className="FilterTabWrap">
          <div className="FilterTabFlex ">
            <div className="FilterTabColumn">
              <div className={`FilterItem ${brandCnt === "all" && "active"} `} onClick={()=>setBrandCnt("all")}>All</div>
            </div>
            <div className="FilterTabColumn">
              <div className={`FilterItem ${brandCnt === "European" && "active"}`} onClick={()=>setBrandCnt("European")}>European</div>
            </div>
            <div className="FilterTabColumn">
              <div className={`FilterItem ${brandCnt === "German" && "active"}`}  onClick={()=>setBrandCnt("German")}>German</div>
            </div>
            <div className="FilterTabColumn">
              <div className={`FilterItem ${brandCnt === "American" && "active"}`}  onClick={()=>setBrandCnt("American")}>American</div>
            </div>
            <div className="FilterTabColumn">
              <div className={`FilterItem ${brandCnt === "Electric Cars" && "active"}`}  onClick={()=>setBrandCnt("Electric Cars")}>Electric Cars</div>
            </div>
            <div className="FilterTabColumn">
              <div className={`FilterItem ${brandCnt === "Others" && "active"}`}  onClick={()=>setBrandCnt("Others")}>Others</div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-2" style={{display:brandCnt === "all"  || brandCnt === "European" ? "flex" : "none"}}>
            <Link to="/brands/bentley">
              <img className="MegaBrandLogo" src={brand1} />
            </Link>
          </div>
          <div className="col-md-2" style={{display:brandCnt === "all"  || brandCnt === "European" ? "flex" : "none"}}>
            <Link to="/brands/jaguar">
              <img className="MegaBrandLogo" src={brand2} />
            </Link>
          </div>
          <div className="col-md-2"  style={{display:brandCnt === "all"  || brandCnt === "European" ? "flex" : "none"}}>
            <Link to="/brands/range-rover">
              <img className="MegaBrandLogo" src={brand3} />
            </Link>
          </div>
          <div className="col-md-2" style={{display:brandCnt === "all"  || brandCnt === "European" ? "flex" : "none"}}>
            <Link to="/brands/mini-cooper">
              <img className="MegaBrandLogo" src={brand4} />
            </Link>
          </div>
          <div className="col-md-2"  style={{display:brandCnt === "all"  || brandCnt === "European" ? "flex" : "none"}}>
            <Link to="/brands/rolls-roys">
              <img className="MegaBrandLogo" src={brand5} />
            </Link>
          </div>
          <div className="col-md-2"  style={{display:brandCnt === "all"  || brandCnt === "European" ? "flex" : "none"}}>
            <Link to="/brands/mclaren">
              <img className="MegaBrandLogo" src={brand24} />
            </Link>
          </div>
          <div className="col-md-2" style={{display:brandCnt === "all"  || brandCnt === "German"  || brandCnt === "Electric Cars" ? "flex" : "none"}}>
            <Link to="/brands/audi">
              <img className="MegaBrandLogo" src={brand6} />
            </Link>
          </div>
          <div className="col-md-2" style={{display:brandCnt === "all"  || brandCnt === "German" ? "flex" : "none"}}>
            <Link to="/brands/bmw">
              <img className="MegaBrandLogo" src={brand7} />
            </Link>
          </div>
          <div className="col-md-2" style={{display:brandCnt === "all"  || brandCnt === "German" || brandCnt === "Electric Cars" ? "flex" : "none"}}>
            <Link to="/brands/mercedes">
              <img className="MegaBrandLogo" src={brand8} />
            </Link>
          </div>
          <div className="col-md-2" style={{display:brandCnt === "all"  || brandCnt === "German" ? "flex" : "none"}}>
            <Link to="/brands/porache">
              <img className="MegaBrandLogo" src={brand9} />
            </Link>
          </div>
          <div className="col-md-2" style={{display:brandCnt === "all"  || brandCnt === "German" || brandCnt === "Electric Cars" ? "flex" : "none"}}>
            <Link to="/brands/volks-wagen">
              <img className="MegaBrandLogo" src={brand10} />
            </Link>
          </div>
          <div className="col-md-2" style={{display:brandCnt === "all"  || brandCnt === "Others" ? "flex" : "none"}}>
            <Link to="/brands/ferrari">
              <img className="MegaBrandLogo" src={brand11} />
            </Link>
          </div>
          <div className="col-md-2" style={{display:brandCnt === "all"  || brandCnt === "Others" ? "flex" : "none"}}>
            <Link to="/brands/lamborghini" >
              <img className="MegaBrandLogo" src={brand12} />
            </Link>
          </div>
          <div className="col-md-2" style={{display:brandCnt === "all"  || brandCnt === "Others" ? "flex" : "none"}}>
            <Link to="/brands/maserati" >
              <img className="MegaBrandLogo" src={brand13} />
            </Link>
          </div>
          <div className="col-md-2"  style={{display:brandCnt === "all"  || brandCnt === "American" ? "flex" : "none"}}>
            <Link to="/brands/cadillac" >
              <img className="MegaBrandLogo" src={brand14} />
            </Link>
          </div>
          <div className="col-md-2"  style={{display:brandCnt === "all"  || brandCnt === "American" ? "flex" : "none"}}>
            <Link to="/brands/chevrolet" >
              <img className="MegaBrandLogo" src={brand15} />
            </Link>
          </div>
          <div className="col-md-2"   style={{display:brandCnt === "all"  || brandCnt === "American" ? "flex" : "none"}}>
            <Link to="/brands/dodge">
              <img className="MegaBrandLogo" src={brand16} />
            </Link>
          </div>
          <div className="col-md-2" style={{display:brandCnt === "all"  || brandCnt === "American" ? "flex" : "none"}}>
            <Link to="/brands/ford"  >
              <img className="MegaBrandLogo" src={brand17} />
            </Link>
          </div>
          <div className="col-md-2"  style={{display:brandCnt === "all"  || brandCnt === "American" ? "flex" : "none"}}>
            <Link to="/brands/gmc" >
              <img className="MegaBrandLogo" src={brand18} />
            </Link>
          </div>
          <div className="col-md-2"  style={{display:brandCnt === "all"  || brandCnt === "American" ? "flex" : "none"}}>
            <Link to="/brands/jeep">
              <img className="MegaBrandLogo" src={brand19} />
            </Link>
          </div>
          <div className="col-md-2"  style={{display:brandCnt === "all"  || brandCnt === "Others" ? "flex" : "none"}}>
            <Link to="/brands/infinitty">
              <img className="MegaBrandLogo" src={brand20} />
            </Link>
          </div>
          <div className="col-md-2"   style={{display:brandCnt === "all"  || brandCnt === "Others" ? "flex" : "none"}}>
            <Link to="/brands/lexus">
              <img className="MegaBrandLogo" src={brand21} />
            </Link>
          </div>
          <div className="col-md-2"  style={{display:brandCnt === "all"  || brandCnt === "Others" ? "flex" : "none"}}>
            <Link to="/brands/pagani">
              <img className="MegaBrandLogo" src={brand22} />
            </Link>
          </div>
          <div className="col-md-2" style={{display:brandCnt === "all"  || brandCnt === "Others" ? "flex" : "none"}}>
            <Link to="/brands/bugatti"   >
              <img className="MegaBrandLogo" src={brand23} />
            </Link>
          </div>
          
          <div className="col-md-2"  style={{display:brandCnt === "all"  || brandCnt === "Others" ? "flex" : "none"}}>
            <Link to="/brands/Maybach" >
              <img className="MegaBrandLogo" src={brand25} />
            </Link>
          </div>
		      <div className="col-md-2 ViewAllButtonBox">
            <Link to="/ourbrands">
              View All
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SwissBrands;
