import React from 'react';
import { useState } from 'react';
import "./button.scss";

const Button = ({ handleAddTask,name }) => {

  return (
    <button className="button" onClick={handleAddTask}>{name}</button>
  );
}

export default Button;