import React, { Component } from 'react';
import './App.css';
import Search from './components/Search/Search'
import UserInput from './components/UserInput/UserInput'
import Navigation from './components/Nav/Nav'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Search />
        <UserInput />
      </div>
    );
  }
}

export default App;
