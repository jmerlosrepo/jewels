import React from "react";
import { Link } from "react-router-dom";

const ShoppingCartCounter = ({ jewelsCount }) => {
  return (
    <Link to="/shoppingCart">
      <div className="shoppingCartCounter">
        <div className="anchor">
          <i className="fa fa-shopping-cart" aria-hidden="true"></i> (
          {jewelsCount})
        </div>
      </div>
    </Link>
  );
};

export default ShoppingCartCounter;
