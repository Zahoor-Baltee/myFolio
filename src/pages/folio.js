import React from "react";
import {Link} from "react-router-dom"
function Folio() {
  return (
    <>
      <div className="main-skills-container  ">
        <div className="main-skills-heading ">
          <p>Portfolio</p>
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
            <Link to="">
              <div className="folio-box1"></div>
            </Link>
            <Link to="">
              <div className="folio-box2 mt-4"></div>
            </Link>
          </div>
          <div className="col-md-4">
            <Link to="">
              <div className="folio-box3"></div>
            </Link>
            <Link to="">
              <div className="folio-box4 mt-4"></div>
            </Link>
          </div>
          <div className="col-md-4">
            <Link to="https://abbas-dc091.web.app/">

              <div className="folio-box5"></div>
            </Link>
            <Link to="">
              <div className="folio-box6 mt-4"></div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Folio;
