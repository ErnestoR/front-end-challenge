import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';

import Dropdown from './Dropdown';

const LoadingDropdown = props => {
  let renderCmp = <LinearProgress color="secondary" />;

  if (props.isLoading) {
    renderCmp = <LinearProgress color="secondary" />;
  } else {
    renderCmp = (
      <Dropdown
        // className={props.classes.bitsoDropDown}
        value={props.value}
        items={props.data}
      />
    );
  }

  return <div className={props.className}>{renderCmp}</div>;
};

export default LoadingDropdown;
