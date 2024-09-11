import React from "react";
import "../assets/css/components.scss";
import Logo from "../assets/images/logo.png";
import { NavLink } from "react-router-dom";
import { FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

const Footer = () => {
  return (
    <div className="footer_main_wrapper">
      <div className="footer_wrapper">
        <div className="logo_section">
          <img src={Logo} alt="logo" />
        </div>
        <div className="menu_section">
          <ul>
            <li className="footer-title">Our Menu</li>
            <li>
              <NavLink to="/home">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/products">Products</NavLink>
            </li>
            <li>
              <NavLink to="/recipes">Recipes</NavLink>
            </li>
            <li>
              <NavLink to="/outlets">Outlets</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Keep In Touch</NavLink>
            </li>
          </ul>
        </div>
        <div className="products_section">
          <ul>
            <li className="footer-title">Our Products</li>
            <div className="product-list">
              <div>
                <li>
                  <NavLink to="/products">Rava</NavLink>
                </li>
                <li>
                  <NavLink to="/products">Flour</NavLink>
                </li>
                <li>
                  <NavLink to="/products">Vermicelli</NavLink>
                </li>
                <li>
                  <NavLink to="/products">Millets</NavLink>
                </li>
                <li>
                  <NavLink to="/products">Instant Mix</NavLink>
                </li>
              </div>
              <div>
                <li>
                  <NavLink to="/products">Pulses</NavLink>
                </li>
                <li>
                  <NavLink to="/products">Rice</NavLink>
                </li>
                <li>
                  <NavLink to="/products">Spices</NavLink>
                </li>

                <li>
                  <NavLink to="/products">Other Products</NavLink>
                </li>
              </div>
            </div>
          </ul>
        </div>
        <div className="contact_section">
          <ul>
            <li className="footer-title">Contact Us</li>
            <li className="contact">
              <FaPhone fontSize={"15px"} />
              <span>Primary - 9362393638</span>
            </li>
            <li className="contact">
              <FaPhone fontSize={"15px"} />
              <span>Office - 0422 2393638</span>
            </li>
            <li className="contact">
              <FaPhone fontSize={"15px"} />
              <span>Mill - 2688638</span>
            </li>
            <li className="contact">
              <IoIosMail fontSize={"20px"} />
              <a href="mailTo:cponmurugan@gmail.com">
                <span>cponmurugan@gmail.com</span>
              </a>
            </li>
            <li className="contact">
              <IoIosMail fontSize={"20px"} />
              <a href="mayilmarksambaravai@yahoo.co.in">
                <span>mayilmarksambaravai@yahoo.co.in</span>
              </a>
            </li>
            <p>Rangai Gounder St, Town Hall, Coimbatore, Tamil Nadu 641001</p>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
