import * as mongoDB from 'mongodb';
import { MongoClient } from 'mongodb';

const DB_URI = process.env.MONGODB_URI as string;
const DB_DB = process.env.MONGODB_DB as string;

export async function connectToDb() {
  const client: mongoDB.MongoClient = new MongoClient(DB_URI);

  await client.connect();

  const db: mongoDB.Db = client.db(DB_DB);

  return db;
}

export async function closeConnection() {
  const client: mongoDB.MongoClient = new MongoClient(DB_URI);
  const close = await client.close();
  return close;
}