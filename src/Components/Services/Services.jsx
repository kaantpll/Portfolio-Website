import React from "react";
import "./Service.css";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";



const Services = () => {
  return (
    <div className="services" id='Services'>
      <div className="awesome">
        <span>My Awesome</span>
        <span>services</span>

        <spane>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste amet,
          explicabo aspernatur dolor aperiam, expedita, aut impedit enim
          doloremque eveniet?
          <br />
          repudiandae debitis quo officia non est illo inventore ducimus magni
        </spane>
        <button className="button s-button">Download Cv</button>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      <div className="cards">
        <div style={{ left: "15rem" }}>
          <Card
            emoji={HeartEmoji}
            heading={"Design"}
            detail={"Figma , Sketch , Photoshop,Adobe X"}
          />
        </div>
        <div style={{ top: "12rem", left: "-4rem" }}>
          <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={"Html , Css , JavaScript , React"}
          />
        </div>
        <div style={{ top: "19rem", left: "13rem" }}>
          <Card
            emoji={Humble}
            heading={"UI/UX"}
            detail={"Html , Css , JavaScript , React"}
          />
        </div>
        <div
          className="blue s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
