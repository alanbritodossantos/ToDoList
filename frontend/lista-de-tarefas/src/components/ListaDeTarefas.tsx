import React, { useEffect, useState } from "react";
import api from "../api";
import TarefaComponent from "./Tarefa";
import FiltroDeTarefas from "./FiltroDeTarefas";
import AdicionarTarefa from "./AdicionarTarefa";

interface Tarefa {
  id: number;
  titulo: string;
  finalizada: boolean;
}

const ListaDeTarefas: React.FC = () => {
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);

  useEffect(() => {
    carregarTarefas();
  }, []);

  const carregarTarefas = async (titulo: string = "", finalizada: boolean | null = null) => {
    try {
      const params = { titulo, finalizada };
      const response = await api.get("/tarefas", { params });
      setTarefas(response.data);
    } catch (error) {
      console.error("Erro ao carregar tarefas:", error);
      alert("Erro ao carregar tarefas. Tente novamente.");
    }
  };

  const handleFiltrar = (titulo: string, finalizada: boolean | null) => {
    carregarTarefas(titulo, finalizada);
  };

  const handleAtualizarTarefa = (id: number, titulo: string, finalizada: boolean) => {
    setTarefas(
      tarefas.map((tarefa) =>
        tarefa.id === id
          ? {
              ...tarefa,
              titulo,
              finalizada,
            }
          : tarefa
      )
    );
  };

  const handleDeletar = (id: number) => {
    setTarefas(tarefas.filter((tarefa) => tarefa.id !== id));
  };

  return (
    <>
    <h1 className="title">TO DO LIST</h1>
      <AdicionarTarefa />
      <FiltroDeTarefas onFiltrar={handleFiltrar} />
      <ul>
        {tarefas.map((tarefa) => (
          <TarefaComponent
            key={tarefa.id}
            tarefa={tarefa}
            onDeletar={handleDeletar}
            onAtualizar={handleAtualizarTarefa}
          />
        ))}
      </ul>
    </>
  );
};

export default ListaDeTarefas;
