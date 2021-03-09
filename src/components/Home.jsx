import React from "react";
import img from "../../src/img.jpg";
import "../App.css";

function Home(props) {
  console.log("home data", props);
  return (
    <div>
      <h1>Home Component</h1>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img src={img} alt="" />
        </div>
        <div className="text-wrapper item">
          <span>I-Phone</span>
          <span>Pric: $1000</span>
        </div>
        <div className="btn-wrapper item">
          <button
            className="btn btn-primary"
            onClick={() => {
              props.addToCartHandler({ pice: 1000, name: "i phone 11" });
            }}
          >
            Add To Cart
          </button>
          <button
            className="btn btn-danger"
            onClick={() => {
              props.removeToCartHandler();
            }}
          >
            Remove To Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
