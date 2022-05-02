import React from "react";
import "./Intro.css";
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instragram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import boy from '../../img/boy.png'
import thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import glassesimoji from '../../img/glassesimoji.png'
import FloatingDiv from "../FloatingDiv/FloatingDiv";
const Intro = () => {
  return (
    <div className="intro">
      <div className="i-left">
          <div className="i-name">
              <span>Hy! I Am</span>
              <span>Andrew Thomas</span>
              <span>Fronted Developer with high level experince</span>
          </div>
          <button className="i-button button">Hire me</button>
          <div className="i-icons">
            
              <img src={Github}></img>
              <img src={LinkedIn}></img>
              <img src={Instragram}></img>

          </div>
      </div>
      <div className="i-right">
          <img src={Vector1}></img>
          <img src={Vector2}></img>
          <img src={boy}></img>
          <img src={glassesimoji}></img>

          <div style={{top:'-4%',left:'68%'}}>
            <FloatingDiv image={Crown} txt1='Web' txt2='Developer'/>
          </div>

        <div style={{top:'18rem' , left:'0rem'}}>
          <FloatingDiv image={thumbup} txt1='Best Design' txt2='Award'/>
        </div>

        <div className="blur" style={{background:'rgb(238 210 255)'}}>
          <div className="blur" style={{background:'#C1F5FF',top:'17rem',width:'21rem',height:'11rem',left:'-9rem'}}></div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
