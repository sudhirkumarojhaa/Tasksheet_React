import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import TaskSheet from './TaskSheet';

var destination = document.querySelector('#container');

ReactDOM.render(
  <div>
    <TaskSheet/>
  </div>,
  destination
);