import React, { useEffect, useState } from "react"
import { getDate } from "../../common/getDate"
import { criarTarefa, atualizarTarefa, removerTarefa, acharUmaTarefa, acharTodasTarefas } from "../../controllers/tarefaController"

import Input from "../../components/inserirTarefa/index"
import List from "../../components/listarTarefa/index"

import styles from "./App.module.scss"
import logo from "../public/logo192.png"

export const App: React.FC = () => {

  const [date, setDate] = useState(getDate())

  useEffect(() => {
    setTimeout(() => setDate(getDate()), 1000)
  }, [date, setDate])

  const [listaTarefas, setListaTarefas] = useState<any>([])

  const listItems = async () => {
    await acharTodasTarefas().then((data) => {
      setListaTarefas({ ...data })
    })
  }

  useEffect(() => {
    listItems()
  }, [])

  const criarTask = async(descricaoTarefa: string, date: string) => {
    const tarefa = {descricao: descricaoTarefa, dataTarefa: date}
    criarTarefa(tarefa)
    await listItems()
  }

  const alterarTask = async(id: string, descricaoTarefa: string, data: string) => {
    const tarefa = {descricao: descricaoTarefa, dataTarefa: date}
    await atualizarTarefa(id, tarefa)
    await listItems()
  }

  const excluirTask = async(id: string) => {
    await removerTarefa(id)
    await listItems()
  }

  return (
    <div className={styles.app}>
      <img
        src={logo}
        alt="React logo"/>
      <Input criar={criarTask}/>
      <List listaTarefas={listaTarefas} alterarTarefa={alterarTask} excluirTarefa={excluirTask}/>
    </div>
  )
}
