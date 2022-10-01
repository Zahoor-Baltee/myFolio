import React from "react";

function About() {
  return (
    <>
      <div className="main-about-container">
        <div className="main-about-heading">
          <p>About</p>
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
            <div className="image-box-about"></div>
          </div>
          <div className="col-md-8">
            <div className="main-about-data">
              <div className="main-about-heading">
                <p>MERN Stack And React Native Developer</p>
              </div>
              <div className="main-about-text">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Beatae quae voluptates exercitationem explicabo culpa aperiam
                  quaerat cum error commodi! Rem.
                </p>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <ul className="about-list">
                    <li>Birthday: 16 June 2000</li>
                    <li>Phone: 03429493874</li>
                    <li>City: Karachi</li>
                    <li>Country: Pakistan</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul className="about-list">
                    <li>Age: 22 Year</li>
                    <li>Email: Zahoorabbas360@gmail.com</li>
                    <li>Degree: Master</li>
                  </ul>
                </div>
              </div>
              <div className="main-about-text">
              <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Beatae quae voluptates exercitationem explicabo culpa aperiam
                  quaerat cum error commodi! Rem. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
