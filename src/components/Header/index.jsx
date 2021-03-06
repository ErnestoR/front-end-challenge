import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';

import Logo from '../Logo';
import Button from '../Button';
import { MenuButton, Dropdown } from '../Select';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
    textAlign: 'end',
  },
  header: {
    backgroundColor: theme.header[theme.palette.type].backgroundColor,
  },
});

const Header = props => {
  const { classes, theme, changeTheme, selectedBook, dropdownBooks } = props;

  const onThemeChange = (evt, checked) => changeTheme(checked ? 'dark' : 'light');

  return (
    <header className={classes.root}>
      <AppBar position="static" className={classes.header}>
        <Toolbar>
          <Logo />
          <Typography variant="title" color="inherit">
            | Exchange
          </Typography>
          <Dropdown
            // className={props.classes.bitsoDropDown}
            value={selectedBook}
            items={dropdownBooks}
          />
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
          <Switch
            value="theme"
            color="secondary"
            checked={theme === 'dark'}
            onChange={onThemeChange}
          />
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default withStyles(styles)(Header);
