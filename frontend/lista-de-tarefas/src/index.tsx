import React from 'react';
import ReactDOM from 'react-dom';
import ListaDeTarefas from './components/ListaDeTarefas';
import './App.css';

ReactDOM.render(
  <React.StrictMode>
    <div className="container">
      <ListaDeTarefas />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
