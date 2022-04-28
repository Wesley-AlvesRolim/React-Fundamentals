import React from "react";
import PropTypes from "prop-types";
import "./tasks.css";

function Tasks({ tasks, handleClickDone, handleClickEdit, handleClickDelete }) {
  return (
    <ul className="tasks">
      {tasks.map(({ text, isDone }, index) => (
        <div className="taskContainer" key={text}>
          <li className={`task ${isDone ? "finished" : "pending"}`}>{text}</li>
          <div>
            <i
              class="fa fa-check"
              aria-hidden="true"
              onClick={() => {
                handleClickDone(index);
              }}
            ></i>
            <i
              class="fa fa-pencil"
              aria-hidden="true"
              onClick={() => {
                handleClickEdit(text, index);
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
  handleClickDone: PropTypes.func.isRequired,
  handleClickEdit: PropTypes.func.isRequired,
  handleClickDelete: PropTypes.func.isRequired,
};

export default Tasks;
