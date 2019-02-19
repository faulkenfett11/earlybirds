import React, { Component } from "react";
import "./App.css";
import logo from "./pictures/Early Birds2.png";
import {
  FaTrademark,
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagram
} from "react-icons/fa";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="comingSoon">Coming Soon to Austin!</h1>
        <img src={logo} className="earlyBirdsLogo" alt="earlyBirdsLogo" />
        <h5 className="underConstruction">
          While our website is under construction, check out our social media:
        </h5>
        <div className="socialMedia">
          <a href="https://www.facebook.com/earlybirdsatx/" target="_blank" rel="noopener noreferrer">
            <FaFacebookSquare />
          </a>
          <a href="https://www.twitter.com/earlybirdsatx/" target="_blank" rel="noopener noreferrer">
            <FaTwitterSquare />
          </a>
          <a href="https://www.instagram.com/earlybirdsatx/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>
        <footer>
          <h5>
            2019 Early Birds Coffee Bikes <FaTrademark />
          </h5>
        </footer>
      </div>
    );
  }
}

export default App;
