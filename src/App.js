import React, {Component} from 'react';
import Navigation from './components/nav';
import Filter from './components/filter';
import JewelsList from './components/jewelList';
import ImageModal from './components/imageModal';
import dataService from './services/data.service';
import ContactForm from './components/contactForm';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';

class App extends Component {

  state = {
    modalJewelImage: '',
    modalJewelVisible: false,
    jewels: [],
    cartCount: "0",
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

  handleSendToCart = (e, jewel) => {
    e.preventDefault();
    jewels.forEach(originalJewel => {
      if (originalJewel.id === jewel
        )})
    const jewelsIntoCart = [...this.state.jewelsIntoCart];
    jewelsIntoCart.push(jewel);
    this.setState({jewelsIntoCart});
  }

  handleRemoveJewelFromCart = (e, jewel) => {
    e.preventDefault();
    const jewelsIntoCart = [...this.state.jewelsIntoCart];
    jewelsIntoCart.splice(jewelsIntoCart.indexOf(jewel), 1);
    this.setState({jewelsIntoCart});
  }

  render(){
    const {jewelsIntoCart, cartCount, jewels, modalJewelVisible, modalJewelImage} = this.state;
    return (
      <div className="container">
        <Navigation jewelsCount={cartCount} jewelsCount={jewelsIntoCart.length} />
        <div className="navAndLogo">
          <Filter onSearch={this.handleFindByText} />
          <img src="http://localhost:3000/assets/logo.jpg" width="400" height="300" alt="logo"/>
        </div>
        <JewelsList jewels={jewels} onShowHideModal={this.handleHideShowModal} onSendToCart={this.handleSendToCart} />
        <ImageModal onCloseModal={this.handleHideShowModal} visible={modalJewelVisible} image={modalJewelImage} />
        <ContactForm jewelsToQuery={jewelsIntoCart} onRemoveJewelFromCart={this.handleRemoveJewelFromCart} />
      </div>
      );
  }
}

export default App;
