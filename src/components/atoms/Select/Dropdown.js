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

  render() {
    const { className, name, children, items = [] } = this.props;

    return (
      <div className={className}>
        <Select value={this.state.value} onChange={this.handleChange} displayEmpty name={name}>
          {items.map((item, i) => (
            <MenuItem key={i} value={item.value}>
              {item.text}
            </MenuItem>
          ))}
        </Select>
      </div>
    );
  }
}

export default Dropdown;
