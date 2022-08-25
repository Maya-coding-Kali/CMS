import React from "react";
import simon from "./img/Simon.png";
import Balloon from "./img/Balloon.png";
import SmartBrain from "./img/SmartBrain.png";
import HomeMadeCMS from "./img/HomeMade-CMS.png";
import BattleShip from './img/BattleShip.png'
import SpaceShooter from './img/SpaceShooter.png'
import "./Cards.css";
const Cards = () => {
  return (
    <div>
      {/* <h1 className="tc underline ma5">Projects</h1> */}
      <article className="flex justify-center main-space flex-wrap ">
        <div className="space">
          <h3 className="tc">Home Made CMS</h3>
          <a
            className=" "
            title=""
            target={"_blank"}
            rel="noreferrer"
            href="https://mighty-sea-98665.herokuapp.com/"
          >
            <img
              className="db b--black br4 shadow-1 my-image"
              alt="CMS"
              src={HomeMadeCMS}
            ></img>
          </a>
        </div>
        <div className="space">
          <h3 className="tc">Space Shooter</h3>
          <a
            className=" "
            title=""
            target={"_blank"}
            rel="noreferrer"
            href="https://github.com/Maya-coding-Kali/SpaceShooter-Sample"//this
          >
            <img
              className="db b--black br4 shadow-1 my-image"
              alt="Balloon"
              src={SpaceShooter}
            ></img>
          </a>
        </div>
        <div className="space">
          <h3 className="tc">Battle Ship</h3>
          <a
            className=" "
            title=""
            target={"_blank"}
            rel="noreferrer"
            href="https://github.com/Maya-coding-Kali/BattleShip"
          >
            <img
              className="db b--black br4 shadow-1 my-image"
              alt="Balloon"
              src={BattleShip}
            ></img>
          </a>
        </div>
        <div className="space">
          <h3 className="tc">Smart-Brain App</h3>
          <a
            className=""
            title=""
            target={"_blank"}
            rel="noreferrer"
            href="https://smart-brain987.herokuapp.com/"
          >
            <img
              className="db b--black br4 shadow-1 my-image"
              alt="SmtBrn"
              src={SmartBrain}
            ></img>
          </a>
        </div>
        <div className="space">
          <h3 className="tc">Simon Game</h3>
          <a
            className=""
            title=""
            target={"_blank"}
            rel="noreferrer"
            href="http://maya.infinityfreeapp.com/Simon/index.html"
          >
            <img
              className="db b--black br4 shadow-1 my-image"
              alt="Simon"
              src={simon}
            ></img>
          </a>
        </div>
        <div className="space">
          <h3 className="tc">Balloon Game</h3>
          <a
            className=" "
            title=""
            target={"_blank"}
            rel="noreferrer"
            href="http://maya.infinityfreeapp.com/Balloons/index.html"
          >
            <img
              className="db b--black br4 shadow-1 my-image"
              alt="Balloon"
              src={Balloon}
            ></img>
          </a>
        </div>
      </article>
    </div>
  );
};

export default Cards;
