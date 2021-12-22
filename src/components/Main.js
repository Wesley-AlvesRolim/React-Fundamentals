import React, { Component } from 'react';

import Form from './components/Form';
import Tasks from './components/Tasks';

class Main extends Component {
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
        <Form
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
          inputValue={inputValue}
        />
        <Tasks
          tasks={tasks}
          handleClickEdit={this.handleClickEdit}
          handleClickDelete={this.handleDelete}
        />
      </>
    );
  }
}

export default Main;
