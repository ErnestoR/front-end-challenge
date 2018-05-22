import React, { Component } from 'react';
import Logo from './components/atoms/Logo';
import Button from './components/atoms/Button';
import MenuButton from './components/atoms/MenuButton';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Logo />
          <Button text="Ayuda" />
          <h1 className="App-title">Welcome to React</h1>
          <MenuButton
            buttonText="Wallet"
            menuItems={[{ text: 'lorem', onClick: () => {} }, { text: 'ipsum', onClick: () => {} }]}
          />
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
