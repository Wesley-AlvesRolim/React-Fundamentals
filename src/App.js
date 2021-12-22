import React from 'react';
import './style.css';
import Form from './components/Form/';
import Task from './components/Task/';

export default function App() {
  return (
    <div className="container">
      <label htmlFor="addTasks ">
        <h1>Lista de tarefas</h1>
      </label>
      <Form />
      <ul className="tasks">
        {tasks.map((task, index) => (
          <Task />
        ))}
      </ul>
    </div>
  );
}
