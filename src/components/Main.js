import React, { Component } from "react";

import Form from "./Form";
import Tasks from "./Tasks";

class Main extends Component {
  state = {
    inputValue: "",
    tasks: [],
    index: -1,
  };

  setLocalStorage(value) {
    localStorage.setItem("tasks", JSON.stringify(value));
  }
  componentDidMount() {
    const { tasks } = this.state;
    if (!tasks) return;
    this.setState({ tasks: JSON.parse(localStorage.getItem("tasks")) || [] });
  }

  componentDidUpdate(prevProps, prevState) {
    const { inputValue, tasks } = this.state;
    if (prevState.inputValue === inputValue) return;

    this.setLocalStorage(tasks);
  }

  handleInputChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  handleClickDone = (index) => {
    const { tasks } = this.state;
    tasks[index].isDone = !tasks[index].isDone;
    this.setState({ tasks });
    this.setLocalStorage(tasks);
  };

  handleClickEdit = (text, index) => {
    this.setState({ inputValue: text, index });
  };

  handleClickDelete = (index) => {
    const { tasks } = this.state;
    tasks.splice(index, 1);
    this.setState({ tasks });
    this.setLocalStorage(tasks);
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    const { inputValue, index, tasks } = this.state;

    const checkIfHaveEqualsTexts = tasks.find((el) => el.text === inputValue);
    if (checkIfHaveEqualsTexts || inputValue === "") return;
    if (index !== -1) {
      tasks[index].text = inputValue;
      this.setState({ tasks, inputValue: "", index: -1 });
      return;
    }
    tasks.push({ text: inputValue, isDone: false });
    this.setState({ tasks, inputValue: "" });
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
          handleClickDone={this.handleClickDone}
          handleClickEdit={this.handleClickEdit}
          handleClickDelete={this.handleClickDelete}
        />
      </>
    );
  }
}

export default Main;
