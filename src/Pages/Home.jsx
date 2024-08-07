// src/Pages/Home.js
import React from "react";
import Banner from "../Components/Banner/Banner";
import HomeProduct from "../Components/Banner/HomeProduct";
import "./Pages.css"; // Import custom CSS

const Home = () => {
  return (
    <div className="homePage">
      {" "}
      <Banner />
      <HomeProduct />
    </div>
  );
};

export default Home;
