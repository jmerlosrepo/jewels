import React, {Component} from 'react';

class JewelCard extends Component {
    render(){
        const {jewel, onShowHideModal, onSendToCart} = this.props;
        const {image, id, category, description, price} = jewel;
        const inCart = jewel.selected ? 'btn addCartBtn hidden' : 'btn addCartBtn';

        return(
            <div className="jewelCard jewelListElement">
                <div className="cardImage">
                    <img onClick={() => onShowHideModal(image)} src={`http://localhost:3000/jewels/${image}`} alt="jewel"/>
                </div>
                <div className="jewelDetails">
                   <div>
                    <div className="label">Clave: </div>
                    <div className="description">{id}</div>
                   </div>
                   <div>
                    <div className="label">Categoria: </div>
                    <div className="description">{category}</div> 
                   </div>
                   <div>
                    <div className="label">Descripcion: </div>
                    <div className="description">{description}</div>
                   </div>
                   {!price || <div><div className="label">Precio: </div><div className="description">${price}</div></div>}
                   <div>
                       <button className={inCart} onClick={(e) => onSendToCart(e, jewel) }>Agregar a carrito</button>
                   </div>
                </div>
            </div>
        )
    }
}

export default JewelCard;
