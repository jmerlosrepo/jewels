import React from 'react';

const ShoppingCartCounter = ({jewelsCount}) => {
    return(
        <div className="shoppingCartCounter">
            <a href="#"><i class="fa fa-shopping-cart" aria-hidden="true"></i> ({jewelsCount})</a>
        </div>
    );
}

export default ShoppingCartCounter;
