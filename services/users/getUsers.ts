import { connectToDb } from 'utils/mongodb';
import { ObjectId } from 'mongodb';

export const getOneUser = async (id: string) => {
  const db = await connectToDb();
  const user = await db
    .collection('users')
    .find({ _id: new ObjectId(id) })
    .sort({ _id: 1 })
    .toArray();

  return user[0];
};

export const getOneUserByName = async (name: string) => {
  const db = await connectToDb();
  const user = await db.collection('users').find({ name: name }).sort({ _id: 1 }).toArray();

  return user[0];
};

export const getAllUsers = async () => {
  const db = await connectToDb();
  const users = await db.collection('users').find().sort({ _id: 1 }).toArray();

  return users;
};
