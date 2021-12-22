import React, { Component } from 'react';

import './task.css';
import InputContext from '../../hooks/useInputContext';

class Task extends Component {
  constructor(props) {
    super(props);
  }

  handleClickEdit = (task) => {
    InputContext.set(task);
  };
  render() {
    return (
      <div className="taskContainer" key={task}>
        <li className="task">{task}</li>
        <div>
          <i
            class="fa fa-pencil"
            aria-hidden="true"
            onClick={() => {
              this.handleClickEdit(task, index);
            }}
          ></i>
          <i
            class="fa fa-times"
            aria-hidden="true"
            onClick={() => {
              this.handleClickDelete(index);
            }}
          ></i>
        </div>
      </div>
    );
  }
}

export default Task;
