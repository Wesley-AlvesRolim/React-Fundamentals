import React, { Component } from 'react';
import './task.css';

class Task extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="taskContainer">
        <li className="task">{this.props.task}</li>
        <div>
          <i class="fa fa-pencil" aria-hidden="true"></i>
          <i class="fa fa-times" aria-hidden="true"></i>
        </div>
      </div>
    );
  }
}

export default Task;
