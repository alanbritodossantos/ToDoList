// src/components/FiltroDeTarefas.tsx

import React, { useState } from "react";

interface FiltroDeTarefasProps {
  onFiltrar: (titulo: string, finalizada: boolean | null) => void;
}

const FiltroDeTarefas: React.FC<FiltroDeTarefasProps> = ({ onFiltrar }) => {
  const [titulo, setTitulo] = useState("");
  const [filtro, setFiltro] = useState("todas");

  const handleFiltrar = () => {
    let finalizada: boolean | null = null;

    if (filtro === "finalizadas") {
      finalizada = true;
    } else if (filtro === "pendentes") {
      finalizada = false;
    }

    onFiltrar(titulo, finalizada);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Digite o título da tarefa"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
      />
      <select
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
      >
        <option value="todas">Todas</option>
        <option value="finalizadas">Finalizadas</option>
        <option value="pendentes">Pendentes</option>
      </select>
      <button onClick={handleFiltrar}>Filtrar</button>
    </div>
  );
};

export default FiltroDeTarefas;
