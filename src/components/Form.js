import React, { Component } from 'react';
import './form.css';

class Form extends Component {
  state = {
    inputValue: '',
    tasks: [],
    index: -1,
  };

  componentDidMount() {
    const { tasks } = this.state;
    if (!tasks) return;
    this.setState({ tasks: JSON.parse(localStorage.getItem('tasks')) });
  }

  componentDidUpdate(prevProps, prevState) {
    const { inputValue, tasks } = this.state;
    if (prevState.inputValue === inputValue) return;

    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  handleInputChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  handleClickEdit = (task, index) => {
    this.setState({ inputValue: task, index });
  };

  handleClickDelete = (index) => {
    const { tasks } = this.state;
    tasks.splice(index, 1);
    this.setState({ tasks });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    const { inputValue, index, tasks } = this.state;

    if (tasks.includes(inputValue) || inputValue === '') return;
    if (index !== -1) {
      tasks[index] = inputValue;
      this.setState({ tasks, inputValue: '', index: -1 });
      return;
    }
    tasks.push(inputValue);
    this.setState({ tasks, inputValue: '' });
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
          ))}
        </ul>
      </>
    );
  }
}

export default Form;
