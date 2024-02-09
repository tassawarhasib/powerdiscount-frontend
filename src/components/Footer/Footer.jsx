import React from "react";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";

import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="col">
          <div className="title">About</div>
          <div className="text">
            We pick the best quality accessories for you. find your perfect match and elevate your experience today!
          </div>
        </div>

        <div className="col">
          <div className="title">Contact</div>
          <div className="c-item">
            <FaLocationArrow />
            <div className="text">Sabzibagh, Patna, Bihar, India, 800006.</div>
          </div>

          <div className="c-item">
            <FaMobileAlt />
            <div className="text">Phone: +91-7488970171</div>
          </div>

          <div className="c-item">
            <FaEnvelope />
            <div className="text">Email: powerdiscount@gmail.com</div>
          </div>
        </div>

        <div className="col">
          <div className="title">Categories</div>
          <span className="text">Headphones</span>
          <span className="text">Smart Watches</span>
          <span className="text">Bluetooth Speakers</span>
          <span className="text">Wireless Earbuds</span>
          <span className="text">Home Theatre</span>
          <span className="text">Projectors</span>
        </div>

        <div className="col">
          <div className="title">Pages</div>
          <span className="text">Headphones</span>
          <span className="text">Smart Watches</span>
          <span className="text">Bluetooth Speakers</span>
          <span className="text">Wireless Earbuds</span>
          <span className="text">Home Theatre</span>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="bottom-bar-content">
          Power Discount &#169;2023 CREATED BY Tassawar Hasib
          <img src={Payment} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
