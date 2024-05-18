import React from 'react';
import hotdog from "../images/hotdogs.jpg";
import hamburger from "../images/hamburger.jpg";
import sandwich from "../images/sandwich.jpg"

const ImageContainer = () => (
  <div className="image-container">
    <div className="image-wrapper">
      <img className="hot-dog" src={hotdog} alt="Hot Dog" />
    </div>
    <div className="image-wrapper">
      <img src= {sandwich} alt="Sandwich" />
    </div>
    <div className="image-wrapper">
      <img src= {hamburger} alt="Hamburger" />
    </div>
  </div>
);

export default ImageContainer;
