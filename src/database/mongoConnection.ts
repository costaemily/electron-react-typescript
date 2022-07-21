import { MongoClient } from 'mongodb'

const url = `mongodb://localhost:27017/electronchallenge`

async function mongoConnect() {
  return (await MongoClient.connect(url))
}

export async function mongoConnectDb() {
  return (await mongoConnect()).db(`electronchallenge`)
}

export async function mongoDisconnect() {
  return (await mongoConnect()).close()
}