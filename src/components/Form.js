import React, { Component } from 'react';
import './form.css';

class Form extends Component {
  state = {
    inputValue: '',
  };

  handleInputChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };
  render() {
    const { inputValue } = this.state;
    return (
      <form action="#">
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
    );
  }
}

export default Form;
