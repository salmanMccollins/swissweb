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
                  <h2 className="title">What We Do At Royal Swiss Auto Services</h2>
                  <p>
                  We are committed to provide hassle free vehicle maintenance experience for our customers by providing various electrical, mechanical and body shop services needed for your car under one roof at our well-equipped car service center in Saudi Arabia. 

While assuring quality workmanship and superior customer service, we provide every minor and major service or repair that your car might need at a faster turnaround time.

                  </p>
                </div>
              </div>

            </div>
            <div className="ServiceWrap">
              <div className="row">
                <div className="col-md-3">
                  <div className="ServiceBoxR1 service1">
                    <div>
                      <div className="SerT1">Body & Painting</div>
                      
                      <Link class="SerT2 btn btn-primary" to="/services/#s2">
                        View More
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="ServiceBoxR1 service2">
                    <div>
                      <div className="SerT1">Electrical Repair</div>
                      
                      <Link class="SerT2 btn btn-primary" to="/services/#s3">
                        View More
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="ServiceBoxR1 service8">
                    <div>
                      <div className="SerT1">Electrical Car Repair</div>
                      
                      <Link class="SerT2 btn btn-primary" to="/services/other-services/electric-car-repair">
                        View More
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="ServiceBoxR1 service3">
                    <div>
                      <div className="SerT1">Major Services</div>
                      
                      <Link class="SerT2 btn btn-primary" to="/packages/major-service">
                        View More
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="ServiceBoxR1 service4">
                    <div>
                      <div className="SerT1">Minor Services</div>
                      
                      <Link class="SerT2 btn btn-primary" to="/packages/minor-service">
                        View More
                      </Link>
                    </div>
                  </div>
                </div>
                
                <div className="col-md-3">
                  <div className="ServiceBoxR1 service6">
                    <div>
                      <div className="SerT1">Mechanical Services</div>
                      
                      <Link class="SerT2 btn btn-primary" to="/services/mechanical-repair/axil-or-drift-shaft-repair">
                        View More
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="ServiceBoxR1 service7">
                    <div>
                      <div className="SerT1">Car Recovery</div>
                      
                      <Link class="SerT2 btn btn-primary" to="/services">
                        View More
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="ServiceBoxR1 service5">
                    <div>
                      <div className="SerT1">Service Contract</div>
                      
                      <Link class="SerT2 btn btn-primary" to="/services">
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
