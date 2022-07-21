import { mongoConnectDb } from "../database/mongoConnection";

export async function createCollection() {
  return (await mongoConnectDb()).createCollection(`listaTarefas`, () => {
  })
}