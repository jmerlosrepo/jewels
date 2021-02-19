import React from "react";
import ShoppingCartCounter from "./shoppingCartCounter";
import { Link } from "react-router-dom";

const Navigation = ({ jewelsCount }) => {
  return (
    <div className="navContainer">
      <nav>
        <ul>
          <Link className="anchor" to="/">
            <li>
                Inicio
            </li>
          </Link>
          <Link className="anchor" to="/contact">
            <li>
                Contacto
            </li>
          </Link>
        </ul>
      </nav>
      <div className="social">
        <a target="_blank" href="#">
          <i className="fa fa-facebook-official" aria-hidden="true"></i>
        </a>
        <a target="_blank" href="#">
          <i className="fa fa-instagram" aria-hidden="true"></i>
        </a>
      </div>
      <ShoppingCartCounter jewelsCount={jewelsCount} />
    </div>
  );
};

export default Navigation;
