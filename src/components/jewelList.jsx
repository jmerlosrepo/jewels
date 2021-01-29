import React, {Component} from 'react';
import JewelCard from './jewelCard';

class JewelsList extends Component{
    render(){
        return(
            <div className="jewelsList">
                <JewelCard />
                <JewelCard />
                <JewelCard />
                <JewelCard />
                <JewelCard />
                <JewelCard />
                <JewelCard />
            </div>
        );
    }
}

export default JewelsList;
