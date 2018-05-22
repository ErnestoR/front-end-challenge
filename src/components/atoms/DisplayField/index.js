import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  flex: {
    display: 'flex',
    fontSize: '.7em',
    margin: theme.spacing.unit,
  },
  label: {
    color: theme.bitsoColors.darkText,
  },
  value: {
    color: theme.bitsoColors.lightText,
    marginLeft: theme.spacing.unit / 2,
  },
});

const DisplayField = ({ classes, label, value }) => (
  <div className={classes.flex}>
    <Typography variant="body1" className={classes.label}>
      {label}
    </Typography>
    <Typography variant="body1" className={classes.value}>
      {value}
    </Typography>
  </div>
);

export default withStyles(styles)(DisplayField);
