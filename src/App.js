import React from "react";
import "./style.css";
import Main from "./components/Main";

export default function App() {
  return (
    <div className="container">
      <label htmlFor="addTasks ">
        <h1>Lista de tarefas</h1>
      </label>

      <Main />
    </div>
  );
}
