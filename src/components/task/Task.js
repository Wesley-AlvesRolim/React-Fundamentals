import React, { Component } from 'react';

import './task.css';
import InputContext from '../../hooks/useInputContext'

class Task extends Component {
  constructor(props) {
    super(props);
  }

  handleClickEdit = (task)=>{
    InputContext.set(task)
  }
  render() {
    return (
      <div className="taskContainer">
        <li className="task">{this.props.task}</li>
        <div>
          <i class="fa fa-pencil" aria-hidden="true" onClick={() => {handleClickEdit(this.props.task)}}></i>
          <i class="fa fa-times" aria-hidden="true" onClick={}></i>
        </div>
      </div>
    );
  }
}

export default Task;
