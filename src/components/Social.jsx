import React from "react";
import whatsapp from "../assets/images/social/whatsapp.jpg";
import instagram from "../assets/images/social/instagram.jpg";
import facebook from "../assets/images/social/facebook.jpg";
// import buy_now from "../assets/images/buy.png";

export default function Social() {
  return (
    <div className="social">
      <a href="https://mayilmark.com/" target="_blank">
        <div className="icon-4">
          {/* <img className="icon " src={buy_now} alt="" /> */}
        </div>
      </a>
      <div>
        <img className="icon icon-1" src={whatsapp} alt="wa" />
      </div>
      <div>
        <img className="icon icon-2" src={instagram} alt="ig" />
      </div>
      <div>
        <img className="icon icon-3" src={facebook} alt="fb" />
      </div>
    </div>
  );
}
