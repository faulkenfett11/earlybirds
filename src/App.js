import React, { Component } from "react";
import "./App.css";
import ebcbLogo from "./pictures/EBCBshirtLogo.png";
import logo from "./pictures/Tshirtlogonoatx.png";
import {
  FaTrademark,
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagram,
  FaAngleDoubleDown
} from "react-icons/fa";

class App extends Component {
  render() {
    return (
      <div className="main">
        <div className="App">
          <div className="NavBarContainer">
            <div className="menu-icon">
              <label for="toggle" />
              <input id="toggle" type="checkbox" />
              <div className="icon" />
              <ul className="menu">
                <a className="h3nav" href="#about">
                  ABOUT US
                </a>
                <a className="h3nav" href="#coffee">
                  OUR COFFEE
                </a>
                <a className="h3nav" href="#schedule">
                  SCHEDULE
                </a>
                <a className="h3nav" href="#contact">
                  CONTACT US
                </a>
              </ul>
            </div>
          </div>
          <div className="ebcbatx">
            <img src={ebcbLogo} className="ebcbLogo" alt="ebcbLogo" />
          </div>
          <div>
            <img src={logo} className="earlyBirdsLogo" alt="earlyBirdsLogo" />
          </div>
          <div className="pageDown">
            <FaAngleDoubleDown />
          </div>
        </div>
        <div className="pageTwo" id="about">
          <p className="titlePage2">Austin's Best Cold Brew and Nitro Cold Brew Coffee</p>
        </div>
      </div>
    );
  }
}

export default App;

{
  /* <div className="socialMedia">
          <a
            href="https://www.facebook.com/earlybirdsatx/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookSquare />
          </a>
          <a
            href="https://www.twitter.com/earlybirdsatx/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitterSquare />
          </a>
          <a
            href="https://www.instagram.com/earlybirdsatx/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </div> */
}

{
  /* <footer>
          <h5>
            2019 Early Birds Coffee Bikes <FaTrademark />
          </h5>
        </footer> */
}
