import React from 'react';
import { connect } from 'react-redux';

import Header from '../../components/Header';
import { changeTheme } from '../../modules/App';

const HeaderContainer = props => {
  return <Header theme={props.theme} changeTheme={props.changeTheme} />;
};

const mapStateToProps = state => ({
  theme: state.App.theme,
});

const mapDispatchToProps = {
  changeTheme,
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
