import React from 'react';
import logo from '../assets/logo.png';

const Navigation = (props) =>{
    return(
        <div className="navContainer">
          <img src={logo} alt="logo"/>
          <nav>
            <ul>
              <li><a href="">Inicio</a></li>
              <li><a href="">Contacto</a></li>
            </ul>
          </nav>
        </div>
    );
}

export default Navigation;
