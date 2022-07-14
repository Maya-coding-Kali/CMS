import React from "react";
import simon from "./img/Simon.png";
import Balloon from "./img/Balloon.png";
import SmartBrain from "./img/SmartBrain.png";
import "./Cards.css"
const Cards = () => {
  return (
    <article className="flex justify-center main-space flex-wrap ">
      <div className="space">
          <h3 className="tc">Simon Game</h3>
        <a
          className=""
          title=""     
          target={"_blank"} 
            rel="noreferrer"     
          href="http://maya.infinityfreeapp.com/Simon/index.html"
        >
          <img className="db b--black br4 my-image" alt="Simon" src={simon}></img>
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
          <img className="db b--black br4 shadow-1 my-image" alt="Balloon" src={Balloon} ></img>
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
          <img className="db b--black br4 shadow-1 my-image" alt="SmtBrn" src={SmartBrain}></img>
        </a>
      </div>
    </article>
  );
};

export default Cards;
