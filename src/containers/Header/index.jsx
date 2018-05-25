import React from 'react';
import { connect } from 'react-redux';

import Header from '../../components/Header';

const HeaderContainer = ({ theme }) => {
  return <Header theme={theme} />;
};

const mapStateToProps = state => ({
  theme: state.App.theme,
});

export default connect(mapStateToProps)(HeaderContainer);
