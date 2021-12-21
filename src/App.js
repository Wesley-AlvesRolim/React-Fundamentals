import React from 'react';
import './style.css';
import Form from './components/Form';

export default function App() {
  return (
    <div className="container">
      <label htmlFor="addTasks ">
        <h1>Lista de tarefas</h1>
      </label>
      <Form />
    </div>
  );
}
