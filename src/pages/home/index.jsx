import React, { useEffect, useState } from "react";

//** Asset Imports */
import "../../assets/css/main.scss";
import banner2 from "../../assets/images/home/banner1_1.png";
 import banner1 from "../../assets/images/home/banner1Mobile.png";
 import banner3 from "../../assets/images/home/banner1Tab.png";
import ricebag1 from "../../assets/images/home/ricebag1.png";
import mobilebanner1 from "../../assets/images/home/banner1m.png";

import deskbanner1 from "../../assets/images/home/banner1d.png";
import tabbanner1 from "../../assets/images/home/banner1t.png";
import mobilebanner2 from "../../assets/images/home/banner2m.png";

import deskbanner2 from "../../assets/images/home/banner2d.png";
import tabbanner2 from "../../assets/images/home/banner2t.png";
import mobilebanner3 from "../../assets/images/home/banner3m.png";

import deskbanner3 from "../../assets/images/home/banner3d.png";
import tabbanner3 from "../../assets/images/home/banner3t.png";

import ricebag2 from "../../assets/images/home/ricebag2.png";
import ricebag3 from "../../assets/images/home/ricebag3.png";
import ourTeam from "../../assets/images/home/our-team.jpg";
import founders from "../../assets/images/home/founders.jpg";
import productsImage from "../../assets/images/home/products_image.jpg";
import gramFlour from "../../assets/images/home/gram_flour.png";
import multiGrain from "../../assets/images/home/multi_grain1.png";
import ravai from "../../assets/images/products/rava.png";
import urad from "../../assets/images/products/Pulses/Urid_Dal.png";
import atta from "../../assets/images/home/atta.png";
import kachori from "../../assets/images/home/kachori.PNG";
import chef from "../../assets/images/home/chef.jpg";
import edge1 from "../../assets/images/home/edge1.png";
import edge2 from "../../assets/images/home/edge2.png";
import edge3 from "../../assets/images/home/edge3.png";
import laddu from "../../assets/images/recipes/LADDU.jpg";
import idli from "../../assets/images/recipes/Untitled-design.png";
import nutrious from "../../assets/images/home/nutritious.jpg";
import dhall from "../../assets/images/home/dhal.jpg";
import connect from "../../assets/images/home/connect.png";
import Social from "../../components/Social";
import elipse from "../../assets/images/icons/elipse.png";
// ** Third party/

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import BackgroundHeader from "../../components/BackgroundHeader";
import Button from "../../components/Button";
import { NavLink } from "react-router-dom";
import star from "../../assets/images/star.png";
import tomatto from "../../assets/images/tomatto.png";
import conn from "../../assets/images/home/connection.png";
import group from "../../assets/images/group.png";

const productsList = [
  {
    title: "Samba Ravai",
    image: ravai,
  },
  {
    title: "Wheat Flour",
    image: atta,
  },
  {
    title: "Besan Flour",
    image: gramFlour,
  },
  {
    title: "Urid Dal",
    image: urad,
  },
  {
    title: "Vermicelli",
    image: multiGrain,
  },
];

const Home = () => {
  const [selectedProduct, setSelctedProduct] = useState(productsList[0]);

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  return (
    <div className="home_main_wrapper">
      {/* <WhatsAppLink /> */}
      <Social />
      <div className="carousel_wrapper">
      <Carousel 
      additionalTransfrom={0}
      arrows={false}
      autoPlay={true}
      autoPlaySpeed={3000}
      centerMode={false}
      className="carousel_comp desktop-banners"
      containerClass="container"
      dotListClass="dots"
      draggable
      infinite
      itemClass="item"
      keyBoardControl
      minimumTouchDrag={80}
      responsive={{
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
        },
      }}
      rewind={false}
      showDots={true}
      sliderClass=""
      slidesToSlide={1}
      swipeable
    >
      {/* Desktop Banners */}
     
        <img src={deskbanner1} alt="Desktop Banner 1" />
        <img src={deskbanner2} alt="Desktop Banner 2" />
        <img src={deskbanner3} alt="Desktop Banner 3" />
        <img src={mobilebanner1} alt="Mobile Banner 1" />
        <img src={mobilebanner2} alt="Mobile Banner 2" />
        <img src={mobilebanner3} alt="Mobile Banner 3" />
        <img src={tabbanner1} alt="Tablet Banner 1" />
        <img src={tabbanner2} alt="Tablet Banner 2" />
        <img src={tabbanner3} alt="Tablet Banner 3" />
    

     
    </Carousel>
    <Carousel
      additionalTransfrom={0}
      arrows={false}
      autoPlay={true}
      autoPlaySpeed={3000}
      centerMode={false}
      className="carousel_comp tab-banners"
      containerClass="container"
      dotListClass="dots"
      draggable
      infinite
      itemClass="item"
      keyBoardControl
      minimumTouchDrag={80}
      responsive={{
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
        },
      }}
      rewind={false}
      showDots={true}
      sliderClass=""
      slidesToSlide={1}
      swipeable
    >
     
    

     
        <img src={tabbanner1} alt="Tablet Banner 1" />
        <img src={tabbanner2} alt="Tablet Banner 2" />
        <img src={tabbanner3} alt="Tablet Banner 3" />
      

      
    </Carousel>
    <Carousel
      additionalTransfrom={0}
      arrows={false}
      autoPlay={true}
      autoPlaySpeed={3000}
      centerMode={false}
      className="carousel_comp mobile-banners"
      containerClass="container"
      dotListClass="dots"
      draggable
      infinite
      itemClass="item"
      keyBoardControl
      minimumTouchDrag={80}
      responsive={{
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
        },
      }}
      rewind={false}
      showDots={true}
      sliderClass=""
      slidesToSlide={1}
      swipeable
    >
     
    


        <img src={mobilebanner1} alt="Mobile Banner 1" />
        <img src={mobilebanner2} alt="Mobile Banner 2" />
        <img src={mobilebanner3} alt="Mobile Banner 3" />
     
    </Carousel>
      </div>
      <div className="home_main_section">
        <div className="who_we_are_wrapper">
          <header className="header">
            <img
              style={{ margin: "0px 0px 0px -10%" }}
              src={ricebag1}
              alt="ricebag"
              className="ricebag1"
            />
            <img
              style={{
                width: "250px",
                height: "250px",
                position: "absolute",
                top: "140%",
                left: "7%",
              }}
              src={tomatto}
              alt="tomatto"
            />
            <img className="star " style={{}} src={star} alt="star" />
            {/* <div className="tomatto-cont">
              <img className="tomatto " src={tomatto} alt="tomatto" />
            </div> */}
            <img
              style={{
                top: "-16%",
                right: "28%",
                width: "800px",
                position: "absolute",
                opacity: "1",
                zIndex: "-1",
              }}
              src={conn}
              alt="connection"
            />
            <div style={{ margin: "0px 0px 0px -25%" }}>
              <BackgroundHeader
                heading={
                  <p className="sub-head-title">
                    <span style={{ color: "rgb(249, 147, 27)" }}>Who</span> We{" "}
                    <span style={{ color: "rgb(249, 147, 27)" }}>are</span>
                  </p>
                }
                background={"Aboutus"}
              />
            </div>
          </header>
          <img src={edge3} className="right_edge" />

          <div className="main">
            <div className="content">
              <p>
                Brand Mayilmark was birthed in 1960 by our visionary founder,
                Mr. Vanniarajan, amidst the vibrant landscapes of Coimbatore,
                Tamil Nadu, India, under the distinguished banner of
                Ponmurugan Dhall Mills.
              </p>
              <div className="about_us_button">
                <NavLink to="/about-us">
                  <Button text={"Click Story"} />
                </NavLink>
              </div>
            </div>

            <div className="images">
              <img src={ourTeam} alt="our-team" className="our_team" />
              <img src={founders} alt="our-team" className="founders" />
            </div>
          </div>
        </div>
        <img
          style={{
            width: "400px",
            height: "400px",
            position: "absolute",
            top: "55%",
            left: "5%",
            transform: "scaleX(-1)",
          }}
          src={star}
          alt="star"
        />
        <img
          style={{
            position: "absolute",
            width: "200px",
            height: "200px",
            right: "2%",
            top: "47%",
          }}
          src={group}
          alt=""
        />
        <img
          style={{
            top: "38%",
            right: "6%",
            width: "1500px",
            position: "absolute",
            opacity: "1",
            zIndex: "-1",
            transform: "scaleX(-1)",
          }}
          src={conn}
          alt="connection"
        />
        <div className="top_selling_products">
          <header className="header">
            <img src={ricebag2} alt="ricebag" className="ricebag1" />
            <div style={{ margin: "0px 0px 0px 30%" }}>
              <BackgroundHeader
                heading={
                  <p className="sub-head-title">
                    <span
                      style={{
                        color: "rgb(249, 147, 27)",
                      }}
                    >
                      Top
                    </span>{" "}
                    Selling{" "}
                    <span style={{ color: "rgb(249, 147, 27)" }}>Products</span>
                  </p>
                }
                background={"Products"}
              />
            </div>
          </header>
          <p className="content">
            {" "}
            Explore our top-selling products, created for your preferences. From
            mouth-watering samba ravai to vermicelli, each meal combines classic
            flavors with high-quality ingredients. Whether you want a crispy
            pakora with gram flour or a rich dal with urid dal, you're in for a
            one-of-a-kind experience. Explore our carefully picked collection,
            handcrafted in our own kitchen to suit your preferences.
          </p>
          <div className="products_section">
            <img src={edge3} className="left_edge" />
            <div className="main_image">
              <img src={selectedProduct.image} alt="selected_image" />
            </div>
            <div className="products">
              <div className="selectable_products">
                <ul class="wrapper">
                  {productsList.map((item) => {
                    return (
                      <li
                        className={` product ${
                          selectedProduct.title === item.title
                            ? "active_product"
                            : ""
                        }`}
                        onClick={() => {
                          setSelctedProduct(item);
                        }}
                      >
                        <span
                          className={`tooltip ${
                            selectedProduct.title === item.title
                              ? "active_tooltip"
                              : ""
                          }`}
                        >
                          {item.title}
                        </span>
                        <img src={item.image} alt={item.image} />
                      </li>
                    );
                  })}
                </ul>
              </div>
              <img
                style={{
                  width: "400px",
                  height: "300px",
                  objectPosition: "80% 62%",
                }}
                src={productsImage}
                alt="products_image"
                className="products_image"
              />
              <div className="view_products">
                <NavLink to="/products">
                  <Button text={"View All Products"} />
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        <div className="recipes_wrapper">
          <header className="header">
            <img
              style={{ left: "82%", marginTop: "-20px" }}
              src={ricebag3}
              alt="ricebag"
              className="ricebag1"
            />
            <img
              style={{ display: "none" }}
              src={edge3}
              className="right_edge"
            />
            <img
              style={{
                width: "300px",
                height: "300px",
                position: "absolute",
                top: "7%",
                right: "0%",
                zIndex: "-1",
                transform: "scaleX(-1)",
              }}
              src={tomatto}
              alt="tomatto"
            />
            <div className="recipe-head">
              <BackgroundHeader
                heading={
                  <p className="sub-head-title">
                    <span style={{ color: "rgb(249, 147, 27)" }}>
                      Effort -{" "}
                    </span>
                    Lite{" "}
                    <span style={{ color: "rgb(249, 147, 27)" }}>Recipes </span>
                  </p>
                }
                background={"Recipes"}
              />
            </div>
          </header>
          <p
            style={{ textAlign: "left", marginLeft: "1%" }}
            className="content"
          >
            {" "}
            With our diverse product range, preparing snacks and dishes is
            effortless, enhanced by curated recipes. Utilize our Gram Flour for
            delightful sweets and crispy snacks, while exploring gourmet
            breakfast options like Idli with our Urad Dal and Vermicelli.
            Experience culinary excellence with our top-quality offerings.
          </p>
          <img
            style={{
              width: "300px",
              height: "300px",
              zIndex: "-1",
              position: "absolute",
              top: "25%",
              left: "-6%",
            }}
            src={star}
            alt="star"
          />
          <div className="images">
            <img src={edge3} className="right_edge" />
            <div className="left">
              <img src={chef} alt="" className="chef" />
              <NavLink to="/recipes">
                <Button text={"View All Recipes"} />
              </NavLink>
            </div>
            <div className="connector">
              <img src={connect} alt="..." className="connect" />
            </div>
            <div className="right">
              <div className="wrap">
                <div className="end-recip">
                  <img
                    style={{ zIndex: "1" }}
                    src={laddu}
                    alt="laddu deripe"
                    className="recip"
                  />
                  <div className="end-recip-right">
                    <img src={idli} alt="rava idli" className="recip" />
                    <img src={nutrious} alt="nutrious" className="recip" />
                  </div>
                  <img
                    style={{ objectFit: "inherit" }}
                    src={dhall}
                    alt="dhall"
                    className="recip"
                  />
                </div>
                {/* <img src={kachori} alt="" className="kachori" />
                <img src={atta} alt="" className="atta" /> */}
              </div>
              {/* <p>Kachori</p> */}
            </div>

            <img
              style={{
                position: "absolute",
                width: "300px",
                height: "300px",
                right: "50%",
                bottom: "-74%",
                zIndex: "-1",
              }}
              src={tomatto}
              alt="tomato"
            />
            <img
              style={{
                position: "absolute",
                top: "80%",
                right: "20%",
                width: "300px",
                height: "300px",
              }}
              src={group}
              alt="group"
            />
            <img
              style={{
                top: "55%",
                width: "400px",
                position: "absolute",
                right: "-340px",
                height: "400px",
              }}
              src={star}
              alt="star"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
