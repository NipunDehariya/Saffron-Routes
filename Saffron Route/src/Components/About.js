import React from "react";
import AboutBackground from "../Assets/homer2.png";
import AboutBackgroundImage from "../Assets/map.png";
// import Pattern from "../Assets/mandala.png";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-background-image-container2">
        {/* <img src={Pattern} alt="" /> */}
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <h1 className="primary-heading">
          Experience the Best of the City with Us
        </h1>
        <p className="primary-text">
          Explore the best attractions and experiences in your city with our easy-to-use chatbot integrated booking platform. From thrill-seeking adventures to family-friendly activities, we've got you covered.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button"><Link to="/Chat">Discover Now</Link></button>
        </div>
      </div>
    </div>
  );
};

export default About;