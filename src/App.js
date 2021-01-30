import React, {Component} from 'react';
import Navigation from './components/nav';
import Filter from './components/filter';
import JewelsList from './components/jewelsList';
import ImageModal from './components/imageModal';
import './App.css';
import jewelImg from './assets/jewels/jewel.jpg';

class App extends Component {

  state = {
    modalJewelImage: jewelImg,
    modalJewelVisible: false,
    jewels: [{id: 1, category: 'ring', image: 'jewel.jpg', description: 'A blue jewel that is used as an example for this little demo and see if everything works correctly.', price: 25000}] 
  }

  handleHideShowModal = () =>{
    this.setState({modalJewelVisible: !this.state.modalJewelVisible});
  }

  render(){
    return (
      <div>
        <Navigation />
        <Filter />
        <JewelsList jewels={this.state.jewels} onShowHideModal={this.handleHideShowModal} />
        <ImageModal onCloseModal={this.handleHideShowModal} visible={this.state.modalJewelVisible} image={this.state.modalJewelImage} />
      </div>
      );
  }
}

export default App;
