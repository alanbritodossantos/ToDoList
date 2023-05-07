import React from "react";
import ListaDeTarefas from "./components/ListaDeTarefas";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Lista de Tarefas</h1>
      <ListaDeTarefas />
    </div>
  );
};

export default App;
