import React, {Component} from 'react';
import JewelCard from './jewelCard';

class JewelsList extends Component{
    render(){
        const {onShowHideModal, jewels} = this.props;

        return(
            <div className="jewelsList">
                {jewels.map( jewel =>  <JewelCard key={jewel.id} jewel={jewel} onShowHideModal={onShowHideModal} />)} 
            </div>
        );
    }
}

export default JewelsList;
