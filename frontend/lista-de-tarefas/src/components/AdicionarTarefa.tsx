// src/components/AdicionarTarefa.tsx

import React, { useState } from "react";
import api from "../api";

const AdicionarTarefa: React.FC = () => {
  const [titulo, setTitulo] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await api.post("/tarefas", { titulo, finalizada: false });
      setTitulo("");
      alert("Tarefa adicionada com sucesso!");
    } catch (error) {
      console.error("Erro ao adicionar tarefa:", error);
      alert("Erro ao adicionar tarefa. Tente novamente.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Adicionar tarefa..."
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
      />
      <button type="submit">Adicionar</button>
    </form>
  );
};

export default AdicionarTarefa;
