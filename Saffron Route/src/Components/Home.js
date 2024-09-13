import React from "react";
import BannerBackground from "../Assets/homer.png";
import BannerImage from "../Assets/home-banner-image.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";
import Carousel from './Carousel';
import Chat from './chat/Chat';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <Carousel />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
          Your Gateway to Memorable Travels
          </h1>
          <p className="primary-text">
          At <span style={{color: "#ce3734"}}>Saffron Routes</span>, we believe every journey should be remarkable. Whether you're exploring mueseums or navigating heritages, we've got it covered for you!
          </p>
          <button className="secondary-button">
             <Link to="/Chat">Explore</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
