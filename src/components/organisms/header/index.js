import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';

import Logo from '../../atoms/Logo';
import Button from '../../atoms/Button';
import { MenuButton, Dropdown } from '../../atoms/Select';

const styles = theme => ({
  flex: {
    flex: 1,
    textAlign: 'end',
  },
  header: {
    backgroundColor: theme.bitsoColors.navyHeaders,
  },
});

const Header = props => {
  const { classes } = props;
  return (
    <header className="App-header">
      <AppBar position="static" className={classes.header}>
        <Toolbar>
          <Logo />
          <Typography variant="title" color="inherit">
            | Exchange
          </Typography>
          <Typography variant="title" color="inherit" className={classes.flex}>
            1 BTC = 000,000.00 MXN |
          </Typography>
          <MenuButton
            buttonText="Wallet"
            menuItems={[{ text: 'lorem', onClick: () => {} }, { text: 'ipsum', onClick: () => {} }]}
          />
          <MenuButton
            buttonText="Exchange"
            menuItems={[{ text: 'lorem', onClick: () => {} }, { text: 'ipsum', onClick: () => {} }]}
          />
          <Button text="Ayuda" />
          <Avatar> </Avatar>
          <MenuButton
            buttonText="Usuario"
            menuItems={[{ text: 'lorem', onClick: () => {} }, { text: 'ipsum', onClick: () => {} }]}
          />
          <Switch value="checkedA" />
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default withStyles(styles)(Header);
