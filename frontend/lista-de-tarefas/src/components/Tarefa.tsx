import React, { useState } from "react";
import api from "../api";

interface TarefaProps {
  tarefa: {
    id: number;
    titulo: string;
    finalizada: boolean;
  };
  onDeletar: (id: number) => void;
  onAtualizar: (id: number, titulo: string, finalizada: boolean) => void;
}

const Tarefa: React.FC<TarefaProps> = ({ tarefa, onDeletar, onAtualizar }) => {
  const [editando, setEditando] = useState<boolean>(false);
  const [tituloEditado, setTituloEditado] = useState<string>(tarefa.titulo);
  const [finalizadaEditada, setFinalizadaEditada] = useState<boolean>(tarefa.finalizada);

  const handleEditar = () => {
    setEditando(true);
  };

  const handleCancelar = () => {
    setEditando(false);
  };

  const handleSalvar = async () => {
    try {
      await api.put(`/tarefas/${tarefa.id}`, { ...tarefa, titulo: tituloEditado, finalizada: finalizadaEditada });
      setEditando(false);
      onAtualizar(tarefa.id, tituloEditado, finalizadaEditada);
    } catch (error) {
      console.error("Erro ao atualizar tarefa:", error);
      alert("Erro ao atualizar tarefa. Tente novamente.");
    }
  };

  const handleDeletar = async () => {
    try {
      await api.delete(`/tarefas/${tarefa.id}`);
      onDeletar(tarefa.id);
    } catch (error) {
      console.error("Erro ao deletar tarefa:", error);
      alert("Erro ao deletar tarefa. Tente novamente.");
    }
  };

  return (
    <li>
      {editando ? (
        <>
          <input
            type="text"
            value={tituloEditado}
            onChange={(e) => setTituloEditado(e.target.value)}
          />
          <input
            type="checkbox"
            checked={finalizadaEditada}
            onChange={(e) => setFinalizadaEditada(e.target.checked)}
          />
          <button onClick={handleSalvar}>Salvar</button>
          <button onClick={handleCancelar}>Cancelar</button>
        </>
      ) : (
        <>
          <span>{tarefa.titulo}</span>
          <span>{tarefa.finalizada ? "Finalizada" : "Pendente"}</span>
          <div className="button-group">
            <button onClick={handleEditar}>Editar</button>
            <button onClick={handleDeletar}>Deletar</button>
          </div>
        </>
      )}
    </li>
  );
};

export default Tarefa;
