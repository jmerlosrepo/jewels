import React, {Component} from 'react';
import Navigation from './components/nav';
import Filter from './components/filter';
import JewelsList from './components/jewelsList';
import ImageModal from './components/imageModal';
import dataService from './services/data.service';
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
    jewelsIntoCart: []
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

  updateCardIfSelected = (jewel) => {
    const jewelsCopy = [...this.state.jewels];
    jewelsCopy.forEach(originalJewel => {
      if (originalJewel.id === jewel.id){
        originalJewel.selected = !jewel.selected;
      }
    });

    return jewelsCopy;
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

  render(){
    const {jewelsIntoCart, jewels, modalJewelVisible, modalJewelImage} = this.state;
    return (
      <div className="container">
        <Navigation jewelsCount={jewelsIntoCart.length} />
        <Switch>
          <Route exact path="/">
            <div className="navAndLogo">
              <Filter onSearch={this.handleFindByText} />
              <img src="http://localhost:3000/assets/logo.jpg" width="400" height="300" alt="logo"/>
            </div>
            <JewelsList jewels={jewels} onShowHideModal={this.handleHideShowModal} onSendToCart={this.handleSendToCart} />
            <ImageModal onCloseModal={this.handleHideShowModal} visible={modalJewelVisible} image={modalJewelImage} />
          </Route>
          <Route path="/shoppingCart">
            <ContactForm jewelsToQuery={jewelsIntoCart} onRemoveJewelFromCart={this.handleRemoveJewelFromCart} />
          </Route>
          <Route path="/contact"></Route>
        </Switch>
      </div>
      );
  }
}

export default App;
