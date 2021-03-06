import React from "react";
import "./Works.css";
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
const Works = () => {
  return (
    <div className="works">
      <div className="w-left">
        <div className="awesome">
          <span>Works for All these</span>
          <span>Brands And Clients</span>
          <spane>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste amet,
            <br />
            repudiandae debitis quo officia non est illo inventore ducimus magni
          </spane>
          <button className="button s-button">Hire Me</button>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      <div className="w-right">
        <div className="w-mainCircle">
          <div className="w-secCircle">
            <img src={Upwork} />
          </div>
          <div className="w-secCircle">
            <img src={Fiverr} />
          </div>
          <div className="w-secCircle">
            <img src={Amazon} />
          </div>
          <div className="w-secCircle">
            <img src={Shopify} />
          </div>
          <div className="w-secCircle">
            <img src={Facebook} />
          </div>
        </div>
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
