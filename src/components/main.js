import React, { Component } from 'react';
import './main.css';

class Main extends Component {
  state = {
    inputValue: '',
  };

  handleInputChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };
  render() {
    const { inputValue } = this.state;
    return (
      <>
        <label htmlFor="addTasks ">
          <h2>Formulário</h2>
        </label>
        <form action="#">
          <input
            onChange={this.handleInputChange}
            type="text"
            placeholder="Adicione aqui uma tafera"
            id="addTasks "
          />
          <button type="submit">Adicionar</button>
        </form>
        <p>{inputValue}</p>
      </>
    );
  }
}

export default Main;
