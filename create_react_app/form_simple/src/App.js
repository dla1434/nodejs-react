import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {SimpleForm} from './SimpleForm';
import {MultiForm} from './MultiForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <SimpleForm /> */}
        <MultiForm />
      </div>
    );
  }
}

export default App;
