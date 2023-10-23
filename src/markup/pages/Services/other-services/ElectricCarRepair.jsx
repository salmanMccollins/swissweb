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

class ElectricCarRepair extends Component{
	
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
                  <span>ELECTRIC CAR REPAIR SERVICES</span>
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
                      ELECTRIC CAR REPAIR SERVICES
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
                    <WidgetBrochure />

                    <WidgetHelp />
                  </aside>
                </div>
                <div className="col-lg-8 col-md-7">
                  <div className="mb-10">
                    <div className="head-text mb-30">
                      <h4 className="title mb-10">
                      EXPERIENCE THE HIGH-STANDARD ELECTRIC CAR SERVICE IN SAUDI ARABIA

                      </h4>
                      <p className="mb-15">Electric cars have become more popular and the total sale has gradually increased across the world. With easier maintenance, electric cars offer the benefits of overall cost saving and guarantee numerous environmental benefits.</p>
                      <p className="mb-15">Royal Swiss Auto Services, a valuable alternative providing a dealership range of electric car servicing and repair in Saudi Arabia through the qualified team of technicians in an efficient way.</p>
					  <p className="mb-15">

                      We specialise in servicing both electric and hybrid vehicles.

</p>
<h4 className="title mb-10">
MOST COMPREHENSIVE ELECTRIC CAR MAINTENANCE IN SAUDI ARABIA UNDER ONE SHELTER

                      </h4>
                      <p className="mb-15">

                      We strive to provide all types of electric vehicle services and body repair and make our customers have a unique and satisfied experience by using high-end diagnostic tools and equipment.

</p>

                    </div>
                    <div className="row">
                   
                      <div className="col-xl-12">
                        <h5 class="title mb-15 text-uppercase">
						At our electric car workshop in Saudi Arabia, we are specialized in offering the following services:
                        </h5>
                        <ul className="list-check-squer">
                          <li>Electric car battery maintenance</li>
                          <li>
						  Electric car motor inspection
                          </li>
                          <li>
						  Electric car software updates
                          </li>
                          <li>
                          Wheel alignment
                          </li>
						  <li>
						  Tire rotation & pressure check
						  </li>
						  <li>Air conditioning system maintenance</li>
                          <li>Suspension maintenance</li>
                          <li>Body repair services</li>
                          <li>And all other mechanical and electrical services needed for the electric & hybrid vehicles.	</li>
                        </ul>
						<h5 class="title mb-15 text-uppercase">
						ELECTRIC VEHICLE MAINTENANCE IS EASIER THAN YOU THINK
                        </h5>
						<p className='mb-15'>The presence of fewer parts and less complex systems with the regenerative braking system makes electric car maintenance easier and cost-efficient than fuel engines. Yet taking up the regular maintenance and services to protect certain important components that are specific to electric cars like electric motors, batteries and charging systems are highly essential.</p>
						
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
              <h6 class="title-ext text-primary">Why choose us</h6>
              <h2 class="title mb-0 text-uppercase">
			  for your electric car maintenance, servicing and repair in Saudi Arabia?
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
                    <h5 className="counter-text">Specifically trained technicians</h5>
					<p>The technicians at our workshop are specifically trained to handle various makes and models of electric cars. So the diagnosis, repair or service can be provided at a faster turnaround time with greater precision.</p>
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
                    <h5 className="counter-text">A well-equipped workshop for electric cars</h5>
					<p>
Our workshop has all the latest diagnostic tools and equipment specifically needed to handle electric cars and to satisfy all-electric car maintenance needs in Saudi Arabia.
</p>
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
                    <h5 className="counter-text">Greater customer satisfaction</h5>
					<p>Whatever the work we carry on, whether it may be your routine electric car service or major repairs, we always excel in it ensuring 100% satisfaction.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-area BrandFaq">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <Accordion
                  defaultActiveKey="0"
                  className="accordion ttr-accordion style1"
                >
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <i className="fa fa-question-circle"></i>
					  How often does the electric car need to be serviced?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="mb-0">
                      It depends on the make and model of the electric car you hold. But it is always essential to take a deeper look at your owner’s manual and get the services done as per the manufacturer's guidelines.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      <i className="fa fa-question-circle"></i>
                      How much does it cost to get your electric cars serviced in Saudi Arabia?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="mb-0">
					  Since electric cars have fewer components when compared to traditional fuel cars, the maintenance of electric cars is cost-effective. However, the exact cost of maintenance depends on the type of electric car you hold, its condition and the service center you choose.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
              <div className="col-lg-6">
                <Accordion
                  defaultActiveKey="0"
                  className="accordion ttr-accordion style1"
                >
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <i className="fa fa-question-circle"></i>
					  Where can I get my electric car services in Saudi Arabia?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="mb-0">
					  Always choose the service center that has all the necessary equipment and the technicians specifically trained to handle electric cars.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      <i className="fa fa-question-circle"></i>
					  What kind of braking system is present in electric cars?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="mb-0">
					  The regenerative braking system is mostly found in electric vehicles. The kinetic energy generated by braking the vehicle is converted to electrical power which in turn charges the high voltage battery.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
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

export default ElectricCarRepair;