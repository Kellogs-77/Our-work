import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Animation from './Components/Animation';


class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>Do you see me ?</h1>
      <Animation />
      </div>

    );
  }
}

export default App;
