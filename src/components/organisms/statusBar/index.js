import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import { MenuButton, Dropdown } from '../../atoms/Select';

const StatusBar = () => (
  <Toolbar>
    <Dropdown
      value={1}
      items={[
        {
          value: 1,
          text: 'BTC/MXN',
        },
        {
          value: 2,
          text: 'BTC/USD',
        },
      ]}
    />
  </Toolbar>
);

export default StatusBar;
