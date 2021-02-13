import React from "react";
import ShoppingCartCounter from "./shoppingCartCounter";
import { BrowserRouter as Link } from "react-router-dom";

const Navigation = ({ jewelsCount }) => {
  return (
    <div className="navContainer">
      <nav>
        <ul>
          <li>
            <Link className="anchor" to="/">
              Inicio
            </Link>
          </li>
          <li>
            <Link className="anchor" to="/contact">
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
      <div className="social">
        {/* <a target="_blank" href="#">
          <i className="fa fa-facebook-official" aria-hidden="true"></i>
        </a>
        <a target="_blank" href="#">
          <i className="fa fa-instagram" aria-hidden="true"></i>
        </a> */}
      </div>
      <ShoppingCartCounter jewelsCount={jewelsCount} />
    </div>
  );
};

export default Navigation;
