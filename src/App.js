import React, { Component } from 'react';

import './App.css';
import Person from'./Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi! i am a react App</h1>
        <Person/>
      </div>
    );
  }
}

export default App;
