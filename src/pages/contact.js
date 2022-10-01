import React from "react";
import { GoLocation } from "react-icons/go";
import { BsEnvelope } from "react-icons/bs";
import { BsPhone } from "react-icons/bs";

function Contact() {
  return (
    <>
      <div className="main-services-container  ">
        <div className="main-services-heading ">
          <p>Contact</p>
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
          <div className="col-md-5 contact-main-inn">
            <div className="contact-main">
              <div className="all-data-padd-start ps-2">
                <div className="location">
                  <div className="iconsss">
                    <GoLocation size={25} />
                  </div>
                  <div className="location-data">
                    <h4>Location</h4>
                    <p>Manzoor Colony Karachi,Pakistan</p>
                  </div>
                </div>
                <div className="email d-flex">
                  <div className="iconsss">
                    <BsEnvelope size={25} />
                  </div>
                  <div className="location-data">
                    <h4>Email</h4>
                    <p>zahoorabbas360@gmail.com</p>
                  </div>
                </div>
                <div className="phone d-flex">
                  <div className="iconsss">
                    <BsPhone size={25} />
                  </div>
                  <div className="location-data">
                    <h4>Call</h4>
                    <p>03429493874</p>
                  </div>
                </div>
              </div>
              <div className="map mb-1">
                <iframe
                // eslint-disable-next-line
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.193799664208!2d67.08575251473492!3d24.857229734055448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33d2ce07a406f%3A0x4e167b5e892de9e1!2sNyf%20library!5e0!3m2!1sen!2s!4v1664347919425!5m2!1sen!2s"
                  width="350"
                  height="290"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  
                ></iframe>
              </div>
            </div>
          </div>
          <div className="col-md-7 contact-main-info">
            <form class="row g-3">
              <div class="col-md-6">
                <label for="inputEmail4" class="form-label">
                  Name
                </label>
                <input type="text" class="form-control" id="inputEmail4" />
              </div>
              <div class="col-md-6">
                <label for="inputEmail4" class="form-label">
                  Email
                </label>
                <input type="email" class="form-control" id="inputEmail4" />
              </div>

              <div class="col-12">
                <label for="inputAddress2" class="form-label">
                  Subject
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="inputAddress2"
                  placeholder=""
                />
                <label for="exampleFormControlTextarea1" class="form-label">
                  Message
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="8"
                ></textarea>
              </div>

              <div class="col-12">
                <button type="submit" class="btn btn-primary">
                 Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
