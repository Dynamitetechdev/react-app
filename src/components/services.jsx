import React from "react";
import images from "../constants/images";

const Services = () => {
  return (
    <section>
      <div className="container-fluid bgg-dark text-white" id="service">
        <div className="container">
          <h1 className="text-center mt-5">Services</h1>

          <div className="services">
            <div className="row mt-5 pt-5">
              <div className="col-md-6 d-flex align-items-center">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magni, culpa? Fugit adipisci eos voluptatum numquam beatae
                  quidem! Eius pariatur magni ex ducimus doloremque accusamus,
                  rem, numquam dolore quam, animi tempore!
                </p>
              </div>
              <div className="col-md-6">
                <img src={images.whatWeDoImage} width="500" alt="" />
              </div>
            </div>
            <div className="row mt-5 pt-5">
              <div className="col-md-6">
                <img src={images.whatWeDoImage} width="500" alt="" />
              </div>
              <div className="col-md-6 d-flex align-items-center">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magni, culpa? Fugit adipisci eos voluptatum numquam beatae
                  quidem! Eius pariatur magni ex ducimus doloremque accusamus,
                  rem, numquam dolore quam, animi tempore!
                </p>
              </div>
            </div>
            <div className="row mt-5 pb-5 pt-5">
              <div className="col-md-6 d-flex align-items-center">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magni, culpa? Fugit adipisci eos voluptatum numquam beatae
                  quidem! Eius pariatur magni ex ducimus doloremque accusamus,
                  rem, numquam dolore quam, animi tempore!
                </p>
              </div>
              <div className="col-md-6">
                <img src={images.whatWeDoImage} width="500" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
