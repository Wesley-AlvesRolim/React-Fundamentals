import React, { Component } from 'react';
import './task.css';

class Task extends Component {
  constructor(props) {
    super(props);
    this.state = { task: props.task };
  }
  render() {
    const { task } = this.state;
    return (
      <div className="taskContainer">
        <li className="task">{task}</li>
        <div>
          <i class="fa fa-pencil" aria-hidden="true"></i>
          <i class="fa fa-times" aria-hidden="true"></i>
        </div>
      </div>
    );
  }
}

export default Task;
