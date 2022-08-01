import React from "react";
import images from "../constants/images";

const cardStyle = {
  width: "22rem",
  marginRight: "1em",
};
const WhatWeDo = () => {
  return (
    <section className="what-we-do" id="whatwedo">
      <div className="container">
        <h1 className="text-center text-dark mt-3">What We Do</h1>
        <div className="row d-flex justify-content-center mt-5 mb-5">
          <div className="card" style={cardStyle}>
            <img
              className="card-img-top"
              src={images.whatWeDoImage}
              alt="Card image cap"
            />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's contenttt.
              </p>
            </div>
          </div>
          <div className="card" style={cardStyle}>
            <img
              className="card-img-top"
              src={images.whatWeDoImage}
              alt="Card image cap"
            />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div className="card" style={cardStyle}>
            <img
              className="card-img-top"
              src={images.whatWeDoImage}
              alt="Card image cap"
            />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
