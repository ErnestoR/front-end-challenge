import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

import Header from '../Header';
import StatusBar from '../../components/StatusBar';
import LastTrades from '../../components/LastTrades';
import { fetchAvailableBooks } from '../../modules/App';

const styles = theme => ({
  container: {
    display: 'flex',
    padding: theme.spacing.unit,
  },
});

class App extends Component {
  componentDidMount() {
    // this.props.fetchAvailableBooks().then(x => {
    //   debugger;
    // });
  }

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

const mapDispatchToProps = {
  fetchAvailableBooks,
};

const StyledApp = withStyles(styles)(App);

export default connect(null, mapDispatchToProps)(StyledApp);
// export default ;
