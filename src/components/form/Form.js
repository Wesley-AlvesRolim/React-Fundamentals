import React, { Component } from 'react';
import './form.css';

import Task from '../task/Task';

class Form extends Component {
  state = {
    inputValue: '',
    tasks: ['Café', 'Água todos os dias que é bom', 'Estudar'],
  };

  handleInputChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    const { inputValue, tasks } = this.state;
    tasks.push(inputValue);
    this.setState({ tasks });
  };

  render() {
    const { inputValue, tasks } = this.state;
    return (
      <>
        <form action="#" onSubmit={this.handleFormSubmit}>
          <input
            onChange={this.handleInputChange}
            type="text"
            placeholder="Adicione aqui uma tafera"
            id="addTasks "
            value={inputValue}
          />
          <button type="submit">
            <i class="fa fa-plus" aria-hidden="true"></i>
          </button>
        </form>
        <ul className="tasks">
          {tasks.map((task, index) => (
            <Task key={task + ' ' + index} task={task} />
          ))}
        </ul>
      </>
    );
  }
}

export default Form;
