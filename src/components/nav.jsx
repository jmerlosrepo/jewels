import React from 'react';
import ShoppingCartCounter from './shoppingCartCounter';

const Navigation = ({jewelsCount}) =>{
    return(
        <div className="navContainer">
          <nav>
            <ul>
              <li><a href="">Inicio</a></li>
              <li><a href="">Contacto</a></li>
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
          <ShoppingCartCounter jewelsCount={jewelsCount}/>
        </div>
    );
}

export default Navigation;
