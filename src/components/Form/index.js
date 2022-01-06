import React from 'react';
import PropTypes from 'prop-types';
import './form.css';

function Form({ handleFormSubmit, handleInputChange, inputValue }) {
  return (
    <form action="#" onSubmit={handleFormSubmit}>
      <input
        onChange={handleInputChange}
        type="text"
        placeholder="Adicione aqui uma tafera"
        id="addTasks"
        autoComplete="off"
        value={inputValue}
      />
      <button type="submit">
        <i class="fa fa-plus" aria-hidden="true"></i>
      </button>
    </form>
  );
}

Form.propTypes = {
  handleFormSubmit: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
};

export default Form;
