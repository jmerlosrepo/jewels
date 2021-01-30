import React, {Component} from 'react';
import Navigation from './components/nav';
import Filter from './components/filter';
import JewelsList from './components/jewelsList';
import ImageModal from './components/imageModal';
import './App.css';

class App extends Component {

  state = {
    modalJewelVisible: false,
    jewels: [{id: 1, category: 'ring', image: 'jewel.jpg', description: 'A blue jewel that is used as an example for this little demo and see if everything works correctly.', price: 25000},
    {id: 2, category: 'earing', image: 'jewel.jpg', description: 'A blue jewel that is used as an example for this little demo and see if everything works correctly.', price: 25000},
    {id: 3, category: 'ring', image: 'jewel.jpg', description: 'A blue jewel that is used as an example for this little demo and see if everything works correctly.', price: 25000}] 
  }

  handleHideShowModal = () =>{
    this.setState({modalJewelVisible: !this.state.modalJewelVisible});
  }

  handleFindByText = (e, query) => {
    e.preventDefault();
    const jewelsCopy = [...this.state.jewels];
    const jewelsFound = jewelsCopy.filter(jewel => jewel.category === query.toLowerCase());
    
    jewelsFound.length > 0 ? this.setState({jewels: jewelsFound}) : this.setState({jewels: jewelsCopy});
  }

  render(){
    return (
      <div>
        <Navigation />
        <Filter onSearch={this.handleFindByText} />
        <JewelsList jewels={this.state.jewels} onShowHideModal={this.handleHideShowModal} />
        <ImageModal onCloseModal={this.handleHideShowModal} visible={this.state.modalJewelVisible} image={this.state.modalJewelImage} />
      </div>
      );
  }
}

export default App;
