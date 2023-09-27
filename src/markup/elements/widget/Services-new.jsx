import React, { Component } from "react";
import { Link } from "react-router-dom";

// Images
import bg2 from "../../../images/background/bg1.png";

class ServicesNew extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
  }
  openModal() {
    this.setState({ isOpen: true });
  }

  render() {
    return (
      <>
        <section
          className="section-area section-sp2 bg-gray"
          style={{
            backgroundImage: "url(" + bg2 + ")",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-12">
                <div className="heading-bx">
                  <h2 className="title">What We Do</h2>
                  <p>
                    With our team, you will receive comprehensive care for your
                    car. We provide a wide range of car repair services that
                    encompass everything in your vehicle, from the inside to the
                    outside. By combining cutting-edge technology with years of
                    experience, we can assure you of receiving the most
                    fantastic quality car service in Abu Dhabi and Dubai.
                  </p>
                </div>
              </div>
            </div>
            <div className="ServiceWrap">
              <div className="row">
                <div className="col-md-3">
                  <div className="ServiceBoxR1 service1">
                    <div>
                      <div className="SerT1">Mechanical Services</div>
                      
                      <Link class="SerT2 btn btn-primary" href="/services">
                        View More
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="ServiceBoxR1 service2">
                    <div>
                      <div className="SerT1">Electrical Service</div>
                      
                      <Link class="SerT2 btn btn-primary" href="/services">
                        View More
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="ServiceBoxR1 service3">
                    <div>
                      <div className="SerT1">Programming & Retrofit</div>
                      
                      <Link class="SerT2 btn btn-primary" href="/services">
                        View More
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="ServiceBoxR1 service4">
                    <div>
                      <div className="SerT1">Engine Repair & Service</div>
                      
                      <Link class="SerT2 btn btn-primary" href="/services">
                        View More
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="ServiceBoxR1 service5">
                    <div>
                      <div className="SerT1">Bodyshop</div>
                      
                      <Link class="SerT2 btn btn-primary" href="/services">
                        View More
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="ServiceBoxR1 service1">
                    <div>
                      <div className="SerT1">Car Warranty</div>
                      
                      <Link class="SerT2 btn btn-primary" href="/services">
                        View More
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="ServiceBoxR1 service2">
                    <div>
                      <div className="SerT1">Service Contract</div>
                      
                      <Link class="SerT2 btn btn-primary" href="/services">
                        View More
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="ServiceBoxR1 service3">
                    <div>
                      <div className="SerT1">Mechanical Services</div>
                      
                      <Link class="SerT2 btn btn-primary" href="/services">
                        View More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default ServicesNew;
