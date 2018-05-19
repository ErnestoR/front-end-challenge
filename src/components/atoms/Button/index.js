import React, { Component } from 'react';
import './Button.css';

const Button = ({ name, className = '', text, onClick }) => (
  <button name={name} className={`b-button ${className}`} onClick={onClick}>
    {text}
  </button>
);

export default Button;
