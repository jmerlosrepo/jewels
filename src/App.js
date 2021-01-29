import React, {Component} from 'react';
import Navigation from './components/nav';
import Filter from './components/filter';
import JewelsList from './components/jewelsList';
import './App.css';

class App extends Component {
  render(){
    return (
      <div>
        <Navigation />
        <Filter />
        <JewelsList />
      </div>
      );
  }
}

export default App;
