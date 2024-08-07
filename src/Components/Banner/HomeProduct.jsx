import React from "react";
import LeftProduct from "../Assets/diamond-necklace.jpg";
import RightProduct from "../Assets/earing.jpg";
import RightProduct_Men from "../Assets/men.jpg";
import Everthing_women from "../Assets/women-jwel.jpg";
import "./HomeProduct.css";

const HomeProduct = () => {
  return (
    <>
      <div className="grid-container">
        <div className="left">
          <img src={LeftProduct} alt="Diamond Necklace" />
          <div className="product-content">
            <h1 className="single-line-title">Diamond Necklace</h1>
            <p className="ProductDesc">Exclusive diamond necklace for women.</p>
            <button className="shopButton">Shop Now</button>
          </div>
        </div>
        <div className="right">
          <img src={RightProduct} alt="Earring" />
          <div className="product-content" style={{ left: "75%" }}>
            <h1 className="single-line-title">Earring</h1>
            <p className="ProductDesc">
              Exclusive earring collection for women.
            </p>
            <button className="shopButton">Shop Now</button>
          </div>
        </div>
      </div>
      <div className="grid-container">
        <div className="right">
          <img src={RightProduct_Men} alt="Earring" />
          <div className="product-content" style={{ left: "30%" }}>
            <h1 className="single-line-title">For Him</h1>
            <p className="ProductDesc">
              Exclusive diamond rings for gold loving men
            </p>
            <button className="shopButton">Shop Now</button>
          </div>
        </div>
        <div className="left">
          <img src={Everthing_women} alt="Diamond Necklace" />
          <div className="product-content" style={{ left: "35%", top: "35%" }}>
            <h2 className="single-line-title">
              Everything You Need <br />
              For The Best Look You Wish
            </h2>
            <button className="shopButton">Shop Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeProduct;
