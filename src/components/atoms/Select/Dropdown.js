import React, { Component, Children } from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { ExpandMore } from '@material-ui/icons';

class Dropdown extends Component {
  state = {
    value: this.props.value || '',
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { name, children } = this.props;

    return (
      <div>
        <Select value={this.state.value} onChange={this.handleChange} displayEmpty name={name}>
          {children}
        </Select>
      </div>
    );
  }
}

export default Dropdown;
