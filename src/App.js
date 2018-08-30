import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const {store} = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          {store.getState().places[store.getState().chosen_place].name}
          <p>Flower {store.getState().chosen_flower}</p>

        </div>
      </div>
    );
  }
}

export default App;
