import React, { Component } from 'react';
import Logo from './components/atoms/Logo';
import Button from './components/atoms/Button';
import MenuItem from '@material-ui/core/MenuItem';
import { MenuButton, Dropdown } from './components/atoms/Select';
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
          <Dropdown value="chart">
            <MenuItem value="chart">c</MenuItem>
            <MenuItem value="deepmarket">d</MenuItem>
          </Dropdown>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
