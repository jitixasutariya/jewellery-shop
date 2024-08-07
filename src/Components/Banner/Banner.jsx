import React from "react";
import BannerImg from "../Assets/banner2.jpg";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-container">
      <img src={BannerImg} alt="Banner" className="img-fluid banner-image" />
      <div className="banner-content">
        <h1>Him & Her</h1>
        <h2>Love Collection</h2>
        <p>Exclusive diamond rings for couples and lovers.</p>
        <button className="btn shop-button">Shop Now</button>
      </div>
    </div>
  );
};

export default Banner;
