import React, {Component} from 'react';
import JewelCard from './jewelCard';

class JewelsList extends Component{
    render(){
        const {jewels, onShowHideModal, onSendToCart} = this.props;

        return(
            <div className="jewelsList">
                {(!jewels || jewels.length === 0) ? <p>No jewels in the data base.</p> : jewels.map( jewel =>  <JewelCard key={jewel.id} jewel={jewel} onShowHideModal={onShowHideModal} onSendToCart={onSendToCart} />)} 
            </div>
        );
    }
}

export default JewelsList;
