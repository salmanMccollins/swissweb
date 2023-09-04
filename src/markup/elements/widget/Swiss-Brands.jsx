import React, { Component } from "react";
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

const SwissBrands = (props) => {
  return (
    <>
      <div className='BrandBoxMega'>
													<div className='row'>
														<div className='col-md-2'>
															<Link to="/brands/bentley">
																<img className='MegaBrandLogo' src={brand1}/>
															</Link>
														</div>
														<div className='col-md-2'>
															<Link to="/brands/jaguar">
																<img className='MegaBrandLogo' src={brand2}/>
															</Link>
														</div>
														<div className='col-md-2'>
															<Link to="/brands/range-rover">
																<img className='MegaBrandLogo' src={brand3}/>
															</Link>
														</div>
														<div className='col-md-2'>
															<Link to="/brands/mini-cooper">
																<img className='MegaBrandLogo' src={brand4}/>
															</Link>
														</div>
														<div className='col-md-2'>
															<Link to="/brands/rolls-roys">
																<img className='MegaBrandLogo' src={brand5}/>
															</Link>
														</div>
														<div className='col-md-2'>
															<Link to="/brands/audi">
																<img className='MegaBrandLogo' src={brand6}/>
															</Link>
														</div>
														<div className='col-md-2'>
															<Link to="/brands/bmw">
																<img className='MegaBrandLogo' src={brand7}/>
															</Link>
														</div>
														<div className='col-md-2'>
															<Link to="/brands/mercedes">
																<img className='MegaBrandLogo' src={brand8}/>
															</Link>
														</div>
														<div className='col-md-2'>
															<Link to="/brands/porache">
																<img className='MegaBrandLogo' src={brand9}/>
															</Link>
														</div>
														<div className='col-md-2'>
															<Link to="/brands/volks-wagen">
																<img className='MegaBrandLogo' src={brand10}/>
															</Link>
														</div>
														<div className='col-md-2'>
															<Link to="/brands/ferrari">
																<img className='MegaBrandLogo' src={brand11}/>
															</Link>
														</div>
														<div className='col-md-2'>
															<Link to="/brands/lamborghini">
																<img className='MegaBrandLogo' src={brand12}/>
															</Link>
														</div>
														<div className='col-md-2'>
															<Link to="/brands/maserati">
																<img className='MegaBrandLogo' src={brand13}/>
															</Link>
														</div>
														<div className='col-md-2'>
															<Link to="/brands/cadillac">
																<img className='MegaBrandLogo' src={brand14}/>
															</Link>
														</div>
														<div className='col-md-2'>
															<Link to="/brands/chevrolet">
																<img className='MegaBrandLogo' src={brand15}/>
															</Link>
														</div>
														<div className='col-md-2'>
															<Link to="/brands/dodge">
																<img className='MegaBrandLogo' src={brand16}/>
															</Link>
														</div>
														<div className='col-md-2'>
															<Link to="/brands/ford">
																<img className='MegaBrandLogo' src={brand17}/>
															</Link>
														</div>
														<div className='col-md-2'>
															<Link to="/brands/gmc">
																<img className='MegaBrandLogo' src={brand18}/>
															</Link>
														</div>
														<div className='col-md-2'>
															<Link to="/brands/jeep">
																<img className='MegaBrandLogo' src={brand19}/>
															</Link>
														</div>
														<div className='col-md-2'>
															<Link to="/brands/infinitty">
																<img className='MegaBrandLogo' src={brand20}/>
															</Link>
														</div>
														<div className='col-md-2'>
															<Link to="/brands/lexus">
																<img className='MegaBrandLogo' src={brand21}/>
															</Link>
														</div>
													</div>
												</div>
    </>
  );
};

export default SwissBrands;
