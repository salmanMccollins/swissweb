import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// Elements
import BackToTop from './elements/back-top';
import PageScrollTop from './elements/page-scroll-top';

// All Pages Router
import Index from './pages/index';
import BlogDetails from './pages/blog-details';
import BlogGridSidebar from './pages/blogs';
import Booking from './pages/booking';
import ContactUs from './pages/contact';
import Faq1 from './pages/faq-1';
import Gallery2 from './pages/gallery';
import JobCareer from './pages/job-career';
import Error from './pages/error-404';
import { withTranslation } from "react-i18next";

import BrandsAudi from './pages/brands/audi-brands';
import Bentley from './pages/brands/bentley';
import Bmw from './pages/brands/Bmw';
import Cadillac from './pages/brands/Cadillac';
import Chevrolet from './pages/brands/Chevrolet';
import Dodge from './pages/brands/Dodge';
import ElectricCar from './pages/brands/ElectricCar';
import Ferrari from './pages/brands/Ferrari';
import Ford from './pages/brands/Ford';
import GMC from './pages/brands/GMC';
import Infinitty from './pages/brands/Infinitty';
import Jaguar from './pages/brands/jaguar';
import Jeep from './pages/brands/Jeep';
import Lamborghini from './pages/brands/Lamborghini';
import Lexus from './pages/brands/Lexus';
import Maserati from './pages/brands/Maserati';
import Mercedes from './pages/brands/Mercedes';
import MiniCooper from './pages/brands/mini-cooper';
import Porache from './pages/brands/Porache';
import RangeRover from './pages/brands/range-rover';
import RollsRoys from './pages/brands/rolls-roys';
import VolksWagen from './pages/brands/VolksWagen';

import AxilorDriftShaftRepair from './pages/Services/mechanical-repair/AxilorDriftShaftRepair';
import BreakRepair from './pages/Services/mechanical-repair/BreakRepair';
import EnginCoolingSystemRepair from './pages/Services/mechanical-repair/EnginCoolingSystemRepair';
import EnginManagementSystemRepair from './pages/Services/mechanical-repair/EnginManagementSystemRepair';
import gearBoxRepair from './pages/Services/mechanical-repair/gearBoxRepair';
import PrePurchaseInspection from './pages/Services/mechanical-repair/PrePurchaseInspection';
import SuspensionRepair from './pages/Services/mechanical-repair/SuspensionRepair';
import TouchlessWheelAlignment from './pages/Services/mechanical-repair/TouchlessWheelAlignment';
import TransmissionRepair from './pages/Services/mechanical-repair/TransmissionRepair';

import ACRepair from './pages/Services/electrical-repair/ACRepair';
import CameraOrRadarCalibration from './pages/Services/electrical-repair/CameraOrRadarCalibration';
import CarSoftwareRepairOrProgramming from './pages/Services/electrical-repair/CarSoftwareRepairOrProgramming';
import ComfortSystamRepair from './pages/Services/electrical-repair/ComfortSystamRepair';
import EngineControlUnitRepair from './pages/Services/electrical-repair/EngineControlUnitRepair';
import NavigationUpdate from './pages/Services/electrical-repair/NavigationUpdate';
import Retrofit from './pages/Services/electrical-repair/Retrofit';

import SmartBodyRepair from './pages/Services/Body-shop/SmartBodyRepair';
import BreakCaliperPainting from './pages/Services/Body-shop/BreakCaliperPainting';
import CarDetailing from './pages/Services/Body-shop/CarDetailing';
import CarDIPColor from './pages/Services/Body-shop/CarDIPColor';
import CarTinting from './pages/Services/Body-shop/CarTinting';
import CeramicCoating from './pages/Services/Body-shop/CeramicCoating';
import ClassicCarRestoration from './pages/Services/Body-shop/ClassicCarRestoration';
import PaintProtcetionFilm from './pages/Services/Body-shop/PaintProtcetionFilm';
import WindShieldRepair from './pages/Services/Body-shop/WindShieldRepair';
import ElectricCarRepair from './pages/Services/other-services/ElectricCarRepair';

import CarRecovery from './pages/Services/other-services/CarRecovery';
import FleetMangement from './pages/Services/other-services/fleetManagement';

import OurPackeges from './pages/Our-Packages/Main';


import OurBrands from './pages/OurBrands';

import ServicesBox from './pages/services';
import ServiceContract from './pages/Our-Packages/ServiceContract';
import MinorServices from './pages/Our-Packages/MinorServices';
import MajorServices from './pages/Our-Packages/MajorServices';

import AboutUs from './pages/about';

import Offers from './pages/Offers';
import ThankyouPage from './pages/thank-you';


class Markup extends Component{
	render(){
		
		return(
			<>
				<BrowserRouter basename={`/${this.props.i18n.language}`}>
				
					<Switch>
					
						<Route path='/' exact component={Index} />
						<Route path='/ourbrands' exact component={OurBrands} />
						<Route path='/aboutus' exact component={AboutUs} />
						<Route path='/services' exact component={ServicesBox} />
						<Route path='/packages' exact component={OurPackeges} />
						<Route path='/careers' exact component={JobCareer} />
						<Route path='/packages/service-contract' exact component={ServiceContract} />
						<Route path='/packages/minor-service' exact component={MinorServices} />
						<Route path='/packages/major-service' exact component={MajorServices} />
						<Route path='/thankyou' exact component={ThankyouPage} />
						
						

						<Route path='/services/mechanical-repair/axil-or-drift-shaft-repair' exact component={AxilorDriftShaftRepair} />
						<Route path='/services/mechanical-repair/break-repair' exact component={BreakRepair} />
						<Route path='/services/mechanical-repair/engine-cooling-system-repair' exact component={EnginCoolingSystemRepair} />
						<Route path='/services/mechanical-repair/engine-management-system-repair' exact component={EnginManagementSystemRepair} />
						<Route path='/services/mechanical-repair/gear-box-repair' exact component={gearBoxRepair} />
						<Route path='/services/mechanical-repair/pre-purchase-inspection' exact component={PrePurchaseInspection} />
						<Route path='/services/mechanical-repair/suspension-repair' exact component={SuspensionRepair} />
						<Route path='/services/mechanical-repair/touchless-wheel-alignment' exact component={TouchlessWheelAlignment} />
						<Route path='/services/mechanical-repair/transmission-repair' exact component={TransmissionRepair} />

						<Route path='/services/electrical-repair/ac-repair' exact component={ACRepair} />
						<Route path='/services/electrical-repair/camera-radar-calibration' exact component={CameraOrRadarCalibration} />
						<Route path='/services/electrical-repair/car-repair-and-software-programming' exact component={CarSoftwareRepairOrProgramming} />
						<Route path='/services/electrical-repair/comfort-system-repair' exact component={ComfortSystamRepair} />
						<Route path='/services/electrical-repair/engine-control-unit-repair' exact component={EngineControlUnitRepair} />
						<Route path='/services/electrical-repair/navigation-update' exact component={NavigationUpdate} />
						<Route path='/services/electrical-repair/retrofit' exact component={Retrofit} />

						
						<Route path='/services/body-shop/break-caliper-painting' exact component={BreakCaliperPainting} />
						<Route path='/services/body-shop/car-detailing' exact component={CarDetailing} />
						<Route path='/services/body-shop/car-dip-color' exact component={CarDIPColor} />
						<Route path='/services/body-shop/car-tinting' exact component={CarTinting} />
						<Route path='/services/body-shop/ceramic-coating' exact component={CeramicCoating} />
						<Route path='/services/body-shop/classic-car-restoration' exact component={ClassicCarRestoration} />
						<Route path='/services/body-shop/paint-protection-film' exact component={PaintProtcetionFilm} />
						<Route path='/services/body-shop/smart-body-repair' exact component={SmartBodyRepair} />
						<Route path='/services/body-shop/wind-shield-repair' exact component={WindShieldRepair} />

						<Route path='/services/other-services/car-recovery' exact component={CarRecovery} />
						<Route path='/services/other-services/fleet-management' exact component={FleetMangement} />
						<Route path='/services/other-services/electric-car-repair' exact component={ElectricCarRepair} />

						
						


						<Route path='/brands/audi' exact component={BrandsAudi} />
						<Route path='/brands/bentley' exact component={Bentley} />
						<Route path='/brands/bmw' exact component={Bmw} />
						<Route path='/brands/cadillac' exact component={Cadillac} />
						<Route path='/brands/chevrolet' exact component={Chevrolet} />
						<Route path='/brands/dodge' exact component={Dodge} />
						<Route path='/brands/electric-car' exact component={ElectricCar} />
						<Route path='/brands/ferrari' exact component={Ferrari} />
						<Route path='/brands/ford' exact component={Ford} />
						<Route path='/brands/gmc' exact component={GMC} />
						<Route path='/brands/infinitty' exact component={Infinitty} />
						<Route path='/brands/jaguar' exact component={Jaguar} />
						<Route path='/brands/jeep' exact component={Jeep} />
						<Route path='/brands/lamborghini' exact component={Lamborghini} />
						<Route path='/brands/lexus' exact component={Lexus} />
						<Route path='/brands/maserati' exact component={Maserati} />
						<Route path='/brands/mercedes' exact component={Mercedes} />
						<Route path='/brands/mini-cooper' exact component={MiniCooper} />
						<Route path='/brands/porache' exact component={Porache} />
						<Route path='/brands/range-rover' exact component={RangeRover} />
						<Route path='/brands/rolls-roys' exact component={RollsRoys} />
						<Route path='/brands/volks-wagen' exact component={VolksWagen} />

						<Route path='/about-1' exact component={AboutUs} />
						<Route path='/blog-details/:blogUrl' exact component={BlogDetails} />
						<Route path='/blogs' exact component={BlogGridSidebar} />
						<Route path='/booking' exact component={Booking} />
						<Route path='/contact' exact component={ContactUs} />
						{/* <Route path='/gallery' exact component={Gallery2} /> */}
						<Route path='/offers' exact component={Offers} />
						
						<Route component={Error} />
						
					</Switch>
					
					<PageScrollTop />
					
				</BrowserRouter>
				
				<BackToTop />
				
			</>
		);
	}
}

export default withTranslation()(Markup);