import React, { useEffect } from "react";
import banner from "../../assets/images/keepInTouchBanner.jpg";

import { FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { MdLocationPin } from "react-icons/md";
import edge2 from "../../assets/images/about/edge2.png";
import BackgroundHeader from "../../components/BackgroundHeader";
import Social from "../../components/Social";
import Button from "../../components/Button";
import { NavLink } from "react-router-dom";
// import buy from "../../assets/images/buy.png";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="contact_main_wrapper">
      <Social />
      <div className="contact_banner_wrapper">
        <img src={banner} alt="banner" />
      </div>

      <div style={{ paddingBottom: "30px" }} className="sub-head">
        <BackgroundHeader
          heading={
            <p className="sub-head-title">
              <span style={{ color: "rgb(249, 147, 27)" }}>Keep</span> In{" "}
              <span style={{ color: "rgb(249, 147, 27)" }}>Touch</span>
            </p>
          }
          background={"Contact"}
        />
      </div>
      <div className="contact_address_header">
        <div className="contact_wrapper">
          <img src={edge2} alt="edge" className="left_edge" />
          <div>
            <FaPhone
              style={{
                fontSize: "22px",
                border: "1px solid black",
                borderRadius: "50%",
                padding: "10px",
              }}
            />
            <p>+91 9362393638</p>
          </div>
          <div>
            <IoIosMail
              style={{
                fontSize: "22px",
                border: "1px solid black",
                borderRadius: "50%",
                padding: "10px",
              }}
            />
            <p>cponmurugan@gmail.com</p>
          </div>
          <div style={{ width: "300px" }}>
            <MdLocationPin
              style={{
                fontSize: "22px",
                border: "1px solid black",
                borderRadius: "50%",
                padding: "10px",
              }}
            />
            <p>Rangai Gounder St, Town Hall, Coimbatore, Tamil Nadu 641001</p>
          </div>
        </div>
        <div className="buy_now">
          {/* <img src={buy} /> */}
          <p>For Online purchase</p>
          <div className="about_us_button">
            <a href="https://mayilmark.com/" target="_blank">
              <Button text={"Click Here"} />
            </a>
          </div>
        </div>
      </div>
      <div className="main_section">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.238881426855!2d77.09721007355566!3d11.020695554643627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85716ee150079%3A0x196329b6bc0c04ed!2sMayil%20mark%20samba%20ravai%20Factory!5e0!3m2!1sen!2sin!4v1715454409344!5m2!1sen!2sin"
          width="500"
          height="350"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <form className="forms">
          <h2>
            <span style={{ color: "rgb(249, 147, 27)" }}>Drop</span> Your{" "}
            <span style={{ color: "rgb(249, 147, 27)" }}>Messages</span>
          </h2>
          <input type="text" placeholder="Enter Your Name" />
          <input type="text" placeholder="Enter Your Email" />
          <input type="text" placeholder="Enter Your Mobile No." />
          <textarea placeholder="Enter Your Message" />
          <button type="submit">Submit</button>
          <img src={edge2} alt="edge" className="right_edge" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
