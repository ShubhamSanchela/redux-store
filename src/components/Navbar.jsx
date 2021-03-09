import React from "react";
import cart from "../../src/shopping-cart.svg";

function Navbar(props) {
  console.log("Navbar data",props.data)
  return (
    <div>
      <div className="add-cart">
        <span className="cart-count">{props.data.length}</span>

        <img src={cart} alt="" />
      </div>
    </div>
  );
}

export default Navbar;
