import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    width: '100%',
    overflowX: 'auto',
    padding: theme.spacing.unit,
  },
  table: {
    width: 300,
  },
  header: {
    padding: theme.spacing.unit,
    backgroundColor: theme.bitsoColors.mediumNavy,
  },
  sale: {
    color: theme.bitsoColors.mediumGreen,
  },
  buy: {
    color: theme.bitsoColors.darkRed,
  },
});

let id = 0;
function createData(time, price, amount, type) {
  id += 1;
  return { id, time, price, amount, type };
}

const data = [
  createData(
    new Date(),
    (Math.random(3) * 1000).toFixed(0),
    Math.random(3) * 1000,
    Math.round(Math.random()) === 1 ? 'sale' : 'buy'
  ),
  createData(
    new Date(),
    (Math.random(3) * 1000).toFixed(0),
    Math.random(3) * 1000,
    Math.round(Math.random()) === 1 ? 'sale' : 'buy'
  ),
  createData(
    new Date(),
    (Math.random(3) * 1000).toFixed(0),
    Math.random(3) * 1000,
    Math.round(Math.random()) === 1 ? 'sale' : 'buy'
  ),
  createData(
    new Date(),
    (Math.random(3) * 1000).toFixed(0),
    Math.random(3) * 1000,
    Math.round(Math.random()) === 1 ? 'sale' : 'buy'
  ),
  createData(
    new Date(),
    (Math.random(3) * 1000).toFixed(0),
    Math.random(3) * 1000,
    Math.round(Math.random()) === 1 ? 'sale' : 'buy'
  ),
];

function SimpleTable(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Typography>ULTIMOS TRADES</Typography>
      </div>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>HORA</TableCell>
            <TableCell numeric>MXN Precio</TableCell>
            <TableCell numeric>BTC MONTO</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(n => {
            return (
              <TableRow key={n.id}>
                <TableCell>{n.time.toLocaleDateString()}</TableCell>
                <TableCell className={classes[n.type]} numeric>
                  {n.price}
                </TableCell>
                <TableCell numeric>{n.amount}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);
