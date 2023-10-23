import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {Accordion} from 'react-bootstrap';

// Layout
import Header from "../../../layout/header";
import Footer from "../../../layout/footer";

// Elements
import WidgetBrochure from "../../../elements/widget/widget-brochure";
import WidgetHelp from "../../../elements/widget/widget-help";
import ScheduleServiceSection from '../../../elements/schedule-service';
import TestimonialSection from '../../../elements/testimonial';
import ChooseUsSection from '../../../elements/choose-us';
import ServicesSection from '../../../elements/services-1';

// Images
import bnrImg from "../../../../images/banner/bnr1.jpg";
import serviceSectionPic3 from "../../../../images/service-section/pic3.jpg";

class ComfortSystamRepair extends Component{
	
	render(){
		return (
			<>
        <Header />

        <div className="page-content bg-white">
          <div
            className="page-banner ovbl-dark"
            style={{ backgroundImage: "url(" + bnrImg + ")" }}
          >
            <div className="container">
              <div className="page-banner-entry text-center">
                <h1>
                  <span>COMFORT SYSTEM REPAIR SERVICES </span>
                </h1>
                <nav aria-label="breadcrumb" className="breadcrumb-row">
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item text-uppercase">
                      <Link to="/">
                        <i className="las la-home"></i>Home
                      </Link>
                    </li>
                    <li className="breadcrumb-item text-uppercase">
                      <Link to="/services">
                        Services
                      </Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      {" "}
					  COMFORT SYSTEM REPAIR SERVICES
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>

          <div className="section-area section-sp1 bg-white">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-5">
                  <aside className="sticky-top pb-1">

                    <WidgetHelp />
                  </aside>
                </div>
                <div className="col-lg-8 col-md-7">
                  <div className="mb-10">
                    <div className="head-text mb-30">
                      <h4 className="title mb-10">
					  CAR COMFORT SYSTEM REPAIR EXPERTS IN SAUDI ARABIA THAT YOU CAN COUNT ON

                      </h4>
                      <p className="mb-15">Everyone who owns a car wants their ride to be more comfortable and enjoyable. The comfort system in your car includes everything like radio, navigation control, temperature control, locking systems, lighting systems and all other infotainment systems that are helpful to make your ride even more comfortable than you think.</p>
                      <p className="mb-15">To keep all comfort systems in your car in pristine condition and to avoid expensive repair bills caused by the malfunction, a proper care and service from the experienced technicians is advised.</p>
					  <p className="mb-15">
					  We are Royal Swiss Auto Services, one of the well-equipped car service center catering various comfort system repairs in Saudi Arabia, to make the rides of our customers even more comfortable and luxurious.
</p>
                    </div>
                    <div className="row">
                   
                      <div className="col-xl-12">
                      
						<h5 class="title mb-15 text-uppercase">
						GET YOUR CAR COMFORT SYSTEM INSPECTED REGULARLY
                        </h5>
						<p className='mb-15'>When you visit us stating issues with any of the comfort systems in the car like car AC not blowing the cold air, cruise control not working properly or there is an issue with the audio or lighting system, our technician will carefully inspect and provide the high quality repair services thereby enhancing your driving experience.</p>
						<p className='mb-15'>To provide luxury and comfort to our customers, we are equipped with the advanced tools and the experienced technicians to meet or exceed your demands when it comes to comfort system repair in KSA.</p>
						
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="section-area section-sp2 ServiceBox1">
          <div className="container">
            <div class="heading-bx text-center">
              <h6 class="title-ext text-primary">Why count on us</h6>
              <h2 class="title mb-0 text-uppercase">
			  For comfort system repair in Saudi Arabia?
              </h2>
            </div>
            <div className="SerGridWrap">
              <div className="row mb-10 justify-content-center">
                <div className="col-xl-6 col-sm-12 col-12 SerGrid1">
                  <div className="counter-style-1">
                    <div className="text-secondry">
                      <h2 className="text-primary">
                        <span className="counter">
                          <i class="flaticon-car-4"></i>
                        </span>
                      </h2>
                    </div>
                    <h5 className="counter-text">All services under one shelter</h5>
					<p>Car has various comfort systems and our technicians have experience in troubleshooting and sorting out the repairs with all such components.</p>
                  </div>
                </div>
				<div className="col-xl-6 col-sm-12 col-12 SerGrid1">
                  <div className="counter-style-1">
                    <div className="text-secondry">
                      <h2 className="text-primary">
                        <span className="counter">
                          <i class="flaticon-car-4"></i>
                        </span>
                      </h2>
                    </div>
                    <h5 className="counter-text">Transparent & Affordable estimates</h5>
					<p>Once our customer states any sort of comfort system repair, we will clearly inspect it and provide transparent estimates without any hidden charges</p>
                  </div>
                </div>
				<div className="col-xl-6 col-sm-12 col-12 SerGrid1">
                  <div className="counter-style-1">
                    <div className="text-secondry">
                      <h2 className="text-primary">
                        <span className="counter">
                          <i class="flaticon-car-4"></i>
                        </span>
                      </h2>
                    </div>
                    <h5 className="counter-text">Faster turnaround time</h5>
					<p>Since our technicians have undergone rigorous training in handling the various comfort systems in the car and their knowledge to handle the latest tools, it speeds up the service or repair time and eliminates the long waiting hours.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        

        <ScheduleServiceSection />
        <TestimonialSection />
        <ChooseUsSection />
        <ServicesSection />
        <Footer />
      </>
		);
	}
}

export default ComfortSystamRepair;