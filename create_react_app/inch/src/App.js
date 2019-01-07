import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import InchToCm from './InchToCm'

class App extends Component {
  render() {
    return (
      <div className="App">
        <InchToCm />
      </div>
    );
  }
}

export default App;
