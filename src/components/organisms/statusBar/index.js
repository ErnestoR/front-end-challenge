import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import { MenuButton, Dropdown } from '../../atoms/Select';
import DisplayField from '../../atoms/DisplayField';

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
    <DisplayField label="Volumen 24 hrs." value="170.5405818 BTC" />
  </Toolbar>
);

export default StatusBar;
