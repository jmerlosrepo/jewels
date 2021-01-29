import React, {Component} from 'react';
import jewelImg from '../assets/jewels/jewel.jpg'; 

class JewelCard extends Component {
    render(){
        return(
            <div className="jewelCard">
                <div className="cardImage">
                    <img src={jewelImg} alt="jewel"/>
                </div>
                <div className="jewelDetails">
                   <div className="label">Id: </div> 
                   <div className="label">Descripcion: </div>
                </div>
            </div>
        )
    }
}

export default JewelCard;
