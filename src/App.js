import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

import Header from './components/Header';
import StatusBar from './components/StatusBar';
import LastTrades from './components/LastTrades';

import './App.css';

const styles = theme => ({
  container: {
    display: 'flex',
    padding: theme.spacing.unit,
  },
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <StatusBar />
        <div className={this.props.classes.container}>
          <div md={4}>
            <LastTrades />
          </div>
          <div md={8}>center</div>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default withStyles(styles)(App);
