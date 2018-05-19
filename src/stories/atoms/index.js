import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { backgrounds } from '../backgrounds';

import Logo from '../../components/atoms/Logo';
import Button from '../../components/atoms/Button';

storiesOf('Atoms', module)
  .addDecorator(backgrounds)
  .add('Logo', () => <Logo />)
  .add('Button', () => <Button text="Ayuda" />);
