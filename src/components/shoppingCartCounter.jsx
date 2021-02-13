import React from "react";
import { BrowserRouter as Link } from "react-router-dom";

const ShoppingCartCounter = ({ jewelsCount }) => {
  return (
    <Link to="/shoppingCart">
      <div className="shoppingCartCounter">
        <i className="fa fa-shopping-cart" aria-hidden="true"></i> (
        {jewelsCount})
      </div>
    </Link>
  );
};

export default ShoppingCartCounter;
