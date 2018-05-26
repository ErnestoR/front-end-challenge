import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';

import { changeTheme } from '../../modules/App';
import Logo from '../../components/Logo';
import Button from '../../components/Button';
import { MenuButton, LoadingDropdown } from '../../components/Select';

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
  const { classes, theme, changeTheme, selectedBook, dropdownBooks, isLoading } = props;

  const onThemeChange = (evt, checked) => changeTheme(checked ? 'dark' : 'light');

  return (
    <header className={classes.root}>
      <AppBar position="static" className={classes.header}>
        <Toolbar>
          <Logo />
          <Typography variant="title" color="inherit">
            | Exchange
          </Typography>
          <LoadingDropdown
            className={classes.flex}
            isLoading={isLoading}
            value={selectedBook}
            data={dropdownBooks}
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

const mapStateToProps = state => ({
  theme: state.App.theme,
  isLoading: state.App.isLoading,
  selectedBook: state.App.selectedBook,
  dropdownBooks: state.App.availableBooks.map(bookId => {
    const { book, ask } = state.App.books[bookId];
    const [base, exchange] = book.split('_');

    return {
      value: book,
      text: `1 ${base.toUpperCase()} = ${ask} ${exchange.toUpperCase()}`,
    };
  }),
});

const mapDispatchToProps = {
  changeTheme,
};

const StyledHeader = withStyles(styles)(Header);

export default connect(mapStateToProps, mapDispatchToProps)(StyledHeader);
