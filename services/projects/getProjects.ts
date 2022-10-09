import { connectToDb } from 'utils/mongodb';
import { ObjectId } from 'mongodb';

export const getOneProject = async (id: string) => {
  const db = await connectToDb();
  console.log('service id', id);
  const project = await db
    .collection('projects')
    .find({ _id: new ObjectId(id) })
    .sort({ _id: 1 })
    .toArray();

  return project[0];
};

export const getAllProjects = async () => {
  const db = await connectToDb();
  const projects = await db.collection('projects').find().sort({ _id: 1 }).toArray();

  return projects;
};
