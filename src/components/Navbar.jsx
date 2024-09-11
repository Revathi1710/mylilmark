import React, { useState } from "react";
import "../assets/css/components.scss";
import logo from "../assets/images/logo.png";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { RiCellphoneFill } from "react-icons/ri";
import { IoMenu, IoClose } from "react-icons/io5";

function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar_wrapper">
      <div className="nav_section">
        <div className="logo">
          <NavLink to="/">
            <img className="img1" src={logo} alt="Logo" />
          </NavLink>
        </div>

        <NavLink
          to="/home"
          className={`${location.pathname === "/" ? "active " : ""}`}
        >
          Home
        </NavLink>

        <NavLink to="/about-us">About Us</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/recipes">Recipes</NavLink>
        <NavLink to="/outlets">Outlets</NavLink>
        <NavLink to="/contact">Keep in Touch</NavLink>
        <NavLink to="/">
          <div className="for-orders">
            <div className="for-orders-img">
              <RiCellphoneFill />
            </div>
            <div>
              <b>For Orders</b> <br />
              <b>+91 9362393638</b>
            </div>
          </div>
        </NavLink>
      </div>
      <div className="mobile_nav_main_wrapper">
        <div className="logo">
          <NavLink to="/">
            <img className="img1" src={logo} alt="Logo" />
          </NavLink>
        </div>
        <div className="mobile_menu_icon" onClick={toggleSidebar}>
          <IoMenu />
        </div>

        <div className={`open_menu ${isOpen ? "open" : ""}`}>
          <div className="header">
            <div className="logo">
              <NavLink to="/">
                <img className="img1" src={logo} alt="Logo" />
              </NavLink>
            </div>
            <div className="mobile_close_icon" onClick={toggleSidebar}>
              <IoClose />
            </div>
          </div>
          <div className="main_menus">
            <NavLink
              to="/home"
              className={`${location.pathname === "/" ? "active " : ""}`}
              onClick={toggleSidebar}
            >
              Home
            </NavLink>

            <NavLink to="/about-us" onClick={toggleSidebar}>
              About Us
            </NavLink>
            <NavLink to="/products" onClick={toggleSidebar}>
              Products
            </NavLink>
            <NavLink to="/recipes" onClick={toggleSidebar}>
              Recipes
            </NavLink>
            <NavLink to="/outlets" onClick={toggleSidebar}>
              Outlets
            </NavLink>
            <NavLink to="/contact" onClick={toggleSidebar}>
              Keep in Touch
            </NavLink>
          </div>
          <div className="for-orders">
            <div className="for-orders-img">
              <RiCellphoneFill />
            </div>
            <div style={{ textAlign: "center" }}>
              <b>For Orders</b> <br />
              <b>+91 9362393638</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
