import React, {Component} from 'react';
import dataService from './services/data.service';
import Navigation from './components/nav';
import Home from './components/home';
import ContactForm from './components/contactForm';
import {
  Switch,
  Route
} from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';
import './App.css';

class App extends Component {

  state = {
    modalJewelImage: '',
    modalJewelVisible: false,
    jewels: [],
    jewelsIntoCart: [],
    postOrderResponse: {}
  }

  componentDidMount = () => {
    dataService.fetchAllJewels()
    .then(jewels => this.setState({jewels}))
    .catch(err => console.log(err))
  }

  handleHideShowModal = (modalJewelImage) =>{
    this.setState({modalJewelVisible: !this.state.modalJewelVisible, modalJewelImage});
  }

  handleFindByText = (e, query) => {
    e.preventDefault();
    const jewelsCopy = [...this.state.jewels];
    const jewelsFound = jewelsCopy.filter(jewel => jewel.category === query.toLowerCase());
    jewelsFound.length > 0 ? this.setState({jewels: jewelsFound}) : this.setState({jewels: jewelsCopy});
  }

  handleOrderFormSubmit = (e, order) => {
    e.preventDefault();
    dataService.postJewelsOrder(order)
    .then(postOrderResponse => this.setState({postOrderResponse}))
    .catch(err => console.log(err))
  }

  handleSendToCart = (e, jewel) => {
    e.preventDefault();
    const jewelsIntoCart = [...this.state.jewelsIntoCart];
    jewelsIntoCart.push(jewel);
    this.setState({jewelsIntoCart, jewels: this.updateCardIfSelected(jewel)});
  }

  handleRemoveJewelFromCart = (e, jewel) => {
    e.preventDefault();
    const jewelsIntoCart = [...this.state.jewelsIntoCart];
    jewelsIntoCart.splice(jewelsIntoCart.indexOf(jewel), 1);
    this.setState({jewelsIntoCart, jewels: this.updateCardIfSelected(jewel)});
  }

  updateCardIfSelected = (jewel) => {
    const jewelsCopy = [...this.state.jewels];
    jewelsCopy.forEach(originalJewel => {
      if (originalJewel.id === jewel.id){
        originalJewel.selected = !jewel.selected;
      }
    });

    return jewelsCopy;
  }

  render(){
    const {jewelsIntoCart, jewels, modalJewelVisible, modalJewelImage} = this.state;
    return (
      <div className="container">
        <Navigation jewelsCount={jewelsIntoCart.length} />
        <Switch>
          <Route exact path="/" component={() => <Home 
            jewels={jewels}
            modalJewelVisible={modalJewelVisible}
            modalJewelImage={modalJewelImage}
            onShowHideModal={this.handleHideShowModal}
            onSendToCart={this.handleSendToCart}
            onCloseModal={this.handleHideShowModal}
            onFindByText={this.handleFindByText} 
          /> } 
          />
          <Route path="/shoppingCart" component={() => <ContactForm jewelsToQuery={jewelsIntoCart} onOrderSubmit={this.handleOrderFormSubmit} onRemoveJewelFromCart={this.handleRemoveJewelFromCart} />} />
          <Route path="/contact">Contacto</Route>
        </Switch>
      </div>
      );
  }
}

export default App;
