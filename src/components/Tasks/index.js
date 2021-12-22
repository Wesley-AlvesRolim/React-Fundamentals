import React from 'react';
import PropTypes from 'prop-types';
import './tasks.css';

function Tasks({ tasks, handleClickEdit, handleClickDelete }) {
  return (
    <ul className="tasks">
      {tasks.map((task, index) => (
        <div className="taskContainer" key={task}>
          <li className="task">{task}</li>
          <div>
            <i
              class="fa fa-pencil"
              aria-hidden="true"
              onClick={() => {
                handleClickEdit(task, index);
              }}
            ></i>
            <i
              class="fa fa-times"
              aria-hidden="true"
              onClick={() => {
                handleClickDelete(index);
              }}
            ></i>
          </div>
        </div>
      ))}
    </ul>
  );
}

Tasks.propTypes = {
  tasks: PropTypes.array.isRequired,
  handleClickEdit: PropTypes.func.isRequired,
  handleClickDelete: PropTypes.func.isRequired,
};

export default Tasks;
