import React  from 'react';
import { Link } from 'react-router-dom';

// Layout
//import Header from "../layout/header";
import Footer from "../layout/footer";

// Elements
import Header from "../layout/header";
import ChooseUsSection from "../elements/choose-us";
import ScheduleServiceSection from "../elements/schedule-service";
import TeamOneSection from "../elements/team-1";
import TestimonialSection from "../elements/testimonial";
import { useTranslation } from 'react-i18next';
import HeroBanner from '../elements/widget/HeroBanner';
import InstagramBox from '../elements/widget/InstagramBox';

import bg2 from "../../images/background/bg2.png";

function ServicesBox() {

	const { t } = useTranslation();



	const handleRefresh = (url) => {
		window.location.href = url;
	};
	
		
		return (
			<>
			
				<Header />
				
				<HeroBanner />
				
				
				
				<section className="section-area bg-primary service-wraper1 section-sp2" style={{backgroundImage: "url("+bg2+")", backgroundRepeat: "no-repeat", backgroundPosition: "right top"}}>
					<div className="container">
						<div className="heading-bx text-white d-lg-flex d-md-block align-items-end justify-content-between">
							<div className="clearfix">
								<h6 className="title-ext">OUR SERVICES</h6>
								<h2 className="title mb-0">Mechanical Repair</h2>
							</div>
						</div>
						<div className="row spno">
							<div className="col-xl-3 col-lg-4 col-md-6">
								<div className="feature-container bg-gray-alt feature-bx1 mb-sm-30">
									<div className="icon-lg mb-10 text-primary">
										<span className='serviceicon service1'>&nbsp;</span>
									</div>
									<div className="icon-content">
										<h5 className="ttr-tilte text-uppercase">Axle/Drive Shaft Repair</h5>
										<p>As we all know the axle/driveshaft is one of the important mechanical components of the car. The drive shaft usually converts the power generated by the engine into usable force (torque) which is essential for the wheels to spin and the car to work.</p>
										<Link to="/services/mechanical-repair/axil-or-drift-shaft-repair" className="btn-link">Read More</Link>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-lg-4 col-md-6">
								<div className="feature-container feature-bx1 mb-sm-30">
									<div className="icon-lg mb-10 text-primary">
									<span className='serviceicon service2'>&nbsp;</span>
									</div>
									<div className="icon-content">
										<h5 className="ttr-tilte text-uppercase">BREAK REPAIR</h5>
										<p>It is essential to keep your car brakes in good condition, as it has a greater impact on your safety on the roads. To keep your car brakes well maintained it becomes essential to visit the reputed car service center and get the complete brake service done as stated in your owner’s manual. Getting timely servicing and repairing of the car brakes at a reputed car garage in Saudi Arabia is no more a burden since we are readily available with 24/7 customer support to provide complete brake care.</p>
										<Link to="/services/mechanical-repair/break-repair" className="btn-link">Read More</Link>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-lg-4 col-md-6">
								<div className="feature-container bg-gray-alt feature-bx1 mb-sm-30">
									<div className="icon-lg mb-10 text-primary">
									<span className='serviceicon service3'>&nbsp;</span>
									</div>
									<div className="icon-content">
										<h5 className="ttr-tilte text-uppercase">Engine Cooling System Repair</h5>
										<p>A good-performing cooling system is essential to keep up the optimum temperature of your car engine. To avoid engine overheating it is essential to keep the car cooling system in good condition. When a simple problem like coolant leakage is left unnoticed, it can result in engine failure in the long run and can provide you with expensive repair bills. So the issues with the car engine cooling system must be rectified at the earliest.</p>
										<Link to="/services/mechanical-repair/engine-cooling-system-repair" className="btn-link">Read More</Link>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-lg-4 col-md-6">
								<div className="feature-container feature-bx1 mb-sm-30">
									<div className="icon-lg mb-10 text-primary">
									<span className='serviceicon service4'>&nbsp;</span>
									</div>
									<div className="icon-content">
										<h5 className="ttr-tilte text-uppercase">Gearbox Repair</h5>
										<p>One important component of a car is the gearbox, which controls the vehicle's movement. Most latest make and model of cars now comes with an automatic transmission system whereas some have manual transmission.

Whether it may be manual or automatic gearbox systems, proper care from the experts is essential to extend its lifespan and to make sure your car runs smoothly on the roads. If you suspect any kinds of repairs with your car gearbox system contact the gearbox repair specialists immediately to avoid the expensive repair and the complete replacement.</p>
										<Link to="/services/mechanical-repair/gear-box-repair" className="btn-link">Read More</Link>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-lg-4 col-md-6">
								<div className="feature-container feature-bx1 mb-sm-30">
									<div className="icon-lg mb-10 text-primary">
									<span className='serviceicon service5'>&nbsp;</span>
									</div>
									<div className="icon-content">
										<h5 className="ttr-tilte text-uppercase">Pre-Purchase Inspection</h5>
										<p>Are you planning to purchase a used car? The most important thing that you can do before finalizing the car and settlement is to get the pre-purchase inspection by the experienced technicians at the most trusted car service center.</p>
										<Link to="/services/mechanical-repair/pre-purchase-inspection" className="btn-link">Read More</Link>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-lg-4 col-md-6">
								<div className="feature-container bg-gray-alt feature-bx1 mb-sm-30">
									<div className="icon-lg mb-10 text-primary">
									<span className='serviceicon service6'>&nbsp;</span>
									</div>
									<div className="icon-content">
										<h5 className="ttr-tilte text-uppercase">Suspension Repair</h5>
										<p>Healthy suspension in your car is essential to keep your ride smooth and safe. All the components in your car suspension systems work together to absorb the bumps and shocks on the roads and result in a smooth and comfortable journey with enhanced safety.</p>
										<Link to="/services/mechanical-repair/suspension-repair" className="btn-link">Read More</Link>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-lg-4 col-md-6">
								<div className="feature-container active feature-bx1 mb-sm-30">
									<div className="icon-lg mb-10 text-primary">
									<span className='serviceicon service7'>&nbsp;</span>
									</div>
									<div className="icon-content">
										<h5 className="ttr-tilte text-uppercase">Transmission Repair</h5>
										<p>A transmission is one of the vital components of the car like an engine, and helps you to shift to the correct gear based on your car speed and helps you to drive smoothly. Initially, in the olden days, cars had only the manual transmission but nowadays modern cars have an automatic transmission which makes driving easy. </p>
										<Link to="/services/mechanical-repair/touchless-wheel-alignment" className="btn-link">Read More</Link>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-lg-4 col-md-6">
								<div className="feature-container bg-gray-alt feature-bx1">
									<div className="icon-lg mb-10 text-primary">
									<span className='serviceicon service8'>&nbsp;</span>
									</div>
									<div className="icon-content">
										<h5 className="ttr-tilte text-uppercase">Touchless Wheel Alignment</h5>
										<p>Getting your wheels aligned is highly important because they contribute a lot towards your vehicle's performance and safety. When the wheels are not properly aligned it may have several impacts like fastened and uneven tyre wear, decreased fuel efficiency and poor vehicle handling characteristics.</p>
										<Link to="/services/mechanical-repair/transmission-repair" className="btn-link">Read More</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="section-area bg-primary service-wraper1 section-sp2" style={{backgroundImage: "url("+bg2+")", backgroundRepeat: "no-repeat", backgroundPosition: "right top"}}>
					<div className="container">
						<div className="heading-bx text-white d-lg-flex d-md-block align-items-end justify-content-between">
							<div className="clearfix">
								<h6 className="title-ext">OUR SERVICES</h6>
								<h2 className="title mb-0">Body Shop</h2>
							</div>
						</div>
						<div className="row spno">
							<div className="col-xl-3 col-lg-4 col-md-6">
								<div className="feature-container bg-gray-alt feature-bx1 mb-sm-30">
									<div className="icon-lg mb-10 text-primary">
									<span className='serviceicon service15'>&nbsp;</span>
									</div>
									<div className="icon-content">
										<h5 className="ttr-tilte text-uppercase">Smart Body Repair</h5>
										<p>Everyone has the constant desire of keeping our car looking at its best until the last miles. Yet the wear and tear due to the daily usage may cause damages to your car exterior and affect its look and performance.

In such cases you no need to spend hours on workshop to get the issues sorted out. Adhering to the smart body repair techniques using advanced tools will keep your car shining and ensure the flawless look in no time..</p>
										<Link to="/services/body-shop/smart-body-repair" className="btn-link">Read More</Link>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-lg-4 col-md-6">
								<div className="feature-container feature-bx1 mb-sm-30">
									<div className="icon-lg mb-10 text-primary">
									<span className='serviceicon service16'>&nbsp;</span>
									</div>
									<div className="icon-content">
										<h5 className="ttr-tilte text-uppercase">Car Detailing</h5>
										<p>Maintaining the pristine condition of your vehicle, akin to its showroom debut, necessitates the expertise of professional detailing services.</p>
										<Link to="/services/body-shop/car-detailing" className="btn-link">Read More</Link>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-lg-4 col-md-6">
								<div className="feature-container bg-gray-alt feature-bx1 mb-sm-30">
									<div className="icon-lg mb-10 text-primary">
									<span className='serviceicon service17'>&nbsp;</span>
									</div>
									<div className="icon-content">
										<h5 className="ttr-tilte text-uppercase">Car Tinting</h5>
										<p>Getting the car window tinting done comes with certain benefits like UV protection, heat rejection, glare reduction and enhances the safety and security inside the car.

However, it is important to get the window tinting done by experienced technicians using high-quality window tinting films to achieve a sleek and uniform look.</p>
										<Link to="/services/body-shop/car-tinting" className="btn-link">Read More</Link>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-lg-4 col-md-6">
								<div className="feature-container feature-bx1 mb-sm-30">
									<div className="icon-lg mb-10 text-primary">
									<span className='serviceicon service18'>&nbsp;</span>
									</div>
									<div className="icon-content">
										<h5 className="ttr-tilte text-uppercase">Car DIP Color</h5>
										<p>Car dip colour services is one of the modern services provided by various body & paint shops to modify your vehicle's look instead of relying on traditional paint modification techniques like vinyl wrapping or any other.

It is important to remember that dip color services not only enhance the appearance of your car and give it a new look but also protect your car’s original paint from scratches and debris.</p>
										<Link to="/services/body-shop/car-dip-color" className="btn-link">Read More</Link>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-lg-4 col-md-6">
								<div className="feature-container feature-bx1 mb-sm-30">
									<div className="icon-lg mb-10 text-primary">
									<span className='serviceicon service19'>&nbsp;</span>
									</div>
									<div className="icon-content">
										<h5 className="ttr-tilte text-uppercase">Ceramic Coating</h5>
										<p>One of the ideal ways to protect your car paint surface from getting into scratches, stone chips, bird droppings or any other external damage is through ceramic coating. When you take up the ceramic coating for your car, the thick layer of nano-ceramic particles acts as a protective layer and protects your car’s exterior paint surface from damage and helps to retain its shine.</p>
										<Link to="/services/body-shop/ceramic-coating" className="btn-link">Read More</Link>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-lg-4 col-md-6">
								<div className="feature-container bg-gray-alt feature-bx1 mb-sm-30">
									<div className="icon-lg mb-10 text-primary">
									<span className='serviceicon service20'>&nbsp;</span>
									</div>
									<div className="icon-content">
										<h5 className="ttr-tilte text-uppercase">Brake Caliper painting</h5>
										<p>If you are the one looking out for the luxury and personalization of your car to stay unique on the roads, then getting professional brake caliper painting services is the ideal choice.

But it is important to choose the experts to get the brake calipers painted to achieve greater precision.</p>
										<Link to="/services/body-shop/break-caliper-painting" className="btn-link">Read More</Link>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-lg-4 col-md-6">
								<div className="feature-container active feature-bx1 mb-sm-30">
									<div className="icon-lg mb-10 text-primary">
									<span className='serviceicon service21'>&nbsp;</span>
									</div>
									<div className="icon-content">
										<h5 className="ttr-tilte text-uppercase">Paint Protcetion Film</h5>
										<p>Paint protection film is a transparent film that can be installed on the exterior of the vehicle to protect the exterior from scratches and other damages. Getting the PPF installed also increases your vehicle's shine and restores its look.</p>
										<Link to="/services/body-shop/paint-protection-film" className="btn-link">Read More</Link>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-lg-4 col-md-6">
								<div className="feature-container bg-gray-alt feature-bx1">
									<div className="icon-lg mb-10 text-primary">
									<span className='serviceicon service22'>&nbsp;</span>
									</div>
									<div className="icon-content">
										<h5 className="ttr-tilte text-uppercase">WindShield Repair</h5>
										<p>Any cracks or chips on the windshield will reduce the visibility while driving. So any issues with the windshields must be fixed at the earliest before it turns out to be the major one. At Royal Swiss Auto Services we do provide the best windshield repair and replacement services in a fast and convenient way as per the original specifications so that you can be at peace of mind.</p>
										<Link to="/services/body-shop/wind-shield-repair" className="btn-link">Read More</Link>
									</div>
								</div>
							</div>
							{/* <div className="col-xl-3 col-lg-4 col-md-6">
								<div className="feature-container bg-gray-alt feature-bx1">
									<div className="icon-lg mb-10 text-primary">
									<span className='serviceicon service23'>&nbsp;</span>
									</div>
									<div className="icon-content">
										<h5 className="ttr-tilte text-uppercase">Classic Car Restoration</h5>
										<p>There are many variations of passages of Lorem Ipsum available.</p>
										<Link to="/services/body-shop/classic-car-restoration" className="btn-link">Read More</Link>
									</div>
								</div>
							</div> */}
							
						</div>
					</div>
				</section>
                <section className="section-area bg-primary service-wraper1 section-sp2" style={{backgroundImage: "url("+bg2+")", backgroundRepeat: "no-repeat", backgroundPosition: "right top"}}>
					<div className="container">
						<div className="heading-bx text-white d-lg-flex d-md-block align-items-end justify-content-between">
							<div className="clearfix">
								<h6 className="title-ext">OUR SERVICES</h6>
								<h2 className="title mb-0">Electrical Repair</h2>
							</div>
						</div>
						<div className="row spno">
							<div className="col-xl-3 col-lg-4 col-md-6">
								<div className="feature-container bg-gray-alt feature-bx1 mb-sm-30">
									<div className="icon-lg mb-10 text-primary">
									<span className='serviceicon service8'>&nbsp;</span>
									</div>
									<div className="icon-content">
										<h5 className="ttr-tilte text-uppercase">AC Repair</h5>
										<p>A regular car air conditioning system service ensures that it stays in top condition! As we all know a properly functioning car AC system is essential to enhance the comfort of the drivers on the road.</p>
										<Link to="/services/electrical-repair/ac-repair" className="btn-link">Read More</Link>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-lg-4 col-md-6">
								<div className="feature-container feature-bx1 mb-sm-30">
									<div className="icon-lg mb-10 text-primary">
									<span className='serviceicon service9'>&nbsp;</span>
									</div>
									<div className="icon-content">
										<h5 className="ttr-tilte text-uppercase">Camera / Radar Calibration</h5>
										<p>Camera/radar calibration is essential for the smooth driving of your car and ensures safety. In the initial days “driver assistance system” was designed to provide smarter control to vehicle owners like anti-lock braking system, electronic stability control, windshield wipers with rain sensor detection and many more. But nowadays the cameras and sensors in the car are advanced with various tools that help the drivers to map out the surroundings, switch lanes, stop in traffic, vehicle parking and many more.</p>
										<Link to="/services/electrical-repair/camera-radar-calibration" className="btn-link">Read More</Link>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-lg-4 col-md-6">
								<div className="feature-container bg-gray-alt feature-bx1 mb-sm-30">
									<div className="icon-lg mb-10 text-primary">
									<span className='serviceicon service10'>&nbsp;</span>
									</div>
									<div className="icon-content">
										<h5 className="ttr-tilte text-uppercase">Car Software Repair & Programming</h5>
										<p>Just like any other mechanical or electrical issues in the car, software repairs also require the proper diagnosis and troubleshooting, the bugs must be fixed at the earliest. In modern cars, the software in the car enhances the performance and security of your car. </p>
										<Link to="/services/electrical-repair/car-repair-and-software-programming" className="btn-link">Read More</Link>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-lg-4 col-md-6">
								<div className="feature-container feature-bx1 mb-sm-30">
									<div className="icon-lg mb-10 text-primary">
									<span className='serviceicon service11'>&nbsp;</span>
									</div>
									<div className="icon-content">
										<h5 className="ttr-tilte text-uppercase">Comfort System Repair</h5>
										<p>Everyone who owns a car wants their ride to be more comfortable and enjoyable. The comfort system in your car includes everything like radio, navigation control, temperature control, locking systems, lighting systems and all other infotainment systems that are helpful to make your ride even more comfortable than you think.</p>
										<Link to="/services/electrical-repair/comfort-system-repair" className="btn-link">Read More</Link>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-lg-4 col-md-6">
								<div className="feature-container feature-bx1 mb-sm-30">
									<div className="icon-lg mb-10 text-primary">
									<span className='serviceicon service12'>&nbsp;</span>
									</div>
									<div className="icon-content">
										<h5 className="ttr-tilte text-uppercase">Engine Control Unit Repair</h5>
										<p>The engine control unit has greater responsibility like determining the performance of your vehicle and ensuring a safer ride.

The problems with the engine control unit may arrive due to various reasons but regularly inspecting the engine control unit of the car can save you both time and money. The engine control unit of the car is highly intricate and it is always good to rely on experienced technicians to handle it.</p>
										<Link to="/services/electrical-repair/engine-control-unit-repair" className="btn-link">Read More</Link>
									</div>
								</div>
							</div>
							{/* <div className="col-xl-3 col-lg-4 col-md-6">
								<div className="feature-container bg-gray-alt feature-bx1 mb-sm-30">
									<div className="icon-lg mb-10 text-primary">
									<span className='serviceicon service13'>&nbsp;</span>
									</div>
									<div className="icon-content">
										<h5 className="ttr-tilte text-uppercase">Navigation Update</h5>
										<p>The engine control unit has greater responsibility like determining the performance of your vehicle and ensuring a safer ride.

The problems with the engine control unit may arrive due to various reasons but regularly inspecting the engine control unit of the car can save you both time and money. The engine control unit of the car is highly intricate and it is always good to rely on experienced technicians to handle it.</p>
										<Link to="/services/electrical-repair/navigation-update" className="btn-link">Read More</Link>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-lg-4 col-md-6">
								<div className="feature-container active feature-bx1 mb-sm-30">
									<div className="icon-lg mb-10 text-primary">
									<span className='serviceicon service14'>&nbsp;</span>
									</div>
									<div className="icon-content">
										<h5 className="ttr-tilte text-uppercase">Retrofit</h5>
										<p>There are many variations of passages of Lorem Ipsum available.</p>
										<Link to="/services/electrical-repair/retrofit" className="btn-link">Read More</Link>
									</div>
								</div>
							</div> */}
						</div>
					</div>
				</section>
                
                <section className="section-area bg-primary service-wraper1 section-sp2" style={{backgroundImage: "url("+bg2+")", backgroundRepeat: "no-repeat", backgroundPosition: "right top"}}>
					<div className="container">
						<div className="heading-bx text-white d-lg-flex d-md-block align-items-end justify-content-between">
							<div className="clearfix">
								<h6 className="title-ext">OUR SERVICES</h6>
								<h2 className="title mb-0">Other Services</h2>
							</div>
						</div>
						<div className="row spno">
							<div className="col-xl-3 col-lg-4 col-md-6">
								<div className="feature-container bg-gray-alt feature-bx1 mb-sm-30">
									<div className="icon-lg mb-10 text-primary">
										<span className='serviceicon service24'>&nbsp;</span>
									</div>
									<div className="icon-content">
										<h5 className="ttr-tilte text-uppercase">Car Recovery</h5>
										<p>There are many variations of passages of Lorem Ipsum available.</p>
										<Link to="/services/other-services/car-recovery" className="btn-link">Read More</Link>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-lg-4 col-md-6">
								<div className="feature-container feature-bx1 mb-sm-30">
									<div className="icon-lg mb-10 text-primary">
									<span className='serviceicon service25'>&nbsp;</span>
									</div>
									<div className="icon-content">
										<h5 className="ttr-tilte text-uppercase">Fleet Management</h5>
										<p>There are many variations of passages of Lorem Ipsum available.</p>
										<Link to="/services/other-services/fleet-management" className="btn-link">Read More</Link>
									</div>
								</div>
							</div>
							
							<div className="col-xl-3 col-lg-4 col-md-6">
								<div className="feature-container feature-bx1 mb-sm-30">
									<div className="icon-lg mb-10 text-primary">
									<span className='serviceicon service26'>&nbsp;</span>
									</div>
									<div className="icon-content">
										<h5 className="ttr-tilte text-uppercase">Electric Car Repair</h5>
										<p>There are many variations of passages of Lorem Ipsum available.</p>
										<Link to="/services/other-services/electric-car-repair" className="btn-link">Read More</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				
				<ChooseUsSection />
				
				
				
				
				<TestimonialSection />
				<ScheduleServiceSection />
				<InstagramBox/>
				
				<Footer />
				
			</>
		);
}

export default ServicesBox;