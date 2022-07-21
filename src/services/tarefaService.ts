import { mongoConnectDb, mongoDisconnect } from "../database/mongoConnection"
import { ObjectId } from "mongodb"

import { Tarefa } from "../interface/tarefa"

export const inserir = async (data: Tarefa) => {
  const newData = (await mongoConnectDb()).collection(`listaTarefas`).insertOne(data)
  mongoDisconnect()
  return newData
}
export const acharTodos = async () => {
  const data = (await mongoConnectDb()).collection(`listaTarefas`).find({}).toArray()
  mongoDisconnect()
  return data
}

export const acharUm = async (id: string) => {
  const data = (await mongoConnectDb()).collection(`listaTarefas`).findOne({ _id: new ObjectId(id) })
  mongoDisconnect()
  return data
}

export const remover = async (id: string) => {
  const data = (await mongoConnectDb()).collection(`listaTarefas`).deleteOne({ _id: id })
  return data
}

export const atualizar = async (id: string, data: Tarefa | any) => {
  return (await mongoConnectDb()).collection(`listaTarefas`).updateOne({ _id: new ObjectId(id) }, { $set: data })
}