import React, { Component } from 'react';

import Header from './components/organisms/header';
import StatusBar from './components/organisms/statusBar';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <StatusBar />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
