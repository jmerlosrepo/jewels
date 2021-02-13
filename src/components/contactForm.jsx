import React, {Component} from 'react';
import SelectedJewelCard from './selectedJewelCard'

class ContactForm extends Component{
    render(){
        const {jewelsToQuery, onRemoveJewelFromCart} = this.props;

        return(
            <div className="contactForm">
                <fieldset>
                    <legend>Contacto</legend>
                    <form>
                        <div className="controlGroup">
                            <label htmlFor="">Nombre: </label>
                            <input type="text"/>
                        </div>
                        <div className="controlGroup">
                            <label htmlFor="">Correo: </label>
                            <input type="email"/>
                        </div>
                        <div className="controlGroup">
                            <label htmlFor="">Telefono: </label>
                            <input type="phone"/>
                        </div>
                        <div className="controlGroup">
                            <label htmlFor="">Mensaje: </label>
                            <textarea className="messageLabel" name="" id="" cols="30" rows="10"></textarea>
                        </div>
                        <div className="cartProducts">
                            {
                                !jewelsToQuery || jewelsToQuery.map( jewelToQuery => <SelectedJewelCard key={jewelToQuery.id} jewel={jewelToQuery} onRemoveJewelFromCart={onRemoveJewelFromCart} />)
                            }
                        </div>
                        <div>
                            <button className="btn">Enviar</button>
                        </div>
                    </form>
                </fieldset>
            </div>
        );
    }
}

export default ContactForm;
