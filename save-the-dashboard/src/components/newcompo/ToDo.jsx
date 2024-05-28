import React from 'react';
import BaseWidget from './BaseWidget';
import todo from '../assets/images/widgets/todo.png';

const ToDo = (props) => {
  return (
    <BaseWidget {...props}>
      <img src={todo} alt="ToDo" />
    </BaseWidget>
  );
};

export default ToDo;
