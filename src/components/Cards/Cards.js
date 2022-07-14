import React from "react";
import simon from "./img/Simon.png";
import Balloon from "./img/Balloon.png";
import SmartBrain from "./img/SmartBrain.png";

const Cards = () => {
  return (
    <article className="flex justify-center ma6 flex-wrap ">
      <div className="ma4 ">
        <a
          className="db center mw5 black link dim "
          title=""     
          target={"_blank"} 
            rel="noreferrer"     
          href="http://maya.infinityfreeapp.com/Simon/index.html"
        >
          <h3 className="tc">Simon Game</h3>
          <img className="db  b--black br4 shadow-1" alt="Simon" src={simon} height="255"></img>
        </a>
      </div>
      <div className="ma4">
      <h3 className="tc">Balloon Game</h3>
        <a
          className="db center mw5 black link dim "
          title=""
          target={"_blank"} 
            rel="noreferrer"
          href="http://maya.infinityfreeapp.com/Balloons/index.html"
        >
          <img className="db b--black br4 shadow-1" alt="Balloon" src={Balloon}></img>
        </a>
      </div>
      <div className="ma4">
      <h3 className="tc">Smart-Brain App</h3>
        <a
          className="db center mw5 black link dim "
          title=""
          target={"_blank"} 
            rel="noreferrer"
          href="https://smart-brain987.herokuapp.com/"
        >
          <img className="db b--black br4 shadow-1" alt="SmtBrn" src={SmartBrain}></img>
        </a>
      </div>
    </article>
  );
};

export default Cards;
