import React from "react";

function Services() {
  return (
    <>
      <div className="main-services-container  ">
        <div className="main-services-heading ">
          <p>Services</p>
          <p className="line"></p>
        </div>
        <div className="main-info">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
            possimus quis laborum at labore ipsam. Explicabo ut corrupti, minima
            quibusdam rem iste libero fuga, blanditiis repudiandae quam, totam
            culpa ullam!
          </p>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="services-box"></div>

            <div className="services-box mt-4"></div>
          </div>
          <div className="col-md-4">
            <div className="services-box"></div>

            <div className="services-box mt-4"></div>
          </div>
          <div className="col-md-4">
            <div className="services-box"></div>

            <div className="services-box mt-4"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
