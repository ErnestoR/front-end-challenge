import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';

import { Dropdown } from '../Select';
import DisplayField from '../DisplayField';

const styles = theme => ({
  bitsoDropDown: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
});

const StatusBar = props => (
  <Toolbar>
    <Dropdown
      className={props.classes.bitsoDropDown}
      value={2}
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
    <DisplayField label="Max." value="304.934.23 MXN" />
    <DisplayField label="Min." value="274.934.23 MXN" />
    <DisplayField label="Variacion" value="+4,061.68 MXN (1.4%)" />
  </Toolbar>
);

export default withStyles(styles)(StatusBar);
