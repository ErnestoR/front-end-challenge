import React from 'react';
import Button from '@material-ui/core/Button';

const BButton = ({ name, className = '', text, onClick }) => (
  <Button name={name} onClick={onClick}>
    {text}
  </Button>
);

export default BButton;
