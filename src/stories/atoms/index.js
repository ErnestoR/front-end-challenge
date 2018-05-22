import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { backgrounds } from '../backgrounds';

import ThemeProvider from '../../theme';
import Logo from '../../components/atoms/Logo';
import Button from '../../components/atoms/Button';
import MenuButton from '../../components/atoms/MenuButton';

storiesOf('Atoms', module)
  // .addDecorator(backgrounds)
  .add('Logo', () => (
    <ThemeProvider>
      <Logo />
    </ThemeProvider>
  ))
  .add('Button', () => (
    <ThemeProvider>
      <Button text="Ayuda" />{' '}
    </ThemeProvider>
  ))
  .add('MenuButton', () => (
    <ThemeProvider>
      <MenuButton
        buttonText="Wallet"
        menuItems={[{ text: 'lorem', onClick: () => {} }, { text: 'ipsum', onClick: () => {} }]}
      />
    </ThemeProvider>
  ));
