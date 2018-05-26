import React, { Component } from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
// import { ExpandMore } from '@material-ui/icons';

class Dropdown extends Component {
  render() {
    const { className, name, value, items = [], onChange } = this.props;

    return (
      <div className={className}>
        <Select value={value} onChange={onChange} displayEmpty name={name}>
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
