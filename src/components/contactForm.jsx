import React, { Component } from "react";
import SelectedJewelCard from "./selectedJewelCard";

class ContactForm extends Component {

  state = {
    order: {
      name: "",
      email: "",
      phone: "",
      message: "",
      products: []
    }
  }

  handleFieldChanges = ({currentTarget: input}) => {
    const order = {...this.state.order}
      order[input.name] = input.value;  
    this.setState({order});
  }

  render() {
    const { jewelsToQuery, onRemoveJewelFromCart} = this.props;
    const {name, email, phone, message, products} = this.state.order;
    return (
      <div className="contactForm grayBakgroundColor">
        <fieldset>
          <legend>Contacto</legend>
          <form>
            <div className="controlGroup">
              <label htmlFor="">Nombre: </label>
              <input onChange={this.handleFieldChanges} name="name" type="text" value={name} />
            </div>
            <div className="controlGroup">
              <label htmlFor="">Correo: </label>
              <input onChange={this.handleFieldChanges} name="email" type="email" value={email} />
            </div>
            <div className="controlGroup">
              <label htmlFor="">Telefono: </label>
              <input onChange={this.handleFieldChanges} name="phone" type="phone" value={phone} />
            </div>
            <div className="controlGroup">
              <label htmlFor="">Mensaje: </label>
              <textarea
                onChange={this.handleFieldChanges}
                className="messageLabel"
                name="message"
                cols="30"
                rows="10"
                value={message}
              ></textarea>
            </div>
            <div className="cartProducts">
              {!jewelsToQuery ||
                jewelsToQuery.map((jewelToQuery) => (
                  <SelectedJewelCard
                    key={jewelToQuery.id}
                    jewel={jewelToQuery}
                    onRemoveJewelFromCart={onRemoveJewelFromCart}
                  />
                ))}
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
