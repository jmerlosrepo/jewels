import React from 'react';

const SelectedJewelCard = ({jewel, onRemoveJewelFromCart}) => {
    return (
        <div className="jewelCard cartJewelCard">
            <button className="modalBtn" onClick={(e) => {onRemoveJewelFromCart(e, jewel)}}>X</button>
            <img src={`http://localhost:3000/jewels/${jewel.image}`} alt="jewel"/>
        </div>
    );
}

export default SelectedJewelCard;
