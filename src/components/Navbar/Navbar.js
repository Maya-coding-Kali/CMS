import React from "react";
import {Link } from "react-router-dom";
const Navbar = () => {
  return (
<header className="bg-black white-80 tc pv4 avenir">
  <h1 className="mt2 mb0 baskerville i fw1 f1">Maya Kali</h1>
  <h2 className="mt2 mb0 f6 fw4 ttu tracked">Do the thing and have the power</h2>
  <nav className="bt bb tc mw7 center mt4">
    <Link className="f6 f5-l link bg-animate white-80 hover-bg-lightest-blue dib pa3 ph4-l" to="/">Home</Link>
    <a target={"_blank"} rel="noreferrer" className="f6 f5-l link bg-animate white-80 hover-bg-light-green dib pa3 ph4-l" href="https://github.com/Maya-coding-Kali"><i className="fa fa-github "> <span style={{fontFamily:"sans-serif"}}>Portfolio</span></i></a>
    <Link className="f6 f5-l link bg-animate white-80 hover-bg-light-pink dib pa3 ph4-l" to="/about">About</Link>
    <Link className="f6 f5-l link bg-animate white-80 hover-bg-light-yellow dib pa3 ph4-l" to="/contact">Contact</Link>
  </nav>
</header>
  );
};
export default Navbar;