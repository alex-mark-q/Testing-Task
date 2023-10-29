import React from 'react';
import { useState } from 'react';
import "./input.scss";

const Input = ({setAutoFocus, placeholder, onChange}) => {
  return (
    <input autoFocus={ setAutoFocus ? "autoFocus" : ""} className="input" type="text" placeholder={placeholder} onChange={onChange} required />
  );
}

export default Input;