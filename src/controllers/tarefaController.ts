import { acharTodos, acharUm, atualizar, inserir, remover } from "../services/tarefaService";

import { Tarefa } from "../interface/tarefa";

export const criarTarefa = (data: Tarefa) => {
    return inserir(data)
}

export const acharTodasTarefas = () => {
  return acharTodos()
}

export const acharUmaTarefa = (id: string) => {
  return acharUm(id)
}

export const removerTarefa = (id: string) => {
  return remover(id)
}

export const atualizarTarefa = (id: string, data: Tarefa | any) => {
  return atualizar(id, data)
}