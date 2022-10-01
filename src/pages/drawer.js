import React from "react";

import { AiOutlineHome } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { MdOutlineContactPage } from "react-icons/md";
import { BsWindowDock } from "react-icons/bs";
import { RiCustomerService2Line } from "react-icons/ri";
import { BiMessage } from "react-icons/bi";
import { BsFacebook } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { RiTwitterLine } from "react-icons/ri";
import Home from "./application";
import About from "./page";
import Skills from "./skills";
import Folio from "./folio";
import Services from "./services";
import Contact from "./contact";
import { Routes, Route, Link } from "react-router-dom";

function Drawer() {
  return (
    <>
      <div className="fluid-container w-100">
        <div className="row">
          <div className="col-md-3  sticky-drawer">
            <div className="image-box">
              <div className="image-outer">
                <div className="image-inner"></div>
              </div>
            </div>
            <div className="name-text">
              <p>Zahoor Abbas</p>
            </div>
            <div className="social-media-icons ">
              <div className="facebook-icon">
                <Link className="text-dark" to="/">
                  <BsFacebook size={20} />
                </Link>
              </div>
              <div className="linkedin-icon">
                <FaLinkedin size={20} />
              </div>
              <div className="github-icon">
                <BsGithub size={20} />
              </div>
              <div className="insta-icon">
                <BsInstagram size={20} />
              </div>
              <div className="twitter-icon">
                <RiTwitterLine size={20} />
              </div>
            </div>
            <div className="list-nav">
              <ul className="main-list">
                <li className="inner-list">
                  <Link to="/">
                    <AiOutlineHome size={20} />
                    <p>Home</p>
                  </Link>
                </li>
                <li className="inner-list">
                  <Link to="/about">
                    <BiUser size={20} />
                    <p>About</p>
                  </Link>
                </li>
                <li className="inner-list">
                  <Link to="/">
                    <MdOutlineContactPage size={20} />
                    <p>Resume</p>
                  </Link>
                </li>
                <li className="inner-list">
                  <Link to="/folio">
                    <BsWindowDock size={20} />
                    <p>Portfolio</p>
                  </Link>
                </li>
                <li className="inner-list">
                  <Link to="/services">
                    <RiCustomerService2Line size={20} />
                    <p>Services</p>
                  </Link>
                </li>
                <li className="inner-list">
                  <Link to="/contact">
                    <BiMessage size={20} />
                    <p>contact</p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-9 main-all-data">
            
              <Routes>
              <Route path="/skill" element={<Skills />}/>
              <Route path="/about" element={<About />}/>
              <Route path="/" element={<Home />}/>
              <Route path="/folio" element={<Folio />}/>
              <Route path="/services" element={<Services />}/>
              <Route path="/contact" element={<Contact />}/>
              </Routes>
           
          </div>
        </div>
      </div>
    </>
  );
}

export default Drawer;
