import React, {Component} from 'react';

class JewelCard extends Component {
    render(){
        const {jewel, onShowHideModal} = this.props;
        const {image, id, category, description, price} = jewel;

        return(
            <div className="jewelCard">
                <div className="cardImage">
                    <img onClick={onShowHideModal} src={`http://localhost:3000/jewels/${image}`} alt="jewel"/>
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
                </div>
            </div>
        )
    }
}

export default JewelCard;
