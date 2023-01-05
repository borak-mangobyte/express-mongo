import { MongoClient } from 'mongodb'

export const client = new MongoClient('mongodb://127.0.0.1:27017/mydb')
export const db = client.db()
